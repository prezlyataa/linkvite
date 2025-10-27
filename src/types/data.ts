/**
 * HEADER SECTION
 */

/** Один пункт меню в шапці */
export interface HeaderMenuItem {
  label: string;
  href: string;
}

/** Тип для всієї секції Header */
export interface HeaderSection {
  menuItems: HeaderMenuItem[];
  names: string;
  slogan?: string;
}

/**
 * HERO SECTION
 */

/** Налаштування музики у hero-блоці */
export interface HeroMusic {
  enabled: boolean;
  track?: string;
}

/** Головна секція з іменами, фото та кнопкою */
export interface HeroSection {
  image: string;
  names: string;
  date: string;
  buttonText: string;
  slogan?: string;
  music?: HeroMusic;
}

/**
 * COUNTDOWN SECTION
 */

export interface CountdownSection {
  enabled?: boolean;
  date: string; // ISO формат, напр. 2025-11-27T15:00:00
  sectionTitle: string;
  slogan: string;
}

/**
 * DETAILS SECTION
 */

/** Локація події */
export interface Location {
  name: string;
  address: string;
  mapUrl: string;
}

/** Тексти для кнопок */
export interface Buttons {
  map: string;
  calendar: string;
  addToCalendar: string;
}

/** Опис церемонії або банкету */
export interface CeremonyOrBanquet {
  churchImage: string; // тільки для церемонії
  restaurantImage: string; // тільки для бенкету
  additionalInfo: string;
  title: string;
  date: string;
  time: string;
  location: Location;
  buttons: Buttons;
}

/** Вся секція деталей святкування */
export interface DetailsSection {
  sectionTitle: string;
  ceremony: CeremonyOrBanquet;
  banquet: CeremonyOrBanquet;
}

/**
 * PROGRAM SECTION
 */

/** Один пункт у програмі */
export interface ProgramItem {
  time: string;
  event: string;
}

/** Повна програма дня */
export interface ProgramSection {
  sectionTitle: string;
  items: ProgramItem[];
}

/**
 * GIFTS SECTION
 */

export interface GiftsSection {
  sectionTitle: string;
  text: string;
  additionalInfo?: string;
}

/**
 * LOVE STORY SECTION
 * ===============================
 */

export interface LoveStorySection {
  sectionTitle: string;
  text: string;
  gallery: string[];
  quote?: string;
}

/**
 * RSVP SECTION
 */

export interface RsvpField {
  label: string;
  type: "text" | "number" | "textarea" | "radio" | "select";
  required?: boolean;
  options?: string[];
  googleEntryId: string;
}

export interface GuestFieldGroup {
  name: RsvpField;
  age: RsvpField;
  diet: RsvpField;
}

export interface RsvpFields {
  attendance: RsvpField;
  guests: {
    label: string;
    fields: GuestFieldGroup;
  };
}

export interface RsvpForm {
  formAction: string;
  fields: RsvpFields;
  submitText: string;
}

export interface RsvpSection {
  title: string;
  text: string;
  form: RsvpForm;
}
/**
 * FOOTER SECTION
 */

/** Посилання у футері */
export interface FooterLinks {
  website: string;
  instagram?: string;
  telegram?: string;
}

/** Уся секція футера */
export interface FooterSection {
  sectionTitle: string;
  links: FooterLinks;
  rights: string;
}
