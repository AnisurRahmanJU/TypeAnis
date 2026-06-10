/* ==========================================================================
   1. WORD & SENTENCE POOLS (Meaningful Sentences with Punctuation)
   ========================================================================== */
const englishSentences = [
    ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog."],
    ["Practice", "makes", "a", "man", "perfect", "in", "every", "aspect", "of", "life."],
    ["Honesty", "is", "the", "best", "policy", "to", "build", "a", "great", "network."],
    ["Technology", "is", "changing", "the", "world", "with", "amazing", "software", "tools."],
    ["Keep", "your", "eyes", "on", "the", "stars", "and", "your", "feet", "on", "the", "ground."],
    ["Every", "solution", "starts", "with", "a", "clear", "and", "focused", "mindset."],
    ["Success", "comes", "to", "those", "who", "work", "hard", "every", "single", "day."],
    ["A", "journey", "of", "thousand", "miles", "begins", "with", "a", "single", "step."],
    ["Time", "and", "tide", "wait", "for", "no", "man", "in", "this", "world."],
    ["Knowledge", "is", "power", "when", "applied", "to", "solve", "real", "problems."],
    ["Clean", "code", "always", "looks", "like", "it", "was", "written", "by", "someone."],
    ["The", "best", "way", "to", "predict", "the", "future", "is", "to", "create."],
    ["Learning", "never", "exhausts", "the", "mind", "of", "a", "creative", "person."],
    ["Innovation", "distinguishes", "between", "a", "leader", "and", "a", "follower", "in", "life."],
    ["Make", "it", "work", "make", "it", "right", "make", "it", "fast", "always."],
    ["Simplicity", "is", "the", "ultimate", "sophistication", "in", "every", "modern", "software", "architecture."],
    ["Great", "things", "are", "done", "by", "a", "series", "of", "small", "things."],
    ["Opportunities", "dont", "happen", "you", "create", "them", "with", "your", "own", "efforts."],
    ["Believe", "you", "can", "and", "you", "are", "halfway", "there", "to", "victory."],
    ["Failure", "is", "simply", "the", "opportunity", "to", "begin", "again", "more", "intelligently."],
    ["Quality", "is", "not", "an", "act", "it", "is", "a", "good", "habit."],
    ["The", "only", "way", "to", "do", "great", "work", "is", "to", "love."],
    ["Do", "what", "you", "can", "with", "what", "you", "have", "where", "you."],
    ["Dream", "big", "and", "dare", "to", "fail", "for", "ultimate", "glory."],
    ["Stay", "hungry", "stay", "foolish", "as", "the", "great", "minds", "always", "said."],
    ["An", "investment", "in", "knowledge", "pays", "the", "best", "interest", "for", "all."],
    ["It", "always", "seems", "impossible", "until", "it", "is", "done", "successfully", "today."],
    ["The", "secret", "of", "getting", "ahead", "is", "simply", "getting", "started", "now."],
    ["Action", "is", "the", "foundational", "key", "to", "all", "types", "of", "success."],
    ["Focus", "on", "being", "productive", "instead", "of", "just", "being", "busy", "always."],
    ["Your", "time", "is", "limited", "so", "dont", "waste", "it", "living", "life."],
    ["The", "mind", "is", "everything", "what", "you", "think", "you", "become", "eventually."],
    ["Happiness", "depends", "upon", "ourselves", "and", "how", "we", "treat", "our", "mind."],
    ["Change", "your", "thoughts", "and", "you", "change", "your", "entire", "world", "instantly."],
    ["Determine", "your", "wheels", "and", "never", "give", "up", "on", "your", "dreams."],
    ["The", "root", "of", "education", "is", "bitter", "but", "the", "fruit", "is."],
    ["Consistency", "is", "the", "bridge", "between", "your", "goals", "and", "ultimate", "accomplishment."],
    ["The", "best", "revenge", "is", "massive", "success", "in", "your", "professional", "career."],
    ["Do", "not", "count", "the", "days", "make", "the", "days", "count", "instead."],
    ["Everything", "you", "have", "ever", "wanted", "is", "on", "the", "other", "side."],
    ["Go", "confident", "in", "the", "direction", "of", "your", "deepest", "dreams", "today."],
    ["Life", "is", "what", "happens", "when", "you", "are", "busy", "making", "plans."],
    ["Limit", "your", "words", "and", "let", "your", "actions", "speak", "for", "themselves."],
    ["No", "pressure", "no", "diamonds", "as", "nature", "teaches", "us", "every", "day."],
    ["A", "good", "programmer", "is", "someone", "who", "looks", "both", "ways", "before."],
    ["Logic", "will", "get", "you", "from", "A", "to", "Z", "imagination", "everywhere."],
    ["The", "only", "limit", "to", "our", "realization", "of", "tomorrow", "is", "today."],
    ["Strive", "not", "to", "be", "a", "success", "but", "rather", "of", "value."],
    ["The", "purpose", "of", "our", "lives", "is", "to", "be", "happy", "together."],
    ["Get", "busy", "living", "or", "get", "busy", "dying", "choice", "is", "yours."],
    ["You", "only", "live", "once", "but", "if", "you", "do", "it", "right."],
    ["Never", "let", "the", "fear", "of", "striking", "out", "keep", "you", "playing."],
    ["Money", "and", "success", "dont", "change", "people", "they", "merely", "amplify", "reality."],
    ["Not", "how", "long", "but", "how", "well", "you", "have", "lived", "matters."],
    ["If", "life", "were", "predictable", "it", "would", "cease", "to", "be", "life."],
    ["The", "whole", "secret", "of", "a", "successful", "life", "is", "to", "find."],
    ["In", "order", "to", "write", "about", "life", "first", "you", "must", "live."],
    ["The", "big", "lesson", "in", "life", "is", "never", "be", "scared", "of."],
    ["Turn", "your", "wounds", "into", "wisdom", "and", "keep", "moving", "forward", "strongly."],
    ["Live", "for", "each", "day", "and", "enjoy", "the", "present", "moment", "fully."],
    ["Good", "health", "is", "the", "real", "wealth", "not", "pieces", "of", "gold."],
    ["The", "unexamined", "life", "is", "not", "worth", "living", "for", "any", "human."],
    ["Your", "imagination", "is", "your", "preview", "of", "lifes", "coming", "attractions", "always."],
    ["The", "quieter", "you", "become", "the", "more", "you", "are", "able", "to."],
    ["A", "room", "without", "books", "is", "like", "a", "body", "without", "soul."],
    ["Be", "the", "change", "that", "you", "wish", "to", "see", "in", "world."],
    ["If", "you", "tell", "the", "truth", "you", "dont", "have", "to", "remember."],
    ["Always", "forgive", "your", "enemies", "nothing", "annoys", "them", "so", "much", "more."],
    ["To", "live", "is", "the", "rarest", "thing", "in", "the", "entire", "universe."],
    ["Live", "as", "if", "you", "were", "to", "die", "tomorrow", "learn", "always."],
    ["We", "accept", "the", "love", "we", "think", "we", "deserve", "in", "life."],
    ["There", "is", "no", "greater", "agony", "than", "bearing", "an", "untold", "story."],
    ["Everything", "you", "can", "imagine", "is", "completely", "real", "in", "your", "mind."],
    ["You", "can", "never", "be", "overdressed", "or", "overeducated", "in", "this", "society."],
    ["I", "have", "not", "failed", "I", "have", "just", "found", "wrong", "ways."],
    ["If", "you", "dont", "stand", "for", "something", "you", "will", "fall", "for."],
    ["Do", "one", "thing", "every", "day", "that", "scares", "you", "the", "most."],
    ["We", "are", "all", "in", "the", "gutter", "but", "some", "look", "at."],
    ["Hard", "work", "beats", "talent", "when", "talent", "fails", "to", "work", "hard."],
    ["If", "you", "want", "to", "shine", "like", "sun", "first", "burn", "like."],
    ["The", "best", "way", "to", "find", "yourself", "is", "to", "lose", "yourself."],
    ["Be", "yourself", "everyone", "else", "is", "already", "taken", "by", "someone", "else."],
    ["True", "wisdom", "comes", "to", "each", "of", "us", "when", "we", "realize."],
    ["An", "unexamined", "life", "is", "not", "worth", "living", "for", "a", "human."],
    ["Never", "stop", "learning", "because", "life", "never", "stops", "teaching", "us", "lessons."],
    ["The", "only", "true", "wisdom", "is", "in", "knowing", "you", "know", "nothing."],
    ["Doubt", "kills", "more", "dreams", "than", "failure", "ever", "will", "in", "life."],
    ["The", "purpose", "of", "art", "is", "washing", "the", "dust", "of", "daily."],
    ["Science", "is", "what", "you", "know", "philosophy", "is", "what", "you", "dont."],
    ["Invention", "is", "the", "mother", "of", "necessity", "in", "every", "growing", "industry."],
    ["Computers", "are", "good", "at", "following", "instructions", "but", "not", "at", "reading."],
    ["The", "hardware", "is", "the", "parts", "of", "a", "computer", "that", "can."],
    ["Software", "is", "a", "great", "combination", "of", "art", "and", "pure", "engineering."],
    ["Debugging", "is", "like", "being", "the", "detective", "in", "a", "crime", "movie."],
    ["Testing", "leads", "to", "failure", "and", "failure", "leads", "to", "understanding", "everything."],
    ["Every", "great", "developer", "was", "once", "a", "beginner", "who", "never", "quit."],
    ["Talk", "is", "cheap", "show", "me", "the", "working", "source", "code", "instead."],
    ["Stay", "focused", "on", "your", "goals", "and", "let", "the", "noise", "fade."],
    ["The", "matrix", "of", "life", "requires", "a", "perfect", "balance", "of", "logic."],
    ["Every", "cipher", "has", "a", "key", "and", "every", "problem", "has", "solution."],
    ["Keep", "moving", "forward", "one", "step", "at", "a", "time", "towards", "dreams."]
];

const banglaSentences = [
    ["আমাদের", "ছোট", "নদীতে", "বংশী", "নদীর", "মাছ", "ভেসে", "ওঠে", "চাঁদের", "আলোয়।"],
    ["বাংলাদেশ", "একটি", "নদী", "মাতৃক", "সুন্দর", "দেশ", "আমি", "তোমায়", "ভালোবাসি।"],
    ["পরিশ্রম", "সৌভাগ্যের", "প্রসূতি", "তাই", "সবাই", "একত্রে", "কাজ", "করুন।"],
    ["দুঃখ", "কষ্ট", "মানুষের", "জীবনকে", "স্মার্ট", "ও", "শক্তিশালী", "করে", "তোলে।"],
    ["হাঁস", "এবং", "বিড়াল", "পাহাড়ের", "কাছে", "কাঁচের", "থালায়", "খাবার", "খায়।"],
    ["জ্ঞানের", "আলো", "মানুষের", "ভেতরের", "অন্ধকার", "সম্পূর্ণরূপে", "দূর", "করে", "দিতে", "পারে।"],
    ["সকাল", "বেলা", "পাখির", "কাকলি", "মনকে", "অনেক", "বেশি", "শান্ত", "ও", "পবিত্র", "করে।"],
    ["নিয়মিত", "ব্যায়াম", "শরীর", "এবং", "মন", "দুইই", "সবল", "রাখতে", "সাহায্য", "করে।"],
    ["সময়", "কাউকে", "দয়া", "করে", "না", "তাই", "সময়ের", "সঠিক", "ব্যবহার", "করুন।"],
    ["প্রযুক্তির", "সঠিক", "ব্যবহার", "আমাদের", "জীবনকে", "অনেক", "সহজ", "ও", "সুন্দর", "করেছে।"],
    ["শিক্ষা", "জাতির", "মেরুদণ্ড", "তাই", "সবার", "জন্য", "শিক্ষা", "নিশ্চিত", "করা", "প্রয়োজন।"],
    ["সবুজ", "প্রকৃতি", "আমাদের", "চোখ", "এবং", "মনকে", "মুহূর্তের", "মধ্যে", "জুড়িয়ে", "দেয়।"],
    ["পরনিন্দা", "করা", "ভালো", "নয়", "নিজের", "কাজের", "প্রতি", "মনোযোগী", "হওয়া", "উচিত।"],
    ["সততা", "সর্বোত্তম", "পন্থা", "এই", "কথাটি", "আমাদের", "সবসময়", "মনে", "রাখতে", "হবে।"],
    ["ধৈর্য", "ধারণ", "করলে", "যেকোনো", "কঠিন", "পরিস্থিতি", "সহজে", "মোকাবেলা", "করা", "সম্ভব।"],
    ["গাছ", "আমাদের", "পরম", "বন্ধু", "তাই", "বেশি", "করে", "গাছ", "লাগানো", "দরকার।"],
    ["বই", "পড়ার", "অভ্যাস", "মানুষের", "চিন্তাভাবনাকে", "অনেক", "উন্নত", "ও", "প্রসারিত", "করে।"],
    ["মিথ্যা", "বলা", "মহা", "পাপ", "সবসময়", "সত্য", "কথা", "বলার", "অভ্যাস", "করুন।"],
    ["ছাত্রজীবন", "হলো", "ভবিষ্যত", "গড়ার", "সবচেয়ে", "উপযুক্ত", "এবং", "মূল্যবান", "সময়।"],
    ["মা", "বাবাকে", "শ্রদ্ধা", "করা", "আমাদের", "সবার", "প্রথম", "ও", "প্রধান", "দায়িত্ব।"],
    ["খেলাধুলা", "করলে", "শরীরের", "রক্ত", "সঞ্চালন", "বৃদ্ধি", "পায়", "এবং", "মন", "ভালো।"],
    ["পরিষ্কার", "পরিচ্ছন্নতা", "ঈমানের", "অঙ্গ", "তাই", "নিজেদের", "চারপাশ", "পরিচ্ছন্ন", "রাখুন।"],
    ["দেশপ্রেম", "একটি", "মহৎ", "গুণ", "নিজের", "দেশকে", "সবাই", "অনেক", "ভালোবাসে।"],
    ["নদীর", "কলকল", "ধ্বনি", "শুনলে", "সব", "ক্লান্তি", "নিমেষেই", "দূর", "হয়ে", "যায়।"],
    ["আজকের", "শিশু", "আগামী", "দিনের", "ভবিষ্যত", "তাদের", "সঠিকভাবে", "গড়ে", "তুলতে", "হবে।"],
    ["একতাই", "বল", "সবাই", "মিলে", "মিশে", "থাকলে", "যেকোনো", "কাজ", "সহজ", "হয়।"],
    ["বিনয়ী", "মানুষকে", "সবাই", "পছন্দ", "করে", "এবং", "সমাজে", "সম্মান", "দেয়।"],
    ["শীতের", "সকালে", "গরম", "পিঠা", "খাওয়ার", "আনন্দ", "অন্যরকম", "এক", "অনুভূতি।"],
    ["বর্ষার", "রিমঝিম", "বৃষ্টি", "প্রকৃতিকে", "এক", "নতুন", "রূপ", "দান", "করে।"],
    ["কঠিন", "অধ্যবসায়", "ছাড়া", "জীবনে", "কোনো", "বড়", "সাফল্য", "অর্জন", "করা", "যায়না।"],
    ["ছোটদের", "স্নেহ", "করুন", "এবং", "বড়দের", "সবসময়", "যথাযথ", "সম্মান", "প্রদর্শন", "করুন।"],
    ["অলসতা", "মানুষের", "সবচেয়ে", "বড়", "শত্রু", "যা", "জীবনকে", "ধ্বংসের", "দিকে", "নিয়ে।"],
    ["নিয়মাবর্তিতা", "মেনে", "চললে", "যেকোনো", "কাজে", "সফলতা", "আসা", "একদম", "নিশ্চিত।"],
    ["কৃষক", "আমাদের", "অন্ন", "জোগান", "তাই", "তাদের", "কখনো", "ছোট", "করে", "দেখা।"],
    ["সুন্দর", "ব্যবহার", "দিয়ে", "শত্রুকেও", "সহজে", "আপন", "করে", "নেওয়া", "সম্ভব।"],
    ["লোভে", "পাপ", "পাপে", "মৃত্যু", "এই", "চিরন্তন", "সত্যটি", "কখনো", "ভুলবেন।"],
    ["বিপদের", "সময়", "বন্ধুর", "পরিচয়", "পাওয়া", "যায়", "প্রকৃত", "বন্ধুই", "পাশে", "থাকে।"],
    ["ভোরবেলা", "ঘুমাতে", "ওঠা", "স্বাস্থ্যের", "জন্য", "অনেক", "বেশি", "উপকারী", "একটি", "অভ্যাস।"],
    ["মনোযোগ", "সহকারে", "পড়ালেখা", "করলে", "পরীক্ষায়", "ভালো", "ফলাফল", "করা", "সহজ।"],
    ["জ্ঞানী", "লোকেরা", "কম", "কথা", "বলেন", "এবং", "বেশি", "কাজ", "করতে", "পছন্দ।"],
    ["অতীতের", "ভুল", "থেকে", "শিক্ষা", "নিয়ে", "ভবিষ্যতের", "পথ", "চলতে", "হবে।"],
    ["ক্ষমা", "একটি", "মহৎ", "গুণ", "অন্যকে", "ক্ষমা", "করতে", "শিখলে", "মন", "শান্ত।"],
    ["ইন্টারনেট", "আমাদের", "যোগাযোগ", "ব্যবস্থাকে", "পুরোপুরি", "হাতের", "মুঠোয়", "নিয়ে", "এসেছে।"],
    ["গাছের", "মিষ্টি", "ফল", "খেতে", "সবাই", "অনেক", "বেশি", "পছন্দ", "করে।"],
    ["সূর্য", "পূর্ব", "দিকে", "ওঠে", "এবং", "পশ্চিম", "দিকে", "অস্ত", "যায়", "নিয়মিত।"],
    ["রাতের", "আকাশে", "হাজার", "তারার", "মেলা", "দেখতে", "খুব", "চমৎকার", "লাগে।"],
    ["কাউকে", "ছোট", "করে", "কথা", "বলা", "উচিত", "নয়", "সবার", "আত্মসম্মান", "আছে।"],
    ["নিয়মিত", "বই", "কিনুন", "এবং", "জ্ঞান", "চর্চাকে", "সবসময়", "আপডেট", "রাখুন।"],
    ["সাফল্যের", "কোনো", "সংক্ষিপ্ত", "পথ", "নেই", "কঠোর", "পরিশ্রমই", "একমাত্র", "উপায়।"],
    ["বসন্ত", "কালে", "কোকিলের", "মধুর", "গান", "প্রকৃতিকে", "মুখরিত", "করে", "তোলে।"],
    ["নিজের", "কাজ", "নিজে", "করা", "গৌরবের", "বিষয়", "এতে", "লজ্জার", "কিছু", "নেই।"],
    ["সবুজ", "শাকসবজি", "খাওয়া", "স্বাস্থ্যের", "জন্য", "অত্যন্ত", "প্রয়োজনীয়", "এবং", "উপকারী।"],
    ["অন্ধকার", "রাতের", "পর", "সুন্দর", "সোনালী", "সকাল", "অবশ্যই", "আসে", "জীবনে।"],
    ["ধনী", "দরিদ্র", "সবাইকে", "সমান", "নজরে", "দেখা", "উচিত", "সামাজিক", "ক্ষেত্রে।"],
    ["কোনো", "কাজই", "ছোট", "নয়", "সব", "পেশার", "মানুষকে", "সম্মান", "করতে", "হবে।"],
    ["মনকে", "সবসময়", "প্রফুল্ল", "রাখুন", "এতে", "শরীরের", "অনেক", "অসুখ", "ভালো", "হয়।"],
    ["সৎ", "সঙ্গে", "স্বর্গবাস", "অসৎ", "সঙ্গে", "সর্বনাশ", "কথাটি", "বাস্তবে", "সত্য।"],
    ["জ্ঞানের", "কোনো", "সীমা", "নেই", "যত", "পড়বেন", "তত", "নতুন", "কিছু", "শিখবেন।"],
    ["প্রকৃতি", "আমাদের", "অনেক", "কিছু", "দেয়", "তাই", "প্রকৃতির", "যত্ন", "নেওয়া", "উচিত।"],
    ["কষ্ট", "বিনা", "কেষ্ট", "মেলে", "না", "তাই", "জীবনে", "কষ্ট", "করতে", "হবে।"],
    ["পানির", "অপর", "নাম", "জীবন", "তাই", "বিশুদ্ধ", "পানি", "পান", "করা", "জরুরি।"],
    ["সহযোগিতার", "হাত", "বাড়িয়ে", "দিলে", "যেকোনো", "কঠিন", "সমস্যা", "সহজে", "সমাধান", "হয়।"],
    ["ভালো", "বই", "মানুষের", "শ্রেষ্ঠ", "সঙ্গী", "যা", "কখনো", "বিপদে", "ছেড়ে", "যায়না।"],
    ["ছোট", "ছোট", "বালুকণা", "বিন্দু", "বিন্দু", "জল", "গড়ে", "তোলে", "মহাদেশ", "অতল।"],
    ["মিষ্টি", "কথা", "বলে", "মানুষের", "মন", "সহজে", "জয়", "করা", "সম্ভব", "সবসময়।"],
    ["অন্যায়ের", "প্রতিবাদ", "করা", "আমাদের", "সবার", "নৈতিক", "দায়িত্ব", "ও", "কর্তব্য।"],
    ["পাখিরা", "মুক্ত", "আকাশে", "ডানা", "মেলে", "উড়ে", "বেড়াতে", "খুব", "ভালোবাসে।"],
    ["আইন", "মেনে", "চলা", "সচেতন", "নাগরিকের", "প্রধান", "লক্ষণ", "ও", "বৈশিষ্ট্য।"],
    ["নিয়মিত", "ডায়েরি", "লিখলে", "নিজের", "ভুলত্রুটি", "সহজে", "ধরে", "ফেলা", "সম্ভব", "হয়।"],
    ["হতাশ", "হবেন", "না", "আল্লাহর", "উপর", "সবসময়", "দৃঢ়", "বিশ্বাস", "রাখুন।"],
    ["সময়ের", "এক", "ফোঁড়", "অসময়ের", "দশ", "ফোঁড়", "কাজ", "সময়মতো", "করা", "উচিত।"],
    ["সুন্দর", "একটি", "হাসি", "অনেক", "কষ্ট", "সহজে", "ভুলিয়ে", "দিতে", "পারে", "মুহূর্তেই।"],
    ["কম্পিউটার", "প্রোগ্রামিং", "হলো", "যুক্তি", "দিয়ে", "নতুন", "কিছু", "তৈরি", "করার", "শিল্প।"],
    ["কোডিং", "করার", "সময়", "মনোযোগ", "ধরে", "রাখা", "খুবই", "জরুরি", "একটি", "বিষয়।"],
    ["চলক", "এবং", "ধ্রুবক", "এর", "ব্যবহার", "গণিতে", "প্রচুর", "পরিমাণে", "দেখা", "যায়।"],
    ["ফাংশন", "তৈরি", "করলে", "কোড", "অনেক", "বেশি", "পরিষ্কার", "ও", "সুন্দর", "দেখায়।"],
    ["কীবোর্ডের", "বাটন", "চেপে", "আমরা", "আমাদের", "মনের", "ভাব", "লিখতে", "পারি।"],
    ["ডিজিটাল", "বাংলাদেশ", "এখন", "বাস্তবতা", "সবার", "হাতে", "এখন", "স্মার্টফোন", "রয়েছে।"],
    ["গোপন", "সংকেত", "ব্যবহার", "করে", "তথ্য", "সুরক্ষিত", "রাখা", "খুবই", "সহজ", "পদ্ধতি।"],
    ["গণিত", "আমাদের", "লজিক্যাল", "চিন্তাভাবনা", "অনেক", "বেশি", "উন্নত", "করে", "তোলে।"],
    ["ইতিহাস", "থেকে", "আমরা", "আমাদের", "অতীত", "সম্পর্কে", "অনেক", "জানতে", "পারি।"],
    ["ব্যাকরণ", "সঠিকভাবে", "না", "জানলে", "ভাষা", "শুদ্ধভাবে", "বলা", "বা", "লেখা", "যায়না।"],
    ["বিশ্ববিদ্যালয়", "হলো", "উচ্চশিক্ষা", "ও", "মুক্ত", "বুদ্ধি", "চর্চার", "প্রধান", "কেন্দ্রস্থল।"],
    ["শিক্ষক", "আমাদের", "সঠিক", "পথ", "দেখিয়ে", "মানুষ", "হতে", "সাহায্য", "করেন।"],
    ["বন্ধুত্ব", "হলো", "পৃথিবীর", "সবচেয়ে", "পবিত্র", "ও", "সুন্দর", "সম্পর্কগুলোর", "একটি।"],
    ["পরিবার", "আমাদের", "সবচেয়ে", "নিরাপদ", "আশ্রয়স্থল", "যেখানে", "আমরা", "বড়", "হই।"],
    ["ভবিষ্যতের", "পরিকল্পনা", "এখনই", "ঠিক", "করে", "নিয়ে", "কাজ", "শুরু", "করা", "উচিত।"],
    ["গ্রামের", "শান্ত", "পরিবেশ", "মনকে", "নিমেষেই", "ভালো", "করে", "দিতে", "পারে।"],
    ["বিজয়", "দিবস", "আমাদের", "গৌরবের", "দিন", "এই", "দিনটিকে", "শ্রদ্ধা", "জানাই।"],
    ["নিয়মিত", "অনুশীলন", "টাইপিং", "স্পিড", "অনেক", "বেশি", "বাড়িয়ে", "দেয়", "সবার।"],
    ["কনসোলে", "কোড", "রান", "করে", "আউটপুট", "দেখার", "আনন্দ", "অনেক", "বেশি।"],
    ["বর্গ", "এবং", "পার্থক্য", "এর", "হিসাব", "ক্রিপ্টোগ্রাফিতে", "অনেক", "গুরুত্বপূর্ণ", "ভূমিকা", "রাখে।"],
    ["গতিশীল", "জীবন", "সবসময়", "আমাদের", "নতুন", "কিছু", "শিখতে", "অনুপ্রাণিত", "করে।"],
    ["বাস্তব", "জীবন", "কল্পনার", "চেয়ে", "অনেক", "বেশি", "কঠিন", "ও", "চ্যালেঞ্জিং", "হয়।"],
    ["স্বপ্ন", "দেখতে", "জানলে", "একদিন", "তা", "বাস্তবায়ন", "করা", "সম্ভব", "হয়।"],
    ["সাফল্য", "সহজে", "আসে", "না", "এর", "পেছনে", "থাকে", "অনেক", "ত্যাগ।"],
    ["কবিতা", "মানুষের", "ভেতরের", "আবেগ", "ও", "অনুভূতিকে", "সুন্দরভাবে", "প্রকাশ", "করে।"],
    ["বই", "পড়া", "কখনো", "বৃথা", "যায়", "না", "জ্ঞান", "সবসময়", "বৃদ্ধি", "পায়।"],
    ["কলম", "দিয়ে", "আমরা", "আমাদের", "ইতিহাস", "ও", "সংস্কৃতি", "লিখে", "রাখি।"],
    ["সমাজ", "উন্নয়নে", "তরুণদের", "ভূমিকা", "সবচেয়ে", "বেশি", "গুরুত্বপূর্ণ", "বলে", "বিবেচিত।"],
    ["জীবন", "একটি", "সুন্দর", "যুদ্ধ", "এখানে", "প্রতিদিন", "নতুন", "কিছু", "শিখতে", "হয়।"]
];

/* ==========================================================================
   2. STATE VARIABLES
   ========================================================================== */
let currentWords = [];
let wordIndex = 0;
let charIndex = 0;
let errors = 0;
let totalTyped = 0;
let isBanglaMode = false;
let errorTracker = {};

let timeLeft = 60; 
let timerInterval = null;
let isTestActive = false;
let hasStarted = false;
let expectedInputLength = 0;

/* ==========================================================================
   3. DOM ELEMENT REFERENCES
   ========================================================================== */
const wordsDisplay = document.getElementById("words-display");
const hiddenInput = document.getElementById("hidden-input");
const keyboardWrapper = document.getElementById("keyboard");
const wpmDisplay = document.getElementById("wpm");
const accuracyDisplay = document.getElementById("accuracy");
const wordCountDisplay = document.getElementById("word-count");
const timerDisplay = document.getElementById("timer-val");
const btnEn = document.getElementById("btn-en");
const btnBn = document.getElementById("btn-bn");
const restartBtn = document.getElementById("restart-btn");

const resultModal = document.getElementById("result-modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const resWpm = document.getElementById("res-wpm");
const resAcc = document.getElementById("res-acc");
const resTyped = document.getElementById("res-typed");
const resErrors = document.getElementById("res-errors");

/* ==========================================================================
   4. ENGINE CORE & INITIALIZATION
   ========================================================================== */
function initTest(mode) {
    clearInterval(timerInterval);
    timerInterval = null;
    
    timeLeft = 60;
    isTestActive = true;
    hasStarted = false;
    
    wordIndex = 0;
    charIndex = 0;
    errors = 0;
    totalTyped = 0;
    errorTracker = {};
    expectedInputLength = 0;
    
    timerDisplay.innerText = "60s";
    wpmDisplay.innerText = "0";
    accuracyDisplay.innerText = "0"; 
    
    isBanglaMode = mode === "bn";
    keyboardWrapper.setAttribute("data-layout", mode);
    
    let sourcePool = isBanglaMode ? [...banglaSentences] : [...englishSentences];
    sourcePool.sort(() => Math.random() - 0.5);
    
    currentWords = [];
    let poolIndex = 0;
    
    while (currentWords.length < 30) {
        currentWords.push(...sourcePool[poolIndex % sourcePool.length]);
        poolIndex++;
    }
    
    wordCountDisplay.innerText = `0/${currentWords.length}`;
    renderWords();
    hiddenInput.disabled = false;
    hiddenInput.value = "";
    hiddenInput.focus();
}

function renderWords() {
    wordsDisplay.innerHTML = "";
    currentWords.forEach((word, wIdx) => {
        const wordSpan = document.createElement("span");
        wordSpan.className = "word";
        wordSpan.id = `w-${wIdx}`;
        
        word.split("").forEach((char, cIdx) => {
            const charSpan = document.createElement("span");
            charSpan.className = "char";
            charSpan.id = `w-${wIdx}-c-${cIdx}`;
            charSpan.innerText = char;
            wordSpan.appendChild(charSpan);
        });
        
        if (wIdx < currentWords.length - 1) {
            const spaceSpan = document.createElement("span");
            spaceSpan.className = "char space-char";
            spaceSpan.id = `w-${wIdx}-space`;
            spaceSpan.innerHTML = "&nbsp;";
            wordSpan.appendChild(spaceSpan);
        }
        wordsDisplay.appendChild(wordSpan);
    });
    markCurrentChar();
}

/* ==========================================================================
   5. GAMEPLAY & TEXT INPUT PROCESSING
   ========================================================================== */
function updateSuggestedKey() {
    document.querySelectorAll(".key.suggest-orange").forEach(el => el.classList.remove("suggest-orange"));
    if (!isTestActive || wordIndex >= currentWords.length) return;
    
    const currentWord = currentWords[wordIndex];
    let targetChar = " ";
    if (charIndex < currentWord.length) {
        targetChar = currentWord[charIndex];
    }
    
    const keys = document.querySelectorAll(".key");
    for (let keyEl of keys) {
        const dataKeys = keyEl.getAttribute("data-key");
        if (dataKeys && dataKeys.split(" ").includes(targetChar)) {
            keyEl.classList.add("suggest-orange");
            break;
        }
    }
}

function markCurrentChar() {
    document.querySelectorAll(".char.current").forEach(el => el.classList.remove("current"));
    if (!isTestActive) return;

    let currentEl = document.getElementById(`w-${wordIndex}-c-${charIndex}`);
    if (!currentEl && wordIndex < currentWords.length - 1) {
        currentEl = document.getElementById(`w-${wordIndex}-space`);
    }
    if (currentEl) {
        currentEl.classList.add("current");
        currentEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    updateSuggestedKey();
}

function startTimer() {
    hasStarted = true;
    timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.innerText = `${timeLeft}s`;
        updateStats();

        if (timeLeft <= 0) {
            endTest();
        }
    }, 1000);
}

hiddenInput.addEventListener("keydown", (e) => {
    if (!isTestActive) { e.preventDefault(); return; }
    if (e.key === "Backspace") {
        handleBackspace();
        e.preventDefault();
    }
});

hiddenInput.addEventListener("input", (e) => {
    if (!isTestActive) return;
    if (!hasStarted) {
        startTimer();
    }

    const typedVal = e.target.value;
    
    if (typedVal.length < expectedInputLength) {
        handleBackspace();
        return;
    }

    if (typedVal === "") return;
    
    const currentWord = currentWords[wordIndex];
    const typedChar = typedVal[typedVal.length - 1];
    totalTyped++;

    if (typedChar === " ") {
        let spaceEl = document.getElementById(`w-${wordIndex}-space`);
        if (spaceEl) {
            const trackingKey = `w-${wordIndex}-space`;
            if (charIndex >= currentWord.length) {
                spaceEl.classList.add("correct");
            } else {
                spaceEl.classList.add("incorrect");
                if(!errorTracker[trackingKey]) { errors++; errorTracker[trackingKey] = true; }
            }
        }
        wordIndex++;
        charIndex = 0;
        e.target.value = "";
        expectedInputLength = 0;
        wordCountDisplay.innerText = `${wordIndex}/${currentWords.length}`;
    } else {
        const expectedChar = currentWord[charIndex];
        const charEl = document.getElementById(`w-${wordIndex}-c-${charIndex}`);
        const trackingKey = `w-${wordIndex}-c-${charIndex}`;

        if (charEl) {
            if (typedChar === expectedChar) {
                charEl.classList.add("correct");
                charEl.classList.remove("incorrect");
            } else {
                charEl.classList.add("incorrect");
                charEl.classList.remove("correct");
                if(!errorTracker[trackingKey]) { errors++; errorTracker[trackingKey] = true; }
            }
            charIndex++;
            expectedInputLength = typedVal.length;
        }
    }

    if (wordIndex >= currentWords.length) {
        endTest();
    } else {
        markCurrentChar();
        updateStats();
    }
});

/* ==========================================================================
   6. DEVICE-AGNOSTIC BACKSPACE LOGIC
   ========================================================================== */
function handleBackspace() {
    if (charIndex > 0) {
        charIndex--;
        const charEl = document.getElementById(`w-${wordIndex}-c-${charIndex}`);
        if (charEl) charEl.classList.remove("correct", "incorrect");
        
        const currentTrackingKey = `w-${wordIndex}-c-${charIndex}`;
        if (errorTracker[currentTrackingKey]) {
            errors = Math.max(0, errors - 1);
            delete errorTracker[currentTrackingKey];
        }
    } else if (wordIndex > 0 && charIndex === 0) {
        wordIndex--;
        const prevWord = currentWords[wordIndex];
        
        const spaceEl = document.getElementById(`w-${wordIndex}-space`);
        if (spaceEl) spaceEl.classList.remove("correct", "incorrect");
        
        const spaceTrackingKey = `w-${wordIndex}-space`;
        if (errorTracker[spaceTrackingKey]) {
            errors = Math.max(0, errors - 1);
            delete errorTracker[spaceTrackingKey];
        }

        charIndex = prevWord.length - 1;
        const lastCharEl = document.getElementById(`w-${wordIndex}-c-${charIndex}`);
        if (lastCharEl) lastCharEl.classList.remove("correct", "incorrect");

        const lastCharTrackingKey = `w-${wordIndex}-c-${charIndex}`;
        if (errorTracker[lastCharTrackingKey]) {
            errors = Math.max(0, errors - 1);
            delete errorTracker[lastCharTrackingKey];
        }

        wordCountDisplay.innerText = `${wordIndex}/${currentWords.length}`;
    }
    
    const proxyText = charIndex > 0 ? "x".repeat(charIndex) : "";
    hiddenInput.value = proxyText; 
    expectedInputLength = proxyText.length;
    
    markCurrentChar();
    updateStats();
}

/* ==========================================================================
   7. CALCULATIONS & MODAL ACTIONS
   ========================================================================== */
function updateStats() {
    // ... logic for calculating accuracy ...
    
    // Likely location of your current issue:
    const accElement = document.getElementById('accuracy-display');
    accElement.textContent = accuracy; 
    
    // ADD THE PERCENT SYMBOL HERE:
    accElement.textContent = Math.round(accuracy) + "%"; 
}

    const wpm = Math.round((totalTyped / 5) / timeElapsed);
    const accuracy = Math.max(0, Math.round(((totalTyped - errors) / totalTyped) * 100));

    wpmDisplay.innerText = wpm;
    accuracyDisplay.innerText = accuracy;
}

function endTest() {
    isTestActive = false;
    clearInterval(timerInterval);
    hiddenInput.disabled = true;
    
    document.querySelectorAll(".char.current").forEach(el => el.classList.remove("current"));
    document.querySelectorAll(".key.suggest-orange").forEach(el => el.classList.remove("suggest-orange"));

    const finalWpm = wpmDisplay.innerText;
    const finalAcc = accuracyDisplay.innerText;

    resWpm.innerText = finalWpm;
    resAcc.innerText = `${finalAcc}%`;
    resTyped.innerText = totalTyped;
    resErrors.innerText = errors;

    resultModal.classList.add("active");
}

/* ==========================================================================
   8. VISUAL KEYBOARD SYNCHRONIZATION WITH SYMBOL PATTERNS
   ========================================================================== */
window.addEventListener("keydown", (e) => {
    let keyId = e.code;
    const targetKey = document.getElementById(keyId);
    if (!targetKey) return;

    if (!isTestActive) {
        targetKey.classList.add("press-correct");
        return;
    }

    const currentWord = currentWords[wordIndex];
    let expectedChar = " ";
    if (currentWord && charIndex < currentWord.length) {
        expectedChar = currentWord[charIndex];
    }

    const dataKeys = targetKey.getAttribute("data-key");
    
    // Explicit standardizations for punctuation characters evaluation mapping
    let normalizeKey = e.key;
    if (normalizeKey === "Period") normalizeKey = ".";
    if (normalizeKey === "Comma") normalizeKey = ",";
    if (normalizeKey === "Semicolon") normalizeKey = ";";

    if (e.key === "Backspace" || e.key === "Shift" || e.key === "CapsLock" || e.key === "Tab" || e.key === "Enter") {
        targetKey.classList.add("press-correct");
    } else if (dataKeys && (dataKeys.split(" ").includes(expectedChar) || normalizeKey === expectedChar)) {
        targetKey.classList.add("press-correct");
    } else {
        targetKey.classList.add("press-error");
    }
});

window.addEventListener("keyup", (e) => {
    let keyId = e.code;
    const targetKey = document.getElementById(keyId);
    if (targetKey) {
        targetKey.classList.remove("press-correct", "press-error");
    }
    updateSuggestedKey();
});

/* ==========================================================================
   9. GLOBAL APPLICATION EVENT HANDLERS
   ========================================================================== */
wordsDisplay.addEventListener("click", () => { if(isTestActive) hiddenInput.focus(); });
btnEn.addEventListener("click", () => { btnEn.classList.add("active"); btnBn.classList.remove("active"); initTest("en"); });
btnBn.addEventListener("click", () => { btnBn.classList.add("active"); btnEn.classList.remove("active"); initTest("bn"); });
restartBtn.addEventListener("click", () => initTest(isBanglaMode ? "bn" : "en"));

modalCloseBtn.addEventListener("click", () => {
    resultModal.classList.remove("active");
    initTest(isBanglaMode ? "bn" : "en");
});

initTest("en");
