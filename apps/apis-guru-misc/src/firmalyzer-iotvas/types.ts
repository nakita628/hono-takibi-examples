type DeviceFeatures = {
  ftp_banner?: string | undefined
  hostname?: string | undefined
  http_response?: string | undefined
  https_response?: string | undefined
  nic_mac?: string | undefined
  snmp_sysdescr?: string | undefined
  snmp_sysoid?: string | undefined
  telnet_banner?: string | undefined
  upnp_response?: string | undefined
}
type Vulnerability = { cve_id?: string | undefined; cvss?: number | undefined }
type DeviceInfo = {
  cve_list?: (Vulnerability[] | null) | undefined
  device_type?: (string | null) | undefined
  firmware_info?:
    | {
        download_url?: (string | null) | undefined
        name?: (string | null) | undefined
        release_date?: (string | null) | undefined
        sha2?: (string | null) | undefined
        version?: (string | null) | undefined
      }
    | undefined
  firmware_version?: (string | null) | undefined
  is_discontinued?: (boolean | null) | undefined
  latest_firmware_info?:
    | {
        download_url?: (string | null) | undefined
        name?: (string | null) | undefined
        release_date?: (string | null) | undefined
        sha2?: (string | null) | undefined
        version?: (string | null) | undefined
      }
    | undefined
  manufacturer?: (string | null) | undefined
  model_name?: (string | null) | undefined
}
type ValidationError = { loc: string[]; msg: string; type: string }
type HTTPValidationError = { detail?: ValidationError[] | undefined }
type DefaultAccount = {
  gid?: (number | null) | undefined
  hash_algorithm?: (string | null) | undefined
  home_dir?: (string | null) | undefined
  name?: string | undefined
  pwd_hash?: (string | null) | undefined
  shell?: (string | null) | undefined
  uid?: (number | null) | undefined
}
type ConfigIssue = {
  config_file?: string | undefined
  issues?: (string[] | null) | undefined
  service_name?: (string | null) | undefined
  suggestions?: (string[] | null) | undefined
}
type ExpiredCert = {
  file_hash?: string | undefined
  file_name?: string | undefined
  public_key?: { algorithm?: string | undefined; bits?: (number | null) | undefined } | undefined
  subject_name?: (string | null) | undefined
  thumb_print?: (string | null) | undefined
  valid_from?: (string | null) | undefined
  valid_to?: (string | null) | undefined
}
type CryptoKey = {
  algorithm?: (string | null) | undefined
  bits?: (number | null) | undefined
  file_hash?: string | undefined
  file_name?: string | undefined
  pem_type?: (string | null) | undefined
}
type VulnerableComponent = {
  category?: string | undefined
  cvss_max?: number | undefined
  name?: string | undefined
  version?: string | undefined
  vulnerabilities?: Vulnerability[] | undefined
}
type FirmwareRisk = {
  risk_summary?:
    | {
        client_tools_risk?: string | undefined
        crypto_risk?: string | undefined
        kernel_risk?: string | undefined
        net_services_risk?: string | undefined
      }
    | undefined
  vulnerable_components?: VulnerableComponent[] | undefined
}
type WeakCert = {
  file_hash?: string | undefined
  file_name?: string | undefined
  sign_algorithm?: (string | null) | undefined
  subject_name?: (string | null) | undefined
  thumb_print?: (string | null) | undefined
  valid_from?: (string | null) | undefined
  valid_to?: (string | null) | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/device/detect': {
      $post:
        | { input: { json: DeviceFeatures }; output: DeviceInfo; outputFormat: 'json'; status: 200 }
        | {
            input: { json: DeviceFeatures }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/firmware/:firmware_hash/accounts': {
      $get:
        | {
            input: { param: { firmware_hash: string } }
            output: DefaultAccount[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { firmware_hash: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/firmware/:firmware_hash/config-issues': {
      $get:
        | {
            input: { param: { firmware_hash: string } }
            output: ConfigIssue[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { firmware_hash: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/firmware/:firmware_hash/expired-certs': {
      $get:
        | {
            input: { param: { firmware_hash: string } }
            output: ExpiredCert[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { firmware_hash: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/firmware/:firmware_hash/private-keys': {
      $get:
        | {
            input: { param: { firmware_hash: string } }
            output: CryptoKey[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { firmware_hash: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/firmware/:firmware_hash/risk': {
      $get:
        | {
            input: { param: { firmware_hash: string } }
            output: FirmwareRisk
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { firmware_hash: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/firmware/:firmware_hash/weak-certs': {
      $get:
        | {
            input: { param: { firmware_hash: string } }
            output: WeakCert[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { firmware_hash: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/firmware/:firmware_hash/weak-keys': {
      $get:
        | {
            input: { param: { firmware_hash: string } }
            output: CryptoKey[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { firmware_hash: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  },
  '/'
>
export default routes
