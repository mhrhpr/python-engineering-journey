# Ghablkar Product Brief — OMIND.FORGE

## Executive decision

Build a consumer-first "before the technician" layer for Iran home services.

### Product promise

Before you pay or book:
- understand the symptom
- see a reference price band
- understand urgency/safety
- know what to ask
- create a better service request

### Why not a generic marketplace?

Current market leaders already provide very broad service catalogs and established matching/review flows. Khedmat Az Ma states 650 services across 77+ cities; Achareh reports millions of customers and hundreds of thousands of specialists; Sanjagh explicitly supports comparing provider quotes and shows market reference tables. This makes "another marketplace" a poor low-capital wedge.

### Observed user problems

1. Price uncertainty
2. Difficulty distinguishing diagnosis from upselling
3. Need to know what should be included before work starts
4. Trust / support concerns
5. Need for fast access without installing another app

Achareh's published 2024 support statistics reported 32% of support calls were for phone booking and 30.9% for price inquiry, reinforcing the importance of pre-booking clarity.

### Current economic context

Iran's consumer price index was reported as up 88.6% year-over-year in June 2026. Therefore the product must treat pricing as a dated reference range, not a permanent tariff.

## Initial scope

Tehran first.

Categories:
- Plumbing / building services
- Package systems
- Air conditioning
- Electrical

Electrical guidance is deliberately conservative. The product does not provide dangerous DIY repair instructions.

## Revenue hypothesis

Consumers use the front-end for free.

Service providers pay for qualified leads.

Illustrative target scenario:
200 qualified leads / month × 150,000 تومان = 30,000,000 تومان / month.

This is a target scenario, not a forecast or guarantee.

## MVP shipped

- Persian-first responsive consumer UX
- 3-step symptom flow
- 4 service categories
- service-specific first assessment
- market reference price bands
- safety notes
- "questions to ask" checklist
- lead request form
- localStorage persistence for MVP
- product/business documentation
- automated QA workflow

## Production gap

The MVP is not yet a live marketplace. The next architecture layer is:

User → API → lead store → routing → verified provider → status → feedback

Recommended next production stack:
- Next.js
- PostgreSQL
- Prisma
- lightweight admin/provider dashboard
- SMS provider
- analytics

Do not build native mobile apps, complex bidding, payments, or AI diagnosis before lead demand is validated.

## North-star metric

Qualified leads successfully matched to a provider.

Supporting funnel:
Visit → Start check → Complete assessment → Request → Provider accepts → Job completed → Repeat / referral
