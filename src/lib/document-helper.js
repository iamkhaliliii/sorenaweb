'use client';

/**
 * Safely checks if the code is running in a browser environment
 * by testing for the presence of the window object
 */
export const isBrowser = typeof window !== 'undefined';

/**
 * Safe createTag function that only runs in browser environment
 * This is meant to replace any unsafe document reference
 */
export function safeCreateTag(name, props = {}) {
  if (!isBrowser) return null;
  
  const tag = document.createElement(name);
  
  Object.entries(props).forEach(([key, value]) => {
    tag[key] = value;
  });
  
  return tag;
}

/**
 * Safely append a tag to the document head
 */
export function safeAppendTag(tag) {
  if (!isBrowser || !tag) return;
  document.head.appendChild(tag);
}

/**
 * Safely get document elements
 */
export function safeQuerySelector(selector) {
  if (!isBrowser) return null;
  return document.querySelector(selector);
}

/**
 * Helper to execute code only on the client
 */
export function runOnlyInBrowser(callback) {
  if (isBrowser) {
    callback();
  }
} 