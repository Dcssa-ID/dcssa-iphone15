import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Analytics } from '@vercel/analytics/react'
import ProfilerApp from './App.jsx'
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://217a8182f9aae96e82939a20db3e299c@o4508670667784192.ingest.us.sentry.io/4508670675582976",
  integrations: [
    Sentry.browserTracingIntegration(),
    // Sentry.(),
    Sentry.reactRouterV6BrowserTracingIntegration({
      useEffect: React.useEffect,
    }),
    Sentry.replayIntegration({
      maskAllText: false,
      blockAllMedia: false,
    }),
  ],
  tracesSampleRate: 1.0,
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Analytics />
    <ProfilerApp />
  </StrictMode>
)
