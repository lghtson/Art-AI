# Art&AI
Art and Artificial Intelligence 2026

## Someone From Nothing
This is an interactive artwork where a generated social media profile is generated based on the user responses to prompts. The profile generated would include posts, captions, comments and DM's all based on the information provided by the user. Each regeneration may change the generated profile, slightly or completely, to question how AI can reconstruct identity from incomplete or already existing data.

MPQ: How much data is needed before an AI-generated identity begins to feel emotionally real and could they co-exist with genuine accounts?

User Journey:
![User Journey](userJourney.png)

Visual Guide:
![User Flow Guide](userFlowGuide.png)

Minimum Viable Artwork
The project isnt a full social media platform, although further developments of the project could allow to explore that avenue. There arent any real user accounts, live messaging or any real social networking functions - i wanted to make it more of an archive of a profile rather than one that users can interact and change.

The minimum the artwork should have:
- Input form
- Generated profile
- 6 generated image placeholders or AI images
- Generated captions and comments for each image
- DM preview panel
- regenerate button

Initial Interface Development
Focusing on building website foundation. Establishing visual language and user journey before AI implimentaion
- Multi-screen nav
- Simulated profile layout
- placeholder post generation
- DM preview structure
- UI implementation

## Technical Stack

- HTML
- CSS
- JavaScript
- Node.js
- Express.js
- OpenAI Image Generation API

## Navigation Prototype

The user can now:
- move between screens
- answer identity questions
- trigger a fake AI generation sequence
- view a generated social media profile

The goal was to prototype the general experience rather than full functionality. Images and data is still hardcoded at this point.

![Homescreen](initialHomescreen.png)
![QScreen](initialQscreen.png)
![LoadScreen](initialLoadscreen.png)
![Profile](initialProfile.png)

Additional work was made to reinforce the visual interface of webpage to make it seem more social media-like.

![Profile WIP](rough1.png)
![Improved Profile](rough2.png)
![Current Profile Screen](current.png)
![Post Screen WIP](roughPostScreen.png)

### DM Preview Screen
I added a DM preview screen to extend the illusion of a social profile beyond public posts. The messages are not interactive, but they imply past relationships and unresolved conversations.

![DM Screen WIP](currentDM.png)

### Reflection
The loading sequence already creates a strange emotional effect.
Even with minimal data, the generated profile still feels somewhat believable, supporting the project’s critical question.

## Generating Identites

Placeholder profile information now procedurally generated - usernames, bios and other pieces of data dynamically assembled, allowing profiles to feel less fixed and more individual.

Comments, captions and bios are now generated with the user answers in mind.

![DMs when entered city is Athens](athensDMs.png)
![City + Hobbies shown in bio](bioProfileUpdate.png)
![Hobbies shown in captions](hobbyCaption.png)

Plan on adding more questions to further update data complexity. Also updated question depth as i want the user to feel more connected to the profile itself.

![Updated Comments and captions 1](updatedCCs.png)
![Updated Comments and captions 2](updatedCCs2.png)
![Updated DMs](updatedDms.png)
![Updated Profile](updatedProfile.png)

## Integrating AI-Generated Outputs
Started moving towards a genuine AI artwork by integrating AI-generated imagery directly into the system, so the responses to the questionnaire would influence the generated profile images and posts

Using OpenAI's Image Generation as it requires little setup but requires paid credits, so i pivoted to manually curating images within ChatGPT for the profile photos within the DM section, and using the Image Generation for the profile photo and posts - i would fully use the image generation as a future development within this project.

Initially i used the image generation with pre-determined prompts 

### Backend Architecture
I used AI to assist me in creating new images automatically, by creating a small Node/Express server to handle the image generation securely.

The flow of the website would now be:
1. Questionnaire input
2. OpenAI Image Generation
3. Saving The image locally
4. Rendering the website

### Prompt Engineering
Ensuring the generated imagery is believable is a priority for this artwork. The images would already be based on the questionnaire, so the prompts emphasised hand-held camera aesthetics and unsettling realism of social media identites.

![Prompts](imagePrompts.png)

Attempt 1:
![Prompt Questions Filled](promptEngQs.png)
![Result 1](promptEngRes1.png)
![Result 2](promptEngRes2.png)
![Result 3](promptEngRes3.png)
![Result 4](promptEngRes4.png)
![PostScreen Issue](promptEngPostIssue1.png)

Attempt 2:
![Prompt Questions Filled](promptEngQs2.png)
![Result 1](promptEngRes1v2.png)
![Result 2](promptEngRes2v2.png)
![Result 3](promptEngRes3v2.png)
![Result 4](promptEngRes4v2.png)
![PostScreen Issue](promptEngProfile.png)

### Conceptual Development
The integration of AI-generated imagery significantly changed the nature of the artwork. Previously, the system generated textual identity traces procedurally through captions, comments and DM previews.
The introduction of AI-generated profile photos and post imagere changes into visual memories from emotional data.

