const readingThemes = Object.freeze(["agents","evals","security","research","product","design","writing","context","models","infrastructure"]);

const weeklyIssues = [
  {
    "id": "2026-10-25",
    "shortLabel": "Oct 25–31",
    "dateRange": "October 25–31, 2026",
    "updated": "Updated October 28",
    "entries": [
      {
        "title": "Readable traces do not guarantee safety",
        "themes": ["security","evals"],
        "summary": "Google DeepMind reports that Gemini 4 Argon's reasoning is usually legible, but prompted evasion exposes monitoring gaps. Readability does not guarantee faithful reasoning or safe actions; on difficult coding tasks, concealing reasoning also reduced performance and subtlety.",
        "application": "Test a blind final-diff reviewer alongside tool-log checks in one coding workflow. Compare missed issues and false alarms on labeled benign and unsafe changes, while keeping authorization enforced in code.",
        "url": "https://storage.googleapis.com/deepmind-media/gemini/gemini_4_safety_report.pdf#page=113.10",
        "source": "Google DeepMind",
        "published": "October 2026",
        "related": [
          {
            "label": "Figure 3.22 — transparency and evasion (PDF page 114)",
            "url": "https://storage.googleapis.com/deepmind-media/gemini/gemini_4_safety_report.pdf#page=114"
          },
          {
            "label": "Monitor evasion — setup and methods (PDF page 119)",
            "url": "https://storage.googleapis.com/deepmind-media/gemini/gemini_4_safety_report.pdf#page=119"
          },
          {
            "label": "Chain of Thought Monitorability: A New and Fragile Opportunity for AI Safety",
            "url": "https://arxiv.org/abs/2507.11473"
          },
          {
            "label": "Aligned, Orthogonal or In-conflict: When can we safely optimize Chain-of-Thought?",
            "url": "https://arxiv.org/abs/2603.30036"
          }
        ]
      },
      {
        "title": "Keep benchmarks private during external evaluations",
        "themes": ["evals","security"],
        "summary": "A Google DeepMind pilot uses secure enclaves, remote attestation, and PySyft to test Gemini 2.5 Flash Lite on private benchmarks while protecting model weights and prompts. This reduces benchmark exposure, but depends on trusted hardware and reviewed software; it does not establish benchmark quality.",
        "application": "Freeze one held-out trace set and log the model and harness versions for each run. Keep raw examples out of prompt tuning; that is eval hygiene, not cryptographic privacy from an API provider.",
        "url": "https://deepmind.google/blog/piloting-the-worlds-first-double-blind-ai-evaluations/",
        "source": "Google DeepMind",
        "published": "August 27, 2026",
        "related": [
          {
            "label": "Double Blind Evals — technical report",
            "url": "https://storage.googleapis.com/deepmind-media/DeepMind.com/Blog/piloting-the-worlds-first-double-blind-ai-evaluations/double-blind-evaluations-technical-report.pdf"
          },
          {
            "label": "Verifiable trust in the AI era — Confidential Computing details",
            "url": "https://cloud.google.com/blog/products/identity-security/verifiable-trust-in-the-ai-era-whats-new-in-confidential-computing"
          },
          {
            "label": "Google Cloud — Confidential Computing overview",
            "url": "https://cloud.google.com/security/products/confidential-computing"
          }
        ]
      }
    ]
  },
  {
    "id": "2026-10-18",
    "shortLabel": "Oct 18–24",
    "dateRange": "October 18–24, 2026",
    "updated": "Updated October 28",
    "entries": [
      {
        "title": "Test agent harness edits by comparing traces",
        "themes": ["agents","evals"],
        "summary": "Harness² keeps model weights fixed while testing edits to prompts, tools, memory, and orchestration across tasks without ground-truth labels. Reported benchmark gains are scoped research results, and unrestricted network access can leak public answers into evaluations.",
        "application": "Save a baseline trace for one recurring workflow and change one tool description. Run both versions on held-out tasks with network access blocked, compare the traces, and keep the edit only if outcomes improve.",
        "url": "https://x.com/hmsk/status/2111319218692280472?s=46",
        "handle": "@hmsk",
        "published": "October 17, 2026",
        "related": [
          {
            "label": "Harness² — repository, results, and setup",
            "url": "https://github.com/google-research/harness2"
          },
          {
            "label": "Harness² — research paper",
            "url": "https://arxiv.org/abs/2610.14224"
          }
        ]
      }
    ]
  },
  {
    "id": "2026-10-11",
    "shortLabel": "Oct 11–17",
    "dateRange": "October 11–17, 2026",
    "updated": "Updated October 28",
    "entries": [
      {
        "title": "Keep agent secrets in scoped machine keychains",
        "themes": ["security","infrastructure"],
        "summary": "Storing read-only 1Password service-account tokens in the macOS login keychain lets unattended scripts fetch secrets per call without chat transcripts or constant biometric prompts. However, any process under that macOS user can read cached values, and stored tokens can go stale.",
        "application": "Replace one environment-variable secret with a per-call macOS keychain lookup from a read-only service account. Prove the credential works by running one authenticated read-only API call and checking the returned data.",
        "url": "https://daniellemorrill.com/blog/how-my-agents-use-my-passwords",
        "handle": "@daniellemorrill",
        "published": "October 11, 2026",
        "related": [
          {
            "label": "@daniellemorrill — original post",
            "url": "https://x.com/daniellemorrill/status/2109294081814003919?s=46"
          },
          {
            "label": "1Password — service accounts overview",
            "url": "https://www.1password.dev/service-accounts"
          },
          {
            "label": "1Password — use a service account with the CLI",
            "url": "https://www.1password.dev/service-accounts/use-with-1password-cli"
          },
          {
            "label": "Apple — Keychain Access guide",
            "url": "https://support.apple.com/guide/keychain-access/welcome/mac"
          }
        ]
      },
      {
        "title": "Match prompts, environments, graders, and task intent",
        "themes": ["evals","agents"],
        "summary": "Sound reinforcement learning tasks align a fair prompt, a realistic environment, an accurate verifier, and a clear target skill. Because models exploit weak graders to earn rewards without meeting human intent, semi-verifiable work still requires expert human review.",
        "application": "Run an adversarial prompt against one existing evaluation grader to pass the check with a bad answer. Inspect the passing trace, then add one rule that blocks the shortcut while allowing valid solutions.",
        "url": "https://x.com/gottliebeli/status/2110077216260608037?s=46",
        "handle": "@gottliebeli",
        "published": "October 13, 2026",
        "related": [
          {
            "label": "Humanlike task prompts — referenced work",
            "url": "https://x.com/humansand/status/2098115046438215791?s=20"
          },
          {
            "label": "Prime Agent — orchestration system",
            "url": "https://x.com/PrimeIntellect/status/2085086999267144083?s=20"
          }
        ]
      },
      {
        "title": "Build workflow value around swappable models",
        "themes": ["product","agents"],
        "summary": "Agent products may build durable value through domain connectors, expert evaluations, clear permissions, human review, and failure logs around swappable models. Claims about fragile retention, messy internal data, and agent insurance demand remain informal observations rather than measured market data.",
        "application": "Pick one agent tool you run and ask whether a stronger model makes your evaluation and review setup more useful or redundant. Write down which permission rules and failure logs stay necessary either way.",
        "url": "https://x.com/gregisenberg/status/2110414696037716372?s=46",
        "handle": "@gregisenberg",
        "published": "October 14, 2026"
      },
      {
        "title": "Test explanations before calling neurons tangled",
        "themes": ["research","models"],
        "summary": "A neuron firing on both cats and cars may detect a shared shape hidden by visualization quirks rather than unrelated concepts. Using agents to scale circuit tests is a working hypothesis, and large language models are not yet fully mapped.",
        "application": "When a chart or failure cluster looks strange in your next trace review, check the grouping query before blaming the model. Inspect three raw examples to see if the summary view hid a simple pattern.",
        "url": "https://already-clean.goodfire.com/",
        "handle": "@nickcammarata",
        "published": "October 15, 2026",
        "related": [
          {
            "label": "@nickcammarata — original post",
            "url": "https://x.com/nickcammarata/status/2110757819427574056?s=20"
          },
          {
            "label": "Neural Networks Are Already Clean — text version",
            "url": "https://already-clean.goodfire.com/essay.md"
          },
          {
            "label": "Zoom In — earlier circuits research revisited in the essay",
            "url": "https://distill.pub/2020/circuits/zoom-in/"
          },
          {
            "label": "Rich Sutton — The Bitter Lesson",
            "url": "https://www.incompleteideas.net/IncIdeas/BitterLesson.html"
          }
        ]
      }
    ]
  },
  {
    "id": "2026-09-27",
    "shortLabel": "Sep 27–Oct 3",
    "dateRange": "September 27–October 3, 2026",
    "updated": "Updated October 28",
    "entries": [
      {
        "title": "Give coding agents concrete interface references",
        "themes": ["design"],
        "summary": "Coding agents build generic screens when given vague style words. Supplying real reference flows separates layout, component adaptation, and motion choices from surface styling. Note that the post includes sponsored and affiliate links for Mobbin.",
        "application": "Before asking an agent to adjust a mobile view, save two screenshots that handle dense data well. List their spacing and type rules as prompt constraints, then compare the rendered screen against those screenshots.",
        "url": "https://griffinwooldridge.com/blog/ai-ui-design-reference-sites",
        "published": "September 1, 2026",
        "related": [
          {
            "label": "Refero — complete product flows and visual systems",
            "url": "https://refero.design/"
          },
          {
            "label": "Mobbin — searchable real-product screens and flows",
            "url": "https://mobbin.com/"
          },
          {
            "label": "21st.dev — production-ready interface components",
            "url": "https://21st.dev/"
          },
          {
            "label": "Transitions.dev — interface motion patterns",
            "url": "https://transitions.dev/"
          },
          {
            "label": "Beautiful UI — components for AI-native products",
            "url": "https://beautifului.dev/"
          }
        ]
      },
      {
        "title": "Secure agent environments beyond a single sandbox",
        "themes": ["security","agents"],
        "summary": "When reinforcement learning environments use networks, packages, subprocesses, and credentials across thousands of tasks, a sandbox alone is not enough. Security requires least privilege, constraint training, logs stored outside agent write permissions, working kill switches, and incident practice.",
        "application": "Check that your agent process lacks permission to edit or delete its execution logs. Then start a disposable test run and trigger your manual stop command to confirm it halts immediately.",
        "url": "https://x.com/joedaroo/status/2104335929293127851?s=46",
        "handle": "@joedaroo",
        "published": "September 27, 2026",
        "related": [
          {
            "label": "OpenAI — Navier–Stokes solution",
            "url": "https://openai.com/index/navier-stokes-solution/"
          },
          {
            "label": "Sam Altman — the data scale behind frontier training",
            "url": "https://x.com/sama/status/2103567198690349362?s=20"
          },
          {
            "label": "Jakub Pachocki — An alien mind",
            "url": "https://openai.com/index/an-alien-mind/"
          }
        ]
      },
      {
        "title": "Own every sentence in AI-assisted writing",
        "themes": ["writing"],
        "summary": "Generative tools make it easy to turn a short prompt into a long document, shifting effort from writer to reader. A clear writing policy requires authors to own every claim, write to sharpen thinking, and cut fluff.",
        "application": "On your next short note or guide, use a model to critique structure or trim extra words if helpful, then verify every claim yourself and cut any sentence that slows down phone reading.",
        "url": "https://x.com/vxanand/status/2104576879415988453?s=46",
        "handle": "@vxanand",
        "published": "September 28, 2026",
        "related": [
          {
            "label": "Clay — full AI Writing Policy",
            "url": "https://x.com/vxanand/status/2104576879415988453/photo/1"
          }
        ]
      },
      {
        "title": "Let models search large contexts with code",
        "themes": ["context","agents"],
        "summary": "Recursive language models keep a huge prompt in a code variable so the root model can search, slice, and delegate pieces instead of reading everything at once. Early tests show gains, but samples are small and runtime or cost can spike.",
        "application": "Pick one task with huge trace logs and test a sandboxed Python search loop against simple keyword retrieval. Set strict step and time limits, save the code trajectory, and compare answer accuracy.",
        "url": "https://alexzhang13.github.io/blog/2025/rlm/",
        "published": "October 15, 2025",
        "related": [
          {
            "label": "RLM paper — full preprint",
            "url": "https://www.alphaxiv.org/abs/2512.24601"
          },
          {
            "label": "RLM — official codebase",
            "url": "https://github.com/alexzhang13/rlm"
          },
          {
            "label": "RLM Minimal — small reference implementation",
            "url": "https://github.com/alexzhang13/rlm-minimal"
          },
          {
            "label": "Anthropic — effective context engineering",
            "url": "https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents"
          },
          {
            "label": "OOLONG — long-context reasoning benchmark",
            "url": "https://openreview.net/forum?id=lrDr6dmXOX"
          },
          {
            "label": "BrowseComp-Plus — deep-research benchmark",
            "url": "https://arxiv.org/abs/2508.06600"
          },
          {
            "label": "CodeAct — executable code actions for agents",
            "url": "https://openreview.net/forum?id=jJ9BoXAfFa"
          },
          {
            "label": "LoCoDiff — long-output diff benchmark",
            "url": "https://abanteai.github.io/LoCoDiff-bench/"
          }
        ]
      }
    ]
  },
  {
    "id": "2026-09-20",
    "shortLabel": "Sep 20–26",
    "dateRange": "September 20–26, 2026",
    "updated": "Updated October 28",
    "entries": [
      {
        "title": "Turn failed production traces into eval tests",
        "themes": ["evals","agents"],
        "summary": "Production traces expose messy failures that clean benchmarks miss. Grouping failed runs, adding real examples to your eval suite, fixing prompts from observed errors, and cutting extra tool calls turns raw logs into steady harness gains.",
        "application": "Group ten recent failed or slow traces by cause and add the most common failure to your eval suite. Change one prompt or tool rule, then check that task correctness holds while steps drop.",
        "url": "https://x.com/manthanguptaa/status/2103000094823817217?s=20",
        "handle": "@manthanguptaa",
        "published": "September 24, 2026"
      },
      {
        "title": "Separate measured AI trends from broad visions",
        "themes": ["product","models"],
        "summary": "Reading the AI shift well means separating product visions, service models, macro conditions, compute bets, falling inference costs, and lab metrics. Keeping these layers distinct prevents mixing hard cost trends with long-range forecasts.",
        "application": "In your next reading notes or teaching outline, tag each external claim as a measured trend, a vendor pitch, or a long-term forecast so speculative claims do not drive near-term tool choices.",
        "url": "https://x.com/ParadisLabs/status/2103609970553983286?s=20",
        "handle": "@ParadisLabs",
        "published": "September 25, 2026",
        "related": [
          {
            "label": "Alexandr Wang — Why I’m Building Muse",
            "url": "https://x.com/alexandr_wang/status/2103551714536439951"
          },
          {
            "label": "Greg Isenberg — AI-native services: a $100B opportunity",
            "url": "https://x.com/gregisenberg/status/2101760050108797268"
          },
          {
            "label": "Franklin Templeton — Macro Views: Growth Holds, Pressure Builds",
            "url": "https://www.franklintempleton.com/articles/en/2026/09/macro-views-growth-holds-pressure-builds"
          },
          {
            "label": "Google — Behind Project Suncatcher",
            "url": "https://blog.google/innovation-and-ai/models-and-research/google-research/google-project-suncatcher-facts/"
          },
          {
            "label": "Epoch AI — The plunging price of thought",
            "url": "https://epoch.ai/publications/the-plunging-price-of-thought"
          },
          {
            "label": "Anthropic — Measurements for understanding the pace of AI development",
            "url": "https://www.anthropic.com/institute/measuring-pace-of-ai-development"
          }
        ]
      }
    ]
  },
  {
    "id": "2026-09-13",
    "shortLabel": "Sep 13–19",
    "dateRange": "September 13–19, 2026",
    "updated": "Updated October 28",
    "entries": [
      {
        "title": "Use documentation skills for small typed checks",
        "themes": ["agents","evals"],
        "summary": "The TypeSafe skill points coding agents to current docs to structure typed model judgments in code, though the skill itself does not run live inference or monitoring. Because model outputs remain probabilistic, small checks still need evaluation.",
        "application": "Optionally test the TypeSafe skill by writing a small check that labels a claim as supported, contradicted, or insufficient against its source note. Score it on ten labeled examples before trusting its output.",
        "url": "https://x.com/LLMpsycho/status/2101341190150852677",
        "handle": "@LLMpsycho",
        "published": "September 19, 2026"
      },
      {
        "title": "Watch for instruction drift before stopping agents",
        "themes": ["security","evals"],
        "summary": "Checking worker output and Git diffs against repository rules lets a supervisor estimate instruction drift during a run. This setup is an early experiment rather than a proven method, and a drift score is not automatic permission to act.",
        "application": "Log a midpoint instruction check during five coding runs in observation-only mode. Compare those warnings against the final Git diffs to count false alarms before letting any policy stop a run.",
        "url": "https://x.com/JoshARosen/status/2101346654406217965",
        "handle": "@JoshARosen",
        "published": "September 19, 2026"
      },
      {
        "title": "Expose small agent decisions instead of one score",
        "themes": ["agents","product"],
        "summary": "Agent runs rely on small bounded choices like routing, risk checks, and context selection that are easier to audit separately than inside one score. The post's rankings and speed, cost, and zero-hallucination claims are unverified.",
        "application": "Open a decision heatmap or relevance matrix view on your phone and check whether each cell shows the specific judgment clearly while keeping routing and permissions in plain code.",
        "url": "https://x.com/grok/status/2101071508567150743",
        "handle": "@grok",
        "published": "September 18, 2026"
      },
      {
        "title": "Match agent autonomy to risk and recoverability",
        "themes": ["agents","security"],
        "summary": "Legacy systems hide rules in team habits, dependencies, and live traffic. Safe agent work scales autonomy by blast radius, observability, and recoverability, using risk zones, behavior-locking tests, and short notes on constraints the code does not show.",
        "application": "Before an agent edits an unfamiliar module, ask it for a short summary of hidden constraints and one test locking current behavior. Review both, then turn any fix you make into a reusable rule.",
        "url": "https://addyo.substack.com/p/brownfield-agentic-engineering",
        "published": "September 14, 2026"
      },
      {
        "title": "Separate decision-model design from launch claims",
        "themes": ["models","evals"],
        "summary": "Models trained to output action choices or probabilities for routing and ranking could complement text generators on high-volume work. However, vendor claims of 20–200× faster speed and 40–400× lower cost need independent testing.",
        "application": "Keep small decision models in mind for routing or triage, but hold off on changing any workflow until you can measure latency, accuracy, and probability calibration on your own labeled eval set.",
        "url": "https://x.com/hot_town/status/2100459012315639944?s=20",
        "handle": "@hot_town",
        "published": "September 17, 2026"
      }
    ]
  }
];
