/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Buttondown embed-subscribe form action URL. When set, waitlist POSTs there. */
  readonly VITE_BUTTONDOWN_FORM_ACTION?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
