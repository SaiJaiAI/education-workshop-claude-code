import { useState } from "react";
import { motion } from "framer-motion";
import { Check, CalendarDays, MapPin, ArrowRight, BookOpen, Target, ListChecks, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function LandingPage() {
  const [email, setEmail] = useState("");
  const waitlistUrl = "https://forms.gle/your-form-id"; // ← ใส่ลิงก์ Google Form จริงที่นี่

  const features = [
    {
      icon: <Target className="w-5 h-5" />, title: "วัตถุประสงค์",
      items: [
        "เข้าใจแนวคิด Agentic Coding Assistant และกรอบการทำงานแบบมีเครื่องมือช่วย (tool use)",
        "ประยุกต์ใช้ Claude Code เพื่อเร่งงานเขียนโค้ด รีวิว และทดสอบอย่างเป็นระบบ",
        "ออกแบบเวิร์กโฟลว์ที่ปลอดภัย ตรวจสอบได้ และลดความผิดพลาด",
      ],
    },
    {
      icon: <BookOpen className="w-5 h-5" />, title: "กลุ่มเป้าหมาย",
      items: [
        "วิศวกรซอฟต์แวร์ / Tech lead",
        "ผู้พัฒนาผลิตภัณฑ์ที่ต้องการยกระดับ productivity",
        "ผู้จัดการทีมที่กำหนดมาตรฐานคุณภาพโค้ดและการรีวิว",
      ],
    },
  ];

  const curriculum = [
    {
      week: "โมดูล 1",
      title: "ภาพรวม Agentic Coding & Claude Code",
      bullets: [
        "Agentic AI คืออะไร และความต่างจากโค้ดแชตทั่วไป",
        "สถาปัตยกรรมของ Claude Code และศักยภาพด้านโค้ด",
        "แนวทางบริหารความเสี่ยง: hallucination, security, privacy",
      ],
    },
    {
      week: "โมดูล 2",
      title: "ตั้งค่าและเครื่องมือประกอบ",
      bullets: [
        "การใช้งานกับ IDE/CLI และการตั้งค่าโปรเจกต์",
        "การใช้เครื่องมือ (tools) เช่น run/test, repo browse, context",
        "แนวทางป้อนงาน: prompt patterns สำหรับงานโค้ด",
      ],
    },
    {
      week: "โมดูล 3",
      title: "ออกแบบเวิร์กโฟลว์แบบ Agentic",
      bullets: [
        "Task decomposition และ planning",
        "Loop: สร้าง → รัน → อ่านผล → ปรับปรุง",
        "การประสานงานกับระบบเวอร์ชันคอนโทรลและ CI",
      ],
    },
    {
      week: "โมดูล 4",
      title: "Hand-on Lab: จากโจทย์สู่โค้ดคุณภาพ",
      bullets: [
        "แปลงสเปกเป็นโครงสร้างโปรเจกต์",
        "เขียนโค้ดพร้อมทดสอบอัตโนมัติ (TDD-friendly)",
        "รีวิวโค้ดและทำ refactor ด้วย Claude Code",
      ],
    },
    {
      week: "โมดูล 5",
      title: "การประเมินผล & แนวปฏิบัติที่ดี",
      bullets: [
        "ตัวชี้วัดคุณภาพ (ความถูกต้อง, ความครอบคลุมของเทสต์, ความสามารถในการดูแลต่อ)",
        "เทคนิคลดข้อผิดพลาดและตั้งค่า guardrails",
        "ข้อจำกัดที่พบบ่อยและวิธีรับมือ",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      {/* Navbar */}
      <nav className="px-6 md:px-10 py-4 flex items-center justify-between">
        <div className="font-semibold text-lg">Claude Code Workshop (TH)</div>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#curriculum" className="hover:underline">หลักสูตร</a>
          <a href="#details" className="hover:underline">รายละเอียด</a>
          <a href="#faq" className="hover:underline">คำถามที่พบบ่อย</a>
          <Button asChild className="rounded-2xl">
            <a href={waitlistUrl} target="_blank" rel="noreferrer">เข้าร่วม Waitlist</a>
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <header className="px-6 md:px-10 py-12 md:py-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              เวิร์กช็อป "Claude Code: Agentic Coding Assistant" (ภาษาไทย)
            </h1>
            <p className="mt-4 text-slate-600 text-lg">
              ฝึกใช้ผู้ช่วยเขียนโค้ดแบบ Agentic อย่างมีประสิทธิภาพ ตั้งแต่การออกแบบเวิร์กโฟลว์ การเขียนและทดสอบ ไปจนถึงรีวิวและปรับปรุงโค้ด — ยกระดับความเร็วและคุณภาพการพัฒนาอย่างยั่งยืน
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="rounded-2xl">
                <a href={waitlistUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                  เข้าร่วม Waitlist <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <a href="#curriculum" className="text-sm underline">ดูหลักสูตร</a>
            </div>
            <p className="mt-4 text-xs text-slate-500">
              อ้างอิงเนื้อหาและแรงบันดาลใจจากบทเรียนสั้นของ DeepLearning.AI: <a className="underline" href="https://www.deeplearning.ai/short-courses/claude-code-a-highly-agentic-coding-assistant" target="_blank" rel="noreferrer">Claude Code — A Highly Agentic Coding Assistant</a>
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
            <Card className="rounded-2xl shadow-md">
              <CardHeader>
                <CardTitle className="text-xl">ภาพรวมกิจกรรม</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex items-center gap-2"><CalendarDays className="w-4 h-4" /><span>วันที่: <strong>TBD</strong></span></div>
                <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /><span>สถานที่: <strong>TBD</strong></span></div>
                <div className="flex items-start gap-2">
                  <ListChecks className="w-4 h-4 mt-0.5" />
                  <span>รูปแบบ: เวิร์กช็อปแบบลงมือทำ (เครื่องของผู้เรียน) + กรณีศึกษา</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-0.5" />
                  <span>ผู้เข้าร่วมควรมีพื้นฐานการพัฒนาเว็บ/สคริปต์ และ Git ขั้นพื้นฐาน</span>
                </div>
                <div className="pt-2">
                  <Button asChild className="w-full rounded-2xl">
                    <a href={waitlistUrl} target="_blank" rel="noreferrer">จองสิทธิ์ใน Waitlist</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </header>

      {/* Objectives & Audience */}
      <section className="px-6 md:px-10 py-8">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {features.map((f, idx) => (
            <Card key={idx} className="rounded-2xl">
              <CardHeader className="flex flex-row items-center gap-3">
                {f.icon}
                <CardTitle className="text-lg">{f.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-600">
                <ul className="space-y-2">
                  {f.items.map((it, i) => (
                    <li key={i} className="flex gap-2"><Check className="w-4 h-4 mt-0.5 shrink-0" /> <span>{it}</span></li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Curriculum */}
      <section id="curriculum" className="px-6 md:px-10 py-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold">หลักสูตร (Curriculum)</h2>
          <p className="mt-2 text-slate-600">ปรับเนื้อหาเป็นภาษาไทย โดยอ้างอิงแนวคิดหลักจากคอร์สของ DeepLearning.AI และต่อยอดด้วยแฮนด์ออนเชิงปฏิบัติ</p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {curriculum.map((c, idx) => (
              <Card key={idx} className="rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-base text-slate-700">{c.week}: {c.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-600">
                  <ul className="space-y-2">
                    {c.bullets.map((b, i) => (
                      <li key={i} className="flex gap-2"><Check className="w-4 h-4 mt-0.5 shrink-0" /> <span>{b}</span></li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Details */}
      <section id="details" className="px-6 md:px-10 py-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 items-start">
          <Card className="rounded-2xl md:col-span-2">
            <CardHeader>
              <CardTitle className="text-xl">รายละเอียดเชิงปฏิบัติ</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-600 space-y-3">
              <div>
                <div className="font-semibold text-slate-800">สิ่งที่ผู้เรียนจะได้รับ</div>
                <ul className="mt-2 space-y-2">
                  <li className="flex gap-2"><Check className="w-4 h-4 mt-0.5" />เวิร์กบุ๊กและสคริปต์ตัวอย่างสำหรับนำไปใช้ในทีม</li>
                  <li className="flex gap-2"><Check className="w-4 h-4 mt-0.5" />แนวทางตั้งค่าและเช็กลิสต์ความปลอดภัย/ความเป็นส่วนตัว</li>
                  <li className="flex gap-2"><Check className="w-4 h-4 mt-0.5" />เทมเพลต prompt และแพทเทิร์นสำหรับงานโค้ด</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold text-slate-800">ข้อกำหนดเบื้องต้น</div>
                <ul className="mt-2 space-y-2">
                  <li className="flex gap-2"><Check className="w-4 h-4 mt-0.5" />โน้ตบุ๊กส่วนตัว พร้อมสิทธิ์ติดตั้งแพ็กเกจ</li>
                  <li className="flex gap-2"><Check className="w-4 h-4 mt-0.5" />บัญชีที่เข้าถึง Claude Code (หรือเทียบเท่าตามประกาศผู้จัด)</li>
                  <li className="flex gap-2"><Check className="w-4 h-4 mt-0.5" />ความคุ้นเคยกับ Git, CLI, และการรันเทสต์</li>
                </ul>
              </div>
              <div className="pt-3">
                <Button asChild className="rounded-2xl">
                  <a href={waitlistUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2">สมัคร Waitlist <ArrowRight className="w-4 h-4" /></a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="text-xl">ประกาศวัน–สถานที่</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-600 space-y-2">
              <div className="flex items-center gap-2"><CalendarDays className="w-4 h-4" />วันที่: <strong className="ml-1">TBD</strong></div>
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4" />สถานที่: <strong className="ml-1">TBD</strong></div>
              <p className="text-xs text-slate-500">* จะอัปเดตข้อมูลให้ผู้ที่อยู่ในรายชื่อ Waitlist ทางอีเมล</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-6 md:px-10 py-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold">คำถามที่พบบ่อย</h3>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="text-base">เวิร์กช็อปนี้แตกต่างจากการดูวิดีโออย่างไร?</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-600">
                เน้นลงมือทำกับโจทย์จริง มีผู้สอน/โค้ชคอยช่วยไกด์เวิร์กโฟลว์และการคิดเชิงระบบ เพื่อลด trial-and-error
              </CardContent>
            </Card>
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="text-base">จำเป็นต้องใช้ภาษาอะไร?</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-600">
                เนื้อหามุ่งแนวคิดและเวิร์กโฟลว์ จึงใช้ได้กับหลายภาษา (เช่น Python, TypeScript) ตัวอย่างในแล็บจะมีให้เลือก
              </CardContent>
            </Card>
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="text-base">จะได้รับเอกสาร/เทมเพลตหรือไม่?</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-600">
                ผู้เข้าร่วมทุกคนจะได้รับเวิร์กบุ๊ก ไกด์ไลน์ และเทมเพลต prompt สำหรับนำไปใช้งานต่อในทีม
              </CardContent>
            </Card>
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="text-base">มีระดับความยากเพียงใด?</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-600">
                เหมาะสำหรับผู้มีพื้นฐานการพัฒนาอยู่แล้ว ผู้เริ่มต้นใหม่ด้านโค้ดอาจต้องเตรียมพื้นฐานก่อนเข้าร่วม
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-10 py-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="text-sm text-slate-500">
            © {new Date().getFullYear()} Claude Code Workshop (TH). เนื้อหาอ้างอิงจาก DeepLearning.AI (ลิงก์ด้านบน)
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.open(`${waitlistUrl}?email=${encodeURIComponent(email)}`, "_blank");
            }}
            className="flex items-center gap-2 w-full md:w-auto"
          >
            <Input
              type="email"
              placeholder="อีเมลของคุณ"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-2xl"
              required
            />
            <Button type="submit" className="rounded-2xl flex items-center gap-2">
              เข้าร่วม Waitlist <ArrowRight className="w-4 h-4" />
            </Button>
          </form>
        </div>
      </footer>
    </div>
  );
}