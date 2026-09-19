# قبل‌کار (Ghablkar) — OMIND.FORGE MVP

## Product thesis

A consumer-first "before the technician" layer for home-repair services in Iran.

The market already contains large generic marketplaces. The MVP deliberately does **not** try to beat them on catalog size. It focuses on the step before booking:

1. symptom intake
2. plain-language first assessment
3. market reference price range
4. urgency / safety note
5. questions to ask the technician
6. qualified service request

## Initial market

Tehran first. Initial categories:
- plumbing / building services
- package
- AC
- electrical

## Monetization hypothesis

Consumer use remains free.

Revenue is expected from service providers paying for qualified leads. One illustrative target scenario for 30m تومان/month:

200 qualified leads/month × 150,000 تومان per lead = 30,000,000 تومان/month.

This is a business target, not a forecast or guarantee.

## Evidence

- Current Iran home-service platforms already cover hundreds of services and dozens of cities.
- Common competing patterns: fixed-price ordering, multi-provider quotes, profiles/reviews.
- Recent platform/support evidence shows price inquiry and service booking are material user needs.
- Current market pricing is volatile, so the product labels price as a reference range, not a guaranteed final price.

## Current MVP status

Static front-end prototype with:
- interactive diagnostic flow
- service-specific result logic
- market reference pricing
- safety prompts
- lead/request form
- localStorage request persistence
- Persian-first UI

## Next production steps

1. Real lead capture API / database
2. Provider dashboard
3. Provider verification workflow
4. SMS / call routing
5. Dynamic price source ingestion
6. Evidence-backed diagnosis library
7. Lead quality scoring
8. Payment / invoicing
9. Analytics and conversion funnel
