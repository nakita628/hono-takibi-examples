import { createRoute, z } from '@hono/zod-openapi'

const NullTime2Schema = z.iso
  .datetime({ offset: true })
  .openapi({ title: 'NullTime implements sql.NullTime functionality.' })
  .openapi('NullTime2')

const IdentityCredentialsLookupSecretCodeSchema = z
  .object({
    code: z.string().exactOptional().openapi({ description: 'A recovery code' }),
    used_at: NullTime2Schema.exactOptional(),
  })
  .openapi({
    description: 'Recovery codes can be used once and are invalidated after use.',
    title: 'RecoveryCode represents one recovery code associated with a lookup_secret credential.',
    required: [],
  })
  .openapi('IdentityCredentialsLookupSecretCode')

const AdminIdentityImportCredentialsLookupSecretConfigSchema = z
  .object({
    codes: z
      .array(IdentityCredentialsLookupSecretCodeSchema)
      .exactOptional()
      .openapi({
        description: 'Codes is a list of "lookup secret" codes configured for the user.',
      }),
  })
  .openapi({
    description: 'Create Identity and Import Lookup Secret Credentials Configuration',
    required: [],
  })
  .openapi('AdminIdentityImportCredentialsLookupSecretConfig')

const AdminIdentityImportCredentialsLookupSecretSchema = z
  .object({ config: AdminIdentityImportCredentialsLookupSecretConfigSchema.exactOptional() })
  .openapi({ description: 'Create Identity and Import Lookup Secret Credentials', required: [] })
  .openapi('AdminIdentityImportCredentialsLookupSecret')

const AuthenticatorTransportSchema = z
  .string()
  .openapi({
    description:
      "Authenticators may implement various transports for communicating with clients. This enumeration defines hints as to\nhow clients might communicate with a particular authenticator in order to obtain an assertion for a specific\ncredential. Note that these hints represent the WebAuthn Relying Party's best belief as to how an authenticator may\nbe reached. A Relying Party will typically learn of the supported transports for a public key credential via\ngetTransports().\n\nSpecification: §5.8.4. Authenticator Transport Enumeration (https://www.w3.org/TR/webauthn/#enumdef-authenticatortransport)",
    title: 'AuthenticatorTransport represents the IDL enum with the same name.',
  })
  .openapi('AuthenticatorTransport')

const CodeChannelSchema = z.string().openapi('CodeChannel')

const DefaultErrorSchema = z
  .any()
  .openapi({
    description:
      'From https://go.dev/wiki/CodeReviewComments#receiver-type:\n> Can function or methods, either concurrently or when called from this method, be mutating the receiver? A value type creates a copy of the receiver when the method is invoked, so outside updates will not be applied to this receiver. If changes must be visible in the original receiver, the receiver must be a pointer.\n> If the receiver is a struct, array or slice and any of its elements is a pointer to something that might be mutating,\n> prefer a pointer receiver, as it will make the intention clearer to the reader.\n> Don’t mix receiver types. Choose either pointers or struct types for all available methods.',
    title:
      'DefaultError is not safe to shallow copy because it contains\nfields which are not value types, e.g. maps.\nA shallow copy would inadvertently share these underlying fields,\nleading to incorrect behavior and data races in a concurrent context.\nConsequently, all methods take the type by pointer and not by value.',
  })
  .openapi('DefaultError')

const EnumeratedSchema = z
  .preprocess(
    (val) =>
      typeof val === 'number' && Number.isSafeInteger(val)
        ? BigInt(val)
        : typeof val === 'string' && /^-?\d+$/.test(val)
          ? BigInt(val)
          : val,
    z.int64(),
  )
  .openapi({
    type: 'integer',
    format: 'int64',
    title: 'An Enumerated is represented as a plain int.',
  })
  .openapi('Enumerated')

const DeviceAuthnAndroidRootOfTrustSchema = z
  .object({
    device_locked: z.boolean().exactOptional(),
    verified_boot_hash: z.array(z.int()).exactOptional(),
    verified_boot_key: z.array(z.int()).exactOptional(),
    verified_boot_state: EnumeratedSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeviceAuthnAndroidRootOfTrust')

const DeviceAuthnAndroidAuthorizationListSchema = z
  .object({
    active_date_time: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    algorithm: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    application_id: z.array(z.int()).exactOptional(),
    attestation_application_id: z.array(z.int()).exactOptional(),
    attestation_id_brand: z.array(z.int()).exactOptional(),
    attestation_id_device: z.array(z.int()).exactOptional(),
    attestation_id_imei: z.array(z.int()).exactOptional(),
    attestation_id_manufacturer: z.array(z.int()).exactOptional(),
    attestation_id_meid: z.array(z.int()).exactOptional(),
    attestation_id_model: z.array(z.int()).exactOptional(),
    attestation_id_product: z.array(z.int()).exactOptional(),
    attestation_id_serial: z.array(z.int()).exactOptional(),
    auth_timeout: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    boot_patch_level: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    creation_date_time: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    digest: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .exactOptional(),
    ec_curve: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    key_size: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    origin: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    origination_expire_date_time: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    os_patch_level: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    os_version: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    purpose: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .exactOptional(),
    root_of_trust: DeviceAuthnAndroidRootOfTrustSchema.exactOptional(),
    usage_expire_date_time: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    user_auth_type: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    vendor_patch_level: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({
    description:
      'Schema: https://source.android.com/docs/security/features/keystore/attestation#schema',
    title: 'AndroidAuthorizationList maps the ASN.1 tags to the fields defined in KeyMint 4.',
    required: [],
  })
  .openapi('DeviceAuthnAndroidAuthorizationList')

const DeviceAuthnAndroidKeyDescriptionSchema = z
  .object({
    attestation_security_level: EnumeratedSchema.exactOptional(),
    attestation_version: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    keymaster_security_level: EnumeratedSchema.exactOptional(),
    keymaster_version: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    software_enforced: DeviceAuthnAndroidAuthorizationListSchema.exactOptional(),
    tee_enforced: DeviceAuthnAndroidAuthorizationListSchema.exactOptional(),
  })
  .openapi({
    description:
      'Schema: https://source.android.com/docs/security/features/keystore/attestation#schema',
    title:
      "AndroidKeyDescription matches the ASN.1 sequence defined by Android.\nIt is stored in the leaf certificate's x509 extension.",
    required: [],
  })
  .openapi('DeviceAuthnAndroidKeyDescription')

const DeviceAuthnIOSAttStmtSchema = z
  .object({
    x5c: z
      .array(z.array(z.int()))
      .exactOptional()
      .openapi({
        description:
          'X5c is the leaf-first certificate chain encoded as base64(DER), per\nthe JOSE convention defined in RFC 7515 §4.1.6.',
      }),
  })
  .openapi({
    description:
      'Defined in https://developer.apple.com/documentation/devicecheck/validating-apps-that-connect-to-your-server#Verify-the-attestation .',
    title: 'IOSAttStmt is the attestation statement of an Apple App Attest attestation.',
    required: [],
  })
  .openapi('DeviceAuthnIOSAttStmt')

const DeviceAuthnIOSAttestationSchema = z
  .object({
    att_stmt: DeviceAuthnIOSAttStmtSchema.exactOptional(),
    auth_data: z.array(z.int()).exactOptional(),
    fmt: z.string().exactOptional(),
  })
  .openapi({
    description:
      'Defined in https://developer.apple.com/documentation/devicecheck/validating-apps-that-connect-to-your-server#Verify-the-attestation .',
    title: 'IOSAttestation is an Apple App Attest attestation.',
    required: [],
  })
  .openapi('DeviceAuthnIOSAttestation')

const DeviceAuthnAttestationSchema = z
  .object({
    android: DeviceAuthnAndroidKeyDescriptionSchema.exactOptional(),
    ios: DeviceAuthnIOSAttestationSchema.exactOptional(),
  })
  .openapi({
    description: "Exactly one of `android` or `ios` is set, matching the key's device_type.",
    title: 'Attestation holds the platform-specific attestation parsed at enrollment.',
    required: [],
  })
  .openapi('DeviceAuthnAttestation')

const DeviceTypeSchema = z
  .enum(['Android', 'iOS'])
  .openapi({
    description: '"Android" and "iOS" use different attestation and signature encodings.',
    title: 'DeviceType is the platform the key was enrolled on.',
    'x-enum-varnames': ['ANDROID', 'IOS'],
  })
  .openapi('DeviceType')

const PINConfigSchema = z
  .object({
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'When the pin_secret was first issued.' }),
    failed_attempts: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'uint64',
        description:
          'The number of consecutive wrong-PIN attempts so far; the key locks when\nit reaches the configured maximum (pin_max_attempts, default 5).',
      }),
    pin_secret: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The at-rest ciphertext of the pin_secret. It never leaves the server and\nis cleared once the key locks.',
        writeOnly: true,
      }),
    rotated_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'When the pin_secret was last rotated. Omitted if the secret was never\nrotated.',
      }),
  })
  .openapi({
    description:
      'The pin_secret field holds only the at-rest ciphertext; the plaintext\nexists transiently in server memory during verification and is invalidated\nonce the key locks.',
    title: 'PINConfig is the per-key PIN state.',
    required: [],
  })
  .openapi('PINConfig')

const KeyStateSchema = z
  .enum(['initial', 'confirmed', 'locked'])
  .openapi({
    description:
      'Only a "confirmed" key can be used to authenticate. A "locked" key was\ndisabled after too many wrong-PIN attempts; rotating its pin_secret unlocks\nit.',
    title: 'KeyState is the lifecycle state of an enrolled key.',
  })
  .openapi('KeyState')

const UserVerificationSchema = z
  .enum(['pin', 'platform', 'none'])
  .openapi({
    description:
      '"pin" means the holder proves knowledge of a PIN via pin_proof at login;\n"platform" means the device gates key use behind platform biometrics or an\nequivalent lock screen; "none" marks a possession-only key, usable as a\nsecond factor but never as the sole first factor. The empty value marks a\nlegacy key from before user verification existed; such keys are rejected at\nlogin and must be re-enrolled.',
    title: "UserVerification records how the key's holder is verified at use time.",
  })
  .openapi('UserVerification')

const DeviceAuthnKeySchema = z
  .object({
    attestation: DeviceAuthnAttestationSchema.exactOptional(),
    client_key_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The key's stable id, unique per identity. Submit it as the\n`client_key_id` when logging in with the key, deleting it, or rotating\nits pin_secret.\n\nThe device can also compute the id without reading it back from the\nserver: it is the lowercase-hex SHA-256 of `public_key` (the key's\nPKIX, ASN.1 DER encoding). Keys enrolled before the server derived the\nid keep their original client-chosen value, so prefer reading this\nfield over recomputing it for older keys.",
      }),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'When the key was enrolled. Only used for troubleshooting and UI.' }),
    device_name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A human-readable name for the device, helping the user tell this key\napart from others.',
      }),
    device_type: DeviceTypeSchema.exactOptional(),
    pin: PINConfigSchema.exactOptional(),
    public_key: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The device's public key (an elliptic-curve key on P-224, P-256, P-384,\nor P-521 in version 1) in PKIX, ASN.1 DER (SubjectPublicKeyInfo) form,\nbase64-encoded. Signatures are verified against this key.",
      }),
    relaxed_attestation_expires_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          "Set only when the key's attestation chain was accepted under relaxed\nrules (software roots, expired certificates, software security level)\nrather than strict hardware attestation. Such keys are refused at login\nafter this time, or immediately once relaxed attestation is turned off.\nAbsent for hardware-attested keys that pass strict validation.",
      }),
    state: KeyStateSchema.exactOptional(),
    user_verification: UserVerificationSchema.exactOptional(),
    version: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'The cryptography version of the key. Version 1 uses ECDSA with SHA-256\non an elliptic curve (P-224, P-256, P-384, or P-521); further versions\nare reserved for future signature suites.',
      }),
  })
  .openapi({
    description:
      "Represents a hardware-backed signing key enrolled from a mobile device.\nThe private key resides inside the device and never exists on the server.\n\nTo list the identity's enrolled keys, fetch a settings flow: each key's\nremove button (a `ui.nodes` entry named `deviceauthn_remove` in group\n`deviceauthn`) carries the key, with its PIN state redacted, in the node\nlabel's `context`.",
    title: 'An enrolled device authentication (DeviceAuthn) key.',
    required: [],
  })
  .openapi('DeviceAuthnKey')

const DurationSchema = z
  .preprocess(
    (val) =>
      typeof val === 'number' && Number.isSafeInteger(val)
        ? BigInt(val)
        : typeof val === 'string' && /^-?\d+$/.test(val)
          ? BigInt(val)
          : val,
    z.int64(),
  )
  .openapi({
    type: 'integer',
    format: 'int64',
    description:
      'A Duration represents the elapsed time between two instants\nas an int64 nanosecond count. The representation limits the\nlargest representable duration to approximately 290 years.',
  })
  .openapi('Duration')

const IDSchema = z
  .preprocess(
    (val) =>
      typeof val === 'number' && Number.isSafeInteger(val)
        ? BigInt(val)
        : typeof val === 'string' && /^-?\d+$/.test(val)
          ? BigInt(val)
          : val,
    z.int64(),
  )
  .openapi({ type: 'integer', format: 'int64' })
  .openapi('ID')

const JSONRawMessageSchema = z
  .object({})
  .openapi({
    title:
      'JSONRawMessage represents a json.RawMessage that works well with JSON, SQL, and Swagger.',
  })
  .openapi('JSONRawMessage')

const NullBoolSchema = z.boolean().nullable().openapi('NullBool')

const NullIntSchema = z.int().nullable().openapi('NullInt')

const NullStringSchema = z.string().nullable().openapi('NullString')

const NullTimeSchema = z.iso.datetime({ offset: true }).nullable().openapi('NullTime')

const NullUUIDSchema = z.string().nullable().openapi('NullUUID')

const OAuth2ClientSchema = z
  .object({
    access_token_strategy: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'OAuth 2.0 Access Token Strategy  AccessTokenStrategy is the strategy used to generate access tokens. Valid options are `jwt` and `opaque`. `jwt` is a bad idea, see https://www.ory.sh/docs/hydra/advanced#json-web-tokens Setting the stragegy here overrides the global setting in `strategies.access_token`.',
      }),
    allowed_cors_origins: z.array(z.string()).exactOptional(),
    audience: z.array(z.string()).exactOptional(),
    authorization_code_grant_access_token_lifespan: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Specify a time duration in milliseconds, seconds, minutes, hours.',
      }),
    authorization_code_grant_id_token_lifespan: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Specify a time duration in milliseconds, seconds, minutes, hours.',
      }),
    authorization_code_grant_refresh_token_lifespan: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Specify a time duration in milliseconds, seconds, minutes, hours.',
      }),
    backchannel_logout_session_required: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'OpenID Connect Back-Channel Logout Session Required  Boolean value specifying whether the RP requires that a sid (session ID) Claim be included in the Logout Token to identify the RP session with the OP when the backchannel_logout_uri is used. If omitted, the default value is false.',
      }),
    backchannel_logout_uri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'OpenID Connect Back-Channel Logout URI  RP URL that will cause the RP to log itself out when sent a Logout Token by the OP.',
      }),
    client_credentials_grant_access_token_lifespan: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Specify a time duration in milliseconds, seconds, minutes, hours.',
      }),
    client_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'OAuth 2.0 Client ID  The ID is immutable. If no ID is provided, a UUID4 will be generated.',
      }),
    client_name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'OAuth 2.0 Client Name  The human-readable name of the client to be presented to the end-user during authorization.',
      }),
    client_secret: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'OAuth 2.0 Client Secret  The secret will be included in the create request as cleartext, and then never again. The secret is kept in hashed format and is not recoverable once lost.',
      }),
    client_secret_expires_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'OAuth 2.0 Client Secret Expires At  The field is currently not supported and its value is always 0.',
      }),
    client_uri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'OAuth 2.0 Client URI  ClientURI is a URL string of a web page providing information about the client. If present, the server SHOULD display this URL to the end-user in a clickable fashion.',
      }),
    contacts: z.array(z.string()).exactOptional(),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          "OAuth 2.0 Client Creation Date  CreatedAt returns the timestamp of the client's creation.",
      }),
    frontchannel_logout_session_required: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'OpenID Connect Front-Channel Logout Session Required  Boolean value specifying whether the RP requires that iss (issuer) and sid (session ID) query parameters be included to identify the RP session with the OP when the frontchannel_logout_uri is used. If omitted, the default value is false.',
      }),
    frontchannel_logout_uri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'OpenID Connect Front-Channel Logout URI  RP URL that will cause the RP to log itself out when rendered in an iframe by the OP. An iss (issuer) query parameter and a sid (session ID) query parameter MAY be included by the OP to enable the RP to validate the request and to determine which of the potentially multiple sessions is to be logged out; if either is included, both MUST be.',
      }),
    grant_types: z.array(z.string()).exactOptional(),
    implicit_grant_access_token_lifespan: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Specify a time duration in milliseconds, seconds, minutes, hours.',
      }),
    implicit_grant_id_token_lifespan: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Specify a time duration in milliseconds, seconds, minutes, hours.',
      }),
    jwks: z
      .any()
      .exactOptional()
      .openapi({
        description:
          "OAuth 2.0 Client JSON Web Key Set  Client's JSON Web Key Set [JWK] document, passed by value. The semantics of the jwks parameter are the same as the jwks_uri parameter, other than that the JWK Set is passed by value, rather than by reference. This parameter is intended only to be used by Clients that, for some reason, are unable to use the jwks_uri parameter, for instance, by native applications that might not have a location to host the contents of the JWK Set. If a Client can use jwks_uri, it MUST NOT use jwks. One significant downside of jwks is that it does not enable key rotation (which jwks_uri does, as described in Section 10 of OpenID Connect Core 1.0 [OpenID.Core]). The jwks_uri and jwks parameters MUST NOT be used together.",
      }),
    jwks_uri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "OAuth 2.0 Client JSON Web Key Set URL  URL for the Client's JSON Web Key Set [JWK] document. If the Client signs requests to the Server, it contains the signing key(s) the Server uses to validate signatures from the Client. The JWK Set MAY also contain the Client's encryption keys(s), which are used by the Server to encrypt responses to the Client. When both signing and encryption keys are made available, a use (Key Use) parameter value is REQUIRED for all keys in the referenced JWK Set to indicate each key's intended usage. Although some algorithms allow the same key to be used for both signatures and encryption, doing so is NOT RECOMMENDED, as it is less secure. The JWK x5c parameter MAY be used to provide X.509 representations of keys provided. When used, the bare key values MUST still be present and MUST match those in the certificate.",
      }),
    jwt_bearer_grant_access_token_lifespan: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Specify a time duration in milliseconds, seconds, minutes, hours.',
      }),
    logo_uri: z
      .string()
      .exactOptional()
      .openapi({
        description: "OAuth 2.0 Client Logo URI  A URL string referencing the client's logo.",
      }),
    metadata: z.any().exactOptional(),
    owner: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'OAuth 2.0 Client Owner  Owner is a string identifying the owner of the OAuth 2.0 Client.',
      }),
    policy_uri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'OAuth 2.0 Client Policy URI  PolicyURI is a URL string that points to a human-readable privacy policy document that describes how the deployment organization collects, uses, retains, and discloses personal data.',
      }),
    post_logout_redirect_uris: z.array(z.string()).exactOptional(),
    redirect_uris: z.array(z.string()).exactOptional(),
    refresh_token_grant_access_token_lifespan: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Specify a time duration in milliseconds, seconds, minutes, hours.',
      }),
    refresh_token_grant_id_token_lifespan: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Specify a time duration in milliseconds, seconds, minutes, hours.',
      }),
    refresh_token_grant_refresh_token_lifespan: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Specify a time duration in milliseconds, seconds, minutes, hours.',
      }),
    registration_access_token: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'OpenID Connect Dynamic Client Registration Access Token  RegistrationAccessToken can be used to update, get, or delete the OAuth2 Client. It is sent when creating a client using Dynamic Client Registration.',
      }),
    registration_client_uri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'OpenID Connect Dynamic Client Registration URL  RegistrationClientURI is the URL used to update, get, or delete the OAuth2 Client.',
      }),
    request_object_signing_alg: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'OpenID Connect Request Object Signing Algorithm  JWS [JWS] alg algorithm [JWA] that MUST be used for signing Request Objects sent to the OP. All Request Objects from this Client MUST be rejected, if not signed with this algorithm.',
      }),
    request_uris: z.array(z.string()).exactOptional(),
    response_types: z.array(z.string()).exactOptional(),
    scope: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'OAuth 2.0 Client Scope  Scope is a string containing a space-separated list of scope values (as described in Section 3.3 of OAuth 2.0 [RFC6749]) that the client can use when requesting access tokens.',
      }),
    sector_identifier_uri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'OpenID Connect Sector Identifier URI  URL using the https scheme to be used in calculating Pseudonymous Identifiers by the OP. The URL references a file with a single JSON array of redirect_uri values.',
      }),
    skip_consent: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'SkipConsent skips the consent screen for this client. This field can only be set from the admin API.',
      }),
    skip_logout_consent: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'SkipLogoutConsent skips the logout consent screen for this client. This field can only be set from the admin API.',
      }),
    subject_type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'OpenID Connect Subject Type  The `subject_types_supported` Discovery parameter contains a list of the supported subject_type values for this server. Valid types include `pairwise` and `public`.',
      }),
    token_endpoint_auth_method: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'OAuth 2.0 Token Endpoint Authentication Method  Requested Client Authentication method for the Token Endpoint. The options are:  `client_secret_basic`: (default) Send `client_id` and `client_secret` as `application/x-www-form-urlencoded` encoded in the HTTP Authorization header. `client_secret_post`: Send `client_id` and `client_secret` as `application/x-www-form-urlencoded` in the HTTP body. `private_key_jwt`: Use JSON Web Tokens to authenticate the client. `none`: Used for public clients (native apps, mobile apps) which can not have secrets.',
      }),
    token_endpoint_auth_signing_alg: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'OAuth 2.0 Token Endpoint Signing Algorithm  Requested Client Authentication signing algorithm for the Token Endpoint.',
      }),
    tos_uri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'OAuth 2.0 Client Terms of Service URI  A URL string pointing to a human-readable terms of service document for the client that describes a contractual relationship between the end-user and the client that the end-user accepts when authorizing the client.',
      }),
    updated_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'OAuth 2.0 Client Last Update Date  UpdatedAt returns the timestamp of the last update.',
      }),
    userinfo_signed_response_alg: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'OpenID Connect Request Userinfo Signed Response Algorithm  JWS alg algorithm [JWA] REQUIRED for signing UserInfo Responses. If this is specified, the response will be JWT [JWT] serialized, and signed using JWS. The default, if omitted, is for the UserInfo Response to return the Claims as a UTF-8 encoded JSON object using the application/json content-type.',
      }),
  })
  .openapi({
    title:
      'OAuth2Client OAuth 2.0 Clients are used to perform OAuth 2.0 and OpenID Connect flows. Usually, OAuth 2.0 clients are generated for applications which want to consume your OAuth 2.0 or OpenID Connect capabilities.',
    required: [],
  })
  .openapi('OAuth2Client')

const OAuth2ConsentRequestOpenIDConnectContextSchema = z
  .object({
    acr_values: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'ACRValues is the Authentication AuthorizationContext Class Reference requested in the OAuth 2.0 Authorization request. It is a parameter defined by OpenID Connect and expresses which level of authentication (e.g. 2FA) is required.  OpenID Connect defines it as follows: > Requested Authentication AuthorizationContext Class Reference values. Space-separated string that specifies the acr values that the Authorization Server is being requested to use for processing this Authentication Request, with the values appearing in order of preference. The Authentication AuthorizationContext Class satisfied by the authentication performed is returned as the acr Claim Value, as specified in Section 2. The acr Claim is requested as a Voluntary Claim by this parameter.',
      }),
    display: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Display is a string value that specifies how the Authorization Server displays the authentication and consent user interface pages to the End-User. The defined values are: page: The Authorization Server SHOULD display the authentication and consent UI consistent with a full User Agent page view. If the display parameter is not specified, this is the default display mode. popup: The Authorization Server SHOULD display the authentication and consent UI consistent with a popup User Agent window. The popup User Agent window should be of an appropriate size for a login-focused dialog and should not obscure the entire window that it is popping up over. touch: The Authorization Server SHOULD display the authentication and consent UI consistent with a device that leverages a touch interface. wap: The Authorization Server SHOULD display the authentication and consent UI consistent with a \\"feature phone\\" type display.  The Authorization Server MAY also attempt to detect the capabilities of the User Agent and present an appropriate display.',
      }),
    id_token_hint_claims: z
      .record(z.string(), z.any())
      .exactOptional()
      .openapi({
        description:
          "IDTokenHintClaims are the claims of the ID Token previously issued by the Authorization Server being passed as a hint about the End-User's current or past authenticated session with the Client.",
      }),
    login_hint: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'LoginHint hints about the login identifier the End-User might use to log in (if necessary). This hint can be used by an RP if it first asks the End-User for their e-mail address (or other identifier) and then wants to pass that value as a hint to the discovered authorization service. This value MAY also be a phone number in the format specified for the phone_number Claim. The use of this parameter is optional.',
      }),
    ui_locales: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'UILocales is the End-User\'id preferred languages and scripts for the user interface, represented as a space-separated list of BCP47 [RFC5646] language tag values, ordered by preference. For instance, the value \\"fr-CA fr en\\" represents a preference for French as spoken in Canada, then French (without a region designation), followed by English (without a region designation). An error SHOULD NOT result if some or all of the requested locales are not supported by the OpenID Provider.',
      }),
  })
  .openapi({
    description:
      'OAuth2ConsentRequestOpenIDConnectContext struct for OAuth2ConsentRequestOpenIDConnectContext',
    required: [],
  })
  .openapi('OAuth2ConsentRequestOpenIDConnectContext')

const OAuth2LoginChallengeParamsSchema = z.object({}).openapi('OAuth2LoginChallengeParams')

const OAuth2LoginRequestSchema = z
  .object({
    challenge: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ID is the identifier (\\"login challenge\\") of the login request. It is used to identify the session.',
      }),
    client: OAuth2ClientSchema.exactOptional(),
    oidc_context: OAuth2ConsentRequestOpenIDConnectContextSchema.exactOptional(),
    request_url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'RequestURL is the original OAuth 2.0 Authorization URL requested by the OAuth 2.0 client. It is the URL which initiates the OAuth 2.0 Authorization Code or OAuth 2.0 Implicit flow. This URL is typically not needed, but might come in handy if you want to deal with additional request parameters.',
      }),
    requested_access_token_audience: z.array(z.string()).exactOptional(),
    requested_scope: z.array(z.string()).exactOptional(),
    session_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'SessionID is the login session ID. If the user-agent reuses a login session (via cookie / remember flag) this ID will remain the same. If the user-agent did not have an existing authentication session (e.g. remember is false) this will be a new random value. This value is used as the \\"sid\\" parameter in the ID Token and in OIDC Front-/Back- channel logout. It\'s value can generally be used to associate consecutive login requests by a certain user.',
      }),
    skip: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Skip, if true, implies that the client has requested the same scopes from the same user previously. If true, you can skip asking the user to grant the requested scopes, and simply forward the user to the redirect URL.  This feature allows you to update / set session information.',
      }),
    subject: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Subject is the user ID of the end-user that authenticated. Now, that end user needs to grant or deny the scope requested by the OAuth 2.0 client. If this value is set and `skip` is true, you MUST include this subject type when accepting the login request, or the request will fail.',
      }),
  })
  .openapi({ description: 'OAuth2LoginRequest struct for OAuth2LoginRequest', required: [] })
  .openapi('OAuth2LoginRequest')

const ProviderSchema = z
  .object({
    client_id: z
      .string()
      .exactOptional()
      .openapi({ description: "The RP's client identifier, issued by the IdP." }),
    config_url: z
      .string()
      .exactOptional()
      .openapi({ description: 'A full path of the IdP config file.' }),
    domain_hint: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'By specifying one of domain_hints values provided by the accounts endpoints,\nthe FedCM dialog selectively shows the specified account.',
      }),
    fields: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Array of strings that specifies the user information ("name", " email",\n"picture") that RP needs IdP to share with them.\n\nNote: Field API is supported by Chrome 132 and later.',
      }),
    login_hint: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'By specifying one of login_hints values provided by the accounts endpoints,\nthe FedCM dialog selectively shows the specified account.',
      }),
    nonce: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A random string to ensure the response is issued for this specific request.\nPrevents replay attacks.',
      }),
    parameters: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Custom object that allows to specify additional key-value parameters:\nscope: A string value containing additional permissions that RP needs to\nrequest, for example " drive.readonly calendar.readonly"\nnonce: A random string to ensure the response is issued for this specific\nrequest. Prevents replay attacks.\n\nOther custom key-value parameters.\n\nNote: parameters is supported from Chrome 132.',
      }),
  })
  .openapi({ required: [] })
  .openapi('Provider')

const TimeSchema = z.iso.datetime({ offset: true }).openapi('Time')

const UUIDSchema = z.string().openapi('UUID')

const UpdateFedcmFlowBodySchema = z
  .object({
    csrf_token: z.string().openapi({ description: 'CSRFToken is the anti-CSRF token.' }),
    nonce: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Nonce is the nonce that was used in the `navigator.credentials.get` call. If\nspecified, it must match the `nonce` claim in the token.',
      }),
    token: z
      .string()
      .openapi({ description: 'Token contains the result of `navigator.credentials.get`.' }),
    transient_payload: z
      .object({})
      .exactOptional()
      .openapi({ description: 'Transient data to pass along to any webhooks.' }),
  })
  .openapi({ required: ['token', 'csrf_token'] })
  .openapi('UpdateFedcmFlowBody')

const AuthenticatorAssuranceLevelSchema = z
  .enum(['aal0', 'aal1', 'aal2', 'aal3'])
  .openapi({
    description:
      'The authenticator assurance level can be one of "aal1", "aal2", or "aal3". A higher number means that it is harder\nfor an attacker to compromise the account.\n\nGenerally, "aal1" implies that one authentication factor was used while AAL2 implies that two factors (e.g.\npassword + TOTP) have been used.\n\nTo learn more about these levels please head over to: https://www.ory.com/kratos/docs/concepts/credentials',
    title: 'Authenticator Assurance Level (AAL)',
  })
  .openapi('AuthenticatorAssuranceLevel')

const IdentityPatchResponseSchema = z
  .object({
    action: z
      .enum(['create', 'error'])
      .exactOptional()
      .openapi({
        description:
          'The action for this specific patch\ncreate ActionCreate  Create this identity.\nerror ActionError  Error indicates that the patch failed.',
        'x-go-enum-desc':
          'create ActionCreate  Create this identity.\nerror ActionError  Error indicates that the patch failed.',
      }),
    error: DefaultErrorSchema.exactOptional(),
    identity: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'The identity ID payload of this patch' }),
    patch_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'The ID of this patch response, if an ID was specified in the patch.',
      }),
  })
  .openapi({ description: 'Response for a single identity patch', required: [] })
  .openapi('IdentityPatchResponse')

const BatchPatchIdentitiesResponseSchema = z
  .object({
    identities: z
      .array(IdentityPatchResponseSchema)
      .exactOptional()
      .openapi({ description: 'The patch responses for the individual identities.' }),
  })
  .openapi({ description: 'Patch identities response', required: [] })
  .openapi('BatchPatchIdentitiesResponse')

const ConsistencyRequestParametersSchema = z
  .object({
    consistency: z
      .enum(['', 'strong', 'eventual'])
      .exactOptional()
      .openapi({
        description:
          'Read Consistency Level (preview)\n\nThe read consistency level determines the consistency guarantee for reads:\n\nstrong (slow): The read is guaranteed to return the most recent data committed at the start of the read.\neventual (very fast): The result will return data that is about 4.8 seconds old.\n\nThe default consistency guarantee can be changed in the Ory Network Console or using the Ory CLI with\n`ory patch project --replace \'/previews/default_read_consistency_level="strong"\'`.\n\nSetting the default consistency level to `eventual` may cause regressions in the future as we add consistency\ncontrols to more APIs. Currently, the following APIs will be affected by this setting:\n\n`GET /admin/identities`\n\nThis feature is in preview and only available in Ory Network.\n ConsistencyLevelUnset  ConsistencyLevelUnset is the unset / default consistency level.\nstrong ConsistencyLevelStrong  ConsistencyLevelStrong is the strong consistency level.\neventual ConsistencyLevelEventual  ConsistencyLevelEventual is the eventual consistency level using follower read timestamps.',
        'x-go-enum-desc':
          ' ConsistencyLevelUnset  ConsistencyLevelUnset is the unset / default consistency level.\nstrong ConsistencyLevelStrong  ConsistencyLevelStrong is the strong consistency level.\neventual ConsistencyLevelEventual  ConsistencyLevelEventual is the eventual consistency level using follower read timestamps.',
      }),
  })
  .openapi({ description: 'Control API consistency guarantees', required: [] })
  .openapi('ConsistencyRequestParameters')

const ContinueWithVerificationUiFlowSchema = z
  .object({
    id: z.uuid().openapi({ description: 'The ID of the verification flow' }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The URL of the verification flow\n\nIf this value is set, redirect the user's browser to this URL. This value is typically unset for native clients / API flows.",
      }),
    verifiable_address: z
      .string()
      .openapi({ description: 'The address that should be verified in this flow' }),
  })
  .openapi({ required: ['id', 'verifiable_address'] })
  .openapi('ContinueWithVerificationUiFlow')

const ContinueWithVerificationUiSchema = z
  .object({
    action: z
      .literal('show_verification_ui')
      .openapi({
        description:
          'Action will always be `show_verification_ui`\nshow_verification_ui ContinueWithActionShowVerificationUIString',
        'x-go-enum-desc': 'show_verification_ui ContinueWithActionShowVerificationUIString',
      }),
    flow: ContinueWithVerificationUiFlowSchema,
  })
  .openapi({
    description: 'Indicates, that the UI flow could be continued by showing a verification ui',
    required: ['action', 'flow'],
  })
  .openapi('ContinueWithVerificationUi')

const ContinueWithSetOrySessionTokenSchema = z
  .object({
    action: z
      .literal('set_ory_session_token')
      .openapi({
        description:
          'Action will always be `set_ory_session_token`\nset_ory_session_token ContinueWithActionSetOrySessionTokenString',
        'x-go-enum-desc': 'set_ory_session_token ContinueWithActionSetOrySessionTokenString',
      }),
    ory_session_token: z.string().openapi({ description: 'Token is the token of the session' }),
  })
  .openapi({
    description:
      'Indicates that a session was issued, and the application should use this token for authenticated requests',
    required: ['action', 'ory_session_token'],
  })
  .openapi('ContinueWithSetOrySessionToken')

const ContinueWithSettingsUiFlowSchema = z
  .object({
    id: z.uuid().openapi({ description: 'The ID of the settings flow' }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The URL of the settings flow\n\nIf this value is set, redirect the user's browser to this URL. This value is typically unset for native clients / API flows.",
      }),
  })
  .openapi({ required: ['id'] })
  .openapi('ContinueWithSettingsUiFlow')

const ContinueWithSettingsUiSchema = z
  .object({
    action: z
      .literal('show_settings_ui')
      .openapi({
        description:
          'Action will always be `show_settings_ui`\nshow_settings_ui ContinueWithActionShowSettingsUIString',
        'x-go-enum-desc': 'show_settings_ui ContinueWithActionShowSettingsUIString',
      }),
    flow: ContinueWithSettingsUiFlowSchema,
  })
  .openapi({
    description: 'Indicates, that the UI flow could be continued by showing a settings ui',
    required: ['action', 'flow'],
  })
  .openapi('ContinueWithSettingsUi')

const ContinueWithRecoveryUiFlowSchema = z
  .object({
    id: z.uuid().openapi({ description: 'The ID of the recovery flow' }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The URL of the recovery flow\n\nIf this value is set, redirect the user's browser to this URL. This value is typically unset for native clients / API flows.",
      }),
  })
  .openapi({ required: ['id'] })
  .openapi('ContinueWithRecoveryUiFlow')

const ContinueWithRecoveryUiSchema = z
  .object({
    action: z
      .literal('show_recovery_ui')
      .openapi({
        description:
          'Action will always be `show_recovery_ui`\nshow_recovery_ui ContinueWithActionShowRecoveryUIString',
        'x-go-enum-desc': 'show_recovery_ui ContinueWithActionShowRecoveryUIString',
      }),
    flow: ContinueWithRecoveryUiFlowSchema,
  })
  .openapi({
    description: 'Indicates, that the UI flow could be continued by showing a recovery ui',
    required: ['action', 'flow'],
  })
  .openapi('ContinueWithRecoveryUi')

const ContinueWithRedirectBrowserToSchema = z
  .object({
    action: z
      .literal('redirect_browser_to')
      .openapi({
        description:
          'Action will always be `redirect_browser_to`\nredirect_browser_to ContinueWithActionRedirectBrowserToString',
        'x-go-enum-desc': 'redirect_browser_to ContinueWithActionRedirectBrowserToString',
      }),
    redirect_browser_to: z.string().openapi({ description: 'The URL to redirect the browser to' }),
  })
  .openapi({
    description: 'Indicates, that the UI flow could be continued by showing a recovery ui',
    required: ['action', 'redirect_browser_to'],
  })
  .openapi('ContinueWithRedirectBrowserTo')

const ContinueWithDeviceAuthnPinEntryUiDataSchema = z
  .object({
    ciphertext: z
      .string()
      .openapi({ description: 'The base64-encoded HPKE ciphertext of the sealed pin_secret.' }),
    enc: z
      .string()
      .openapi({
        description:
          'The base64-encoded HPKE encapsulated key (the `enc` output of the seal\noperation).',
      }),
  })
  .openapi({
    description:
      'Contains the encapsulated key and the sealed ciphertext that the device\nopens with the X25519 transport private key it generated for this\nenrollment or rotation. Open it with HPKE (RFC 9180) using the suite\nDHKEM(X25519, HKDF-SHA256), HKDF-SHA256, AES-128-GCM, the ASCII info\nstring "ory/deviceauthn/pin-secret/v1", and the key\'s client_key_id (its\nASCII hex form) as the AAD.',
    required: ['enc', 'ciphertext'],
    title: 'The one-time HPKE-sealed pin_secret material',
  })
  .openapi('ContinueWithDeviceAuthnPinEntryUiData')

const ContinueWithDeviceAuthnPinEntryUiSchema = z
  .object({
    action: z
      .literal('show_pin_entry_ui')
      .openapi({
        description:
          'Action will always be `show_pin_entry_ui`\nshow_pin_entry_ui ContinueWithActionShowPINEntryUIString',
        'x-go-enum-desc': 'show_pin_entry_ui ContinueWithActionShowPINEntryUIString',
      }),
    data: ContinueWithDeviceAuthnPinEntryUiDataSchema.openapi({
      description:
        "The one-time HPKE-sealed pin_secret material the device opens to bind the user's PIN after a PIN-protected DeviceAuthn enrollment or secret rotation.",
    }),
  })
  .openapi({
    description:
      "Returned after a PIN-protected DeviceAuthn enrollment or secret rotation.\nIt carries the one-time HPKE-sealed pin_secret, which the device opens with\nthe transport private key it generated for this enrollment and binds to the\nuser's PIN. The plaintext secret never leaves the device; the server only\never stores its at-rest ciphertext.\n\nThe enrolled key's client_key_id is not included: it is the SHA-256 fingerprint\nof the device's own public key, which the device derives locally. Non-PIN keys\nneed no client action at all and therefore produce no continue_with.",
    required: ['action', 'data'],
    title: 'Instructs the client to show its PIN entry UI',
  })
  .openapi('ContinueWithDeviceAuthnPinEntryUi')

const ContinueWithSchema = z
  .discriminatedUnion('action', [
    ContinueWithVerificationUiSchema,
    ContinueWithSetOrySessionTokenSchema,
    ContinueWithSettingsUiSchema,
    ContinueWithRecoveryUiSchema,
    ContinueWithRedirectBrowserToSchema,
    ContinueWithDeviceAuthnPinEntryUiSchema,
  ])
  .openapi({
    discriminator: {
      mapping: {
        redirect_browser_to: '#/components/schemas/continueWithRedirectBrowserTo',
        set_ory_session_token: '#/components/schemas/continueWithSetOrySessionToken',
        show_pin_entry_ui: '#/components/schemas/continueWithDeviceAuthnPinEntryUi',
        show_recovery_ui: '#/components/schemas/continueWithRecoveryUi',
        show_settings_ui: '#/components/schemas/continueWithSettingsUi',
        show_verification_ui: '#/components/schemas/continueWithVerificationUi',
      },
      propertyName: 'action',
    },
  })
  .openapi('ContinueWith')

const CourierMessageStatusSchema = z
  .enum(['queued', 'sent', 'processing', 'abandoned'])
  .openapi({ description: "A Message's Status" })
  .openapi('CourierMessageStatus')

const CourierMessageTypeSchema = z
  .enum(['email', 'phone'])
  .openapi({ description: 'It can either be `email` or `phone`', title: "A Message's Type" })
  .openapi('CourierMessageType')

const CreateFedcmFlowResponseSchema = z
  .object({
    csrf_token: z.string().exactOptional(),
    providers: z.array(ProviderSchema).exactOptional(),
  })
  .openapi({
    description: 'Contains a list of all available FedCM providers.',
    title: 'CreateFedcmFlowResponse',
    required: [],
  })
  .openapi('CreateFedcmFlowResponse')

const IdentityWithCredentialsOidcConfigProviderSchema = z
  .object({
    organization: NullUUIDSchema.exactOptional(),
    provider: z
      .string()
      .openapi({
        description:
          'The OpenID Connect provider to link the subject to. Usually something like `google` or `github`.',
      }),
    subject: z
      .string()
      .openapi({
        description:
          'The subject (`sub`) of the OpenID Connect connection. Usually the `sub` field of the ID Token.',
      }),
    use_auto_link: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If set, this credential allows the user to sign in using the OpenID Connect provider without setting the subject first.',
      }),
  })
  .openapi({
    description: 'Create Identity and Import Social Sign In Credentials Configuration',
    required: ['subject', 'provider'],
  })
  .openapi('IdentityWithCredentialsOidcConfigProvider')

const IdentityWithCredentialsOidcConfigSchema = z
  .object({
    providers: z
      .array(IdentityWithCredentialsOidcConfigProviderSchema)
      .exactOptional()
      .openapi({ description: 'A list of OpenID Connect Providers' }),
  })
  .openapi({ required: [] })
  .openapi('IdentityWithCredentialsOidcConfig')

const IdentityWithCredentialsOidcSchema = z
  .object({ config: IdentityWithCredentialsOidcConfigSchema.exactOptional() })
  .openapi({ description: 'Create Identity and Import Social Sign In Credentials', required: [] })
  .openapi('IdentityWithCredentialsOidc')

const IdentityCredentialsWebAuthnAttestationSchema = z
  .object({
    authenticator_data: z.array(z.int()).exactOptional(),
    client_dataJSON: z.array(z.int()).exactOptional(),
    client_data_hash: z.array(z.int()).exactOptional(),
    object: z.array(z.int()).exactOptional(),
    public_key_algorithm: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({
    title:
      'CredentialWebAuthnAttestation contains information about attestation of a webauthn credential.',
    required: [],
  })
  .openapi('IdentityCredentialsWebAuthnAttestation')

const IdentityCredentialsWebAuthnAuthenticatorSchema = z
  .object({
    aaguid: z.array(z.int()).exactOptional(),
    clone_warning: z.boolean().exactOptional(),
    sign_count: z.uint32().exactOptional(),
  })
  .openapi({
    title:
      'AuthenticatorWebAuthn contains information about the authenticator of a webauthn credential.',
    required: [],
  })
  .openapi('IdentityCredentialsWebAuthnAuthenticator')

const IdentityCredentialsWebAuthnFlagsSchema = z
  .object({
    backup_eligible: z.boolean().exactOptional(),
    backup_state: z.boolean().exactOptional(),
    user_present: z.boolean().exactOptional(),
    user_verified: z.boolean().exactOptional(),
  })
  .openapi({
    title: 'CredentialWebAuthnFlags contains information about the flags of a webauthn credential.',
    required: [],
  })
  .openapi('IdentityCredentialsWebAuthnFlags')

const IdentityCredentialsWebAuthnSchema = z
  .object({
    added_at: z.iso.datetime({ offset: true }).exactOptional(),
    attestation: IdentityCredentialsWebAuthnAttestationSchema.exactOptional(),
    attestation_type: z.string().exactOptional(),
    authenticator: IdentityCredentialsWebAuthnAuthenticatorSchema.exactOptional(),
    display_name: z.string().exactOptional(),
    flags: IdentityCredentialsWebAuthnFlagsSchema.exactOptional(),
    id: z.array(z.int()).exactOptional(),
    is_passwordless: z.boolean().exactOptional(),
    public_key: z.array(z.int()).exactOptional(),
    transport: z.array(AuthenticatorTransportSchema).exactOptional(),
  })
  .openapi({
    title: 'CredentialWebAuthn contains information about a webauthn credential.',
    required: [],
  })
  .openapi('IdentityCredentialsWebAuthn')

const IdentityCredentialsWebAuthnListSchema = z
  .array(IdentityCredentialsWebAuthnSchema)
  .openapi('IdentityCredentialsWebAuthnList')

const IdentityWithCredentialsPasskeyConfigSchema = z
  .object({
    credentials: IdentityCredentialsWebAuthnListSchema.exactOptional(),
    user_handle: z
      .array(z.int())
      .exactOptional()
      .openapi({ description: 'UserHandle is the user handle of the webauthn credential.' }),
  })
  .openapi({
    description: 'Create Identity and Import Passkey Credentials Configuration',
    required: [],
  })
  .openapi('IdentityWithCredentialsPasskeyConfig')

const IdentityWithCredentialsPasskeySchema = z
  .object({ config: IdentityWithCredentialsPasskeyConfigSchema.exactOptional() })
  .openapi({ description: 'Create Identity and Import Passkey Credentials', required: [] })
  .openapi('IdentityWithCredentialsPasskey')

const IdentityWithCredentialsPasswordConfigSchema = z
  .object({
    hashed_password: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The hashed password in [PHC format](https://www.ory.com/docs/kratos/manage-identities/import-user-accounts-identities#hashed-passwords)',
      }),
    password: z
      .string()
      .exactOptional()
      .openapi({ description: 'The password in plain text if no hash is available.' }),
    use_password_migration_hook: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If set to true, the password will be migrated using the password migration hook.',
      }),
  })
  .openapi({
    description: 'Create Identity and Import Password Credentials Configuration',
    required: [],
  })
  .openapi('IdentityWithCredentialsPasswordConfig')

const IdentityWithCredentialsPasswordSchema = z
  .object({ config: IdentityWithCredentialsPasswordConfigSchema.exactOptional() })
  .openapi({ description: 'Create Identity and Import Password Credentials', required: [] })
  .openapi('IdentityWithCredentialsPassword')

const IdentityWithCredentialsSamlConfigProviderSchema = z
  .object({
    organization: NullUUIDSchema.exactOptional(),
    provider: z.string().openapi({ description: 'The SAML provider to link the subject to.' }),
    subject: z
      .string()
      .openapi({
        description:
          'The unique subject of the SAML connection. This value must be immutable at the source.',
      }),
  })
  .openapi({ description: 'Payload of specific SAML provider', required: ['subject', 'provider'] })
  .openapi('IdentityWithCredentialsSamlConfigProvider')

const IdentityWithCredentialsSamlConfigSchema = z
  .object({
    providers: z
      .array(IdentityWithCredentialsSamlConfigProviderSchema)
      .exactOptional()
      .openapi({ description: 'A list of SAML Providers' }),
  })
  .openapi({ description: 'Payload of SAML providers', required: [] })
  .openapi('IdentityWithCredentialsSamlConfig')

const IdentityWithCredentialsSamlSchema = z
  .object({ config: IdentityWithCredentialsSamlConfigSchema.exactOptional() })
  .openapi({ description: 'Payload to import SAML credentials', required: [] })
  .openapi('IdentityWithCredentialsSaml')

const IdentityWithCredentialsTotpConfigSchema = z
  .object({
    totp_url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'TOTPURL is the TOTP URL\n\nFor more details see: https://github.com/google/google-authenticator/wiki/Key-Uri-Format',
      }),
  })
  .openapi({
    description: 'Create Identity and Import TOTP 2FA Credentials Configuration',
    required: [],
  })
  .openapi('IdentityWithCredentialsTotpConfig')

const IdentityWithCredentialsTotpSchema = z
  .object({ config: IdentityWithCredentialsTotpConfigSchema.exactOptional() })
  .openapi({ description: 'Create Identity and Import TOTP 2FA Credentials', required: [] })
  .openapi('IdentityWithCredentialsTotp')

const IdentityWithCredentialsWebAuthnConfigSchema = z
  .object({
    credentials: IdentityCredentialsWebAuthnListSchema.exactOptional(),
    user_handle: z
      .array(z.int())
      .exactOptional()
      .openapi({ description: 'UserHandle is the user handle of the webauthn credential.' }),
  })
  .openapi({
    description: 'Create Identity and Import WebAuthn Credentials Configuration',
    required: [],
  })
  .openapi('IdentityWithCredentialsWebAuthnConfig')

const IdentityWithCredentialsWebAuthnSchema = z
  .object({ config: IdentityWithCredentialsWebAuthnConfigSchema.exactOptional() })
  .openapi({ description: 'Create Identity and Import WebAuthn Credentials', required: [] })
  .openapi('IdentityWithCredentialsWebAuthn')

const IdentityWithCredentialsSchema = z
  .object({
    lookup_secret: AdminIdentityImportCredentialsLookupSecretSchema.exactOptional(),
    oidc: IdentityWithCredentialsOidcSchema.exactOptional(),
    passkey: IdentityWithCredentialsPasskeySchema.exactOptional(),
    password: IdentityWithCredentialsPasswordSchema.exactOptional(),
    saml: IdentityWithCredentialsSamlSchema.exactOptional(),
    totp: IdentityWithCredentialsTotpSchema.exactOptional(),
    webauthn: IdentityWithCredentialsWebAuthnSchema.exactOptional(),
  })
  .openapi({ description: 'Create Identity and Import Credentials', required: [] })
  .openapi('IdentityWithCredentials')

const RecoveryIdentityAddressSchema = z
  .object({
    break_glass_for_organization: NullUUIDSchema.exactOptional(),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'CreatedAt is a helper struct field for gobuffalo.pop.' }),
    id: z.uuid().exactOptional(),
    updated_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'UpdatedAt is a helper struct field for gobuffalo.pop.' }),
    value: z.string(),
    via: z.string(),
  })
  .openapi({ required: ['value', 'via'] })
  .openapi('RecoveryIdentityAddress')

const IdentityVerifiableAddressStatusSchema = z
  .string()
  .openapi({
    description:
      'VerifiableAddressStatus must not exceed 16 characters as that is the limitation in the SQL Schema',
  })
  .openapi('IdentityVerifiableAddressStatus')

const VerifiableIdentityAddressSchema = z
  .object({
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'When this entry was created', example: '2014-01-01T23:28:56.782Z' }),
    id: z.uuid().exactOptional().openapi({ description: 'The ID' }),
    status: IdentityVerifiableAddressStatusSchema,
    updated_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'When this entry was last updated',
        example: '2014-01-01T23:28:56.782Z',
      }),
    value: z.string().openapi({ description: 'The address value\n\nexample foo@user.com' }),
    verified: z
      .boolean()
      .openapi({
        description: 'Indicates if the address has already been verified',
        example: true,
      }),
    verified_at: NullTime2Schema.exactOptional(),
    via: z.enum(['email', 'sms']).openapi({ description: 'The delivery method', example: 'email' }),
  })
  .openapi({
    description: "VerifiableAddress is an identity's verifiable address",
    required: ['value', 'verified', 'via', 'status'],
  })
  .openapi('VerifiableIdentityAddress')

const CreateIdentityBodySchema = z
  .object({
    credentials: IdentityWithCredentialsSchema.exactOptional(),
    external_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ExternalID is an optional external ID of the identity. This is used to link\nthe identity to an external system. If set, the external ID must be unique\nacross all identities.',
      }),
    metadata_admin: z
      .any()
      .exactOptional()
      .openapi({
        description:
          'Store metadata about the user which is only accessible through admin APIs such as `GET /admin/identities/<id>`.',
      }),
    metadata_public: z
      .any()
      .exactOptional()
      .openapi({
        description:
          'Store metadata about the identity which the identity itself can see when calling for example the\nsession endpoint. Do not store sensitive information (e.g. credit score) about the identity in this field.',
      }),
    organization_id: NullUUIDSchema.exactOptional(),
    recovery_addresses: z
      .array(RecoveryIdentityAddressSchema)
      .exactOptional()
      .openapi({
        description:
          'RecoveryAddresses contains all the addresses that can be used to recover an identity.\n\nUse this structure to import recovery addresses for an identity. Please keep in mind\nthat the address needs to be represented in the Identity Schema or this field will be overwritten\non the next identity update.',
      }),
    region: z
      .enum(['eu-central', 'asia-northeast', 'us-east', 'us-west', 'eu', 'asia', 'us', 'global'])
      .exactOptional()
      .openapi({
        description:
          'Region is the Ory Network region this identity will be created in.\nOptional; defaults to the project home region if omitted. Only effective\non the Ory Network.\neu-central EUCentral\nasia-northeast AsiaNorthEast\nus-east USEast\nus-west USWest\neu EU\nasia Asia\nus US\nglobal Global',
        'x-go-enum-desc':
          'eu-central EUCentral\nasia-northeast AsiaNorthEast\nus-east USEast\nus-west USWest\neu EU\nasia Asia\nus US\nglobal Global',
      }),
    schema_id: z
      .string()
      .openapi({
        description:
          "SchemaID is the ID of the JSON Schema to be used for validating the identity's traits.",
      }),
    state: z
      .enum(['active', 'inactive'])
      .exactOptional()
      .openapi({
        description: "State is the identity's state.\nactive StateActive\ninactive StateInactive",
        'x-go-enum-desc': 'active StateActive\ninactive StateInactive',
      }),
    traits: z
      .object({})
      .openapi({
        description:
          "Traits represent an identity's traits. The identity is able to create, modify, and delete traits\nin a self-service manner. The input will always be validated against the JSON Schema defined\nin `schema_url`.",
      }),
    verifiable_addresses: z
      .array(VerifiableIdentityAddressSchema)
      .exactOptional()
      .openapi({
        description:
          'VerifiableAddresses contains all the addresses that can be verified by the user.\n\nUse this structure to import verified addresses for an identity. Please keep in mind\nthat the address needs to be represented in the Identity Schema or this field will be overwritten\non the next identity update.',
      }),
  })
  .openapi({ description: 'Create Identity Body', required: ['schema_id', 'traits'] })
  .openapi('CreateIdentityBody')

const SelfServiceFlowTypeSchema = z
  .string()
  .openapi({
    description: 'The flow type can either be `api` or `browser`.',
    title: 'Type is the flow type.',
  })
  .openapi('SelfServiceFlowType')

const CreateRecoveryCodeForIdentityBodySchema = z
  .object({
    expires_in: z
      .string()
      .regex(/^([0-9]+([.][0-9]+)?(ns|us|µs|ms|s|m|h))+$/)
      .exactOptional()
      .openapi({
        description:
          'Code Expires In\n\nThe recovery code will expire after that amount of time has passed. Defaults to the configuration value of\n`selfservice.methods.code.config.lifespan`.',
      }),
    flow_type: SelfServiceFlowTypeSchema.exactOptional(),
    identity_id: z
      .uuid()
      .openapi({ description: "Identity to Recover\n\nThe identity's ID you wish to recover." }),
  })
  .openapi({
    description: 'Create Recovery Code for Identity Request Body',
    required: ['identity_id'],
  })
  .openapi('CreateRecoveryCodeForIdentityBody')

const CreateRecoveryLinkForIdentityBodySchema = z
  .object({
    expires_in: z
      .string()
      .regex(/^([0-9]+([.][0-9]+)?(ns|us|µs|ms|s|m|h))+$/)
      .exactOptional()
      .openapi({
        description:
          'Link Expires In\n\nThe recovery link will expire after that amount of time has passed. Defaults to the configuration value of\n`selfservice.methods.code.config.lifespan`.',
      }),
    identity_id: z
      .uuid()
      .openapi({ description: "Identity to Recover\n\nThe identity's ID you wish to recover." }),
  })
  .openapi({
    description: 'Create Recovery Link for Identity Request Body',
    required: ['identity_id'],
  })
  .openapi('CreateRecoveryLinkForIdentityBody')

const CreateTestLoginFlowBodySchema = z
  .object({
    provider_id: z
      .string()
      .max(255)
      .openapi({
        description:
          'ID of the OIDC provider to test. Must match a provider configured on\nthe project that serves this request.',
      }),
  })
  .openapi({
    required: ['provider_id'],
    title: 'Request body for creating a test OIDC login flow.',
  })
  .openapi('CreateTestLoginFlowBody')

const DeleteMySessionsCountSchema = z
  .object({
    count: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The number of sessions that were revoked.',
      }),
  })
  .openapi({ description: 'Deleted Session Count', required: [] })
  .openapi('DeleteMySessionsCount')

const GenericErrorSchema = z
  .object({
    code: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: 'The status code', example: 404 }),
    debug: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Debug information\n\nThis field is often not exposed to protect against leaking\nsensitive information.',
        example: 'SQL field "foo" is not a bool.',
      }),
    details: z.strictObject({}).exactOptional().openapi({ description: 'Further error details' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The error ID\n\nUseful when trying to identify various errors in application logic.',
      }),
    message: z
      .string()
      .openapi({
        description: "Error message\n\nThe error's message.",
        example: 'The resource could not be found',
      }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A human-readable reason for the error',
        example: 'User with ID 1234 does not exist.',
      }),
    request: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The request ID\n\nThe request ID is often exposed internally in order to trace\nerrors across service architectures. This is often a UUID.',
        example: 'd7ef54b1-ec15-46e6-bccb-524b82c035e6',
      }),
    status: z
      .string()
      .exactOptional()
      .openapi({ description: 'The status description', example: 'Not Found' }),
  })
  .openapi({ required: ['message'] })
  .openapi('GenericError')

const ErrorAuthenticatorAssuranceLevelNotSatisfiedSchema = z
  .object({
    error: GenericErrorSchema.exactOptional(),
    redirect_browser_to: z
      .string()
      .exactOptional()
      .openapi({ description: 'Points to where to redirect the user to next.' }),
  })
  .openapi({
    title: 'Is returned when an active session was found but the requested AAL is not satisfied.',
    required: [],
  })
  .openapi('ErrorAuthenticatorAssuranceLevelNotSatisfied')

const ErrorGenericSchema = z
  .object({ error: GenericErrorSchema })
  .openapi({
    description: 'The standard Ory JSON API error format.',
    required: ['error'],
    title: 'JSON API Error Response',
  })
  .openapi('ErrorGeneric')

const ErrorBrowserLocationChangeRequiredSchema = z
  .object({
    error: ErrorGenericSchema.exactOptional(),
    redirect_browser_to: z
      .string()
      .exactOptional()
      .openapi({ description: 'Points to where to redirect the user to next.' }),
  })
  .openapi({
    title: 'Is sent when a flow requires a browser to change its location.',
    required: [],
  })
  .openapi('ErrorBrowserLocationChangeRequired')

const ErrorFlowReplacedSchema = z
  .object({
    error: GenericErrorSchema.exactOptional(),
    use_flow_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'The flow ID that should be used for the new flow as it contains the correct messages.',
      }),
  })
  .openapi({
    description: 'Is sent when a flow is replaced by a different flow of the same class',
    required: [],
  })
  .openapi('ErrorFlowReplaced')

const FlowErrorSchema = z
  .object({
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'CreatedAt is a helper struct field for gobuffalo.pop.' }),
    error: z.object({}).exactOptional(),
    id: z.uuid().openapi({ description: 'ID of the error container.' }),
    updated_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'UpdatedAt is a helper struct field for gobuffalo.pop.' }),
  })
  .openapi({ required: ['id'] })
  .openapi('FlowError')

const HealthNotReadyStatusSchema = z
  .object({
    errors: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description: 'Errors contains a list of errors that caused the not ready status.',
      }),
  })
  .openapi({ title: 'The not ready status of the service.', required: [] })
  .openapi('HealthNotReadyStatus')

const HealthStatusSchema = z
  .object({
    status: z.string().exactOptional().openapi({ description: 'Status always contains "ok".' }),
  })
  .openapi({ title: 'The health status of the service.', required: [] })
  .openapi('HealthStatus')

const IdentityCredentialsSchema = z
  .object({
    config: JSONRawMessageSchema.exactOptional(),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'CreatedAt is a helper struct field for gobuffalo.pop.' }),
    identifiers: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Identifiers represent a list of unique identifiers this credential type matches.',
      }),
    type: z
      .enum([
        'password',
        'oidc',
        'totp',
        'lookup_secret',
        'webauthn',
        'code',
        'passkey',
        'profile',
        'saml',
        'deviceauthn',
        'identifier_first',
        'link_recovery',
        'code_recovery',
      ])
      .exactOptional()
      .openapi({
        description:
          'Type discriminates between different types of credentials.\npassword CredentialsTypePassword\noidc CredentialsTypeOIDC\ntotp CredentialsTypeTOTP\nlookup_secret CredentialsTypeLookup\nwebauthn CredentialsTypeWebAuthn\ncode CredentialsTypeCodeAuth\npasskey CredentialsTypePasskey\nprofile CredentialsTypeProfile\nsaml CredentialsTypeSAML\ndeviceauthn CredentialsTypeDeviceAuthn\nidentifier_first CredentialsTypeIdentifierFirst\nlink_recovery CredentialsTypeRecoveryLink  CredentialsTypeRecoveryLink is a special credential type linked to the link strategy (recovery flow).  It is not used within the credentials object itself.\ncode_recovery CredentialsTypeRecoveryCode',
        'x-go-enum-desc':
          'password CredentialsTypePassword\noidc CredentialsTypeOIDC\ntotp CredentialsTypeTOTP\nlookup_secret CredentialsTypeLookup\nwebauthn CredentialsTypeWebAuthn\ncode CredentialsTypeCodeAuth\npasskey CredentialsTypePasskey\nprofile CredentialsTypeProfile\nsaml CredentialsTypeSAML\ndeviceauthn CredentialsTypeDeviceAuthn\nidentifier_first CredentialsTypeIdentifierFirst\nlink_recovery CredentialsTypeRecoveryLink  CredentialsTypeRecoveryLink is a special credential type linked to the link strategy (recovery flow).  It is not used within the credentials object itself.\ncode_recovery CredentialsTypeRecoveryCode',
      }),
    updated_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'UpdatedAt is a helper struct field for gobuffalo.pop.' }),
    version: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'Version refers to the version of the credential. Useful when changing the config schema.',
      }),
  })
  .openapi({ description: 'Credentials represents a specific credential type', required: [] })
  .openapi('IdentityCredentials')

const NullJsonRawMessageSchema = z
  .any()
  .nullable()
  .openapi({
    description:
      'NullJSONRawMessage represents a json.RawMessage that works well with JSON, SQL, and Swagger and is NULLable-',
  })
  .openapi('NullJsonRawMessage')

const IdentityTraitsSchema = z
  .any()
  .openapi({
    description:
      "Traits represent an identity's traits. The identity is able to create, modify, and delete traits\nin a self-service manner. The input will always be validated against the JSON Schema defined\nin `schema_url`.",
  })
  .openapi('IdentityTraits')

const IdentitySchema = z
  .object({
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'CreatedAt is a helper struct field for gobuffalo.pop.' }),
    credentials: z
      .record(z.string(), IdentityCredentialsSchema)
      .exactOptional()
      .openapi({
        description:
          'Credentials represents all credentials that can be used for authenticating this identity.',
      }),
    external_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ExternalID is an optional external ID of the identity. This is used to link\nthe identity to an external system. If set, the external ID must be unique\nacross all identities.',
      }),
    id: z
      .uuid()
      .openapi({
        description:
          "ID is the identity's unique identifier.\n\nThe Identity ID can not be changed and can not be chosen. This ensures future\ncompatibility and optimization for distributed stores such as CockroachDB.",
      }),
    metadata_admin: NullJsonRawMessageSchema.exactOptional(),
    metadata_public: NullJsonRawMessageSchema.exactOptional(),
    organization_id: NullUUIDSchema.exactOptional(),
    recovery_addresses: z
      .array(RecoveryIdentityAddressSchema)
      .exactOptional()
      .openapi({
        description:
          'RecoveryAddresses contains all the addresses that can be used to recover an identity.',
        'x-omitempty': true,
      }),
    region: z
      .enum(['eu-central', 'asia-northeast', 'us-east', 'us-west', 'eu', 'asia', 'us', 'global'])
      .exactOptional()
      .openapi({
        description:
          'Region is the Ory Network region this identity is homed in. Set by\nthe multi-region persister; empty on OSS and single-region deployments.\neu-central EUCentral\nasia-northeast AsiaNorthEast\nus-east USEast\nus-west USWest\neu EU\nasia Asia\nus US\nglobal Global',
        'x-go-enum-desc':
          'eu-central EUCentral\nasia-northeast AsiaNorthEast\nus-east USEast\nus-west USWest\neu EU\nasia Asia\nus US\nglobal Global',
      }),
    schema_id: z
      .string()
      .openapi({
        description:
          "SchemaID is the ID of the JSON Schema to be used for validating the identity's traits.",
      }),
    schema_url: z
      .string()
      .openapi({
        description:
          "SchemaURL is the URL of the endpoint where the identity's traits schema can be fetched from.\n\nformat: url",
      }),
    state: z
      .enum(['active', 'inactive'])
      .exactOptional()
      .openapi({
        description:
          "State is the identity's state.\n\nThis value has currently no effect.\nactive StateActive\ninactive StateInactive",
        'x-go-enum-desc': 'active StateActive\ninactive StateInactive',
      }),
    state_changed_at: NullTime2Schema.exactOptional(),
    traits: IdentityTraitsSchema,
    updated_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'UpdatedAt is a helper struct field for gobuffalo.pop.' }),
    verifiable_addresses: z
      .array(VerifiableIdentityAddressSchema)
      .exactOptional()
      .openapi({
        description:
          'VerifiableAddresses contains all the addresses that can be verified by the user.',
        'x-omitempty': true,
      }),
  })
  .openapi({
    description:
      'An [identity](https://www.ory.com/docs/kratos/concepts/identity-user-model) represents a (human) user in Ory.',
    required: ['id', 'schema_id', 'schema_url', 'traits'],
    title: 'Identity represents an Ory Kratos identity',
  })
  .openapi('Identity')

const IdentityCredentialsCodeAddressSchema = z
  .object({
    address: z.string().exactOptional().openapi({ description: 'The address for this code' }),
    channel: CodeChannelSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('IdentityCredentialsCodeAddress')

const IdentityCredentialsCodeSchema = z
  .object({ addresses: z.array(IdentityCredentialsCodeAddressSchema).exactOptional() })
  .openapi({
    description: 'CredentialsCode represents a one time login/registration code',
    required: [],
  })
  .openapi('IdentityCredentialsCode')

const IdentityCredentialsOidcProviderSchema = z
  .object({
    initial_access_token: z.string().exactOptional(),
    initial_id_token: z.string().exactOptional(),
    initial_refresh_token: z.string().exactOptional(),
    organization: z.string().exactOptional(),
    provider: z.string().exactOptional(),
    subject: z.string().exactOptional(),
    use_auto_link: z.boolean().exactOptional(),
  })
  .openapi({
    title:
      'CredentialsOIDCProvider is contains a specific OpenID COnnect credential for a particular connection (e.g. Google).',
    required: [],
  })
  .openapi('IdentityCredentialsOidcProvider')

const IdentityCredentialsOidcSchema = z
  .object({ providers: z.array(IdentityCredentialsOidcProviderSchema).exactOptional() })
  .openapi({
    title: 'CredentialsOIDC is contains the configuration for credentials of the type oidc.',
    required: [],
  })
  .openapi('IdentityCredentialsOidc')

const IdentityCredentialsPasswordSchema = z
  .object({
    hashed_password: z
      .string()
      .exactOptional()
      .openapi({ description: 'HashedPassword is a hash-representation of the password.' }),
    use_password_migration_hook: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'UsePasswordMigrationHook is set to true if the password should be migrated\nusing the password migration hook. If set, and the HashedPassword is empty, a\nwebhook will be called during login to migrate the password.',
      }),
  })
  .openapi({
    title:
      'CredentialsPassword is contains the configuration for credentials of the type password.',
    required: [],
  })
  .openapi('IdentityCredentialsPassword')

const IdentityPatchSchema = z
  .object({
    create: CreateIdentityBodySchema.exactOptional(),
    patch_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'The ID of this patch.\n\nThe patch ID is optional. If specified, the ID will be returned in the\nresponse, so consumers of this API can correlate the response with the\npatch.',
      }),
  })
  .openapi({ description: 'Payload for patching an identity', required: [] })
  .openapi('IdentityPatch')

const IdentitySchemaSchema = z
  .object({})
  .openapi({ description: 'Raw JSON Schema' })
  .openapi('IdentitySchema')

const IdentitySchemaContainerSchema = z
  .object({
    id: z.string().openapi({ description: 'The ID of the Identity JSON Schema' }),
    schema: z.object({}).openapi({ description: 'The actual Identity JSON Schema' }),
  })
  .openapi({ description: 'An Identity JSON Schema Container', required: ['id', 'schema'] })
  .openapi('IdentitySchemaContainer')

const IdentitySchemasSchema = z
  .array(IdentitySchemaContainerSchema)
  .openapi({ description: 'List of Identity JSON Schemas' })
  .openapi('IdentitySchemas')

const JsonPatchSchema = z
  .object({
    from: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This field is used together with operation "move" and uses JSON Pointer notation.\n\nLearn more [about JSON Pointers](https://datatracker.ietf.org/doc/html/rfc6901#section-5).',
        example: '/name',
      }),
    op: z
      .string()
      .openapi({
        description:
          'The operation to be performed. One of "add", "remove", "replace", "move", "copy", or "test".',
        example: 'replace',
      }),
    path: z
      .string()
      .openapi({
        description:
          'The path to the target path. Uses JSON pointer notation.\n\nLearn more [about JSON Pointers](https://datatracker.ietf.org/doc/html/rfc6901#section-5).',
        example: '/name',
      }),
    value: z
      .any()
      .exactOptional()
      .openapi({
        description:
          'The value to be used within the operations.\n\nLearn more [about JSON Pointers](https://datatracker.ietf.org/doc/html/rfc6901#section-5).',
        example: 'foobar',
      }),
  })
  .openapi({ description: 'A JSONPatch document as defined by RFC 6902', required: ['op', 'path'] })
  .openapi('JsonPatch')

const JsonPatchDocumentSchema = z
  .array(JsonPatchSchema)
  .openapi({ description: 'A JSONPatchDocument request' })
  .openapi('JsonPatchDocument')

const LoginFlowTestStepErrorSchema = z
  .object({
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Human-readable message describing the failure.' }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Short classification of the failure cause (for example,\n"access_denied" or "traits_invalid").',
      }),
    step: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Machine-readable identifier of the failed step (for example,\n"token_exchange" or "schema_validate").',
      }),
  })
  .openapi({
    description:
      'Populated when any step (token exchange, claims decode, Jsonnet\nevaluation, schema validation) cannot complete.',
    title: 'Classified failure of a step in an OIDC test round-trip.',
    required: [],
  })
  .openapi('LoginFlowTestStepError')

const LoginFlowTestSchemaValidationErrorSchema = z
  .object({
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Human-readable description of the validation failure.' }),
    path: z
      .string()
      .exactOptional()
      .openapi({ description: 'JSON pointer to the field that failed validation.' }),
  })
  .openapi({
    description:
      'One identity-schema validation failure recorded while evaluating the\ntraits produced by the Jsonnet mapper.',
    required: [],
  })
  .openapi('LoginFlowTestSchemaValidationError')

const LoginFlowTestDebugPayloadSchema = z
  .object({
    error: LoginFlowTestStepErrorSchema.exactOptional(),
    id_token_claims: z
      .record(z.string(), z.any())
      .exactOptional()
      .openapi({ description: 'Claims extracted from the ID token.' }),
    jsonnet_input: z
      .record(z.string(), z.any())
      .exactOptional()
      .openapi({ description: 'Input JSON that was fed into the Jsonnet mapper.' }),
    jsonnet_mapper_url: z
      .string()
      .exactOptional()
      .openapi({ description: 'URL of the Jsonnet mapper that was executed on the claims.' }),
    jsonnet_output: z
      .record(z.string(), z.any())
      .exactOptional()
      .openapi({ description: 'Output JSON returned by the Jsonnet mapper.' }),
    jsonnet_stderr: z
      .string()
      .exactOptional()
      .openapi({ description: 'Anything the Jsonnet mapper wrote to standard error.' }),
    schema_validation_errors: z
      .array(LoginFlowTestSchemaValidationErrorSchema)
      .exactOptional()
      .openapi({
        description: 'Identity-schema validation errors produced from the mapped traits.',
      }),
    userinfo: z
      .record(z.string(), z.any())
      .exactOptional()
      .openapi({ description: "Claims returned from the provider's userinfo endpoint, if any." }),
  })
  .openapi({
    description:
      'Contains the parsed claims, the Jsonnet mapper input and output, and any\nschema validation errors. Bearer tokens (id_token, access_token,\nrefresh_token) are intentionally excluded to limit the blast radius of\nthe debug payload leaking through audit logs or admin browsers.',
    title: 'Diagnostic payload captured during a test-mode OIDC round-trip.',
    required: [],
  })
  .openapi('LoginFlowTestDebugPayload')

const LoginFlowTestContextSchema = z
  .object({
    debug_payload: LoginFlowTestDebugPayloadSchema.exactOptional(),
    provider_id: z
      .string()
      .openapi({ description: 'The ID of the OIDC provider this test flow targets.' }),
  })
  .openapi({
    description:
      "Admin-test extension of a login flow. Populated only for flows created by\nthe admin test endpoint; included in the flow's API response so the admin\nUI can render the pre-scoped provider and (once captured) the debug\nround-trip result.",
    required: ['provider_id'],
  })
  .openapi('LoginFlowTestContext')

const UiTextSchema = z
  .object({
    context: z
      .object({})
      .exactOptional()
      .openapi({ description: "The message's context. Useful when customizing messages." }),
    id: IDSchema,
    text: z.string().openapi({ description: 'The message text. Written in american english.' }),
    type: z
      .enum(['info', 'error', 'success'])
      .openapi({
        description: 'The message type.\ninfo Info\nerror Error\nsuccess Success',
        'x-go-enum-desc': 'info Info\nerror Error\nsuccess Success',
      }),
  })
  .openapi({ required: ['id', 'text', 'type'] })
  .openapi('UiText')

const UiTextsSchema = z.array(UiTextSchema).openapi('UiTexts')

const UiNodeInputAttributesOptionSchema = z
  .object({
    value: z
      .any()
      .openapi({
        description:
          'The value that will be submitted when this option is picked.\nIt is serialized verbatim from the JSON schema `enum` entry, so it is\nalways a scalar JSON value (string, number, or boolean).',
      }),
  })
  .openapi({
    description:
      'Represents a single selectable value for an input whose JSON schema\ndefined an `enum`. The value is always a scalar JSON type (string, number,\nor boolean) serialized verbatim from the schema. When present, clients\nshould render the parent input as a select/dropdown.',
    required: ['value'],
  })
  .openapi('UiNodeInputAttributesOption')

const UiNodeInputAttributesSchema = z
  .object({
    autocomplete: z
      .enum([
        'email',
        'tel',
        'url',
        'current-password',
        'new-password',
        'one-time-code',
        'username',
        'username webauthn',
      ])
      .exactOptional()
      .openapi({
        description:
          'The autocomplete attribute for the input.\nemail InputAttributeAutocompleteEmail\ntel InputAttributeAutocompleteTel\nurl InputAttributeAutocompleteUrl\ncurrent-password InputAttributeAutocompleteCurrentPassword\nnew-password InputAttributeAutocompleteNewPassword\none-time-code InputAttributeAutocompleteOneTimeCode\nusername InputAttributeAutocompleteUsername\nusername webauthn InputAttributeAutocompleteUsernameWebauthn',
        'x-go-enum-desc':
          'email InputAttributeAutocompleteEmail\ntel InputAttributeAutocompleteTel\nurl InputAttributeAutocompleteUrl\ncurrent-password InputAttributeAutocompleteCurrentPassword\nnew-password InputAttributeAutocompleteNewPassword\none-time-code InputAttributeAutocompleteOneTimeCode\nusername InputAttributeAutocompleteUsername\nusername webauthn InputAttributeAutocompleteUsernameWebauthn',
      }),
    disabled: z
      .boolean()
      .openapi({ description: "Sets the input's disabled field to true or false." }),
    label: UiTextSchema.exactOptional(),
    maxlength: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: "MaxLength may contain the input's maximum length.",
      }),
    name: z.string().openapi({ description: "The input's element name." }),
    node_type: z
      .literal('input')
      .openapi({
        description:
          'NodeType represents this node\'s types. It is a mirror of `node.type` and\nis primarily used to allow compatibility with OpenAPI 3.0.  In this struct it technically always is "input".\ntext Text\ninput Input\nimg Image\na Anchor\nscript Script\ndiv Division',
        'x-go-enum-desc':
          'text Text\ninput Input\nimg Image\na Anchor\nscript Script\ndiv Division',
      }),
    onclick: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'OnClick may contain javascript which should be executed on click. This is primarily\nused for WebAuthn.\n\nDeprecated: Using OnClick requires the use of eval() which is a security risk. Use OnClickTrigger instead.',
      }),
    onclickTrigger: z
      .enum([
        'oryWebAuthnRegistration',
        'oryWebAuthnLogin',
        'oryPasskeyLogin',
        'oryPasskeyLoginAutocompleteInit',
        'oryPasskeyRegistration',
        'oryPasskeySettingsRegistration',
      ])
      .exactOptional()
      .openapi({
        description:
          'OnClickTrigger may contain a WebAuthn trigger which should be executed on click.\n\nThe trigger maps to a JavaScript function provided by Ory, which triggers actions such as PassKey registration or login.\noryWebAuthnRegistration WebAuthnTriggersWebAuthnRegistration\noryWebAuthnLogin WebAuthnTriggersWebAuthnLogin\noryPasskeyLogin WebAuthnTriggersPasskeyLogin\noryPasskeyLoginAutocompleteInit WebAuthnTriggersPasskeyLoginAutocompleteInit\noryPasskeyRegistration WebAuthnTriggersPasskeyRegistration\noryPasskeySettingsRegistration WebAuthnTriggersPasskeySettingsRegistration',
        'x-go-enum-desc':
          'oryWebAuthnRegistration WebAuthnTriggersWebAuthnRegistration\noryWebAuthnLogin WebAuthnTriggersWebAuthnLogin\noryPasskeyLogin WebAuthnTriggersPasskeyLogin\noryPasskeyLoginAutocompleteInit WebAuthnTriggersPasskeyLoginAutocompleteInit\noryPasskeyRegistration WebAuthnTriggersPasskeyRegistration\noryPasskeySettingsRegistration WebAuthnTriggersPasskeySettingsRegistration',
      }),
    onload: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'OnLoad may contain javascript which should be executed on load. This is primarily\nused for WebAuthn.\n\nDeprecated: Using OnLoad requires the use of eval() which is a security risk. Use OnLoadTrigger instead.',
      }),
    onloadTrigger: z
      .enum([
        'oryWebAuthnRegistration',
        'oryWebAuthnLogin',
        'oryPasskeyLogin',
        'oryPasskeyLoginAutocompleteInit',
        'oryPasskeyRegistration',
        'oryPasskeySettingsRegistration',
      ])
      .exactOptional()
      .openapi({
        description:
          'OnLoadTrigger may contain a WebAuthn trigger which should be executed on load.\n\nThe trigger maps to a JavaScript function provided by Ory, which triggers actions such as PassKey registration or login.\noryWebAuthnRegistration WebAuthnTriggersWebAuthnRegistration\noryWebAuthnLogin WebAuthnTriggersWebAuthnLogin\noryPasskeyLogin WebAuthnTriggersPasskeyLogin\noryPasskeyLoginAutocompleteInit WebAuthnTriggersPasskeyLoginAutocompleteInit\noryPasskeyRegistration WebAuthnTriggersPasskeyRegistration\noryPasskeySettingsRegistration WebAuthnTriggersPasskeySettingsRegistration',
        'x-go-enum-desc':
          'oryWebAuthnRegistration WebAuthnTriggersWebAuthnRegistration\noryWebAuthnLogin WebAuthnTriggersWebAuthnLogin\noryPasskeyLogin WebAuthnTriggersPasskeyLogin\noryPasskeyLoginAutocompleteInit WebAuthnTriggersPasskeyLoginAutocompleteInit\noryPasskeyRegistration WebAuthnTriggersPasskeyRegistration\noryPasskeySettingsRegistration WebAuthnTriggersPasskeySettingsRegistration',
      }),
    options: z
      .array(UiNodeInputAttributesOptionSchema)
      .exactOptional()
      .openapi({
        description:
          'The allowed values for the input when the underlying JSON schema\ndefines an `enum`. When present, clients should render the field as a\nselect/dropdown rather than a free-form text input. When absent,\nclients continue to render a plain text input, so this field is\nbackward compatible with UIs that do not look at it.',
      }),
    pattern: z.string().exactOptional().openapi({ description: "The input's pattern." }),
    required: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Mark this input field as required.' }),
    type: z
      .enum([
        'text',
        'password',
        'number',
        'checkbox',
        'hidden',
        'email',
        'tel',
        'submit',
        'button',
        'datetime-local',
        'date',
        'url',
      ])
      .openapi({
        description:
          "The input's element type.\ntext InputAttributeTypeText\npassword InputAttributeTypePassword\nnumber InputAttributeTypeNumber\ncheckbox InputAttributeTypeCheckbox\nhidden InputAttributeTypeHidden\nemail InputAttributeTypeEmail\ntel InputAttributeTypeTel\nsubmit InputAttributeTypeSubmit\nbutton InputAttributeTypeButton\ndatetime-local InputAttributeTypeDateTimeLocal\ndate InputAttributeTypeDate\nurl InputAttributeTypeURI",
        'x-go-enum-desc':
          'text InputAttributeTypeText\npassword InputAttributeTypePassword\nnumber InputAttributeTypeNumber\ncheckbox InputAttributeTypeCheckbox\nhidden InputAttributeTypeHidden\nemail InputAttributeTypeEmail\ntel InputAttributeTypeTel\nsubmit InputAttributeTypeSubmit\nbutton InputAttributeTypeButton\ndatetime-local InputAttributeTypeDateTimeLocal\ndate InputAttributeTypeDate\nurl InputAttributeTypeURI',
      }),
    value: z.any().nullable().exactOptional().openapi({ description: "The input's value." }),
  })
  .openapi({
    description: 'InputAttributes represents the attributes of an input node',
    required: ['name', 'type', 'disabled', 'node_type'],
  })
  .openapi('UiNodeInputAttributes')

const UiNodeTextAttributesSchema = z
  .object({
    id: z.string().openapi({ description: 'A unique identifier' }),
    node_type: z
      .literal('text')
      .openapi({
        description:
          'NodeType represents this node\'s types. It is a mirror of `node.type` and\nis primarily used to allow compatibility with OpenAPI 3.0.  In this struct it technically always is "text".\ntext Text\ninput Input\nimg Image\na Anchor\nscript Script\ndiv Division',
        'x-go-enum-desc':
          'text Text\ninput Input\nimg Image\na Anchor\nscript Script\ndiv Division',
      }),
    text: UiTextSchema,
  })
  .openapi({
    required: ['text', 'id', 'node_type'],
    title: 'TextAttributes represents the attributes of a text node.',
  })
  .openapi('UiNodeTextAttributes')

const UiNodeImageAttributesSchema = z
  .object({
    height: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Height of the image' }),
    id: z.string().openapi({ description: 'A unique identifier' }),
    node_type: z
      .literal('img')
      .openapi({
        description:
          'NodeType represents this node\'s types. It is a mirror of `node.type` and\nis primarily used to allow compatibility with OpenAPI 3.0.  In this struct it technically always is "img".\ntext Text\ninput Input\nimg Image\na Anchor\nscript Script\ndiv Division',
        'x-go-enum-desc':
          'text Text\ninput Input\nimg Image\na Anchor\nscript Script\ndiv Division',
      }),
    src: z.string().openapi({ description: "The image's source URL.\n\nformat: uri" }),
    width: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Width of the image' }),
  })
  .openapi({
    required: ['src', 'id', 'width', 'height', 'node_type'],
    title: 'ImageAttributes represents the attributes of an image node.',
  })
  .openapi('UiNodeImageAttributes')

const UiNodeAnchorAttributesSchema = z
  .object({
    href: z.string().openapi({ description: "The link's href (destination) URL.\n\nformat: uri" }),
    id: z.string().openapi({ description: 'A unique identifier' }),
    node_type: z
      .literal('a')
      .openapi({
        description:
          'NodeType represents this node\'s types. It is a mirror of `node.type` and\nis primarily used to allow compatibility with OpenAPI 3.0.  In this struct it technically always is "a".\ntext Text\ninput Input\nimg Image\na Anchor\nscript Script\ndiv Division',
        'x-go-enum-desc':
          'text Text\ninput Input\nimg Image\na Anchor\nscript Script\ndiv Division',
      }),
    title: UiTextSchema,
  })
  .openapi({
    required: ['href', 'title', 'id', 'node_type'],
    title: 'AnchorAttributes represents the attributes of an anchor node.',
  })
  .openapi('UiNodeAnchorAttributes')

const UiNodeScriptAttributesSchema = z
  .object({
    async: z.boolean().openapi({ description: 'The script async type' }),
    crossorigin: z.string().openapi({ description: 'The script cross origin policy' }),
    id: z.string().openapi({ description: 'A unique identifier' }),
    integrity: z.string().openapi({ description: "The script's integrity hash" }),
    node_type: z
      .literal('script')
      .openapi({
        description:
          'NodeType represents this node\'s types. It is a mirror of `node.type` and\nis primarily used to allow compatibility with OpenAPI 3.0. In this struct it technically always is "script".\ntext Text\ninput Input\nimg Image\na Anchor\nscript Script\ndiv Division',
        'x-go-enum-desc':
          'text Text\ninput Input\nimg Image\na Anchor\nscript Script\ndiv Division',
      }),
    nonce: z
      .string()
      .openapi({
        description:
          'Nonce for CSP\n\nA nonce you may want to use to improve your Content Security Policy.\nYou do not have to use this value but if you want to improve your CSP\npolicies you may use it. You can also choose to use your own nonce value!',
      }),
    referrerpolicy: z.string().openapi({ description: 'The script referrer policy' }),
    src: z.string().openapi({ description: 'The script source' }),
    type: z.string().openapi({ description: 'The script MIME type' }),
  })
  .openapi({
    required: [
      'src',
      'async',
      'referrerpolicy',
      'crossorigin',
      'integrity',
      'type',
      'id',
      'nonce',
      'node_type',
    ],
    title: 'ScriptAttributes represent script nodes which load javascript.',
  })
  .openapi('UiNodeScriptAttributes')

const UiNodeDivisionAttributesSchema = z
  .object({
    class: z
      .string()
      .exactOptional()
      .openapi({ description: 'A classname that should be rendered into the DOM.' }),
    data: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Data is a map of key-value pairs that are passed to the division.\n\nThey may be used for `data-...` attributes.',
      }),
    id: z.string().openapi({ description: 'A unique identifier' }),
    node_type: z
      .literal('div')
      .openapi({
        description:
          'NodeType represents this node\'s type. It is a mirror of `node.type` and\nis primarily used to allow compatibility with OpenAPI 3.0. In this struct it technically always is "script".\ntext Text\ninput Input\nimg Image\na Anchor\nscript Script\ndiv Division',
        'x-go-enum-desc':
          'text Text\ninput Input\nimg Image\na Anchor\nscript Script\ndiv Division',
      }),
  })
  .openapi({
    description:
      'Division sections are used for interactive widgets that require a hook in the DOM / view.',
    required: ['id', 'node_type'],
    title: 'DivisionAttributes represent a division section.',
  })
  .openapi('UiNodeDivisionAttributes')

const UiNodeAttributesSchema = z
  .discriminatedUnion('node_type', [
    UiNodeInputAttributesSchema,
    UiNodeTextAttributesSchema,
    UiNodeImageAttributesSchema,
    UiNodeAnchorAttributesSchema,
    UiNodeScriptAttributesSchema,
    UiNodeDivisionAttributesSchema,
  ])
  .openapi({
    discriminator: {
      mapping: {
        a: '#/components/schemas/uiNodeAnchorAttributes',
        div: '#/components/schemas/uiNodeDivisionAttributes',
        img: '#/components/schemas/uiNodeImageAttributes',
        input: '#/components/schemas/uiNodeInputAttributes',
        script: '#/components/schemas/uiNodeScriptAttributes',
        text: '#/components/schemas/uiNodeTextAttributes',
      },
      propertyName: 'node_type',
    },
    title: 'Attributes represents a list of attributes (e.g. `href="foo"` for links).',
  })
  .openapi('UiNodeAttributes')

const UiNodeMetaSchema = z
  .object({ label: UiTextSchema.exactOptional() })
  .openapi({
    description:
      'This might include a label and other information that can optionally\nbe used to render UIs.',
    title: "A Node's Meta Information",
    required: [],
  })
  .openapi('UiNodeMeta')

const UiNodeSchema = z
  .object({
    attributes: UiNodeAttributesSchema,
    group: z
      .enum([
        'default',
        'password',
        'oidc',
        'profile',
        'link',
        'code',
        'totp',
        'lookup_secret',
        'webauthn',
        'passkey',
        'identifier_first',
        'captcha',
        'saml',
        'deviceauthn',
      ])
      .openapi({
        description:
          'Group specifies which group (e.g. password authenticator) this node belongs to.\ndefault DefaultGroup\npassword PasswordGroup\noidc OpenIDConnectGroup\nprofile ProfileGroup\nlink LinkGroup\ncode CodeGroup\ntotp TOTPGroup\nlookup_secret LookupGroup\nwebauthn WebAuthnGroup\npasskey PasskeyGroup\nidentifier_first IdentifierFirstGroup\ncaptcha CaptchaGroup\nsaml SAMLGroup\ndeviceauthn DeviceAuthnGroup',
        'x-go-enum-desc':
          'default DefaultGroup\npassword PasswordGroup\noidc OpenIDConnectGroup\nprofile ProfileGroup\nlink LinkGroup\ncode CodeGroup\ntotp TOTPGroup\nlookup_secret LookupGroup\nwebauthn WebAuthnGroup\npasskey PasskeyGroup\nidentifier_first IdentifierFirstGroup\ncaptcha CaptchaGroup\nsaml SAMLGroup\ndeviceauthn DeviceAuthnGroup',
      }),
    messages: UiTextsSchema,
    meta: UiNodeMetaSchema,
    type: z
      .enum(['text', 'input', 'img', 'a', 'script', 'div'])
      .openapi({
        description:
          "The node's type\ntext Text\ninput Input\nimg Image\na Anchor\nscript Script\ndiv Division",
        'x-go-enum-desc':
          'text Text\ninput Input\nimg Image\na Anchor\nscript Script\ndiv Division',
      }),
  })
  .openapi({
    description:
      'Nodes are represented as HTML elements or their native UI equivalents. For example,\na node can be an `<img>` tag, or an `<input element>` but also `some plain text`.',
    required: ['type', 'group', 'attributes', 'messages', 'meta'],
    title: "Node represents a flow's nodes",
  })
  .openapi('UiNode')

const UiNodesSchema = z.array(UiNodeSchema).openapi('UiNodes')

const UiContainerSchema = z
  .object({
    action: z
      .string()
      .openapi({
        description:
          'Action should be used as the form action URL `<form action="{{ .Action }}" method="post">`.',
      }),
    messages: UiTextsSchema.exactOptional(),
    method: z.string().openapi({ description: 'Method is the form method (e.g. POST)' }),
    nodes: UiNodesSchema,
  })
  .openapi({
    description:
      'Container represents a HTML Form. The container can work with both HTTP Form and JSON requests',
    required: ['action', 'method', 'nodes'],
  })
  .openapi('UiContainer')

const LoginFlowSchema = z
  .object({
    active: z
      .enum([
        'password',
        'oidc',
        'totp',
        'lookup_secret',
        'webauthn',
        'code',
        'passkey',
        'profile',
        'saml',
        'deviceauthn',
        'identifier_first',
        'link_recovery',
        'code_recovery',
      ])
      .exactOptional()
      .openapi({
        description:
          'The active login method\n\nIf set contains the login method used. If the flow is new, it is unset.\npassword CredentialsTypePassword\noidc CredentialsTypeOIDC\ntotp CredentialsTypeTOTP\nlookup_secret CredentialsTypeLookup\nwebauthn CredentialsTypeWebAuthn\ncode CredentialsTypeCodeAuth\npasskey CredentialsTypePasskey\nprofile CredentialsTypeProfile\nsaml CredentialsTypeSAML\ndeviceauthn CredentialsTypeDeviceAuthn\nidentifier_first CredentialsTypeIdentifierFirst\nlink_recovery CredentialsTypeRecoveryLink  CredentialsTypeRecoveryLink is a special credential type linked to the link strategy (recovery flow).  It is not used within the credentials object itself.\ncode_recovery CredentialsTypeRecoveryCode',
        'x-go-enum-desc':
          'password CredentialsTypePassword\noidc CredentialsTypeOIDC\ntotp CredentialsTypeTOTP\nlookup_secret CredentialsTypeLookup\nwebauthn CredentialsTypeWebAuthn\ncode CredentialsTypeCodeAuth\npasskey CredentialsTypePasskey\nprofile CredentialsTypeProfile\nsaml CredentialsTypeSAML\ndeviceauthn CredentialsTypeDeviceAuthn\nidentifier_first CredentialsTypeIdentifierFirst\nlink_recovery CredentialsTypeRecoveryLink  CredentialsTypeRecoveryLink is a special credential type linked to the link strategy (recovery flow).  It is not used within the credentials object itself.\ncode_recovery CredentialsTypeRecoveryCode',
      }),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'CreatedAt is a helper struct field for gobuffalo.pop.' }),
    expires_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'ExpiresAt is the time (UTC) when the flow expires. If the user still wishes to log in,\na new flow has to be initiated.',
      }),
    id: z
      .uuid()
      .openapi({
        description:
          "ID represents the flow's unique ID. When performing the login flow, this\nrepresents the id in the login UI's query parameter: http://<selfservice.flows.login.ui_url>/?flow=<flow_id>",
      }),
    identity_schema: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'IdentitySchema optionally holds the ID of the identity schema that is used\nfor this flow. This value can be set by the user when creating the flow and\nshould be retained when the flow is saved or converted to another flow.',
      }),
    issued_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'IssuedAt is the time (UTC) when the flow started.' }),
    oauth2_login_challenge: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Ory OAuth 2.0 Login Challenge.\n\nThis value is set using the `login_challenge` query parameter of the registration and login endpoints.\nIf set will cooperate with Ory OAuth2 and OpenID to act as an OAuth2 server / OpenID Provider.',
      }),
    oauth2_login_request: OAuth2LoginRequestSchema.exactOptional(),
    organization_id: NullUUIDSchema.exactOptional(),
    refresh: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Refresh stores whether this login flow should enforce re-authentication.',
      }),
    request_url: z
      .string()
      .openapi({
        description:
          "RequestURL is the initial URL that was requested from Ory Kratos. It can be used\nto forward information contained in the URL's path or query for example.",
      }),
    requested_aal: AuthenticatorAssuranceLevelSchema.exactOptional(),
    return_to: z
      .string()
      .exactOptional()
      .openapi({ description: 'ReturnTo contains the requested return_to URL.' }),
    session_token_exchange_code: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'SessionTokenExchangeCode holds the secret code that the client can use to retrieve a session token after the login flow has been completed.\nThis is only set if the client has requested a session token exchange code, and if the flow is of type "api",\nand only on creating the login flow.',
      }),
    state: z
      .any()
      .openapi({
        description:
          'State represents the state of this request:\n\nchoose_method: ask the user to choose a method to sign in with\nsent_email: the email has been sent to the user\npassed_challenge: the request was successful and the login challenge was passed.',
      }),
    test_context: LoginFlowTestContextSchema.exactOptional(),
    transient_payload: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'TransientPayload is used to pass data from the login to hooks and email templates',
      }),
    type: SelfServiceFlowTypeSchema,
    ui: UiContainerSchema,
    updated_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'UpdatedAt is a helper struct field for gobuffalo.pop.' }),
  })
  .openapi({
    description:
      'This object represents a login flow. A login flow is initiated at the "Initiate Login API / Browser Flow"\nendpoint by a client.\n\nOnce a login flow is completed successfully, a session cookie or session token will be issued.',
    required: ['id', 'type', 'expires_at', 'issued_at', 'request_url', 'ui', 'state'],
    title: 'Login Flow',
  })
  .openapi('LoginFlow')

const LoginFlowStateSchema = z
  .enum(['choose_method', 'sent_email', 'passed_challenge'])
  .openapi({
    description:
      'The experimental state represents the state of a login flow. This field is EXPERIMENTAL and subject to change!',
    title: 'Login flow state (experimental)',
  })
  .openapi('LoginFlowState')

const LogoutFlowSchema = z
  .object({
    logout_token: z
      .string()
      .openapi({ description: 'LogoutToken can be used to perform logout using AJAX.' }),
    logout_url: z
      .string()
      .openapi({
        description: 'LogoutURL can be opened in a browser to sign the user out.\n\nformat: uri',
      }),
  })
  .openapi({ description: 'Logout Flow', required: ['logout_url', 'logout_token'] })
  .openapi('LogoutFlow')

const ManageSessionsBodySchema = z
  .object({
    action: z
      .enum(['disable', 'delete'])
      .openapi({
        description:
          'Action to perform on the matching sessions.\ndisable ManageSessionsActionDisable\ndelete ManageSessionsActionDelete',
        'x-go-enum-desc': 'disable ManageSessionsActionDisable\ndelete ManageSessionsActionDelete',
      }),
    identities: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Identity IDs whose sessions should be disabled or deleted, or `["*"]`\nto operate on every session in the network. Mutually exclusive with\n`sessions`.',
      }),
    sessions: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Session IDs to disable or delete. Mutually exclusive with `identities`.\nThe wildcard `["*"]` is not accepted in this field — pass\n`identities: ["*"]` to scope the operation to every session in the\nnetwork.',
      }),
  })
  .openapi({
    description:
      'Body for the bulk session management endpoint. Exactly one of `identities`\nor `sessions` must be provided. To operate on every session in the network,\npass `identities: ["*"]` — the wildcard must appear alone, never mixed with\nexplicit IDs.',
    required: ['action'],
    title: 'Manage Sessions Body',
  })
  .openapi('ManageSessionsBody')

const ManageSessionsResponseSchema = z
  .object({
    more: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True when the call reached the per-call batch limit and additional\nmatching rows may remain. Always false for explicit-IDs requests.',
      }),
    processed: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'Number of sessions processed in this call. For `disable`, counts only\nsessions that were active before the call (already-inactive sessions\nare skipped). For `delete`, counts every matching row removed.',
      }),
  })
  .openapi({
    description:
      'Response body for the bulk session management endpoint. Reports how many\nrows the call processed and, for the wildcard variant, whether the network\nstill has matching rows left. Explicit-IDs requests always return\n`more: false`. Wildcard callers drain the network by re-issuing the same\nrequest while `more` is `true`.',
    title: 'Manage Sessions Response',
    required: [],
  })
  .openapi('ManageSessionsResponse')

const MessageDispatchSchema = z
  .object({
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'CreatedAt is a helper struct field for gobuffalo.pop.' }),
    error: JSONRawMessageSchema.exactOptional(),
    id: z.uuid().openapi({ description: 'The ID of this message dispatch' }),
    message_id: z.uuid().openapi({ description: 'The ID of the message being dispatched' }),
    status: z
      .enum(['failed', 'success'])
      .openapi({
        description:
          'The status of this dispatch\nEither "failed" or "success"\nfailed CourierMessageDispatchStatusFailed\nsuccess CourierMessageDispatchStatusSuccess',
        'x-go-enum-desc':
          'failed CourierMessageDispatchStatusFailed\nsuccess CourierMessageDispatchStatusSuccess',
      }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'UpdatedAt is a helper struct field for gobuffalo.pop.' }),
  })
  .openapi({
    description:
      'MessageDispatch represents an attempt of sending a courier message\nIt contains the status of the attempt (failed or successful) and the error if any occured',
    required: ['id', 'message_id', 'status', 'created_at', 'updated_at'],
  })
  .openapi('MessageDispatch')

const MessageSchema = z
  .object({
    body: z.string(),
    channel: z.string().exactOptional(),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'CreatedAt is a helper struct field for gobuffalo.pop.' }),
    dispatches: z
      .array(MessageDispatchSchema)
      .exactOptional()
      .openapi({
        description:
          'Dispatches store information about the attempts of delivering a message\nMay contain an error if any happened, or just the `success` state.',
      }),
    id: z.uuid(),
    recipient: z.string(),
    send_count: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    status: CourierMessageStatusSchema,
    subject: z.string(),
    template_type: z
      .enum([
        'recovery_invalid',
        'recovery_valid',
        'recovery_code_invalid',
        'recovery_code_valid',
        'verification_invalid',
        'verification_valid',
        'verification_code_invalid',
        'verification_code_valid',
        'stub',
        'login_code_valid',
        'registration_code_valid',
        'verifiable_address_changed',
        'authenticator_key_added',
      ])
      .openapi({
        description:
          '\nrecovery_invalid TypeRecoveryInvalid\nrecovery_valid TypeRecoveryValid\nrecovery_code_invalid TypeRecoveryCodeInvalid\nrecovery_code_valid TypeRecoveryCodeValid\nverification_invalid TypeVerificationInvalid\nverification_valid TypeVerificationValid\nverification_code_invalid TypeVerificationCodeInvalid\nverification_code_valid TypeVerificationCodeValid\nstub TypeTestStub\nlogin_code_valid TypeLoginCodeValid\nregistration_code_valid TypeRegistrationCodeValid\nverifiable_address_changed TypeVerifiableAddressChanged\nauthenticator_key_added TypeAuthenticatorKeyAdded',
        'x-go-enum-desc':
          'recovery_invalid TypeRecoveryInvalid\nrecovery_valid TypeRecoveryValid\nrecovery_code_invalid TypeRecoveryCodeInvalid\nrecovery_code_valid TypeRecoveryCodeValid\nverification_invalid TypeVerificationInvalid\nverification_valid TypeVerificationValid\nverification_code_invalid TypeVerificationCodeInvalid\nverification_code_valid TypeVerificationCodeValid\nstub TypeTestStub\nlogin_code_valid TypeLoginCodeValid\nregistration_code_valid TypeRegistrationCodeValid\nverifiable_address_changed TypeVerifiableAddressChanged\nauthenticator_key_added TypeAuthenticatorKeyAdded',
      }),
    type: CourierMessageTypeSchema,
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'UpdatedAt is a helper struct field for gobuffalo.pop.' }),
  })
  .openapi({
    required: [
      'id',
      'status',
      'type',
      'recipient',
      'body',
      'subject',
      'template_type',
      'send_count',
      'created_at',
      'updated_at',
    ],
  })
  .openapi('Message')

const NeedsPrivilegedSessionErrorSchema = z
  .object({
    error: GenericErrorSchema.exactOptional(),
    redirect_browser_to: z
      .string()
      .openapi({ description: 'Points to where to redirect the user to next.' }),
  })
  .openapi({
    required: ['redirect_browser_to'],
    title: 'Is sent when a privileged session is required to perform the settings update.',
  })
  .openapi('NeedsPrivilegedSessionError')

const NullInt64Schema = z.int().nullable().openapi('NullInt64')

const PatchIdentitiesBodySchema = z
  .object({
    identities: z
      .array(IdentityPatchSchema)
      .exactOptional()
      .openapi({ description: 'Identities holds the list of patches to apply\n\nrequired' }),
  })
  .openapi({ description: 'Patch Identities Body', required: [] })
  .openapi('PatchIdentitiesBody')

const PerformNativeLogoutBodySchema = z
  .object({
    session_token: z
      .string()
      .openapi({ description: 'The Session Token\n\nInvalidate this session token.' }),
  })
  .openapi({ description: 'Perform Native Logout Request Body', required: ['session_token'] })
  .openapi('PerformNativeLogoutBody')

const RecoveryCodeForIdentitySchema = z
  .object({
    expires_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Expires At is the timestamp of when the recovery flow expires\n\nThe timestamp when the recovery code expires.',
      }),
    recovery_code: z
      .string()
      .openapi({ description: 'RecoveryCode is the code that can be used to recover the account' }),
    recovery_link: z
      .string()
      .openapi({
        description:
          'RecoveryLink with flow\n\nThis link opens the recovery UI with an empty `code` field.',
      }),
  })
  .openapi({
    description: 'Used when an administrator creates a recovery code for an identity.',
    required: ['recovery_link', 'recovery_code'],
    title: 'Recovery Code for Identity',
  })
  .openapi('RecoveryCodeForIdentity')

const RecoveryFlowSchema = z
  .object({
    active: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Active, if set, contains the recovery method that is being used. It is initially\nnot set.',
      }),
    continue_with: z
      .array(ContinueWithSchema)
      .exactOptional()
      .openapi({ description: 'Contains possible actions that could follow this flow' }),
    expires_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'ExpiresAt is the time (UTC) when the request expires. If the user still wishes to update the setting,\na new request has to be initiated.',
      }),
    id: z
      .uuid()
      .openapi({
        description:
          "ID represents the request's unique ID. When performing the recovery flow, this\nrepresents the id in the recovery ui's query parameter: http://<selfservice.flows.recovery.ui_url>?request=<id>",
      }),
    issued_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'IssuedAt is the time (UTC) when the request occurred.' }),
    request_url: z
      .string()
      .openapi({
        description:
          "RequestURL is the initial URL that was requested from Ory Kratos. It can be used\nto forward information contained in the URL's path or query for example.",
      }),
    return_to: z
      .string()
      .exactOptional()
      .openapi({ description: 'ReturnTo contains the requested return_to URL.' }),
    state: z
      .any()
      .openapi({
        description:
          'State represents the state of this request:\n\nchoose_method: ask the user to choose a method (e.g. recover account via email)\nsent_email: the email has been sent to the user\npassed_challenge: the request was successful and the recovery challenge was passed.',
      }),
    transient_payload: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'TransientPayload is used to pass data from the recovery flow to hooks and email templates',
      }),
    type: SelfServiceFlowTypeSchema,
    ui: UiContainerSchema,
  })
  .openapi({
    description:
      'This request is used when an identity wants to recover their account.\n\nWe recommend reading the [Account Recovery Documentation](../self-service/flows/password-reset-account-recovery)',
    required: ['id', 'type', 'expires_at', 'issued_at', 'request_url', 'ui', 'state'],
    title: 'A Recovery Flow',
  })
  .openapi('RecoveryFlow')

const RecoveryFlowStateSchema = z
  .enum(['choose_method', 'sent_email', 'passed_challenge'])
  .openapi({
    description:
      'The experimental state represents the state of a recovery flow. This field is EXPERIMENTAL and subject to change!',
    title: 'Recovery flow state (experimental)',
  })
  .openapi('RecoveryFlowState')

const RecoveryLinkForIdentitySchema = z
  .object({
    expires_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Recovery Link Expires At\n\nThe timestamp when the recovery link expires.',
      }),
    recovery_link: z
      .string()
      .openapi({ description: 'Recovery Link\n\nThis link can be used to recover the account.' }),
  })
  .openapi({
    description: 'Used when an administrator creates a recovery link for an identity.',
    required: ['recovery_link'],
    title: 'Identity Recovery Link',
  })
  .openapi('RecoveryLinkForIdentity')

const RegistrationFlowSchema = z
  .object({
    active: z
      .enum([
        'password',
        'oidc',
        'totp',
        'lookup_secret',
        'webauthn',
        'code',
        'passkey',
        'profile',
        'saml',
        'deviceauthn',
        'identifier_first',
        'link_recovery',
        'code_recovery',
      ])
      .exactOptional()
      .openapi({
        description:
          'Active, if set, contains the registration method that is being used. It is initially\nnot set.\npassword CredentialsTypePassword\noidc CredentialsTypeOIDC\ntotp CredentialsTypeTOTP\nlookup_secret CredentialsTypeLookup\nwebauthn CredentialsTypeWebAuthn\ncode CredentialsTypeCodeAuth\npasskey CredentialsTypePasskey\nprofile CredentialsTypeProfile\nsaml CredentialsTypeSAML\ndeviceauthn CredentialsTypeDeviceAuthn\nidentifier_first CredentialsTypeIdentifierFirst\nlink_recovery CredentialsTypeRecoveryLink  CredentialsTypeRecoveryLink is a special credential type linked to the link strategy (recovery flow).  It is not used within the credentials object itself.\ncode_recovery CredentialsTypeRecoveryCode',
        'x-go-enum-desc':
          'password CredentialsTypePassword\noidc CredentialsTypeOIDC\ntotp CredentialsTypeTOTP\nlookup_secret CredentialsTypeLookup\nwebauthn CredentialsTypeWebAuthn\ncode CredentialsTypeCodeAuth\npasskey CredentialsTypePasskey\nprofile CredentialsTypeProfile\nsaml CredentialsTypeSAML\ndeviceauthn CredentialsTypeDeviceAuthn\nidentifier_first CredentialsTypeIdentifierFirst\nlink_recovery CredentialsTypeRecoveryLink  CredentialsTypeRecoveryLink is a special credential type linked to the link strategy (recovery flow).  It is not used within the credentials object itself.\ncode_recovery CredentialsTypeRecoveryCode',
      }),
    expires_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'ExpiresAt is the time (UTC) when the flow expires. If the user still wishes to log in,\na new flow has to be initiated.',
      }),
    id: z
      .uuid()
      .openapi({
        description:
          "ID represents the flow's unique ID. When performing the registration flow, this\nrepresents the id in the registration ui's query parameter: http://<selfservice.flows.registration.ui_url>/?flow=<id>",
      }),
    identity_schema: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'IdentitySchema optionally holds the ID of the identity schema that is used\nfor this flow. This value can be set by the user when creating the flow and\nshould be retained when the flow is saved or converted to another flow.',
      }),
    issued_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'IssuedAt is the time (UTC) when the flow occurred.' }),
    oauth2_login_challenge: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Ory OAuth 2.0 Login Challenge.\n\nThis value is set using the `login_challenge` query parameter of the registration and login endpoints.\nIf set will cooperate with Ory OAuth2 and OpenID to act as an OAuth2 server / OpenID Provider.',
      }),
    oauth2_login_request: OAuth2LoginRequestSchema.exactOptional(),
    organization_id: NullUUIDSchema.exactOptional(),
    request_url: z
      .string()
      .openapi({
        description:
          "RequestURL is the initial URL that was requested from Ory Kratos. It can be used\nto forward information contained in the URL's path or query for example.",
      }),
    return_to: z
      .string()
      .exactOptional()
      .openapi({ description: 'ReturnTo contains the requested return_to URL.' }),
    session_token_exchange_code: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'SessionTokenExchangeCode holds the secret code that the client can use to retrieve a session token after the flow has been completed.\nThis is only set if the client has requested a session token exchange code, and if the flow is of type "api",\nand only on creating the flow.',
      }),
    state: z
      .any()
      .openapi({
        description:
          'State represents the state of this request:\n\nchoose_method: ask the user to choose a method (e.g. registration with email)\nsent_email: the email has been sent to the user\npassed_challenge: the request was successful and the registration challenge was passed.',
      }),
    transient_payload: z
      .object({})
      .exactOptional()
      .openapi({
        description: 'TransientPayload is used to pass data from the registration to a webhook',
      }),
    type: SelfServiceFlowTypeSchema,
    ui: UiContainerSchema,
  })
  .openapi({ required: ['id', 'type', 'expires_at', 'issued_at', 'request_url', 'ui', 'state'] })
  .openapi('RegistrationFlow')

const RegistrationFlowStateSchema = z
  .enum(['choose_method', 'sent_email', 'passed_challenge'])
  .openapi({
    description:
      'The experimental state represents the state of a registration flow. This field is EXPERIMENTAL and subject to change!',
    title: 'Registration flow state (experimental)',
  })
  .openapi('RegistrationFlowState')

const SelfServiceFlowExpiredErrorSchema = z
  .object({
    error: GenericErrorSchema.exactOptional(),
    expired_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'When the flow has expired' }),
    since: DurationSchema.exactOptional(),
    use_flow_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'The flow ID that should be used for the new flow as it contains the correct messages.',
      }),
  })
  .openapi({ description: 'Is sent when a flow is expired', required: [] })
  .openapi('SelfServiceFlowExpiredError')

const SessionAuthenticationMethodSchema = z
  .object({
    aal: AuthenticatorAssuranceLevelSchema.exactOptional(),
    completed_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'When the authentication challenge was completed.' }),
    method: z
      .enum([
        'password',
        'oidc',
        'totp',
        'lookup_secret',
        'webauthn',
        'code',
        'passkey',
        'profile',
        'saml',
        'deviceauthn',
        'identifier_first',
        'link_recovery',
        'code_recovery',
      ])
      .exactOptional()
      .openapi({
        description:
          'The method used in this authenticator.\npassword CredentialsTypePassword\noidc CredentialsTypeOIDC\ntotp CredentialsTypeTOTP\nlookup_secret CredentialsTypeLookup\nwebauthn CredentialsTypeWebAuthn\ncode CredentialsTypeCodeAuth\npasskey CredentialsTypePasskey\nprofile CredentialsTypeProfile\nsaml CredentialsTypeSAML\ndeviceauthn CredentialsTypeDeviceAuthn\nidentifier_first CredentialsTypeIdentifierFirst\nlink_recovery CredentialsTypeRecoveryLink  CredentialsTypeRecoveryLink is a special credential type linked to the link strategy (recovery flow).  It is not used within the credentials object itself.\ncode_recovery CredentialsTypeRecoveryCode',
        'x-go-enum-desc':
          'password CredentialsTypePassword\noidc CredentialsTypeOIDC\ntotp CredentialsTypeTOTP\nlookup_secret CredentialsTypeLookup\nwebauthn CredentialsTypeWebAuthn\ncode CredentialsTypeCodeAuth\npasskey CredentialsTypePasskey\nprofile CredentialsTypeProfile\nsaml CredentialsTypeSAML\ndeviceauthn CredentialsTypeDeviceAuthn\nidentifier_first CredentialsTypeIdentifierFirst\nlink_recovery CredentialsTypeRecoveryLink  CredentialsTypeRecoveryLink is a special credential type linked to the link strategy (recovery flow).  It is not used within the credentials object itself.\ncode_recovery CredentialsTypeRecoveryCode',
      }),
    organization: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Organization id used for authentication' }),
    provider: z
      .string()
      .exactOptional()
      .openapi({ description: 'OIDC or SAML provider id used for authentication' }),
    upstream_acr: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'UpstreamACR is the `acr` claim reported by the upstream OIDC\nprovider, if any. Populated only for OIDC login methods when the\nupstream ID token contained an `acr` claim.',
      }),
    upstream_amr: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'UpstreamAMR is the `amr` claim reported by the upstream OIDC\nprovider, if any. Populated only for OIDC login methods when the\nupstream ID token contained an `amr` claim.',
      }),
  })
  .openapi({
    description: 'A singular authenticator used during authentication / login.',
    title: 'AuthenticationMethod identifies an authentication method',
    required: [],
  })
  .openapi('SessionAuthenticationMethod')

const SessionAuthenticationMethodsSchema = z
  .array(SessionAuthenticationMethodSchema)
  .openapi({
    description: 'A list of authenticators which were used to authenticate the session.',
    title: 'List of (Used) AuthenticationMethods',
  })
  .openapi('SessionAuthenticationMethods')

const SessionDeviceSchema = z
  .object({
    id: z.uuid().openapi({ description: 'Device record ID' }),
    ip_address: z.string().exactOptional().openapi({ description: 'IPAddress of the client' }),
    location: z
      .string()
      .exactOptional()
      .openapi({ description: 'Geo Location corresponding to the IP Address' }),
    user_agent: z.string().exactOptional().openapi({ description: 'UserAgent of the client' }),
  })
  .openapi({ description: 'Device corresponding to a Session', required: ['id'] })
  .openapi('SessionDevice')

const SessionSchema = z
  .object({
    active: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Active state. If false the session is no longer active.' }),
    authenticated_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The Session Authentication Timestamp\n\nWhen this session was authenticated at. If multi-factor authentication was used this\nis the time when the last factor was authenticated (e.g. the TOTP code challenge was completed).',
      }),
    authentication_methods: SessionAuthenticationMethodsSchema.exactOptional(),
    authenticator_assurance_level: AuthenticatorAssuranceLevelSchema.exactOptional(),
    devices: z
      .array(SessionDeviceSchema)
      .exactOptional()
      .openapi({ description: 'Devices has history of all endpoints where the session was used' }),
    expires_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The Session Expiry\n\nWhen this session expires at.' }),
    id: z.uuid().openapi({ description: 'Session ID' }),
    identity: IdentitySchema.exactOptional(),
    issued_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The Session Issuance Timestamp\n\nWhen this session was issued at. Usually equal or close to `authenticated_at`.',
      }),
    tokenized: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Tokenized is the tokenized (e.g. JWT) version of the session.\n\nIt is only set when the `tokenize_as` query parameter was set to a valid tokenize template during calls to `/session/whoami`.',
      }),
  })
  .openapi({ description: 'A Session', required: ['id'] })
  .openapi('Session')

const SettingsFlowSchema = z
  .object({
    active: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Active, if set, contains the registration method that is being used. It is initially\nnot set.',
      }),
    continue_with: z
      .array(ContinueWithSchema)
      .exactOptional()
      .openapi({
        description:
          "Contains a list of actions, that could follow this flow\n\nIt can, for example, contain a reference to the verification flow, created as part of the user's\nregistration.",
      }),
    expires_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'ExpiresAt is the time (UTC) when the flow expires. If the user still wishes to update the setting,\na new flow has to be initiated.',
      }),
    id: z
      .uuid()
      .openapi({
        description:
          "ID represents the flow's unique ID. When performing the settings flow, this\nrepresents the id in the settings ui's query parameter: http://<selfservice.flows.settings.ui_url>?flow=<id>",
      }),
    identity: IdentitySchema,
    issued_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'IssuedAt is the time (UTC) when the flow occurred.' }),
    organization_id: NullUUIDSchema.exactOptional(),
    request_url: z
      .string()
      .openapi({
        description:
          "RequestURL is the initial URL that was requested from Ory Kratos. It can be used\nto forward information contained in the URL's path or query for example.",
      }),
    return_to: z
      .string()
      .exactOptional()
      .openapi({ description: 'ReturnTo contains the requested return_to URL.' }),
    state: z
      .any()
      .openapi({
        description:
          'State represents the state of this flow. It knows two states:\n\nshow_form: No user data has been collected, or it is invalid, and thus the form should be shown.\nsuccess: Indicates that the settings flow has been updated successfully with the provided data.\nDone will stay true when repeatedly checking. If set to true, done will revert back to false only\nwhen a flow with invalid (e.g. "please use a valid phone number") data was sent.',
      }),
    transient_payload: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'TransientPayload is used to pass data from the settings flow to hooks and email templates',
      }),
    type: SelfServiceFlowTypeSchema,
    ui: UiContainerSchema,
  })
  .openapi({
    description:
      'This flow is used when an identity wants to update settings\n(e.g. profile data, passwords, ...) in a selfservice manner.\n\nWe recommend reading the [User Settings Documentation](../self-service/flows/user-settings)',
    required: ['id', 'type', 'expires_at', 'issued_at', 'request_url', 'ui', 'identity', 'state'],
    title: 'Flow represents a Settings Flow',
  })
  .openapi('SettingsFlow')

const SettingsFlowStateSchema = z
  .enum(['show_form', 'success'])
  .openapi({
    description:
      'The experimental state represents the state of a settings flow. This field is EXPERIMENTAL and subject to change!',
    title: 'Settings flow state (experimental)',
  })
  .openapi('SettingsFlowState')

const SuccessfulCodeExchangeResponseSchema = z
  .object({
    session: SessionSchema,
    session_token: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Session Token\n\nA session token is equivalent to a session cookie, but it can be sent in the HTTP Authorization\nHeader:\n\nAuthorization: bearer ${session-token}\n\nThe session token is only issued for API flows, not for Browser flows!',
      }),
  })
  .openapi({ description: 'The Response for Registration Flows via API', required: ['session'] })
  .openapi('SuccessfulCodeExchangeResponse')

const SuccessfulNativeLoginSchema = z
  .object({
    continue_with: z
      .array(ContinueWithSchema)
      .exactOptional()
      .openapi({
        description:
          "Contains a list of actions, that could follow this flow\n\nIt can, for example, this will contain a reference to the verification flow, created as part of the user's\nregistration or the token of the session.",
      }),
    session: SessionSchema,
    session_token: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Session Token\n\nA session token is equivalent to a session cookie, but it can be sent in the HTTP Authorization\nHeader:\n\nAuthorization: bearer ${session-token}\n\nThe session token is only issued for API flows, not for Browser flows!',
      }),
  })
  .openapi({ description: 'The Response for Login Flows via API', required: ['session'] })
  .openapi('SuccessfulNativeLogin')

const SuccessfulNativeRegistrationSchema = z
  .object({
    continue_with: z
      .array(ContinueWithSchema)
      .exactOptional()
      .openapi({
        description:
          "Contains a list of actions, that could follow this flow\n\nIt can, for example, this will contain a reference to the verification flow, created as part of the user's\nregistration or the token of the session.",
      }),
    identity: IdentitySchema,
    session: SessionSchema.exactOptional(),
    session_token: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Session Token\n\nThis field is only set when the session hook is configured as a post-registration hook.\n\nA session token is equivalent to a session cookie, but it can be sent in the HTTP Authorization\nHeader:\n\nAuthorization: bearer ${session-token}\n\nThe session token is only issued for API flows, not for Browser flows!',
      }),
  })
  .openapi({ description: 'The Response for Registration Flows via API', required: ['identity'] })
  .openapi('SuccessfulNativeRegistration')

const TokenPaginationSchema = z
  .object({
    page_size: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(1000n),
      )
      .default(250n)
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 1000,
        default: 250,
        description:
          'Items per page\n\nThis is the number of items per page to return.\nFor details on pagination please head over to the [pagination documentation](https://www.ory.com/docs/ecosystem/api-design#pagination).',
      }),
    page_token: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Next Page Token\n\nThe next page token.\nFor details on pagination please head over to the [pagination documentation](https://www.ory.com/docs/ecosystem/api-design#pagination).',
      }),
  })
  .openapi({ required: [] })
  .openapi('TokenPagination')

const TokenPaginationHeadersSchema = z
  .object({
    link: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The link header contains pagination links.\n\nFor details on pagination please head over to the [pagination documentation](https://www.ory.com/docs/ecosystem/api-design#pagination).\n\nin: header',
      }),
    'x-total-count': z
      .string()
      .exactOptional()
      .openapi({ description: 'The total number of clients.\n\nin: header' }),
  })
  .openapi({ required: [] })
  .openapi('TokenPaginationHeaders')

const UnexpectedErrorSchema = z.string().openapi('UnexpectedError')

const UpdateIdentityBodySchema = z
  .object({
    credentials: IdentityWithCredentialsSchema.exactOptional(),
    external_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ExternalID is an optional external ID of the identity. This is used to link\nthe identity to an external system. If set, the external ID must be unique\nacross all identities.',
      }),
    metadata_admin: z
      .any()
      .exactOptional()
      .openapi({
        description:
          'Store metadata about the user which is only accessible through admin APIs such as `GET /admin/identities/<id>`.',
      }),
    metadata_public: z
      .any()
      .exactOptional()
      .openapi({
        description:
          'Store metadata about the identity which the identity itself can see when calling for example the\nsession endpoint. Do not store sensitive information (e.g. credit score) about the identity in this field.',
      }),
    region: z
      .enum(['eu-central', 'asia-northeast', 'us-east', 'us-west', 'eu', 'asia', 'us', 'global'])
      .exactOptional()
      .openapi({
        description:
          'Region is the Ory Network region this identity is homed in. Optional;\nomit to leave the current region unchanged.\neu-central EUCentral\nasia-northeast AsiaNorthEast\nus-east USEast\nus-west USWest\neu EU\nasia Asia\nus US\nglobal Global',
        'x-go-enum-desc':
          'eu-central EUCentral\nasia-northeast AsiaNorthEast\nus-east USEast\nus-west USWest\neu EU\nasia Asia\nus US\nglobal Global',
      }),
    schema_id: z
      .string()
      .openapi({
        description:
          "SchemaID is the ID of the JSON Schema to be used for validating the identity's traits. If set\nwill update the Identity's SchemaID.",
      }),
    state: z
      .enum(['active', 'inactive'])
      .openapi({
        description: "State is the identity's state.\nactive StateActive\ninactive StateInactive",
        'x-go-enum-desc': 'active StateActive\ninactive StateInactive',
      }),
    traits: z
      .object({})
      .openapi({
        description:
          "Traits represent an identity's traits. The identity is able to create, modify, and delete traits\nin a self-service manner. The input will always be validated against the JSON Schema defined\nin `schema_id`.",
      }),
  })
  .openapi({ description: 'Update Identity Body', required: ['schema_id', 'traits', 'state'] })
  .openapi('UpdateIdentityBody')

const UpdateLoginFlowWithPasswordMethodSchema = z
  .object({
    csrf_token: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Sending the anti-csrf token is only required for browser login flows.',
      }),
    identifier: z
      .string()
      .openapi({
        description: 'Identifier is the email or username of the user trying to log in.',
      }),
    method: z
      .string()
      .openapi({
        description:
          'Method should be set to "password" when logging in using the identifier and password strategy.',
      }),
    password: z.string().openapi({ description: "The user's password." }),
    password_identifier: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifier is the email or username of the user trying to log in.\nThis field is deprecated!',
      }),
    transient_payload: z
      .object({})
      .exactOptional()
      .openapi({ description: 'Transient data to pass along to any webhooks' }),
  })
  .openapi({
    description: 'Update Login Flow with Password Method',
    required: ['method', 'password', 'identifier'],
  })
  .openapi('UpdateLoginFlowWithPasswordMethod')

const UpdateLoginFlowWithOidcMethodSchema = z
  .object({
    csrf_token: z.string().exactOptional().openapi({ description: 'The CSRF Token' }),
    id_token: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "IDToken is an optional id token provided by an OIDC provider\n\nIf submitted, it is verified using the OIDC provider's public key set and the claims are used to populate\nthe OIDC credentials of the identity.\nIf the OIDC provider does not store additional claims (such as name, etc.) in the IDToken itself, you can use\nthe `traits` field to populate the identity's traits. Note, that Apple only includes the users email in the IDToken.\n\nSupported providers are\nApple\nGoogle",
      }),
    id_token_nonce: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'IDTokenNonce is the nonce, used when generating the IDToken.\nIf the provider supports nonce validation, the nonce will be validated against this value and required.',
      }),
    method: z
      .string()
      .openapi({
        description:
          'Method to use\n\nThis field must be set to `oidc` when using the oidc method.',
      }),
    provider: z.string().openapi({ description: 'The provider to register with' }),
    traits: z
      .object({})
      .exactOptional()
      .openapi({
        description: 'The identity traits. This is a placeholder for the registration flow.',
      }),
    transient_payload: z
      .object({})
      .exactOptional()
      .openapi({ description: 'Transient data to pass along to any webhooks' }),
    upstream_parameters: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'UpstreamParameters are the parameters that are passed to the upstream identity provider.\n\nThese parameters are optional and depend on what the upstream identity provider supports.\nSupported parameters are:\n`hd` (string): The `hd` parameter limits the login/registration process to a Google Organization, e.g. `mycollege.edu`.\n`prompt` (string): The `prompt` specifies whether the Authorization Server prompts the End-User for reauthentication and consent, e.g. `select_account`.\n`acr_values` (string): The `acr_values` specifies the Authentication Context Class Reference values for the authorization request.',
      }),
  })
  .openapi({
    description: 'Update Login Flow with OpenID Connect Method',
    required: ['provider', 'method'],
  })
  .openapi('UpdateLoginFlowWithOidcMethod')

const UpdateLoginFlowWithSamlMethodSchema = z
  .object({
    csrf_token: z.string().exactOptional().openapi({ description: 'The CSRF Token' }),
    method: z
      .string()
      .openapi({
        description:
          'Method to use\n\nThis field must be set to `saml` when using the saml method.',
      }),
    provider: z.string().openapi({ description: 'The provider to register with' }),
    transient_payload: z
      .object({})
      .exactOptional()
      .openapi({ description: 'Transient data to pass along to any webhooks' }),
  })
  .openapi({ description: 'Update login flow using SAML', required: ['provider', 'method'] })
  .openapi('UpdateLoginFlowWithSamlMethod')

const UpdateLoginFlowWithTotpMethodSchema = z
  .object({
    csrf_token: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Sending the anti-csrf token is only required for browser login flows.',
      }),
    method: z
      .string()
      .openapi({
        description: 'Method should be set to "totp" when logging in using the TOTP strategy.',
      }),
    totp_code: z.string().openapi({ description: 'The TOTP code.' }),
    transient_payload: z
      .object({})
      .exactOptional()
      .openapi({ description: 'Transient data to pass along to any webhooks' }),
  })
  .openapi({ description: 'Update Login Flow with TOTP Method', required: ['method', 'totp_code'] })
  .openapi('UpdateLoginFlowWithTotpMethod')

const UpdateLoginFlowWithWebAuthnMethodSchema = z
  .object({
    csrf_token: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Sending the anti-csrf token is only required for browser login flows.',
      }),
    identifier: z
      .string()
      .openapi({
        description: 'Identifier is the email or username of the user trying to log in.',
      }),
    method: z
      .string()
      .openapi({
        description:
          'Method should be set to "webAuthn" when logging in using the WebAuthn strategy.',
      }),
    transient_payload: z
      .object({})
      .exactOptional()
      .openapi({ description: 'Transient data to pass along to any webhooks' }),
    webauthn_login: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Login a WebAuthn Security Key\n\nThis must contain the ID of the WebAuthN connection.',
      }),
  })
  .openapi({
    description: 'Update Login Flow with WebAuthn Method',
    required: ['identifier', 'method'],
  })
  .openapi('UpdateLoginFlowWithWebAuthnMethod')

const UpdateLoginFlowWithLookupSecretMethodSchema = z
  .object({
    csrf_token: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Sending the anti-csrf token is only required for browser login flows.',
      }),
    lookup_secret: z.string().openapi({ description: 'The lookup secret.' }),
    method: z
      .string()
      .openapi({
        description:
          'Method should be set to "lookup_secret" when logging in using the lookup_secret strategy.',
      }),
  })
  .openapi({
    description: 'Update Login Flow with Lookup Secret Method',
    required: ['method', 'lookup_secret'],
  })
  .openapi('UpdateLoginFlowWithLookupSecretMethod')

const UpdateLoginFlowWithCodeMethodSchema = z
  .object({
    address: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Address is the address to send the code to, in case that there are multiple addresses. This field\nis only used in two-factor flows and is ineffective for passwordless flows.',
      }),
    code: z
      .string()
      .exactOptional()
      .openapi({ description: 'Code is the 6 digits code sent to the user' }),
    csrf_token: z.string().openapi({ description: 'CSRFToken is the anti-CSRF token' }),
    identifier: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifier is the code identifier\nThe identifier requires that the user has already completed the registration or settings with code flow.',
      }),
    method: z
      .string()
      .openapi({
        description: 'Method should be set to "code" when logging in using the code strategy.',
      }),
    resend: z
      .string()
      .exactOptional()
      .openapi({ description: 'Resend is set when the user wants to resend the code' }),
    transient_payload: z
      .object({})
      .exactOptional()
      .openapi({ description: 'Transient data to pass along to any webhooks' }),
  })
  .openapi({
    description: 'Update Login flow using the code method',
    required: ['method', 'csrf_token'],
  })
  .openapi('UpdateLoginFlowWithCodeMethod')

const UpdateLoginFlowWithPasskeyMethodSchema = z
  .object({
    csrf_token: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Sending the anti-csrf token is only required for browser login flows.',
      }),
    method: z
      .string()
      .openapi({
        description:
          'Method should be set to "passkey" when logging in using the Passkey strategy.',
      }),
    passkey_login: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Login a WebAuthn Security Key\n\nThis must contain the ID of the WebAuthN connection.',
      }),
  })
  .openapi({ description: 'Update Login Flow with Passkey Method', required: ['method'] })
  .openapi('UpdateLoginFlowWithPasskeyMethod')

const UpdateLoginFlowWithIdentifierFirstMethodSchema = z
  .object({
    csrf_token: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Sending the anti-csrf token is only required for browser login flows.',
      }),
    identifier: z
      .string()
      .openapi({
        description: 'Identifier is the email or username of the user trying to log in.',
      }),
    method: z
      .string()
      .openapi({
        description:
          'Method should be set to "password" when logging in using the identifier and password strategy.',
      }),
    transient_payload: z
      .object({})
      .exactOptional()
      .openapi({ description: 'Transient data to pass along to any webhooks' }),
  })
  .openapi({
    description: 'Update Login Flow with Multi-Step Method',
    required: ['method', 'identifier'],
  })
  .openapi('UpdateLoginFlowWithIdentifierFirstMethod')

const UpdateLoginFlowBodySchema = z
  .xor([
    UpdateLoginFlowWithPasswordMethodSchema,
    UpdateLoginFlowWithOidcMethodSchema,
    UpdateLoginFlowWithSamlMethodSchema,
    UpdateLoginFlowWithTotpMethodSchema,
    UpdateLoginFlowWithWebAuthnMethodSchema,
    UpdateLoginFlowWithLookupSecretMethodSchema,
    UpdateLoginFlowWithCodeMethodSchema,
    UpdateLoginFlowWithPasskeyMethodSchema,
    UpdateLoginFlowWithIdentifierFirstMethodSchema,
  ])
  .openapi({
    discriminator: {
      mapping: {
        code: '#/components/schemas/updateLoginFlowWithCodeMethod',
        identifier_first: '#/components/schemas/updateLoginFlowWithIdentifierFirstMethod',
        lookup_secret: '#/components/schemas/updateLoginFlowWithLookupSecretMethod',
        oidc: '#/components/schemas/updateLoginFlowWithOidcMethod',
        passkey: '#/components/schemas/updateLoginFlowWithPasskeyMethod',
        password: '#/components/schemas/updateLoginFlowWithPasswordMethod',
        saml: '#/components/schemas/updateLoginFlowWithSamlMethod',
        totp: '#/components/schemas/updateLoginFlowWithTotpMethod',
        webauthn: '#/components/schemas/updateLoginFlowWithWebAuthnMethod',
      },
      propertyName: 'method',
    },
  })
  .openapi('UpdateLoginFlowBody')

const UpdateRecoveryFlowWithLinkMethodSchema = z
  .object({
    csrf_token: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Sending the anti-csrf token is only required for browser login flows.',
      }),
    email: z
      .string()
      .openapi({
        description:
          'Email to Recover\n\nNeeds to be set when initiating the flow. If the email is a registered\nrecovery email, a recovery link will be sent. If the email is not known,\nan email with details on what happened will be sent instead.\n\nformat: email',
      }),
    method: z
      .enum(['link', 'code'])
      .openapi({
        description:
          'Method is the method that should be used for this recovery flow\n\nAllowed values are `link` and `code`\nlink RecoveryStrategyLink\ncode RecoveryStrategyCode',
        'x-go-enum-desc': 'link RecoveryStrategyLink\ncode RecoveryStrategyCode',
      }),
    transient_payload: z
      .object({})
      .exactOptional()
      .openapi({ description: 'Transient data to pass along to any webhooks' }),
  })
  .openapi({ description: 'Update Recovery Flow with Link Method', required: ['email', 'method'] })
  .openapi('UpdateRecoveryFlowWithLinkMethod')

const UpdateRecoveryFlowWithCodeMethodSchema = z
  .object({
    code: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Code from the recovery email\n\nIf you want to submit a code, use this field, but make sure to _not_ include the email field, as well.',
      }),
    csrf_token: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Sending the anti-csrf token is only required for browser login flows.',
      }),
    email: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The email address of the account to recover\n\nIf the email belongs to a valid account, a recovery email will be sent.\n\nIf you want to notify the email address if the account does not exist, see\nthe [notify_unknown_recipients flag](https://www.ory.com/docs/kratos/self-service/flows/account-recovery-password-reset#attempted-recovery-notifications)\n\nIf a code was already sent, including this field in the payload will invalidate the sent code and re-send a new code.\n\nformat: email',
      }),
    method: z
      .enum(['link', 'code'])
      .openapi({
        description:
          'Method is the method that should be used for this recovery flow\n\nAllowed values are `link` and `code`.\nlink RecoveryStrategyLink\ncode RecoveryStrategyCode',
        'x-go-enum-desc': 'link RecoveryStrategyLink\ncode RecoveryStrategyCode',
      }),
    recovery_address: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A recovery address that is registered for the user.\nIt can be an email, a phone number (to receive the code via SMS), etc.\nUsed in RecoveryV2.',
      }),
    recovery_confirm_address: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If there are multiple recovery addresses registered for the user, and the initially provided address\nis different from the address chosen when the choice (of masked addresses) is presented, then we need to make sure\nthat the user actually knows the full address to avoid information exfiltration, so we ask for the full address.\nUsed in RecoveryV2.',
      }),
    recovery_select_address: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "If there are multiple addresses registered for the user, a choice is presented and this field\nstores the result of this choice.\nAddresses are 'masked' (never sent in full to the client and shown partially in the UI) since at this point in the recovery flow,\nthe user has not yet proven that it knows the full address and we want to avoid\ninformation exfiltration.\nSo for all intents and purposes, the value of this field should be treated as an opaque identifier.\nUsed in RecoveryV2.",
      }),
    screen: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Set to "previous" to go back in the flow, meaningfully.\nUsed in RecoveryV2.',
      }),
    transient_payload: z
      .object({})
      .exactOptional()
      .openapi({ description: 'Transient data to pass along to any webhooks' }),
  })
  .openapi({ description: 'Update Recovery Flow with Code Method', required: ['method'] })
  .openapi('UpdateRecoveryFlowWithCodeMethod')

const UpdateRecoveryFlowBodySchema = z
  .xor([UpdateRecoveryFlowWithLinkMethodSchema, UpdateRecoveryFlowWithCodeMethodSchema])
  .openapi({
    description: 'Update Recovery Flow Request Body',
    discriminator: {
      mapping: {
        code: '#/components/schemas/updateRecoveryFlowWithCodeMethod',
        link: '#/components/schemas/updateRecoveryFlowWithLinkMethod',
      },
      propertyName: 'method',
    },
  })
  .openapi('UpdateRecoveryFlowBody')

const UpdateRegistrationFlowWithPasswordMethodSchema = z
  .object({
    csrf_token: z.string().exactOptional().openapi({ description: 'The CSRF Token' }),
    method: z
      .string()
      .openapi({
        description:
          'Method to use\n\nThis field must be set to `password` when using the password method.',
      }),
    password: z.string().openapi({ description: 'Password to sign the user up with' }),
    traits: z.object({}).openapi({ description: "The identity's traits" }),
    transient_payload: z
      .object({})
      .exactOptional()
      .openapi({ description: 'Transient data to pass along to any webhooks' }),
  })
  .openapi({
    description: 'Update Registration Flow with Password Method',
    required: ['password', 'traits', 'method'],
  })
  .openapi('UpdateRegistrationFlowWithPasswordMethod')

const UpdateRegistrationFlowWithOidcMethodSchema = z
  .object({
    csrf_token: z.string().exactOptional().openapi({ description: 'The CSRF Token' }),
    id_token: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "IDToken is an optional id token provided by an OIDC provider\n\nIf submitted, it is verified using the OIDC provider's public key set and the claims are used to populate\nthe OIDC credentials of the identity.\nIf the OIDC provider does not store additional claims (such as name, etc.) in the IDToken itself, you can use\nthe `traits` field to populate the identity's traits. Note, that Apple only includes the users email in the IDToken.\n\nSupported providers are\nApple\nGoogle",
      }),
    id_token_nonce: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'IDTokenNonce is the nonce, used when generating the IDToken.\nIf the provider supports nonce validation, the nonce will be validated against this value and is required.',
      }),
    method: z
      .string()
      .openapi({
        description:
          'Method to use\n\nThis field must be set to `oidc` when using the oidc method.',
      }),
    provider: z.string().openapi({ description: 'The provider to register with' }),
    traits: z.object({}).exactOptional().openapi({ description: 'The identity traits' }),
    transient_payload: z
      .object({})
      .exactOptional()
      .openapi({ description: 'Transient data to pass along to any webhooks' }),
    upstream_parameters: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'UpstreamParameters are the parameters that are passed to the upstream identity provider.\n\nThese parameters are optional and depend on what the upstream identity provider supports.\nSupported parameters are:\n`hd` (string): The `hd` parameter limits the login/registration process to a Google Organization, e.g. `mycollege.edu`.\n`prompt` (string): The `prompt` specifies whether the Authorization Server prompts the End-User for reauthentication and consent, e.g. `select_account`.\n`acr_values` (string): The `acr_values` specifies the Authentication Context Class Reference values for the authorization request.',
      }),
  })
  .openapi({
    description: 'Update Registration Flow with OpenID Connect Method',
    required: ['provider', 'method'],
  })
  .openapi('UpdateRegistrationFlowWithOidcMethod')

const UpdateRegistrationFlowWithSamlMethodSchema = z
  .object({
    csrf_token: z.string().exactOptional().openapi({ description: 'The CSRF Token' }),
    method: z
      .string()
      .openapi({
        description:
          'Method to use\n\nThis field must be set to `saml` when using the saml method.',
      }),
    provider: z.string().openapi({ description: 'The provider to register with' }),
    traits: z.object({}).exactOptional().openapi({ description: 'The identity traits' }),
    transient_payload: z
      .object({})
      .exactOptional()
      .openapi({ description: 'Transient data to pass along to any webhooks' }),
  })
  .openapi({ description: 'Update registration flow using SAML', required: ['provider', 'method'] })
  .openapi('UpdateRegistrationFlowWithSamlMethod')

const UpdateRegistrationFlowWithWebAuthnMethodSchema = z
  .object({
    csrf_token: z
      .string()
      .exactOptional()
      .openapi({ description: 'CSRFToken is the anti-CSRF token' }),
    method: z
      .string()
      .openapi({
        description:
          'Method\n\nShould be set to "webauthn" when trying to add, update, or remove a webAuthn pairing.',
      }),
    traits: z.object({}).openapi({ description: "The identity's traits" }),
    transient_payload: z
      .object({})
      .exactOptional()
      .openapi({ description: 'Transient data to pass along to any webhooks' }),
    webauthn_register: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Register a WebAuthn Security Key\n\nIt is expected that the JSON returned by the WebAuthn registration process\nis included here.',
      }),
    webauthn_register_displayname: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the WebAuthn Security Key to be Added\n\nA human-readable name for the security key which will be added.',
      }),
  })
  .openapi({
    description: 'Update Registration Flow with WebAuthn Method',
    required: ['traits', 'method'],
  })
  .openapi('UpdateRegistrationFlowWithWebAuthnMethod')

const UpdateRegistrationFlowWithCodeMethodSchema = z
  .object({
    code: z.string().exactOptional().openapi({ description: 'The OTP Code sent to the user' }),
    csrf_token: z.string().exactOptional().openapi({ description: 'The CSRF Token' }),
    method: z
      .string()
      .openapi({
        description:
          'Method to use\n\nThis field must be set to `code` when using the code method.',
      }),
    resend: z
      .string()
      .exactOptional()
      .openapi({ description: 'Resend restarts the flow with a new code' }),
    traits: z.object({}).openapi({ description: "The identity's traits" }),
    transient_payload: z
      .object({})
      .exactOptional()
      .openapi({ description: 'Transient data to pass along to any webhooks' }),
  })
  .openapi({
    description: 'Update Registration Flow with Code Method',
    required: ['traits', 'method'],
  })
  .openapi('UpdateRegistrationFlowWithCodeMethod')

const UpdateRegistrationFlowWithPasskeyMethodSchema = z
  .object({
    csrf_token: z
      .string()
      .exactOptional()
      .openapi({ description: 'CSRFToken is the anti-CSRF token' }),
    method: z
      .string()
      .openapi({
        description:
          'Method\n\nShould be set to "passkey" when trying to add, update, or remove a Passkey.',
      }),
    passkey_register: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Register a WebAuthn Security Key\n\nIt is expected that the JSON returned by the WebAuthn registration process\nis included here.',
      }),
    traits: z.object({}).openapi({ description: "The identity's traits" }),
    transient_payload: z
      .object({})
      .exactOptional()
      .openapi({ description: 'Transient data to pass along to any webhooks' }),
  })
  .openapi({
    description: 'Update Registration Flow with Passkey Method',
    required: ['traits', 'method'],
  })
  .openapi('UpdateRegistrationFlowWithPasskeyMethod')

const UpdateRegistrationFlowWithProfileMethodSchema = z
  .object({
    csrf_token: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Anti-CSRF Token\n\nThis token is only required when performing browser flows.',
      }),
    method: z
      .string()
      .openapi({
        description: 'Method\n\nShould be set to profile when trying to update a profile.',
      }),
    screen: z
      .enum(['credential-selection', 'previous'])
      .exactOptional()
      .openapi({
        description:
          'Screen requests navigation to a previous screen.\n\nThis must be set to credential-selection to go back to the credential\nselection screen.\ncredential-selection RegistrationScreenCredentialSelection nolint:gosec // not a credential\nprevious RegistrationScreenPrevious',
        'x-go-enum-desc':
          'credential-selection RegistrationScreenCredentialSelection nolint:gosec // not a credential\nprevious RegistrationScreenPrevious',
      }),
    traits: z.object({}).openapi({ description: "Traits\n\nThe identity's traits." }),
    transient_payload: z
      .object({})
      .exactOptional()
      .openapi({ description: 'Transient data to pass along to any webhooks' }),
  })
  .openapi({
    description: 'Update Registration Flow with Profile Method',
    required: ['traits', 'method'],
  })
  .openapi('UpdateRegistrationFlowWithProfileMethod')

const UpdateRegistrationFlowBodySchema = z
  .xor([
    UpdateRegistrationFlowWithPasswordMethodSchema,
    UpdateRegistrationFlowWithOidcMethodSchema,
    UpdateRegistrationFlowWithSamlMethodSchema,
    UpdateRegistrationFlowWithWebAuthnMethodSchema,
    UpdateRegistrationFlowWithCodeMethodSchema,
    UpdateRegistrationFlowWithPasskeyMethodSchema,
    UpdateRegistrationFlowWithProfileMethodSchema,
  ])
  .openapi({
    description: 'Update Registration Request Body',
    discriminator: {
      mapping: {
        code: '#/components/schemas/updateRegistrationFlowWithCodeMethod',
        oidc: '#/components/schemas/updateRegistrationFlowWithOidcMethod',
        passkey: '#/components/schemas/updateRegistrationFlowWithPasskeyMethod',
        password: '#/components/schemas/updateRegistrationFlowWithPasswordMethod',
        profile: '#/components/schemas/updateRegistrationFlowWithProfileMethod',
        saml: '#/components/schemas/updateRegistrationFlowWithSamlMethod',
        webauthn: '#/components/schemas/updateRegistrationFlowWithWebAuthnMethod',
      },
      propertyName: 'method',
    },
  })
  .openapi('UpdateRegistrationFlowBody')

const UpdateSettingsFlowWithPasswordMethodSchema = z
  .object({
    csrf_token: z
      .string()
      .exactOptional()
      .openapi({ description: 'CSRFToken is the anti-CSRF token' }),
    method: z
      .string()
      .openapi({
        description: 'Method\n\nShould be set to password when trying to update a password.',
      }),
    password: z.string().openapi({ description: 'Password is the updated password' }),
    transient_payload: z
      .object({})
      .exactOptional()
      .openapi({ description: 'Transient data to pass along to any webhooks' }),
  })
  .openapi({
    description: 'Update Settings Flow with Password Method',
    required: ['password', 'method'],
  })
  .openapi('UpdateSettingsFlowWithPasswordMethod')

const UpdateSettingsFlowWithProfileMethodSchema = z
  .object({
    csrf_token: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Anti-CSRF Token\n\nThis token is only required when performing browser flows.',
      }),
    method: z
      .string()
      .openapi({
        description: 'Method\n\nShould be set to profile when trying to update a profile.',
      }),
    traits: z.object({}).openapi({ description: "Traits\n\nThe identity's traits." }),
    transient_payload: z
      .object({})
      .exactOptional()
      .openapi({ description: 'Transient data to pass along to any webhooks' }),
  })
  .openapi({
    description: 'Update Settings Flow with Profile Method',
    required: ['traits', 'method'],
  })
  .openapi('UpdateSettingsFlowWithProfileMethod')

const UpdateSettingsFlowWithOidcMethodSchema = z
  .object({
    flow: z
      .string()
      .exactOptional()
      .openapi({ description: "Flow ID is the flow's ID.\n\nin: query" }),
    link: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Link this provider\n\nEither this or `unlink` must be set.\n\ntype: string\nin: body',
      }),
    method: z
      .string()
      .openapi({
        description: 'Method\n\nShould be set to profile when trying to update a profile.',
      }),
    traits: z
      .object({})
      .exactOptional()
      .openapi({ description: "The identity's traits\n\nin: body" }),
    transient_payload: z
      .object({})
      .exactOptional()
      .openapi({ description: 'Transient data to pass along to any webhooks' }),
    unlink: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unlink this provider\n\nEither this or `link` must be set.\n\ntype: string\nin: body',
      }),
    upstream_parameters: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'UpstreamParameters are the parameters that are passed to the upstream identity provider.\n\nThese parameters are optional and depend on what the upstream identity provider supports.\nSupported parameters are:\n`hd` (string): The `hd` parameter limits the login/registration process to a Google Organization, e.g. `mycollege.edu`.\n`prompt` (string): The `prompt` specifies whether the Authorization Server prompts the End-User for reauthentication and consent, e.g. `select_account`.\n`acr_values` (string): The `acr_values` specifies the Authentication Context Class Reference values for the authorization request.',
      }),
  })
  .openapi({ description: 'Update Settings Flow with OpenID Connect Method', required: ['method'] })
  .openapi('UpdateSettingsFlowWithOidcMethod')

const UpdateSettingsFlowWithSamlMethodSchema = z
  .object({
    csrf_token: z.string().exactOptional().openapi({ description: 'The CSRF Token' }),
    flow: z
      .string()
      .exactOptional()
      .openapi({ description: "Flow ID is the flow's ID.\n\nin: query" }),
    link: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Link this provider\n\nEither this or `unlink` must be set.\n\ntype: string\nin: body',
      }),
    method: z
      .string()
      .openapi({ description: 'Method\n\nShould be set to saml when trying to update a profile.' }),
    traits: z
      .object({})
      .exactOptional()
      .openapi({ description: "The identity's traits\n\nin: body" }),
    transient_payload: z
      .object({})
      .exactOptional()
      .openapi({ description: 'Transient data to pass along to any webhooks' }),
    unlink: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unlink this provider\n\nEither this or `link` must be set.\n\ntype: string\nin: body',
      }),
  })
  .openapi({ description: 'Update settings flow using SAML', required: ['method'] })
  .openapi('UpdateSettingsFlowWithSamlMethod')

const UpdateSettingsFlowWithTotpMethodSchema = z
  .object({
    csrf_token: z
      .string()
      .exactOptional()
      .openapi({ description: 'CSRFToken is the anti-CSRF token' }),
    method: z
      .string()
      .openapi({
        description:
          'Method\n\nShould be set to "totp" when trying to add, update, or remove a totp pairing.',
      }),
    totp_code: z
      .string()
      .exactOptional()
      .openapi({ description: 'ValidationTOTP must contain a valid TOTP based on the' }),
    totp_unlink: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'UnlinkTOTP if true will remove the TOTP pairing,\neffectively removing the credential. This can be used\nto set up a new TOTP device.',
      }),
    transient_payload: z
      .object({})
      .exactOptional()
      .openapi({ description: 'Transient data to pass along to any webhooks' }),
  })
  .openapi({ description: 'Update Settings Flow with TOTP Method', required: ['method'] })
  .openapi('UpdateSettingsFlowWithTotpMethod')

const UpdateSettingsFlowWithWebAuthnMethodSchema = z
  .object({
    csrf_token: z
      .string()
      .exactOptional()
      .openapi({ description: 'CSRFToken is the anti-CSRF token' }),
    method: z
      .string()
      .openapi({
        description:
          'Method\n\nShould be set to "webauthn" when trying to add, update, or remove a webAuthn pairing.',
      }),
    transient_payload: z
      .object({})
      .exactOptional()
      .openapi({ description: 'Transient data to pass along to any webhooks' }),
    webauthn_register: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Register a WebAuthn Security Key\n\nIt is expected that the JSON returned by the WebAuthn registration process\nis included here.',
      }),
    webauthn_register_displayname: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the WebAuthn Security Key to be Added\n\nA human-readable name for the security key which will be added.',
      }),
    webauthn_remove: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Remove a WebAuthn Security Key\n\nThis must contain the ID of the WebAuthN connection.',
      }),
  })
  .openapi({ description: 'Update Settings Flow with WebAuthn Method', required: ['method'] })
  .openapi('UpdateSettingsFlowWithWebAuthnMethod')

const UpdateSettingsFlowWithLookupMethodSchema = z
  .object({
    csrf_token: z
      .string()
      .exactOptional()
      .openapi({ description: 'CSRFToken is the anti-CSRF token' }),
    lookup_secret_confirm: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If set to true will save the regenerated lookup secrets' }),
    lookup_secret_disable: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Disables this method if true.' }),
    lookup_secret_regenerate: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If set to true will regenerate the lookup secrets' }),
    lookup_secret_reveal: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If set to true will reveal the lookup secrets' }),
    method: z
      .string()
      .openapi({
        description:
          'Method\n\nShould be set to "lookup" when trying to add, update, or remove a lookup pairing.',
      }),
    transient_payload: z
      .object({})
      .exactOptional()
      .openapi({ description: 'Transient data to pass along to any webhooks' }),
  })
  .openapi({ description: 'Update Settings Flow with Lookup Method', required: ['method'] })
  .openapi('UpdateSettingsFlowWithLookupMethod')

const UpdateSettingsFlowWithPasskeyMethodSchema = z
  .object({
    csrf_token: z
      .string()
      .exactOptional()
      .openapi({ description: 'CSRFToken is the anti-CSRF token' }),
    method: z
      .string()
      .openapi({
        description:
          'Method\n\nShould be set to "passkey" when trying to add, update, or remove a webAuthn pairing.',
      }),
    passkey_remove: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Remove a WebAuthn Security Key\n\nThis must contain the ID of the WebAuthN connection.',
      }),
    passkey_settings_register: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Register a WebAuthn Security Key\n\nIt is expected that the JSON returned by the WebAuthn registration process\nis included here.',
      }),
  })
  .openapi({ description: 'Update Settings Flow with Passkey Method', required: ['method'] })
  .openapi('UpdateSettingsFlowWithPasskeyMethod')

const UpdateSettingsFlowBodySchema = z
  .xor([
    UpdateSettingsFlowWithPasswordMethodSchema,
    UpdateSettingsFlowWithProfileMethodSchema,
    UpdateSettingsFlowWithOidcMethodSchema,
    UpdateSettingsFlowWithSamlMethodSchema,
    UpdateSettingsFlowWithTotpMethodSchema,
    UpdateSettingsFlowWithWebAuthnMethodSchema,
    UpdateSettingsFlowWithLookupMethodSchema,
    UpdateSettingsFlowWithPasskeyMethodSchema,
  ])
  .openapi({
    description: 'Update Settings Flow Request Body',
    discriminator: {
      mapping: {
        lookup_secret: '#/components/schemas/updateSettingsFlowWithLookupMethod',
        oidc: '#/components/schemas/updateSettingsFlowWithOidcMethod',
        passkey: '#/components/schemas/updateSettingsFlowWithPasskeyMethod',
        password: '#/components/schemas/updateSettingsFlowWithPasswordMethod',
        profile: '#/components/schemas/updateSettingsFlowWithProfileMethod',
        saml: '#/components/schemas/updateSettingsFlowWithSamlMethod',
        totp: '#/components/schemas/updateSettingsFlowWithTotpMethod',
        webauthn: '#/components/schemas/updateSettingsFlowWithWebAuthnMethod',
      },
      propertyName: 'method',
    },
  })
  .openapi('UpdateSettingsFlowBody')

const UpdateVerificationFlowWithLinkMethodSchema = z
  .object({
    csrf_token: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Sending the anti-csrf token is only required for browser login flows.',
      }),
    email: z
      .string()
      .openapi({
        description:
          'Email to Verify\n\nNeeds to be set when initiating the flow. If the email is a registered\nverification email, a verification link will be sent. If the email is not known,\na email with details on what happened will be sent instead.\n\nformat: email',
      }),
    method: z
      .enum(['link', 'code'])
      .openapi({
        description:
          'Method is the method that should be used for this verification flow\n\nAllowed values are `link` and `code`\nlink VerificationStrategyLink\ncode VerificationStrategyCode',
        'x-go-enum-desc': 'link VerificationStrategyLink\ncode VerificationStrategyCode',
      }),
    transient_payload: z
      .object({})
      .exactOptional()
      .openapi({ description: 'Transient data to pass along to any webhooks' }),
  })
  .openapi({
    description: 'Update Verification Flow with Link Method',
    required: ['email', 'method'],
  })
  .openapi('UpdateVerificationFlowWithLinkMethod')

const UpdateVerificationFlowWithCodeMethodSchema = z
  .object({
    code: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Code from the recovery email\n\nIf you want to submit a code, use this field, but make sure to _not_ include the email field, as well.',
      }),
    csrf_token: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Sending the anti-csrf token is only required for browser login flows.',
      }),
    email: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The email address or phone number to verify\n\nIf the provided address belongs to a valid account, a verification email or SMS will be sent.\n\nIf you want to notify the email address if the account does not exist, see\nthe [notify_unknown_recipients flag](https://www.ory.com/docs/kratos/self-service/flows/verify-email-account-activation#attempted-verification-notifications)\n\nIf a code was already sent, including this field in the payload will invalidate the sent code and re-send a new code.',
      }),
    method: z
      .enum(['link', 'code'])
      .openapi({
        description:
          'Method is the method that should be used for this verification flow\n\nAllowed values are `link` and `code`.\nlink VerificationStrategyLink\ncode VerificationStrategyCode',
        'x-go-enum-desc': 'link VerificationStrategyLink\ncode VerificationStrategyCode',
      }),
    transient_payload: z
      .object({})
      .exactOptional()
      .openapi({ description: 'Transient data to pass along to any webhooks' }),
  })
  .openapi({ required: ['method'] })
  .openapi('UpdateVerificationFlowWithCodeMethod')

const UpdateVerificationFlowBodySchema = z
  .xor([UpdateVerificationFlowWithLinkMethodSchema, UpdateVerificationFlowWithCodeMethodSchema])
  .openapi({
    description: 'Update Verification Flow Request Body',
    discriminator: {
      mapping: {
        code: '#/components/schemas/updateVerificationFlowWithCodeMethod',
        link: '#/components/schemas/updateVerificationFlowWithLinkMethod',
      },
      propertyName: 'method',
    },
  })
  .openapi('UpdateVerificationFlowBody')

const VerificationFlowSchema = z
  .object({
    active: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Active, if set, contains the registration method that is being used. It is initially\nnot set.',
      }),
    expires_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'ExpiresAt is the time (UTC) when the request expires. If the user still wishes to verify the address,\na new request has to be initiated.',
      }),
    id: z
      .uuid()
      .openapi({
        description:
          "ID represents the request's unique ID. When performing the verification flow, this\nrepresents the id in the verify ui's query parameter: http://<selfservice.flows.verification.ui_url>?request=<id>\n\ntype: string\nformat: uuid",
      }),
    issued_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'IssuedAt is the time (UTC) when the request occurred.' }),
    request_url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "RequestURL is the initial URL that was requested from Ory Kratos. It can be used\nto forward information contained in the URL's path or query for example.",
      }),
    return_to: z
      .string()
      .exactOptional()
      .openapi({ description: 'ReturnTo contains the requested return_to URL.' }),
    state: z
      .any()
      .openapi({
        description:
          'State represents the state of this request:\n\nchoose_method: ask the user to choose a method (e.g. verify your email)\nsent_email: the email has been sent to the user\npassed_challenge: the request was successful and the verification challenge was passed.',
      }),
    transient_payload: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'TransientPayload is used to pass data from the verification flow to hooks and email templates',
      }),
    type: SelfServiceFlowTypeSchema,
    ui: UiContainerSchema,
  })
  .openapi({
    description:
      'Used to verify an out-of-band communication\nchannel such as an email address or a phone number.\n\nFor more information head over to: https://www.ory.com/docs/kratos/self-service/flows/verify-email-account-activation',
    required: ['id', 'type', 'ui', 'state'],
    title: 'A Verification Flow',
  })
  .openapi('VerificationFlow')

const VerificationFlowStateSchema = z
  .enum(['choose_method', 'sent_email', 'passed_challenge'])
  .openapi({
    description:
      'The experimental state represents the state of a verification flow. This field is EXPERIMENTAL and subject to change!',
    title: 'Verification flow state (experimental)',
  })
  .openapi('VerificationFlowState')

const VersionSchema = z
  .object({
    version: z
      .string()
      .exactOptional()
      .openapi({ description: "Version is the service's version." }),
  })
  .openapi({ required: [] })
  .openapi('Version')

const WebAuthnJavaScriptSchema = z.string().openapi('WebAuthnJavaScript')

const EmptyResponseResponse = {
  description:
    'Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is typically 204.',
}

const IdentitySchemasResponse = {
  description: 'List Identity JSON Schemas Response',
  content: { 'application/json': { schema: IdentitySchemasSchema } },
}

const ListCourierMessagesResponse = {
  description: 'Paginated Courier Message List Response',
  content: { 'application/json': { schema: z.array(MessageSchema) } },
}

const ListIdentitiesResponse = {
  description: 'Paginated Identity List Response',
  content: { 'application/json': { schema: z.array(IdentitySchema) } },
}

const ListIdentitySessionsResponse = {
  description: 'List Identity Sessions Response',
  content: { 'application/json': { schema: z.array(SessionSchema) } },
}

const ListMySessionsResponse = {
  description: 'List My Session Response',
  content: { 'application/json': { schema: z.array(SessionSchema) } },
}

const ListSessionsResponse = {
  description:
    'Session List Response\n\nThe response given when listing sessions in an administrative context.',
  content: { 'application/json': { schema: z.array(SessionSchema) } },
}

const OryAccessTokenSecurityScheme = { in: 'header', name: 'Authorization', type: 'apiKey' }

export const getWellKnownChangePasswordRoute = createRoute({
  method: 'get',
  path: '/.well-known/change-password',
  tags: ['frontend'],
  summary: 'Change Password URL',
  description:
    'This endpoint implements the W3C "change password URL" well-known location by\nredirecting the browser to the configured settings UI. Password managers follow\nthis redirect to take users straight to the page where they can change their\npassword.',
  operationId: 'getWellKnownChangePassword',
  responses: {
    303: EmptyResponseResponse,
    default: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
  },
})

export const getWellKnownOryWebauthnJsRoute = createRoute({
  method: 'get',
  path: '/.well-known/ory/webauthn.js',
  tags: ['frontend'],
  summary: 'Get WebAuthn JavaScript',
  description:
    'This endpoint provides JavaScript which is needed in order to perform WebAuthn login and registration.\n\nIf you are building a JavaScript Browser App (e.g. in ReactJS or AngularJS) you will need to load this file:\n\n```html\n<script src="https://public-kratos.example.org/.well-known/ory/webauthn.js" type="script" async />\n```\n\nMore information can be found at [Ory Kratos User Login](https://www.ory.com/docs/kratos/self-service/flows/user-login) and [User Registration Documentation](https://www.ory.com/docs/kratos/self-service/flows/user-registration).',
  operationId: 'getWebAuthnJavaScript',
  responses: {
    200: {
      description: 'webAuthnJavaScript',
      content: { 'application/json': { schema: WebAuthnJavaScriptSchema } },
    },
  },
})

export const getAdminCourierMessagesRoute = createRoute({
  method: 'get',
  path: '/admin/courier/messages',
  tags: ['courier'],
  summary: 'List Messages',
  description: 'Lists all messages by given status and recipient.',
  operationId: 'listCourierMessages',
  request: {
    query: z.object({
      page_size: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n).max(1000n))
        .default(250n)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Items per Page\n\nThis is the number of items per page to return.\nFor details on pagination please head over to the [pagination documentation](https://www.ory.com/docs/ecosystem/api-design#pagination).',
            in: 'query',
            name: 'page_size',
            schema: { default: 250, format: 'int64', maximum: 1000, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      page_token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Next Page Token\n\nThe next page token.\nFor details on pagination please head over to the [pagination documentation](https://www.ory.com/docs/ecosystem/api-design#pagination).',
            in: 'query',
            name: 'page_token',
            schema: { type: 'string' },
            required: false,
          },
        }),
      status: CourierMessageStatusSchema.openapi({
        param: {
          description:
            "Status filters out messages based on status.\nIf no value is provided, it doesn't take effect on filter.",
          in: 'query',
          name: 'status',
          schema: { $ref: '#/components/schemas/courierMessageStatus' },
          required: false,
        },
      }).exactOptional(),
      recipient: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Recipient filters out messages based on recipient.\nIf no value is provided, it doesn't take effect on filter.",
            in: 'query',
            name: 'recipient',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: ListCourierMessagesResponse,
    400: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    default: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
  },
  security: [{ oryAccessToken: [] }],
})

export const getAdminCourierMessagesIdRoute = createRoute({
  method: 'get',
  path: '/admin/courier/messages/{id}',
  tags: ['courier'],
  summary: 'Get a Message',
  description: 'Gets a specific messages by the given ID.',
  operationId: 'getCourierMessage',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'MessageID is the ID of the message.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'message', content: { 'application/json': { schema: MessageSchema } } },
    400: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    default: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
  },
  security: [{ oryAccessToken: [] }],
})

export const getAdminIdentitiesRoute = createRoute({
  method: 'get',
  path: '/admin/identities',
  tags: ['identity'],
  summary: 'List Identities',
  description:
    'Lists all [identities](https://www.ory.com/docs/kratos/concepts/identity-user-model) in the system. Note: filters cannot be combined.',
  operationId: 'listIdentities',
  request: {
    query: z.object({
      per_page: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n).max(1000n))
        .default(250n)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Deprecated Items per Page\n\nDEPRECATED: Please use `page_token` instead. This parameter will be removed in the future.\n\nThis is the number of items per page.',
            in: 'query',
            name: 'per_page',
            schema: { default: 250, format: 'int64', maximum: 1000, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      page: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description:
              'Deprecated Pagination Page\n\nDEPRECATED: Please use `page_token` instead. This parameter will be removed in the future.\n\nThis value is currently an integer, but it is not sequential. The value is not the page number, but a\nreference. The next page can be any number and some numbers might return an empty list.\n\nFor example, page 2 might not follow after page 1. And even if page 3 and 5 exist, but page 4 might not exist.\nThe first page can be retrieved by omitting this parameter. Following page pointers will be returned in the\n`Link` header.',
            in: 'query',
            name: 'page',
            schema: { format: 'int64', type: 'integer' },
            required: false,
          },
        }),
      page_size: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n).max(500n))
        .default(250n)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Page Size\n\nThis is the number of items per page to return. For details on pagination please head over to the\n[pagination documentation](https://www.ory.com/docs/ecosystem/api-design#pagination).',
            in: 'query',
            name: 'page_size',
            schema: { default: 250, format: 'int64', maximum: 500, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      page_token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Next Page Token\n\nThe next page token. For details on pagination please head over to the\n[pagination documentation](https://www.ory.com/docs/ecosystem/api-design#pagination).',
            in: 'query',
            name: 'page_token',
            schema: { type: 'string' },
            required: false,
          },
        }),
      consistency: z
        .enum(['', 'strong', 'eventual'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Read Consistency Level (preview)\n\nThe read consistency level determines the consistency guarantee for reads:\n\nstrong (slow): The read is guaranteed to return the most recent data committed at the start of the read.\neventual (very fast): The result will return data that is about 4.8 seconds old.\n\nThe default consistency guarantee can be changed in the Ory Network Console or using the Ory CLI with\n`ory patch project --replace \'/previews/default_read_consistency_level="strong"\'`.\n\nSetting the default consistency level to `eventual` may cause regressions in the future as we add consistency\ncontrols to more APIs. Currently, the following APIs will be affected by this setting:\n\n`GET /admin/identities`\n\nThis feature is in preview and only available in Ory Network.\n ConsistencyLevelUnset  ConsistencyLevelUnset is the unset / default consistency level.\nstrong ConsistencyLevelStrong  ConsistencyLevelStrong is the strong consistency level.\neventual ConsistencyLevelEventual  ConsistencyLevelEventual is the eventual consistency level using follower read timestamps.',
            in: 'query',
            name: 'consistency',
            schema: { enum: ['', 'strong', 'eventual'], type: 'string' },
            'x-go-enum-desc':
              ' ConsistencyLevelUnset  ConsistencyLevelUnset is the unset / default consistency level.\nstrong ConsistencyLevelStrong  ConsistencyLevelStrong is the strong consistency level.\neventual ConsistencyLevelEventual  ConsistencyLevelEventual is the eventual consistency level using follower read timestamps.',
            required: false,
          },
        }),
      ids: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Retrieve multiple identities by their IDs.\n\nThis parameter has the following limitations:\n\nDuplicate or non-existent IDs are ignored.\nThe order of returned IDs may be different from the request.\nThis filter does not support pagination. You must implement your own pagination as the maximum number of items returned by this endpoint may not exceed a certain threshold (currently 500).',
            in: 'query',
            name: 'ids',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      credentials_identifier: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'CredentialsIdentifier is the identifier (username, email) of the credentials to look up using exact match.\nOnly one of CredentialsIdentifier and CredentialsIdentifierSimilar can be used.',
            in: 'query',
            name: 'credentials_identifier',
            schema: { type: 'string' },
            required: false,
          },
        }),
      preview_credentials_identifier_similar: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'This is an EXPERIMENTAL parameter that WILL CHANGE. Do NOT rely on consistent, deterministic behavior.\nTHIS PARAMETER WILL BE REMOVED IN AN UPCOMING RELEASE WITHOUT ANY MIGRATION PATH.\n\nCredentialsIdentifierSimilar is the (partial) identifier (username, email) of the credentials to look up using similarity search.\nOnly one of CredentialsIdentifier and CredentialsIdentifierSimilar can be used.',
            in: 'query',
            name: 'preview_credentials_identifier_similar',
            schema: { type: 'string' },
            required: false,
          },
        }),
      include_credential: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Include Credentials in Response\n\nInclude any credential, for example `password` or `oidc`, in the response. When set to `oidc`, This will return\nthe initial OAuth 2.0 Access Token, OAuth 2.0 Refresh Token, and the OpenID Connect ID Token if available.',
            in: 'query',
            name: 'include_credential',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      organization_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'List identities that belong to a specific organization.',
            in: 'query',
            name: 'organization_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: ListIdentitiesResponse,
    default: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
  },
  security: [{ oryAccessToken: [] }],
})

export const postAdminIdentitiesRoute = createRoute({
  method: 'post',
  path: '/admin/identities',
  tags: ['identity'],
  summary: 'Create an Identity',
  description:
    'Create an [identity](https://www.ory.com/docs/kratos/concepts/identity-user-model).  This endpoint can also be used to\n[import credentials](https://www.ory.com/docs/kratos/manage-identities/import-user-accounts-identities)\nfor instance passwords, social sign in configurations, or multifactor methods.',
  operationId: 'createIdentity',
  request: { body: { content: { 'application/json': { schema: CreateIdentityBodySchema } } } },
  responses: {
    201: { description: 'identity', content: { 'application/json': { schema: IdentitySchema } } },
    400: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    409: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    default: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
  },
  security: [{ oryAccessToken: [] }],
})

export const patchAdminIdentitiesRoute = createRoute({
  method: 'patch',
  path: '/admin/identities',
  tags: ['identity'],
  summary: 'Create multiple identities',
  description:
    'Creates multiple [identities](https://www.ory.com/docs/kratos/concepts/identity-user-model).\n\nYou can also use this endpoint to [import credentials](https://www.ory.com/docs/kratos/manage-identities/import-user-accounts-identities),\nincluding passwords, social sign-in settings, and multi-factor authentication methods.\n\nIf the patch includes hashed passwords you can import up to 1,000 identities per request.\n\nIf the patch includes at least one plaintext password you can import up to 200 identities per request.\n\nAvoid importing large batches with plaintext passwords. They can cause timeouts as the passwords need to be hashed before they are stored.\n\nIf at least one identity is imported successfully, the response status is 200 OK.\nIf all imports fail, the response is one of the following 4xx errors:\n400 Bad Request: The request payload is invalid or improperly formatted.\n409 Conflict: Duplicate identities or conflicting data were detected.\n\nIf you get a 504 Gateway Timeout:\nReduce the batch size\nAvoid duplicate identities\nPre-hash passwords with BCrypt\n\nIf the issue persists, contact support.',
  operationId: 'batchPatchIdentities',
  request: { body: { content: { 'application/json': { schema: PatchIdentitiesBodySchema } } } },
  responses: {
    200: {
      description: 'batchPatchIdentitiesResponse',
      content: { 'application/json': { schema: BatchPatchIdentitiesResponseSchema } },
    },
    400: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    409: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    default: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
  },
  security: [{ oryAccessToken: [] }],
})

export const getAdminIdentitiesByExternalExternalIDRoute = createRoute({
  method: 'get',
  path: '/admin/identities/by/external/{externalID}',
  tags: ['identity'],
  summary: 'Get an Identity by its External ID',
  description:
    'Return an [identity](https://www.ory.com/docs/kratos/concepts/identity-user-model) by its external ID. You can optionally\ninclude credentials (e.g. social sign in connections) in the response by using the `include_credential` query parameter.',
  operationId: 'getIdentityByExternalID',
  request: {
    params: z.object({
      externalID: z
        .string()
        .openapi({
          param: {
            description: 'ExternalID must be set to the ID of identity you want to get',
            in: 'path',
            name: 'externalID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      include_credential: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.enum([
              'password',
              'oidc',
              'totp',
              'lookup_secret',
              'webauthn',
              'code',
              'passkey',
              'profile',
              'saml',
              'deviceauthn',
              'identifier_first',
              'link_recovery',
              'code_recovery',
            ]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Include Credentials in Response\n\nInclude any credential, for example `password` or `oidc`, in the response. When set to `oidc`, This will return\nthe initial OAuth 2.0 Access Token, OAuth 2.0 Refresh Token, and the OpenID Connect ID Token if available.',
            in: 'query',
            name: 'include_credential',
            schema: {
              items: {
                enum: [
                  'password',
                  'oidc',
                  'totp',
                  'lookup_secret',
                  'webauthn',
                  'code',
                  'passkey',
                  'profile',
                  'saml',
                  'deviceauthn',
                  'identifier_first',
                  'link_recovery',
                  'code_recovery',
                ],
                type: 'string',
              },
              type: 'array',
            },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'identity', content: { 'application/json': { schema: IdentitySchema } } },
    404: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    default: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
  },
  security: [{ oryAccessToken: [] }],
})

export const getAdminIdentitiesIdRoute = createRoute({
  method: 'get',
  path: '/admin/identities/{id}',
  tags: ['identity'],
  summary: 'Get an Identity',
  description:
    'Return an [identity](https://www.ory.com/docs/kratos/concepts/identity-user-model) by its ID. You can optionally\ninclude credentials (e.g. social sign in connections) in the response by using the `include_credential` query parameter.',
  operationId: 'getIdentity',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'ID must be set to the ID of identity you want to get',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      include_credential: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.enum([
              'password',
              'oidc',
              'totp',
              'lookup_secret',
              'webauthn',
              'code',
              'passkey',
              'profile',
              'saml',
              'deviceauthn',
              'identifier_first',
              'link_recovery',
              'code_recovery',
            ]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Include Credentials in Response\n\nInclude any credential, for example `password` or `oidc`, in the response. When set to `oidc`, This will return\nthe initial OAuth 2.0 Access Token, OAuth 2.0 Refresh Token, and the OpenID Connect ID Token if available.',
            in: 'query',
            name: 'include_credential',
            schema: {
              items: {
                enum: [
                  'password',
                  'oidc',
                  'totp',
                  'lookup_secret',
                  'webauthn',
                  'code',
                  'passkey',
                  'profile',
                  'saml',
                  'deviceauthn',
                  'identifier_first',
                  'link_recovery',
                  'code_recovery',
                ],
                type: 'string',
              },
              type: 'array',
            },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'identity', content: { 'application/json': { schema: IdentitySchema } } },
    404: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    default: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
  },
  security: [{ oryAccessToken: [] }],
})

export const putAdminIdentitiesIdRoute = createRoute({
  method: 'put',
  path: '/admin/identities/{id}',
  tags: ['identity'],
  summary: 'Update an Identity',
  description:
    'This endpoint updates an [identity](https://www.ory.com/docs/kratos/concepts/identity-user-model). The full identity\npayload (except credentials) is expected.\n\nIt is possible to update the identity\'s credentials as well. Using this operation, credentials will not be overwritten\nbut instead added to the list. For example, if a user has a social sign in connection set up, updating the credentials\nwill keep the social sign in connection and add the new credentials to the list. This prevents accidentally overwriting\ncredentials and locking out users. A complete view of all credential types is here:\n\n`password`: The existing password credential will be completely replaced with the new configuration. You can provide either a hashed password, a plaintext password (which will be hashed), or enable the password migration hook.\n`oidc`, `saml`: The existing OIDC and SAML credentials will be kept and the new credentials will be added to the list.\n`totp`: The existing TOTP credentials will be replaced with the new configuration.\n`lookup_secret`: The existing Lookup Secret codes will be kept and the new codes will be added to the list.\n`webauthn`, `passkey`: The existing credentials are preserved, new credentials are added, and credentials with matching IDs are updated with new values. If a new `user_handle` is provided, it\'s added to the identity\'s identifiers list while preserving previous user handles.\n`code`: To import code credentials, configure your identity schema to use one of the identity traits as an identifier source (`{"ory.sh/kratos":{"code":{"identifier":true", "via":"email"}}}`).',
  operationId: 'updateIdentity',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'ID must be set to the ID of identity you want to update',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateIdentityBodySchema } } },
  },
  responses: {
    200: { description: 'identity', content: { 'application/json': { schema: IdentitySchema } } },
    400: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    404: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    409: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    default: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
  },
  security: [{ oryAccessToken: [] }],
})

export const deleteAdminIdentitiesIdRoute = createRoute({
  method: 'delete',
  path: '/admin/identities/{id}',
  tags: ['identity'],
  summary: 'Delete an Identity',
  description:
    'Calling this endpoint irrecoverably and permanently deletes the [identity](https://www.ory.com/docs/kratos/concepts/identity-user-model) given its ID. This action can not be undone.\nThis endpoint returns 204 when the identity was deleted or 404 if the identity was not found.',
  operationId: 'deleteIdentity',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: "ID is the identity's ID.",
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: EmptyResponseResponse,
    404: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    default: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
  },
  security: [{ oryAccessToken: [] }],
})

export const patchAdminIdentitiesIdRoute = createRoute({
  method: 'patch',
  path: '/admin/identities/{id}',
  tags: ['identity'],
  summary: 'Patch an Identity',
  description:
    "Partially updates an [identity's](https://www.ory.com/docs/kratos/concepts/identity-user-model) field using [JSON Patch](https://jsonpatch.com/).\nThe fields `id`, `stateChangedAt` and `credentials` can not be updated using this method.",
  operationId: 'patchIdentity',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'ID must be set to the ID of identity you want to update',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: JsonPatchDocumentSchema } } },
  },
  responses: {
    200: { description: 'identity', content: { 'application/json': { schema: IdentitySchema } } },
    400: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    404: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    409: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    default: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
  },
  security: [{ oryAccessToken: [] }],
})

export const deleteAdminIdentitiesIdCredentialsTypeRoute = createRoute({
  method: 'delete',
  path: '/admin/identities/{id}/credentials/{type}',
  tags: ['identity'],
  summary: 'Delete a credential for a specific identity',
  description:
    'Delete an [identity](https://www.ory.com/docs/kratos/concepts/identity-user-model) credential by its type.\nYou cannot delete passkeys or code auth credentials through this API.',
  operationId: 'deleteIdentityCredentials',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: "ID is the identity's ID.",
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      type: z
        .enum([
          'password',
          'oidc',
          'totp',
          'lookup_secret',
          'webauthn',
          'code',
          'passkey',
          'profile',
          'saml',
          'deviceauthn',
          'identifier_first',
          'link_recovery',
          'code_recovery',
        ])
        .openapi({
          param: {
            description:
              'Type is the type of credentials to delete.\npassword CredentialsTypePassword\noidc CredentialsTypeOIDC\ntotp CredentialsTypeTOTP\nlookup_secret CredentialsTypeLookup\nwebauthn CredentialsTypeWebAuthn\ncode CredentialsTypeCodeAuth\npasskey CredentialsTypePasskey\nprofile CredentialsTypeProfile\nsaml CredentialsTypeSAML\ndeviceauthn CredentialsTypeDeviceAuthn\nidentifier_first CredentialsTypeIdentifierFirst\nlink_recovery CredentialsTypeRecoveryLink  CredentialsTypeRecoveryLink is a special credential type linked to the link strategy (recovery flow).  It is not used within the credentials object itself.\ncode_recovery CredentialsTypeRecoveryCode',
            in: 'path',
            name: 'type',
            required: true,
            schema: {
              enum: [
                'password',
                'oidc',
                'totp',
                'lookup_secret',
                'webauthn',
                'code',
                'passkey',
                'profile',
                'saml',
                'deviceauthn',
                'identifier_first',
                'link_recovery',
                'code_recovery',
              ],
              type: 'string',
            },
            'x-go-enum-desc':
              'password CredentialsTypePassword\noidc CredentialsTypeOIDC\ntotp CredentialsTypeTOTP\nlookup_secret CredentialsTypeLookup\nwebauthn CredentialsTypeWebAuthn\ncode CredentialsTypeCodeAuth\npasskey CredentialsTypePasskey\nprofile CredentialsTypeProfile\nsaml CredentialsTypeSAML\ndeviceauthn CredentialsTypeDeviceAuthn\nidentifier_first CredentialsTypeIdentifierFirst\nlink_recovery CredentialsTypeRecoveryLink  CredentialsTypeRecoveryLink is a special credential type linked to the link strategy (recovery flow).  It is not used within the credentials object itself.\ncode_recovery CredentialsTypeRecoveryCode',
          },
        }),
    }),
    query: z.object({
      identifier: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Identifier is the identifier of the credential to delete. It is required\nfor the `oidc`, `saml`, and `deviceauthn` credential types: for `oidc`\nand `saml` it selects the provider link to remove, for `deviceauthn` it\nis the `client_key_id` of the device key to revoke. Find the identifier\nby calling the `GET /admin/identities/{id}?include_credential={type}`\nendpoint.',
            in: 'query',
            name: 'identifier',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    204: EmptyResponseResponse,
    400: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    404: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    default: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
  },
  security: [{ oryAccessToken: [] }],
})

export const getAdminIdentitiesIdSessionsRoute = createRoute({
  method: 'get',
  path: '/admin/identities/{id}/sessions',
  tags: ['identity'],
  summary: "List an Identity's Sessions",
  description: 'This endpoint returns all sessions that belong to the given Identity.',
  operationId: 'listIdentitySessions',
  request: {
    query: z.object({
      per_page: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n).max(1000n))
        .default(250n)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Deprecated Items per Page\n\nDEPRECATED: Please use `page_token` instead. This parameter will be removed in the future.\n\nThis is the number of items per page.',
            in: 'query',
            name: 'per_page',
            schema: { default: 250, format: 'int64', maximum: 1000, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      page: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description:
              'Deprecated Pagination Page\n\nDEPRECATED: Please use `page_token` instead. This parameter will be removed in the future.\n\nThis value is currently an integer, but it is not sequential. The value is not the page number, but a\nreference. The next page can be any number and some numbers might return an empty list.\n\nFor example, page 2 might not follow after page 1. And even if page 3 and 5 exist, but page 4 might not exist.\nThe first page can be retrieved by omitting this parameter. Following page pointers will be returned in the\n`Link` header.',
            in: 'query',
            name: 'page',
            schema: { format: 'int64', type: 'integer' },
            required: false,
          },
        }),
      page_size: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n).max(500n))
        .default(250n)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Page Size\n\nThis is the number of items per page to return. For details on pagination please head over to the\n[pagination documentation](https://www.ory.com/docs/ecosystem/api-design#pagination).',
            in: 'query',
            name: 'page_size',
            schema: { default: 250, format: 'int64', maximum: 500, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      page_token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Next Page Token\n\nThe next page token. For details on pagination please head over to the\n[pagination documentation](https://www.ory.com/docs/ecosystem/api-design#pagination).',
            in: 'query',
            name: 'page_token',
            schema: { type: 'string' },
            required: false,
          },
        }),
      active: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Active is a boolean flag that filters out sessions based on the state. If no value is provided, all sessions are returned.',
            in: 'query',
            name: 'active',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: "ID is the identity's ID.",
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: ListIdentitySessionsResponse,
    400: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    404: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    default: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
  },
  security: [{ oryAccessToken: [] }],
})

export const deleteAdminIdentitiesIdSessionsRoute = createRoute({
  method: 'delete',
  path: '/admin/identities/{id}/sessions',
  tags: ['identity'],
  summary: "Delete & Invalidate an Identity's Sessions",
  description:
    'Calling this endpoint irrecoverably and permanently deletes and invalidates all sessions that belong to the given Identity.',
  operationId: 'deleteIdentitySessions',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: "ID is the identity's ID.",
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: EmptyResponseResponse,
    400: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    401: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    404: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    default: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
  },
  security: [{ oryAccessToken: [] }],
})

export const postAdminRecoveryCodeRoute = createRoute({
  method: 'post',
  path: '/admin/recovery/code',
  tags: ['identity'],
  summary: 'Create a Recovery Code',
  description:
    'This endpoint creates a recovery code which should be given to the user in order for them to recover\n(or activate) their account.',
  operationId: 'createRecoveryCodeForIdentity',
  request: {
    body: { content: { 'application/json': { schema: CreateRecoveryCodeForIdentityBodySchema } } },
  },
  responses: {
    201: {
      description: 'recoveryCodeForIdentity',
      content: { 'application/json': { schema: RecoveryCodeForIdentitySchema } },
    },
    400: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    404: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    default: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
  },
  security: [{ oryAccessToken: [] }],
})

export const postAdminRecoveryLinkRoute = createRoute({
  method: 'post',
  path: '/admin/recovery/link',
  tags: ['identity'],
  summary: 'Create a Recovery Link',
  description:
    'This endpoint creates a recovery link which should be given to the user in order for them to recover\n(or activate) their account.',
  operationId: 'createRecoveryLinkForIdentity',
  request: {
    query: z.object({
      return_to: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'return_to', schema: { type: 'string' }, required: false },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateRecoveryLinkForIdentityBodySchema } } },
  },
  responses: {
    200: {
      description: 'recoveryLinkForIdentity',
      content: { 'application/json': { schema: RecoveryLinkForIdentitySchema } },
    },
    400: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    404: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    default: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
  },
  security: [{ oryAccessToken: [] }],
})

export const getAdminSessionsRoute = createRoute({
  method: 'get',
  path: '/admin/sessions',
  tags: ['identity'],
  summary: 'List All Sessions',
  description: 'Listing all sessions that exist.',
  operationId: 'listSessions',
  request: {
    query: z.object({
      page_size: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n).max(1000n))
        .default(250n)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Items per Page\n\nThis is the number of items per page to return.\nFor details on pagination please head over to the [pagination documentation](https://www.ory.com/docs/ecosystem/api-design#pagination).',
            in: 'query',
            name: 'page_size',
            schema: { default: 250, format: 'int64', maximum: 1000, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      page_token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Next Page Token\n\nThe next page token.\nFor details on pagination please head over to the [pagination documentation](https://www.ory.com/docs/ecosystem/api-design#pagination).',
            in: 'query',
            name: 'page_token',
            schema: { type: 'string' },
            required: false,
          },
        }),
      active: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Active is a boolean flag that filters out sessions based on the state. If no value is provided, all sessions are returned.',
            in: 'query',
            name: 'active',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      expand: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['identity', 'devices'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'ExpandOptions is a query parameter encoded list of all properties that must be expanded in the Session.\nIf no value is provided, the expandable properties are skipped.',
            in: 'query',
            name: 'expand',
            schema: { items: { enum: ['identity', 'devices'], type: 'string' }, type: 'array' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: ListSessionsResponse,
    400: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    default: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
  },
  security: [{ oryAccessToken: [] }],
})

export const postAdminSessionsRoute = createRoute({
  method: 'post',
  path: '/admin/sessions',
  tags: ['identity'],
  summary: 'Manage sessions in bulk',
  description:
    'Disable or delete sessions for a list of identities or a list of sessions in\na single call. The `action` field selects the operation:\n\n`disable` — deactivate matching sessions (sets `active = false`, preserves\naudit data).\n`delete` — permanently delete matching sessions.\n\nExactly one of `identities` or `sessions` must be provided. To scope the\noperation to every session in the network, pass `identities: ["*"]`; the\nwildcard is not accepted in the `sessions` field. Up to 500 explicit IDs\nare accepted per call.\n\nAll requests return `200 OK` with `{processed, more}`. `processed` reports\nhow many rows the call affected; for `disable` it counts only sessions\nthat were active before the call. `more` is `true` only when a wildcard\nrequest reached the per-call batch limit and additional rows may remain;\ncallers drain the network by re-issuing the same request while `more` is\n`true`. Explicit-IDs requests always return `more: false`.',
  operationId: 'manageSessions',
  request: {
    body: { content: { 'application/json': { schema: ManageSessionsBodySchema } }, required: true },
  },
  responses: {
    200: {
      description: 'manageSessionsResponse',
      content: { 'application/json': { schema: ManageSessionsResponseSchema } },
    },
    400: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    401: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    default: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
  },
  security: [{ oryAccessToken: [] }],
})

export const getAdminSessionsIdRoute = createRoute({
  method: 'get',
  path: '/admin/sessions/{id}',
  tags: ['identity'],
  summary: 'Get Session',
  description:
    'This endpoint is useful for:\n\nGetting a session object with all specified expandables that exist in an administrative context.',
  operationId: 'getSession',
  request: {
    query: z.object({
      expand: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['identity', 'devices'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'ExpandOptions is a query parameter encoded list of all properties that must be expanded in the Session.\nExample - ?expand=Identity&expand=Devices\nIf no value is provided, the expandable properties are skipped.',
            in: 'query',
            name: 'expand',
            schema: { items: { enum: ['identity', 'devices'], type: 'string' }, type: 'array' },
            required: false,
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: "ID is the session's ID.",
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'session', content: { 'application/json': { schema: SessionSchema } } },
    400: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    default: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
  },
  security: [{ oryAccessToken: [] }],
})

export const deleteAdminSessionsIdRoute = createRoute({
  method: 'delete',
  path: '/admin/sessions/{id}',
  tags: ['identity'],
  summary: 'Deactivate a Session',
  description:
    'Calling this endpoint deactivates the specified session. Session data is not deleted.',
  operationId: 'disableSession',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: "ID is the session's ID.",
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: EmptyResponseResponse,
    400: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    401: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    default: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
  },
  security: [{ oryAccessToken: [] }],
})

export const patchAdminSessionsIdExtendRoute = createRoute({
  method: 'patch',
  path: '/admin/sessions/{id}/extend',
  tags: ['identity'],
  summary: 'Extend a Session',
  description:
    'Calling this endpoint extends the given session ID. If `session.earliest_possible_extend` is set it\nwill only extend the session after the specified time has passed.\n\nThis endpoint returns per default a 204 No Content response on success. Older Ory Network projects may\nreturn a 200 OK response with the session in the body. Returning the session as part of the response\nwill be deprecated in the future and should not be relied upon.\n\nThis endpoint ignores consecutive requests to extend the same session and returns a 404 error in those\nscenarios. This endpoint also returns 404 errors if the session does not exist.\n\nRetrieve the session ID from the `/sessions/whoami` endpoint / `toSession` SDK method.',
  operationId: 'extendSession',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: "ID is the session's ID.",
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'session', content: { 'application/json': { schema: SessionSchema } } },
    204: EmptyResponseResponse,
    400: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    404: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    default: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
  },
  security: [{ oryAccessToken: [] }],
})

export const postAdminTestLoginFlowsRoute = createRoute({
  method: 'post',
  path: '/admin/test-login-flows',
  tags: ['identity'],
  summary: 'Create a test OIDC login flow',
  description:
    "Creates a dry-run OIDC test login flow pre-scoped to one provider. The\nreturned flow carries a single-submit UI and a CSRF bearer token. No\nidentity is persisted and no session is issued when the flow completes;\nthe captured debug data is returned in the flow's test_context.",
  operationId: 'createTestLoginFlow',
  request: {
    body: {
      content: { 'application/json': { schema: CreateTestLoginFlowBodySchema } },
      required: true,
    },
  },
  responses: {
    201: { description: 'loginFlow', content: { 'application/json': { schema: LoginFlowSchema } } },
    400: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    404: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    default: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
  },
})

export const getHealthAliveRoute = createRoute({
  method: 'get',
  path: '/health/alive',
  tags: ['metadata'],
  summary: 'Check HTTP Server Status',
  description:
    'This endpoint returns a HTTP 200 status code when Ory Kratos is accepting incoming\nHTTP requests. This status does currently not include checks whether the database connection is working.\n\nIf the service supports TLS Edge Termination, this endpoint does not require the\n`X-Forwarded-Proto` header to be set.\n\nBe aware that if you are running multiple nodes of this service, the health status will never\nrefer to the cluster state, only to a single instance.',
  operationId: 'isAlive',
  responses: {
    200: {
      description: 'Ory Kratos is ready to accept connections.',
      content: {
        'application/json': {
          schema: z
            .object({ status: z.string().openapi({ description: 'Always "ok".' }) })
            .openapi({ required: ['status'] }),
        },
      },
    },
    default: { description: 'Unexpected error', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const getHealthReadyRoute = createRoute({
  method: 'get',
  path: '/health/ready',
  tags: ['metadata'],
  summary: 'Check HTTP Server and Database Status',
  description:
    'This endpoint returns a HTTP 200 status code when Ory Kratos is up running and the environment dependencies (e.g.\nthe database) are responsive as well.\n\nIf the service supports TLS Edge Termination, this endpoint does not require the\n`X-Forwarded-Proto` header to be set.\n\nBe aware that if you are running multiple nodes of Ory Kratos, the health status will never\nrefer to the cluster state, only to a single instance.',
  operationId: 'isReady',
  responses: {
    200: {
      description: 'Ory Kratos is ready to accept requests.',
      content: {
        'application/json': {
          schema: z
            .object({ status: z.string().openapi({ description: 'Always "ok".' }) })
            .openapi({ required: ['status'] }),
        },
      },
    },
    503: {
      description: 'Ory Kratos is not yet ready to accept requests.',
      content: {
        'application/json': {
          schema: z
            .object({
              errors: z
                .record(z.string(), z.string())
                .openapi({
                  description: 'Errors contains a list of errors that caused the not ready status.',
                }),
            })
            .openapi({ required: ['errors'] }),
        },
      },
    },
    default: { description: 'Unexpected error', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const getSchemasRoute = createRoute({
  method: 'get',
  path: '/schemas',
  tags: ['identity'],
  summary: 'Get all Identity Schemas',
  description: 'Returns a list of all identity schemas currently in use.',
  operationId: 'listIdentitySchemas',
  request: {
    query: z.object({
      per_page: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n).max(1000n))
        .default(250n)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Deprecated Items per Page\n\nDEPRECATED: Please use `page_token` instead. This parameter will be removed in the future.\n\nThis is the number of items per page.',
            in: 'query',
            name: 'per_page',
            schema: { default: 250, format: 'int64', maximum: 1000, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      page: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description:
              'Deprecated Pagination Page\n\nDEPRECATED: Please use `page_token` instead. This parameter will be removed in the future.\n\nThis value is currently an integer, but it is not sequential. The value is not the page number, but a\nreference. The next page can be any number and some numbers might return an empty list.\n\nFor example, page 2 might not follow after page 1. And even if page 3 and 5 exist, but page 4 might not exist.\nThe first page can be retrieved by omitting this parameter. Following page pointers will be returned in the\n`Link` header.',
            in: 'query',
            name: 'page',
            schema: { format: 'int64', type: 'integer' },
            required: false,
          },
        }),
      page_size: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n).max(500n))
        .default(250n)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Page Size\n\nThis is the number of items per page to return. For details on pagination please head over to the\n[pagination documentation](https://www.ory.com/docs/ecosystem/api-design#pagination).',
            in: 'query',
            name: 'page_size',
            schema: { default: 250, format: 'int64', maximum: 500, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      page_token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Next Page Token\n\nThe next page token. For details on pagination please head over to the\n[pagination documentation](https://www.ory.com/docs/ecosystem/api-design#pagination).',
            in: 'query',
            name: 'page_token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: IdentitySchemasResponse,
    default: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
  },
})

export const getSchemasIdRoute = createRoute({
  method: 'get',
  path: '/schemas/{id}',
  tags: ['identity'],
  summary: 'Get Identity JSON Schema',
  description: 'Return a specific identity schema.',
  operationId: 'getIdentitySchema',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'ID must be set to the ID of schema you want to get',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'identitySchema',
      content: { 'application/json': { schema: IdentitySchemaSchema } },
    },
    404: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    default: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
  },
})

export const getSelfServiceErrorsRoute = createRoute({
  method: 'get',
  path: '/self-service/errors',
  tags: ['frontend'],
  summary: 'Get User-Flow Errors',
  description:
    'This endpoint returns the error associated with a user-facing self service errors.\n\nThis endpoint supports stub values to help you implement the error UI:\n\n`?id=stub:500` - returns a stub 500 (Internal Server Error) error.\n\nMore information can be found at [Ory Kratos User User Facing Error Documentation](https://www.ory.com/docs/kratos/self-service/flows/user-facing-errors).',
  operationId: 'getFlowError',
  request: {
    query: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: "Error is the error's ID",
            in: 'query',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'flowError', content: { 'application/json': { schema: FlowErrorSchema } } },
    403: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    404: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    500: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
  },
})

export const getSelfServiceFedCmParametersRoute = createRoute({
  method: 'get',
  path: '/self-service/fed-cm/parameters',
  tags: ['frontend'],
  summary: 'Get FedCM Parameters',
  description:
    'This endpoint returns a list of all available FedCM providers. It is only supported on the Ory Network.',
  operationId: 'createFedcmFlow',
  responses: {
    200: {
      description: 'createFedcmFlowResponse',
      content: { 'application/json': { schema: CreateFedcmFlowResponseSchema } },
    },
    400: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    default: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
  },
})

export const postSelfServiceFedCmTokenRoute = createRoute({
  method: 'post',
  path: '/self-service/fed-cm/token',
  tags: ['frontend'],
  summary: 'Submit a FedCM token',
  description:
    'Use this endpoint to submit a token from a FedCM provider through\n`navigator.credentials.get` and log the user in. The parameters from\n`navigator.credentials.get` must have come from `GET\nself-service/fed-cm/parameters`.',
  operationId: 'updateFedcmFlow',
  request: {
    body: {
      content: {
        'application/json': { schema: UpdateFedcmFlowBodySchema },
        'application/x-www-form-urlencoded': { schema: UpdateFedcmFlowBodySchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successfulNativeLogin',
      content: { 'application/json': { schema: SuccessfulNativeLoginSchema } },
    },
    303: EmptyResponseResponse,
    400: { description: 'loginFlow', content: { 'application/json': { schema: LoginFlowSchema } } },
    410: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    422: {
      description: 'errorBrowserLocationChangeRequired',
      content: { 'application/json': { schema: ErrorBrowserLocationChangeRequiredSchema } },
    },
    default: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
  },
})

export const postSelfServiceLoginRoute = createRoute({
  method: 'post',
  path: '/self-service/login',
  tags: ['frontend'],
  summary: 'Submit a Login Flow',
  description:
    'Use this endpoint to complete a login flow. This endpoint\nbehaves differently for API and browser flows.\n\nAPI flows expect `application/json` to be sent in the body and responds with\nHTTP 200 and a application/json body with the session token on success;\nHTTP 410 if the original flow expired with the appropriate error messages set and optionally a `use_flow_id` parameter in the body;\nHTTP 400 on form validation errors.\n\nBrowser flows expect a Content-Type of `application/x-www-form-urlencoded` or `application/json` to be sent in the body and respond with\na HTTP 303 redirect to the post/after login URL or the `return_to` value if it was set and if the login succeeded;\na HTTP 303 redirect to the login UI URL with the flow ID containing the validation errors otherwise.\n\nBrowser flows with an accept header of `application/json` will not redirect but instead respond with\nHTTP 200 and a application/json body with the signed in identity and a `Set-Cookie` header on success;\nHTTP 303 redirect to a fresh login flow if the original flow expired with the appropriate error messages set;\nHTTP 400 on form validation errors.\n\nIf this endpoint is called with `Accept: application/json` in the header, the response contains the flow without a redirect. In the\ncase of an error, the `error.id` of the JSON response body can be one of:\n\n`session_already_available`: The user is already signed in.\n`security_csrf_violation`: Unable to fetch the flow because a CSRF violation occurred.\n`security_identity_mismatch`: The requested `?return_to` address is not allowed to be used. Adjust this in the configuration!\n`browser_location_change_required`: Usually sent when an AJAX request indicates that the browser needs to open a specific URL.\nMost likely used in Social Sign In flows.\n\nMore information can be found at [Ory Kratos User Login](https://www.ory.com/docs/kratos/self-service/flows/user-login) and [User Registration Documentation](https://www.ory.com/docs/kratos/self-service/flows/user-registration).',
  operationId: 'updateLoginFlow',
  request: {
    query: z.object({
      flow: z
        .string()
        .openapi({
          param: {
            description:
              'The Login Flow ID\n\nThe value for this parameter comes from `flow` URL Query parameter sent to your\napplication (e.g. `/login?flow=abcde`).',
            in: 'query',
            name: 'flow',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'X-Session-Token': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Session Token of the Identity performing the settings flow.',
            in: 'header',
            name: 'X-Session-Token',
            schema: { type: 'string' },
            required: false,
          },
        }),
      Cookie: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'HTTP Cookies\n\nWhen using the SDK in a browser app, on the server side you must include the HTTP Cookie Header\nsent by the client to your server here. This ensures that CSRF and session cookies are respected.',
            in: 'header',
            name: 'Cookie',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: UpdateLoginFlowBodySchema },
        'application/x-www-form-urlencoded': { schema: UpdateLoginFlowBodySchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successfulNativeLogin',
      content: { 'application/json': { schema: SuccessfulNativeLoginSchema } },
    },
    303: EmptyResponseResponse,
    400: { description: 'loginFlow', content: { 'application/json': { schema: LoginFlowSchema } } },
    410: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    422: {
      description: 'errorBrowserLocationChangeRequired',
      content: { 'application/json': { schema: ErrorBrowserLocationChangeRequiredSchema } },
    },
    default: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
  },
})

export const getSelfServiceLoginApiRoute = createRoute({
  method: 'get',
  path: '/self-service/login/api',
  tags: ['frontend'],
  summary: 'Create Login Flow for Native Apps',
  description:
    'This endpoint initiates a login flow for native apps that do not use a browser, such as mobile devices, smart TVs, and so on.\n\nIf a valid provided session cookie or session token is provided, a 400 Bad Request error\nwill be returned unless the URL query parameter `?refresh=true` is set.\n\nTo fetch an existing login flow call `/self-service/login/flows?flow=<flow_id>`.\n\nYou MUST NOT use this endpoint in client-side (Single Page Apps, ReactJS, AngularJS) nor server-side (Java Server\nPages, NodeJS, PHP, Golang, ...) browser applications. Using this endpoint in these applications will make\nyou vulnerable to a variety of CSRF attacks, including CSRF login attacks.\n\nIn the case of an error, the `error.id` of the JSON response body can be one of:\n\n`session_already_available`: The user is already signed in.\n`session_aal1_required`: Multi-factor auth (e.g. 2fa) was requested but the user has no session yet.\n`security_csrf_violation`: Unable to fetch the flow because a CSRF violation occurred.\n\nThis endpoint MUST ONLY be used in scenarios such as native mobile apps (React Native, Objective C, Swift, Java, ...).\n\nMore information can be found at [Ory Kratos User Login](https://www.ory.com/docs/kratos/self-service/flows/user-login) and [User Registration Documentation](https://www.ory.com/docs/kratos/self-service/flows/user-registration).',
  operationId: 'createNativeLoginFlow',
  request: {
    query: z.object({
      refresh: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Refresh a login session\n\nIf set to true, this will refresh an existing login session by\nasking the user to sign in again. This will reset the\nauthenticated_at time of the session.',
            in: 'query',
            name: 'refresh',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      aal: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Request a Specific AuthenticationMethod Assurance Level\n\nUse this parameter to upgrade an existing session\'s authenticator assurance level (AAL). This\nallows you to ask for multi-factor authentication. When an identity sign in using e.g. username+password,\nthe AAL is 1. If you wish to "upgrade" the session\'s security by asking the user to perform TOTP / WebAuth/ ...\nyou would set this to "aal2".',
            in: 'query',
            name: 'aal',
            schema: { type: 'string' },
            required: false,
          },
        }),
      return_session_token_exchange_code: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'EnableSessionTokenExchangeCode requests the login flow to include a code that can be used to retrieve the session token\nafter the login flow has been completed.',
            in: 'query',
            name: 'return_session_token_exchange_code',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      return_to: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The URL to return the browser to after the flow was completed.',
            in: 'query',
            name: 'return_to',
            schema: { type: 'string' },
            required: false,
          },
        }),
      organization: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'An optional organization ID that should be used for logging this user in.\nThis parameter is only effective in the Ory Network.',
            in: 'query',
            name: 'organization',
            schema: { type: 'string' },
            required: false,
          },
        }),
      via: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Via should contain the identity's credential the code should be sent to. Only relevant in aal2 flows.\n\nDEPRECATED: This field is deprecated. Please remove it from your requests. The user will now see a choice\nof MFA credentials to choose from to perform the second factor instead.",
            in: 'query',
            name: 'via',
            schema: { type: 'string' },
            required: false,
          },
        }),
      identity_schema: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An optional identity schema to use for the login flow.',
            in: 'query',
            name: 'identity_schema',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    headers: z.object({
      'X-Session-Token': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Session Token of the Identity performing the settings flow.',
            in: 'header',
            name: 'X-Session-Token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'loginFlow', content: { 'application/json': { schema: LoginFlowSchema } } },
    400: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    default: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
  },
})

export const getSelfServiceLoginBrowserRoute = createRoute({
  method: 'get',
  path: '/self-service/login/browser',
  tags: ['frontend'],
  summary: 'Create Login Flow for Browsers',
  description:
    'This endpoint initializes a browser-based user login flow. This endpoint will set the appropriate\ncookies and anti-CSRF measures required for browser-based flows.\n\nIf this endpoint is opened as a link in the browser, it will be redirected to\n`selfservice.flows.login.ui_url` with the flow ID set as the query parameter `?flow=`. If a valid user session\nexists already, the browser will be redirected to `urls.default_redirect_url` unless the query parameter\n`?refresh=true` was set.\n\nIf this endpoint is called via an AJAX request, the response contains the flow without a redirect. In the\ncase of an error, the `error.id` of the JSON response body can be one of:\n\n`session_already_available`: The user is already signed in.\n`session_aal1_required`: Multi-factor auth (e.g. 2fa) was requested but the user has no session yet.\n`security_csrf_violation`: Unable to fetch the flow because a CSRF violation occurred.\n`security_identity_mismatch`: The requested `?return_to` address is not allowed to be used. Adjust this in the configuration!\n\nThe optional query parameter login_challenge is set when using Kratos with\nHydra in an OAuth2 flow. See the oauth2_provider.url configuration\noption.\n\nThis endpoint is NOT INTENDED for clients that do not have a browser (Chrome, Firefox, ...) as cookies are needed.\n\nMore information can be found at [Ory Kratos User Login](https://www.ory.com/docs/kratos/self-service/flows/user-login) and [User Registration Documentation](https://www.ory.com/docs/kratos/self-service/flows/user-registration).',
  operationId: 'createBrowserLoginFlow',
  request: {
    query: z.object({
      refresh: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Refresh a login session\n\nIf set to true, this will refresh an existing login session by\nasking the user to sign in again. This will reset the\nauthenticated_at time of the session.',
            in: 'query',
            name: 'refresh',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      aal: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Request a Specific AuthenticationMethod Assurance Level\n\nUse this parameter to upgrade an existing session\'s authenticator assurance level (AAL). This\nallows you to ask for multi-factor authentication. When an identity sign in using e.g. username+password,\nthe AAL is 1. If you wish to "upgrade" the session\'s security by asking the user to perform TOTP / WebAuth/ ...\nyou would set this to "aal2".',
            in: 'query',
            name: 'aal',
            schema: { type: 'string' },
            required: false,
          },
        }),
      return_to: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The URL to return the browser to after the flow was completed.',
            in: 'query',
            name: 'return_to',
            schema: { type: 'string' },
            required: false,
          },
        }),
      login_challenge: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'An optional Hydra login challenge. If present, Kratos will cooperate with\nOry Hydra to act as an OAuth2 identity provider.\n\nThe value for this parameter comes from `login_challenge` URL Query parameter sent to your\napplication (e.g. `/login?login_challenge=abcde`).',
            in: 'query',
            name: 'login_challenge',
            schema: { type: 'string' },
            required: false,
          },
        }),
      organization: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'An optional organization ID that should be used for logging this user in.\nThis parameter is only effective in the Ory Network.',
            in: 'query',
            name: 'organization',
            schema: { type: 'string' },
            required: false,
          },
        }),
      via: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Via should contain the identity's credential the code should be sent to. Only relevant in aal2 flows.\n\nDEPRECATED: This field is deprecated. Please remove it from your requests. The user will now see a choice\nof MFA credentials to choose from to perform the second factor instead.",
            in: 'query',
            name: 'via',
            schema: { type: 'string' },
            required: false,
          },
        }),
      identity_schema: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An optional identity schema to use for the login flow.',
            in: 'query',
            name: 'identity_schema',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    headers: z.object({
      Cookie: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'HTTP Cookies\n\nWhen using the SDK in a browser app, on the server side you must include the HTTP Cookie Header\nsent by the client to your server here. This ensures that CSRF and session cookies are respected.',
            in: 'header',
            name: 'Cookie',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'loginFlow', content: { 'application/json': { schema: LoginFlowSchema } } },
    303: EmptyResponseResponse,
    400: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    default: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
  },
})

export const getSelfServiceLoginFlowsRoute = createRoute({
  method: 'get',
  path: '/self-service/login/flows',
  tags: ['frontend'],
  summary: 'Get Login Flow',
  description:
    "This endpoint returns a login flow's context with, for example, error details and other information.\n\nBrowser flows expect the anti-CSRF cookie to be included in the request's HTTP Cookie Header.\nFor AJAX requests you must ensure that cookies are included in the request or requests will fail.\n\nIf you use the browser-flow for server-side apps, the services need to run on a common top-level-domain\nand you need to forward the incoming HTTP Cookie header to this endpoint:\n\n```js\npseudo-code example\nrouter.get('/login', async function (req, res) {\nconst flow = await client.getLoginFlow(req.header('cookie'), req.query['flow'])\n\nres.render('login', flow)\n})\n```\n\nThis request may fail due to several reasons. The `error.id` can be one of:\n\n`session_already_available`: The user is already signed in.\n`self_service_flow_expired`: The flow is expired and you should request a new one.\n\nMore information can be found at [Ory Kratos User Login](https://www.ory.com/docs/kratos/self-service/flows/user-login) and [User Registration Documentation](https://www.ory.com/docs/kratos/self-service/flows/user-registration).",
  operationId: 'getLoginFlow',
  request: {
    query: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description:
              'The Login Flow ID\n\nThe value for this parameter comes from `flow` URL Query parameter sent to your\napplication (e.g. `/login?flow=abcde`).',
            in: 'query',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      Cookie: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'HTTP Cookies\n\nWhen using the SDK in a browser app, on the server side you must include the HTTP Cookie Header\nsent by the client to your server here. This ensures that CSRF and session cookies are respected.',
            in: 'header',
            name: 'Cookie',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'loginFlow', content: { 'application/json': { schema: LoginFlowSchema } } },
    403: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    404: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    410: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    default: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
  },
})

export const deleteSelfServiceLoginTestRoute = createRoute({
  method: 'delete',
  path: '/self-service/login/test',
  tags: ['frontend'],
  summary: 'Delete a test OIDC login flow',
  description:
    'Deletes a dry-run OIDC test login flow. A flow whose debug payload has\nbeen captured requires the HMAC cookie set by the OIDC callback; a flow\nstill in the initial choose-method state is deletable with just the flow\nID (it carries no PII, and the admin may want to abandon it).',
  operationId: 'deleteTestLoginFlow',
  request: {
    query: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'ID of the test login flow to delete.',
            in: 'query',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      Cookie: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'HTTP Cookies. A captured test flow requires the ory_kratos_test_flow\ncookie set by the OIDC callback; a flow still in the initial\nchoose-method state does not.',
            in: 'header',
            name: 'Cookie',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    204: EmptyResponseResponse,
    400: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    403: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    404: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    default: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
  },
})

export const getSelfServiceLogoutRoute = createRoute({
  method: 'get',
  path: '/self-service/logout',
  tags: ['frontend'],
  summary: 'Update Logout Flow',
  description:
    'This endpoint logs out an identity in a self-service manner.\n\nIf the `Accept` HTTP header is not set to `application/json`, the browser will be redirected (HTTP 303 See Other)\nto the `return_to` parameter of the initial request or fall back to `urls.default_return_to`.\n\nIf the `Accept` HTTP header is set to `application/json`, a 204 No Content response\nwill be sent on successful logout instead.\n\nThis endpoint is NOT INTENDED for API clients and only works\nwith browsers (Chrome, Firefox, ...). For API clients you can\ncall the `/self-service/logout/api` URL directly with the Ory Session Token.\n\nMore information can be found at [Ory Kratos User Logout Documentation](https://www.ory.com/docs/next/kratos/self-service/flows/user-logout).',
  operationId: 'updateLogoutFlow',
  request: {
    query: z.object({
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A Valid Logout Token\n\nIf you do not have a logout token because you only have a session cookie,\ncall `/self-service/logout/browser` to generate a URL for this endpoint.',
            in: 'query',
            name: 'token',
            schema: { type: 'string' },
            required: false,
          },
        }),
      return_to: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The URL to return to after the logout was completed.',
            in: 'query',
            name: 'return_to',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    headers: z.object({
      Cookie: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'HTTP Cookies\n\nWhen using the SDK in a browser app, on the server side you must include the HTTP Cookie Header\nsent by the client to your server here. This ensures that CSRF and session cookies are respected.',
            in: 'header',
            name: 'Cookie',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    204: EmptyResponseResponse,
    303: EmptyResponseResponse,
    default: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
  },
})

export const deleteSelfServiceLogoutApiRoute = createRoute({
  method: 'delete',
  path: '/self-service/logout/api',
  tags: ['frontend'],
  summary: 'Perform Logout for Native Apps',
  description:
    'Use this endpoint to log out an identity using an Ory Session Token. If the Ory Session Token was successfully\nrevoked, the server returns a 204 No Content response. A 204 No Content response is also sent when\nthe Ory Session Token has been revoked already before.\n\nIf the Ory Session Token is malformed or does not exist a 403 Forbidden response will be returned.\n\nThis endpoint does not remove any HTTP\nCookies - use the Browser-Based Self-Service Logout Flow instead.',
  operationId: 'performNativeLogout',
  request: {
    body: {
      content: { 'application/json': { schema: PerformNativeLogoutBodySchema } },
      required: true,
    },
  },
  responses: {
    204: EmptyResponseResponse,
    400: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    default: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
  },
})

export const getSelfServiceLogoutBrowserRoute = createRoute({
  method: 'get',
  path: '/self-service/logout/browser',
  tags: ['frontend'],
  summary: 'Create a Logout URL for Browsers',
  description:
    'This endpoint initializes a browser-based user logout flow and a URL which can be used to log out the user.\n\nThis endpoint is NOT INTENDED for API clients and only works\nwith browsers (Chrome, Firefox, ...). For API clients you can\ncall the `/self-service/logout/api` URL directly with the Ory Session Token.\n\nThe URL is only valid for the currently signed in user. If no user is signed in, this endpoint returns\na 401 error.\n\nWhen calling this endpoint from a backend, please ensure to properly forward the HTTP cookies.',
  operationId: 'createBrowserLogoutFlow',
  request: {
    headers: z.object({
      cookie: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'HTTP Cookies\n\nIf you call this endpoint from a backend, please include the\noriginal Cookie header in the request.',
            in: 'header',
            name: 'cookie',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    query: z.object({
      return_to: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Return to URL\n\nThe URL to which the browser should be redirected to after the logout\nhas been performed.',
            in: 'query',
            name: 'return_to',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'logoutFlow',
      content: { 'application/json': { schema: LogoutFlowSchema } },
    },
    400: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    401: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    500: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
  },
})

export const postSelfServiceRecoveryRoute = createRoute({
  method: 'post',
  path: '/self-service/recovery',
  tags: ['frontend'],
  summary: 'Update Recovery Flow',
  description:
    'Use this endpoint to update a recovery flow. This endpoint\nbehaves differently for API and browser flows and has several states:\n\n`choose_method` expects `flow` (in the URL query) and `email` (in the body) to be sent\nand works with API- and Browser-initiated flows.\nFor API clients and Browser clients with HTTP Header `Accept: application/json` it either returns a HTTP 200 OK when the form is valid and HTTP 400 OK when the form is invalid.\nand a HTTP 303 See Other redirect with a fresh recovery flow if the flow was otherwise invalid (e.g. expired).\nFor Browser clients without HTTP Header `Accept` or with `Accept: text/*` it returns a HTTP 303 See Other redirect to the Recovery UI URL with the Recovery Flow ID appended.\n`sent_email` is the success state after `choose_method` for the `link` method and allows the user to request another recovery email. It\nworks for both API and Browser-initiated flows and returns the same responses as the flow in `choose_method` state.\n`passed_challenge` expects a `token` to be sent in the URL query and given the nature of the flow ("sending a recovery link")\ndoes not have any API capabilities. The server responds with a HTTP 303 See Other redirect either to the Settings UI URL\n(if the link was valid) and instructs the user to update their password, or a redirect to the Recover UI URL with\na new Recovery Flow ID which contains an error message that the recovery link was invalid.\n\nMore information can be found at [Ory Kratos Account Recovery Documentation](../self-service/flows/account-recovery).',
  operationId: 'updateRecoveryFlow',
  request: {
    query: z.object({
      flow: z
        .string()
        .openapi({
          param: {
            description:
              'The Recovery Flow ID\n\nThe value for this parameter comes from `flow` URL Query parameter sent to your\napplication (e.g. `/recovery?flow=abcde`).',
            in: 'query',
            name: 'flow',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Recovery Token\n\nThe recovery token which completes the recovery request. If the token\nis invalid (e.g. expired) an error will be shown to the end-user.\n\nThis parameter is usually set in a link and not used by any direct API call.',
            in: 'query',
            name: 'token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    headers: z.object({
      Cookie: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'HTTP Cookies\n\nWhen using the SDK in a browser app, on the server side you must include the HTTP Cookie Header\nsent by the client to your server here. This ensures that CSRF and session cookies are respected.',
            in: 'header',
            name: 'Cookie',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: UpdateRecoveryFlowBodySchema },
        'application/x-www-form-urlencoded': { schema: UpdateRecoveryFlowBodySchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'recoveryFlow',
      content: { 'application/json': { schema: RecoveryFlowSchema } },
    },
    303: EmptyResponseResponse,
    400: {
      description: 'recoveryFlow',
      content: { 'application/json': { schema: RecoveryFlowSchema } },
    },
    410: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    422: {
      description: 'errorBrowserLocationChangeRequired',
      content: { 'application/json': { schema: ErrorBrowserLocationChangeRequiredSchema } },
    },
    default: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
  },
})

export const getSelfServiceRecoveryApiRoute = createRoute({
  method: 'get',
  path: '/self-service/recovery/api',
  tags: ['frontend'],
  summary: 'Create Recovery Flow for Native Apps',
  description:
    'This endpoint initiates a recovery flow for API clients such as mobile devices, smart TVs, and so on.\n\nIf a valid provided session cookie or session token is provided, a 400 Bad Request error.\n\nOn an existing recovery flow, use the `getRecoveryFlow` API endpoint.\n\nYou MUST NOT use this endpoint in client-side (Single Page Apps, ReactJS, AngularJS) nor server-side (Java Server\nPages, NodeJS, PHP, Golang, ...) browser applications. Using this endpoint in these applications will make\nyou vulnerable to a variety of CSRF attacks.\n\nThis endpoint MUST ONLY be used in scenarios such as native mobile apps (React Native, Objective C, Swift, Java, ...).\n\nMore information can be found at [Ory Kratos Account Recovery Documentation](../self-service/flows/account-recovery).',
  operationId: 'createNativeRecoveryFlow',
  responses: {
    200: {
      description: 'recoveryFlow',
      content: { 'application/json': { schema: RecoveryFlowSchema } },
    },
    400: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    default: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
  },
})

export const getSelfServiceRecoveryBrowserRoute = createRoute({
  method: 'get',
  path: '/self-service/recovery/browser',
  tags: ['frontend'],
  summary: 'Create Recovery Flow for Browsers',
  description:
    'This endpoint initializes a browser-based account recovery flow. Once initialized, the browser will be redirected to\n`selfservice.flows.recovery.ui_url` with the flow ID set as the query parameter `?flow=`. If a valid user session\nexists, the browser is returned to the configured return URL.\n\nIf this endpoint is called via an AJAX request, the response contains the recovery flow without any redirects\nor a 400 bad request error if the user is already authenticated.\n\nThis endpoint is NOT INTENDED for clients that do not have a browser (Chrome, Firefox, ...) as cookies are needed.\n\nMore information can be found at [Ory Kratos Account Recovery Documentation](../self-service/flows/account-recovery).',
  operationId: 'createBrowserRecoveryFlow',
  request: {
    query: z.object({
      return_to: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The URL to return the browser to after the flow was completed.',
            in: 'query',
            name: 'return_to',
            schema: { type: 'string' },
            required: false,
          },
        }),
      skip_settings: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Skip redirection to the settings UI after the recovery flow was\ncompleted. Instead, the user will be redirected to the URL specified in\n`return_to` query parameter or the default return URL if `return_to` is\nnot set.',
            in: 'query',
            name: 'skip_settings',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'recoveryFlow',
      content: { 'application/json': { schema: RecoveryFlowSchema } },
    },
    303: EmptyResponseResponse,
    400: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    default: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
  },
})

export const getSelfServiceRecoveryFlowsRoute = createRoute({
  method: 'get',
  path: '/self-service/recovery/flows',
  tags: ['frontend'],
  summary: 'Get Recovery Flow',
  description:
    "This endpoint returns a recovery flow's context with, for example, error details and other information.\n\nBrowser flows expect the anti-CSRF cookie to be included in the request's HTTP Cookie Header.\nFor AJAX requests you must ensure that cookies are included in the request or requests will fail.\n\nIf you use the browser-flow for server-side apps, the services need to run on a common top-level-domain\nand you need to forward the incoming HTTP Cookie header to this endpoint:\n\n```js\npseudo-code example\nrouter.get('/recovery', async function (req, res) {\nconst flow = await client.getRecoveryFlow(req.header('Cookie'), req.query['flow'])\n\nres.render('recovery', flow)\n})\n```\n\nMore information can be found at [Ory Kratos Account Recovery Documentation](../self-service/flows/account-recovery).",
  operationId: 'getRecoveryFlow',
  request: {
    query: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description:
              'The Flow ID\n\nThe value for this parameter comes from `request` URL Query parameter sent to your\napplication (e.g. `/recovery?flow=abcde`).',
            in: 'query',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      Cookie: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'HTTP Cookies\n\nWhen using the SDK in a browser app, on the server side you must include the HTTP Cookie Header\nsent by the client to your server here. This ensures that CSRF and session cookies are respected.',
            in: 'header',
            name: 'Cookie',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'recoveryFlow',
      content: { 'application/json': { schema: RecoveryFlowSchema } },
    },
    404: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    410: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    default: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
  },
})

export const postSelfServiceRegistrationRoute = createRoute({
  method: 'post',
  path: '/self-service/registration',
  tags: ['frontend'],
  summary: 'Update Registration Flow',
  description:
    "Use this endpoint to complete a registration flow by sending an identity's traits and password. This endpoint\nbehaves differently for API and browser flows.\n\nAPI flows expect `application/json` to be sent in the body and respond with\nHTTP 200 and a application/json body with the created identity success - if the session hook is configured the\n`session` and `session_token` will also be included;\nHTTP 410 if the original flow expired with the appropriate error messages set and optionally a `use_flow_id` parameter in the body;\nHTTP 400 on form validation errors.\n\nBrowser flows expect a Content-Type of `application/x-www-form-urlencoded` or `application/json` to be sent in the body and respond with\na HTTP 303 redirect to the post/after registration URL or the `return_to` value if it was set and if the registration succeeded;\na HTTP 303 redirect to the registration UI URL with the flow ID containing the validation errors otherwise.\n\nBrowser flows with an accept header of `application/json` will not redirect but instead respond with\nHTTP 200 and a application/json body with the signed in identity and a `Set-Cookie` header on success;\nHTTP 303 redirect to a fresh login flow if the original flow expired with the appropriate error messages set;\nHTTP 400 on form validation errors.\n\nIf this endpoint is called with `Accept: application/json` in the header, the response contains the flow without a redirect. In the\ncase of an error, the `error.id` of the JSON response body can be one of:\n\n`session_already_available`: The user is already signed in.\n`security_csrf_violation`: Unable to fetch the flow because a CSRF violation occurred.\n`security_identity_mismatch`: The requested `?return_to` address is not allowed to be used. Adjust this in the configuration!\n`browser_location_change_required`: Usually sent when an AJAX request indicates that the browser needs to open a specific URL.\nMost likely used in Social Sign In flows.\n\nMore information can be found at [Ory Kratos User Login](https://www.ory.com/docs/kratos/self-service/flows/user-login) and [User Registration Documentation](https://www.ory.com/docs/kratos/self-service/flows/user-registration).",
  operationId: 'updateRegistrationFlow',
  request: {
    query: z.object({
      flow: z
        .string()
        .openapi({
          param: {
            description:
              'The Registration Flow ID\n\nThe value for this parameter comes from `flow` URL Query parameter sent to your\napplication (e.g. `/registration?flow=abcde`).',
            in: 'query',
            name: 'flow',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      Cookie: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'HTTP Cookies\n\nWhen using the SDK in a browser app, on the server side you must include the HTTP Cookie Header\nsent by the client to your server here. This ensures that CSRF and session cookies are respected.',
            in: 'header',
            name: 'Cookie',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: UpdateRegistrationFlowBodySchema },
        'application/x-www-form-urlencoded': { schema: UpdateRegistrationFlowBodySchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successfulNativeRegistration',
      content: { 'application/json': { schema: SuccessfulNativeRegistrationSchema } },
    },
    303: EmptyResponseResponse,
    400: {
      description: 'registrationFlow',
      content: { 'application/json': { schema: RegistrationFlowSchema } },
    },
    410: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    422: {
      description: 'errorBrowserLocationChangeRequired',
      content: { 'application/json': { schema: ErrorBrowserLocationChangeRequiredSchema } },
    },
    default: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
  },
})

export const getSelfServiceRegistrationApiRoute = createRoute({
  method: 'get',
  path: '/self-service/registration/api',
  tags: ['frontend'],
  summary: 'Create Registration Flow for Native Apps',
  description:
    'This endpoint initiates a registration flow for API clients such as mobile devices, smart TVs, and so on.\n\nIf a valid provided session cookie or session token is provided, a 400 Bad Request error\nwill be returned unless the URL query parameter `?refresh=true` is set.\n\nTo fetch an existing registration flow call `/self-service/registration/flows?flow=<flow_id>`.\n\nYou MUST NOT use this endpoint in client-side (Single Page Apps, ReactJS, AngularJS) nor server-side (Java Server\nPages, NodeJS, PHP, Golang, ...) browser applications. Using this endpoint in these applications will make\nyou vulnerable to a variety of CSRF attacks.\n\nIn the case of an error, the `error.id` of the JSON response body can be one of:\n\n`session_already_available`: The user is already signed in.\n`security_csrf_violation`: Unable to fetch the flow because a CSRF violation occurred.\n\nThis endpoint MUST ONLY be used in scenarios such as native mobile apps (React Native, Objective C, Swift, Java, ...).\n\nMore information can be found at [Ory Kratos User Login](https://www.ory.com/docs/kratos/self-service/flows/user-login) and [User Registration Documentation](https://www.ory.com/docs/kratos/self-service/flows/user-registration).',
  operationId: 'createNativeRegistrationFlow',
  request: {
    query: z.object({
      return_session_token_exchange_code: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'EnableSessionTokenExchangeCode requests the login flow to include a code that can be used to retrieve the session token\nafter the login flow has been completed.',
            in: 'query',
            name: 'return_session_token_exchange_code',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      return_to: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The URL to return the browser to after the flow was completed.',
            in: 'query',
            name: 'return_to',
            schema: { type: 'string' },
            required: false,
          },
        }),
      organization: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'An optional organization ID that should be used to register this user.\nThis parameter is only effective in the Ory Network.',
            in: 'query',
            name: 'organization',
            schema: { type: 'string' },
            required: false,
          },
        }),
      identity_schema: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An optional identity schema to use for the registration flow.',
            in: 'query',
            name: 'identity_schema',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'registrationFlow',
      content: { 'application/json': { schema: RegistrationFlowSchema } },
    },
    400: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    default: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
  },
})

export const getSelfServiceRegistrationBrowserRoute = createRoute({
  method: 'get',
  path: '/self-service/registration/browser',
  tags: ['frontend'],
  summary: 'Create Registration Flow for Browsers',
  description:
    'This endpoint initializes a browser-based user registration flow. This endpoint will set the appropriate\ncookies and anti-CSRF measures required for browser-based flows.\n\nIf this endpoint is opened as a link in the browser, it will be redirected to\n`selfservice.flows.registration.ui_url` with the flow ID set as the query parameter `?flow=`. If a valid user session\nexists already, the browser will be redirected to `urls.default_redirect_url`.\n\nIf this endpoint is called via an AJAX request, the response contains the flow without a redirect. In the\ncase of an error, the `error.id` of the JSON response body can be one of:\n\n`session_already_available`: The user is already signed in.\n`security_csrf_violation`: Unable to fetch the flow because a CSRF violation occurred.\n`security_identity_mismatch`: The requested `?return_to` address is not allowed to be used. Adjust this in the configuration!\n\nIf this endpoint is called via an AJAX request, the response contains the registration flow without a redirect.\n\nThis endpoint is NOT INTENDED for clients that do not have a browser (Chrome, Firefox, ...) as cookies are needed.\n\nMore information can be found at [Ory Kratos User Login](https://www.ory.com/docs/kratos/self-service/flows/user-login) and [User Registration Documentation](https://www.ory.com/docs/kratos/self-service/flows/user-registration).',
  operationId: 'createBrowserRegistrationFlow',
  request: {
    query: z.object({
      return_to: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The URL to return the browser to after the flow was completed.',
            in: 'query',
            name: 'return_to',
            schema: { type: 'string' },
            required: false,
          },
        }),
      login_challenge: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Ory OAuth 2.0 Login Challenge.\n\nIf set will cooperate with Ory OAuth2 and OpenID to act as an OAuth2 server / OpenID Provider.\n\nThe value for this parameter comes from `login_challenge` URL Query parameter sent to your\napplication (e.g. `/registration?login_challenge=abcde`).\n\nThis feature is compatible with Ory Hydra when not running on the Ory Network.',
            in: 'query',
            name: 'login_challenge',
            schema: { type: 'string' },
            required: false,
          },
        }),
      after_verification_return_to: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The URL to return the browser to after the verification flow was completed.\n\nAfter the registration flow is completed, the user will be sent a verification email.\nUpon completing the verification flow, this URL will be used to override the default\n`selfservice.flows.verification.after.default_redirect_to` value.',
            in: 'query',
            name: 'after_verification_return_to',
            schema: { type: 'string' },
            required: false,
          },
        }),
      organization: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'An optional organization ID that should be used to register this user.\nThis parameter is only effective in the Ory Network.',
            in: 'query',
            name: 'organization',
            schema: { type: 'string' },
            required: false,
          },
        }),
      identity_schema: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An optional identity schema to use for the registration flow.',
            in: 'query',
            name: 'identity_schema',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'registrationFlow',
      content: { 'application/json': { schema: RegistrationFlowSchema } },
    },
    303: EmptyResponseResponse,
    default: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
  },
})

export const getSelfServiceRegistrationFlowsRoute = createRoute({
  method: 'get',
  path: '/self-service/registration/flows',
  tags: ['frontend'],
  summary: 'Get Registration Flow',
  description:
    "This endpoint returns a registration flow's context with, for example, error details and other information.\n\nBrowser flows expect the anti-CSRF cookie to be included in the request's HTTP Cookie Header.\nFor AJAX requests you must ensure that cookies are included in the request or requests will fail.\n\nIf you use the browser-flow for server-side apps, the services need to run on a common top-level-domain\nand you need to forward the incoming HTTP Cookie header to this endpoint:\n\n```js\npseudo-code example\nrouter.get('/registration', async function (req, res) {\nconst flow = await client.getRegistrationFlow(req.header('cookie'), req.query['flow'])\n\nres.render('registration', flow)\n})\n```\n\nThis request may fail due to several reasons. The `error.id` can be one of:\n\n`session_already_available`: The user is already signed in.\n`self_service_flow_expired`: The flow is expired and you should request a new one.\n\nMore information can be found at [Ory Kratos User Login](https://www.ory.com/docs/kratos/self-service/flows/user-login) and [User Registration Documentation](https://www.ory.com/docs/kratos/self-service/flows/user-registration).",
  operationId: 'getRegistrationFlow',
  request: {
    query: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description:
              'The Registration Flow ID\n\nThe value for this parameter comes from `flow` URL Query parameter sent to your\napplication (e.g. `/registration?flow=abcde`).',
            in: 'query',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      Cookie: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'HTTP Cookies\n\nWhen using the SDK in a browser app, on the server side you must include the HTTP Cookie Header\nsent by the client to your server here. This ensures that CSRF and session cookies are respected.',
            in: 'header',
            name: 'Cookie',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'registrationFlow',
      content: { 'application/json': { schema: RegistrationFlowSchema } },
    },
    403: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    404: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    410: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    default: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
  },
})

export const postSelfServiceSettingsRoute = createRoute({
  method: 'post',
  path: '/self-service/settings',
  tags: ['frontend'],
  summary: 'Complete Settings Flow',
  description:
    "Use this endpoint to complete a settings flow by sending an identity's updated password. This endpoint\nbehaves differently for API and browser flows.\n\nAPI-initiated flows expect `application/json` to be sent in the body and respond with\nHTTP 200 and an application/json body with the session token on success;\nHTTP 303 redirect to a fresh settings flow if the original flow expired with the appropriate error messages set;\nHTTP 400 on form validation errors.\nHTTP 401 when the endpoint is called without a valid session token.\nHTTP 403 when `selfservice.flows.settings.privileged_session_max_age` was reached or the session's AAL is too low.\nImplies that the user needs to re-authenticate.\n\nBrowser flows without HTTP Header `Accept` or with `Accept: text/*` respond with\na HTTP 303 redirect to the post/after settings URL or the `return_to` value if it was set and if the flow succeeded;\na HTTP 303 redirect to the Settings UI URL with the flow ID containing the validation errors otherwise.\na HTTP 303 redirect to the login endpoint when `selfservice.flows.settings.privileged_session_max_age` was reached or the session's AAL is too low.\n\nBrowser flows with HTTP Header `Accept: application/json` respond with\nHTTP 200 and a application/json body with the signed in identity and a `Set-Cookie` header on success;\nHTTP 303 redirect to a fresh login flow if the original flow expired with the appropriate error messages set;\nHTTP 401 when the endpoint is called without a valid session cookie.\nHTTP 403 when the page is accessed without a session cookie or the session's AAL is too low.\nHTTP 400 on form validation errors.\n\nDepending on your configuration this endpoint might return a 403 error if the session has a lower Authenticator\nAssurance Level (AAL) than is possible for the identity. This can happen if the identity has password + webauthn\ncredentials (which would result in AAL2) but the session has only AAL1. If this error occurs, ask the user\nto sign in with the second factor (happens automatically for server-side browser flows) or change the configuration.\n\nIf this endpoint is called with a `Accept: application/json` HTTP header, the response contains the flow without a redirect. In the\ncase of an error, the `error.id` of the JSON response body can be one of:\n\n`session_refresh_required`: The identity requested to change something that needs a privileged session. Redirect\nthe identity to the login init endpoint with query parameters `?refresh=true&return_to=<the-current-browser-url>`,\nor initiate a refresh login flow otherwise.\n`security_csrf_violation`: Unable to fetch the flow because a CSRF violation occurred.\n`session_inactive`: No Ory Session was found - sign in a user first.\n`security_identity_mismatch`: The flow was interrupted with `session_refresh_required` but apparently some other\nidentity logged in instead.\n`security_identity_mismatch`: The requested `?return_to` address is not allowed to be used. Adjust this in the configuration!\n`browser_location_change_required`: Usually sent when an AJAX request indicates that the browser needs to open a specific URL.\nMost likely used in Social Sign In flows.\n\nMore information can be found at [Ory Kratos User Settings & Profile Management Documentation](../self-service/flows/user-settings).",
  operationId: 'updateSettingsFlow',
  request: {
    query: z.object({
      flow: z
        .string()
        .openapi({
          param: {
            description:
              'The Settings Flow ID\n\nThe value for this parameter comes from `flow` URL Query parameter sent to your\napplication (e.g. `/settings?flow=abcde`).',
            in: 'query',
            name: 'flow',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'X-Session-Token': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Session Token of the Identity performing the settings flow.',
            in: 'header',
            name: 'X-Session-Token',
            schema: { type: 'string' },
            required: false,
          },
        }),
      Cookie: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'HTTP Cookies\n\nWhen using the SDK in a browser app, on the server side you must include the HTTP Cookie Header\nsent by the client to your server here. This ensures that CSRF and session cookies are respected.',
            in: 'header',
            name: 'Cookie',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: UpdateSettingsFlowBodySchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .xor([
              UpdateSettingsFlowWithPasswordMethodSchema,
              UpdateSettingsFlowWithProfileMethodSchema,
              UpdateSettingsFlowWithOidcMethodSchema,
              UpdateSettingsFlowWithSamlMethodSchema,
              z
                .object({
                  csrf_token: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'CSRFToken is the anti-CSRF token' }),
                  method: z
                    .string()
                    .openapi({
                      description:
                        'Method\n\nShould be set to "totp" when trying to add, update, or remove a totp pairing.',
                    }),
                  totp_code: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'ValidationTOTP must contain a valid TOTP based on the',
                    }),
                  totp_unlink: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      z.boolean(),
                    )
                    .exactOptional()
                    .openapi({
                      description:
                        'UnlinkTOTP if true will remove the TOTP pairing,\neffectively removing the credential. This can be used\nto set up a new TOTP device.',
                    }),
                  transient_payload: z
                    .object({})
                    .exactOptional()
                    .openapi({ description: 'Transient data to pass along to any webhooks' }),
                })
                .openapi({
                  description: 'Update Settings Flow with TOTP Method',
                  required: ['method'],
                }),
              UpdateSettingsFlowWithWebAuthnMethodSchema,
              z
                .object({
                  csrf_token: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'CSRFToken is the anti-CSRF token' }),
                  lookup_secret_confirm: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      z.boolean(),
                    )
                    .exactOptional()
                    .openapi({
                      description: 'If set to true will save the regenerated lookup secrets',
                    }),
                  lookup_secret_disable: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      z.boolean(),
                    )
                    .exactOptional()
                    .openapi({ description: 'Disables this method if true.' }),
                  lookup_secret_regenerate: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      z.boolean(),
                    )
                    .exactOptional()
                    .openapi({ description: 'If set to true will regenerate the lookup secrets' }),
                  lookup_secret_reveal: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      z.boolean(),
                    )
                    .exactOptional()
                    .openapi({ description: 'If set to true will reveal the lookup secrets' }),
                  method: z
                    .string()
                    .openapi({
                      description:
                        'Method\n\nShould be set to "lookup" when trying to add, update, or remove a lookup pairing.',
                    }),
                  transient_payload: z
                    .object({})
                    .exactOptional()
                    .openapi({ description: 'Transient data to pass along to any webhooks' }),
                })
                .openapi({
                  description: 'Update Settings Flow with Lookup Method',
                  required: ['method'],
                }),
              UpdateSettingsFlowWithPasskeyMethodSchema,
            ])
            .openapi({
              description: 'Update Settings Flow Request Body',
              discriminator: {
                mapping: {
                  lookup_secret: '#/components/schemas/updateSettingsFlowWithLookupMethod',
                  oidc: '#/components/schemas/updateSettingsFlowWithOidcMethod',
                  passkey: '#/components/schemas/updateSettingsFlowWithPasskeyMethod',
                  password: '#/components/schemas/updateSettingsFlowWithPasswordMethod',
                  profile: '#/components/schemas/updateSettingsFlowWithProfileMethod',
                  saml: '#/components/schemas/updateSettingsFlowWithSamlMethod',
                  totp: '#/components/schemas/updateSettingsFlowWithTotpMethod',
                  webauthn: '#/components/schemas/updateSettingsFlowWithWebAuthnMethod',
                },
                propertyName: 'method',
              },
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'settingsFlow',
      content: { 'application/json': { schema: SettingsFlowSchema } },
    },
    303: EmptyResponseResponse,
    400: {
      description: 'settingsFlow',
      content: { 'application/json': { schema: SettingsFlowSchema } },
    },
    401: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    403: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    410: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    422: {
      description: 'errorBrowserLocationChangeRequired',
      content: { 'application/json': { schema: ErrorBrowserLocationChangeRequiredSchema } },
    },
    default: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
  },
  security: [{ sessionToken: [] }],
})

export const getSelfServiceSettingsApiRoute = createRoute({
  method: 'get',
  path: '/self-service/settings/api',
  tags: ['frontend'],
  summary: 'Create Settings Flow for Native Apps',
  description:
    'This endpoint initiates a settings flow for API clients such as mobile devices, smart TVs, and so on.\nYou must provide a valid Ory Kratos Session Token for this endpoint to respond with HTTP 200 OK.\n\nTo fetch an existing settings flow call `/self-service/settings/flows?flow=<flow_id>`.\n\nYou MUST NOT use this endpoint in client-side (Single Page Apps, ReactJS, AngularJS) nor server-side (Java Server\nPages, NodeJS, PHP, Golang, ...) browser applications. Using this endpoint in these applications will make\nyou vulnerable to a variety of CSRF attacks.\n\nDepending on your configuration this endpoint might return a 403 error if the session has a lower Authenticator\nAssurance Level (AAL) than is possible for the identity. This can happen if the identity has password + webauthn\ncredentials (which would result in AAL2) but the session has only AAL1. If this error occurs, ask the user\nto sign in with the second factor or change the configuration.\n\nIn the case of an error, the `error.id` of the JSON response body can be one of:\n\n`security_csrf_violation`: Unable to fetch the flow because a CSRF violation occurred.\n`session_inactive`: No Ory Session was found - sign in a user first.\n\nThis endpoint MUST ONLY be used in scenarios such as native mobile apps (React Native, Objective C, Swift, Java, ...).\n\nMore information can be found at [Ory Kratos User Settings & Profile Management Documentation](../self-service/flows/user-settings).',
  operationId: 'createNativeSettingsFlow',
  request: {
    headers: z.object({
      'X-Session-Token': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Session Token of the Identity performing the settings flow.',
            in: 'header',
            name: 'X-Session-Token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    query: z.object({
      organization: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'An optional organization ID that scopes the settings flow to providers of that organization.\nThis parameter is only effective in the Ory Network.',
            in: 'query',
            name: 'organization',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'settingsFlow',
      content: { 'application/json': { schema: SettingsFlowSchema } },
    },
    400: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    default: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
  },
})

export const getSelfServiceSettingsBrowserRoute = createRoute({
  method: 'get',
  path: '/self-service/settings/browser',
  tags: ['frontend'],
  summary: 'Create Settings Flow for Browsers',
  description:
    'This endpoint initializes a browser-based user settings flow. Once initialized, the browser will be redirected to\n`selfservice.flows.settings.ui_url` with the flow ID set as the query parameter `?flow=`. If no valid\nOry Kratos Session Cookie is included in the request, a login flow will be initialized.\n\nIf this endpoint is opened as a link in the browser, it will be redirected to\n`selfservice.flows.settings.ui_url` with the flow ID set as the query parameter `?flow=`. If no valid user session\nwas set, the browser will be redirected to the login endpoint.\n\nIf this endpoint is called via an AJAX request, the response contains the settings flow without any redirects\nor a 401 forbidden error if no valid session was set.\n\nDepending on your configuration this endpoint might return a 403 error if the session has a lower Authenticator\nAssurance Level (AAL) than is possible for the identity. This can happen if the identity has password + webauthn\ncredentials (which would result in AAL2) but the session has only AAL1. If this error occurs, ask the user\nto sign in with the second factor (happens automatically for server-side browser flows) or change the configuration.\n\nIf this endpoint is called via an AJAX request, the response contains the flow without a redirect. In the\ncase of an error, the `error.id` of the JSON response body can be one of:\n\n`security_csrf_violation`: Unable to fetch the flow because a CSRF violation occurred.\n`session_inactive`: No Ory Session was found - sign in a user first.\n`security_identity_mismatch`: The requested `?return_to` address is not allowed to be used. Adjust this in the configuration!\n\nThis endpoint is NOT INTENDED for clients that do not have a browser (Chrome, Firefox, ...) as cookies are needed.\n\nMore information can be found at [Ory Kratos User Settings & Profile Management Documentation](../self-service/flows/user-settings).',
  operationId: 'createBrowserSettingsFlow',
  request: {
    query: z.object({
      return_to: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The URL to return the browser to after the flow was completed.',
            in: 'query',
            name: 'return_to',
            schema: { type: 'string' },
            required: false,
          },
        }),
      organization: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'An optional organization ID that scopes the settings flow to providers of that organization.\nThis parameter is only effective in the Ory Network.',
            in: 'query',
            name: 'organization',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    headers: z.object({
      Cookie: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'HTTP Cookies\n\nWhen using the SDK in a browser app, on the server side you must include the HTTP Cookie Header\nsent by the client to your server here. This ensures that CSRF and session cookies are respected.',
            in: 'header',
            name: 'Cookie',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'settingsFlow',
      content: { 'application/json': { schema: SettingsFlowSchema } },
    },
    303: EmptyResponseResponse,
    400: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    401: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    403: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    default: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
  },
})

export const getSelfServiceSettingsFlowsRoute = createRoute({
  method: 'get',
  path: '/self-service/settings/flows',
  tags: ['frontend'],
  summary: 'Get Settings Flow',
  description:
    "When accessing this endpoint through Ory Kratos' Public API you must ensure that either the Ory Kratos Session Cookie\nor the Ory Kratos Session Token are set.\n\nDepending on your configuration this endpoint might return a 403 error if the session has a lower Authenticator\nAssurance Level (AAL) than is possible for the identity. This can happen if the identity has password + webauthn\ncredentials (which would result in AAL2) but the session has only AAL1. If this error occurs, ask the user\nto sign in with the second factor or change the configuration.\n\nYou can access this endpoint without credentials when using Ory Kratos' Admin API.\n\nIf this endpoint is called via an AJAX request, the response contains the flow without a redirect. In the\ncase of an error, the `error.id` of the JSON response body can be one of:\n\n`security_csrf_violation`: Unable to fetch the flow because a CSRF violation occurred.\n`session_inactive`: No Ory Session was found - sign in a user first.\n`security_identity_mismatch`: The flow was interrupted with `session_refresh_required` but apparently some other\nidentity logged in instead.\n\nMore information can be found at [Ory Kratos User Settings & Profile Management Documentation](../self-service/flows/user-settings).",
  operationId: 'getSettingsFlow',
  request: {
    query: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description:
              'ID is the Settings Flow ID\n\nThe value for this parameter comes from `flow` URL Query parameter sent to your\napplication (e.g. `/settings?flow=abcde`).',
            in: 'query',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'X-Session-Token': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The Session Token\n\nWhen using the SDK in an app without a browser, please include the\nsession token here.',
            in: 'header',
            name: 'X-Session-Token',
            schema: { type: 'string' },
            required: false,
          },
        }),
      Cookie: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'HTTP Cookies\n\nWhen using the SDK in a browser app, on the server side you must include the HTTP Cookie Header\nsent by the client to your server here. This ensures that CSRF and session cookies are respected.',
            in: 'header',
            name: 'Cookie',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'settingsFlow',
      content: { 'application/json': { schema: SettingsFlowSchema } },
    },
    401: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    403: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    404: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    410: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    default: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
  },
})

export const postSelfServiceVerificationRoute = createRoute({
  method: 'post',
  path: '/self-service/verification',
  tags: ['frontend'],
  summary: 'Complete Verification Flow',
  description:
    'Use this endpoint to complete a verification flow. This endpoint\nbehaves differently for API and browser flows and has several states:\n\n`choose_method` expects `flow` (in the URL query) and `email` (in the body) to be sent\nand works with API- and Browser-initiated flows.\nFor API clients and Browser clients with HTTP Header `Accept: application/json` it either returns a HTTP 200 OK when the form is valid and HTTP 400 OK when the form is invalid\nand a HTTP 303 See Other redirect with a fresh verification flow if the flow was otherwise invalid (e.g. expired).\nFor Browser clients without HTTP Header `Accept` or with `Accept: text/*` it returns a HTTP 303 See Other redirect to the Verification UI URL with the Verification Flow ID appended.\n`sent_email` is the success state after `choose_method` when using the `link` method and allows the user to request another verification email. It\nworks for both API and Browser-initiated flows and returns the same responses as the flow in `choose_method` state.\n`passed_challenge` expects a `token` to be sent in the URL query and given the nature of the flow ("sending a verification link")\ndoes not have any API capabilities. The server responds with a HTTP 303 See Other redirect either to the Settings UI URL\n(if the link was valid) and instructs the user to update their password, or a redirect to the Verification UI URL with\na new Verification Flow ID which contains an error message that the verification link was invalid.\n\nMore information can be found at [Ory Kratos Email and Phone Verification Documentation](https://www.ory.com/docs/kratos/self-service/flows/verify-email-account-activation).',
  operationId: 'updateVerificationFlow',
  request: {
    query: z.object({
      flow: z
        .string()
        .openapi({
          param: {
            description:
              'The Verification Flow ID\n\nThe value for this parameter comes from `flow` URL Query parameter sent to your\napplication (e.g. `/verification?flow=abcde`).',
            in: 'query',
            name: 'flow',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Verification Token\n\nThe verification token which completes the verification request. If the token\nis invalid (e.g. expired) an error will be shown to the end-user.\n\nThis parameter is usually set in a link and not used by any direct API call.',
            in: 'query',
            name: 'token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    headers: z.object({
      Cookie: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'HTTP Cookies\n\nWhen using the SDK in a browser app, on the server side you must include the HTTP Cookie Header\nsent by the client to your server here. This ensures that CSRF and session cookies are respected.',
            in: 'header',
            name: 'Cookie',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: UpdateVerificationFlowBodySchema },
        'application/x-www-form-urlencoded': { schema: UpdateVerificationFlowBodySchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'verificationFlow',
      content: { 'application/json': { schema: VerificationFlowSchema } },
    },
    303: EmptyResponseResponse,
    400: {
      description: 'verificationFlow',
      content: { 'application/json': { schema: VerificationFlowSchema } },
    },
    410: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    default: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
  },
})

export const getSelfServiceVerificationApiRoute = createRoute({
  method: 'get',
  path: '/self-service/verification/api',
  tags: ['frontend'],
  summary: 'Create Verification Flow for Native Apps',
  description:
    'This endpoint initiates a verification flow for API clients such as mobile devices, smart TVs, and so on.\n\nTo fetch an existing verification flow call `/self-service/verification/flows?flow=<flow_id>`.\n\nYou MUST NOT use this endpoint in client-side (Single Page Apps, ReactJS, AngularJS) nor server-side (Java Server\nPages, NodeJS, PHP, Golang, ...) browser applications. Using this endpoint in these applications will make\nyou vulnerable to a variety of CSRF attacks.\n\nThis endpoint MUST ONLY be used in scenarios such as native mobile apps (React Native, Objective C, Swift, Java, ...).\n\nMore information can be found at [Ory Email and Phone Verification Documentation](https://www.ory.com/docs/kratos/self-service/flows/verify-email-account-activation).',
  operationId: 'createNativeVerificationFlow',
  request: {
    query: z.object({
      return_to: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A URL contained in the return_to key of the verification flow.\nThis piece of data has no effect on the actual logic of the flow and is purely informational.',
            in: 'query',
            name: 'return_to',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'verificationFlow',
      content: { 'application/json': { schema: VerificationFlowSchema } },
    },
    400: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    default: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
  },
})

export const getSelfServiceVerificationBrowserRoute = createRoute({
  method: 'get',
  path: '/self-service/verification/browser',
  tags: ['frontend'],
  summary: 'Create Verification Flow for Browser Clients',
  description:
    'This endpoint initializes a browser-based account verification flow. Once initialized, the browser will be redirected to\n`selfservice.flows.verification.ui_url` with the flow ID set as the query parameter `?flow=`.\n\nIf this endpoint is called via an AJAX request, the response contains the recovery flow without any redirects.\n\nThis endpoint is NOT INTENDED for API clients and only works with browsers (Chrome, Firefox, ...).\n\nMore information can be found at [Ory Kratos Email and Phone Verification Documentation](https://www.ory.com/docs/kratos/self-service/flows/verify-email-account-activation).',
  operationId: 'createBrowserVerificationFlow',
  request: {
    query: z.object({
      return_to: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The URL to return the browser to after the flow was completed.',
            in: 'query',
            name: 'return_to',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'verificationFlow',
      content: { 'application/json': { schema: VerificationFlowSchema } },
    },
    303: EmptyResponseResponse,
    default: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
  },
})

export const getSelfServiceVerificationFlowsRoute = createRoute({
  method: 'get',
  path: '/self-service/verification/flows',
  tags: ['frontend'],
  summary: 'Get Verification Flow',
  description:
    "This endpoint returns a verification flow's context with, for example, error details and other information.\n\nBrowser flows expect the anti-CSRF cookie to be included in the request's HTTP Cookie Header.\nFor AJAX requests you must ensure that cookies are included in the request or requests will fail.\n\nIf you use the browser-flow for server-side apps, the services need to run on a common top-level-domain\nand you need to forward the incoming HTTP Cookie header to this endpoint:\n\n```js\npseudo-code example\nrouter.get('/recovery', async function (req, res) {\nconst flow = await client.getVerificationFlow(req.header('cookie'), req.query['flow'])\n\nres.render('verification', flow)\n})\n```\n\nMore information can be found at [Ory Kratos Email and Phone Verification Documentation](https://www.ory.com/docs/kratos/self-service/flows/verify-email-account-activation).",
  operationId: 'getVerificationFlow',
  request: {
    query: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description:
              'The Flow ID\n\nThe value for this parameter comes from `request` URL Query parameter sent to your\napplication (e.g. `/verification?flow=abcde`).',
            in: 'query',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      cookie: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'HTTP Cookies\n\nWhen using the SDK on the server side you must include the HTTP Cookie Header\noriginally sent to your HTTP handler here.',
            in: 'header',
            name: 'cookie',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'verificationFlow',
      content: { 'application/json': { schema: VerificationFlowSchema } },
    },
    403: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    404: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    default: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
  },
})

export const getSessionsRoute = createRoute({
  method: 'get',
  path: '/sessions',
  tags: ['frontend'],
  summary: 'Get My Active Sessions',
  description:
    'This endpoints returns all other active sessions that belong to the logged-in user.\nThe current session can be retrieved by calling the `/sessions/whoami` endpoint.',
  operationId: 'listMySessions',
  request: {
    query: z.object({
      per_page: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n).max(1000n))
        .default(250n)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Deprecated Items per Page\n\nDEPRECATED: Please use `page_token` instead. This parameter will be removed in the future.\n\nThis is the number of items per page.',
            in: 'query',
            name: 'per_page',
            schema: { default: 250, format: 'int64', maximum: 1000, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      page: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description:
              'Deprecated Pagination Page\n\nDEPRECATED: Please use `page_token` instead. This parameter will be removed in the future.\n\nThis value is currently an integer, but it is not sequential. The value is not the page number, but a\nreference. The next page can be any number and some numbers might return an empty list.\n\nFor example, page 2 might not follow after page 1. And even if page 3 and 5 exist, but page 4 might not exist.\nThe first page can be retrieved by omitting this parameter. Following page pointers will be returned in the\n`Link` header.',
            in: 'query',
            name: 'page',
            schema: { format: 'int64', type: 'integer' },
            required: false,
          },
        }),
      page_size: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n).max(500n))
        .default(250n)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Page Size\n\nThis is the number of items per page to return. For details on pagination please head over to the\n[pagination documentation](https://www.ory.com/docs/ecosystem/api-design#pagination).',
            in: 'query',
            name: 'page_size',
            schema: { default: 250, format: 'int64', maximum: 500, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      page_token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Next Page Token\n\nThe next page token. For details on pagination please head over to the\n[pagination documentation](https://www.ory.com/docs/ecosystem/api-design#pagination).',
            in: 'query',
            name: 'page_token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    headers: z.object({
      'X-Session-Token': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set the Session Token when calling from non-browser clients. A session token has a format of `MP2YWEMeM8MxjkGKpH4dqOQ4Q4DlSPaj`.',
            in: 'header',
            name: 'X-Session-Token',
            schema: { type: 'string' },
            required: false,
          },
        }),
      Cookie: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set the Cookie Header. This is especially useful when calling this endpoint from a server-side application. In that\nscenario you must include the HTTP Cookie Header which originally was included in the request to your server.\nAn example of a session in the HTTP Cookie Header is: `ory_kratos_session=a19iOVAbdzdgl70Rq1QZmrKmcjDtdsviCTZx7m9a9yHIUS8Wa9T7hvqyGTsLHi6Qifn2WUfpAKx9DWp0SJGleIn9vh2YF4A16id93kXFTgIgmwIOvbVAScyrx7yVl6bPZnCx27ec4WQDtaTewC1CpgudeDV2jQQnSaCP6ny3xa8qLH-QUgYqdQuoA_LF1phxgRCUfIrCLQOkolX5nv3ze_f==`.\n\nIt is ok if more than one cookie are included here as all other cookies will be ignored.',
            in: 'header',
            name: 'Cookie',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: ListMySessionsResponse,
    400: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    401: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    default: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
  },
})

export const deleteSessionsRoute = createRoute({
  method: 'delete',
  path: '/sessions',
  tags: ['frontend'],
  summary: 'Disable my other sessions',
  description:
    'Calling this endpoint invalidates all except the current session that belong to the logged-in user.\nSession data are not deleted.',
  operationId: 'disableMyOtherSessions',
  request: {
    headers: z.object({
      'X-Session-Token': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set the Session Token when calling from non-browser clients. A session token has a format of `MP2YWEMeM8MxjkGKpH4dqOQ4Q4DlSPaj`.',
            in: 'header',
            name: 'X-Session-Token',
            schema: { type: 'string' },
            required: false,
          },
        }),
      Cookie: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set the Cookie Header. This is especially useful when calling this endpoint from a server-side application. In that\nscenario you must include the HTTP Cookie Header which originally was included in the request to your server.\nAn example of a session in the HTTP Cookie Header is: `ory_kratos_session=a19iOVAbdzdgl70Rq1QZmrKmcjDtdsviCTZx7m9a9yHIUS8Wa9T7hvqyGTsLHi6Qifn2WUfpAKx9DWp0SJGleIn9vh2YF4A16id93kXFTgIgmwIOvbVAScyrx7yVl6bPZnCx27ec4WQDtaTewC1CpgudeDV2jQQnSaCP6ny3xa8qLH-QUgYqdQuoA_LF1phxgRCUfIrCLQOkolX5nv3ze_f==`.\n\nIt is ok if more than one cookie are included here as all other cookies will be ignored.',
            in: 'header',
            name: 'Cookie',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'deleteMySessionsCount',
      content: { 'application/json': { schema: DeleteMySessionsCountSchema } },
    },
    400: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    401: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    default: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
  },
})

export const getSessionsTokenExchangeRoute = createRoute({
  method: 'get',
  path: '/sessions/token-exchange',
  tags: ['frontend'],
  summary: 'Exchange Session Token',
  operationId: 'exchangeSessionToken',
  request: {
    query: z.object({
      init_code: z
        .string()
        .openapi({
          param: {
            description: 'The part of the code return when initializing the flow.',
            in: 'query',
            name: 'init_code',
            required: true,
            schema: { type: 'string' },
          },
        }),
      return_to_code: z
        .string()
        .openapi({
          param: {
            description: 'The part of the code returned by the return_to URL.',
            in: 'query',
            name: 'return_to_code',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successfulNativeLogin',
      content: { 'application/json': { schema: SuccessfulNativeLoginSchema } },
    },
    403: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    404: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    410: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    422: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    default: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
  },
})

export const getSessionsWhoamiRoute = createRoute({
  method: 'get',
  path: '/sessions/whoami',
  tags: ['frontend'],
  summary: 'Check Who the Current HTTP Session Belongs To',
  description:
    'Uses the HTTP Headers in the GET request to determine (e.g. by using checking the cookies) who is authenticated.\nReturns a session object in the body or 401 if the credentials are invalid or no credentials were sent.\nWhen the request it successful it adds the user ID to the \'X-Kratos-Authenticated-Identity-Id\' header\nin the response.\n\nIf you call this endpoint from a server-side application, you must forward the HTTP Cookie Header to this endpoint:\n\n```js\npseudo-code example\nrouter.get(\'/protected-endpoint\', async function (req, res) {\nconst session = await client.toSession(undefined, req.header(\'cookie\'))\n\nconsole.log(session)\n})\n```\n\nWhen calling this endpoint from a non-browser application (e.g. mobile app) you must include the session token:\n\n```js\npseudo-code example\n...\nconst session = await client.toSession("the-session-token")\n\nconsole.log(session)\n```\n\nWhen using a token template, the token is included in the `tokenized` field of the session.\n\n```js\npseudo-code example\n...\nconst session = await client.toSession("the-session-token", { tokenize_as: "example-jwt-template" })\n\nconsole.log(session.tokenized) // The JWT\n```\n\nDepending on your configuration this endpoint might return a 403 status code if the session has a lower Authenticator\nAssurance Level (AAL) than is possible for the identity. This can happen if the identity has password + webauthn\ncredentials (which would result in AAL2) but the session has only AAL1. If this error occurs, ask the user\nto sign in with the second factor or change the configuration.\n\nThis endpoint is useful for:\n\nAJAX calls. Remember to send credentials and set up CORS correctly!\nReverse proxies and API Gateways\nServer-side calls - use the `X-Session-Token` header!\n\nThis endpoint authenticates users by checking:\n\nif the `Cookie` HTTP header was set containing an Ory Kratos Session Cookie;\nif the `Authorization: bearer <ory-session-token>` HTTP header was set with a valid Ory Kratos Session Token;\nif the `X-Session-Token` HTTP header was set with a valid Ory Kratos Session Token.\n\nIf none of these headers are set or the cookie or token are invalid, the endpoint returns a HTTP 401 status code.\n\nAs explained above, this request may fail due to several reasons. The `error.id` can be one of:\n\n`session_inactive`: No active session was found in the request (e.g. no Ory Session Cookie / Ory Session Token).\n`session_aal2_required`: An active session was found but it does not fulfil the Authenticator Assurance Level, implying that the session must (e.g.) authenticate the second factor.',
  operationId: 'toSession',
  request: {
    headers: z.object({
      'X-Session-Token': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set the Session Token when calling from non-browser clients. A session token has a format of `MP2YWEMeM8MxjkGKpH4dqOQ4Q4DlSPaj`.',
            example: 'MP2YWEMeM8MxjkGKpH4dqOQ4Q4DlSPaj',
            in: 'header',
            name: 'X-Session-Token',
            schema: { type: 'string' },
            required: false,
          },
        }),
      Cookie: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set the Cookie Header. This is especially useful when calling this endpoint from a server-side application. In that\nscenario you must include the HTTP Cookie Header which originally was included in the request to your server.\nAn example of a session in the HTTP Cookie Header is: `ory_kratos_session=a19iOVAbdzdgl70Rq1QZmrKmcjDtdsviCTZx7m9a9yHIUS8Wa9T7hvqyGTsLHi6Qifn2WUfpAKx9DWp0SJGleIn9vh2YF4A16id93kXFTgIgmwIOvbVAScyrx7yVl6bPZnCx27ec4WQDtaTewC1CpgudeDV2jQQnSaCP6ny3xa8qLH-QUgYqdQuoA_LF1phxgRCUfIrCLQOkolX5nv3ze_f==`.\n\nIt is ok if more than one cookie are included here as all other cookies will be ignored.',
            example:
              'ory_session=a19iOVAbdzdgl70Rq1QZmrKmcjDtdsviCTZx7m9a9yHIUS8Wa9T7hvqyGTsLHi6Qifn2WUfpAKx9DWp0SJGleIn9vh2YF4A16id93kXFTgIgmwIOvbVAScyrx7yVl6bPZnCx27ec4WQDtaTewC1CpgudeDV2jQQnSaCP6ny3xa8qLH-QUgYqdQuoA_LF1phxgRCUfIrCLQOkolX5nv3ze_f==',
            in: 'header',
            name: 'Cookie',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    query: z.object({
      tokenize_as: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Returns the session additionally as a token (such as a JWT)\n\nThe value of this parameter has to be a valid, configured Ory Session token template. For more information head over to [the documentation](http://ory.sh/docs/identities/session-to-jwt-cors).',
            in: 'query',
            name: 'tokenize_as',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'session', content: { 'application/json': { schema: SessionSchema } } },
    401: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    403: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    default: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
  },
})

export const deleteSessionsIdRoute = createRoute({
  method: 'delete',
  path: '/sessions/{id}',
  tags: ['frontend'],
  summary: 'Disable one of my sessions',
  description:
    'Calling this endpoint invalidates the specified session. The current session cannot be revoked.\nSession data are not deleted.',
  operationId: 'disableMySession',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: "ID is the session's ID.",
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'X-Session-Token': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set the Session Token when calling from non-browser clients. A session token has a format of `MP2YWEMeM8MxjkGKpH4dqOQ4Q4DlSPaj`.',
            in: 'header',
            name: 'X-Session-Token',
            schema: { type: 'string' },
            required: false,
          },
        }),
      Cookie: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set the Cookie Header. This is especially useful when calling this endpoint from a server-side application. In that\nscenario you must include the HTTP Cookie Header which originally was included in the request to your server.\nAn example of a session in the HTTP Cookie Header is: `ory_kratos_session=a19iOVAbdzdgl70Rq1QZmrKmcjDtdsviCTZx7m9a9yHIUS8Wa9T7hvqyGTsLHi6Qifn2WUfpAKx9DWp0SJGleIn9vh2YF4A16id93kXFTgIgmwIOvbVAScyrx7yVl6bPZnCx27ec4WQDtaTewC1CpgudeDV2jQQnSaCP6ny3xa8qLH-QUgYqdQuoA_LF1phxgRCUfIrCLQOkolX5nv3ze_f==`.\n\nIt is ok if more than one cookie are included here as all other cookies will be ignored.',
            in: 'header',
            name: 'Cookie',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    204: EmptyResponseResponse,
    400: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    401: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    default: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
  },
})

export const getVersionRoute = createRoute({
  method: 'get',
  path: '/version',
  tags: ['metadata'],
  summary: 'Return Running Software Version.',
  description:
    'This endpoint returns the version of Ory Kratos.\n\nIf the service supports TLS Edge Termination, this endpoint does not require the\n`X-Forwarded-Proto` header to be set.\n\nBe aware that if you are running multiple nodes of this service, the version will never\nrefer to the cluster state, only to a single instance.',
  operationId: 'getVersion',
  responses: {
    200: {
      description: 'Returns the Ory Kratos version.',
      content: {
        'application/json': {
          schema: z
            .object({ version: z.string().openapi({ description: 'The version of Ory Kratos.' }) })
            .openapi({ required: ['version'] }),
        },
      },
    },
  },
})
