---
layout: post
title:  "AI and Design"
date:   2018-01-09
categories: [Article, Design]
---
In my design role I have a significant amount of exposure to artificial intelligence (AI). This is a new frontier that presents new opportunities for designers but most articles I’ve read don’t talk about real-world experience designing with AI. Here is my attempt to share some of what I've learned about designing with AI.

## It's not pretty
My graduate degree is an MBA with a focus in business analytics. Most of my graduate research was spent preparing and massaging data that could be used to build models. Days and days of preparation. The only difference with creating AIs is that it is typically weeks and weeks of understanding a problem, understanding data, preparing data, and then modeling.

This work, especially in the early stages, can't be outsourced or sent to [Amazon Mechanical Turk](https://www.mturk.com/mturk/welcome) or something similar. In data mining,  [CRISP-DM](https://en.wikipedia.org/wiki/Cross-industry_standard_process_for_data_mining) is typically followed to work toward desirable and useful results. Good AI projects follow this methodology as well. Traditionally this work is done by data scientists. However, as teams integrate, designers will be deeply involved too.

As I learned about CRISP-DM and especially the business understanding and data understanding steps I was amazed at how similar it was to design research. Data scientists did all of the same things as me in the early stages: [talk to stakeholders](https://medium.com/research-things/interviewing-humans-fa198f809c40) (including product sponsors and individuals involved in the process), research what has been done already, research what others outside of the group have approached similar problems, and brainstorm and sketch based on what was learned. All that work allows both data scientists and designers to really dig into what data is available and consider how the data can be used to help solve the problem at hand.

Your job as a designer on these types of projects will be to help the team progress while staying focused on the user. I've been in the position where the team is working on understanding the data and realizing that it may be impossible to solve the problem in the way originally proposed. Depending on your team that might mean a pivot away from the original idea to something else. The product risk comes from when the team finds something the can do with the data that doesn't quite solve a problem but could be interesting. You will need to ensure that everyone involved understands what the repercussions are of the pivot. Being such a new field there could be research and development benefit to the company without really benefiting any user. This has been the hardest part of my job. I have not found any golden rule for when to fight against something or pursue. It's more of a "you'll know it when you see it" type of thing.

This work takes effort. If your team believes that AI can be used to solve a problem be prepared to have this initial work to take more effort than you're used to with more mature tools. There are so many unknowns with AI that you'll be iterating between business understanding data understanding, and trying to design the solution constantly. Many times you won't get the results you were hoping for. Sometimes you'll see magic.

## Sometimes it's magic
Seeing a computer do something you've never seen a computer do can be really exciting. Knowing that we don't fully understand how the computer is making the decisions is confusing and thought provoking. For example, one project I worked on created a detailed classification of an object in a photo (I can talk broadly about what we did, but can’t say exactly what we were classifying). That object typically is seen outdoors. Our training data set included the object in many different outdoor settings. I learned that a customer might take a photo of this object with another person in frame, which wasn’t something we had in our training data. I decided to test the model by adding a person into a validation photo. The model worked well, ignored the person, and correctly classified the object. I tried many different types of people in different validation photos and everything worked fine.

Then I tested some dogs. Then I tested some cats. Apparently our model was a dog lover because the classifications were all over the place when a dog was in the photo, but cats didn’t affect the classification confidence or accuracy.

This was a finding that was a little funny, a little spooky, and showed the value a designer can bring to AI projects. I wouldn’t have thought about testing the model with pets or people if I didn’t take the time to do discovery work. We then created data that included different pets and retrain the model.

## Final thought
“Should designers know how to code” was the big question for the last 10 years. I believe the question should now be, “should designers know statistics?” My thoughts on that question are the same as the code question. Good designers know the people, the problem, the business, and the technology which is delivering a solution to a problem. That technology may now include data science and math. I don’t think that an effective designer needs to get their PhD in statistics or data science, but knowing how to work with data will make you much more effective.

Let me know if you’d like to talk more about AI, design, or anything else [@benjoycect]( https://twitter.com/BenJoyceCT).
