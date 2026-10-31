import { createRoute, z } from '@hono/zod-openapi'

const ConfigIssueSchema = z
  .object({
    config_file: z
      .string()
      .exactOptional()
      .openapi({ title: 'Vulnerable configuration file name' }),
    issues: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({ title: 'List of detected issues' }),
    service_name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ title: 'Affected network service name' }),
    suggestions: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({ title: 'List of suggestions to fix the issues' }),
  })
  .openapi({ title: 'ConfigIssue', required: [] })
  .openapi('ConfigIssue')

const CryptoKeySchema = z
  .object({
    algorithm: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ title: 'Crypto algorithm name of the key' }),
    bits: z.int().nullable().exactOptional().openapi({ title: 'Key length in bits' }),
    file_hash: z.string().exactOptional().openapi({ title: 'SHA2 hash of the crypto key file' }),
    file_name: z.string().exactOptional().openapi({ title: 'Crypto key file name' }),
    pem_type: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ title: 'Key type, e.g., RSAPrivateKey, ECPublicKey, etc' }),
  })
  .openapi({ title: 'CryptoKey', required: [] })
  .openapi('CryptoKey')

const DefaultAccountSchema = z
  .object({
    gid: z.int().nullable().exactOptional().openapi({ title: 'Group id of the account' }),
    hash_algorithm: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ title: "Hash algorithm, '0': DES, '1': '5': SHA2, '2a': Blowfish" }),
    home_dir: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ title: 'Path to the home folder of the account' }),
    name: z.string().exactOptional().openapi({ title: 'OS account name' }),
    pwd_hash: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ title: 'Password hash of the account' }),
    shell: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ title: 'Path to the shell binary of the account' }),
    uid: z.int().nullable().exactOptional().openapi({ title: '*nix user id of the account' }),
  })
  .openapi({ title: 'DefaultAccount', required: [] })
  .openapi('DefaultAccount')

const DeviceFeaturesSchema = z
  .object({
    ftp_banner: z
      .string()
      .default('')
      .exactOptional()
      .openapi({ title: 'FTP service banner(excluding status code, eg. 220)' }),
    hostname: z.string().default('').exactOptional().openapi({ title: 'Device hostname' }),
    http_response: z
      .string()
      .default('')
      .exactOptional()
      .openapi({ title: 'Raw response of the http service' }),
    https_response: z
      .string()
      .default('')
      .exactOptional()
      .openapi({ title: 'Raw response of the https service' }),
    nic_mac: z
      .string()
      .default('')
      .exactOptional()
      .openapi({
        title: 'MAC address of the device network interface in dash or dot separated format',
      }),
    snmp_sysdescr: z
      .string()
      .default('')
      .exactOptional()
      .openapi({ title: 'sysDescr OID string of the SNMP service' }),
    snmp_sysoid: z
      .string()
      .default('')
      .exactOptional()
      .openapi({ title: 'sysObjectID OID string of the SNMP service' }),
    telnet_banner: z
      .string()
      .default('')
      .exactOptional()
      .openapi({ title: 'Telnet service banner' }),
    upnp_response: z
      .string()
      .default('')
      .exactOptional()
      .openapi({ title: 'UPnP service response' }),
  })
  .openapi({
    example: {
      ftp_banner: 'AXIS P3346 Fixed Dome Network Camera 5.20 (2017) ready.',
      hostname: '',
      http_response: '',
      https_response: '',
      nic_mac: '',
      snmp_sysdescr: '',
      snmp_sysoid: '',
      telnet_banner: '',
      upnp_response: '',
    },
    title: 'DeviceFeatures',
    required: [],
  })
  .openapi('DeviceFeatures')

const VulnerabilitySchema = z
  .object({
    cve_id: z.string().exactOptional().openapi({ title: 'CVE ID of the vulnerability' }),
    cvss: z.number().exactOptional().openapi({ title: 'CVSS v3 score of the vulnerability' }),
  })
  .openapi({ title: 'Vulnerability', required: [] })
  .openapi('Vulnerability')

const FirmwareInfoSchema = z
  .object({
    download_url: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ title: "Download url of the firmware file on vendor's site" }),
    name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ title: 'Title of the firmware file published by the device vendor' }),
    release_date: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ title: 'Release date of the firmware file' }),
    sha2: z.string().nullable().exactOptional().openapi({ title: 'Firmware file SHA2 hash' }),
    version: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ title: 'Published firmware file version' }),
  })
  .openapi({ title: 'FirmwareInfo', required: [] })
  .openapi('FirmwareInfo')

const DeviceInfoSchema = z
  .object({
    cve_list: z
      .array(VulnerabilitySchema)
      .nullable()
      .exactOptional()
      .openapi({ title: 'List of CVEs for the specified firmware version' }),
    device_type: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ title: 'Device type,e.g., IP camera, etc' }),
    firmware_info: FirmwareInfoSchema.nullable()
      .exactOptional()
      .openapi({ title: 'Device firmware infromation, release date, download Url, etc' }),
    firmware_version: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ title: 'Device firmware version' }),
    is_discontinued: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ title: 'Device discontinued/retired indicator' }),
    latest_firmware_info: FirmwareInfoSchema.nullable()
      .exactOptional()
      .openapi({ title: 'Latest firmware infromation of the device' }),
    manufacturer: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ title: 'Device manufacturer name' }),
    model_name: z.string().nullable().exactOptional().openapi({ title: 'Device model name' }),
  })
  .openapi({ title: 'DeviceInfo', required: [] })
  .openapi('DeviceInfo')

const PublicKeySchema = z
  .object({
    algorithm: z.string().exactOptional().openapi({ title: 'Crypto algorithm name' }),
    bits: z.int().nullable().exactOptional().openapi({ title: 'key length in bits' }),
  })
  .openapi({ title: 'PublicKey', required: [] })
  .openapi('PublicKey')

const ExpiredCertSchema = z
  .object({
    file_hash: z.string().exactOptional().openapi({ title: 'SHA2 hash of the certificate file' }),
    file_name: z.string().exactOptional().openapi({ title: 'Certificate file name' }),
    public_key: PublicKeySchema.nullable()
      .exactOptional()
      .openapi({ title: 'Public key infromation of the certificate' }),
    subject_name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ title: 'Certificate subject name' }),
    thumb_print: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ title: 'Certificate fingerprint' }),
    valid_from: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ title: 'Certificate validity start date' }),
    valid_to: z.string().nullable().exactOptional().openapi({ title: 'Certificate expiry date' }),
  })
  .openapi({ title: 'ExpiredCert', required: [] })
  .openapi('ExpiredCert')

const RiskSummarySchema = z
  .object({
    client_tools_risk: z
      .string()
      .exactOptional()
      .openapi({ title: 'Risk level of client tools such as busybox' }),
    crypto_risk: z.string().exactOptional().openapi({ title: 'Crypto libraries risk level' }),
    kernel_risk: z.string().exactOptional().openapi({ title: 'Kernel risk level' }),
    net_services_risk: z
      .string()
      .exactOptional()
      .openapi({
        title:
          "Qualitative risk level of device network services in the scale of 'Critical' to 'None'",
      }),
  })
  .openapi({ title: 'RiskSummary', required: [] })
  .openapi('RiskSummary')

const VulnerableComponentSchema = z
  .object({
    category: z
      .string()
      .exactOptional()
      .openapi({ title: "Component category: 'UPnP Server', 'Web Server', etc" }),
    cvss_max: z
      .number()
      .exactOptional()
      .openapi({ title: 'Maximum CVSS score of the detected vulnerabilities' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ title: 'Vulnerable component name, e.g., upnp, busybox, etc' }),
    version: z.string().exactOptional().openapi({ title: 'Vulnerable component version' }),
    vulnerabilities: z
      .array(VulnerabilitySchema)
      .exactOptional()
      .openapi({ title: 'List of component vulnerabilities' }),
  })
  .openapi({ title: 'VulnerableComponent', required: [] })
  .openapi('VulnerableComponent')

const FirmwareRiskSchema = z
  .object({
    risk_summary: RiskSummarySchema.exactOptional().openapi({
      title:
        'Qualitative risk levels of network services, crypto libraries, kernel and client tools in the analyzed firmware',
    }),
    vulnerable_components: z
      .array(VulnerableComponentSchema)
      .exactOptional()
      .openapi({ title: 'Details of vulnerable firmware components' }),
  })
  .openapi({ title: 'FirmwareRisk', required: [] })
  .openapi('FirmwareRisk')

const ValidationErrorSchema = z
  .object({
    loc: z.array(z.string()).openapi({ title: 'Location' }),
    msg: z.string().openapi({ title: 'Message' }),
    type: z.string().openapi({ title: 'Error Type' }),
  })
  .openapi({ required: ['loc', 'msg', 'type'], title: 'ValidationError' })
  .openapi('ValidationError')

const HTTPValidationErrorSchema = z
  .object({ detail: z.array(ValidationErrorSchema).exactOptional().openapi({ title: 'Detail' }) })
  .openapi({ title: 'HTTPValidationError', required: [] })
  .openapi('HTTPValidationError')

const WeakCertSchema = z
  .object({
    file_hash: z.string().exactOptional().openapi({ title: 'SHA2 hash of the certificate file' }),
    file_name: z.string().exactOptional().openapi({ title: 'Certificate file name' }),
    sign_algorithm: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ title: 'Ceritifcate signing algorithm name, e.g., sha1' }),
    subject_name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ title: 'Certificate subject name' }),
    thumb_print: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ title: 'Certificate fingerprint' }),
    valid_from: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ title: 'Certificate validity start date' }),
    valid_to: z.string().nullable().exactOptional().openapi({ title: 'Certificate expiry date' }),
  })
  .openapi({ title: 'WeakCert', required: [] })
  .openapi('WeakCert')

const ApiKeyHeaderSecurityScheme = { in: 'header', name: 'x-api-key', type: 'apiKey' }

export const postDeviceDetectRoute = createRoute({
  method: 'post',
  path: '/device/detect',
  tags: ['device'],
  summary: 'Detect iot device by service banners and mac address',
  description:
    'Use device service banners and mac address captured by your network port scanner, vulnerability assessment or asset discovery tools to detect device maker, model and firmware information',
  operationId: 'detect_device',
  request: {
    body: { content: { 'application/json': { schema: DeviceFeaturesSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: DeviceInfoSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ 'api-key-header': [] }],
})

export const getFirmwareFirmwareHashAccountsRoute = createRoute({
  method: 'get',
  path: '/firmware/{firmware_hash}/accounts',
  tags: ['firmware'],
  summary: 'Get default accounts and password hashes of a firmware',
  operationId: 'get_accounts',
  request: {
    params: z.object({
      firmware_hash: z
        .string()
        .openapi({
          param: {
            description: 'SHA2 hash of device firmware',
            in: 'path',
            name: 'firmware_hash',
            required: true,
            schema: {
              description: 'SHA2 hash of device firmware',
              example: 'af88b1aaac0b222df8539f3ae1479b5c8eaeae41f1776b5dd2fa805cb33a1175',
              title: 'Firmware Hash',
              type: 'string',
            },
          },
          description: 'SHA2 hash of device firmware',
          example: 'af88b1aaac0b222df8539f3ae1479b5c8eaeae41f1776b5dd2fa805cb33a1175',
          title: 'Firmware Hash',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: z
            .array(DefaultAccountSchema)
            .openapi({ title: 'Response Firmware Accounts Firmware  Firmware Hash  Accounts Get' }),
        },
      },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ 'api-key-header': [] }],
})

export const getFirmwareFirmwareHashConfigIssuesRoute = createRoute({
  method: 'get',
  path: '/firmware/{firmware_hash}/config-issues',
  tags: ['firmware'],
  summary: 'Get default OS configuration issues of a device firmware',
  operationId: 'get_config_issues',
  request: {
    params: z.object({
      firmware_hash: z
        .string()
        .openapi({
          param: {
            description: 'SHA2 hash of device firmware',
            in: 'path',
            name: 'firmware_hash',
            required: true,
            schema: {
              description: 'SHA2 hash of device firmware',
              example: 'aa96e4d41a4b0ceb3f1ae4d94f3cb445621b9501e3a9c69e6b9eb37c5888a03c',
              title: 'Firmware Hash',
              type: 'string',
            },
          },
          description: 'SHA2 hash of device firmware',
          example: 'aa96e4d41a4b0ceb3f1ae4d94f3cb445621b9501e3a9c69e6b9eb37c5888a03c',
          title: 'Firmware Hash',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: z
            .array(ConfigIssueSchema)
            .openapi({
              title: 'Response Firmware Config Issues Firmware  Firmware Hash  Config Issues Get',
            }),
        },
      },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ 'api-key-header': [] }],
})

export const getFirmwareFirmwareHashExpiredCertsRoute = createRoute({
  method: 'get',
  path: '/firmware/{firmware_hash}/expired-certs',
  tags: ['firmware'],
  summary: 'Get expired digital certificates embedded in a device firmware',
  operationId: 'get_expired_certs',
  request: {
    params: z.object({
      firmware_hash: z
        .string()
        .openapi({
          param: {
            description: 'SHA2 hash of device firmware',
            in: 'path',
            name: 'firmware_hash',
            required: true,
            schema: {
              description: 'SHA2 hash of device firmware',
              example: 'ac7c090c34338ea6a3b335004755e24578e7e4eee739c5c33736f0822b64907e',
              title: 'Firmware Hash',
              type: 'string',
            },
          },
          description: 'SHA2 hash of device firmware',
          example: 'ac7c090c34338ea6a3b335004755e24578e7e4eee739c5c33736f0822b64907e',
          title: 'Firmware Hash',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: z
            .array(ExpiredCertSchema)
            .openapi({
              title: 'Response Firmware Expired Certs Firmware  Firmware Hash  Expired Certs Get',
            }),
        },
      },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ 'api-key-header': [] }],
})

export const getFirmwareFirmwareHashPrivateKeysRoute = createRoute({
  method: 'get',
  path: '/firmware/{firmware_hash}/private-keys',
  tags: ['firmware'],
  summary: 'Get private crypto keys embedded in a device firmware',
  operationId: 'get_private_keys',
  request: {
    params: z.object({
      firmware_hash: z
        .string()
        .openapi({
          param: {
            description: 'SHA2 hash of device firmware',
            in: 'path',
            name: 'firmware_hash',
            required: true,
            schema: {
              description: 'SHA2 hash of device firmware',
              example: '90e3e68e1c61850f20c50e551816d47d484d7feb46890f5bc0a0e0dab3e3ba0b',
              title: 'Firmware Hash',
              type: 'string',
            },
          },
          description: 'SHA2 hash of device firmware',
          example: '90e3e68e1c61850f20c50e551816d47d484d7feb46890f5bc0a0e0dab3e3ba0b',
          title: 'Firmware Hash',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: z
            .array(CryptoKeySchema)
            .openapi({
              title: 'Response Firmware Private Keys Firmware  Firmware Hash  Private Keys Get',
            }),
        },
      },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ 'api-key-header': [] }],
})

export const getFirmwareFirmwareHashRiskRoute = createRoute({
  method: 'get',
  path: '/firmware/{firmware_hash}/risk',
  tags: ['firmware'],
  summary: 'Get iot device firmware risk analysis',
  operationId: 'get_risk',
  request: {
    params: z.object({
      firmware_hash: z
        .string()
        .openapi({
          param: {
            description: 'SHA2 hash of device firmware',
            in: 'path',
            name: 'firmware_hash',
            required: true,
            schema: {
              description: 'SHA2 hash of device firmware',
              example: 'af88b1aaac0b222df8539f3ae1479b5c8eaeae41f1776b5dd2fa805cb33a1175',
              title: 'Firmware Hash',
              type: 'string',
            },
          },
          description: 'SHA2 hash of device firmware',
          example: 'af88b1aaac0b222df8539f3ae1479b5c8eaeae41f1776b5dd2fa805cb33a1175',
          title: 'Firmware Hash',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: FirmwareRiskSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ 'api-key-header': [] }],
})

export const getFirmwareFirmwareHashWeakCertsRoute = createRoute({
  method: 'get',
  path: '/firmware/{firmware_hash}/weak-certs',
  tags: ['firmware'],
  summary:
    'Get certificates with weak fingerprinting algorithms that are mebedded in a device firmware',
  operationId: 'get_weak_certs',
  request: {
    params: z.object({
      firmware_hash: z
        .string()
        .openapi({
          param: {
            description: 'SHA2 hash of device firmware',
            in: 'path',
            name: 'firmware_hash',
            required: true,
            schema: {
              description: 'SHA2 hash of device firmware',
              example: '52841661d61e00649451cc471e9b56d169df8041926b1252bb3fd0710c27b12c',
              title: 'Firmware Hash',
              type: 'string',
            },
          },
          description: 'SHA2 hash of device firmware',
          example: '52841661d61e00649451cc471e9b56d169df8041926b1252bb3fd0710c27b12c',
          title: 'Firmware Hash',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: z
            .array(WeakCertSchema)
            .openapi({
              title: 'Response Firmware Weak Certs Firmware  Firmware Hash  Weak Certs Get',
            }),
        },
      },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ 'api-key-header': [] }],
})

export const getFirmwareFirmwareHashWeakKeysRoute = createRoute({
  method: 'get',
  path: '/firmware/{firmware_hash}/weak-keys',
  tags: ['firmware'],
  summary: 'Get weak crypto keys with short length',
  operationId: 'get_weak_keys',
  request: {
    params: z.object({
      firmware_hash: z
        .string()
        .openapi({
          param: {
            description: 'SHA2 hash of device firmware',
            in: 'path',
            name: 'firmware_hash',
            required: true,
            schema: {
              description: 'SHA2 hash of device firmware',
              example: '852031776c09f8152c90496f2c3fac85b46a938d20612d7fc03eea8aab46f23e',
              title: 'Firmware Hash',
              type: 'string',
            },
          },
          description: 'SHA2 hash of device firmware',
          example: '852031776c09f8152c90496f2c3fac85b46a938d20612d7fc03eea8aab46f23e',
          title: 'Firmware Hash',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: z
            .array(CryptoKeySchema)
            .openapi({
              title: 'Response Firmware Weak Keys Firmware  Firmware Hash  Weak Keys Get',
            }),
        },
      },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ 'api-key-header': [] }],
})
