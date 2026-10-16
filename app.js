const SUPPORT_WHATSAPP_NUMBER = "";
const checklistStorageKey = "loan-ready-ifsls-checklist-v1";
const languageStorageKey = "loan-ready-language";
const maximumPhotosPerDocument = 8;
const maximumPhotoSize = 15 * 1024 * 1024;

const translations = {
  en: {
    pageTitle: "IFSLS Student Guide | Loan Ready",
    languageLabel: "Language",
    navSteps: "Application steps",
    navDocuments: "Interview documents",
    navSupport: "Get support",
    heroEyebrow: "A practical guide for applicants",
    heroTitle: "Your IFSLS application, one step at a time.",
    heroIntro: "Simple steps for Sri Lanka's Interest Free Student Loan Scheme, from checking if you can apply to preparing for your interview.",
    openPortal: "Open the official portal",
    goDocuments: "Prepare interview documents",
    editionNote: "Based on the official 2026/27 handbook and the interview email shared with this guide.",
    photoCaption: "A little preparation makes the next step clearer.",
    eligibilityEyebrow: "START HERE",
    eligibilityTitle: "Check the basics before you apply.",
    readHandbook: "Read the official student handbook",
    eligibilityYearTitle: "Check your A/L year",
    eligibilityYearText: "The 2026/27 handbook covers Sri Lankan G.C.E. A/L candidates from 2023, 2024 or 2025 who qualify for university entrance.",
    eligibilityBaseTitle: "Check the general requirements",
    eligibilityBaseText: "You need three S passes in one sitting, within three sittings; at least 30 for the Common General Test within three sittings; an S pass in A/L General English or O/L English Language; and to be 25 or younger on 27 September 2026.",
    eligibilityCourseTitle: "Check your chosen degree",
    eligibilityCourseText: "Each degree has its own entry requirements. Selection also depends on your preferences and available places. If a course is oversubscribed, your A/L Z-score is considered.",
    eligibilityCaveat: "Rules can change for each intake. Check the latest notice and your degree requirements in the official handbook before applying.",
    stepsEyebrow: "THE APPLICATION",
    stepsTitle: "From registration to interview",
    stepsAside: "Use an email address you can keep using throughout your studies.",
    step1Title: "Register on the official website",
    step1Text: "Use the applicant's NIC number used for A/L and the relevant A/L index number. The password will be sent to your email.",
    step1Link: "Go to the official portal ↗",
    step2Title: "Read the handbook and fill in the form",
    step2Text: "Check the requirements for your chosen degree. Enter your details and preferences carefully, then submit before the application deadline.",
    step2Link: "Open the English handbook ↗",
    step3Title: "Print and sign your application",
    step3Text: "Keep a copy of the form you submitted. Sign it. School applicants need the principal's certificate; external applicants need the certified affidavit on the last page.",
    step4Title: "Look out for an interview invitation",
    step4Text: "Check your email and the Ministry website. Your invitation will give the interview date, time and Microsoft Teams link.",
    step5Title: "Email your document scans",
    step5Text: "Follow the instructions in your invitation. The email shared for this guide asks you to send the named scans one hour before the interview.",
    emailTemplateEyebrow: "READY-TO-USE EMAIL",
    emailTemplateTitle: "Copy this email for your interview",
    emailTemplateIntro: "Replace the bracketed details, attach your files, and send it one hour before your interview.",
    emailLanguageNote: "Sample in English",
    emailToLabel: "To",
    emailSubjectLabel: "Subject",
    emailBodyLabel: "Email body",
    copyRecipient: "Copy address",
    copySubject: "Copy subject",
    copyBody: "Copy email body",
    copiedText: "Copied. Paste it into your email.",
    copyFailed: "Could not copy automatically. Select the text and copy it.",
    documentsEyebrow: "YOUR INTERVIEW PACK",
    documentsTitle: "Prepare each document",
    checklistHint: "Tick an item when it is ready. Add photos under the matching document.",
    pdfHowTitle: "Turn your photos into a PDF",
    pdfHowStep1: "Find the document you want to prepare.",
    pdfHowStep2: "Tap “Choose photos” and select one or more clear pictures.",
    pdfHowStep3: "Tap “Create PDF”. The named file downloads to your device.",
    privacyNote: "Your photos stay on this device. They are not uploaded to this website.",
    renameEyebrow: "ALREADY HAVE A FILE?",
    renameTitle: "Rename it and download a copy",
    renameIntro: "Choose a document, enter the name you want, then download it. The file itself is not changed.",
    renameChooseLabel: "Choose your file",
    renameNameLabel: "New file name",
    renamePlaceholder: "e.g. NIC",
    renameDownload: "Download renamed file",
    renamePrivacy: "Your file stays on this device. It is not uploaded.",
    renameEmptyName: "Enter a name for your file first.",
    renameDownloaded: "Downloaded {filename}",
    resetChecklist: "Clear ticks",
    docApplication: "Signed online application",
    detailApplication: "Print the application you submitted and sign it.",
    docApplication1: "Principal's certificate or affidavit",
    detailApplication1: "School applicant: principal's signed certificate. External applicant: affidavit certified by a JP or Commissioner of Oaths.",
    docNic: "NIC or valid passport",
    detailNic: "Choose a clear photo of your identity document.",
    docAl: "G.C.E. A/L certificates",
    detailAl: "Include the A/L certificate and the certificate for the year you passed the Common General Test.",
    docOl: "G.C.E. O/L certificate",
    docSchoolLeaving: "School leaving certificate",
    docBirth: "Birth certificate",
    detailOriginal: "Choose a clear photo of the original certificate.",
    docAppeal: "Request to change degree choices",
    detailAppeal: "Only if you want to change, add or remove degree choices.",
    docBridging: "Bridging course results",
    detailBridging: "Only if you followed a bridging course.",
    docRequest: "Request for another application change",
    detailRequest: "Only if you need to request another change to your application.",
    choosePhotos: "Choose photos",
    createPdf: "Create PDF",
    removePhoto: "Remove",
    sendScansTitle: "Send your files to the address in your invitation.",
    sendScansText: "The interview email shared for this guide says to email PDFs or photos to ifsls5@mail.mohe.gov.lk one hour before the interview. Keep every original document with you. Follow your own invitation if it says something different.",
    scanEyebrow: "BEFORE YOU SEND",
    scanTitle: "Check your PDF",
    scanText: "Open the downloaded PDF. Check that every page is upright, easy to read and complete. Make one PDF for each document, and keep the original papers for your interview.",
    feedbackEyebrow: "CONTACT STUDENT SUPPORT",
    feedbackTitle: "Need help or want to share feedback?",
    feedbackIntro: "Send a question about your application, ask for document help, or share feedback. We can reply to your email.",
    feedbackName: "Your name",
    feedbackEmail: "Email address",
    feedbackTopic: "What do you need help with?",
    feedbackTopicChoose: "Choose a topic",
    feedbackTopicApplication: "Application question",
    feedbackTopicDocuments: "Document help",
    feedbackTopicGeneral: "Website feedback or suggestion",
    feedbackMessage: "Your message",
    feedbackPrivacy: "Your name, email, topic and message are saved in the support database so the team can respond. Please do not include your NIC number or private documents.",
    feedbackSubmit: "Send to student support",
    feedbackSending: "Sending your feedback…",
    feedbackSuccess: "Thank you. Your feedback has been received.",
    feedbackError: "We could not send your feedback. Please try again later.",
    supportEyebrow: "STILL NEED HELP?",
    supportTitle: "Need help? Ask a question.",
    supportText: "Use the contact form for application questions or document help. Do not send private documents over WhatsApp.",
    goToContactForm: "Go to the contact form",
    whatsapp: "WhatsApp",
    whatsappNote: "A WhatsApp support number has not been added yet.",
    footerNotice: "Independent student guide. Confirm deadlines and requirements with official sources.",
    footerOfficial: "Official IFSLS portal ↗",
    checklistCount: "{ready} of {total} ready",
    selectedPhotos: "{count} photo(s) selected",
    noPhotos: "No photos selected yet.",
    processingPdf: "Making your PDF…",
    pdfSaved: "Downloaded {filename}",
    pdfLibraryMissing: "PDF tool did not load. Check your internet connection and refresh this page.",
    pdfFailed: "Could not make this PDF. Try a JPG or PNG photo.",
    maxPhotos: "Choose up to {count} photos for one document.",
    photoTooLarge: "Each photo must be smaller than 15 MB.",
    notAnImage: "Choose a photo file, such as JPG or PNG.",
    selectedPhotosLabel: "Selected photos",
    removePhotoLabel: "Remove photo",
  },
  si: {
    pageTitle: "IFSLS ශිෂ්‍ය මාර්ගෝපදේශය | Loan Ready",
    languageLabel: "භාෂාව",
    navSteps: "අයදුම් කිරීමේ පියවර",
    navDocuments: "සම්මුඛ පරීක්ෂණ ලේඛන",
    navSupport: "සහාය ලබාගන්න",
    heroEyebrow: "අයදුම්කරුවන් සඳහා සරල මාර්ගෝපදේශය",
    heroTitle: "ඔබේ IFSLS අයදුම්පත, පියවරෙන් පියවර.",
    heroIntro: "පොලී රහිත ශිෂ්‍ය ණය යෝජනා ක්‍රමයට අයදුම් කළ හැකිදැයි බැලීමේ සිට සම්මුඛ පරීක්ෂණයට සූදානම් වීම දක්වා සරල පියවර.",
    openPortal: "නිල වෙබ් අඩවියට යන්න",
    goDocuments: "සම්මුඛ පරීක්ෂණ ලේඛන සූදානම් කරන්න",
    editionNote: "2026/27 නිල අත්පොත සහ මෙයට ලබාදුන් සම්මුඛ පරීක්ෂණ ඊමේලය අනුව සකස් කර ඇත.",
    photoCaption: "පෙර සූදානමෙන් ඊළඟ පියවර පහසු වේ.",
    eligibilityEyebrow: "මෙතැනින් පටන් ගන්න",
    eligibilityTitle: "අයදුම් කිරීමට පෙර මූලික සුදුසුකම් බලන්න.",
    readHandbook: "නිල ශිෂ්‍ය අත්පොත කියවන්න",
    eligibilityYearTitle: "ඔබේ A/L වර්ෂය බලන්න",
    eligibilityYearText: "2026/27 අත්පොතට අනුව 2023, 2024 හෝ 2025 ශ්‍රී ලංකා G.C.E. A/L විභාගයෙන් විශ්වවිද්‍යාල ප්‍රවේශ සුදුසුකම් ලැබූ අයට අයදුම් කළ හැක.",
    eligibilityBaseTitle: "සාමාන්‍ය සුදුසුකම් බලන්න",
    eligibilityBaseText: "වාර තුනක් ඇතුළත එකම වාරයක විෂය තුනට S සාමාර්ථ; පොදු සාමාන්‍ය පරීක්ෂණයට වාර තුනක් ඇතුළත අවම ලකුණු 30; A/L සාමාන්‍ය ඉංග්‍රීසි හෝ O/L ඉංග්‍රීසි භාෂාවට S සාමාර්ථ; සහ 2026 සැප්තැම්බර් 27 දින වයස අවුරුදු 25 හෝ ඊට අඩු විය යුතුය.",
    eligibilityCourseTitle: "තෝරාගත් උපාධියේ සුදුසුකම් බලන්න",
    eligibilityCourseText: "එක් එක් උපාධියට වෙනම සුදුසුකම් ඇත. තේරීමේදී ඔබේ කැමැත්ත සහ පවතින ස්ථානද බලයි. ඉල්ලුම්කරුවන් වැඩි නම් A/L Z ලකුණ සලකා බලයි.",
    eligibilityCaveat: "එක් එක් වර්ෂයට නීති වෙනස් විය හැක. අයදුම් කිරීමට පෙර නවතම නිවේදනය සහ උපාධි සුදුසුකම් නිල අත්පොතෙන් බලන්න.",
    stepsEyebrow: "අයදුම් කිරීම",
    stepsTitle: "ලියාපදිංචියේ සිට සම්මුඛ පරීක්ෂණය දක්වා",
    stepsAside: "ඔබට ඉගෙනුම අවසන් වන තෙක් භාවිත කළ හැකි ඊමේල් ලිපිනයක් දෙන්න.",
    step1Title: "නිල වෙබ් අඩවියේ ලියාපදිංචි වන්න",
    step1Text: "A/L සඳහා භාවිත කළ අයදුම්කරුගේ ජාතික හැඳුනුම්පත් අංකය සහ අදාළ A/L දර්ශක අංකය භාවිත කරන්න. මුරපදය ඊමේල් මගින් එවනු ලැබේ.",
    step1Link: "නිල වෙබ් අඩවියට යන්න ↗",
    step2Title: "අත්පොත කියවා අයදුම්පත පුරවන්න",
    step2Text: "තෝරාගත් උපාධියේ සුදුසුකම් බලන්න. විස්තර සහ කැමැත්තේ අනුපිළිවෙළ නිවැරදිව ඇතුළත් කර අවසන් දිනයට පෙර යවන්න.",
    step2Link: "ඉංග්‍රීසි අත්පොත විවෘත කරන්න ↗",
    step3Title: "අයදුම්පත මුද්‍රණය කර අත්සන් කරන්න",
    step3Text: "යැවූ අයදුම්පතේ පිටපතක් තබාගන්න. එයට අත්සන් කරන්න. පාසල් අයදුම්කරුවන්ට විදුහල්පති සහතිකයත්, බාහිර අයදුම්කරුවන්ට අවසන් පිටුවේ සහතික කළ දිවුරුම් ප්‍රකාශයත් අවශ්‍යයි.",
    step4Title: "සම්මුඛ පරීක්ෂණ ඊමේලය බලන්න",
    step4Text: "ඔබේ ඊමේලය සහ අමාත්‍යාංශ වෙබ් අඩවිය පරීක්ෂා කරන්න. ආරාධනා ඊමේලයේ දිනය, වේලාව සහ Microsoft Teams සබැඳිය ඇත.",
    step5Title: "ලේඛනවල ස්කෑන් පිටපත් ඊමේල් කරන්න",
    step5Text: "ඔබේ ආරාධනා ඊමේලයේ උපදෙස් අනුගමනය කරන්න. මෙයට ලබාදුන් ඊමේලයේ ලේඛන සම්මුඛ පරීක්ෂණයට පැයකට පෙර යවන ලෙස සඳහන් වේ.",
    emailTemplateEyebrow: "භාවිතයට සූදානම් ඊමේලය",
    emailTemplateTitle: "සම්මුඛ පරීක්ෂණයට මෙම ඊමේලය පිටපත් කරන්න",
    emailTemplateIntro: "වරහන් තුළ ඇති විස්තර වෙනස් කර, ලේඛන අමුණා, සම්මුඛ පරීක්ෂණයට පැයකට පෙර යවන්න.",
    emailLanguageNote: "ඉංග්‍රීසි ආදර්ශය",
    emailToLabel: "ලබන්නා",
    emailSubjectLabel: "මාතෘකාව",
    emailBodyLabel: "ඊමේල් පණිවිඩය",
    copyRecipient: "ලිපිනය පිටපත් කරන්න",
    copySubject: "මාතෘකාව පිටපත් කරන්න",
    copyBody: "ඊමේල් පණිවිඩය පිටපත් කරන්න",
    copiedText: "පිටපත් කළා. ඊමේලයට අලවන්න.",
    copyFailed: "ස්වයංක්‍රීයව පිටපත් කළ නොහැක. පෙළ තෝරා පිටපත් කරන්න.",
    documentsEyebrow: "සම්මුඛ පරීක්ෂණයට අවශ්‍ය ලේඛන",
    documentsTitle: "එක් එක් ලේඛනය සූදානම් කරන්න",
    checklistHint: "ලේඛනය සූදානම් වූ විට කොටුව සලකුණු කරන්න. ඊට අදාළ තැනට ඡායාරූප එක් කරන්න.",
    pdfHowTitle: "ඡායාරූප PDF එකක් බවට හරවන්න",
    pdfHowStep1: "සූදානම් කළ යුතු ලේඛනය සොයාගන්න.",
    pdfHowStep2: "“ඡායාරූප තෝරන්න” තට්ටු කර පැහැදිලි ඡායාරූප එකක් හෝ කිහිපයක් තෝරන්න.",
    pdfHowStep3: "“PDF සාදන්න” තට්ටු කරන්න. නියමිත නමින් ගොනුව ඔබේ උපාංගයට බාගත වේ.",
    privacyNote: "ඔබේ ඡායාරූප මෙම උපාංගයේම පවතී. ඒවා මෙම වෙබ් අඩවියට යවන්නේ නැත.",
    renameEyebrow: "ගොනුවක් දැනටමත් තිබේද?",
    renameTitle: "නම වෙනස් කර පිටපතක් බාගන්න",
    renameIntro: "ලේඛනය තෝරා ඔබට අවශ්‍ය නම ඇතුළත් කර බාගන්න. ගොනුවේ අන්තර්ගතය වෙනස් නොවේ.",
    renameChooseLabel: "ඔබේ ගොනුව තෝරන්න",
    renameNameLabel: "අලුත් ගොනු නම",
    renamePlaceholder: "උදා: NIC",
    renameDownload: "නම වෙනස් කළ ගොනුව බාගන්න",
    renamePrivacy: "ගොනුව ඔබේ උපාංගයේම පවතී. එය උඩුගත කරන්නේ නැත.",
    renameEmptyName: "පළමුව ගොනුවට නමක් ඇතුළත් කරන්න.",
    renameDownloaded: "බාගත කළා: {filename}",
    resetChecklist: "සලකුණු ඉවත් කරන්න",
    docApplication: "අත්සන් කළ මාර්ගගත අයදුම්පත",
    detailApplication: "යැවූ අයදුම්පත මුද්‍රණය කර අත්සන් කරන්න.",
    docApplication1: "විදුහල්පති සහතිකය හෝ දිවුරුම් ප්‍රකාශය",
    detailApplication1: "පාසල් අයදුම්කරු: විදුහල්පති අත්සන් කළ සහතිකය. බාහිර අයදුම්කරු: සාම විනිසුරු හෝ දිවුරුම් කොමසාරිස් සහතික කළ දිවුරුම් ප්‍රකාශය.",
    docNic: "ජාතික හැඳුනුම්පත හෝ වලංගු ගමන් බලපත්‍රය",
    detailNic: "හැඳුනුම්පතේ පැහැදිලි ඡායාරූපයක් තෝරන්න.",
    docAl: "G.C.E. A/L සහතික",
    detailAl: "A/L සහතිකය සහ පොදු සාමාන්‍ය පරීක්ෂණය සමත් වූ වර්ෂයේ සහතිකය දෙකම ඇතුළත් කරන්න.",
    docOl: "G.C.E. O/L සහතිකය",
    docSchoolLeaving: "පාසල් හැරයාමේ සහතිකය",
    docBirth: "උප්පැන්න සහතිකය",
    detailOriginal: "මුල් සහතිකයේ පැහැදිලි ඡායාරූපයක් තෝරන්න.",
    docAppeal: "උපාධි කැමැත්ත වෙනස් කිරීමේ ඉල්ලීම",
    detailAppeal: "උපාධි කැමැත්ත එකතු කිරීමට, ඉවත් කිරීමට හෝ වෙනස් කිරීමට අවශ්‍ය නම් පමණි.",
    docBridging: "පාලම් පාඨමාලා ප්‍රතිඵල",
    detailBridging: "පාලම් පාඨමාලාවක් හැදෑරුවේ නම් පමණි.",
    docRequest: "වෙනත් අයදුම්පත් සංශෝධන ඉල්ලීම",
    detailRequest: "අයදුම්පතේ වෙනත් වෙනසක් ඉල්ලන්නේ නම් පමණි.",
    choosePhotos: "ඡායාරූප තෝරන්න",
    createPdf: "PDF සාදන්න",
    removePhoto: "ඉවත් කරන්න",
    sendScansTitle: "ඔබේ ආරාධනා ඊමේලයේ ලිපිනයට ගොනු යවන්න.",
    sendScansText: "මෙයට ලබාදුන් සම්මුඛ පරීක්ෂණ ඊමේලයේ ifsls5@mail.mohe.gov.lk වෙත PDF හෝ ඡායාරූප පැයකට පෙර යවන ලෙස සඳහන් වේ. මුල් ලේඛන සියල්ල ළඟ තබාගන්න. ඔබේ ආරාධනා ඊමේලය වෙනස් උපදෙස් දෙන්නේ නම් එය අනුගමනය කරන්න.",
    scanEyebrow: "යැවීමට පෙර",
    scanTitle: "ඔබේ PDF එක පරීක්ෂා කරන්න",
    scanText: "බාගත කළ PDF එක විවෘත කරන්න. සෑම පිටුවක්ම කෙළින්, පැහැදිලි සහ සම්පූර්ණ බව බලන්න. එක් ලේඛනයකට එක් PDF එකක් සාදා මුල් ලේඛන සම්මුඛ පරීක්ෂණයට රැගෙන යන්න.",
    feedbackEyebrow: "ශිෂ්‍ය සහාය අමතන්න",
    feedbackTitle: "උදව් අවශ්‍යද, නැතිනම් අදහසක් බෙදාගන්නද?",
    feedbackIntro: "අයදුම්පත ගැන ප්‍රශ්නයක් යවන්න, ලේඛන සඳහා උදව් ඉල්ලන්න, නැතිනම් වෙබ් අඩවිය ගැන අදහසක් දෙන්න. ඔබේ ඊමේල් ලිපිනයට පිළිතුරු දිය හැක.",
    feedbackName: "ඔබේ නම",
    feedbackEmail: "ඊමේල් ලිපිනය",
    feedbackTopic: "ඔබට අවශ්‍ය සහාය කුමක්ද?",
    feedbackTopicChoose: "මාතෘකාවක් තෝරන්න",
    feedbackTopicApplication: "අයදුම්පත පිළිබඳ ප්‍රශ්නයක්",
    feedbackTopicDocuments: "ලේඛන සඳහා සහාය",
    feedbackTopicGeneral: "වෙබ් අඩවිය පිළිබඳ අදහසක්",
    feedbackMessage: "ඔබේ පණිවිඩය",
    feedbackPrivacy: "ඔබේ නම, ඊමේල් ලිපිනය, මාතෘකාව සහ පණිවිඩය සහාය දත්ත ගබඩාවේ සුරකින අතර කණ්ඩායමට පිළිතුරු දිය හැක. ජාතික හැඳුනුම්පත් අංකය හෝ පෞද්ගලික ලේඛන එවන්න එපා.",
    feedbackSubmit: "ශිෂ්‍ය සහායට යවන්න",
    feedbackSending: "ඔබේ අදහස යවමින්…",
    feedbackSuccess: "ස්තුතියි. ඔබේ අදහස ලැබුණා.",
    feedbackError: "අදහස යැවීමට නොහැකි විය. පසුව නැවත උත්සාහ කරන්න.",
    supportEyebrow: "තවමත් උදව් අවශ්‍යද?",
    supportTitle: "උදව් අවශ්‍යද? අපෙන් අසන්න.",
    supportText: "අයදුම්පත් ප්‍රශ්න හෝ ලේඛන සහාය සඳහා සම්බන්ධතා පෝරමය භාවිත කරන්න. පුද්ගලික ලේඛන WhatsApp හරහා නොයවන්න.",
    goToContactForm: "සම්බන්ධතා පෝරමයට යන්න",
    whatsapp: "WhatsApp",
    whatsappNote: "WhatsApp සහාය අංකයක් තවම එක් කර නැත.",
    footerNotice: "ස්වාධීන ශිෂ්‍ය මාර්ගෝපදේශයකි. අවසන් දිනයන් සහ සුදුසුකම් නිල මූලාශ්‍රවලින් තහවුරු කරන්න.",
    footerOfficial: "නිල IFSLS වෙබ් අඩවිය ↗",
    checklistCount: "සූදානම්: {ready} / {total}",
    selectedPhotos: "ඡායාරූප {count}ක් තෝරා ඇත",
    noPhotos: "තවම ඡායාරූප තෝරා නැත.",
    processingPdf: "PDF එක සාදමින්…",
    pdfSaved: "බාගත කළා: {filename}",
    pdfLibraryMissing: "PDF මෙවලම පූරණය වී නැත. අන්තර්ජාල සම්බන්ධතාව පරීක්ෂා කර පිටුව නැවත විවෘත කරන්න.",
    pdfFailed: "PDF එක සෑදිය නොහැකි විය. JPG හෝ PNG ඡායාරූපයක් උත්සාහ කරන්න.",
    maxPhotos: "එක් ලේඛනයකට ඡායාරූප {count}ක් දක්වා තෝරන්න.",
    photoTooLarge: "එක් ඡායාරූපයක් 15 MB ට වඩා කුඩා විය යුතුය.",
    notAnImage: "JPG හෝ PNG වැනි ඡායාරූප ගොනුවක් තෝරන්න.",
    selectedPhotosLabel: "තෝරාගත් ඡායාරූප",
    removePhotoLabel: "ඡායාරූපය ඉවත් කරන්න",
  },
  ta: {
    pageTitle: "IFSLS மாணவர் வழிகாட்டி | Loan Ready",
    languageLabel: "மொழி",
    navSteps: "விண்ணப்பப் படிகள்",
    navDocuments: "நேர்முகத் தேர்வு ஆவணங்கள்",
    navSupport: "உதவி பெறுங்கள்",
    heroEyebrow: "விண்ணப்பதாரர்களுக்கான எளிய வழிகாட்டி",
    heroTitle: "உங்கள் IFSLS விண்ணப்பம், படிப்படியாக.",
    heroIntro: "விண்ணப்பிக்க முடியுமா எனச் சரிபார்ப்பது முதல் நேர்முகத் தேர்வுக்குத் தயாராவது வரை எளிய வழிமுறைகள்.",
    openPortal: "அதிகாரப்பூர்வ இணையதளத்தைத் திறக்கவும்",
    goDocuments: "நேர்முகத் தேர்வு ஆவணங்களைத் தயார் செய்யவும்",
    editionNote: "2026/27 அதிகாரப்பூர்வ கையேடு மற்றும் இவ்வழிகாட்டிக்கு வழங்கப்பட்ட நேர்முகத் தேர்வு மின்னஞ்சலை அடிப்படையாகக் கொண்டது.",
    photoCaption: "சிறிய முன்தயாரிப்பு அடுத்த படியை எளிதாக்கும்.",
    eligibilityEyebrow: "இங்கே தொடங்குங்கள்",
    eligibilityTitle: "விண்ணப்பிக்கும் முன் அடிப்படைத் தகுதிகளைச் சரிபார்க்கவும்.",
    readHandbook: "அதிகாரப்பூர்வ மாணவர் கையேட்டைப் படிக்கவும்",
    eligibilityYearTitle: "உங்கள் A/L ஆண்டைச் சரிபார்க்கவும்",
    eligibilityYearText: "2026/27 கையேட்டின்படி, 2023, 2024 அல்லது 2025 இலங்கை G.C.E. A/L தேர்வில் பல்கலைக்கழக நுழைவுத் தகுதி பெற்றவர்கள் விண்ணப்பிக்கலாம்.",
    eligibilityBaseTitle: "பொதுத் தகுதிகளைச் சரிபார்க்கவும்",
    eligibilityBaseText: "மூன்று அமர்வுகளுக்குள் ஒரே அமர்வில் மூன்று பாடங்களிலும் S சித்தி; பொதுப் பொதுத் தேர்வில் மூன்று அமர்வுகளுக்குள் குறைந்தது 30 மதிப்பெண்கள்; A/L General English அல்லது O/L English Language இல் S சித்தி; மேலும் 2026 செப்டம்பர் 27 அன்று வயது 25 அல்லது அதற்குக் குறைவாக இருக்க வேண்டும்.",
    eligibilityCourseTitle: "நீங்கள் தேர்ந்தெடுத்த பட்டப்படிப்பைச் சரிபார்க்கவும்",
    eligibilityCourseText: "ஒவ்வொரு பட்டப்படிப்புக்கும் தனித்தனி நுழைவுத் தகுதிகள் உள்ளன. தெரிவு உங்கள் விருப்பங்களையும் இடங்களின் எண்ணிக்கையையும் பொறுத்தது. விண்ணப்பங்கள் அதிகமாக இருந்தால் A/L Z-Score பரிசீலிக்கப்படும்.",
    eligibilityCaveat: "ஒவ்வொரு சேர்க்கைக்கும் விதிகள் மாறலாம். விண்ணப்பிக்கும் முன் சமீபத்திய அறிவிப்பையும் பட்டப்படிப்பின் தகுதிகளையும் அதிகாரப்பூர்வ கையேட்டில் சரிபார்க்கவும்.",
    stepsEyebrow: "விண்ணப்பம்",
    stepsTitle: "பதிவு முதல் நேர்முகத் தேர்வு வரை",
    stepsAside: "படிப்பு முடியும் வரை பயன்படுத்தக்கூடிய மின்னஞ்சல் முகவரியை வழங்கவும்.",
    step1Title: "அதிகாரப்பூர்வ இணையதளத்தில் பதிவு செய்யவும்",
    step1Text: "A/L க்குப் பயன்படுத்திய விண்ணப்பதாரரின் NIC எண்ணையும் பொருத்தமான A/L சுட்டெண்ணையும் பயன்படுத்தவும். கடவுச்சொல் மின்னஞ்சலில் அனுப்பப்படும்.",
    step1Link: "அதிகாரப்பூர்வ தளத்திற்குச் செல்லவும் ↗",
    step2Title: "கையேட்டைப் படித்து விண்ணப்பத்தை நிரப்பவும்",
    step2Text: "தேர்ந்தெடுத்த பட்டப்படிப்பின் தகுதிகளைச் சரிபார்க்கவும். விவரங்களையும் விருப்ப வரிசையையும் சரியாகப் பதிவு செய்து, கடைசி நாளுக்கு முன் சமர்ப்பிக்கவும்.",
    step2Link: "ஆங்கிலக் கையேட்டைத் திறக்கவும் ↗",
    step3Title: "விண்ணப்பத்தை அச்சிட்டு கையொப்பமிடவும்",
    step3Text: "சமர்ப்பித்த விண்ணப்பத்தின் நகலை வைத்துக்கொள்ளவும். கையொப்பமிடவும். பாடசாலை விண்ணப்பதாரருக்கு அதிபர் சான்றிதழும், வெளிவாரி விண்ணப்பதாரருக்கு கடைசிப் பக்கத்தில் சான்றளிக்கப்பட்ட உறுதிமொழிப் பத்திரமும் தேவை.",
    step4Title: "நேர்முகத் தேர்வு அழைப்பைப் பார்க்கவும்",
    step4Text: "உங்கள் மின்னஞ்சலையும் அமைச்சின் இணையதளத்தையும் பார்க்கவும். அழைப்பில் திகதி, நேரம் மற்றும் Microsoft Teams இணைப்பு இருக்கும்.",
    step5Title: "ஆவணங்களின் ஸ்கேன் நகல்களை மின்னஞ்சல் செய்யவும்",
    step5Text: "உங்கள் அழைப்பில் உள்ள வழிமுறைகளைப் பின்பற்றவும். இவ்வழிகாட்டிக்கு வழங்கப்பட்ட மின்னஞ்சலில் ஆவணங்களை நேர்முகத் தேர்வுக்கு ஒரு மணி நேரத்திற்கு முன் அனுப்புமாறு கூறப்பட்டுள்ளது.",
    emailTemplateEyebrow: "தயார் நிலையில் உள்ள மின்னஞ்சல்",
    emailTemplateTitle: "நேர்முகத் தேர்வுக்கு இந்த மின்னஞ்சலை நகலெடுக்கவும்",
    emailTemplateIntro: "அடைப்புக்குறிக்குள் உள்ள விவரங்களை மாற்றி, கோப்புகளை இணைத்து, நேர்முகத் தேர்வுக்கு ஒரு மணி நேரத்திற்கு முன் அனுப்பவும்.",
    emailLanguageNote: "ஆங்கில மாதிரி",
    emailToLabel: "பெறுநர்",
    emailSubjectLabel: "தலைப்பு",
    emailBodyLabel: "மின்னஞ்சல் உள்ளடக்கம்",
    copyRecipient: "முகவரியை நகலெடு",
    copySubject: "தலைப்பை நகலெடு",
    copyBody: "மின்னஞ்சல் உள்ளடக்கத்தை நகலெடு",
    copiedText: "நகலெடுக்கப்பட்டது. உங்கள் மின்னஞ்சலில் ஒட்டவும்.",
    copyFailed: "தானாக நகலெடுக்க முடியவில்லை. உரையைத் தேர்ந்தெடுத்து நகலெடுக்கவும்.",
    documentsEyebrow: "நேர்முகத் தேர்வுக்கான ஆவணங்கள்",
    documentsTitle: "ஒவ்வொரு ஆவணத்தையும் தயார் செய்யவும்",
    checklistHint: "ஆவணம் தயாரானதும் குறியிடவும். ஒவ்வொரு ஆவணத்திற்கும் உரிய இடத்தில் படங்களைச் சேர்க்கவும்.",
    pdfHowTitle: "படங்களை PDF ஆக மாற்றுங்கள்",
    pdfHowStep1: "தயார் செய்ய வேண்டிய ஆவணத்தைக் கண்டறியவும்.",
    pdfHowStep2: "“படங்களைத் தேர்ந்தெடு” என்பதை அழுத்தி, தெளிவான படம் ஒன்றையோ பலவற்றையோ தேர்ந்தெடுக்கவும்.",
    pdfHowStep3: "“PDF உருவாக்கு” என்பதை அழுத்தவும். பெயரிடப்பட்ட கோப்பு உங்கள் சாதனத்தில் பதிவிறங்கும்.",
    privacyNote: "உங்கள் படங்கள் இந்தச் சாதனத்திலேயே இருக்கும். இந்த இணையதளத்திற்கு பதிவேற்றப்படாது.",
    renameEyebrow: "கோப்பு ஏற்கனவே உள்ளதா?",
    renameTitle: "பெயரை மாற்றி நகலைப் பதிவிறக்கவும்",
    renameIntro: "ஆவணத்தைத் தேர்ந்தெடுத்து, விரும்பும் பெயரை உள்ளிட்டு பதிவிறக்கவும். கோப்பின் உள்ளடக்கம் மாற்றப்படாது.",
    renameChooseLabel: "உங்கள் கோப்பைத் தேர்ந்தெடுக்கவும்",
    renameNameLabel: "புதிய கோப்புப் பெயர்",
    renamePlaceholder: "உதா: NIC",
    renameDownload: "மாற்றிய பெயரில் பதிவிறக்கவும்",
    renamePrivacy: "உங்கள் கோப்பு இந்தச் சாதனத்திலேயே இருக்கும். பதிவேற்றப்படாது.",
    renameEmptyName: "முதலில் கோப்பிற்குப் பெயர் உள்ளிடவும்.",
    renameDownloaded: "பதிவிறக்கம் செய்யப்பட்டது: {filename}",
    resetChecklist: "குறிகளை அழிக்கவும்",
    docApplication: "கையொப்பமிட்ட இணைய விண்ணப்பம்",
    detailApplication: "சமர்ப்பித்த விண்ணப்பத்தை அச்சிட்டு கையொப்பமிடவும்.",
    docApplication1: "அதிபர் சான்றிதழ் அல்லது உறுதிமொழிப் பத்திரம்",
    detailApplication1: "பாடசாலை விண்ணப்பதாரர்: அதிபர் கையொப்பமிட்ட சான்றிதழ். வெளிவாரி விண்ணப்பதாரர்: சமாதான நீதவான் அல்லது உறுதிமொழி ஆணையாளர் சான்றளித்த பத்திரம்.",
    docNic: "NIC அல்லது செல்லுபடியாகும் கடவுச்சீட்டு",
    detailNic: "அடையாள ஆவணத்தின் தெளிவான படத்தைத் தேர்ந்தெடுக்கவும்.",
    docAl: "G.C.E. A/L சான்றிதழ்கள்",
    detailAl: "A/L சான்றிதழையும் பொதுப் பொதுத் தேர்வில் சித்தியடைந்த ஆண்டுக்கான சான்றிதழையும் சேர்க்கவும்.",
    docOl: "G.C.E. O/L சான்றிதழ்",
    docSchoolLeaving: "பாடசாலை விலகல் சான்றிதழ்",
    docBirth: "பிறப்புச் சான்றிதழ்",
    detailOriginal: "அசல் சான்றிதழின் தெளிவான படத்தைத் தேர்ந்தெடுக்கவும்.",
    docAppeal: "பட்டப்படிப்பு விருப்பத்தை மாற்றும் கோரிக்கை",
    detailAppeal: "பட்டப்படிப்பு விருப்பத்தைச் சேர்க்க, நீக்க அல்லது மாற்ற விரும்பினால் மட்டும்.",
    docBridging: "பாலப் பாடநெறி பெறுபேறுகள்",
    detailBridging: "பாலப் பாடநெறியைப் பின்பற்றியிருந்தால் மட்டும்.",
    docRequest: "வேறு விண்ணப்பத் திருத்தக் கோரிக்கை",
    detailRequest: "விண்ணப்பத்தில் வேறு மாற்றம் கோர வேண்டியிருந்தால் மட்டும்.",
    choosePhotos: "படங்களைத் தேர்ந்தெடு",
    createPdf: "PDF உருவாக்கு",
    removePhoto: "நீக்கு",
    sendScansTitle: "உங்கள் அழைப்பில் உள்ள முகவரிக்கு கோப்புகளை அனுப்பவும்.",
    sendScansText: "இவ்வழிகாட்டிக்கு வழங்கப்பட்ட நேர்முகத் தேர்வு மின்னஞ்சலின்படி, ifsls5@mail.mohe.gov.lk முகவரிக்கு PDF அல்லது படங்களை ஒரு மணி நேரத்திற்கு முன் அனுப்பவும். அசல் ஆவணங்களை உடன் வைத்திருக்கவும். உங்கள் அழைப்பில் வேறு வழிமுறை இருந்தால் அதைப் பின்பற்றவும்.",
    scanEyebrow: "அனுப்புவதற்கு முன்",
    scanTitle: "உங்கள் PDF-ஐச் சரிபார்க்கவும்",
    scanText: "பதிவிறங்கிய PDF-ஐத் திறக்கவும். ஒவ்வொரு பக்கமும் நேராகவும் தெளிவாகவும் முழுமையாகவும் உள்ளதா எனப் பார்க்கவும். ஒவ்வொரு ஆவணத்திற்கும் தனி PDF உருவாக்கி, அசல் ஆவணங்களை நேர்முகத் தேர்வுக்குக் கொண்டு செல்லவும்.",
    feedbackEyebrow: "மாணவர் ஆதரவைத் தொடர்புகொள்ளுங்கள்",
    feedbackTitle: "உதவி தேவையா அல்லது கருத்தைப் பகிர விரும்புகிறீர்களா?",
    feedbackIntro: "விண்ணப்பம் பற்றிய கேள்வியை அனுப்பவும், ஆவண உதவி கேட்கவும் அல்லது தளத்தைப் பற்றிய கருத்தைப் பகிரவும். உங்கள் மின்னஞ்சலுக்கு பதில் அளிக்கலாம்.",
    feedbackName: "உங்கள் பெயர்",
    feedbackEmail: "மின்னஞ்சல் முகவரி",
    feedbackTopic: "உங்களுக்கு எந்த உதவி தேவை?",
    feedbackTopicChoose: "ஒரு தலைப்பைத் தேர்ந்தெடுக்கவும்",
    feedbackTopicApplication: "விண்ணப்பம் பற்றிய கேள்வி",
    feedbackTopicDocuments: "ஆவண உதவி",
    feedbackTopicGeneral: "இணையதளம் பற்றிய கருத்து",
    feedbackMessage: "உங்கள் செய்தி",
    feedbackPrivacy: "உங்கள் பெயர், மின்னஞ்சல், தலைப்பு மற்றும் செய்தி ஆதரவு தரவுத்தளத்தில் சேமிக்கப்படும்; குழு உங்களுக்குப் பதிலளிக்கும். NIC எண் அல்லது தனிப்பட்ட ஆவணங்களை அனுப்ப வேண்டாம்.",
    feedbackSubmit: "மாணவர் ஆதரவுக்கு அனுப்பவும்",
    feedbackSending: "உங்கள் கருத்து அனுப்பப்படுகிறது…",
    feedbackSuccess: "நன்றி. உங்கள் கருத்து கிடைத்தது.",
    feedbackError: "கருத்தை அனுப்ப முடியவில்லை. பின்னர் மீண்டும் முயற்சிக்கவும்.",
    supportEyebrow: "இன்னும் உதவி தேவையா?",
    supportTitle: "உதவி தேவையா? கேளுங்கள்.",
    supportText: "விண்ணப்பக் கேள்விகள் அல்லது ஆவண உதவிக்கு தொடர்புப் படிவத்தைப் பயன்படுத்தவும். தனிப்பட்ட ஆவணங்களை WhatsApp வழியாக அனுப்ப வேண்டாம்.",
    goToContactForm: "தொடர்புப் படிவத்திற்குச் செல்லவும்",
    whatsapp: "WhatsApp",
    whatsappNote: "WhatsApp உதவி எண் இன்னும் சேர்க்கப்படவில்லை.",
    footerNotice: "சுயாதீன மாணவர் வழிகாட்டி. காலக்கெடு மற்றும் தகுதிகளை அதிகாரப்பூர்வ தகவல்களில் உறுதிப்படுத்தவும்.",
    footerOfficial: "அதிகாரப்பூர்வ IFSLS இணையதளம் ↗",
    checklistCount: "தயார்: {ready} / {total}",
    selectedPhotos: "{count} படம்(கள்) தேர்வு செய்யப்பட்டன",
    noPhotos: "இதுவரை படங்கள் தேர்வு செய்யப்படவில்லை.",
    processingPdf: "PDF உருவாக்கப்படுகிறது…",
    pdfSaved: "பதிவிறக்கம் செய்யப்பட்டது: {filename}",
    pdfLibraryMissing: "PDF கருவி ஏற்றப்படவில்லை. இணைய இணைப்பைச் சரிபார்த்து பக்கத்தை மீண்டும் திறக்கவும்.",
    pdfFailed: "PDF உருவாக்க முடியவில்லை. JPG அல்லது PNG படத்தை முயற்சிக்கவும்.",
    maxPhotos: "ஒரு ஆவணத்திற்கு அதிகபட்சம் {count} படங்களைத் தேர்ந்தெடுக்கவும்.",
    photoTooLarge: "ஒவ்வொரு படமும் 15 MB-க்கு குறைவாக இருக்க வேண்டும்.",
    notAnImage: "JPG அல்லது PNG போன்ற படக் கோப்பைத் தேர்ந்தெடுக்கவும்.",
    selectedPhotosLabel: "தேர்ந்தெடுத்த படங்கள்",
    removePhotoLabel: "படத்தை நீக்கு",
  },
};

let currentLanguage = "en";
const checkboxes = Array.from(document.querySelectorAll(".document-list input[type='checkbox']"));
const checklistCount = document.querySelector("#checklist-count");
const progressFill = document.querySelector("#progress-fill");
const uploadErrors = new Map();

function text(key, values = {}) {
  let value = translations[currentLanguage][key] || translations.en[key] || key;
  Object.entries(values).forEach(([name, replacement]) => {
    value = value.replace(`{${name}}`, String(replacement));
  });
  return value;
}

function updateChecklist() {
  const readyCount = checkboxes.filter((checkbox) => checkbox.checked).length;
  checklistCount.textContent = text("checklistCount", { ready: readyCount, total: checkboxes.length });
  progressFill.style.width = `${checkboxes.length ? (readyCount / checkboxes.length) * 100 : 0}%`;
  try {
    localStorage.setItem(
      checklistStorageKey,
      JSON.stringify(checkboxes.filter((checkbox) => checkbox.checked).map((checkbox) => checkbox.dataset.item)),
    );
  } catch {
    // Checklist still works for this visit if local storage is unavailable.
  }
}

function updateUploadStatus(item) {
  const input = document.querySelector(`[data-photo-input="${item}"]`);
  const status = document.querySelector(`[data-upload-status="${item}"]`);
  const createButton = document.querySelector(`[data-create-pdf="${item}"]`);
  const files = Array.from(input.files || []);
  const errorKey = uploadErrors.get(item);
  status.textContent = errorKey
    ? text(errorKey, { count: maximumPhotosPerDocument })
    : files.length
      ? text("selectedPhotos", { count: files.length })
      : text("noPhotos");
  createButton.disabled = files.length === 0 || Boolean(errorKey);
}

function setLanguage(language) {
  currentLanguage = translations[language] ? language : "en";
  document.documentElement.lang = currentLanguage;
  document.title = text("pageTitle");
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = text(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = text(element.dataset.i18nPlaceholder);
  });
  document.querySelectorAll(".photo-preview").forEach((list) => {
    list.setAttribute("aria-label", text("selectedPhotosLabel"));
  });
  document.querySelector("#language-select").value = currentLanguage;
  try {
    localStorage.setItem(languageStorageKey, currentLanguage);
  } catch {
    // The language still changes for this visit if local storage is unavailable.
  }
  updateChecklist();
  document.querySelectorAll("[data-photo-input]").forEach((input) => updateUploadStatus(input.dataset.photoInput));
}

function renderPhotoPreview(input) {
  const item = input.dataset.photoInput;
  const preview = document.querySelector(`[data-photo-preview="${item}"]`);
  const files = Array.from(input.files || []);
  preview.replaceChildren();

  files.forEach((file, index) => {
    const entry = document.createElement("li");
    const thumbnail = document.createElement("img");
    const name = document.createElement("span");
    const remove = document.createElement("button");
    const imageUrl = URL.createObjectURL(file);

    thumbnail.src = imageUrl;
    thumbnail.alt = "";
    name.textContent = file.name;
    remove.type = "button";
    remove.className = "remove-photo";
    remove.textContent = "×";
    remove.setAttribute("aria-label", `${text("removePhotoLabel")} ${file.name}`);
    remove.addEventListener("click", () => {
      const remainingFiles = files.filter((_, fileIndex) => fileIndex !== index);
      const transfer = new DataTransfer();
      remainingFiles.forEach((remainingFile) => transfer.items.add(remainingFile));
      input.files = transfer.files;
      uploadErrors.delete(item);
      renderPhotoPreview(input);
      updateUploadStatus(item);
      URL.revokeObjectURL(imageUrl);
    });

    entry.append(thumbnail, name, remove);
    preview.append(entry);
  });

  updateUploadStatus(item);
}

function validatePhotos(files) {
  if (files.length > maximumPhotosPerDocument) return "maxPhotos";
  if (files.some((file) => !file.type.startsWith("image/"))) return "notAnImage";
  if (files.some((file) => file.size > maximumPhotoSize)) return "photoTooLarge";
  return "";
}

function imageToJpeg(file) {
  return new Promise((resolve, reject) => {
    const imageUrl = URL.createObjectURL(file);
    const image = new Image();
    image.onload = () => {
      const maximumDimension = 3000;
      const scale = Math.min(1, maximumDimension / Math.max(image.naturalWidth, image.naturalHeight));
      const canvas = document.createElement("canvas");
      canvas.width = Math.round(image.naturalWidth * scale);
      canvas.height = Math.round(image.naturalHeight * scale);
      const context = canvas.getContext("2d");
      if (!context) {
        URL.revokeObjectURL(imageUrl);
        reject(new Error("Could not read this photo."));
        return;
      }
      context.fillStyle = "#ffffff";
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      URL.revokeObjectURL(imageUrl);
      resolve(canvas.toDataURL("image/jpeg", 0.9));
    };
    image.onerror = () => {
      URL.revokeObjectURL(imageUrl);
      reject(new Error("Could not open this photo."));
    };
    image.src = imageUrl;
  });
}

function recordUsage(eventName, documentType = "") {
  fetch("/api/usage", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ event: eventName, language: currentLanguage, documentType }),
    keepalive: true,
  }).catch(() => {});
}

async function copyEmailText(targetName) {
  const target = targetName === "email-recipient"
    ? document.querySelector(".email-recipient a").textContent
    : document.querySelector(`#${targetName}`).value;
  const status = document.querySelector("#copy-status");

  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(target);
    } else {
      const temporaryField = document.createElement("textarea");
      temporaryField.value = target;
      temporaryField.style.position = "fixed";
      temporaryField.style.opacity = "0";
      document.body.append(temporaryField);
      temporaryField.select();
      const copied = document.execCommand("copy");
      temporaryField.remove();
      if (!copied) throw new Error("Clipboard copy failed.");
    }
    status.textContent = text("copiedText");
    status.className = "copy-status is-success";
    recordUsage("email_template_copy");
  } catch {
    status.textContent = text("copyFailed");
    status.className = "copy-status is-error";
  }
}

async function createDocumentPdf(button) {
  const item = button.dataset.createPdf;
  const input = document.querySelector(`[data-photo-input="${item}"]`);
  const status = document.querySelector(`[data-upload-status="${item}"]`);
  const files = Array.from(input.files || []);
  const pdfLibrary = window.jspdf && window.jspdf.jsPDF;

  if (!pdfLibrary) {
    status.textContent = text("pdfLibraryMissing");
    return;
  }

  button.disabled = true;
  status.textContent = text("processingPdf");

  try {
    const pdf = new pdfLibrary({ orientation: "portrait", unit: "mm", format: "a4", compress: true });
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const margin = 8;

    for (const [index, file] of files.entries()) {
      if (index > 0) pdf.addPage();
      const imageData = await imageToJpeg(file);
      const properties = pdf.getImageProperties(imageData);
      const scale = Math.min(
        (pageWidth - margin * 2) / properties.width,
        (pageHeight - margin * 2) / properties.height,
      );
      const width = properties.width * scale;
      const height = properties.height * scale;
      pdf.addImage(imageData, "JPEG", (pageWidth - width) / 2, (pageHeight - height) / 2, width, height);
    }

    const fileName = document.querySelector(`[data-document="${item}"]`).dataset.fileName;
    pdf.save(`${fileName}.pdf`);
    status.textContent = text("pdfSaved", { filename: `${fileName}.pdf` });
    recordUsage("pdf_created", item);
  } catch {
    status.textContent = text("pdfFailed");
  } finally {
    button.disabled = files.length === 0 || Boolean(uploadErrors.get(item));
  }
}

function selectedFileExtension(fileName) {
  const finalDot = fileName.lastIndexOf(".");
  return finalDot > 0 ? fileName.slice(finalDot).replace(/[^.a-z0-9]/gi, "").slice(0, 16) : "";
}

function updateRenameButton() {
  const selectedFile = document.querySelector("#rename-file").files[0];
  const hasFileName = document.querySelector("#rename-name").value.trim().length > 0;
  document.querySelector("#rename-download").disabled = !selectedFile || !hasFileName;
}

function downloadRenamedFile() {
  const file = document.querySelector("#rename-file").files[0];
  const nameField = document.querySelector("#rename-name");
  const status = document.querySelector("#rename-status");
  const safeName = nameField.value
    .trim()
    .replace(/[<>:"/\\|?*\u0000-\u001f]/g, "-")
    .replace(/[. ]+$/g, "")
    .slice(0, 100);

  if (!file) return;
  if (!safeName) {
    status.textContent = text("renameEmptyName");
    return;
  }

  const fileName = `${safeName}${selectedFileExtension(file.name)}`;
  const downloadUrl = URL.createObjectURL(file);
  const downloadLink = document.createElement("a");
  downloadLink.href = downloadUrl;
  downloadLink.download = fileName;
  document.body.append(downloadLink);
  downloadLink.click();
  downloadLink.remove();
  window.setTimeout(() => URL.revokeObjectURL(downloadUrl), 1000);
  status.textContent = text("renameDownloaded", { filename: fileName });
  recordUsage("file_renamed");
}

try {
  const savedItems = JSON.parse(localStorage.getItem(checklistStorageKey) || "[]");
  checkboxes.forEach((checkbox) => {
    checkbox.checked = savedItems.includes(checkbox.dataset.item);
  });
} catch {
  // Start with an empty checklist if saved data is unavailable.
}

let savedLanguage = "en";
try {
  savedLanguage = localStorage.getItem(languageStorageKey) || "en";
} catch {
  // English is the default if saved preferences are unavailable.
}

setLanguage(savedLanguage);
recordUsage("guide_opened");
checkboxes.forEach((checkbox) => checkbox.addEventListener("change", updateChecklist));
document.querySelector("#language-select").addEventListener("change", (event) => {
  setLanguage(event.target.value);
  recordUsage("language_changed");
});

document.querySelector("#reset-checklist").addEventListener("click", () => {
  checkboxes.forEach((checkbox) => { checkbox.checked = false; });
  updateChecklist();
});

document.querySelectorAll("[data-photo-input]").forEach((input) => {
  input.addEventListener("change", () => {
    const files = Array.from(input.files || []);
    const errorKey = validatePhotos(files);
    if (errorKey) uploadErrors.set(input.dataset.photoInput, errorKey);
    else uploadErrors.delete(input.dataset.photoInput);
    renderPhotoPreview(input);
  });
});

document.querySelectorAll("[data-create-pdf]").forEach((button) => {
  button.addEventListener("click", () => createDocumentPdf(button));
});

document.querySelector("#rename-file").addEventListener("change", (event) => {
  const file = event.currentTarget.files[0];
  const nameField = document.querySelector("#rename-name");
  const extension = file ? selectedFileExtension(file.name) : "";
  nameField.value = file ? file.name.slice(0, file.name.length - extension.length) : "";
  document.querySelector("#rename-extension").textContent = extension;
  document.querySelector("#rename-status").textContent = text("renamePrivacy");
  updateRenameButton();
});

document.querySelector("#rename-name").addEventListener("input", updateRenameButton);
document.querySelector("#rename-download").addEventListener("click", downloadRenamedFile);

document.querySelectorAll("[data-copy-target]").forEach((button) => {
  button.addEventListener("click", () => copyEmailText(button.dataset.copyTarget));
});

document.querySelector("#feedback-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const submitButton = document.querySelector("#feedback-submit");
  const status = document.querySelector("#feedback-status");
  submitButton.disabled = true;
  status.className = "";
  status.textContent = text("feedbackSending");

  try {
    const response = await fetch("/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(new FormData(form))),
    });
    if (!response.ok) throw new Error("Feedback request was rejected.");
    form.reset();
    status.textContent = text("feedbackSuccess");
    status.classList.add("is-success");
  } catch {
    status.textContent = text("feedbackError");
    status.classList.add("is-error");
  } finally {
    submitButton.disabled = false;
  }
});

if (SUPPORT_WHATSAPP_NUMBER) {
  const digits = SUPPORT_WHATSAPP_NUMBER.replace(/\D/g, "");
  const whatsappLink = document.querySelector("#whatsapp-link");
  const message = encodeURIComponent("Hello, I need help with my Interest Free Student Loan Scheme application.");
  whatsappLink.href = `https://wa.me/${digits}?text=${message}`;
  whatsappLink.classList.remove("is-disabled");
  whatsappLink.removeAttribute("aria-disabled");
  whatsappLink.target = "_blank";
  whatsappLink.rel = "noreferrer";
  document.querySelector("#whatsapp-note").textContent = "A message is ready to send. Do not include your NIC or private documents in chat.";
}