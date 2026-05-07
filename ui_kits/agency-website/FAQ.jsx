const QUESTIONS = [
  {
    q: "How long does a build take?",
    a: "The Starter ships in about two weeks. The Builder runs four to six. The Works takes eight to twelve, depending on scope. Faster than most agencies; slower than a template you'd hate in a month.",
  },
  {
    q: "Do you do retainers?",
    a: "We don't sell them. After launch you get a stretch of free tweaks (30/60/365 days). After that, hourly or a small care plan if you want one.",
  },
  {
    q: "What about the AI stuff — is it real or hype?",
    a: "Real, narrow, useful. We build assistants and automations that handle specific things: bookings, FAQs, lead intake, follow-up email. We don't ship a chatbot for the sake of it.",
  },
  {
    q: "Do I own what you build?",
    a: "Always. Code, content, accounts, domains. We hand you the keys at launch and you keep them.",
  },
  {
    q: "Can you work with my existing brand?",
    a: "Yes. If your logo and colors are working, we'll work with them. If they're not, we'll say so.",
  },
];

function FAQItem({ q, a, open, onToggle }) {
  return (
    <div className={"bb-faq__item" + (open ? " is-open" : "")}>
      <button className="bb-faq__q" onClick={onToggle}>
        <span>{q}</span>
        <span className="bb-faq__chev" aria-hidden="true">{open ? "–" : "+"}</span>
      </button>
      {open && <div className="bb-faq__a">{a}</div>}
    </div>
  );
}

function FAQ() {
  const [openIdx, setOpenIdx] = React.useState(0);
  return (
    <section id="faq" className="bb-faq">
      <div className="bb-faq__head">
        <div className="bb-eyebrow">✦ Questions You'll Ask ✦</div>
        <h2 className="bb-h1">Straight answers,<br/>no runaround.</h2>
      </div>
      <div className="bb-faq__list">
        {QUESTIONS.map((item, i) => (
          <FAQItem key={item.q} q={item.q} a={item.a} open={openIdx === i}
            onToggle={() => setOpenIdx(openIdx === i ? -1 : i)} />
        ))}
      </div>
    </section>
  );
}
window.FAQ = FAQ;
