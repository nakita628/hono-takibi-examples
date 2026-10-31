import { createRoute, z } from '@hono/zod-openapi'

const GoogleFirebaseAppcheckV1AppAttestConfigSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The relative resource name of the App Attest configuration object, in the format: ``` projects/{project_number}/apps/{app_id}/appAttestConfig ```',
      }),
    tokenTtl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Specifies the duration for which App Check tokens exchanged from App Attest artifacts will be valid. If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive.',
      }),
  })
  .openapi({
    description:
      "An app's App Attest configuration object. This configuration controls certain properties of the `AppCheckToken` returned by ExchangeAppAttestAttestation and ExchangeAppAttestAssertion, such as its ttl. Note that the Team ID registered with your app is used as part of the validation process. Please register it via the Firebase Console or programmatically via the [Firebase Management Service](https://firebase.google.com/docs/projects/api/reference/rest/v11/projects.iosApps/patch).",
    required: [],
  })
  .openapi('GoogleFirebaseAppcheckV1AppAttestConfig')

const GoogleFirebaseAppcheckV1AppCheckTokenSchema = z
  .object({
    token: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The App Check token. App Check tokens are signed [JWTs](https://tools.ietf.org/html/rfc7519) containing claims that identify the attested app and Firebase project. This token is used to access Firebase services protected by App Check. These tokens can also be [verified by your own custom backends](https://firebase.google.com/docs/app-check/custom-resource-backend) using the Firebase Admin SDK.',
      }),
    ttl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The duration from the time this token is minted until its expiration. This field is intended to ease client-side token management, since the client may have clock skew, but is still able to accurately measure a duration.',
      }),
  })
  .openapi({
    description:
      'Encapsulates an *App Check token*, which are used to access Firebase services protected by App Check.',
    required: [],
  })
  .openapi('GoogleFirebaseAppcheckV1AppCheckToken')

const GoogleFirebaseAppcheckV1BatchGetAppAttestConfigsResponseSchema = z
  .object({
    configs: z
      .array(GoogleFirebaseAppcheckV1AppAttestConfigSchema)
      .exactOptional()
      .openapi({ description: 'AppAttestConfigs retrieved.' }),
  })
  .openapi({
    description: 'Response message for the BatchGetAppAttestConfigs method.',
    required: [],
  })
  .openapi('GoogleFirebaseAppcheckV1BatchGetAppAttestConfigsResponse')

const GoogleFirebaseAppcheckV1DeviceCheckConfigSchema = z
  .object({
    keyId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The key identifier of a private key enabled with DeviceCheck, created in your Apple Developer account.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The relative resource name of the DeviceCheck configuration object, in the format: ``` projects/{project_number}/apps/{app_id}/deviceCheckConfig ```',
      }),
    privateKey: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Input only. The contents of the private key (`.p8`) file associated with the key specified by `key_id`. For security reasons, this field will never be populated in any response.',
      }),
    privateKeySet: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. Whether the `private_key` field was previously set. Since we will never return the `private_key` field, this field is the only way to find out whether it was previously set.',
        readOnly: true,
      }),
    tokenTtl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Specifies the duration for which App Check tokens exchanged from DeviceCheck tokens will be valid. If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive.',
      }),
  })
  .openapi({
    description:
      "An app's DeviceCheck configuration object. This configuration is used by ExchangeDeviceCheckToken to validate device tokens issued to apps by DeviceCheck. It also controls certain properties of the returned `AppCheckToken`, such as its ttl. Note that the Team ID registered with your app is used as part of the validation process. Please register it via the Firebase Console or programmatically via the [Firebase Management Service](https://firebase.google.com/docs/projects/api/reference/rest/v11/projects.iosApps/patch).",
    required: [],
  })
  .openapi('GoogleFirebaseAppcheckV1DeviceCheckConfig')

const GoogleFirebaseAppcheckV1BatchGetDeviceCheckConfigsResponseSchema = z
  .object({
    configs: z
      .array(GoogleFirebaseAppcheckV1DeviceCheckConfigSchema)
      .exactOptional()
      .openapi({ description: 'DeviceCheckConfigs retrieved.' }),
  })
  .openapi({
    description: 'Response message for the BatchGetDeviceCheckConfigs method.',
    required: [],
  })
  .openapi('GoogleFirebaseAppcheckV1BatchGetDeviceCheckConfigsResponse')

const GoogleFirebaseAppcheckV1PlayIntegrityConfigSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The relative resource name of the Play Integrity configuration object, in the format: ``` projects/{project_number}/apps/{app_id}/playIntegrityConfig ```',
      }),
    tokenTtl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Specifies the duration for which App Check tokens exchanged from Play Integrity tokens will be valid. If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive.',
      }),
  })
  .openapi({
    description:
      "An app's Play Integrity configuration object. This configuration controls certain properties of the `AppCheckToken` returned by ExchangePlayIntegrityToken, such as its ttl. Note that your registered SHA-256 certificate fingerprints are used to validate tokens issued by the Play Integrity API; please register them via the Firebase Console or programmatically via the [Firebase Management Service](https://firebase.google.com/docs/projects/api/reference/rest/v1beta1/projects.androidApps.sha/create).",
    required: [],
  })
  .openapi('GoogleFirebaseAppcheckV1PlayIntegrityConfig')

const GoogleFirebaseAppcheckV1BatchGetPlayIntegrityConfigsResponseSchema = z
  .object({
    configs: z
      .array(GoogleFirebaseAppcheckV1PlayIntegrityConfigSchema)
      .exactOptional()
      .openapi({ description: 'PlayIntegrityConfigs retrieved.' }),
  })
  .openapi({
    description: 'Response message for the BatchGetPlayIntegrityConfigs method.',
    required: [],
  })
  .openapi('GoogleFirebaseAppcheckV1BatchGetPlayIntegrityConfigsResponse')

const GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfigSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The relative resource name of the reCAPTCHA Enterprise configuration object, in the format: ``` projects/{project_number}/apps/{app_id}/recaptchaEnterpriseConfig ```',
      }),
    siteKey: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The score-based site key [created in reCAPTCHA Enterprise](https://cloud.google.com/recaptcha-enterprise/docs/create-key#creating_a_site_key) used to [invoke reCAPTCHA and generate the reCAPTCHA tokens](https://cloud.google.com/recaptcha-enterprise/docs/instrument-web-pages) for your application. Important: This is *not* the `site_secret` (as it is in reCAPTCHA v3), but rather your score-based reCAPTCHA Enterprise site key.',
      }),
    tokenTtl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Specifies the duration for which App Check tokens exchanged from reCAPTCHA Enterprise tokens will be valid. If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive.',
      }),
  })
  .openapi({
    description:
      "An app's reCAPTCHA Enterprise configuration object. This configuration is used by ExchangeRecaptchaEnterpriseToken to validate reCAPTCHA tokens issued to apps by reCAPTCHA Enterprise. It also controls certain properties of the returned `AppCheckToken`, such as its ttl.",
    required: [],
  })
  .openapi('GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfig')

const GoogleFirebaseAppcheckV1BatchGetRecaptchaEnterpriseConfigsResponseSchema = z
  .object({
    configs: z
      .array(GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfigSchema)
      .exactOptional()
      .openapi({ description: 'RecaptchaEnterpriseConfigs retrieved.' }),
  })
  .openapi({
    description: 'Response message for the BatchGetRecaptchaEnterpriseConfigs method.',
    required: [],
  })
  .openapi('GoogleFirebaseAppcheckV1BatchGetRecaptchaEnterpriseConfigsResponse')

const GoogleFirebaseAppcheckV1RecaptchaV3ConfigSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The relative resource name of the reCAPTCHA v3 configuration object, in the format: ``` projects/{project_number}/apps/{app_id}/recaptchaV3Config ```',
      }),
    siteSecret: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Input only. The site secret used to identify your service for reCAPTCHA v3 verification. For security reasons, this field will never be populated in any response.',
      }),
    siteSecretSet: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. Whether the `site_secret` field was previously set. Since we will never return the `site_secret` field, this field is the only way to find out whether it was previously set.',
        readOnly: true,
      }),
    tokenTtl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Specifies the duration for which App Check tokens exchanged from reCAPTCHA tokens will be valid. If unset, a default value of 1 day is assumed. Must be between 30 minutes and 7 days, inclusive.',
      }),
  })
  .openapi({
    description:
      "An app's reCAPTCHA v3 configuration object. This configuration is used by ExchangeRecaptchaV3Token to validate reCAPTCHA tokens issued to apps by reCAPTCHA v3. It also controls certain properties of the returned `AppCheckToken`, such as its ttl.",
    required: [],
  })
  .openapi('GoogleFirebaseAppcheckV1RecaptchaV3Config')

const GoogleFirebaseAppcheckV1BatchGetRecaptchaV3ConfigsResponseSchema = z
  .object({
    configs: z
      .array(GoogleFirebaseAppcheckV1RecaptchaV3ConfigSchema)
      .exactOptional()
      .openapi({ description: 'RecaptchaV3Configs retrieved.' }),
  })
  .openapi({
    description: 'Response message for the BatchGetRecaptchaV3Configs method.',
    required: [],
  })
  .openapi('GoogleFirebaseAppcheckV1BatchGetRecaptchaV3ConfigsResponse')

const GoogleFirebaseAppcheckV1SafetyNetConfigSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The relative resource name of the SafetyNet configuration object, in the format: ``` projects/{project_number}/apps/{app_id}/safetyNetConfig ```',
      }),
    tokenTtl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Specifies the duration for which App Check tokens exchanged from SafetyNet tokens will be valid. If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive.',
      }),
  })
  .openapi({
    description:
      "An app's SafetyNet configuration object. This configuration controls certain properties of the `AppCheckToken` returned by ExchangeSafetyNetToken, such as its ttl. Note that your registered SHA-256 certificate fingerprints are used to validate tokens issued by SafetyNet; please register them via the Firebase Console or programmatically via the [Firebase Management Service](https://firebase.google.com/docs/projects/api/reference/rest/v11/projects.androidApps.sha/create).",
    required: [],
  })
  .openapi('GoogleFirebaseAppcheckV1SafetyNetConfig')

const GoogleFirebaseAppcheckV1BatchGetSafetyNetConfigsResponseSchema = z
  .object({
    configs: z
      .array(GoogleFirebaseAppcheckV1SafetyNetConfigSchema)
      .exactOptional()
      .openapi({ description: 'SafetyNetConfigs retrieved.' }),
  })
  .openapi({
    description: 'Response message for the BatchGetSafetyNetConfigs method.',
    required: [],
  })
  .openapi('GoogleFirebaseAppcheckV1BatchGetSafetyNetConfigsResponse')

const GoogleFirebaseAppcheckV1ServiceSchema = z
  .object({
    enforcementMode: z
      .enum(['OFF', 'UNENFORCED', 'ENFORCED'])
      .exactOptional()
      .openapi({ description: 'Required. The App Check enforcement mode for this service.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The relative resource name of the service configuration object, in the format: ``` projects/{project_number}/services/{service_id} ``` Note that the `service_id` element must be a supported service ID. Currently, the following service IDs are supported: * `firebasestorage.googleapis.com` (Cloud Storage for Firebase) * `firebasedatabase.googleapis.com` (Firebase Realtime Database) * `firestore.googleapis.com` (Cloud Firestore)',
      }),
  })
  .openapi({
    description: 'The enforcement configuration for a Firebase service supported by App Check.',
    required: [],
  })
  .openapi('GoogleFirebaseAppcheckV1Service')

const GoogleFirebaseAppcheckV1UpdateServiceRequestSchema = z
  .object({
    service: GoogleFirebaseAppcheckV1ServiceSchema.exactOptional().openapi({
      description:
        "Required. The Service to update. The Service's `name` field is used to identify the Service to be updated, in the format: ``` projects/{project_number}/services/{service_id} ``` Note that the `service_id` element must be a supported service ID. Currently, the following service IDs are supported: * `firebasestorage.googleapis.com` (Cloud Storage for Firebase) * `firebasedatabase.googleapis.com` (Firebase Realtime Database) * `firestore.googleapis.com` (Cloud Firestore)",
    }),
    updateMask: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. A comma-separated list of names of fields in the Service to update. Example: `enforcement_mode`.',
      }),
  })
  .openapi({
    description:
      'Request message for the UpdateService method as well as an individual update message for the BatchUpdateServices method.',
    required: [],
  })
  .openapi('GoogleFirebaseAppcheckV1UpdateServiceRequest')

const GoogleFirebaseAppcheckV1BatchUpdateServicesRequestSchema = z
  .object({
    requests: z
      .array(GoogleFirebaseAppcheckV1UpdateServiceRequestSchema)
      .exactOptional()
      .openapi({
        description:
          'Required. The request messages specifying the Services to update. A maximum of 100 objects can be updated in a batch.',
      }),
    updateMask: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. A comma-separated list of names of fields in the Services to update. Example: `display_name`. If the `update_mask` field is set in both this request and any of the UpdateServiceRequest messages, they must match or the entire batch fails and no updates will be committed.',
      }),
  })
  .openapi({ description: 'Request message for the BatchUpdateServices method.', required: [] })
  .openapi('GoogleFirebaseAppcheckV1BatchUpdateServicesRequest')

const GoogleFirebaseAppcheckV1BatchUpdateServicesResponseSchema = z
  .object({
    services: z
      .array(GoogleFirebaseAppcheckV1ServiceSchema)
      .exactOptional()
      .openapi({ description: 'Service objects after the updates have been applied.' }),
  })
  .openapi({ description: 'Response message for the BatchUpdateServices method.', required: [] })
  .openapi('GoogleFirebaseAppcheckV1BatchUpdateServicesResponse')

const GoogleFirebaseAppcheckV1DebugTokenSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. A human readable display name used to identify this debug token.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The relative resource name of the debug token, in the format: ``` projects/{project_number}/apps/{app_id}/debugTokens/{debug_token_id} ```',
      }),
    token: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Input only. Immutable. The secret token itself. Must be provided during creation, and must be a UUID4, case insensitive. This field is immutable once set, and cannot be provided during an UpdateDebugToken request. You can, however, delete this debug token using DeleteDebugToken to revoke it. For security reasons, this field will never be populated in any response.',
      }),
  })
  .openapi({
    description:
      'A *debug token* is a secret used during the development or integration testing of an app. It essentially allows the development or integration testing to bypass app attestation while still allowing App Check to enforce protection on supported production Firebase services.',
    required: [],
  })
  .openapi('GoogleFirebaseAppcheckV1DebugToken')

const GoogleFirebaseAppcheckV1ExchangeAppAttestAssertionRequestSchema = z
  .object({
    artifact: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The artifact returned by a previous call to ExchangeAppAttestAttestation.',
      }),
    assertion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The CBOR-encoded assertion returned by the client-side App Attest API.',
      }),
    challenge: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. A one-time challenge returned by an immediately prior call to GenerateAppAttestChallenge.',
      }),
  })
  .openapi({
    description: 'Request message for the ExchangeAppAttestAssertion method.',
    required: [],
  })
  .openapi('GoogleFirebaseAppcheckV1ExchangeAppAttestAssertionRequest')

const GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationRequestSchema = z
  .object({
    attestationStatement: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The App Attest statement returned by the client-side App Attest API. This is a base64url encoded CBOR object in the JSON response.',
      }),
    challenge: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. A one-time challenge returned by an immediately prior call to GenerateAppAttestChallenge.',
      }),
    keyId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The key ID generated by App Attest for the client app.' }),
  })
  .openapi({
    description: 'Request message for the ExchangeAppAttestAttestation method.',
    required: [],
  })
  .openapi('GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationRequest')

const GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponseSchema = z
  .object({
    appCheckToken: GoogleFirebaseAppcheckV1AppCheckTokenSchema.exactOptional().openapi({
      description: 'Encapsulates an App Check token.',
    }),
    artifact: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An artifact that can be used in future calls to ExchangeAppAttestAssertion.',
      }),
  })
  .openapi({
    description: 'Response message for the ExchangeAppAttestAttestation method.',
    required: [],
  })
  .openapi('GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse')

const GoogleFirebaseAppcheckV1ExchangeCustomTokenRequestSchema = z
  .object({
    customToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required. A custom token signed using your project's Admin SDK service account credentials.",
      }),
  })
  .openapi({ description: 'Request message for the ExchangeCustomToken method.', required: [] })
  .openapi('GoogleFirebaseAppcheckV1ExchangeCustomTokenRequest')

const GoogleFirebaseAppcheckV1ExchangeDebugTokenRequestSchema = z
  .object({
    debugToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. A debug token secret. This string must match a debug token secret previously created using CreateDebugToken.',
      }),
  })
  .openapi({ description: 'Request message for the ExchangeDebugToken method.', required: [] })
  .openapi('GoogleFirebaseAppcheckV1ExchangeDebugTokenRequest')

const GoogleFirebaseAppcheckV1ExchangeDeviceCheckTokenRequestSchema = z
  .object({
    deviceToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required. The `device_token` as returned by Apple's client-side [DeviceCheck API](https://developer.apple.com/documentation/devicecheck/dcdevice). This is the base64 encoded `Data` (Swift) or `NSData` (ObjC) object.",
      }),
  })
  .openapi({
    description: 'Request message for the ExchangeDeviceCheckToken method.',
    required: [],
  })
  .openapi('GoogleFirebaseAppcheckV1ExchangeDeviceCheckTokenRequest')

const GoogleFirebaseAppcheckV1ExchangePlayIntegrityTokenRequestSchema = z
  .object({
    playIntegrityToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The [integrity verdict response token from Play Integrity](https://developer.android.com/google/play/integrity/verdict#decrypt-verify) issued to your app.',
      }),
  })
  .openapi({
    description: 'Request message for the ExchangePlayIntegrityToken method.',
    required: [],
  })
  .openapi('GoogleFirebaseAppcheckV1ExchangePlayIntegrityTokenRequest')

const GoogleFirebaseAppcheckV1ExchangeRecaptchaEnterpriseTokenRequestSchema = z
  .object({
    recaptchaEnterpriseToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The reCAPTCHA token as returned by the [reCAPTCHA Enterprise JavaScript API](https://cloud.google.com/recaptcha-enterprise/docs/instrument-web-pages).',
      }),
  })
  .openapi({
    description: 'Request message for the ExchangeRecaptchaEnterpriseToken method.',
    required: [],
  })
  .openapi('GoogleFirebaseAppcheckV1ExchangeRecaptchaEnterpriseTokenRequest')

const GoogleFirebaseAppcheckV1ExchangeRecaptchaV3TokenRequestSchema = z
  .object({
    recaptchaV3Token: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The reCAPTCHA token as returned by the [reCAPTCHA v3 JavaScript API](https://developers.google.com/recaptcha/docs/v3).',
      }),
  })
  .openapi({
    description: 'Request message for the ExchangeRecaptchaV3Token method.',
    required: [],
  })
  .openapi('GoogleFirebaseAppcheckV1ExchangeRecaptchaV3TokenRequest')

const GoogleFirebaseAppcheckV1ExchangeSafetyNetTokenRequestSchema = z
  .object({
    safetyNetToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The [SafetyNet attestation response](https://developer.android.com/training/safetynet/attestation#request-attestation-step) issued to your app.',
      }),
  })
  .openapi({ description: 'Request message for the ExchangeSafetyNetToken method.', required: [] })
  .openapi('GoogleFirebaseAppcheckV1ExchangeSafetyNetTokenRequest')

const GoogleFirebaseAppcheckV1GenerateAppAttestChallengeRequestSchema = z
  .object({})
  .openapi({ description: 'Request message for the GenerateAppAttestChallenge method.' })
  .openapi('GoogleFirebaseAppcheckV1GenerateAppAttestChallengeRequest')

const GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponseSchema = z
  .object({
    challenge: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A one-time use challenge for the client to pass to the App Attest API.',
      }),
    ttl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The duration from the time this challenge is minted until its expiration. This field is intended to ease client-side token management, since the client may have clock skew, but is still able to accurately measure a duration.',
      }),
  })
  .openapi({
    description: 'Response message for the GenerateAppAttestChallenge method.',
    required: [],
  })
  .openapi('GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse')

const GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeRequestSchema = z
  .object({})
  .openapi({ description: 'Request message for the GeneratePlayIntegrityChallenge method.' })
  .openapi('GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeRequest')

const GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeResponseSchema = z
  .object({
    challenge: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A one-time use [challenge](https://developer.android.com/google/play/integrity/verdict#protect-against-replay-attacks) for the client to pass to the Play Integrity API.',
      }),
    ttl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The duration from the time this challenge is minted until its expiration. This field is intended to ease client-side token management, since the client may have clock skew, but is still able to accurately measure a duration.',
      }),
  })
  .openapi({
    description: 'Response message for the GeneratePlayIntegrityChallenge method.',
    required: [],
  })
  .openapi('GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeResponse')

const GoogleFirebaseAppcheckV1ListDebugTokensResponseSchema = z
  .object({
    debugTokens: z
      .array(GoogleFirebaseAppcheckV1DebugTokenSchema)
      .exactOptional()
      .openapi({ description: 'The DebugTokens retrieved.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If the result list is too large to fit in a single response, then a token is returned. If the string is empty or omitted, then this response is the last page of results. This token can be used in a subsequent call to ListDebugTokens to find the next group of DebugTokens. Page tokens are short-lived and should not be persisted.',
      }),
  })
  .openapi({ description: 'Response message for the ListDebugTokens method.', required: [] })
  .openapi('GoogleFirebaseAppcheckV1ListDebugTokensResponse')

const GoogleFirebaseAppcheckV1ListServicesResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If the result list is too large to fit in a single response, then a token is returned. If the string is empty or omitted, then this response is the last page of results. This token can be used in a subsequent call to ListServices to find the next group of Services. Page tokens are short-lived and should not be persisted.',
      }),
    services: z
      .array(GoogleFirebaseAppcheckV1ServiceSchema)
      .exactOptional()
      .openapi({ description: 'The Services retrieved.' }),
  })
  .openapi({ description: 'Response message for the ListServices method.', required: [] })
  .openapi('GoogleFirebaseAppcheckV1ListServicesResponse')

const GoogleFirebaseAppcheckV1PublicJwkSchema = z
  .object({
    alg: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'See [section 4.4 of RFC 7517](https://tools.ietf.org/html/rfc7517#section-4.4).',
      }),
    e: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'See [section 6.3.1.2 of RFC 7518](https://tools.ietf.org/html/rfc7518#section-6.3.1.2).',
      }),
    kid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'See [section 4.5 of RFC 7517](https://tools.ietf.org/html/rfc7517#section-4.5).',
      }),
    kty: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'See [section 4.1 of RFC 7517](https://tools.ietf.org/html/rfc7517#section-4.1).',
      }),
    n: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'See [section 6.3.1.1 of RFC 7518](https://tools.ietf.org/html/rfc7518#section-6.3.1.1).',
      }),
    use: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'See [section 4.2 of RFC 7517](https://tools.ietf.org/html/rfc7517#section-4.2).',
      }),
  })
  .openapi({
    description:
      'A JWK as specified by [section 4 of RFC 7517](https://tools.ietf.org/html/rfc7517#section-4) and [section 6.3.1 of RFC 7518](https://tools.ietf.org/html/rfc7518#section-6.3.1).',
    required: [],
  })
  .openapi('GoogleFirebaseAppcheckV1PublicJwk')

const GoogleFirebaseAppcheckV1PublicJwkSetSchema = z
  .object({
    keys: z
      .array(GoogleFirebaseAppcheckV1PublicJwkSchema)
      .exactOptional()
      .openapi({
        description:
          'The set of public keys. See [section 5.1 of RFC 7517](https://tools.ietf.org/html/rfc7517#section-5).',
      }),
  })
  .openapi({
    description:
      'The currently active set of public keys that can be used to verify App Check tokens. This object is a JWK set as specified by [section 5 of RFC 7517](https://tools.ietf.org/html/rfc7517#section-5). For security, the response **must not** be cached for longer than six hours.',
    required: [],
  })
  .openapi('GoogleFirebaseAppcheckV1PublicJwkSet')

const GoogleProtobufEmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('GoogleProtobufEmpty')

const XgafvParamsSchema = z
  .enum(['1', '2'])
  .exactOptional()
  .openapi({
    param: {
      description: 'V1 error format.',
      in: 'query',
      name: '$.xgafv',
      schema: { enum: ['1', '2'], type: 'string' },
      required: false,
    },
  })

const AccessTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth access token.',
      in: 'query',
      name: 'access_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const AltParamsSchema = z
  .enum(['json', 'media', 'proto'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Data format for response.',
      in: 'query',
      name: 'alt',
      schema: { enum: ['json', 'media', 'proto'], type: 'string' },
      required: false,
    },
  })

const CallbackParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'JSONP',
      in: 'query',
      name: 'callback',
      schema: { type: 'string' },
      required: false,
    },
  })

const FieldsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Selector specifying which fields to include in a partial response.',
      in: 'query',
      name: 'fields',
      schema: { type: 'string' },
      required: false,
    },
  })

const KeyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.',
      in: 'query',
      name: 'key',
      schema: { type: 'string' },
      required: false,
    },
  })

const OauthTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth 2.0 token for the current user.',
      in: 'query',
      name: 'oauth_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const PrettyPrintParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Returns response with indentations and line breaks.',
      in: 'query',
      name: 'prettyPrint',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const QuotaUserParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.',
      in: 'query',
      name: 'quotaUser',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadTypeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Legacy upload protocol for media (e.g. "media", "multipart").',
      in: 'query',
      name: 'uploadType',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadProtocolParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Upload protocol for media (e.g. "raw", "multipart").',
      in: 'query',
      name: 'upload_protocol',
      schema: { type: 'string' },
      required: false,
    },
  })

const Oauth2SecurityScheme = {
  description: 'Oauth 2.0 implicit authentication',
  flows: {
    implicit: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
        'https://www.googleapis.com/auth/firebase':
          'View and administer all your Firebase data and settings',
      },
    },
  },
  type: 'oauth2',
}

const Oauth2cSecurityScheme = {
  description: 'Oauth 2.0 authorizationCode authentication',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
        'https://www.googleapis.com/auth/firebase':
          'View and administer all your Firebase data and settings',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const postV1AppExchangeAppAttestAssertionRoute = createRoute({
  method: 'post',
  path: '/v1/{app}:exchangeAppAttestAssertion',
  tags: ['projects'],
  description:
    'Accepts an App Attest assertion and an artifact previously obtained from ExchangeAppAttestAttestation and verifies those with Apple. If valid, returns an AppCheckToken.',
  operationId: 'firebaseappcheck.projects.apps.exchangeAppAttestAssertion',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      app: z
        .string()
        .openapi({
          param: {
            description:
              "Required. The relative resource name of the iOS app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.",
            in: 'path',
            name: 'app',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: GoogleFirebaseAppcheckV1ExchangeAppAttestAssertionRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleFirebaseAppcheckV1AppCheckTokenSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/firebase'],
      Oauth2c: ['https://www.googleapis.com/auth/firebase'],
    },
  ],
})

export const postV1AppExchangeAppAttestAttestationRoute = createRoute({
  method: 'post',
  path: '/v1/{app}:exchangeAppAttestAttestation',
  tags: ['projects'],
  description:
    "Accepts an App Attest CBOR attestation and verifies it with Apple using your preconfigured team and bundle IDs. If valid, returns an attestation artifact that can later be exchanged for an AppCheckToken using ExchangeAppAttestAssertion. For convenience and performance, this method's response object will also contain an AppCheckToken (if the verification is successful).",
  operationId: 'firebaseappcheck.projects.apps.exchangeAppAttestAttestation',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      app: z
        .string()
        .openapi({
          param: {
            description:
              "Required. The relative resource name of the iOS app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.",
            in: 'path',
            name: 'app',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/firebase'],
      Oauth2c: ['https://www.googleapis.com/auth/firebase'],
    },
  ],
})

export const postV1AppExchangeCustomTokenRoute = createRoute({
  method: 'post',
  path: '/v1/{app}:exchangeCustomToken',
  tags: ['projects'],
  description:
    "Validates a custom token signed using your project's Admin SDK service account credentials. If valid, returns an AppCheckToken.",
  operationId: 'firebaseappcheck.projects.apps.exchangeCustomToken',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      app: z
        .string()
        .openapi({
          param: {
            description:
              "Required. The relative resource name of the app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.",
            in: 'path',
            name: 'app',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleFirebaseAppcheckV1ExchangeCustomTokenRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleFirebaseAppcheckV1AppCheckTokenSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/firebase'],
      Oauth2c: ['https://www.googleapis.com/auth/firebase'],
    },
  ],
})

export const postV1AppExchangeDebugTokenRoute = createRoute({
  method: 'post',
  path: '/v1/{app}:exchangeDebugToken',
  tags: ['projects'],
  description:
    'Validates a debug token secret that you have previously created using CreateDebugToken. If valid, returns an AppCheckToken. Note that a restrictive quota is enforced on this method to prevent accidental exposure of the app to abuse.',
  operationId: 'firebaseappcheck.projects.apps.exchangeDebugToken',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      app: z
        .string()
        .openapi({
          param: {
            description:
              "Required. The relative resource name of the app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.",
            in: 'path',
            name: 'app',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleFirebaseAppcheckV1ExchangeDebugTokenRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleFirebaseAppcheckV1AppCheckTokenSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/firebase'],
      Oauth2c: ['https://www.googleapis.com/auth/firebase'],
    },
  ],
})

export const postV1AppExchangeDeviceCheckTokenRoute = createRoute({
  method: 'post',
  path: '/v1/{app}:exchangeDeviceCheckToken',
  tags: ['projects'],
  description:
    'Accepts a [`device_token`](https://developer.apple.com/documentation/devicecheck/dcdevice) issued by DeviceCheck, and attempts to validate it with Apple. If valid, returns an AppCheckToken.',
  operationId: 'firebaseappcheck.projects.apps.exchangeDeviceCheckToken',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      app: z
        .string()
        .openapi({
          param: {
            description:
              "Required. The relative resource name of the iOS app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.",
            in: 'path',
            name: 'app',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: GoogleFirebaseAppcheckV1ExchangeDeviceCheckTokenRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleFirebaseAppcheckV1AppCheckTokenSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/firebase'],
      Oauth2c: ['https://www.googleapis.com/auth/firebase'],
    },
  ],
})

export const postV1AppExchangePlayIntegrityTokenRoute = createRoute({
  method: 'post',
  path: '/v1/{app}:exchangePlayIntegrityToken',
  tags: ['projects'],
  description:
    'Validates an [integrity verdict response token from Play Integrity](https://developer.android.com/google/play/integrity/verdict#decrypt-verify). If valid, returns an AppCheckToken.',
  operationId: 'firebaseappcheck.projects.apps.exchangePlayIntegrityToken',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      app: z
        .string()
        .openapi({
          param: {
            description:
              "Required. The relative resource name of the Android app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.",
            in: 'path',
            name: 'app',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: GoogleFirebaseAppcheckV1ExchangePlayIntegrityTokenRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleFirebaseAppcheckV1AppCheckTokenSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/firebase'],
      Oauth2c: ['https://www.googleapis.com/auth/firebase'],
    },
  ],
})

export const postV1AppExchangeRecaptchaEnterpriseTokenRoute = createRoute({
  method: 'post',
  path: '/v1/{app}:exchangeRecaptchaEnterpriseToken',
  tags: ['projects'],
  description:
    'Validates a [reCAPTCHA Enterprise response token](https://cloud.google.com/recaptcha-enterprise/docs/create-assessment#retrieve_token). If valid, returns an AppCheckToken.',
  operationId: 'firebaseappcheck.projects.apps.exchangeRecaptchaEnterpriseToken',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      app: z
        .string()
        .openapi({
          param: {
            description:
              "Required. The relative resource name of the web app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.",
            in: 'path',
            name: 'app',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: GoogleFirebaseAppcheckV1ExchangeRecaptchaEnterpriseTokenRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleFirebaseAppcheckV1AppCheckTokenSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/firebase'],
      Oauth2c: ['https://www.googleapis.com/auth/firebase'],
    },
  ],
})

export const postV1AppExchangeRecaptchaV3TokenRoute = createRoute({
  method: 'post',
  path: '/v1/{app}:exchangeRecaptchaV3Token',
  tags: ['projects'],
  description:
    'Validates a [reCAPTCHA v3 response token](https://developers.google.com/recaptcha/docs/v3). If valid, returns an AppCheckToken.',
  operationId: 'firebaseappcheck.projects.apps.exchangeRecaptchaV3Token',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      app: z
        .string()
        .openapi({
          param: {
            description:
              "Required. The relative resource name of the web app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.",
            in: 'path',
            name: 'app',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: GoogleFirebaseAppcheckV1ExchangeRecaptchaV3TokenRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleFirebaseAppcheckV1AppCheckTokenSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/firebase'],
      Oauth2c: ['https://www.googleapis.com/auth/firebase'],
    },
  ],
})

export const postV1AppExchangeSafetyNetTokenRoute = createRoute({
  method: 'post',
  path: '/v1/{app}:exchangeSafetyNetToken',
  tags: ['projects'],
  description:
    'Validates a [SafetyNet token](https://developer.android.com/training/safetynet/attestation#request-attestation-step). If valid, returns an AppCheckToken.',
  operationId: 'firebaseappcheck.projects.apps.exchangeSafetyNetToken',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      app: z
        .string()
        .openapi({
          param: {
            description:
              "Required. The relative resource name of the Android app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.",
            in: 'path',
            name: 'app',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleFirebaseAppcheckV1ExchangeSafetyNetTokenRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleFirebaseAppcheckV1AppCheckTokenSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/firebase'],
      Oauth2c: ['https://www.googleapis.com/auth/firebase'],
    },
  ],
})

export const postV1AppGenerateAppAttestChallengeRoute = createRoute({
  method: 'post',
  path: '/v1/{app}:generateAppAttestChallenge',
  tags: ['projects'],
  description:
    'Generates a challenge that protects the integrity of an immediately following call to ExchangeAppAttestAttestation or ExchangeAppAttestAssertion. A challenge should not be reused for multiple calls.',
  operationId: 'firebaseappcheck.projects.apps.generateAppAttestChallenge',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      app: z
        .string()
        .openapi({
          param: {
            description:
              "Required. The relative resource name of the iOS app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.",
            in: 'path',
            name: 'app',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: GoogleFirebaseAppcheckV1GenerateAppAttestChallengeRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/firebase'],
      Oauth2c: ['https://www.googleapis.com/auth/firebase'],
    },
  ],
})

export const postV1AppGeneratePlayIntegrityChallengeRoute = createRoute({
  method: 'post',
  path: '/v1/{app}:generatePlayIntegrityChallenge',
  tags: ['projects'],
  description:
    'Generates a challenge that protects the integrity of an immediately following integrity verdict request to the Play Integrity API. The next call to ExchangePlayIntegrityToken using the resulting integrity token will verify the presence and validity of the challenge. A challenge should not be reused for multiple calls.',
  operationId: 'firebaseappcheck.projects.apps.generatePlayIntegrityChallenge',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      app: z
        .string()
        .openapi({
          param: {
            description:
              "Required. The relative resource name of the app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.",
            in: 'path',
            name: 'app',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/firebase'],
      Oauth2c: ['https://www.googleapis.com/auth/firebase'],
    },
  ],
})

export const getV1NameRoute = createRoute({
  method: 'get',
  path: '/v1/{name}',
  tags: ['projects'],
  description: 'Gets the Service configuration for the specified service name.',
  operationId: 'firebaseappcheck.projects.services.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The relative resource name of the Service to retrieve, in the format: ``` projects/{project_number}/services/{service_id} ``` Note that the `service_id` element must be a supported service ID. Currently, the following service IDs are supported: * `firebasestorage.googleapis.com` (Cloud Storage for Firebase) * `firebasedatabase.googleapis.com` (Firebase Realtime Database) * `firestore.googleapis.com` (Cloud Firestore)',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleFirebaseAppcheckV1ServiceSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/firebase'],
      Oauth2c: ['https://www.googleapis.com/auth/firebase'],
    },
  ],
})

export const deleteV1NameRoute = createRoute({
  method: 'delete',
  path: '/v1/{name}',
  tags: ['projects'],
  description:
    'Deletes the specified DebugToken. A deleted debug token cannot be used to exchange for an App Check token. Use this method when you suspect the secret `token` has been compromised or when you no longer need the debug token.',
  operationId: 'firebaseappcheck.projects.apps.debugTokens.delete',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The relative resource name of the DebugToken to delete, in the format: ``` projects/{project_number}/apps/{app_id}/debugTokens/{debug_token_id} ```',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleProtobufEmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/firebase'],
      Oauth2c: ['https://www.googleapis.com/auth/firebase'],
    },
  ],
})

export const patchV1NameRoute = createRoute({
  method: 'patch',
  path: '/v1/{name}',
  tags: ['projects'],
  description: 'Updates the specified Service configuration.',
  operationId: 'firebaseappcheck.projects.services.patch',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. A comma-separated list of names of fields in the Service to update. Example: `enforcement_mode`.',
            in: 'query',
            name: 'updateMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The relative resource name of the service configuration object, in the format: ``` projects/{project_number}/services/{service_id} ``` Note that the `service_id` element must be a supported service ID. Currently, the following service IDs are supported: * `firebasestorage.googleapis.com` (Cloud Storage for Firebase) * `firebasedatabase.googleapis.com` (Firebase Realtime Database) * `firestore.googleapis.com` (Cloud Firestore)',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GoogleFirebaseAppcheckV1ServiceSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleFirebaseAppcheckV1ServiceSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/firebase'],
      Oauth2c: ['https://www.googleapis.com/auth/firebase'],
    },
  ],
})

export const getV1ParentAppsDashAppAttestConfigBatchGetRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/apps/-/appAttestConfig:batchGet',
  tags: ['projects'],
  description: 'Atomically gets the AppAttestConfigs for the specified list of apps.',
  operationId: 'firebaseappcheck.projects.apps.appAttestConfig.batchGet',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      names: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. The relative resource names of the AppAttestConfigs to retrieve, in the format ``` projects/{project_number}/apps/{app_id}/appAttestConfig ``` A maximum of 100 objects can be retrieved in a batch.',
            explode: true,
            in: 'query',
            name: 'names',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The parent project name shared by all AppAttestConfigs being retrieved, in the format ``` projects/{project_number} ``` The parent collection in the `name` field of any resource being retrieved must match this field, or the entire batch fails.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleFirebaseAppcheckV1BatchGetAppAttestConfigsResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/firebase'],
      Oauth2c: ['https://www.googleapis.com/auth/firebase'],
    },
  ],
})

export const getV1ParentAppsDashDeviceCheckConfigBatchGetRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/apps/-/deviceCheckConfig:batchGet',
  tags: ['projects'],
  description:
    'Atomically gets the DeviceCheckConfigs for the specified list of apps. For security reasons, the `private_key` field is never populated in the response.',
  operationId: 'firebaseappcheck.projects.apps.deviceCheckConfig.batchGet',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      names: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. The relative resource names of the DeviceCheckConfigs to retrieve, in the format ``` projects/{project_number}/apps/{app_id}/deviceCheckConfig ``` A maximum of 100 objects can be retrieved in a batch.',
            explode: true,
            in: 'query',
            name: 'names',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The parent project name shared by all DeviceCheckConfigs being retrieved, in the format ``` projects/{project_number} ``` The parent collection in the `name` field of any resource being retrieved must match this field, or the entire batch fails.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleFirebaseAppcheckV1BatchGetDeviceCheckConfigsResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/firebase'],
      Oauth2c: ['https://www.googleapis.com/auth/firebase'],
    },
  ],
})

export const getV1ParentAppsDashPlayIntegrityConfigBatchGetRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/apps/-/playIntegrityConfig:batchGet',
  tags: ['projects'],
  description: 'Atomically gets the PlayIntegrityConfigs for the specified list of apps.',
  operationId: 'firebaseappcheck.projects.apps.playIntegrityConfig.batchGet',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      names: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. The relative resource names of the PlayIntegrityConfigs to retrieve, in the format ``` projects/{project_number}/apps/{app_id}/playIntegrityConfig ``` A maximum of 100 objects can be retrieved in a batch.',
            explode: true,
            in: 'query',
            name: 'names',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The parent project name shared by all PlayIntegrityConfigs being retrieved, in the format ``` projects/{project_number} ``` The parent collection in the `name` field of any resource being retrieved must match this field, or the entire batch fails.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleFirebaseAppcheckV1BatchGetPlayIntegrityConfigsResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/firebase'],
      Oauth2c: ['https://www.googleapis.com/auth/firebase'],
    },
  ],
})

export const getV1ParentAppsDashRecaptchaEnterpriseConfigBatchGetRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/apps/-/recaptchaEnterpriseConfig:batchGet',
  tags: ['projects'],
  description: 'Atomically gets the RecaptchaEnterpriseConfigs for the specified list of apps.',
  operationId: 'firebaseappcheck.projects.apps.recaptchaEnterpriseConfig.batchGet',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      names: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. The relative resource names of the RecaptchaEnterpriseConfigs to retrieve, in the format: ``` projects/{project_number}/apps/{app_id}/recaptchaEnterpriseConfig ``` A maximum of 100 objects can be retrieved in a batch.',
            explode: true,
            in: 'query',
            name: 'names',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The parent project name shared by all RecaptchaEnterpriseConfigs being retrieved, in the format ``` projects/{project_number} ``` The parent collection in the `name` field of any resource being retrieved must match this field, or the entire batch fails.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleFirebaseAppcheckV1BatchGetRecaptchaEnterpriseConfigsResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/firebase'],
      Oauth2c: ['https://www.googleapis.com/auth/firebase'],
    },
  ],
})

export const getV1ParentAppsDashRecaptchaV3ConfigBatchGetRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/apps/-/recaptchaV3Config:batchGet',
  tags: ['projects'],
  description:
    'Atomically gets the RecaptchaV3Configs for the specified list of apps. For security reasons, the `site_secret` field is never populated in the response.',
  operationId: 'firebaseappcheck.projects.apps.recaptchaV3Config.batchGet',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      names: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. The relative resource names of the RecaptchaV3Configs to retrieve, in the format: ``` projects/{project_number}/apps/{app_id}/recaptchaV3Config ``` A maximum of 100 objects can be retrieved in a batch.',
            explode: true,
            in: 'query',
            name: 'names',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The parent project name shared by all RecaptchaV3Configs being retrieved, in the format ``` projects/{project_number} ``` The parent collection in the `name` field of any resource being retrieved must match this field, or the entire batch fails.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleFirebaseAppcheckV1BatchGetRecaptchaV3ConfigsResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/firebase'],
      Oauth2c: ['https://www.googleapis.com/auth/firebase'],
    },
  ],
})

export const getV1ParentAppsDashSafetyNetConfigBatchGetRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/apps/-/safetyNetConfig:batchGet',
  tags: ['projects'],
  description: 'Atomically gets the SafetyNetConfigs for the specified list of apps.',
  operationId: 'firebaseappcheck.projects.apps.safetyNetConfig.batchGet',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      names: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. The relative resource names of the SafetyNetConfigs to retrieve, in the format ``` projects/{project_number}/apps/{app_id}/safetyNetConfig ``` A maximum of 100 objects can be retrieved in a batch.',
            explode: true,
            in: 'query',
            name: 'names',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The parent project name shared by all SafetyNetConfigs being retrieved, in the format ``` projects/{project_number} ``` The parent collection in the `name` field of any resource being retrieved must match this field, or the entire batch fails.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleFirebaseAppcheckV1BatchGetSafetyNetConfigsResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/firebase'],
      Oauth2c: ['https://www.googleapis.com/auth/firebase'],
    },
  ],
})

export const getV1ParentDebugTokensRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/debugTokens',
  tags: ['projects'],
  description:
    'Lists all DebugTokens for the specified app. For security reasons, the `token` field is never populated in the response.',
  operationId: 'firebaseappcheck.projects.apps.debugTokens.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of DebugTokens to return in the response. Note that an app can have at most 20 debug tokens. The server may return fewer than this at its own discretion. If no value is specified (or too large a value is specified), the server will impose its own limit.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Token returned from a previous call to ListDebugTokens indicating where in the set of DebugTokens to resume listing. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListDebugTokens must match the call that provided the page token; if they do not match, the result is undefined.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The relative resource name of the parent app for which to list each associated DebugToken, in the format: ``` projects/{project_number}/apps/{app_id} ```',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleFirebaseAppcheckV1ListDebugTokensResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/firebase'],
      Oauth2c: ['https://www.googleapis.com/auth/firebase'],
    },
  ],
})

export const postV1ParentDebugTokensRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/debugTokens',
  tags: ['projects'],
  description:
    'Creates a new DebugToken for the specified app. For security reasons, after the creation operation completes, the `token` field cannot be updated or retrieved, but you can revoke the debug token using DeleteDebugToken. Each app can have a maximum of 20 debug tokens.',
  operationId: 'firebaseappcheck.projects.apps.debugTokens.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The relative resource name of the parent app in which the specified DebugToken will be created, in the format: ``` projects/{project_number}/apps/{app_id} ```',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GoogleFirebaseAppcheckV1DebugTokenSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleFirebaseAppcheckV1DebugTokenSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/firebase'],
      Oauth2c: ['https://www.googleapis.com/auth/firebase'],
    },
  ],
})

export const getV1ParentServicesRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/services',
  tags: ['projects'],
  description:
    'Lists all Service configurations for the specified project. Only Services which were explicitly configured using UpdateService or BatchUpdateServices will be returned.',
  operationId: 'firebaseappcheck.projects.services.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of Services to return in the response. Only explicitly configured services are returned. The server may return fewer than this at its own discretion. If no value is specified (or too large a value is specified), the server will impose its own limit.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Token returned from a previous call to ListServices indicating where in the set of Services to resume listing. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListServices must match the call that provided the page token; if they do not match, the result is undefined.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The relative resource name of the parent project for which to list each associated Service, in the format: ``` projects/{project_number} ```',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleFirebaseAppcheckV1ListServicesResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/firebase'],
      Oauth2c: ['https://www.googleapis.com/auth/firebase'],
    },
  ],
})

export const postV1ParentServicesBatchUpdateRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/services:batchUpdate',
  tags: ['projects'],
  description: 'Atomically updates the specified Service configurations.',
  operationId: 'firebaseappcheck.projects.services.batchUpdate',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The parent project name shared by all Service configurations being updated, in the format ``` projects/{project_number} ``` The parent collection in the `name` field of any resource being updated must match this field, or the entire batch fails.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleFirebaseAppcheckV1BatchUpdateServicesRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleFirebaseAppcheckV1BatchUpdateServicesResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/firebase'],
      Oauth2c: ['https://www.googleapis.com/auth/firebase'],
    },
  ],
})
