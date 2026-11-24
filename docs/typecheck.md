# Typecheck

`tsc --noEmit` over each document's generated output: routes, types, client, rpc, the seven hooks files and the
template (`routeHandler: true`, with its handler stubs filled by `scripts/fill-handler-stubs.mjs`). The tsconfig is
the repository's (`strict`, `exactOptionalPropertyTypes`, `noUncheckedIndexedAccess`), with TypeScript 7. There is
no CI: `scripts/typecheck.sh` records each result in the app's `generated.json`, and `scripts/typecheck.mjs write`
writes this file from them.

Generated with hono-takibi 0.35.6 (20), 0.33.7 (2005); each app's `generated.json` has the version of each document. 2025 documents: 1993 with no errors, 27 with errors, 5 not checked.

## Errors

| App | Errors | Where | Codes | Issue |
| --- | --- | --- | --- | --- |
| [lichess](../apps/lichess) | 1176 | `hooks/*` | TS2339 ×1116, TS2551 ×42, TS7053 ×18 | upstream: @hono/zod-openapi types an `application/x-ndjson` response as `never` |
| [readme-oas-examples](../apps/readme-oas-examples) · 3-0-http-status-codes | 1092 | `hooks/*` | TS2339 ×832, TS7053 ×260 | upstream: @hono/zod-openapi drops the statuses outside Hono's `StatusCode` (218, 526–530, 598, …), so operations with only such responses leave the client |
| [apify](../apps/apify) | 292 | `index.ts` | TS2724 ×160, TS2305 ×132 | [#544](https://github.com/nakita628/hono-takibi/issues/544) (146 of 242 operations lose their `responses` to YAML merge keys), [#545](https://github.com/nakita628/hono-takibi/issues/545) |
| [apis-guru-misc](../apps/apis-guru-misc) · clever-cloud | 129 | `hooks/*` | TS2339 ×129 | three paths have an empty segment (`//openapi`, `/vendor//addons`, `/vendor//apps/{addonId}/logscollector`): the hooks drop it, the client type keeps it (not filed: the paths look like a mistake in the document) |
| [podman-ai-lab](../apps/podman-ai-lab) | 42 | `hooks/*` | TS2339 ×42 | upstream: @hono/zod-openapi types an `application/x-ndjson` response as `never` |
| [vimeo](../apps/vimeo) | 42 | `hooks/*` | TS2339 ×42 | spec: `GET /tutorial` has an empty `responses` (`{}`), so @hono/zod-openapi leaves it out of the client that the hooks call |
| [vonage](../apps/vonage) · media | 18 | `hooks/*`, `rpc.ts` | TS2345 ×18 | spec: the paths are written `/:id` (a colon, not `{id}`) |
| [grafana](../apps/grafana) | 14 | `hooks/*`, `rpc.ts` | TS2345 ×10, TS2769 ×4 | spec: the path is written `/reports/images/:image` (a colon, not `{image}`) |
| [keycloak](../apps/keycloak) | 12 | `hooks/*` | TS2769 ×12 | [#511](https://github.com/nakita628/hono-takibi/issues/511) |
| [algolia](../apps/algolia) | 4 | `index.ts`, `hooks/*`, `client.ts` | TS2589 ×4 | deep types (TS2589) |
| [apis-guru-misc](../apps/apis-guru-misc) · maif-otoroshi | 4 | `hooks/*` | TS2769 ×4 | [#511](https://github.com/nakita628/hono-takibi/issues/511) |
| [e2b](../apps/e2b) | 4 | `hooks/*` | TS2769 ×4 | [#511](https://github.com/nakita628/hono-takibi/issues/511) |
| [inngest](../apps/inngest) | 4 | `hooks/*` | TS2769 ×4 | spec: a response object is used as a schema (`$ref: '#/components/responses/Webhook'`) |
| [line](../apps/line) · messaging-api | 4 | `hooks/*` | TS2769 ×4 | [#511](https://github.com/nakita628/hono-takibi/issues/511) |
| [apis-guru-misc](../apps/apis-guru-misc) · sendgrid | 2 | `hooks/*` | TS2769 ×2 | [#511](https://github.com/nakita628/hono-takibi/issues/511) |
| [blockfrost](../apps/blockfrost) | 2 | `hooks/*` | TS2769 ×2 | [#511](https://github.com/nakita628/hono-takibi/issues/511) |
| [svix](../apps/svix) | 2 | `hooks/*` | TS2769 ×2 | [#511](https://github.com/nakita628/hono-takibi/issues/511) |
| [vercel](../apps/vercel) | 2 | `index.ts`, `client.ts` | TS2589 ×2 | deep types (TS2589) |
| [windmill](../apps/windmill) | 2 | `hooks/*` | TS2769 ×2 | [#511](https://github.com/nakita628/hono-takibi/issues/511) |
| [alpaca-broker](../apps/alpaca-broker) | 1 | `hooks/*` | TS2589 ×1 | deep types (TS2589) |
| [apis-guru-misc](../apps/apis-guru-misc) · slack | 1 | `hooks/*` | TS2589 ×1 | deep types (TS2589) |
| [apis-guru-misc](../apps/apis-guru-misc) · vercel | 1 | `index.ts` | TS2589 ×1 | deep types (TS2589) |
| [apis-guru-misc](../apps/apis-guru-misc) · wealthreader | 1 | `hooks/*` | TS2589 ×1 | deep types (TS2589) |
| [exa](../apps/exa) | 1 | `index.ts` | TS2589 ×1 | deep types (TS2589) |
| [supabase](../apps/supabase) | 1 | `client.ts` | TS2589 ×1 | deep types (TS2589) |
| [trello](../apps/trello) | 1 | `routes.ts` | TS2769 ×1 | spec: the `attachments` query parameter is `type: string` with a boolean branch in `oneOf` and `default: false`, which the string type rules out |
| [tyk](../apps/tyk) | 1 | `routes.ts` | TS2375 ×1 | `CallbackSchema` (patternProperties + `additionalProperties: PathItem` in a cycle) is a lazy `z.looseObject({})` whose output does not satisfy its annotation `z.ZodType<CallbackType>` ([#629](https://github.com/nakita628/hono-takibi/issues/629)) |

## Not checked

| App | Reason |
| --- | --- |
| [apis-guru-misc](../apps/apis-guru-misc) · loket-nl | killed for lack of memory (15 GB) |
| [apis-guru-misc](../apps/apis-guru-misc) · microsoft-graph | killed for lack of memory (15 GB) |
| [cloudflare](../apps/cloudflare) | killed for lack of memory (15 GB) |
| [datadog](../apps/datadog) | killed for lack of memory (15 GB) |
| [msgraph](../apps/msgraph) | killed for lack of memory (15 GB) |

## No errors

- [ably](../apps/ably): platform
- [adyen](../apps/adyen)
- [adyen-services](../apps/adyen-services): A2APaymentsService-v1, AccountService-v6, BalanceControlService-v2, BalancePlatformAccountingNotification-v3, BalancePlatformAcsNotification-v1, BalancePlatformBalanceNotification-v1, BalancePlatformConfigurationNotification-v2, BalancePlatformDisputeNotification-v1, BalancePlatformGrantNotification-v1, BalancePlatformManagedRiskNotification-v1, BalancePlatformNegativeBalanceCompensationWarningNotification-v1, BalancePlatformPaymentNotification-v1, BalancePlatformRelayedAuthorisationNotification-v4, BalancePlatformReportNotification-v1, BalancePlatformService-v2, BalancePlatformTransactionNotification-v4, BalancePlatformTransferNotification-v4, BinLookupService-v54, CapitalService-v1, CheckoutService-v72, CloudDeviceService-v1, DataProtectionService-v1, DisputeService-v30, DocumentCollectorService-v1, ForeignExchangeService-v1, ForwardApiNotification-v1, FundService-v6, HopService-v6, LegalEntityService-v4, ManagementNotificationService-v3, ManagementService-v3, MarketPayNotificationService-v6, NotificationConfigurationService-v6, OpenBankingService-v1, PaymentService-v68, PaymentsAppService-v1, PayoutService-v68, RaiseDisputesService-v4, RecurringService-v68, SessionAuthenticationService-v1, SessionService-v68, SoftPOSConfigurationService-v3, StoredValueService-v46, TerminalAPI-v1, TestCardService-v1, TfmAPIService-v1, TokenizationNotification-v1, TransactionService-v4, TransferService-v4, Webhooks-v1
- [airbyte](../apps/airbyte)
- [airflow](../apps/airflow)
- [aiven](../apps/aiven)
- [aivisspeech](../apps/aivisspeech)
- [alpaca-market-data](../apps/alpaca-market-data)
- [alpaca-trading](../apps/alpaca-trading)
- [amadeus](../apps/amadeus): amadeus, amadeus-flight-price-analysis, amadeus-location-score, amadeus-travel-recommendations, amadeus-trip-parser
- [apache-polaris-management](../apps/apache-polaris-management)
- [apideck](../apps/apideck): accounting, ats, connector, crm, customer-support, ecommerce, ecosystem, file-storage, hris, issue-tracking, lead, pos, proxy, sms, vault, webhook
- [apis-guru-misc](../apps/apis-guru-misc): 1password-connect, 1password-events, 6-dot-authentiqio-appspot, ably-io-platform, ably-net-control, abstractapi-geolocation, adobe-aem, agco-ats, airbyte-config, alertersystem, amentum-space-atmosphere, amentum-space-aviation-radiation, amentum-space-global-magnet, amentum-space-gravity, amentum-space-space-radiation, anchore-io, apache-org, apache-org-airflow, apache-org-qakka, api-gov-uk-vehicle-enquiry, api-video, api2cart, api2pdf, apicurio-registry, apidapp, apigee-net-marketcheck-cars, apigee-registry, apis-guru, apispot-io-whois, apple-app-store-connect, apple-sirikit-cloud-media, apptigent, archive-org-search, archive-org-wayback, arespass-net, art19, asana, asuarez-dev-searchly, atlassian-jira, ato-gov-au, autodealerdata, axesso-de, balldontlie-io, bbc, bbci-co-uk, bclaws-ca-bclaws, beezup, betfair, bhagavadgita-io, biapi-pro, bigdatacloud-net, bigoven, bigredcloud, bikewise-org, billingo-hu, bintable, bitbucket-org, biztoc, botify, botschaft, box, brainbi-net, braze, brex-io, britbox-co-uk, bungie-net, bunq, byautomata-io, c19qrserver, calorieninjas, canada-holidays-ca, cdcgov-prime-data-hub, chaingateway-io, change, chompthis, circl-lu-hashlookup, circleci, circuitsandbox-net, clever, clickmeter, clicksend, clickup, climate, climatekuul, cloudmersive-ocr, cloudrf, clubhouseapi, codat-io-accounting, codat-io-assess, codat-io-bank-feeds, codat-io-banking, codat-io-commerce, codat-io-sync-for-commerce, codat-io-sync-for-expenses, codesearch-debian-net, collegefootballdata, color-pizza, combell, configcat, conjur, contentgroove, contract-p-fit, corrently-io, covid19-api, cowin-gov-cin-cowincert, cpy-re-peertube, crediwatch-covid19, d7networks, daniweb, dataflowkit, datasette, datumbox, departureboard-io, dev-to, digitallocker-gov-in-authpartner, digitalnz-org, digitalocean, discourse, dnd5eapi-co, docusign-net, dodo-ac, domainsdb-info, doqs-dev, dracoon-team, drchrono, easypdfserver, edrv-io, elevenlabs-io, elmah-io, enode-io, envoice-in, eos, esgenterprise, etherpad, etmdb, etsi-mec010-2-apppkgmgmt, exavault, exchangerate-api, exlibrisgroup-tasklists, extendsclass-json-storage, extpose, exude-api-herokuapp, facecheck-id, fec-gov, figshare, files, fire, firmalyzer-iotvas, firstinspires-org, flat-io, flickr, formapi-io, fraudlabspro-fraud-detection, fraudlabspro-sms-verification, freetv-app, fulfillment, fungenerators-barcode, fungenerators-pirate, fungenerators-random-facts, fungenerators-riddle, fungenerators-shakespeare, fungenerators-uuid, gambitcomm-mimic, geodatasource, geodesystems, gerermesaffaires, getpostman, getthedata-bng2latlong, gettyimages, giphy, globalwinescore, go-upc, goog-io, google, google-home, graphhopper, greip-io, groundhog-day, gsmtasks, hackathonwatch, healthcare-gov, here-positioning, here-tracking, hetzner-cloud, hhs-gov, highwaysengland-co-uk, httpbin-org, i-cue-solutions, ibanapi, icons8, id4i-de, ideaconsult-net-enanomapper, ideaconsult-net-nanoreg, ideal-postcodes-co-uk, impala-travel-hotels, increase, influxdata, intellifi-nl, interactivebrokers, ip2location-geolocation, ip2location-io, ip2proxy, ip2whois, ipinfodb, ipqualityscore, iptwist, iqualify, isendpro, ix-api-net, izettle-products, javatpoint, jellyfin, journy-io, json2video, just-eat-co-uk, keycloak, keyserv-solutions, klarna-openai, klarna-payments, kumpeapps, lambdatest, letmc-customer, lgtm, libretranslate, linode, linqr-app, listennotes, ljaero-dflight, logoraisr, lufthansa-partner, lufthansa-public, magento, mailboxvalidator-checker, mailboxvalidator-disposable, mailboxvalidator-validation, mailscript, mastodon, math-tools, mbus, mcw-edu, medium, meilisearch, meraki, mercure, mermade-org-uk-openapi-converter, meshery, meteosource, microcks, microsoft-cognitiveservices-computervision, microsoft-cognitiveservices-ocr, microsoft-cognitiveservices-prediction, microsoft-cognitiveservices-training, mineskin-org, mist, monarchinitiative-org, motaword, mozilla-kinto, mtaa-api-herokuapp, namsor, nasa-gov-apod, nasa-gov-asteroids-neows, nbg-gr, ndhm-gov-in-ndhm-cm, ndhm-gov-in-ndhm-gateway, ndhm-gov-in-ndhm-healthid, ndhm-gov-in-ndhm-hip, ndhm-gov-in-ndhm-hiu, nebl-io, neowsapp, netbox-dev, netboxdemo, netlicensing-io, neutrinoapi-net, nfusionsolutions-biz, nic-at-domainfinder, nlpcloud-io, noosh, nordigen, notion, nowpayments-io, nrel-gov-transportation-incentives-laws, nsidc-org, ntropy-network, obono-at, oceandrivers, okta, onsched-consumer, onsched-setup, onsched-utility, openai, openaq, openbanking-org-uk, openbanking-org-uk-account-info-openapi, openbanking-org-uk-confirmation-funds-openapi, openbanking-org-uk-event-notifications-openapi, openbanking-org-uk-payment-initiation-openapi, openbankingproject-ch, openchannel-io-market, opendatanetwork, openfigi, openindex-ai, openlinksw-osdb, openpolicy, openstates-org, opensuse-org-obs, opentargets-io, openuv-io, optimade, orbit-love, orthanc-server, osf-io, oxforddictionaries, pandascore-co, papinet-io-order-status, patientview-org, patrowl, pay1-de-link, paylocity, paypi-dev, payrun-io, pdfblocks, pdfbroker-io, pdfgeneratorapi, peoplefinderspro, peoplegeneratorapi-live, personio-de-authentication, personio-de-personnel, phantauth-net, pinecone-io, plaid, pocketsmith, portfoliooptimizer-io, presalytics-io-converter, presalytics-io-ooxml, presalytics-io-story, pressassociation-io, probely, proxykingdom, ptv-vic-gov-au, qualtrics, quickchart-io, quotes-rest, randomlovecraft, randommer-io, rapidapi-dynamicdocs, rapidapi-ecowetter, rapidapi-football-prediction, rapidapi-idealspot-geodata, rapidapi-spellcheckpro, rawg-io, readme-io, rebilly, redeal-io, redeal-io-analytics, redhat-catalog-inventory, redhat-patchman-engine, reloadly, remove-bg, restful4up, rev-ai, reverb, ritekit, rudder-example, rumble-run, sakari-io, salesforce-einstein, scideas-net-perfectpdf, scideas-net-regression, seldon-core, seldon-engine, seldon-wrapper, shipengine, shipstation, shop-app, shop-pro-jp, shorten-rest, shotstack-io, shutterstock, signl4, simplivpn-net, sinao-app, slack-openai, smart-me, sms77-io, snyk-io, soundcloud, spinitron, spoonacular, spotify-sonallux, squareup, stackexchange, staging-ecotaco, stellastra, stoplight-io, storecove, stream-io-api, stripe, superset-apache-superset, surevoip-co-uk, svix, symanto-net, tafqit-herokuapp, taxrates-io, tcgdex-net, telegram-org, telematicssdk, telnyx, tfl-gov-uk, thebluealliance, threatjammer, ticketmaster-discovery, ticketmaster-publish, tisane-ai, tl-api-azurewebsites-net, tokenjay-app, tokenmetrics, tomtom-maps, tomtom-routing, tomtom-search, traccar-org, trakt-tv, trapstreet, trashnothing, trello, truanon, truesight, truora, tsapi-net, tvmaze, twitter-current, unicourt, up-au, urlbox-io, va-gov-benefits, va-gov-confirmation, va-gov-facilities, va-gov-forms, vectara-io, velopayments, versioneye, viator, vimeo, visualcrossing-weather, visualstudio, vmware-vrni, vocadb-net, walletobjects-googleapis-pay-passes, webflow, webscraping-ai, wellknown-ai, whapi-bets, whatsapp, wheretocredit, wikipathways-org, windows-net-graphrbac, wiremock-org-admin, wolframalpha, wordnik, worldtimeapi-org, wso2apistore-transform, xkcd, xtrf-eu, yodlee, youneedabudget, zapier-nla, zeit-co, zeno-fm, zenoti, zoom-us, zuora
- [apisetu-gov-in](../apps/apisetu-gov-in): aaharjh, acko, agtripura, aharakar, aiimsmangalagiri, aiimspatna, aiimsrishikesh, aktu, apmcservices, asrb, bajajallianz, bajajallianzlife, barti, bharatpetroleum, bhartiaxagi, bhavishya, biharboard, bput, bsehr, cbse, cgbse, chennaicorp, chitkarauniversity, cholainsurance, cisce, civilsupplieskerala, cpctmp, csc, dbraitandaman, dgecerttn, dgft, dhsekerala, ditarunachal, ditch, dittripura, duexam, edistrictandaman, edistricthp, edistrictkerala, edistrictodisha, edistrictodishasp, edistrictpb, edistrictup, ehimapurtihp, enibandhanjh, epfindia, epramanhp, eservicearunachal, fsdhr, futuregenerali, gadbih, gauhati, gbshse, geetanjaliuniv, gmch, goawrd, godigit, gujaratvidyapith, hindustanpetroleum, hpayushboard, hpbose, hppanchayat, hpsbys, hpsssb, hptechboard, hsbte, hsscboardmh, icicilombard, iciciprulife, icsi, igrmaharashtra, insvalsura, iocl, issuer, jac, jeecup, jharsewa, jnrmand, juit, keralapsc, kiadb, kkhsou, kotakgeneralinsurance, kseebkr, ktech, labourbih, landrecordskar, lawcollegeandaman, legalmetrologyup, licindia, maxlifeinsurance, mbose, mbse, mcimindia, meark, mizoramlesde, mizorampolice, mpmsu, mppmc, mriu, msde, municipaladmin, nationalinsurance, ncert, negd, neilit, newindia, niesbud, nios, nitap, nitp, npsailu, nsdcindia, orientalinsurance, pan, pareekshabhavanker, pblabour, pgimer, phedharyana, pmjay, pramericalife, pseb, puekar, punjabteched, rajasthandsa, rajasthanrajeduboard, reliancegeneral, revenueassam, revenueodisha, sainikwelfarepud, saralharyana, sbigeneral, scvtup, sebaonline, statisticsrajasthan, swavlambancard, tataaia, tataaig, tbse, transport, transportan, transportap, transportar, transportas, transportbr, transportcg, transportdd, transportdh, transportdl, transportga, transportgj, transporthp, transporthr, transportjh, transportjk, transportka, transportkl, transportld, transportmh, transportml, transportmn, transportmp, transportmz, transportnl, transportod, transportpb, transportpy, transportrj, transportsk, transporttn, transporttr, transportts, transportuk, transportup, transportwb, ubseuk, ucobank, uiic, upmsp, vhseker, vssut
- [appwrite](../apps/appwrite)
- [asana](../apps/asana)
- [asana-app-components](../apps/asana-app-components)
- [authentik](../apps/authentik)
- [aws-apis](../apps/aws-apis): accessanalyzer, acm, acm-pca, alexaforbusiness, amp, amplify, amplifybackend, apigateway, apigatewaymanagementapi, apigatewayv2, appconfig, appflow, appintegrations, application-autoscaling, application-insights, applicationcostprofiler, appmesh, apprunner, appstream, appsync, athena, auditmanager, autoscaling, autoscaling-plans, awsmigrationhub, backup, batch, braket, budgets, ce, chime, cloud9, clouddirectory, cloudformation, cloudfront, cloudhsm, cloudhsmv2, cloudsearch, cloudsearchdomain, cloudtrail, codeartifact, codebuild, codecommit, codedeploy, codeguru-reviewer, codeguruprofiler, codepipeline, codestar, codestar-connections, codestar-notifications, cognito-identity, cognito-idp, cognito-sync, comprehend, comprehendmedical, compute-optimizer, config, connect, connect-contact-lens, connectparticipant, cur, customer-profiles, databrew, dataexchange, datapipeline, datasync, dax, detective, devicefarm, devops-guru, directconnect, discovery, dlm, dms, docdb, ds, dynamodb, ebs, ec2, ec2-instance-connect, ecr, ecr-public, ecs, eks, elastic-inference, elasticache, elasticbeanstalk, elasticfilesystem, elasticloadbalancing, elasticloadbalancingv2, elasticmapreduce, elastictranscoder, email, emr-containers, entitlement-marketplace, es, eventbridge, events, finspace, finspace-data, firehose, fis, fms, forecast, forecastquery, frauddetector, fsx, gamelift, glacier, globalaccelerator, glue, greengrass, greengrassv2, groundstation, guardduty, health, healthlake, honeycode, iam, identitystore, imagebuilder, importexport, inspector, iot, iot-data, iot-jobs-data, iot1click-devices, iot1click-projects, iotanalytics, iotdeviceadvisor, iotevents, iotevents-data, iotfleethub, iotsecuretunneling, iotsitewise, iotthingsgraph, iotwireless, ivs, kafka, kendra, kinesis, kinesis-video-archived-media, kinesis-video-media, kinesis-video-signaling, kinesisanalytics, kinesisanalyticsv2, kinesisvideo, kms, lakeformation, lambda, lex-models, license-manager, lightsail, location, logs, lookoutequipment, lookoutmetrics, lookoutvision, machinelearning, macie, macie2, managedblockchain, marketplace-catalog, marketplacecommerceanalytics, mediaconnect, mediaconvert, medialive, mediapackage, mediapackage-vod, mediastore, mediastore-data, mediatailor, meteringmarketplace, mgn, migrationhub-config, mobile, mobileanalytics, models-lex-v2, monitoring, mq, mturk-requester, mwaa, neptune, network-firewall, networkmanager, nimble, opsworks, opsworkscm, organizations, outposts, personalize, personalize-events, personalize-runtime, pi, pinpoint, pinpoint-email, polly, pricing, proton, qldb, qldb-session, quicksight, ram, rds, rds-data, redshift, redshift-data, rekognition, resource-groups, resourcegroupstaggingapi, robomaker, route53, route53domains, route53resolver, runtime-lex, runtime-lex-v2, runtime-sagemaker, s3, s3control, s3outposts, sagemaker, sagemaker-a2i-runtime, sagemaker-edge, sagemaker-featurestore-runtime, savingsplans, schemas, sdb, secretsmanager, securityhub, serverlessrepo, service-quotas, servicecatalog, servicecatalog-appregistry, servicediscovery, sesv2, shield, signer, sms, sms-voice, snowball, sns, sqs, ssm, ssm-contacts, ssm-incidents, sso, sso-admin, sso-oidc, states, storagegateway, streams-dynamodb, sts, support, swf, synthetics, textract, timestream-query, timestream-write, transcribe, transfer, translate, waf, waf-regional, wafv2, wellarchitected, workdocs, worklink, workmail, workmailmessageflow, workspaces, xray
- [azure-openai](../apps/azure-openai)
- [backstage-catalog](../apps/backstage-catalog)
- [backstage-events](../apps/backstage-events)
- [backstage-notifications](../apps/backstage-notifications)
- [backstage-scaffolder](../apps/backstage-scaffolder)
- [backstage-search](../apps/backstage-search)
- [bitbucket](../apps/bitbucket)
- [box](../apps/box)
- [box-versions](../apps/box-versions): v2025.0, v2026.0
- [brevo](../apps/brevo)
- [budibase](../apps/budibase)
- [bungie](../apps/bungie)
- [bunq](../apps/bunq)
- [calcom](../apps/calcom)
- [canva](../apps/canva)
- [chargebee](../apps/chargebee)
- [chatwoot](../apps/chatwoot)
- [circleci](../apps/circleci)
- [clerk](../apps/clerk)
- [clickhouse-cloud](../apps/clickhouse-cloud)
- [cloud-hypervisor](../apps/cloud-hypervisor)
- [cohere](../apps/cohere)
- [coinbase-cdp](../apps/coinbase-cdp)
- [comfyui](../apps/comfyui)
- [confluence](../apps/confluence)
- [congress-gov](../apps/congress-gov)
- [consul-terraform-sync](../apps/consul-terraform-sync)
- [cvat](../apps/cvat)
- [daytona](../apps/daytona)
- [dbt-cloud](../apps/dbt-cloud)
- [deepgram](../apps/deepgram)
- [deepl](../apps/deepl)
- [deutschebahn](../apps/deutschebahn): reisezentren
- [digitalocean](../apps/digitalocean)
- [directus](../apps/directus)
- [discord](../apps/discord)
- [discourse](../apps/discourse)
- [dropbox-sign](../apps/dropbox-sign)
- [e-gov-law](../apps/e-gov-law)
- [ebay](../apps/ebay): buy-deal, commerce-catalog, commerce-charity, commerce-translation, developer-analytics, sell-account, sell-analytics, sell-compliance, sell-feed, sell-fulfillment, sell-listing, sell-logistics, sell-marketing, sell-metadata, sell-negotiation, sell-recommendation
- [elastic-apm-server](../apps/elastic-apm-server)
- [elastic-fleet-server](../apps/elastic-fleet-server)
- [elasticsearch](../apps/elasticsearch)
- [elevenlabs](../apps/elevenlabs)
- [equinix-metal](../apps/equinix-metal)
- [ethereum-beacon-api](../apps/ethereum-beacon-api)
- [exoscale](../apps/exoscale)
- [figma](../apps/figma)
- [filerise](../apps/filerise)
- [firecrawl](../apps/firecrawl)
- [firezone](../apps/firezone)
- [fluss-gateway](../apps/fluss-gateway)
- [fly-machines](../apps/fly-machines)
- [freee](../apps/freee): accounting, hr, iv, sm
- [frigate](../apps/frigate)
- [fusionauth](../apps/fusionauth)
- [ga4gh-drs](../apps/ga4gh-drs)
- [getbible](../apps/getbible)
- [gitea](../apps/gitea)
- [github](../apps/github)
- [github-next](../apps/github-next)
- [gitlab](../apps/gitlab)
- [google-apis](../apps/google-apis): abusiveexperiencereport, acceleratedmobilepageurl, accessapproval, accesscontextmanager, acmedns, adexchangebuyer, adexchangebuyer2, adexperiencereport, admin, admob, adsense, adsensehost, advisorynotifications, alertcenter, analytics, analyticsadmin, analyticsdata, analyticshub, analyticsreporting, androiddeviceprovisioning, androidenterprise, androidmanagement, androidpublisher, apigateway, apigee, apigeeregistry, apikeys, appengine, appsactivity, area120tables, artifactregistry, assuredworkloads, authorizedbuyersmarketplace, automl, baremetalsolution, batch, beyondcorp, bigquery, bigqueryconnection, bigquerydatatransfer, bigqueryreservation, bigtableadmin, billingbudgets, binaryauthorization, blogger, books, businessprofileperformance, calendar, calendar-v3, certificatemanager, chat, chromemanagement, chromepolicy, chromeuxreport, civicinfo, classroom, cloudasset, cloudbilling, cloudbuild, cloudchannel, clouddebugger, clouddeploy, clouderrorreporting, cloudfunctions, cloudidentity, cloudiot, cloudkms, cloudprivatecatalog, cloudprivatecatalogproducer, cloudprofiler, cloudresourcemanager, cloudscheduler, cloudsearch, cloudshell, cloudsupport, cloudtasks, cloudtrace, commentanalyzer, composer, compute, connectors, contactcenteraiplatform, contactcenterinsights, container, containeranalysis, content, contentwarehouse, customsearch, datacatalog, dataflow, dataform, datafusion, datalabeling, datalineage, datamigration, datapipelines, dataplex, dataproc, datastore, datastream, deploymentmanager, dfareporting, dialogflow, digitalassetlinks, discovery, discoveryengine, displayvideo, dlp, dns, docs, documentai, domains, domainsrdap, doubleclickbidmanager, doubleclicksearch, drive, drive-v3, driveactivity, drivelabels, essentialcontacts, eventarc, factchecktools, fcm, fcmdata, file, firebase, firebaseappcheck, firebaseappdistribution, firebasedatabase, firebasedynamiclinks, firebasehosting, firebaseml, firebaserules, firebasestorage, firestore, fitness, forms, games, gamesconfiguration, gameservices, gamesmanagement, genomics, gkebackup, gkehub, gmail, gmail-v1, gmailpostmastertools, groupsmigration, groupssettings, healthcare, homegraph, iam, iamcredentials, iap, ideahub, identitytoolkit, ids, indexing, integrations, jobs, keep, kgsearch, kmsinventory, language, libraryagent, licensing, lifesciences, localservices, logging, managedidentities, manufacturers, memcache, metastore, migrationcenter, mirror, ml, monitoring, my-business, mybusinessaccountmanagement, mybusinessbusinesscalls, mybusinessbusinessinformation, mybusinesslodging, mybusinessnotifications, mybusinessplaceactions, mybusinessqanda, mybusinessverifications, networkconnectivity, networkmanagement, networksecurity, networkservices, notebooks, oauth2, ondemandscanning, orgpolicy, osconfig, oslogin, pagespeedonline, paymentsresellersubscription, people, playablelocations, playcustomapp, playdeveloperreporting, playintegrity, plus, policyanalyzer, policysimulator, policytroubleshooter, poly, privateca, prod-tt-sasportal, proximitybeacon, publicca, pubsub, pubsublite, readerrevenuesubscriptionlinking, realtimebidding, recaptchaenterprise, recommendationengine, recommender, redis, remotebuildexecution, replicapool, reseller, resourcesettings, retail, run, runtimeconfig, safebrowsing, sasportal, script, searchads360, searchconsole, secretmanager, securitycenter, servicebroker, serviceconsumermanagement, servicecontrol, servicedirectory, servicemanagement, servicenetworking, serviceusage, sheets, sheets-v4, shoppingcontent, siteverification, slides, smartdevicemanagement, sourcerepo, spanner, speech, sql, sqladmin, storage, storage-v1, storagetransfer, streetviewpublish, sts, tagmanager, tasks, testing, texttospeech, toolresults, tpu, trafficdirector, transcoder, translate, translate-v3, travelimpactmodel, vault, vectortile, verifiedaccess, versionhistory, videointelligence, vision, vmmigration, vpcaccess, webfonts, webmasters, webrisk, websecurityscanner, workflowexecutions, workflows, workloadmanager, workstations, youtube, youtube-v3, youtubeanalytics, youtubereporting
- [gov-bc-ca](../apps/gov-bc-ca): bcdc, bcgnws, geocoder, geomark, gwells, jobposting, news, open511, router
- [grafana-pyroscope](../apps/grafana-pyroscope): adhocprofiles-v1-adhocprofiles, capabilities-v1-feature-flags, debuginfo-v1-debuginfo, debuginfo-v1alpha1-debuginfo, google-v1-profile, ingester-v1-ingester, metastore-v1-compactor, metastore-v1-index, metastore-v1-query, metastore-v1-raft-log-raft-log, metastore-v1-tenant, metastore-v1-types, push-v1-push, querier-v1-querier, query-v1-query, segmentwriter-v1-push, settings-v1-recording-rules, settings-v1-setting, status-v1-status, storegateway-v1-storegateway, types-v1-types, vcs-v1-vcs, version-v1-version
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
- [huggingface](../apps/huggingface)
- [hyperswitch](../apps/hyperswitch)
- [ibkr](../apps/ibkr)
- [immich](../apps/immich)
- [infinity](../apps/infinity)
- [influxdb-cloud](../apps/influxdb-cloud)
- [influxdb-oss](../apps/influxdb-oss)
- [intercom](../apps/intercom)
- [interzoid](../apps/interzoid): convertcurrency, getaddressmatch, getareacodefromnumber, getcitymatch, getcitystandard, getcompanymatch, getcountrymatch, getcountrystandard, getcurrencyrate, getemailinfo, getfullnamematch, getfullnameparsedmatch, getglobalnumberinfo, getglobaltime, getstateabbreviation, getweathercity, getweatherzip, getzipinfo, globalpageload, lookupareacode
- [invoiceninja](../apps/invoiceninja)
- [jellyfin](../apps/jellyfin)
- [jikan](../apps/jikan)
- [jira](../apps/jira)
- [jira-service-management](../apps/jira-service-management)
- [kafka-rest](../apps/kafka-rest)
- [karakeep](../apps/karakeep)
- [kavita](../apps/kavita)
- [kintone](../apps/kintone)
- [knock](../apps/knock): api, mapi
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
- [linode](../apps/linode)
- [listmonk](../apps/listmonk)
- [lithic](../apps/lithic)
- [lob](../apps/lob)
- [mailchimp-transactional](../apps/mailchimp-transactional)
- [martin](../apps/martin)
- [medusa-admin](../apps/medusa-admin)
- [medusa-store](../apps/medusa-store)
- [meilisearch](../apps/meilisearch)
- [memos](../apps/memos)
- [meraki](../apps/meraki)
- [mermade-openapi3-examples](../apps/mermade-openapi3-examples): 3-0-cyclical, 3-0-deprecated, 3-0-externalpathitemref, 3-0-fuzz1-50aea792-0425-474d-938b-fc8a7387739a, 3-0-fuzz1-f8c97f2c-efa9-4a93-bd39-e7008df12b47, 3-0-gluecon-example1-from-different-parameters-md, 3-0-gluecon-example1-from-fixed-file-md, 3-0-gluecon-example1-from-fixed-multipart-md, 3-0-gluecon-example1-from-improved-examples-md, 3-0-gluecon-example1-from-improved-pathdescriptions-md, 3-0-gluecon-example1-from-improved-securityschemes-md, 3-0-gluecon-example1-from-improved-serverseverywhere-md, 3-0-gluecon-example1-from-new-callbacks-md, 3-0-gluecon-example1-from-new-links-md, 3-0-gluecon-example2-from-different-parameters-md, 3-0-gluecon-example2-from-different-requestbody-md, 3-0-gluecon-example2-from-different-servers-md, 3-0-gluecon-example2-from-fixed-multipart-md, 3-0-gluecon-example2-from-improved-securityschemes-md, 3-0-gluecon-example2-from-new-callbacks-md, 3-0-gluecon-example2-from-new-links-md, 3-0-gluecon-example3-from-different-parameters-md, 3-0-gluecon-example3-from-different-servers-md, 3-0-gluecon-example4-from-different-parameters-md, 3-0-gluecon-example5-from-different-parameters-md, 3-0-hello, 3-0-minimal, 3-0-nonbearerhttpsec, 3-0-oai-api-with-examples, 3-0-oai-callback-example, 3-0-oai-link-example, 3-0-oai-petstore, 3-0-oai-petstore-expanded, 3-0-oai-uber, 3-0-oai-uspto, 3-0-openapi, 3-0-swagger2openapi-openapi, 3-1-mega, 3-1-minimal-hooks, 3-1-minimal-paths, 3-1-path-no-response, 3-1-path-var-empty-pathitem, 3-1-schema
- [microsoft-ccf](../apps/microsoft-ccf): app, gov, node
- [microsoft-mcp-gateway](../apps/microsoft-mcp-gateway)
- [misp](../apps/misp)
- [modern-treasury](../apps/modern-treasury)
- [mollie](../apps/mollie)
- [mongodb-atlas](../apps/mongodb-atlas)
- [n8n](../apps/n8n)
- [nango](../apps/nango)
- [navidrome](../apps/navidrome)
- [neon](../apps/neon)
- [netbox](../apps/netbox)
- [netdata](../apps/netdata)
- [netlify](../apps/netlify)
- [nextcloud-app-api](../apps/nextcloud-app-api)
- [nextcloud-apps](../apps/nextcloud-apps): appstore, cloud-federation-api, comments, dashboard, dav, federatedfilesharing, federation, files, files-external, files-reminders, files-sharing, files-trashbin, files-versions, oauth2, profile, provisioning-api, settings, sharebymail, sharing, systemtags, theming, updatenotification, user-ldap, user-status, viewer, weather-status, webhook-listeners, workflowengine
- [nextcloud-core](../apps/nextcloud-core)
- [nextcloud-talk](../apps/nextcloud-talk)
- [nginx-controller-analytics](../apps/nginx-controller-analytics)
- [nomad](../apps/nomad)
- [novu](../apps/novu)
- [nytimes](../apps/nytimes): archive, article-search, books-api, community, geo-api, most-popular-api, movie-reviews, semantic-api, times-tags, timeswire, top-stories
- [octobox](../apps/octobox)
- [ollama](../apps/ollama)
- [onepassword-connect](../apps/onepassword-connect)
- [open-banking-uk-aisp](../apps/open-banking-uk-aisp)
- [open-banking-uk-pisp](../apps/open-banking-uk-pisp)
- [openai](../apps/openai)
- [opencost](../apps/opencost)
- [opendota](../apps/opendota)
- [openfaas](../apps/openfaas)
- [openfeature-ofrep](../apps/openfeature-ofrep)
- [openmeter](../apps/openmeter)
- [opensearch](../apps/opensearch)
- [opik](../apps/opik)
- [ory](../apps/ory)
- [ory-hydra](../apps/ory-hydra)
- [ory-keto](../apps/ory-keto)
- [ote-godaddy](../apps/ote-godaddy): abuse, aftermarket, agreements, certificates, countries, domains, orders, shoppers, subscriptions
- [outline](../apps/outline)
- [overseerr](../apps/overseerr)
- [owncast](../apps/owncast)
- [paddle](../apps/paddle)
- [pagerduty](../apps/pagerduty)
- [parliament](../apps/parliament): bills, erskine-may, lordsvotes, members, now, oralquestions, search, statutoryinstruments, treaties, writtenquestions
- [paypal](../apps/paypal): billing_subscriptions_v1, catalogs_products_v1, checkout_orders_v2, customer_disputes_v1, customer_partner_referrals_v2, invoicing_v2, notifications_webhooks_v1, payment-experience_web_experience_profiles_v1, payments_payment_v2, payments_payouts_batch_v1, reporting_transactions_v1, shipping_shipment_tracking_v1, vault_payment_tokens_v3
- [peertube](../apps/peertube)
- [personio](../apps/personio)
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
- [prometheus](../apps/prometheus)
- [prowlarr](../apps/prowlarr)
- [qdrant](../apps/qdrant)
- [qstash](../apps/qstash)
- [radarr](../apps/radarr)
- [ray-jobs](../apps/ray-jobs)
- [readme-oas-examples](../apps/readme-oas-examples): 3-0-callbacks, 3-0-circular, 3-0-circular-paths, 3-0-complex-nesting, 3-0-discriminators, 3-0-file-uploads, 3-0-form-data, 3-0-link-example, 3-0-parameters-common, 3-0-parameters-cookies, 3-0-parameters-extreme, 3-0-parameters-style, 3-0-petstore, 3-0-petstore-expanded, 3-0-petstore-simple, 3-0-petstore-simple-no-tags, 3-0-polymorphism, 3-0-readme, 3-0-readme-extensions, 3-0-request-examples, 3-0-response-examples, 3-0-response-http-behavior, 3-0-response-multiple-mediatypes, 3-0-response-schemas, 3-0-schema-additional-properties, 3-0-schema-circular, 3-0-schema-deprecated, 3-0-schema-encoding-style, 3-0-schema-enums, 3-0-schema-types, 3-0-schema-validation, 3-0-schema-visibility, 3-0-security, 3-0-security-multiple, 3-0-server-variables, 3-0-star-trek, 3-0-uspto, 3-1-parameters-style, 3-1-petstore, 3-1-petstore-simple, 3-1-readme-extensions, 3-1-schema-encoding-style, 3-1-schema-types, 3-1-schema-validation-local, 3-1-schema-validation-top-level, 3-1-security, 3-1-train-travel, 3-1-webhooks
- [redocly-museum](../apps/redocly-museum)
- [render](../apps/render)
- [replicate](../apps/replicate)
- [resend](../apps/resend)
- [revolut-business](../apps/revolut-business)
- [revolut-merchant](../apps/revolut-merchant)
- [riot](../apps/riot)
- [rocket-chat](../apps/rocket-chat): authentication, content-management, integrations, marketplace-apps, messaging, miscellaneous, notifications, omnichannel, rooms, settings, statistics, user-management
- [sendgrid](../apps/sendgrid)
- [sentry](../apps/sentry)
- [sonarr](../apps/sonarr)
- [sportsdata](../apps/sportsdata): cbb-v3-scores, cbb-v3-stats, cfb-v3-scores, csgo-v3-scores, csgo-v3-stats, golf-v2, lol-v3-projections, lol-v3-scores, lol-v3-stats, mlb-v3-play-by-play, mlb-v3-projections, mlb-v3-rotoballer-articles, mlb-v3-rotoballer-premium-news, mlb-v3-scores, mlb-v3-stats, nascar-v2, nba-v3-play-by-play, nba-v3-projections, nba-v3-rotoballer-articles, nba-v3-rotoballer-premium-news, nba-v3-scores, nba-v3-stats, nfl-v3-play-by-play, nfl-v3-projections, nfl-v3-rotoballer-articles, nfl-v3-rotoballer-premium-news, nfl-v3-scores, nfl-v3-stats, nhl-v3-play-by-play, nhl-v3-projections, nhl-v3-scores, nhl-v3-stats, soccer-v3-projections, soccer-v3-scores, soccer-v3-stats
- [spotify](../apps/spotify)
- [strimzi-kafka-bridge](../apps/strimzi-kafka-bridge)
- [stripe](../apps/stripe)
- [stytch](../apps/stytch)
- [supabase-auth](../apps/supabase-auth)
- [superset](../apps/superset)
- [supertokens](../apps/supertokens)
- [tailscale](../apps/tailscale)
- [teampass](../apps/teampass)
- [telnyx](../apps/telnyx)
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
- [vapi](../apps/vapi)
- [vault](../apps/vault)
- [vonage](../apps/vonage): account, application, application-v2, audit, conversation, conversation-v2, conversion, dispatch, external-accounts, messages-olympus, number-insight, numbers, pricing, redact, reports, sms, subaccounts, verify, voice
- [vtex](../apps/vtex): catalog-api, catalog-api-seller-portal, checkout-api, customer-credit-api, giftcard-api, giftcard-hub-api, headless-cms-api, intelligent-search-api, license-manager-api, logistics-api, marketplace-apis, marketplace-apis-2, marketplace-protocol, master-data-api, masterdata-api, message-center-api, orders-api, orders-api-pii-version, payments-gateway-api, policies-system-api, price-simulations, pricing-api, pricing-hub, profile-system, promotions, recurrence-v1, reviews-and-ratings-api, search-api, session-manager-api, sku-bindings-api, subscriptions-api-v2, subscriptions-api-v3, vtex-do-api, vtex-template
- [weather-gov](../apps/weather-gov)
- [whatsapp-business](../apps/whatsapp-business)
- [workos](../apps/workos)
- [wukongim](../apps/wukongim)
- [xero](../apps/xero): xero-accountdata, xero-app-store, xero-finance, xero-identity, xero-payroll-au, xero-payroll-au-v2, xero-payroll-nz, xero-payroll-uk, xero-projects, xero-webhooks, xero_accounting, xero_assets, xero_bankfeeds, xero_files
- [zendesk](../apps/zendesk)
- [zulip](../apps/zulip)
