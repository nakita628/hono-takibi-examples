# Typecheck

`tsc --noEmit` over each document's generated output: routes, types, client, rpc, the seven hooks files and the
template (with its handler stubs filled by `scripts/fill-handler-stubs.mjs`). The tsconfig is the repository's
(`strict`, `exactOptionalPropertyTypes`, `noUncheckedIndexedAccess`), with TypeScript 7. There is no CI: the daily
routine and full runs update this file.

Generated with hono-takibi 0.33.1. 2021 documents: 1500 with no errors, 486 with errors, 35 not checked.

## Errors

| App | Errors | Where | Codes | Issue |
| --- | --- | --- | --- | --- |
| [opensearch](../apps/opensearch) | 75029 | `hooks/*` | TS2339 ×38452, TS2532 ×28920, TS18048 ×6400, TS7053 ×740, TS2551 ×408 | [#536](https://github.com/nakita628/hono-takibi/issues/536), [#507](https://github.com/nakita628/hono-takibi/issues/507), not classified |
| [apis-guru-misc](../apps/apis-guru-misc) · trakt-tv | 10273 | `hooks/*` | TS2339 ×10222, TS2551 ×40, TS7053 ×10, TS2344 ×1 | [#507](https://github.com/nakita628/hono-takibi/issues/507), [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [apis-guru-misc](../apps/apis-guru-misc) · clicksend | 9708 | `hooks/*` | TS2339 ×9488, TS7053 ×220 | [#507](https://github.com/nakita628/hono-takibi/issues/507), [#520](https://github.com/nakita628/hono-takibi/issues/520) |
| [apis-guru-misc](../apps/apis-guru-misc) · drchrono | 3948 | `hooks/*` | TS2339 ×3652, TS2551 ×296 | [#507](https://github.com/nakita628/hono-takibi/issues/507) |
| [apis-guru-misc](../apps/apis-guru-misc) · quotes-rest | 2166 | `hooks/*` | TS2339 ×2124, TS2551 ×42 | [#507](https://github.com/nakita628/hono-takibi/issues/507) |
| [apis-guru-misc](../apps/apis-guru-misc) · clubhouseapi | 1800 | `hooks/*` | TS18046 ×1800 | [#507](https://github.com/nakita628/hono-takibi/issues/507) |
| [apis-guru-misc](../apps/apis-guru-misc) · math-tools | 1692 | `hooks/*` | TS18046 ×1692 | [#507](https://github.com/nakita628/hono-takibi/issues/507) |
| [apis-guru-misc](../apps/apis-guru-misc) · snyk-io | 1500 | `hooks/*` | TS2339 ×1440, TS2551 ×52, TS7053 ×8 | [#507](https://github.com/nakita628/hono-takibi/issues/507) |
| [gov-bc-ca](../apps/gov-bc-ca) · router | 1296 | `hooks/*` | TS2339 ×1080, TS2551 ×216 | [#520](https://github.com/nakita628/hono-takibi/issues/520) |
| [apis-guru-misc](../apps/apis-guru-misc) · osf-io | 1260 | `hooks/*` | TS2339 ×1242, TS7053 ×10, TS2551 ×8 | [#507](https://github.com/nakita628/hono-takibi/issues/507) |
| [apis-guru-misc](../apps/apis-guru-misc) · staging-ecotaco | 1236 | `hooks/*` | TS2339 ×1208, TS2551 ×18, TS7053 ×10 | [#507](https://github.com/nakita628/hono-takibi/issues/507), [#520](https://github.com/nakita628/hono-takibi/issues/520) |
| [lichess](../apps/lichess) | 1176 | `hooks/*` | TS2339 ×1116, TS2551 ×42, TS7053 ×18 | upstream: @hono/zod-openapi types an `application/x-ndjson` response as `never` |
| [apis-guru-misc](../apps/apis-guru-misc) · tomtom-search | 1159 | `hooks/*` | TS2339 ×976, TS2551 ×172, TS7053 ×10, TS2344 ×1 | [#520](https://github.com/nakita628/hono-takibi/issues/520), [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [apis-guru-misc](../apps/apis-guru-misc) · orbit-love | 1098 | `hooks/*` | TS2339 ×1088, TS7053 ×10 | [#507](https://github.com/nakita628/hono-takibi/issues/507), not classified |
| [readme-oas-examples](../apps/readme-oas-examples) · 3-0-http-status-codes | 1093 | `hooks/*` | TS2339 ×832, TS7053 ×260, TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517); @hono/zod-openapi drops the non-standard statuses, so operations with only such responses leave the client |
| [apis-guru-misc](../apps/apis-guru-misc) · healthcare-gov | 1056 | `hooks/*` | TS2339 ×896, TS2551 ×160 | [#520](https://github.com/nakita628/hono-takibi/issues/520) |
| [confluence](../apps/confluence) | 1056 | `hooks/*` | TS2339 ×1024, TS7053 ×32 | [#507](https://github.com/nakita628/hono-takibi/issues/507) |
| [gov-bc-ca](../apps/gov-bc-ca) · geocoder | 1056 | `hooks/*` | TS2339 ×896, TS2551 ×160 | [#520](https://github.com/nakita628/hono-takibi/issues/520) |
| [apis-guru-misc](../apps/apis-guru-misc) · hhs-gov | 858 | `hooks/*` | TS2339 ×728, TS2551 ×130 | [#520](https://github.com/nakita628/hono-takibi/issues/520) |
| [apis-guru-misc](../apps/apis-guru-misc) · ritekit | 834 | `hooks/*` | TS18046 ×834 | [#507](https://github.com/nakita628/hono-takibi/issues/507) |
| [vtex](../apps/vtex) · checkout-api | 732 | `hooks/*` | TS2339 ×688, TS7053 ×44 | [#507](https://github.com/nakita628/hono-takibi/issues/507) |
| [apis-guru-misc](../apps/apis-guru-misc) · fungenerators-random-facts | 720 | `hooks/*` | TS18046 ×720 | [#507](https://github.com/nakita628/hono-takibi/issues/507) |
| [apis-guru-misc](../apps/apis-guru-misc) · highwaysengland-co-uk | 660 | `hooks/*` | TS2339 ×560, TS2551 ×100 | [#520](https://github.com/nakita628/hono-takibi/issues/520) |
| [apis-guru-misc](../apps/apis-guru-misc) · contentgroove | 648 | `hooks/*` | TS2339 ×648 | [#507](https://github.com/nakita628/hono-takibi/issues/507) |
| [apis-guru-misc](../apps/apis-guru-misc) · cloudrf | 630 | `hooks/*` | TS18046 ×630 | [#507](https://github.com/nakita628/hono-takibi/issues/507) |
| [apis-guru-misc](../apps/apis-guru-misc) · jellyfin | 612 | `hooks/*` | TS2339 ×516, TS2551 ×96 | [#520](https://github.com/nakita628/hono-takibi/issues/520) |
| [apis-guru-misc](../apps/apis-guru-misc) · opendatanetwork | 594 | `hooks/*` | TS18046 ×594 | [#507](https://github.com/nakita628/hono-takibi/issues/507) |
| [apis-guru-misc](../apps/apis-guru-misc) · traccar-org | 546 | `hooks/*` | TS2339 ×546 | [#507](https://github.com/nakita628/hono-takibi/issues/507) |
| [apis-guru-misc](../apps/apis-guru-misc) · change | 504 | `hooks/*` | TS18046 ×504 | [#507](https://github.com/nakita628/hono-takibi/issues/507) |
| [apis-guru-misc](../apps/apis-guru-misc) · xtrf-eu | 474 | `hooks/*` | TS2339 ×464, TS7053 ×10 | [#507](https://github.com/nakita628/hono-takibi/issues/507) |
| [apis-guru-misc](../apps/apis-guru-misc) · dev-to | 468 | `hooks/*` | TS2339 ×458, TS7053 ×10 | [#507](https://github.com/nakita628/hono-takibi/issues/507) |
| [weather-gov](../apps/weather-gov) | 462 | `hooks/*` | TS2339 ×392, TS7053 ×40, TS2551 ×30 | [#520](https://github.com/nakita628/hono-takibi/issues/520) |
| [jellyfin](../apps/jellyfin) | 414 | `hooks/*` | TS2339 ×348, TS2551 ×66 | [#520](https://github.com/nakita628/hono-takibi/issues/520) |
| [apis-guru-misc](../apps/apis-guru-misc) · icons8 | 396 | `hooks/*` | TS2339 ×336, TS2551 ×60 | [#520](https://github.com/nakita628/hono-takibi/issues/520) |
| [vtex](../apps/vtex) · marketplace-protocol | 378 | `hooks/*` | TS2339 ×330, TS7053 ×48 | [#507](https://github.com/nakita628/hono-takibi/issues/507), [#520](https://github.com/nakita628/hono-takibi/issues/520) |
| [apis-guru-misc](../apps/apis-guru-misc) · adobe-aem | 348 | `hooks/*` | TS2339 ×292, TS2551 ×56 | [#520](https://github.com/nakita628/hono-takibi/issues/520) |
| [aiven](../apps/aiven) | 336 | `hooks/*` | TS2339 ×304, TS7053 ×24, TS2551 ×8 | [#507](https://github.com/nakita628/hono-takibi/issues/507) |
| [fly-machines](../apps/fly-machines) | 336 | `hooks/*` | TS2339 ×328, TS2551 ×8 | [#507](https://github.com/nakita628/hono-takibi/issues/507) |
| [apis-guru-misc](../apps/apis-guru-misc) · medium | 330 | `hooks/*` | TS2339 ×280, TS2551 ×50 | [#520](https://github.com/nakita628/hono-takibi/issues/520) |
| [apis-guru-misc](../apps/apis-guru-misc) · tomtom-maps | 330 | `hooks/*` | TS2339 ×280, TS2551 ×50 | [#520](https://github.com/nakita628/hono-takibi/issues/520) |
| [gov-bc-ca](../apps/gov-bc-ca) · geomark | 330 | `hooks/*` | TS2339 ×280, TS2551 ×50 | [#520](https://github.com/nakita628/hono-takibi/issues/520) |
| [apis-guru-misc](../apps/apis-guru-misc) · fungenerators-riddle | 324 | `hooks/*` | TS18046 ×324 | [#507](https://github.com/nakita628/hono-takibi/issues/507) |
| [apis-guru-misc](../apps/apis-guru-misc) · fungenerators-shakespeare | 306 | `hooks/*` | TS18046 ×306 | [#507](https://github.com/nakita628/hono-takibi/issues/507) |
| [prometheus](../apps/prometheus) | 296 | `hooks/*` | TS2741 ×128, TS2345 ×96, TS7031 ×32, TS2558 ×32, TS2440 ×8 | [#519](https://github.com/nakita628/hono-takibi/issues/519) |
| [apis-guru-misc](../apps/apis-guru-misc) · enode-io | 294 | `hooks/*` | TS2339 ×294 | [#507](https://github.com/nakita628/hono-takibi/issues/507) |
| [martin](../apps/martin) | 282 | `hooks/*` | TS2339 ×244, TS2551 ×38 | [#507](https://github.com/nakita628/hono-takibi/issues/507), [#520](https://github.com/nakita628/hono-takibi/issues/520) |
| [apis-guru-misc](../apps/apis-guru-misc) · sms77-io | 276 | `hooks/*` | TS2339 ×276 | [#507](https://github.com/nakita628/hono-takibi/issues/507) |
| [windmill](../apps/windmill) | 266 | `hooks/*` | TS2339 ×264, TS2769 ×2 |  |
| [apis-guru-misc](../apps/apis-guru-misc) · fungenerators-pirate | 264 | `hooks/*` | TS18046 ×264 | [#507](https://github.com/nakita628/hono-takibi/issues/507) |
| [apis-guru-misc](../apps/apis-guru-misc) · nrel-gov-transportation-incentives-laws | 264 | `hooks/*` | TS2339 ×224, TS2551 ×40 | [#520](https://github.com/nakita628/hono-takibi/issues/520) |
| [nytimes](../apps/nytimes) · books-api | 264 | `hooks/*` | TS2339 ×224, TS2551 ×40 | [#520](https://github.com/nakita628/hono-takibi/issues/520) |
| [apis-guru-misc](../apps/apis-guru-misc) · clever-cloud | 261 | `hooks/*` | TS2339 ×241, TS2551 ×20 | [#520](https://github.com/nakita628/hono-takibi/issues/520), not classified |
| [huggingface](../apps/huggingface) | 258 | `hooks/*` | TS2339 ×214, TS2551 ×44 | [#520](https://github.com/nakita628/hono-takibi/issues/520) |
| [apis-guru-misc](../apps/apis-guru-misc) · wiremock-org-admin | 234 | `hooks/*` | TS2339 ×226, TS7053 ×8 | [#507](https://github.com/nakita628/hono-takibi/issues/507) |
| [apis-guru-misc](../apps/apis-guru-misc) · phantauth-net | 216 | `hooks/*` | TS2339 ×216 | [#507](https://github.com/nakita628/hono-takibi/issues/507) |
| [apis-guru-misc](../apps/apis-guru-misc) · peoplefinderspro | 210 | `hooks/*` | TS18046 ×210 | [#507](https://github.com/nakita628/hono-takibi/issues/507) |
| [parliament](../apps/parliament) · search | 209 | `hooks/*` | TS18046 ×118, TS2339 ×56, TS2345 ×21, TS2440 ×8, TS7031 ×3 | [#519](https://github.com/nakita628/hono-takibi/issues/519), [#507](https://github.com/nakita628/hono-takibi/issues/507), [#520](https://github.com/nakita628/hono-takibi/issues/520) |
| [apis-guru-misc](../apps/apis-guru-misc) · cpy-re-peertube | 198 | `hooks/*` | TS2339 ×168, TS2551 ×30 | [#520](https://github.com/nakita628/hono-takibi/issues/520) |
| [apis-guru-misc](../apps/apis-guru-misc) · digitalnz-org | 198 | `hooks/*` | TS2339 ×168, TS2551 ×30 | [#520](https://github.com/nakita628/hono-takibi/issues/520) |
| [apis-guru-misc](../apps/apis-guru-misc) · lufthansa-public | 198 | `hooks/*` | TS2339 ×168, TS2551 ×30 | [#520](https://github.com/nakita628/hono-takibi/issues/520) |
| [apis-guru-misc](../apps/apis-guru-misc) · oxforddictionaries | 198 | `hooks/*` | TS2339 ×168, TS2551 ×30 | [#520](https://github.com/nakita628/hono-takibi/issues/520) |
| [apis-guru-misc](../apps/apis-guru-misc) · telematicssdk | 198 | `hooks/*` | TS2339 ×198 | [#507](https://github.com/nakita628/hono-takibi/issues/507) |
| [frigate](../apps/frigate) | 198 | `hooks/*` | TS2339 ×168, TS2551 ×30 | [#520](https://github.com/nakita628/hono-takibi/issues/520) |
| [peertube](../apps/peertube) | 198 | `hooks/*` | TS2339 ×168, TS2551 ×30 | [#520](https://github.com/nakita628/hono-takibi/issues/520) |
| [apis-guru-misc](../apps/apis-guru-misc) · fungenerators-barcode | 192 | `hooks/*` | TS18046 ×192 | [#507](https://github.com/nakita628/hono-takibi/issues/507) |
| [apis-guru-misc](../apps/apis-guru-misc) · fungenerators-uuid | 174 | `hooks/*` | TS18046 ×174 | [#507](https://github.com/nakita628/hono-takibi/issues/507) |
| [adyen-services](../apps/adyen-services) · ManagementService-v3 | 168 | `hooks/*` | TS2339 ×168 | [#507](https://github.com/nakita628/hono-takibi/issues/507) |
| [knock](../apps/knock) · mapi | 168 | `hooks/*` | TS2339 ×168 | [#507](https://github.com/nakita628/hono-takibi/issues/507) |
| [readme-oas-examples](../apps/readme-oas-examples) · 3-0-response-multiple-mediatypes | 168 | `hooks/*` | TS2339 ×132, TS18046 ×36 | [#507](https://github.com/nakita628/hono-takibi/issues/507) |
| [nextcloud-apps](../apps/nextcloud-apps) · files-reminders | 150 | `hooks/*` | TS2339 ×124, TS2551 ×26 | [#520](https://github.com/nakita628/hono-takibi/issues/520) |
| [apis-guru-misc](../apps/apis-guru-misc) · globalwinescore | 132 | `hooks/*` | TS18046 ×132 | [#507](https://github.com/nakita628/hono-takibi/issues/507) |
| [apis-guru-misc](../apps/apis-guru-misc) · nasa-gov-asteroids-neows | 132 | `hooks/*` | TS2339 ×112, TS2551 ×20 | [#520](https://github.com/nakita628/hono-takibi/issues/520) (`{.format}` after a parameter) |
| [apis-guru-misc](../apps/apis-guru-misc) · ptv-vic-gov-au | 132 | `hooks/*` | TS2339 ×112, TS2551 ×20 | [#520](https://github.com/nakita628/hono-takibi/issues/520) |
| [gitea](../apps/gitea) | 132 | `hooks/*` | TS2339 ×112, TS2551 ×20 | [#520](https://github.com/nakita628/hono-takibi/issues/520) |
| [vtex](../apps/vtex) · logistics-api | 132 | `hooks/*` | TS2339 ×112, TS7053 ×20 | [#507](https://github.com/nakita628/hono-takibi/issues/507) |
| [misp](../apps/misp) | 126 | `hooks/*` | TS2339 ×102, TS2551 ×24 | [#520](https://github.com/nakita628/hono-takibi/issues/520) |
| [opik](../apps/opik) | 126 | `hooks/*` | TS2339 ×106, TS7053 ×20 | [#507](https://github.com/nakita628/hono-takibi/issues/507) |
| [apis-guru-misc](../apps/apis-guru-misc) · truora | 108 | `hooks/*` | TS2339 ×108 | [#507](https://github.com/nakita628/hono-takibi/issues/507) |
| [lob](../apps/lob) | 108 | `hooks/*` | TS2339 ×108 | [#507](https://github.com/nakita628/hono-takibi/issues/507) |
| [apis-guru-misc](../apps/apis-guru-misc) · yodlee | 105 | `hooks/*` | TS2339 ×84, TS2551 ×21 | [#507](https://github.com/nakita628/hono-takibi/issues/507) |
| [apis-guru-misc](../apps/apis-guru-misc) · clickup | 84 | `hooks/*` | TS18046 ×84 | [#507](https://github.com/nakita628/hono-takibi/issues/507) |
| [apis-guru-misc](../apps/apis-guru-misc) · microcks | 84 | `hooks/*` | TS2339 ×84 | [#507](https://github.com/nakita628/hono-takibi/issues/507) |
| [apis-guru-misc](../apps/apis-guru-misc) · mist | 84 | `hooks/*` | TS2339 ×68, TS2551 ×16 | [#520](https://github.com/nakita628/hono-takibi/issues/520) |
| [apis-guru-misc](../apps/apis-guru-misc) · reloadly | 84 | `hooks/*` | TS18046 ×84 | [#507](https://github.com/nakita628/hono-takibi/issues/507) |
| [apis-guru-misc](../apps/apis-guru-misc) · shipstation | 84 | `hooks/*` | TS18046 ×84 | [#507](https://github.com/nakita628/hono-takibi/issues/507) |
| [mermade-openapi3-examples](../apps/mermade-openapi3-examples) · 3-0-oai-api-with-examples | 84 | `hooks/*` | TS18046 ×84 | [#507](https://github.com/nakita628/hono-takibi/issues/507) |
| [openfaas](../apps/openfaas) | 84 | `hooks/*` | TS2339 ×68, TS2551 ×16 | [#520](https://github.com/nakita628/hono-takibi/issues/520) |
| [readme-oas-examples](../apps/readme-oas-examples) · 3-0-response-examples | 84 | `hooks/*` | TS18046 ×84 | [#507](https://github.com/nakita628/hono-takibi/issues/507) |
| [apis-guru-misc](../apps/apis-guru-misc) · bitbucket-org | 67 | `hooks/*` | TS2339 ×56, TS2551 ×10, TS2344 ×1 | [#520](https://github.com/nakita628/hono-takibi/issues/520), [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [box](../apps/box) | 67 | `hooks/*` | TS2339 ×56, TS2551 ×10, TS2375 ×1 | [#527](https://github.com/nakita628/hono-takibi/issues/527), [#520](https://github.com/nakita628/hono-takibi/issues/520) |
| [apis-guru-misc](../apps/apis-guru-misc) · apigee-net-marketcheck-cars | 66 | `hooks/*` | TS2339 ×66 | [#507](https://github.com/nakita628/hono-takibi/issues/507) |
| [apis-guru-misc](../apps/apis-guru-misc) · box | 66 | `hooks/*` | TS2339 ×56, TS2551 ×10 | [#520](https://github.com/nakita628/hono-takibi/issues/520) |
| [apis-guru-misc](../apps/apis-guru-misc) · ideal-postcodes-co-uk | 66 | `hooks/*` | TS2339 ×56, TS7053 ×10 | [#520](https://github.com/nakita628/hono-takibi/issues/520) |
| [apis-guru-misc](../apps/apis-guru-misc) · ip2location-io | 66 | `hooks/*` | TS18046 ×66 | [#507](https://github.com/nakita628/hono-takibi/issues/507) |
| [apis-guru-misc](../apps/apis-guru-misc) · opensuse-org-obs | 66 | `hooks/*` | TS2339 ×56, TS2551 ×10 | [#520](https://github.com/nakita628/hono-takibi/issues/520) |
| [apis-guru-misc](../apps/apis-guru-misc) · rebilly | 66 | `hooks/*` | TS2339 ×56, TS2551 ×10 | [#520](https://github.com/nakita628/hono-takibi/issues/520) |
| [apis-guru-misc](../apps/apis-guru-misc) · tisane-ai | 66 | `hooks/*` | TS2551 ×66 | [#507](https://github.com/nakita628/hono-takibi/issues/507) |
| [apis-guru-misc](../apps/apis-guru-misc) · whatsapp | 66 | `hooks/*` | TS2339 ×66 | [#507](https://github.com/nakita628/hono-takibi/issues/507) |
| [elastic-fleet-server](../apps/elastic-fleet-server) | 66 | `hooks/*` | TS2339 ×56, TS2551 ×10 | [#520](https://github.com/nakita628/hono-takibi/issues/520) |
| [gov-bc-ca](../apps/gov-bc-ca) · bcgnws | 66 | `hooks/*` | TS2339 ×56, TS2551 ×10 | [#520](https://github.com/nakita628/hono-takibi/issues/520) |
| [mermade-openapi3-examples](../apps/mermade-openapi3-examples) · 3-0-gluecon-example1-from-new-links-md | 66 | `hooks/*` | TS2339 ×56, TS7053 ×10 | [#507](https://github.com/nakita628/hono-takibi/issues/507) |
| [nytimes](../apps/nytimes) · top-stories | 66 | `hooks/*` | TS2339 ×56, TS2551 ×10 | [#520](https://github.com/nakita628/hono-takibi/issues/520) |
| [parliament](../apps/parliament) · erskine-may | 66 | `hooks/*` | TS2339 ×56, TS2551 ×10 | [#520](https://github.com/nakita628/hono-takibi/issues/520) |
| [personio](../apps/personio) | 66 | `hooks/*` | TS2339 ×66 | [#507](https://github.com/nakita628/hono-takibi/issues/507) |
| [vtex](../apps/vtex) · catalog-api | 66 | `hooks/*` | TS2339 ×66 | [#507](https://github.com/nakita628/hono-takibi/issues/507) |
| [whatsapp-business](../apps/whatsapp-business) | 66 | `hooks/*` | TS2339 ×56, TS7053 ×10 | [#507](https://github.com/nakita628/hono-takibi/issues/507) |
| [trello](../apps/trello) | 43 | `hooks/*` | TS2339 ×34, TS2551 ×8, TS2769 ×1 | [#520](https://github.com/nakita628/hono-takibi/issues/520), not classified |
| [adyen-services](../apps/adyen-services) · LegalEntityService-v4 | 42 | `hooks/*` | TS2339 ×42 | [#507](https://github.com/nakita628/hono-takibi/issues/507) |
| [airbyte](../apps/airbyte) | 42 | `hooks/*` | TS2339 ×42 | [#507](https://github.com/nakita628/hono-takibi/issues/507) |
| [apis-guru-misc](../apps/apis-guru-misc) · cowin-gov-cin-cowincert | 42 | `hooks/*` | TS18046 ×42 | [#507](https://github.com/nakita628/hono-takibi/issues/507) |
| [apis-guru-misc](../apps/apis-guru-misc) · dataflowkit | 42 | `hooks/*` | TS2339 ×42 | [#507](https://github.com/nakita628/hono-takibi/issues/507) |
| [apis-guru-misc](../apps/apis-guru-misc) · nowpayments-io | 42 | `hooks/*` | TS2339 ×42 | [#507](https://github.com/nakita628/hono-takibi/issues/507) |
| [apis-guru-misc](../apps/apis-guru-misc) · orthanc-server | 42 | `hooks/*` | TS2339 ×32, TS7053 ×10 | [#507](https://github.com/nakita628/hono-takibi/issues/507) |
| [apis-guru-misc](../apps/apis-guru-misc) · redhat-patchman-engine | 42 | `hooks/*` | TS2339 ×42 | [#507](https://github.com/nakita628/hono-takibi/issues/507) |
| [mermade-openapi3-examples](../apps/mermade-openapi3-examples) · 3-0-gluecon-example1-from-improved-pathdescriptions-md | 42 | `hooks/*` | TS2339 ×42 | [#507](https://github.com/nakita628/hono-takibi/issues/507) |
| [podman-ai-lab](../apps/podman-ai-lab) | 42 | `hooks/*` | TS2339 ×42 | upstream: @hono/zod-openapi types an `application/x-ndjson` response as `never` |
| [readme-oas-examples](../apps/readme-oas-examples) · 3-0-readme-extensions | 42 | `hooks/*` | TS2339 ×42 | [#507](https://github.com/nakita628/hono-takibi/issues/507) |
| [vimeo](../apps/vimeo) | 42 | `hooks/*` | TS2339 ×42 | not classified |
| [vtex](../apps/vtex) · orders-api | 42 | `hooks/*` | TS2339 ×42 | [#507](https://github.com/nakita628/hono-takibi/issues/507) |
| [vtex](../apps/vtex) · payments-gateway-api | 42 | `hooks/*` | TS2339 ×34, TS7053 ×8 | [#507](https://github.com/nakita628/hono-takibi/issues/507) |
| [apis-guru-misc](../apps/apis-guru-misc) · anchore-io | 30 | `hooks/*` | TS2393 ×12, TS2323 ×12, TS2769 ×6 | [#536](https://github.com/nakita628/hono-takibi/issues/536), not classified |
| [apis-guru-misc](../apps/apis-guru-misc) · influxdata | 24 | `hooks/*` | TS2393 ×12, TS2323 ×12 | [#536](https://github.com/nakita628/hono-takibi/issues/536) |
| [influxdb-cloud](../apps/influxdb-cloud) | 24 | `hooks/*` | TS2393 ×12, TS2323 ×12 | [#536](https://github.com/nakita628/hono-takibi/issues/536) |
| [influxdb-oss](../apps/influxdb-oss) | 24 | `hooks/*` | TS2393 ×12, TS2323 ×12 | [#536](https://github.com/nakita628/hono-takibi/issues/536) |
| [mermade-openapi3-examples](../apps/mermade-openapi3-examples) · 3-0-gluecon-example2-from-new-callbacks-md | 21 | `hooks/*` | TS2339 ×21 | [#507](https://github.com/nakita628/hono-takibi/issues/507) |
| [readme-oas-examples](../apps/readme-oas-examples) · 3-0-request-examples | 21 | `hooks/*` | TS2339 ×13, TS7053 ×8 | [#507](https://github.com/nakita628/hono-takibi/issues/507) |
| [ethereum-beacon-api](../apps/ethereum-beacon-api) | 19 | `routes.ts` | TS2304 ×15, TS2552 ×3, TS2375 ×1 | [#499](https://github.com/nakita628/hono-takibi/issues/499) (names built from JSON-pointer `$ref`s are never declared) |
| [vonage](../apps/vonage) · media | 18 | `hooks/*`, `rpc.ts` | TS2345 ×18 | spec: the paths are written `/:id` (a colon, not `{id}`) |
| [backstage-search](../apps/backstage-search) | 17 | `hooks/*` | TS2440 ×8, TS2741 ×4, TS2345 ×3, TS7031 ×1, TS2558 ×1 | [#519](https://github.com/nakita628/hono-takibi/issues/519) |
| [grafana](../apps/grafana) | 14 | `hooks/*`, `rpc.ts` | TS2345 ×10, TS2769 ×4 | spec: the path is written `/reports/images/:image` (a colon, not `{image}`) |
| [keycloak](../apps/keycloak) | 12 | `hooks/*` | TS2769 ×12 | [#511](https://github.com/nakita628/hono-takibi/issues/511) |
| [algolia](../apps/algolia) | 4 | `index.ts`, `hooks/*`, `client.ts` | TS2589 ×4 | deep types (TS2589) |
| [apis-guru-misc](../apps/apis-guru-misc) · maif-otoroshi | 4 | `hooks/*` | TS2769 ×4 | [#511](https://github.com/nakita628/hono-takibi/issues/511) |
| [e2b](../apps/e2b) | 4 | `hooks/*` | TS2769 ×4 | [#511](https://github.com/nakita628/hono-takibi/issues/511) |
| [inngest](../apps/inngest) | 4 | `hooks/*` | TS2769 ×4 | spec: a response object is used as a schema (`$ref: '#/components/responses/Webhook'`) |
| [line](../apps/line) · messaging-api | 4 | `hooks/*` | TS2769 ×4 | [#511](https://github.com/nakita628/hono-takibi/issues/511) |
| [apis-guru-misc](../apps/apis-guru-misc) · sendgrid | 2 | `hooks/*` | TS2769 ×2 | [#511](https://github.com/nakita628/hono-takibi/issues/511) |
| [apis-guru-misc](../apps/apis-guru-misc) · vercel | 2 | `types.ts`, `handlers/*` | TS2589 ×1, TS2344 ×1 | deep types (TS2589), [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [blockfrost](../apps/blockfrost) | 2 | `hooks/*` | TS2769 ×2 | [#511](https://github.com/nakita628/hono-takibi/issues/511) |
| [exa](../apps/exa) | 2 | `handlers/*` | TS2589 ×2 | deep types (TS2589) |
| [svix](../apps/svix) | 2 | `hooks/*` | TS2769 ×2 | [#511](https://github.com/nakita628/hono-takibi/issues/511) |
| [adyen-services](../apps/adyen-services) · BalancePlatformAccountingNotification-v3 | 1 | `client.ts` | TS2614 ×1 | [#518](https://github.com/nakita628/hono-takibi/issues/518) |
| [adyen-services](../apps/adyen-services) · BalancePlatformAcsNotification-v1 | 1 | `client.ts` | TS2614 ×1 | [#518](https://github.com/nakita628/hono-takibi/issues/518) |
| [adyen-services](../apps/adyen-services) · BalancePlatformBalanceNotification-v1 | 1 | `client.ts` | TS2614 ×1 | [#518](https://github.com/nakita628/hono-takibi/issues/518) |
| [adyen-services](../apps/adyen-services) · BalancePlatformConfigurationNotification-v2 | 1 | `client.ts` | TS2614 ×1 | [#518](https://github.com/nakita628/hono-takibi/issues/518) |
| [adyen-services](../apps/adyen-services) · BalancePlatformDisputeNotification-v1 | 1 | `client.ts` | TS2614 ×1 | [#518](https://github.com/nakita628/hono-takibi/issues/518) |
| [adyen-services](../apps/adyen-services) · BalancePlatformGrantNotification-v1 | 1 | `client.ts` | TS2614 ×1 | [#518](https://github.com/nakita628/hono-takibi/issues/518) |
| [adyen-services](../apps/adyen-services) · BalancePlatformManagedRiskNotification-v1 | 1 | `client.ts` | TS2614 ×1 | [#518](https://github.com/nakita628/hono-takibi/issues/518) |
| [adyen-services](../apps/adyen-services) · BalancePlatformNegativeBalanceCompensationWarningNotification-v1 | 1 | `client.ts` | TS2614 ×1 | [#518](https://github.com/nakita628/hono-takibi/issues/518) |
| [adyen-services](../apps/adyen-services) · BalancePlatformPaymentNotification-v1 | 1 | `client.ts` | TS2614 ×1 | [#518](https://github.com/nakita628/hono-takibi/issues/518) |
| [adyen-services](../apps/adyen-services) · BalancePlatformRelayedAuthorisationNotification-v4 | 1 | `client.ts` | TS2614 ×1 | [#518](https://github.com/nakita628/hono-takibi/issues/518) |
| [adyen-services](../apps/adyen-services) · BalancePlatformReportNotification-v1 | 1 | `client.ts` | TS2614 ×1 | [#518](https://github.com/nakita628/hono-takibi/issues/518) |
| [adyen-services](../apps/adyen-services) · BalancePlatformTransactionNotification-v4 | 1 | `client.ts` | TS2614 ×1 | [#518](https://github.com/nakita628/hono-takibi/issues/518) |
| [adyen-services](../apps/adyen-services) · BalancePlatformTransferNotification-v4 | 1 | `client.ts` | TS2614 ×1 | [#518](https://github.com/nakita628/hono-takibi/issues/518) |
| [adyen-services](../apps/adyen-services) · ForwardApiNotification-v1 | 1 | `client.ts` | TS2614 ×1 | [#518](https://github.com/nakita628/hono-takibi/issues/518) |
| [adyen-services](../apps/adyen-services) · ManagementNotificationService-v3 | 1 | `client.ts` | TS2614 ×1 | [#518](https://github.com/nakita628/hono-takibi/issues/518) |
| [adyen-services](../apps/adyen-services) · MarketPayNotificationService-v6 | 1 | `client.ts` | TS2614 ×1 | [#518](https://github.com/nakita628/hono-takibi/issues/518) |
| [adyen-services](../apps/adyen-services) · TokenizationNotification-v1 | 1 | `client.ts` | TS2614 ×1 | [#518](https://github.com/nakita628/hono-takibi/issues/518) |
| [adyen-services](../apps/adyen-services) · Webhooks-v1 | 1 | `client.ts` | TS2614 ×1 | [#518](https://github.com/nakita628/hono-takibi/issues/518) |
| [alpaca-broker](../apps/alpaca-broker) | 1 | `hooks/*` | TS2589 ×1 | deep types (TS2589) |
| [apis-guru-misc](../apps/apis-guru-misc) · firstinspires-org | 1 | `client.ts` | TS2614 ×1 | [#518](https://github.com/nakita628/hono-takibi/issues/518) |
| [apis-guru-misc](../apps/apis-guru-misc) · ipinfodb | 1 | `client.ts` | TS2614 ×1 | [#518](https://github.com/nakita628/hono-takibi/issues/518) |
| [apis-guru-misc](../apps/apis-guru-misc) · kumpeapps | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [apis-guru-misc](../apps/apis-guru-misc) · linode | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [apis-guru-misc](../apps/apis-guru-misc) · optimade | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [apis-guru-misc](../apps/apis-guru-misc) · slack | 1 | `hooks/*` | TS2589 ×1 | deep types (TS2589) |
| [apis-guru-misc](../apps/apis-guru-misc) · tomtom-routing | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [apis-guru-misc](../apps/apis-guru-misc) · wealthreader | 1 | `hooks/*` | TS2589 ×1 | deep types (TS2589) |
| [apis-guru-misc](../apps/apis-guru-misc) · youneedabudget | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [apis-guru-misc](../apps/apis-guru-misc) · zenoti | 1 | `client.ts` | TS2614 ×1 | [#518](https://github.com/nakita628/hono-takibi/issues/518) |
| [aws-apis](../apps/aws-apis) · accessanalyzer | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · acm | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · acm-pca | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · alexaforbusiness | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · amp | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · amplify | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · amplifybackend | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · apigateway | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · apigatewaymanagementapi | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · apigatewayv2 | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · appconfig | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · appflow | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · appintegrations | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · application-autoscaling | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · application-insights | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · applicationcostprofiler | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · appmesh | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · apprunner | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · appstream | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · appsync | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · athena | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · auditmanager | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · autoscaling | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · autoscaling-plans | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · awsmigrationhub | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · backup | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · batch | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · braket | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · budgets | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · ce | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · chime | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · cloud9 | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · clouddirectory | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · cloudformation | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · cloudfront | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · cloudhsm | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · cloudhsmv2 | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · cloudsearch | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · cloudsearchdomain | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · cloudtrail | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · codeartifact | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · codebuild | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · codecommit | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · codedeploy | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · codeguru-reviewer | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · codeguruprofiler | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · codepipeline | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · codestar | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · codestar-connections | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · codestar-notifications | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · cognito-identity | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · cognito-idp | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · cognito-sync | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · comprehend | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · comprehendmedical | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · compute-optimizer | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · config | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · connect | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · connect-contact-lens | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · connectparticipant | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · cur | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · customer-profiles | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · databrew | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · dataexchange | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · datapipeline | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · datasync | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · dax | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · detective | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · devicefarm | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · devops-guru | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · directconnect | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · discovery | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · dlm | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · dms | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · docdb | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · ds | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · dynamodb | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · ebs | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · ec2-instance-connect | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · ecr | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · ecr-public | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · ecs | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · eks | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · elastic-inference | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · elasticache | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · elasticbeanstalk | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · elasticfilesystem | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · elasticloadbalancing | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · elasticloadbalancingv2 | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · elasticmapreduce | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · elastictranscoder | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · email | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · emr-containers | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · entitlement-marketplace | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · es | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · eventbridge | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · events | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · finspace | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · finspace-data | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · firehose | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · fis | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · fms | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · forecast | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · forecastquery | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · frauddetector | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · fsx | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · gamelift | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · glacier | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · globalaccelerator | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · glue | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · greengrass | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · greengrassv2 | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · groundstation | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · guardduty | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · health | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · healthlake | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · honeycode | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · iam | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · identitystore | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · imagebuilder | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · importexport | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · inspector | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · iot | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · iot-data | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · iot-jobs-data | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · iot1click-devices | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · iot1click-projects | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · iotanalytics | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · iotdeviceadvisor | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · iotevents | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · iotevents-data | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · iotfleethub | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · iotsecuretunneling | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · iotsitewise | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · iotthingsgraph | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · iotwireless | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · ivs | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · kafka | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · kendra | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · kinesis | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · kinesis-video-archived-media | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · kinesis-video-media | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · kinesis-video-signaling | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · kinesisanalytics | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · kinesisanalyticsv2 | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · kinesisvideo | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · kms | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · lakeformation | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · lambda | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · lex-models | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · license-manager | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · lightsail | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · location | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · logs | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · lookoutequipment | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · lookoutmetrics | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · lookoutvision | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · machinelearning | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · macie | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · macie2 | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · managedblockchain | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · marketplace-catalog | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · marketplacecommerceanalytics | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · mediaconnect | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · mediaconvert | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · medialive | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · mediapackage | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · mediapackage-vod | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · mediastore | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · mediastore-data | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · mediatailor | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · meteringmarketplace | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · mgn | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · migrationhub-config | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · mobile | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · models-lex-v2 | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · monitoring | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · mq | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · mturk-requester | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · mwaa | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · neptune | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · network-firewall | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · networkmanager | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · nimble | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · opsworks | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · opsworkscm | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · organizations | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · outposts | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · personalize | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · personalize-events | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · personalize-runtime | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · pi | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · pinpoint | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · pinpoint-email | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · polly | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · pricing | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · proton | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · qldb | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · qldb-session | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · quicksight | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · ram | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · rds | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · rds-data | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · redshift | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · redshift-data | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · rekognition | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · resource-groups | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · resourcegroupstaggingapi | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · robomaker | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · route53 | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · route53domains | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · route53resolver | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · runtime-lex | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · runtime-lex-v2 | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · runtime-sagemaker | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · s3 | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · s3control | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · s3outposts | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · sagemaker | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · sagemaker-a2i-runtime | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · sagemaker-edge | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · sagemaker-featurestore-runtime | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · savingsplans | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · schemas | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · secretsmanager | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · securityhub | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · serverlessrepo | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · service-quotas | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · servicecatalog | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · servicecatalog-appregistry | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · servicediscovery | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · sesv2 | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · shield | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · signer | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · sms | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · sms-voice | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · snowball | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · sns | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · sqs | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · ssm | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · ssm-contacts | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · ssm-incidents | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · sso | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · sso-admin | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · sso-oidc | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · states | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · storagegateway | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · streams-dynamodb | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · sts | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · support | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · swf | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · synthetics | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · textract | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · timestream-query | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · timestream-write | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · transcribe | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · transfer | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · translate | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · waf | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · waf-regional | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · wafv2 | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · wellarchitected | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · workdocs | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · worklink | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · workmail | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · workmailmessageflow | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · workspaces | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [aws-apis](../apps/aws-apis) · xray | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [bitbucket](../apps/bitbucket) | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [cohere](../apps/cohere) | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [coinbase-cdp](../apps/coinbase-cdp) | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [deepl](../apps/deepl) | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [google-apis](../apps/google-apis) · youtubeanalytics | 1 | `client.ts` | TS2614 ×1 | [#518](https://github.com/nakita628/hono-takibi/issues/518) |
| [grafana-pyroscope](../apps/grafana-pyroscope) · debuginfo-v1-debuginfo | 1 | `client.ts` | TS2614 ×1 | [#518](https://github.com/nakita628/hono-takibi/issues/518) |
| [grafana-pyroscope](../apps/grafana-pyroscope) · google-v1-profile | 1 | `client.ts` | TS2614 ×1 | [#518](https://github.com/nakita628/hono-takibi/issues/518) |
| [grafana-pyroscope](../apps/grafana-pyroscope) · metastore-v1-raft-log-raft-log | 1 | `client.ts` | TS2614 ×1 | [#518](https://github.com/nakita628/hono-takibi/issues/518) |
| [grafana-pyroscope](../apps/grafana-pyroscope) · metastore-v1-types | 1 | `client.ts` | TS2614 ×1 | [#518](https://github.com/nakita628/hono-takibi/issues/518) |
| [grafana-pyroscope](../apps/grafana-pyroscope) · types-v1-types | 1 | `client.ts` | TS2614 ×1 | [#518](https://github.com/nakita628/hono-takibi/issues/518) |
| [mermade-openapi3-examples](../apps/mermade-openapi3-examples) · 3-0-cyclical | 1 | `client.ts` | TS2614 ×1 | [#518](https://github.com/nakita628/hono-takibi/issues/518) |
| [mermade-openapi3-examples](../apps/mermade-openapi3-examples) · 3-0-fuzz1-50aea792-0425-474d-938b-fc8a7387739a | 1 | `client.ts` | TS2614 ×1 | [#518](https://github.com/nakita628/hono-takibi/issues/518) |
| [mermade-openapi3-examples](../apps/mermade-openapi3-examples) · 3-0-fuzz1-f8c97f2c-efa9-4a93-bd39-e7008df12b47 | 1 | `client.ts` | TS2614 ×1 | [#518](https://github.com/nakita628/hono-takibi/issues/518) |
| [mermade-openapi3-examples](../apps/mermade-openapi3-examples) · 3-0-gluecon-example1-from-different-parameters-md | 1 | `client.ts` | TS2614 ×1 | [#518](https://github.com/nakita628/hono-takibi/issues/518) |
| [mermade-openapi3-examples](../apps/mermade-openapi3-examples) · 3-0-gluecon-example1-from-improved-securityschemes-md | 1 | `client.ts` | TS2614 ×1 | [#518](https://github.com/nakita628/hono-takibi/issues/518) |
| [mermade-openapi3-examples](../apps/mermade-openapi3-examples) · 3-0-gluecon-example2-from-different-parameters-md | 1 | `client.ts` | TS2614 ×1 | [#518](https://github.com/nakita628/hono-takibi/issues/518) |
| [mermade-openapi3-examples](../apps/mermade-openapi3-examples) · 3-0-gluecon-example2-from-different-servers-md | 1 | `client.ts` | TS2614 ×1 | [#518](https://github.com/nakita628/hono-takibi/issues/518) |
| [mermade-openapi3-examples](../apps/mermade-openapi3-examples) · 3-0-gluecon-example2-from-improved-securityschemes-md | 1 | `client.ts` | TS2614 ×1 | [#518](https://github.com/nakita628/hono-takibi/issues/518) |
| [mermade-openapi3-examples](../apps/mermade-openapi3-examples) · 3-0-gluecon-example3-from-different-parameters-md | 1 | `client.ts` | TS2614 ×1 | [#518](https://github.com/nakita628/hono-takibi/issues/518) |
| [mermade-openapi3-examples](../apps/mermade-openapi3-examples) · 3-0-gluecon-example3-from-different-servers-md | 1 | `client.ts` | TS2614 ×1 | [#518](https://github.com/nakita628/hono-takibi/issues/518) |
| [mermade-openapi3-examples](../apps/mermade-openapi3-examples) · 3-0-gluecon-example4-from-different-parameters-md | 1 | `client.ts` | TS2614 ×1 | [#518](https://github.com/nakita628/hono-takibi/issues/518) |
| [mermade-openapi3-examples](../apps/mermade-openapi3-examples) · 3-0-gluecon-example5-from-different-parameters-md | 1 | `client.ts` | TS2614 ×1 | [#518](https://github.com/nakita628/hono-takibi/issues/518) |
| [mermade-openapi3-examples](../apps/mermade-openapi3-examples) · 3-0-minimal | 1 | `client.ts` | TS2614 ×1 | [#518](https://github.com/nakita628/hono-takibi/issues/518) |
| [mermade-openapi3-examples](../apps/mermade-openapi3-examples) · 3-0-nonbearerhttpsec | 1 | `client.ts` | TS2614 ×1 | [#518](https://github.com/nakita628/hono-takibi/issues/518) |
| [mermade-openapi3-examples](../apps/mermade-openapi3-examples) · 3-0-openapi | 1 | `client.ts` | TS2614 ×1 | [#518](https://github.com/nakita628/hono-takibi/issues/518) |
| [mermade-openapi3-examples](../apps/mermade-openapi3-examples) · 3-0-swagger2openapi-openapi | 1 | `client.ts` | TS2614 ×1 | [#518](https://github.com/nakita628/hono-takibi/issues/518) |
| [mermade-openapi3-examples](../apps/mermade-openapi3-examples) · 3-1-mega | 1 | `client.ts` | TS2614 ×1 | [#518](https://github.com/nakita628/hono-takibi/issues/518) |
| [mermade-openapi3-examples](../apps/mermade-openapi3-examples) · 3-1-minimal-hooks | 1 | `client.ts` | TS2614 ×1 | [#518](https://github.com/nakita628/hono-takibi/issues/518) |
| [mermade-openapi3-examples](../apps/mermade-openapi3-examples) · 3-1-minimal-paths | 1 | `client.ts` | TS2614 ×1 | [#518](https://github.com/nakita628/hono-takibi/issues/518) |
| [mermade-openapi3-examples](../apps/mermade-openapi3-examples) · 3-1-path-no-response | 1 | `client.ts` | TS2614 ×1 | [#518](https://github.com/nakita628/hono-takibi/issues/518) |
| [mermade-openapi3-examples](../apps/mermade-openapi3-examples) · 3-1-path-var-empty-pathitem | 1 | `client.ts` | TS2614 ×1 | [#518](https://github.com/nakita628/hono-takibi/issues/518) |
| [mermade-openapi3-examples](../apps/mermade-openapi3-examples) · 3-1-schema | 1 | `client.ts` | TS2614 ×1 | [#518](https://github.com/nakita628/hono-takibi/issues/518) |
| [n8n](../apps/n8n) | 1 | `client.ts` | TS2614 ×1 | [#518](https://github.com/nakita628/hono-takibi/issues/518) |
| [netdata](../apps/netdata) | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [nextcloud-apps](../apps/nextcloud-apps) · comments | 1 | `client.ts` | TS2614 ×1 | [#518](https://github.com/nakita628/hono-takibi/issues/518) |
| [nextcloud-apps](../apps/nextcloud-apps) · sharebymail | 1 | `client.ts` | TS2614 ×1 | [#518](https://github.com/nakita628/hono-takibi/issues/518) |
| [nextcloud-apps](../apps/nextcloud-apps) · systemtags | 1 | `client.ts` | TS2614 ×1 | [#518](https://github.com/nakita628/hono-takibi/issues/518) |
| [openfeature-ofrep](../apps/openfeature-ofrep) | 1 | `routes.ts` | TS2345 ×1 | [#522](https://github.com/nakita628/hono-takibi/issues/522) |
| [readme-oas-examples](../apps/readme-oas-examples) · 3-1-parameters-style | 1 | `client.ts` | TS2614 ×1 | [#518](https://github.com/nakita628/hono-takibi/issues/518) |
| [readme-oas-examples](../apps/readme-oas-examples) · 3-1-readme-extensions | 1 | `client.ts` | TS2614 ×1 | [#518](https://github.com/nakita628/hono-takibi/issues/518) |
| [readme-oas-examples](../apps/readme-oas-examples) · 3-1-schema-encoding-style | 1 | `client.ts` | TS2614 ×1 | [#518](https://github.com/nakita628/hono-takibi/issues/518) |
| [readme-oas-examples](../apps/readme-oas-examples) · 3-1-schema-types | 1 | `client.ts` | TS2614 ×1 | [#518](https://github.com/nakita628/hono-takibi/issues/518) |
| [readme-oas-examples](../apps/readme-oas-examples) · 3-1-webhooks | 1 | `client.ts` | TS2614 ×1 | [#518](https://github.com/nakita628/hono-takibi/issues/518) |
| [supabase](../apps/supabase) | 1 | `index.ts` | TS2589 ×1 | deep types (TS2589) |
| [vault](../apps/vault) | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [vonage](../apps/vonage) · conversion | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [vonage](../apps/vonage) · numbers | 1 | `types.ts` | TS2344 ×1 | [#517](https://github.com/nakita628/hono-takibi/issues/517) |
| [xero](../apps/xero) · xero-webhooks | 1 | `client.ts` | TS2614 ×1 | [#518](https://github.com/nakita628/hono-takibi/issues/518) |

## Not checked

| App | Reason |
| --- | --- |
| [digitalocean](../apps/digitalocean) | not yet: routes.ts is over 3 MB, so it runs alone after the rest; a follow-up commit adds the result |
| [openai](../apps/openai) | not yet: routes.ts is over 3 MB, so it runs alone after the rest; a follow-up commit adds the result |
| [mongodb-atlas](../apps/mongodb-atlas) | not yet: routes.ts is over 3 MB, so it runs alone after the rest; a follow-up commit adds the result |
| [google-apis](../apps/google-apis) · contentwarehouse | not yet: routes.ts is over 3 MB, so it runs alone after the rest; a follow-up commit adds the result |
| [apis-guru-misc](../apps/apis-guru-misc) · stripe | not yet: routes.ts is over 3 MB, so it runs alone after the rest; a follow-up commit adds the result |
| [apis-guru-misc](../apps/apis-guru-misc) · zuora | not yet: routes.ts is over 3 MB, so it runs alone after the rest; a follow-up commit adds the result |
| [elevenlabs](../apps/elevenlabs) | not yet: routes.ts is over 3 MB, so it runs alone after the rest; a follow-up commit adds the result |
| [apis-guru-misc](../apps/apis-guru-misc) · unicourt | not yet: routes.ts is over 3 MB, so it runs alone after the rest; a follow-up commit adds the result |
| [google-apis](../apps/google-apis) · compute | not yet: routes.ts is over 3 MB, so it runs alone after the rest; a follow-up commit adds the result |
| [elasticsearch](../apps/elasticsearch) | not yet: routes.ts is over 3 MB, so it runs alone after the rest; a follow-up commit adds the result |
| [discord](../apps/discord) | not yet: routes.ts is over 3 MB, so it runs alone after the rest; a follow-up commit adds the result |
| [apis-guru-misc](../apps/apis-guru-misc) · zoom-us | not yet: routes.ts is over 3 MB, so it runs alone after the rest; a follow-up commit adds the result |
| [gitlab](../apps/gitlab) | not yet: routes.ts is over 3 MB, so it runs alone after the rest; a follow-up commit adds the result |
| [linode](../apps/linode) | not yet: routes.ts is over 3 MB, so it runs alone after the rest; a follow-up commit adds the result |
| [medusa-admin](../apps/medusa-admin) | not yet: routes.ts is over 3 MB, so it runs alone after the rest; a follow-up commit adds the result |
| [stripe](../apps/stripe) | not yet: routes.ts is over 3 MB, so it runs alone after the rest; a follow-up commit adds the result |
| [paddle](../apps/paddle) | not yet: routes.ts is over 3 MB, so it runs alone after the rest; a follow-up commit adds the result |
| [vercel](../apps/vercel) | not yet: routes.ts is over 3 MB, so it runs alone after the rest; a follow-up commit adds the result |
| [aws-apis](../apps/aws-apis) · ec2 | not yet: routes.ts is over 3 MB, so it runs alone after the rest; a follow-up commit adds the result |
| [telnyx](../apps/telnyx) | not yet: routes.ts is over 3 MB, so it runs alone after the rest; a follow-up commit adds the result |
| [meraki](../apps/meraki) | not yet: routes.ts is over 3 MB, so it runs alone after the rest; a follow-up commit adds the result |
| [github](../apps/github) | not yet: routes.ts is over 3 MB, so it runs alone after the rest; a follow-up commit adds the result |
| [apis-guru-misc](../apps/apis-guru-misc) · sinao-app | not yet: routes.ts is over 3 MB, so it runs alone after the rest; a follow-up commit adds the result |
| [github-next](../apps/github-next) | not yet: routes.ts is over 3 MB, so it runs alone after the rest; a follow-up commit adds the result |
| [chargebee](../apps/chargebee) | not yet: routes.ts is over 3 MB, so it runs alone after the rest; a follow-up commit adds the result |
| [datadog](../apps/datadog) | not yet: routes.ts is over 3 MB, so it runs alone after the rest; a follow-up commit adds the result |
| [apis-guru-misc](../apps/apis-guru-misc) · digitalocean | not yet: routes.ts is over 3 MB, so it runs alone after the rest; a follow-up commit adds the result |
| [apis-guru-misc](../apps/apis-guru-misc) · loket-nl | not yet: routes.ts is over 3 MB, so it runs alone after the rest; a follow-up commit adds the result |
| [sentry](../apps/sentry) | not yet: routes.ts is over 3 MB, so it runs alone after the rest; a follow-up commit adds the result |
| [apify](../apps/apify) | not yet: routes.ts is over 3 MB, so it runs alone after the rest; a follow-up commit adds the result |
| [netbox](../apps/netbox) | not yet: routes.ts is over 3 MB, so it runs alone after the rest; a follow-up commit adds the result |
| [tyk](../apps/tyk) | not yet: routes.ts is over 3 MB, so it runs alone after the rest; a follow-up commit adds the result |
| [cloudflare](../apps/cloudflare) | not yet: routes.ts is over 3 MB, so it runs alone after the rest; a follow-up commit adds the result |
| [apis-guru-misc](../apps/apis-guru-misc) · microsoft-graph | not yet: routes.ts is over 3 MB, so it runs alone after the rest; a follow-up commit adds the result |
| [msgraph](../apps/msgraph) | not yet: routes.ts is over 3 MB, so it runs alone after the rest; a follow-up commit adds the result |

## No errors

- [ably](../apps/ably): platform
- [adyen](../apps/adyen)
- [adyen-services](../apps/adyen-services): A2APaymentsService-v1, AccountService-v6, BalanceControlService-v2, BalancePlatformService-v2, BinLookupService-v54, CapitalService-v1, CheckoutService-v72, CloudDeviceService-v1, DataProtectionService-v1, DisputeService-v30, DocumentCollectorService-v1, ForeignExchangeService-v1, FundService-v6, HopService-v6, NotificationConfigurationService-v6, OpenBankingService-v1, PaymentService-v68, PaymentsAppService-v1, PayoutService-v68, RaiseDisputesService-v4, RecurringService-v68, SessionAuthenticationService-v1, SessionService-v68, SoftPOSConfigurationService-v3, StoredValueService-v46, TerminalAPI-v1, TestCardService-v1, TfmAPIService-v1, TransactionService-v4, TransferService-v4
- [airflow](../apps/airflow)
- [aivisspeech](../apps/aivisspeech)
- [alpaca-market-data](../apps/alpaca-market-data)
- [alpaca-trading](../apps/alpaca-trading)
- [amadeus](../apps/amadeus): amadeus, amadeus-flight-price-analysis, amadeus-location-score, amadeus-travel-recommendations, amadeus-trip-parser
- [apideck](../apps/apideck): accounting, ats, connector, crm, customer-support, ecommerce, ecosystem, file-storage, hris, issue-tracking, lead, pos, proxy, sms, vault, webhook
- [apis-guru-misc](../apps/apis-guru-misc): 1password-connect, 1password-events, 6-dot-authentiqio-appspot, ably-io-platform, ably-net-control, abstractapi-geolocation, agco-ats, airbyte-config, alertersystem, amentum-space-atmosphere, amentum-space-aviation-radiation, amentum-space-global-magnet, amentum-space-gravity, amentum-space-space-radiation, apache-org, apache-org-airflow, apache-org-qakka, api-gov-uk-vehicle-enquiry, api-video, api2cart, api2pdf, apicurio-registry, apidapp, apigee-registry, apis-guru, apispot-io-whois, apple-app-store-connect, apple-sirikit-cloud-media, apptigent, archive-org-search, archive-org-wayback, arespass-net, art19, asana, asuarez-dev-searchly, atlassian-jira, ato-gov-au, autodealerdata, axesso-de, balldontlie-io, bbc, bbci-co-uk, bclaws-ca-bclaws, beezup, betfair, bhagavadgita-io, biapi-pro, bigdatacloud-net, bigoven, bigredcloud, bikewise-org, billingo-hu, bintable, biztoc, botify, botschaft, brainbi-net, braze, brex-io, britbox-co-uk, bungie-net, bunq, byautomata-io, c19qrserver, calorieninjas, canada-holidays-ca, cdcgov-prime-data-hub, chaingateway-io, chompthis, circl-lu-hashlookup, circleci, circuitsandbox-net, clever, clickmeter, climate, climatekuul, cloudmersive-ocr, codat-io-accounting, codat-io-assess, codat-io-bank-feeds, codat-io-banking, codat-io-commerce, codat-io-sync-for-commerce, codat-io-sync-for-expenses, codesearch-debian-net, collegefootballdata, color-pizza, combell, configcat, conjur, contract-p-fit, corrently-io, covid19-api, crediwatch-covid19, d7networks, daniweb, datasette, datumbox, departureboard-io, digitallocker-gov-in-authpartner, discourse, dnd5eapi-co, docusign-net, dodo-ac, domainsdb-info, doqs-dev, dracoon-team, easypdfserver, edrv-io, elevenlabs-io, elmah-io, envoice-in, eos, esgenterprise, etherpad, etmdb, etsi-mec010-2-apppkgmgmt, exavault, exchangerate-api, exlibrisgroup-tasklists, extendsclass-json-storage, extpose, exude-api-herokuapp, facecheck-id, fec-gov, figshare, files, fire, firmalyzer-iotvas, flat-io, flickr, formapi-io, fraudlabspro-fraud-detection, fraudlabspro-sms-verification, freetv-app, fulfillment, gambitcomm-mimic, geodatasource, geodesystems, gerermesaffaires, getpostman, getthedata-bng2latlong, gettyimages, giphy, go-upc, goog-io, google, google-home, graphhopper, greip-io, groundhog-day, gsmtasks, hackathonwatch, here-positioning, here-tracking, hetzner-cloud, httpbin-org, i-cue-solutions, ibanapi, id4i-de, ideaconsult-net-enanomapper, ideaconsult-net-nanoreg, impala-travel-hotels, increase, intellifi-nl, interactivebrokers, ip2location-geolocation, ip2proxy, ip2whois, ipqualityscore, iptwist, iqualify, isendpro, ix-api-net, izettle-products, javatpoint, journy-io, json2video, just-eat-co-uk, keycloak, keyserv-solutions, klarna-openai, klarna-payments, lambdatest, letmc-customer, lgtm, libretranslate, linqr-app, listennotes, ljaero-dflight, logoraisr, lufthansa-partner, magento, mailboxvalidator-checker, mailboxvalidator-disposable, mailboxvalidator-validation, mailscript, mastodon, mbus, mcw-edu, meilisearch, meraki, mercure, mermade-org-uk-openapi-converter, meshery, meteosource, microsoft-cognitiveservices-computervision, microsoft-cognitiveservices-ocr, microsoft-cognitiveservices-prediction, microsoft-cognitiveservices-training, mineskin-org, monarchinitiative-org, motaword, mozilla-kinto, mtaa-api-herokuapp, namsor, nasa-gov-apod, nbg-gr, ndhm-gov-in-ndhm-cm, ndhm-gov-in-ndhm-gateway, ndhm-gov-in-ndhm-healthid, ndhm-gov-in-ndhm-hip, ndhm-gov-in-ndhm-hiu, nebl-io, neowsapp, netbox-dev, netboxdemo, netlicensing-io, neutrinoapi-net, nfusionsolutions-biz, nic-at-domainfinder, nlpcloud-io, noosh, nordigen, notion, nsidc-org, ntropy-network, obono-at, oceandrivers, okta, onsched-consumer, onsched-setup, onsched-utility, openai, openaq, openbanking-org-uk, openbanking-org-uk-account-info-openapi, openbanking-org-uk-confirmation-funds-openapi, openbanking-org-uk-event-notifications-openapi, openbanking-org-uk-payment-initiation-openapi, openbankingproject-ch, openchannel-io-market, openfigi, openindex-ai, openlinksw-osdb, openpolicy, openstates-org, opentargets-io, openuv-io, pandascore-co, papinet-io-order-status, patientview-org, patrowl, pay1-de-link, paylocity, paypi-dev, payrun-io, pdfblocks, pdfbroker-io, pdfgeneratorapi, peoplegeneratorapi-live, personio-de-authentication, personio-de-personnel, pinecone-io, plaid, pocketsmith, portfoliooptimizer-io, presalytics-io-converter, presalytics-io-ooxml, presalytics-io-story, pressassociation-io, probely, proxykingdom, qualtrics, quickchart-io, randomlovecraft, randommer-io, rapidapi-dynamicdocs, rapidapi-ecowetter, rapidapi-football-prediction, rapidapi-idealspot-geodata, rapidapi-spellcheckpro, rawg-io, readme-io, redeal-io, redeal-io-analytics, redhat-catalog-inventory, remove-bg, restful4up, rev-ai, reverb, rudder-example, rumble-run, sakari-io, salesforce-einstein, scideas-net-perfectpdf, scideas-net-regression, seldon-core, seldon-engine, seldon-wrapper, shipengine, shop-app, shop-pro-jp, shorten-rest, shotstack-io, shutterstock, signl4, simplivpn-net, slack-openai, smart-me, soundcloud, spinitron, spoonacular, spotify-sonallux, squareup, stackexchange, stellastra, stoplight-io, storecove, stream-io-api, superset-apache-superset, surevoip-co-uk, svix, symanto-net, tafqit-herokuapp, taxrates-io, tcgdex-net, telegram-org, telnyx, tfl-gov-uk, thebluealliance, threatjammer, ticketmaster-discovery, ticketmaster-publish, tl-api-azurewebsites-net, tokenjay-app, tokenmetrics, trapstreet, trashnothing, trello, truanon, truesight, tsapi-net, tvmaze, twitter-current, up-au, urlbox-io, va-gov-benefits, va-gov-confirmation, va-gov-facilities, va-gov-forms, vectara-io, velopayments, versioneye, viator, vimeo, visualcrossing-weather, visualstudio, vmware-vrni, vocadb-net, walletobjects-googleapis-pay-passes, webflow, webscraping-ai, wellknown-ai, whapi-bets, wheretocredit, wikipathways-org, windows-net-graphrbac, wolframalpha, wordnik, worldtimeapi-org, wso2apistore-transform, xkcd, zapier-nla, zeit-co, zeno-fm
- [apisetu-gov-in](../apps/apisetu-gov-in): aaharjh, acko, agtripura, aharakar, aiimsmangalagiri, aiimspatna, aiimsrishikesh, aktu, apmcservices, asrb, bajajallianz, bajajallianzlife, barti, bharatpetroleum, bhartiaxagi, bhavishya, biharboard, bput, bsehr, cbse, cgbse, chennaicorp, chitkarauniversity, cholainsurance, cisce, civilsupplieskerala, cpctmp, csc, dbraitandaman, dgecerttn, dgft, dhsekerala, ditarunachal, ditch, dittripura, duexam, edistrictandaman, edistricthp, edistrictkerala, edistrictodisha, edistrictodishasp, edistrictpb, edistrictup, ehimapurtihp, enibandhanjh, epfindia, epramanhp, eservicearunachal, fsdhr, futuregenerali, gadbih, gauhati, gbshse, geetanjaliuniv, gmch, goawrd, godigit, gujaratvidyapith, hindustanpetroleum, hpayushboard, hpbose, hppanchayat, hpsbys, hpsssb, hptechboard, hsbte, hsscboardmh, icicilombard, iciciprulife, icsi, igrmaharashtra, insvalsura, iocl, issuer, jac, jeecup, jharsewa, jnrmand, juit, keralapsc, kiadb, kkhsou, kotakgeneralinsurance, kseebkr, ktech, labourbih, landrecordskar, lawcollegeandaman, legalmetrologyup, licindia, maxlifeinsurance, mbose, mbse, mcimindia, meark, mizoramlesde, mizorampolice, mpmsu, mppmc, mriu, msde, municipaladmin, nationalinsurance, ncert, negd, neilit, newindia, niesbud, nios, nitap, nitp, npsailu, nsdcindia, orientalinsurance, pan, pareekshabhavanker, pblabour, pgimer, phedharyana, pmjay, pramericalife, pseb, puekar, punjabteched, rajasthandsa, rajasthanrajeduboard, reliancegeneral, revenueassam, revenueodisha, sainikwelfarepud, saralharyana, sbigeneral, scvtup, sebaonline, statisticsrajasthan, swavlambancard, tataaia, tataaig, tbse, transport, transportan, transportap, transportar, transportas, transportbr, transportcg, transportdd, transportdh, transportdl, transportga, transportgj, transporthp, transporthr, transportjh, transportjk, transportka, transportkl, transportld, transportmh, transportml, transportmn, transportmp, transportmz, transportnl, transportod, transportpb, transportpy, transportrj, transportsk, transporttn, transporttr, transportts, transportuk, transportup, transportwb, ubseuk, ucobank, uiic, upmsp, vhseker, vssut
- [appwrite](../apps/appwrite)
- [asana](../apps/asana)
- [asana-app-components](../apps/asana-app-components)
- [authentik](../apps/authentik)
- [aws-apis](../apps/aws-apis): mobileanalytics, sdb
- [azure-openai](../apps/azure-openai)
- [backstage-catalog](../apps/backstage-catalog)
- [backstage-events](../apps/backstage-events)
- [backstage-notifications](../apps/backstage-notifications)
- [backstage-scaffolder](../apps/backstage-scaffolder)
- [box-versions](../apps/box-versions): v2025.0, v2026.0
- [brevo](../apps/brevo)
- [budibase](../apps/budibase)
- [bungie](../apps/bungie)
- [bunq](../apps/bunq)
- [calcom](../apps/calcom)
- [canva](../apps/canva)
- [chatwoot](../apps/chatwoot)
- [circleci](../apps/circleci)
- [clerk](../apps/clerk)
- [clickhouse-cloud](../apps/clickhouse-cloud)
- [cloud-hypervisor](../apps/cloud-hypervisor)
- [comfyui](../apps/comfyui)
- [congress-gov](../apps/congress-gov)
- [consul-terraform-sync](../apps/consul-terraform-sync)
- [cvat](../apps/cvat)
- [daytona](../apps/daytona)
- [dbt-cloud](../apps/dbt-cloud)
- [deepgram](../apps/deepgram)
- [deutschebahn](../apps/deutschebahn): reisezentren
- [directus](../apps/directus)
- [discourse](../apps/discourse)
- [dropbox-sign](../apps/dropbox-sign)
- [e-gov-law](../apps/e-gov-law)
- [ebay](../apps/ebay): buy-deal, commerce-catalog, commerce-charity, commerce-translation, developer-analytics, sell-account, sell-analytics, sell-compliance, sell-feed, sell-fulfillment, sell-listing, sell-logistics, sell-marketing, sell-metadata, sell-negotiation, sell-recommendation
- [elastic-apm-server](../apps/elastic-apm-server)
- [equinix-metal](../apps/equinix-metal)
- [exoscale](../apps/exoscale)
- [figma](../apps/figma)
- [filerise](../apps/filerise)
- [firecrawl](../apps/firecrawl)
- [firezone](../apps/firezone)
- [fluss-gateway](../apps/fluss-gateway)
- [freee](../apps/freee): accounting, hr, iv, sm
- [fusionauth](../apps/fusionauth)
- [getbible](../apps/getbible)
- [google-apis](../apps/google-apis): abusiveexperiencereport, acceleratedmobilepageurl, accessapproval, accesscontextmanager, acmedns, adexchangebuyer, adexchangebuyer2, adexperiencereport, admin, admob, adsense, adsensehost, advisorynotifications, alertcenter, analytics, analyticsadmin, analyticsdata, analyticshub, analyticsreporting, androiddeviceprovisioning, androidenterprise, androidmanagement, androidpublisher, apigateway, apigee, apigeeregistry, apikeys, appengine, appsactivity, area120tables, artifactregistry, assuredworkloads, authorizedbuyersmarketplace, automl, baremetalsolution, batch, beyondcorp, bigquery, bigqueryconnection, bigquerydatatransfer, bigqueryreservation, bigtableadmin, billingbudgets, binaryauthorization, blogger, books, businessprofileperformance, calendar, calendar-v3, certificatemanager, chat, chromemanagement, chromepolicy, chromeuxreport, civicinfo, classroom, cloudasset, cloudbilling, cloudbuild, cloudchannel, clouddebugger, clouddeploy, clouderrorreporting, cloudfunctions, cloudidentity, cloudiot, cloudkms, cloudprivatecatalog, cloudprivatecatalogproducer, cloudprofiler, cloudresourcemanager, cloudscheduler, cloudsearch, cloudshell, cloudsupport, cloudtasks, cloudtrace, commentanalyzer, composer, connectors, contactcenteraiplatform, contactcenterinsights, container, containeranalysis, content, customsearch, datacatalog, dataflow, dataform, datafusion, datalabeling, datalineage, datamigration, datapipelines, dataplex, dataproc, datastore, datastream, deploymentmanager, dfareporting, dialogflow, digitalassetlinks, discovery, discoveryengine, displayvideo, dlp, dns, docs, documentai, domains, domainsrdap, doubleclickbidmanager, doubleclicksearch, drive, drive-v3, driveactivity, drivelabels, essentialcontacts, eventarc, factchecktools, fcm, fcmdata, file, firebase, firebaseappcheck, firebaseappdistribution, firebasedatabase, firebasedynamiclinks, firebasehosting, firebaseml, firebaserules, firebasestorage, firestore, fitness, forms, games, gamesconfiguration, gameservices, gamesmanagement, genomics, gkebackup, gkehub, gmail, gmail-v1, gmailpostmastertools, groupsmigration, groupssettings, healthcare, homegraph, iam, iamcredentials, iap, ideahub, identitytoolkit, ids, indexing, integrations, jobs, keep, kgsearch, kmsinventory, language, libraryagent, licensing, lifesciences, localservices, logging, managedidentities, manufacturers, memcache, metastore, migrationcenter, mirror, ml, monitoring, my-business, mybusinessaccountmanagement, mybusinessbusinesscalls, mybusinessbusinessinformation, mybusinesslodging, mybusinessnotifications, mybusinessplaceactions, mybusinessqanda, mybusinessverifications, networkconnectivity, networkmanagement, networksecurity, networkservices, notebooks, oauth2, ondemandscanning, orgpolicy, osconfig, oslogin, pagespeedonline, paymentsresellersubscription, people, playablelocations, playcustomapp, playdeveloperreporting, playintegrity, plus, policyanalyzer, policysimulator, policytroubleshooter, poly, privateca, prod-tt-sasportal, proximitybeacon, publicca, pubsub, pubsublite, readerrevenuesubscriptionlinking, realtimebidding, recaptchaenterprise, recommendationengine, recommender, redis, remotebuildexecution, replicapool, reseller, resourcesettings, retail, run, runtimeconfig, safebrowsing, sasportal, script, searchads360, searchconsole, secretmanager, securitycenter, servicebroker, serviceconsumermanagement, servicecontrol, servicedirectory, servicemanagement, servicenetworking, serviceusage, sheets, sheets-v4, shoppingcontent, siteverification, slides, smartdevicemanagement, sourcerepo, spanner, speech, sql, sqladmin, storage, storage-v1, storagetransfer, streetviewpublish, sts, tagmanager, tasks, testing, texttospeech, toolresults, tpu, trafficdirector, transcoder, translate, translate-v3, travelimpactmodel, vault, vectortile, verifiedaccess, versionhistory, videointelligence, vision, vmmigration, vpcaccess, webfonts, webmasters, webrisk, websecurityscanner, workflowexecutions, workflows, workloadmanager, workstations, youtube, youtube-v3, youtubereporting
- [gov-bc-ca](../apps/gov-bc-ca): bcdc, gwells, jobposting, news, open511
- [grafana-pyroscope](../apps/grafana-pyroscope): adhocprofiles-v1-adhocprofiles, capabilities-v1-feature-flags, debuginfo-v1alpha1-debuginfo, ingester-v1-ingester, metastore-v1-compactor, metastore-v1-index, metastore-v1-query, metastore-v1-tenant, push-v1-push, querier-v1-querier, query-v1-query, segmentwriter-v1-push, settings-v1-recording-rules, settings-v1-setting, status-v1-status, storegateway-v1-storegateway, vcs-v1-vcs, version-v1-version
- [grafana-quickpizza](../apps/grafana-quickpizza)
- [grafana-slo](../apps/grafana-slo)
- [grafana-synthetic-monitoring](../apps/grafana-synthetic-monitoring)
- [growthbook](../apps/growthbook)
- [haproxy-dataplane](../apps/haproxy-dataplane)
- [hetzner](../apps/hetzner)
- [hf-text-embeddings-inference](../apps/hf-text-embeddings-inference)
- [hf-text-generation-inference](../apps/hf-text-generation-inference)
- [homer](../apps/homer)
- [hookdeck](../apps/hookdeck)
- [hubspot](../apps/hubspot): account-account-info, account-audit-logs, auth-oauth, automation-actions-v4, automation-email-templates, automation-sequences, business-units-business-units, cms-authors, cms-blog-settings, cms-cms-content-audit, cms-domains, cms-media-bridge, cms-pages, cms-posts, cms-site-search, cms-source-code, cms-tags, cms-url-mappings, cms-url-redirects, commerce-payment-links, commerce-paymentsaccounts, commerce-price-books, communication-preferences-subscriptions, conversations-conversations, conversations-custom-channels, conversations-visitor-identification, crm-app-uninstalls, crm-appointments, crm-associations, crm-associations-schema, crm-calling-extensions, crm-calls, crm-carts, crm-commerce-payments, crm-commerce-subscriptions, crm-communications, crm-companies, crm-contacts, crm-contracts, crm-courses, crm-crm-owners, crm-custom-objects, crm-deal-splits, crm-deals, crm-discounts, crm-emails, crm-exports, crm-feedback-submissions, crm-fees, crm-forecast-submissions, crm-forecast-types, crm-forecasts, crm-goal-targets, crm-imports, crm-invoices, crm-leads, crm-limits-tracking, crm-line-items, crm-listings, crm-lists, crm-meetings, crm-notes, crm-notetaker-conversation-recap, crm-object-library, crm-object-tags, crm-objects, crm-orders, crm-partner-clients, crm-partner-services, crm-pipeline-governance, crm-pipelines, crm-postal-mail, crm-price-book-items-crm-reads-api, crm-price-books-crm-reads-api, crm-products, crm-projects, crm-properties, crm-property-validations, crm-public-app-crm-cards, crm-public-app-feature-flags-v3, crm-quotes, crm-schemas, crm-services, crm-tasks, crm-tasks-series, crm-taxes, crm-tickets, crm-timeline, crm-transcriptions, crm-users, crm-video-conferencing-extension, data-studio-datasource-ingestion, events-events, events-manage-event-definitions, events-send-event-completions, files-files, marketing-campaigns-public-api, marketing-marketing-emails, marketing-marketing-events, marketing-single-send, marketing-transactional-single-send, meta-origins, scheduler-meetings, settings-multicurrency, settings-tax-rates, settings-teams, settings-user-provisioning, test-roll-forward-test, webhooks-journal-webhooks-journal, webhooks-webhooks
- [hyperswitch](../apps/hyperswitch)
- [ibkr](../apps/ibkr)
- [immich](../apps/immich)
- [infinity](../apps/infinity)
- [intercom](../apps/intercom)
- [interzoid](../apps/interzoid): convertcurrency, getaddressmatch, getareacodefromnumber, getcitymatch, getcitystandard, getcompanymatch, getcountrymatch, getcountrystandard, getcurrencyrate, getemailinfo, getfullnamematch, getfullnameparsedmatch, getglobalnumberinfo, getglobaltime, getstateabbreviation, getweathercity, getweatherzip, getzipinfo, globalpageload, lookupareacode
- [invoiceninja](../apps/invoiceninja)
- [jikan](../apps/jikan)
- [jira](../apps/jira)
- [jira-service-management](../apps/jira-service-management)
- [kafka-rest](../apps/kafka-rest)
- [karakeep](../apps/karakeep)
- [kavita](../apps/kavita)
- [kintone](../apps/kintone)
- [knock](../apps/knock): api
- [komga](../apps/komga)
- [kong](../apps/kong)
- [kuberhealthy](../apps/kuberhealthy)
- [kubernetes](../apps/kubernetes): api__v1, apis__admissionregistration.k8s.io__v1, apis__apiextensions.k8s.io__v1, apis__apiregistration.k8s.io__v1, apis__apps__v1, apis__authentication.k8s.io__v1, apis__authorization.k8s.io__v1, apis__autoscaling__v1, apis__autoscaling__v2, apis__batch__v1, apis__certificates.k8s.io__v1, apis__coordination.k8s.io__v1, apis__discovery.k8s.io__v1, apis__events.k8s.io__v1, apis__flowcontrol.apiserver.k8s.io__v1, apis__networking.k8s.io__v1, apis__node.k8s.io__v1, apis__policy__v1, apis__rbac.authorization.k8s.io__v1, apis__resource.k8s.io__v1, apis__scheduling.k8s.io__v1, apis__storage.k8s.io__v1, apis__storagemigration.k8s.io__v1
- [lago](../apps/lago)
- [lancedb](../apps/lancedb)
- [langfuse](../apps/langfuse)
- [launchdarkly](../apps/launchdarkly)
- [lidarr](../apps/lidarr)
- [line](../apps/line): channel-access-token, insight, liff, manage-audience, module, module-attach, shop, webhook
- [listmonk](../apps/listmonk)
- [lithic](../apps/lithic)
- [mailchimp-transactional](../apps/mailchimp-transactional)
- [medusa-store](../apps/medusa-store)
- [meilisearch](../apps/meilisearch)
- [memos](../apps/memos)
- [mermade-openapi3-examples](../apps/mermade-openapi3-examples): 3-0-deprecated, 3-0-externalpathitemref, 3-0-gluecon-example1-from-fixed-file-md, 3-0-gluecon-example1-from-fixed-multipart-md, 3-0-gluecon-example1-from-improved-examples-md, 3-0-gluecon-example1-from-improved-serverseverywhere-md, 3-0-gluecon-example1-from-new-callbacks-md, 3-0-gluecon-example2-from-different-requestbody-md, 3-0-gluecon-example2-from-fixed-multipart-md, 3-0-gluecon-example2-from-new-links-md, 3-0-hello, 3-0-oai-callback-example, 3-0-oai-link-example, 3-0-oai-petstore, 3-0-oai-petstore-expanded, 3-0-oai-uber, 3-0-oai-uspto
- [microsoft-ccf](../apps/microsoft-ccf): app, gov, node
- [microsoft-mcp-gateway](../apps/microsoft-mcp-gateway)
- [modern-treasury](../apps/modern-treasury)
- [mollie](../apps/mollie)
- [nango](../apps/nango)
- [navidrome](../apps/navidrome)
- [neon](../apps/neon)
- [netlify](../apps/netlify)
- [nextcloud-app-api](../apps/nextcloud-app-api)
- [nextcloud-apps](../apps/nextcloud-apps): appstore, cloud-federation-api, dashboard, dav, federatedfilesharing, federation, files, files-external, files-sharing, files-trashbin, files-versions, oauth2, profile, provisioning-api, settings, sharing, theming, updatenotification, user-ldap, user-status, viewer, weather-status, webhook-listeners, workflowengine
- [nextcloud-core](../apps/nextcloud-core)
- [nextcloud-talk](../apps/nextcloud-talk)
- [nginx-controller-analytics](../apps/nginx-controller-analytics)
- [nomad](../apps/nomad)
- [novu](../apps/novu)
- [nytimes](../apps/nytimes): archive, article-search, community, geo-api, most-popular-api, movie-reviews, semantic-api, times-tags, timeswire
- [octobox](../apps/octobox)
- [ollama](../apps/ollama)
- [onepassword-connect](../apps/onepassword-connect)
- [open-banking-uk-aisp](../apps/open-banking-uk-aisp)
- [opencost](../apps/opencost)
- [opendota](../apps/opendota)
- [openmeter](../apps/openmeter)
- [ory](../apps/ory)
- [ory-hydra](../apps/ory-hydra)
- [ory-keto](../apps/ory-keto)
- [ote-godaddy](../apps/ote-godaddy): abuse, aftermarket, agreements, certificates, countries, domains, orders, shoppers, subscriptions
- [outline](../apps/outline)
- [overseerr](../apps/overseerr)
- [owncast](../apps/owncast)
- [pagerduty](../apps/pagerduty)
- [parliament](../apps/parliament): bills, lordsvotes, members, now, oralquestions, statutoryinstruments, treaties, writtenquestions
- [paypal](../apps/paypal): billing_subscriptions_v1, catalogs_products_v1, checkout_orders_v2, customer_disputes_v1, customer_partner_referrals_v2, invoicing_v2, notifications_webhooks_v1, payment-experience_web_experience_profiles_v1, payments_payment_v2, payments_payouts_batch_v1, reporting_transactions_v1, shipping_shipment_tracking_v1, vault_payment_tokens_v3
- [petstore](../apps/petstore)
- [phoenix](../apps/phoenix)
- [pihole](../apps/pihole)
- [pinecone](../apps/pinecone)
- [pinterest](../apps/pinterest)
- [plaid](../apps/plaid)
- [pokeapi](../apps/pokeapi)
- [polygon](../apps/polygon)
- [portainer](../apps/portainer)
- [profilarr](../apps/profilarr)
- [prowlarr](../apps/prowlarr)
- [qdrant](../apps/qdrant)
- [qstash](../apps/qstash)
- [radarr](../apps/radarr)
- [ray-jobs](../apps/ray-jobs)
- [readme-oas-examples](../apps/readme-oas-examples): 3-0-callbacks, 3-0-circular, 3-0-circular-paths, 3-0-complex-nesting, 3-0-discriminators, 3-0-file-uploads, 3-0-form-data, 3-0-link-example, 3-0-parameters-common, 3-0-parameters-cookies, 3-0-parameters-extreme, 3-0-parameters-style, 3-0-petstore, 3-0-petstore-expanded, 3-0-petstore-simple, 3-0-petstore-simple-no-tags, 3-0-polymorphism, 3-0-readme, 3-0-response-http-behavior, 3-0-response-schemas, 3-0-schema-additional-properties, 3-0-schema-circular, 3-0-schema-deprecated, 3-0-schema-encoding-style, 3-0-schema-enums, 3-0-schema-types, 3-0-schema-validation, 3-0-schema-visibility, 3-0-security, 3-0-security-multiple, 3-0-server-variables, 3-0-star-trek, 3-0-uspto, 3-1-petstore, 3-1-petstore-simple, 3-1-schema-validation-local, 3-1-schema-validation-top-level, 3-1-security, 3-1-train-travel
- [redocly-museum](../apps/redocly-museum)
- [render](../apps/render)
- [replicate](../apps/replicate)
- [resend](../apps/resend)
- [revolut-business](../apps/revolut-business)
- [revolut-merchant](../apps/revolut-merchant)
- [riot](../apps/riot)
- [rocket-chat](../apps/rocket-chat): authentication, content-management, integrations, marketplace-apps, messaging, miscellaneous, notifications, omnichannel, rooms, settings, statistics, user-management
- [sendgrid](../apps/sendgrid)
- [sonarr](../apps/sonarr)
- [sportsdata](../apps/sportsdata): cbb-v3-scores, cbb-v3-stats, cfb-v3-scores, csgo-v3-scores, csgo-v3-stats, golf-v2, lol-v3-projections, lol-v3-scores, lol-v3-stats, mlb-v3-play-by-play, mlb-v3-projections, mlb-v3-rotoballer-articles, mlb-v3-rotoballer-premium-news, mlb-v3-scores, mlb-v3-stats, nascar-v2, nba-v3-play-by-play, nba-v3-projections, nba-v3-rotoballer-articles, nba-v3-rotoballer-premium-news, nba-v3-scores, nba-v3-stats, nfl-v3-play-by-play, nfl-v3-projections, nfl-v3-rotoballer-articles, nfl-v3-rotoballer-premium-news, nfl-v3-scores, nfl-v3-stats, nhl-v3-play-by-play, nhl-v3-projections, nhl-v3-scores, nhl-v3-stats, soccer-v3-projections, soccer-v3-scores, soccer-v3-stats
- [spotify](../apps/spotify)
- [strimzi-kafka-bridge](../apps/strimzi-kafka-bridge)
- [stytch](../apps/stytch)
- [supabase-auth](../apps/supabase-auth)
- [superset](../apps/superset)
- [supertokens](../apps/supertokens)
- [tailscale](../apps/tailscale)
- [teampass](../apps/teampass)
- [temporal](../apps/temporal)
- [tmdb](../apps/tmdb)
- [train-travel](../apps/train-travel)
- [trezor-blockbook](../apps/trezor-blockbook)
- [trigger-dev](../apps/trigger-dev)
- [twelvedata](../apps/twelvedata)
- [twilio](../apps/twilio)
- [twitch](../apps/twitch)
- [twitter](../apps/twitter)
- [typesense](../apps/typesense)
- [unity-catalog](../apps/unity-catalog)
- [unleash](../apps/unleash)
- [upstash-workflow](../apps/upstash-workflow)
- [vonage](../apps/vonage): account, application, application-v2, audit, conversation, conversation-v2, dispatch, external-accounts, messages-olympus, number-insight, pricing, redact, reports, sms, subaccounts, verify, voice
- [vtex](../apps/vtex): catalog-api-seller-portal, customer-credit-api, giftcard-api, giftcard-hub-api, headless-cms-api, intelligent-search-api, license-manager-api, marketplace-apis, marketplace-apis-2, master-data-api, masterdata-api, message-center-api, orders-api-pii-version, policies-system-api, price-simulations, pricing-api, pricing-hub, profile-system, promotions, recurrence-v1, reviews-and-ratings-api, search-api, session-manager-api, sku-bindings-api, subscriptions-api-v2, subscriptions-api-v3, vtex-do-api, vtex-template
- [workos](../apps/workos)
- [wukongim](../apps/wukongim)
- [xero](../apps/xero): xero-accountdata, xero-app-store, xero-finance, xero-identity, xero-payroll-au, xero-payroll-au-v2, xero-payroll-nz, xero-payroll-uk, xero-projects, xero_accounting, xero_assets, xero_bankfeeds, xero_files
- [zendesk](../apps/zendesk)
- [zulip](../apps/zulip)
