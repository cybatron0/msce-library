var subjects = window.subjects = {
      mathematics: {
        title: "📐 Mathematics",
        subtitle: "Core MSCE subject — strong algebra and graphs make a big difference.",
        body: `
          <h3>What to prioritise</h3>
          <ul>
            <li>Algebra: factorisation, simultaneous equations, polynomials, remainder theorem</li>
            <li>Trigonometry and identities</li>
            <li>Mensuration (especially surface area and volume of 3D shapes)</li>
            <li>Statistics (ungrouped and grouped data) and Probability</li>
            <li>Vectors, Sets, Coordinate geometry</li>
            <li>Graphs and Linear programming</li>
          </ul>
          <div class="study-tip">
            <strong>Study tip:</strong> Practise showing every step clearly. Method marks are easy points if your working is neat and logical.
          </div>
          <h3>Exam approach</h3>
          <ul>
            <li>Paper I often tests breadth — don’t skip any topic completely</li>
            <li>Paper II rewards deeper problem-solving — practise multi-step questions</li>
            <li>Always check units and final answers</li>
          </ul>
        `,
        links: [
          { name: "Mathematics past papers (external)", url: "https://kizitochikuni.com/pdfs?subject=mathematics&grade=Form+4" }
        ]
      },
      biology: {
        title: "🧬 Biology",
        subtitle: "Very popular subject. Essay-style questions on systems and ecology appear often.",
        body: `
          <h3>High-yield areas</h3>
          <ul>
            <li>Cell structure and specialised cells</li>
            <li>Human systems: digestion, respiration, circulation, reproduction, excretion</li>
            <li>First-line and second-line defence mechanisms</li>
            <li>Plant processes: photosynthesis, transport, tropisms</li>
            <li>Ecology, food chains/webs and human impact</li>
            <li>Genetics, inheritance and evolution</li>
            <li>Diseases, immunity and control measures</li>
          </ul>
          <div class="study-tip">
            <strong>Study tip:</strong> Practise writing structured answers (point + explanation + example). Diagrams must be large, clear and fully labelled.
          </div>
          <h3>Exam approach</h3>
          <ul>
            <li>“Describe any five…” questions are common — prepare lists with explanations</li>
            <li>Learn processes in sequence (e.g. blood clotting, breathing mechanism)</li>
            <li>Link theory to everyday or Malawian examples where possible</li>
          </ul>
        `,
        links: [
          { name: "Biology past papers (external)", url: "https://kizitochikuni.com/pdfs?subject=biology&grade=Form+4" }
        ]
      },
      chemistry: {
        title: "⚗️ Chemistry",
        subtitle: "Focus on understanding reactions, not only memorising equations.",
        body: `
          <h3>High-yield areas</h3>
          <ul>
            <li>Atomic structure and the Periodic Table</li>
            <li>Chemical bonding and writing formulae</li>
            <li>Acids, bases and salts</li>
            <li>Stoichiometry and the mole concept</li>
            <li>Organic chemistry basics</li>
            <li>Electrolysis and industrial processes</li>
          </ul>
          <div class="study-tip">
            <strong>Study tip:</strong> Practise balancing equations and mole calculations every day. These skills transfer across many questions.
          </div>
        `,
        links: [
          { name: "Chemistry past papers (external)", url: "https://kizitochikuni.com/pdfs?subject=chemistry&grade=Form+4" }
        ]
      },
      physics: {
        title: "⚡ Physics / Physical Science",
        subtitle: "Formulae, units and clear diagrams win marks.",
        body: `
          <h3>High-yield areas</h3>
          <ul>
            <li>Motion, forces and Newton’s laws</li>
            <li>Work, energy and power</li>
            <li>Electricity and magnetism</li>
            <li>Light, lenses and refraction</li>
            <li>Waves, sound and heat</li>
            <li>Gas laws and simple machines</li>
          </ul>
          <div class="study-tip">
            <strong>Study tip:</strong> Always write the formula, substitute values with units, then calculate. Partial marks are common when working is shown.
          </div>
        `,
        links: [
          { name: "Physics past papers (external)", url: "https://kizitochikuni.com/pdfs?subject=physics&grade=Form+4" }
        ]
      },
      agriculture: {
        title: "🌱 Agriculture",
        subtitle: "Practical knowledge of Malawi farming systems scores well.",
        body: `
          <h3>High-yield areas</h3>
          <ul>
            <li>Soil types, fertility and conservation</li>
            <li>Crop production, pests and diseases</li>
            <li>Livestock and animal health</li>
            <li>Farm tools, records and marketing</li>
            <li>Environmental management</li>
          </ul>
          <div class="study-tip">
            <strong>Study tip:</strong> Use local crop and livestock examples. Examiners value applied understanding.
          </div>
        `,
        links: [
          { name: "Agriculture resources (external)", url: "https://kizitochikuni.com/pdfs" }
        ]
      },
      computer: {
        title: "💻 Computer Studies",
        subtitle: "Theory plus practical application of common software tools.",
        body: `
          <h3>High-yield areas</h3>
          <ul>
            <li>Hardware and software</li>
            <li>Word processing, spreadsheets and databases</li>
            <li>Internet, email and online safety</li>
            <li>Algorithms and flowcharts</li>
            <li>Ethics, security and ICT in society</li>
          </ul>
          <div class="study-tip">
            <strong>Study tip:</strong> Practise drawing clear flowcharts and explaining steps in algorithms.
          </div>
        `,
        links: [
          { name: "Computer Studies resources (external)", url: "https://kizitochikuni.com/pdfs" }
        ]
      },
      english: {
        title: "✍️ English",
        subtitle: "Compulsory. Summary, composition and comprehension decide many grades.",
        body: `
          <h3>High-yield areas</h3>
          <ul>
            <li>Summary writing</li>
            <li>Composition: formal letters, argumentative and descriptive essays</li>
            <li>Comprehension with accurate grammar</li>
            <li>Literature analysis where applicable</li>
          </ul>
          <div class="study-tip">
            <strong>Study tip:</strong> Time yourself writing full compositions. Plan (intro–body–conclusion) before you write.
          </div>
        `,
        links: [
          { name: "English past papers (external)", url: "https://kizitochikuni.com/pdfs?subject=english&grade=Form+4" }
        ]
      },
      geography: {
        title: "🌍 Geography",
        subtitle: "Map work and Malawi case studies appear every year.",
        body: `
          <h3>High-yield areas</h3>
          <ul>
            <li>Map reading and interpretation</li>
            <li>Climate and weather systems</li>
            <li>Population, settlement and migration</li>
            <li>Agriculture and environmental issues (Malawi focus)</li>
          </ul>
          <div class="study-tip">
            <strong>Study tip:</strong> Practise map skills weekly — scale, direction, contours and land use.
          </div>
        `,
        links: [
          { name: "Geography past papers (external)", url: "https://kizitochikuni.com/pdfs?subject=geography&grade=Form+4" }
        ]
      },
      history: {
        title: "📜 History",
        subtitle: "Chronology and clear explanation of cause and effect matter most.",
        body: `
          <h3>High-yield areas</h3>
          <ul>
            <li>Pre-colonial societies in Malawi</li>
            <li>Colonial rule and its impact</li>
            <li>Struggle for independence</li>
            <li>Post-independence developments</li>
            <li>Regional and international relations</li>
          </ul>
          <div class="study-tip">
            <strong>Study tip:</strong> Build timelines and practise essay plans with PEEL paragraphs (Point, Evidence, Explain, Link).
          </div>
        `,
        links: [
          { name: "History past papers (external)", url: "https://kizitochikuni.com/pdfs?subject=history&grade=Form+4" }
        ]
      },
      chichewa: {
        title: "🗣️ Chichewa",
        subtitle: "Comprehension, composition and correct language use.",
        body: `
          <h3>High-yield areas</h3>
          <ul>
            <li>Comprehension and summary</li>
            <li>Composition (formal and informal)</li>
            <li>Grammar and language use</li>
            <li>Literature / culture questions</li>
          </ul>
          <div class="study-tip">
            <strong>Study tip:</strong> Read Chichewa texts regularly and practise writing full compositions under time pressure.
          </div>
        `,
        links: [
          { name: "Chichewa resources (external)", url: "https://kizitochikuni.com/pdfs" }
        ]
      },
      bible: {
        title: "✝️ Bible Knowledge",
        subtitle: "Knowledge of key passages plus application to Christian living.",
        body: `
          <h3>High-yield areas</h3>
          <ul>
            <li>Life and teachings of Jesus</li>
            <li>Early Church (Acts)</li>
            <li>Old Testament prophets and events</li>
            <li>Christian living and ethics</li>
          </ul>
          <div class="study-tip">
            <strong>Study tip:</strong> Learn key stories with references and practise application questions (“What does this teach about…?”).
          </div>
        `,
        links: [
          { name: "Bible Knowledge resources (external)", url: "https://kizitochikuni.com/pdfs" }
        ]
      },
      "life-skills": {
        title: "🤝 Life Skills / Social Studies",
        subtitle: "Applied knowledge about health, citizenship and decision-making.",
        body: `
          <h3>High-yield areas</h3>
          <ul>
            <li>Personal development and decisions</li>
            <li>Health, hygiene and HIV awareness</li>
            <li>Citizenship and human rights</li>
            <li>Family, relationships and gender</li>
            <li>Entrepreneurship and work</li>
          </ul>
          <div class="study-tip">
            <strong>Study tip:</strong> Use practical examples from daily life in Malawi. Examiners value applied understanding, not just definitions.
          </div>
        `,
        links: [
          { name: "Related resources (external)", url: "https://kizitochikuni.com/pdfs" }
        ]
      }
    };
