const sentences = [
    {
        sentence : '“To be is to be perceived.”',
        author : '— Bishop George Berkeley'
    },
    {
        sentence : '“The only thing I know is that I know nothing.”',
        author : '— Socrates'
    },
    {
        sentence : '“Every man is guilty of all the good he did not do.”',
        author : '— Voltaire'
    },
    {
        sentence : '“The journey of a thousand miles begins with one step.”',
        author : '— Lao Tzu'
    },
    {
        sentence : '“That which does not kill us makes us stronger.”',
        author : '— Friedrich Nietzsche'
    },
    {
        sentence : '“You must be the change you wish to see in the world.”',
        author : '— Mahatma Gandhi'
    },
    {
        sentence : '“Life must be understood backward. But it must be lived forward.”',
        author : '— Søren Kierkegaard'
    },
    {
        sentence : '“The only person you are destined to become is the person you decide to be.”',
        author : '— Edmund Burke'
    },
    {
        sentence : '“The only person you are destined to become is the person you decide to be.”',
        author : '— Ralph Waldo Emerson'
    },
    {
        sentence : '“One cannot conceive anything so strange and so implausible that it has not already been said by one philosopher or another”',
        author : '— René Descartes'
    },
    {
        sentence : '“Get busy living or get busy dying"',
        author : '— Stephen King'
    },
    {
        sentence : '"Those who dare to fail miserably can achieve greatly.”',
        author : '— John F. Kennedy'
    },
    {
        sentence : '“Life is what happens when you’re busy making other plans.”',
        author : '— John Lennon'
    },
    {
        sentence : '“Life is like a box of chocolates. You never know what you’re going to get.”',
        author : '— Forrest Gump'
    },
    {
        sentence : '“I’m an epic nerd. My life is running and schoolwork and sleeping. And eating.” ',
        author : '— Mary Cain'
    },
    {
        sentence : '“The ode lives upon the ideal, the epic upon the grandiose, the drama upon the real.”',
        author : '— Victor Hugo'
    },
    {
        sentence : '“The greatest glory in living lies not in never falling, but in rising every time we fall.”',
        author : '— Nelson Mandela'
    },
    {
        sentence : '“In my home, life was framed as an epic spiritual battle between good and evil.”',
        author : '— Megan Phelps-Roper'
    },
    {
        sentence : '“You have to be doing things that matter—responsibility, but also responsibility with epic and beautiful and noble tasks.” ',
        author : '— Michelle Bachelet'
    },
    {
        sentence : '“But the development of human society does not go straight forward, and the epic process will therefore be a recurring process, the series a recurring series – though not in exact repetition.”',
        author : '— Lascelles Abercrombie'
    },
    {
        sentence : '“This is a war to end all wars.”',
        author : '— Woodrow Wilson'
    },
    {
        sentence : '“If we don’t end war, war will end us"',
        author : '― H.G. Wells'
    },
    {
        sentence : '“Fighting for peace is like f***ing for chastity"',
        author : '― Stephen King'
    },
    {
        sentence : '“Only the dead have seen the end of war.”',
        author : '— George Santayana'
    },
    {
        sentence : '“War is what happens when language fails.”',
        author : '― Margaret Atwood'
    },
    {
        sentence : '“War does not determine who is right—only who is left.”',
        author : '— Bertrand Russell'
    },
    {
        sentence : '“All war is a symptom of man’s failure as a thinking animal.”',
        author : '― John Steinbeck'
    },
    {
        sentence : '“It is well that war is so terrible, or we should grow too fond of it.”',
        author : '― Robert E. Lee'
    },
    {
        sentence : '“Never think that war, no matter how necessary, nor how justified, is not a crime.”',
        author : '— Ernest Hemingway'
    },
    {
        sentence : '“All war must be just the killing of strangers against whom you feel no personal animosity; strangers whom, in other circumstances, you would help if you found them in trouble, and who would help you if you needed it.”',
        author : '— Mark Twain'
    },
    {
        sentence : '“Fortune favors the bold.”',
        author : '— Virgil'
    },
    {
        sentence : '“Time is money.”',
        author : '— Benjamin Franklin'
    },
    {
        sentence : '“Actions speak louder than words.”',
        author : '— Abraham Lincoln'
    },
    {
        sentence : '“In the middle of difficulty lies opportunity.”',
        author : '— Albert Einstein'
    },
    {
        sentence : '“If you’re going through hell, keep going.”',
        author : '— Winston Churchill'
    },
    {
        sentence : '“Those who dare to fail miserably can achieve greatly.”',
        author : '— John F. Kennedy'
    },
    {
        sentence : '“That’s one small step for a man, one giant leap for mankind.”',
        author : '— Neil Armstrong'
    },
    {
        sentence : '“History is nothing if not an epic tale of missed opportunities.”',
        author : '— Graydon Carter'
    },
    {
        sentence : '“You will face many defeats in life, but never let yourself be defeated.”',
        author : '— Maya Angelou'
    },
    {
        sentence : '“Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.”',
        author : '— Bil Keane'
    },
    {
        sentence : '“If epic poetry is a definite species, the sagas do not fall within it.”',
        author : '— Lascelles Abercrombie'
    },
    {
        sentence : '“War and Peace’ may be the most epic thing ever created by a human being.”',
        author : '— Mark Manson'
    },
    {
        sentence : '“The first epics were intended for recitation; the literary epic is meant to be read.”',
        author : '— Lascelles Abercrombie'
    },
    {
        sentence : '“The art of storytelling is reaching its end because the epic side of truth, wisdom, is dying out.”',
        author : '— Walter Benjamin'
    },
    {
        sentence : '“Epic poetry exhibits life in some great symbolic attitude. It cannot strictly be said to symbolize life itself, but always some manner of life.”',
        author : '— Lascelles Abercrombie'
    },
    {
        sentence : '“I feel like Shakespeare is so epic, in a way that sci-fi genre stuff is epic, it transcends the mundane, and it takes you to this place of real passion and real beauty.”',
        author : '— David Harbour'
    },
    {
        sentence : '“What works about fairy tales is that they endure, and the great thing about fairy tales is that you can explore big, epic things that you can’t really explore in other situations.”',
        author : '— Gary Ross'
    },
    {
        sentence : '“Any long work in which poetry is persistent, be it epic or drama or narrative, is really a succession of separate poetic experiences governed into a related whole by an energy distinct from that which evoked them.”',
        author : '— John Drinkwater'
    },
    {
        sentence : '“We don’t tend to write about disease in fiction – not just teen novels but all American novels—because it doesn’t fit in with our idea of the heroic romantic epic. There is room only for sacrifice, heroism, war, politics and family struggle.”',
        author : '— John Green'
    },
    {
        sentence : '“I turned to the novel, an artistic form which had in former days been neglected and had thus acquired a bad reputation, but which during the nineteenth century had developed and elevated itself to the ranks occupied by drama and the ancient epic.”',
        author : '— Henrik Pontoppidan'
    },
    {
        sentence : '“There are only two great tragedies in life: one is not getting what you want and the other is getting it.”',
        author : '--Oscar Wilde'
    },
    {
        sentence : '"Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning."',
        author : '--Albert Einstein'
    }
]

console.log(JSON.stringify(sentences));