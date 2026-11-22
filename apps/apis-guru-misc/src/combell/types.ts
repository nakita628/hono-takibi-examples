type AssetType = 'domain' | 'linux_hosting' | 'mysql' | 'dns' | 'mailbox' | 'windows_hosting'
type Account = {
  id?: number | undefined
  identifier?: string | undefined
  servicepack_id?: number | undefined
}
type CreateAccount = {
  ftp_password?: string | undefined
  identifier?: string | undefined
  servicepack_id?: number | undefined
}
type ValidationErrorMessage = { error_code?: string | undefined; error_text?: string | undefined }
type BadRequestResponse = { validation_errors?: ValidationErrorMessage[] | undefined }
type Addon = { id?: number | undefined; name?: string | undefined }
type Servicepack = { id?: number | undefined; name?: string | undefined }
type AccountDetail = {
  addons?: Addon[] | undefined
  id?: number | undefined
  identifier?: string | undefined
  servicepack?: Servicepack | undefined
}
type DnsRecord = {
  content?: string | undefined
  id?: string | undefined
  port?: number | undefined
  priority?: number | undefined
  protocol?: string | undefined
  record_name?: string | undefined
  service?: string | undefined
  target?: string | undefined
  ttl?: number | undefined
  type?: string | undefined
  weight?: number | undefined
}
type Domain = {
  domain_name?: string | undefined
  expiration_date?: string | undefined
  will_renew?: boolean | undefined
}
type ExtraField = { name?: string | undefined; value?: string | undefined }
type RegistrantInput = {
  address?: string | undefined
  city?: string | undefined
  company_name?: string | undefined
  country_code?: string | undefined
  email?: string | undefined
  enterprise_number?: string | undefined
  extra_fields?: ExtraField[] | undefined
  fax?: string | undefined
  first_name?: string | undefined
  language_code?: string | undefined
  last_name?: string | undefined
  phone?: string | undefined
  postal_code?: string | undefined
}
type RegisterDomain = {
  domain_name?: string | undefined
  name_servers?: string[] | undefined
  registrant?: RegistrantInput | undefined
}
type TransferDomain = {
  auth_code?: string | undefined
  domain_name?: string | undefined
  name_servers?: string[] | undefined
  registrant?: RegistrantInput | undefined
}
type NameServer = { ip?: string | undefined; name?: string | undefined }
type Registrant = {
  address?: string | undefined
  city?: string | undefined
  company_name?: string | undefined
  country_code?: string | undefined
  email?: string | undefined
  enterprise_number?: string | undefined
  fax?: string | undefined
  first_name?: string | undefined
  language_code?: string | undefined
  last_name?: string | undefined
  phone?: string | undefined
  postal_code?: string | undefined
}
type DomainDetail = {
  can_toggle_renew?: boolean | undefined
  domain_name?: string | undefined
  expiration_date?: string | undefined
  name_servers?: NameServer[] | undefined
  registrant?: Registrant | undefined
  will_renew?: boolean | undefined
}
type EditNameServers = { domain_name?: string | undefined; name_servers?: string[] | undefined }
type EditDomainWillRenewRequest = { will_renew?: boolean | undefined }
type LinuxHosting = { domain_name?: string | undefined; servicepack_id?: number | undefined }
type LinuxIpType = 'dedicated' | 'shared'
type HostHeader = { enabled?: boolean | undefined; name?: string | undefined }
type LinuxSite = {
  host_headers?: HostHeader[] | undefined
  http2_enabled?: boolean | undefined
  https_redirect_enabled?: boolean | undefined
  name?: string | undefined
  path?: string | undefined
  ssl_enabled?: boolean | undefined
}
type LinuxHostingDetail = {
  actual_size?: number | undefined
  domain_name?: string | undefined
  ftp_enabled?: boolean | undefined
  ftp_username?: string | undefined
  ip?: string | undefined
  ip_type?: LinuxIpType | undefined
  max_size?: number | undefined
  max_webspace_size?: number | undefined
  mysql_database_names?: string[] | undefined
  php_version?: string | undefined
  servicepack_id?: number | undefined
  sites?: LinuxSite[] | undefined
  ssh_host?: string | undefined
  ssh_username?: string | undefined
  webspace_usage?: number | undefined
}
type FtpConfiguration = { enabled?: boolean | undefined }
type UpdatePhpAPcuRequest = { apcu_size?: number | undefined; enabled?: boolean | undefined }
type PhpVersion = { version?: string | undefined }
type UpdatePhpMemoryLimitRequest = { memory_limit?: number | undefined }
type ScheduledTask = {
  cron_expression?: string | undefined
  enabled?: boolean | undefined
  id?: string | undefined
  script_location?: string | undefined
}
type GzipConfig = { enabled?: boolean | undefined }
type AddHostHeaderRequest = { domain_name?: string | undefined }
type Http2Configuration = { enabled?: boolean | undefined }
type SshConfiguration = { enabled?: boolean | undefined }
type SshKey = { fingerprint?: string | undefined; public_key?: string | undefined }
type AddSshKeyRequest = { public_key?: string | undefined }
type AutoRedirectConfig = { enabled?: boolean | undefined }
type LetsEncryptConfig = { enabled?: boolean | undefined }
type AddSubsiteRequest = { domain_name?: string | undefined; path?: string | undefined }
type Mailbox = {
  actual_size?: number | undefined
  max_size?: number | undefined
  name?: string | undefined
}
type CreateMailboxRequest = {
  account_id?: number | undefined
  email_address?: string | undefined
  password?: string | undefined
}
type AutoForward = {
  copy_to_myself?: boolean | undefined
  email_addresses?: string[] | undefined
  enabled?: boolean | undefined
}
type AutoReply = {
  enabled?: boolean | undefined
  message?: string | undefined
  subject?: string | undefined
}
type MailboxDetail = {
  actual_size?: number | undefined
  auto_forward?: AutoForward | undefined
  auto_reply?: AutoReply | undefined
  login?: string | undefined
  max_size?: number | undefined
  name?: string | undefined
}
type UpdateMailboxPasswordRequest = { password?: string | undefined }
type Alias = { destinations?: string[] | undefined; email_address?: string | undefined }
type AntiSpamTypes = 'none' | 'advanced' | 'basic'
type AntiSpam = { allowed_types?: AntiSpamTypes[] | undefined; type?: AntiSpamTypes | undefined }
type MailZoneAccount = { account_id?: number | undefined; size?: number | undefined }
type CatchAll = { email_addresses?: string[] | undefined }
type SmtpDomain = { enabled?: boolean | undefined; hostname?: string | undefined }
type MailZone = {
  aliases?: Alias[] | undefined
  anti_spam?: AntiSpam | undefined
  available_accounts?: MailZoneAccount[] | undefined
  catch_all?: CatchAll | undefined
  enabled?: boolean | undefined
  name?: string | undefined
  smtp_domains?: SmtpDomain[] | undefined
}
type CreateAliasRequest = {
  destinations?: string[] | undefined
  email_address?: string | undefined
}
type UpdateAliasRequest = { destinations?: string[] | undefined }
type UpdateAntiSpamRequest = { type?: AntiSpamTypes | undefined }
type CreateCatchAllRequest = { email_address?: string | undefined }
type CreateSmtpDomainRequest = { hostname?: string | undefined }
type UpdateSmtpDomainRequest = { enabled?: boolean | undefined }
type MySqlDatabase = {
  account_id?: number | undefined
  actual_size?: number | undefined
  hostname?: string | undefined
  max_size?: number | undefined
  name?: string | undefined
  user_count?: number | undefined
}
type CreateMySqlDatabase = {
  account_id?: number | undefined
  database_name?: string | undefined
  password?: string | undefined
}
type UserRights = 'read_and_write' | 'read_only'
type MySqlUser = {
  enabled?: boolean | undefined
  name?: string | undefined
  rights?: UserRights | undefined
}
type CreateMySqlUser = { name?: string | undefined; password?: string | undefined }
type UpdateUserPasswordRequest = { password?: string | undefined }
type UpdateUserStatusRequest = { enabled?: boolean | undefined }
type CompletionEstimation = { estimate?: string | undefined }
type ProvisioningJobStatus = 'ongoing' | 'cancelled' | 'failed' | 'finished'
type ProvisioningJobInfo = {
  completion?: CompletionEstimation | undefined
  id?: string | undefined
  status?: ProvisioningJobStatus | undefined
}
type ProvisioningJobCompletion = { id?: string | undefined; resource_links?: string[] | undefined }
type SshKeyDetail = {
  fingerprint?: string | undefined
  linux_hostings?: string[] | undefined
  public_key?: string | undefined
}
type SslCertificateType = 'standard' | 'multi_domain' | 'wildcard'
type SslCertificateValidationLevel =
  | 'domain_validated'
  | 'organization_validated'
  | 'extended_validated'
type SslCertificateVendor = 'sectigo'
type SslCertificateRequest = {
  certificate_type?: SslCertificateType | undefined
  common_name?: string | undefined
  id?: number | undefined
  order_code?: string | undefined
  validation_level?: SslCertificateValidationLevel | undefined
  vendor?: SslCertificateVendor | undefined
}
type AdditionalValidationAttribute = { name?: string | undefined; value?: string | undefined }
type CreateSslCertificateRequest = {
  additional_validation_attributes?: AdditionalValidationAttribute[] | undefined
  certificate_type?: SslCertificateType | undefined
  csr?: string | undefined
  validation_level?: SslCertificateValidationLevel | undefined
}
type SslSubjectAltNameType = 'dns' | 'ip'
type SslSubjectAltName = { type?: SslSubjectAltNameType | undefined; value?: string | undefined }
type SslCertificateRequestValidationType = 'dns' | 'file' | 'email'
type SslCertificateRequestValidation = {
  auto_validated?: boolean | undefined
  cname_validation_content?: string | undefined
  cname_validation_name?: string | undefined
  dns_name?: string | undefined
  email_addresses?: string[] | undefined
  file_validation_content?: string[] | undefined
  file_validation_url_http?: string | undefined
  file_validation_url_https?: string | undefined
  type?: SslCertificateRequestValidationType | undefined
}
type SslCertificateRequestDetail = {
  certificate_type?: SslCertificateType | undefined
  common_name?: string | undefined
  id?: number | undefined
  order_code?: string | undefined
  subject_alt_names?: SslSubjectAltName[] | undefined
  validation_level?: SslCertificateValidationLevel | undefined
  validations?: SslCertificateRequestValidation[] | undefined
  vendor?: SslCertificateVendor | undefined
}
type SslCertificate = {
  common_name?: string | undefined
  expires_after?: string | undefined
  sha1_fingerprint?: string | undefined
  type?: SslCertificateType | undefined
  validation_level?: SslCertificateValidationLevel | undefined
}
type SslCertificateDetail = {
  common_name?: string | undefined
  expires_after?: string | undefined
  sha1_fingerprint?: string | undefined
  subject_alt_names?: SslSubjectAltName[] | undefined
  type?: SslCertificateType | undefined
  validation_level?: SslCertificateValidationLevel | undefined
}
type SslCertificateFileFormat = 'pfx'
type WindowsHosting = { domain_name?: string | undefined; servicepack_id?: number | undefined }
type ApplicationPool = {
  installed_net_core_runtimes?: string[] | undefined
  pipeline_mode?: string | undefined
  runtime?: string | undefined
}
type WindowsIpType = 'dedicated' | 'shared'
type SiteBinding = {
  cert_thumbprint?: string | undefined
  host_name?: string | undefined
  ip_address?: string | undefined
  port?: number | undefined
  protocol?: string | undefined
  ssl_enabled?: boolean | undefined
}
type WindowsSite = {
  bindings?: SiteBinding[] | undefined
  name?: string | undefined
  path?: string | undefined
}
type WindowsHostingDetail = {
  actual_size?: number | undefined
  application_pool?: ApplicationPool | undefined
  domain_name?: string | undefined
  ftp_username?: string | undefined
  ip?: string | undefined
  ip_type?: WindowsIpType | undefined
  max_size?: number | undefined
  mssql_database_names?: string[] | undefined
  servicepack_id?: number | undefined
  sites?: WindowsSite[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/accounts': {
      $get: {
        input: {
          query: {
            skip?: number | undefined
            take?: number | undefined
            asset_type?: AssetType | undefined
            identifier?: (string | null) | undefined
          }
        }
        output: Account[]
        outputFormat: 'json'
        status: 200
      }
      $post:
        | { input: { json: CreateAccount }; output: {}; outputFormat: string; status: 202 }
        | {
            input: { json: CreateAccount }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/accounts/:accountId': {
      $get: {
        input: { param: { accountId: string } } & { query: { account_id: number } }
        output: AccountDetail
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dns/:domainName/records': {
      $get: {
        input: { param: { domainName: string } } & {
          query: {
            domain_name: string
            skip?: number | undefined
            take?: number | undefined
            type?: (string | null) | undefined
            record_name?: (string | null) | undefined
            service?: (string | null) | undefined
          }
        }
        output: DnsRecord[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { domainName: string } } & { query: { domain_name: string } } & {
          json: DnsRecord
        }
        output: {}
        outputFormat: string
        status: 201
      }
    }
  } & {
    '/dns/:domainName/records/:recordId': {
      $delete: {
        input: { param: { domainName: string; recordId: string } } & {
          query: { domain_name: string; record_id: string }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { domainName: string; recordId: string } } & {
          query: { domain_name: string; record_id: string }
        }
        output: DnsRecord
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { domainName: string; recordId: string } } & {
          query: { domain_name: string; record_id: string }
        } & { json: DnsRecord }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/domains': {
      $get: {
        input: { query: { skip?: number | undefined; take?: number | undefined } }
        output: Domain[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/domains/registrations': {
      $post: { input: { json: RegisterDomain }; output: {}; outputFormat: string; status: 202 }
    }
  } & {
    '/domains/transfers': {
      $post: { input: { json: TransferDomain }; output: {}; outputFormat: string; status: 202 }
    }
  } & {
    '/domains/:domainName': {
      $get: {
        input: { param: { domainName: string } } & { query: { domain_name: string } }
        output: DomainDetail
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/domains/:domainName/nameservers': {
      $put: {
        input: { param: { domainName: string } } & { query: { domain_name: string } } & {
          json: EditNameServers
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/domains/:domainName/renew': {
      $put: {
        input: { param: { domainName: string } } & { query: { domain_name: string } } & {
          json: EditDomainWillRenewRequest
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/linuxhostings': {
      $get: {
        input: { query: { skip?: number | undefined; take?: number | undefined } }
        output: LinuxHosting[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/linuxhostings/:domainName': {
      $get: {
        input: { param: { domainName: string } } & { query: { domain_name: string } }
        output: LinuxHostingDetail
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/linuxhostings/:domainName/ftp/configuration': {
      $put:
        | {
            input: { param: { domainName: string } } & { query: { domain_name: string } } & {
              json: FtpConfiguration
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { domainName: string } } & { query: { domain_name: string } } & {
              json: FtpConfiguration
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/linuxhostings/:domainName/phpsettings/apcu': {
      $put: {
        input: { param: { domainName: string } } & { query: { domain_name: string } } & {
          json: UpdatePhpAPcuRequest
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/linuxhostings/:domainName/phpsettings/availableversions': {
      $get: {
        input: { param: { domainName: string } } & { query: { domain_name: string } }
        output: PhpVersion[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/linuxhostings/:domainName/phpsettings/memorylimit': {
      $put: {
        input: { param: { domainName: string } } & { query: { domain_name: string } } & {
          json: UpdatePhpMemoryLimitRequest
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/linuxhostings/:domainName/phpsettings/version': {
      $put: {
        input: { param: { domainName: string } } & { query: { domain_name: string } } & {
          json: PhpVersion
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/linuxhostings/:domainName/scheduledtasks': {
      $get: {
        input: { param: { domainName: string } } & { query: { domain_name: string } }
        output: ScheduledTask[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { domainName: string } } & { query: { domain_name: string } } & {
          json: ScheduledTask
        }
        output: {}
        outputFormat: string
        status: 201
      }
    }
  } & {
    '/linuxhostings/:domainName/scheduledtasks/:scheduledTaskId': {
      $delete:
        | {
            input: { param: { domainName: string; scheduledTaskId: string } } & {
              query: { domain_name: string; scheduled_task_id: string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { domainName: string; scheduledTaskId: string } } & {
              query: { domain_name: string; scheduled_task_id: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
      $get: {
        input: { param: { domainName: string; scheduledTaskId: string } } & {
          query: { domain_name: string; scheduled_task_id: string }
        }
        output: ScheduledTask
        outputFormat: 'json'
        status: 200
      }
      $put:
        | {
            input: { param: { domainName: string; scheduledTaskId: string } } & {
              query: { domain_name: string; scheduled_task_id: string }
            } & { json: ScheduledTask }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { domainName: string; scheduledTaskId: string } } & {
              query: { domain_name: string; scheduled_task_id: string }
            } & { json: ScheduledTask }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/linuxhostings/:domainName/settings/gzipcompression': {
      $put: {
        input: { param: { domainName: string } } & { query: { domain_name: string } } & {
          json: GzipConfig
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/linuxhostings/:domainName/sites/:siteName/hostheaders': {
      $post: {
        input: { param: { domainName: string; siteName: string } } & {
          query: { domain_name: string; site_name: string }
        } & { json: AddHostHeaderRequest }
        output: {}
        outputFormat: string
        status: 201
      }
    }
  } & {
    '/linuxhostings/:domainName/sites/:siteName/http2/configuration': {
      $put:
        | {
            input: { param: { domainName: string; siteName: string } } & {
              query: { domain_name: string; site_name: string }
            } & { json: Http2Configuration }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { domainName: string; siteName: string } } & {
              query: { domain_name: string; site_name: string }
            } & { json: Http2Configuration }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/linuxhostings/:domainName/ssh/configuration': {
      $put:
        | {
            input: { param: { domainName: string } } & { query: { domain_name: string } } & {
              json: SshConfiguration
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { domainName: string } } & { query: { domain_name: string } } & {
              json: SshConfiguration
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/linuxhostings/:domainName/ssh/keys': {
      $get: {
        input: { param: { domainName: string } } & { query: { domain_name: string } }
        output: SshKey[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { domainName: string } } & { query: { domain_name: string } } & {
          json: AddSshKeyRequest
        }
        output: {}
        outputFormat: string
        status: 201
      }
    }
  } & {
    '/linuxhostings/:domainName/ssh/keys/:fingerprint': {
      $delete:
        | {
            input: { param: { fingerprint: string; domainName: string } } & {
              query: { domain_name: string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { fingerprint: string; domainName: string } } & {
              query: { domain_name: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/linuxhostings/:domainName/sslsettings/:hostname/autoredirect': {
      $put: {
        input: { param: { hostname: string; domainName: string } } & {
          query: { domain_name: string }
        } & { json: AutoRedirectConfig }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/linuxhostings/:domainName/sslsettings/:hostname/letsencrypt': {
      $put: {
        input: { param: { hostname: string; domainName: string } } & {
          query: { domain_name: string }
        } & { json: LetsEncryptConfig }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/linuxhostings/:domainName/subsites': {
      $post: {
        input: { param: { domainName: string } } & { query: { domain_name: string } } & {
          json: AddSubsiteRequest
        }
        output: {}
        outputFormat: string
        status: 201
      }
    }
  } & {
    '/linuxhostings/:domainName/subsites/:siteName': {
      $delete:
        | {
            input: { param: { domainName: string; siteName: string } } & {
              query: { domain_name: string; site_name: string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { domainName: string; siteName: string } } & {
              query: { domain_name: string; site_name: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mailboxes': {
      $get: {
        input: { query: { domain_name?: (string | null) | undefined } }
        output: Mailbox[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: CreateMailboxRequest }
        output: {}
        outputFormat: string
        status: 201
      }
    }
  } & {
    '/mailboxes/:mailboxName': {
      $delete:
        | {
            input: { param: { mailboxName: string } } & { query: { mailbox_name: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { mailboxName: string } } & { query: { mailbox_name: string } }
            output: {}
            outputFormat: string
            status: 400
          }
      $get: {
        input: { param: { mailboxName: string } } & { query: { mailbox_name: string } }
        output: MailboxDetail
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/mailboxes/:mailboxName/autoforward': {
      $put: {
        input: { param: { mailboxName: string } } & { query: { mailbox_name: string } } & {
          json: AutoForward
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/mailboxes/:mailboxName/autoreply': {
      $put: {
        input: { param: { mailboxName: string } } & { query: { mailbox_name: string } } & {
          json: AutoReply
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/mailboxes/:mailboxName/password': {
      $put: {
        input: { param: { mailboxName: string } } & { query: { mailbox_name: string } } & {
          json: UpdateMailboxPasswordRequest
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/mailzones/:domainName': {
      $get: {
        input: { param: { domainName: string } } & { query: { domain_name: string } }
        output: MailZone
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/mailzones/:domainName/aliases': {
      $post:
        | {
            input: { param: { domainName: string } } & { query: { domain_name: string } } & {
              json: CreateAliasRequest
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { domainName: string } } & { query: { domain_name: string } } & {
              json: CreateAliasRequest
            }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/mailzones/:domainName/aliases/:emailAddress': {
      $delete:
        | {
            input: { param: { domainName: string; emailAddress: string } } & {
              query: { domain_name: string; email_address: string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { domainName: string; emailAddress: string } } & {
              query: { domain_name: string; email_address: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
      $put:
        | {
            input: { param: { domainName: string; emailAddress: string } } & {
              query: { domain_name: string; email_address: string }
            } & { json: UpdateAliasRequest }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { domainName: string; emailAddress: string } } & {
              query: { domain_name: string; email_address: string }
            } & { json: UpdateAliasRequest }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/mailzones/:domainName/antispam': {
      $put: {
        input: { param: { domainName: string } } & { query: { domain_name: string } } & {
          json: UpdateAntiSpamRequest
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/mailzones/:domainName/catchall': {
      $post: {
        input: { param: { domainName: string } } & { query: { domain_name: string } } & {
          json: CreateCatchAllRequest
        }
        output: {}
        outputFormat: string
        status: 201
      }
    }
  } & {
    '/mailzones/:domainName/catchall/:emailAddress': {
      $delete: {
        input: { param: { domainName: string; emailAddress: string } } & {
          query: { domain_name: string; email_address: string }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/mailzones/:domainName/smtpdomains': {
      $post:
        | {
            input: { param: { domainName: string } } & { query: { domain_name: string } } & {
              json: CreateSmtpDomainRequest
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { domainName: string } } & { query: { domain_name: string } } & {
              json: CreateSmtpDomainRequest
            }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/mailzones/:domainName/smtpdomains/:hostname': {
      $delete:
        | {
            input: { param: { hostname: string; domainName: string } } & {
              query: { domain_name: string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { hostname: string; domainName: string } } & {
              query: { domain_name: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
      $put:
        | {
            input: { param: { hostname: string; domainName: string } } & {
              query: { domain_name: string }
            } & { json: UpdateSmtpDomainRequest }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { hostname: string; domainName: string } } & {
              query: { domain_name: string }
            } & { json: UpdateSmtpDomainRequest }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/mysqldatabases': {
      $get: {
        input: { query: { skip?: number | undefined; take?: number | undefined } }
        output: MySqlDatabase[]
        outputFormat: 'json'
        status: 200
      }
      $post:
        | { input: { json: CreateMySqlDatabase }; output: {}; outputFormat: string; status: 202 }
        | {
            input: { json: CreateMySqlDatabase }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/mysqldatabases/:databaseName': {
      $delete:
        | {
            input: { param: { databaseName: string } } & { query: { database_name: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { databaseName: string } } & { query: { database_name: string } }
            output: {}
            outputFormat: string
            status: 400
          }
      $get: {
        input: { param: { databaseName: string } } & { query: { database_name: string } }
        output: MySqlDatabase
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/mysqldatabases/:databaseName/users': {
      $get: {
        input: { param: { databaseName: string } } & { query: { database_name: string } }
        output: MySqlUser[]
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { databaseName: string } } & { query: { database_name: string } } & {
              json: CreateMySqlUser
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { databaseName: string } } & { query: { database_name: string } } & {
              json: CreateMySqlUser
            }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/mysqldatabases/:databaseName/users/:userName': {
      $delete:
        | {
            input: { param: { databaseName: string; userName: string } } & {
              query: { database_name: string; user_name: string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { databaseName: string; userName: string } } & {
              query: { database_name: string; user_name: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mysqldatabases/:databaseName/users/:userName/password': {
      $put: {
        input: { param: { databaseName: string; userName: string } } & {
          query: { database_name: string; user_name: string }
        } & { json: UpdateUserPasswordRequest }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/mysqldatabases/:databaseName/users/:userName/status': {
      $put: {
        input: { param: { databaseName: string; userName: string } } & {
          query: { database_name: string; user_name: string }
        } & { json: UpdateUserStatusRequest }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/provisioningjobs/:jobId': {
      $get:
        | {
            input: { param: { jobId: string } } & { query: { job_id: string } }
            output: ProvisioningJobInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { jobId: string } } & { query: { job_id: string } }
            output: ProvisioningJobCompletion
            outputFormat: 'json'
            status: 201
          }
    }
  } & {
    '/servicepacks': {
      $get: { input: {}; output: Servicepack[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/ssh': {
      $get: {
        input: { query: { skip?: number | undefined; take?: number | undefined } }
        output: SshKeyDetail[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sslcertificaterequests': {
      $get: {
        input: { query: { skip?: number | undefined; take?: number | undefined } }
        output: SslCertificateRequest[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: CreateSslCertificateRequest }
        output: {}
        outputFormat: string
        status: 201
      }
    }
  } & {
    '/sslcertificaterequests/:id': {
      $get:
        | {
            input: { param: { id: number } }
            output: SslCertificateRequestDetail
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 303 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 410 }
      $put:
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 202 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 303 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 410 }
    }
  } & {
    '/sslcertificates': {
      $get: {
        input: { query: { skip?: number | undefined; take?: number | undefined } }
        output: SslCertificate[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sslcertificates/:sha1Fingerprint': {
      $get: {
        input: { param: { sha1Fingerprint: string } } & { query: { sha1_fingerprint: string } }
        output: SslCertificateDetail
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sslcertificates/:sha1Fingerprint/download': {
      $get:
        | {
            input: { param: { sha1Fingerprint: string } } & {
              query: {
                sha1_fingerprint: string
                file_format: SslCertificateFileFormat
                password: string
              }
            }
            output: File
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sha1Fingerprint: string } } & {
              query: {
                sha1_fingerprint: string
                file_format: SslCertificateFileFormat
                password: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/windowshostings': {
      $get: {
        input: { query: { skip?: number | undefined; take?: number | undefined } }
        output: WindowsHosting[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/windowshostings/:domainName': {
      $get: {
        input: { param: { domainName: string } } & { query: { domain_name: string } }
        output: WindowsHostingDetail
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
