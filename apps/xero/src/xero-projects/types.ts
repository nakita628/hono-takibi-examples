type Pagination = {
  page?: number | undefined
  pageSize?: number | undefined
  pageCount?: number | undefined
  itemCount?: number | undefined
}
type CurrencyCode =
  | 'AED'
  | 'AFN'
  | 'ALL'
  | 'AMD'
  | 'ANG'
  | 'AOA'
  | 'ARS'
  | 'AUD'
  | 'AWG'
  | 'AZN'
  | 'BAM'
  | 'BBD'
  | 'BDT'
  | 'BGN'
  | 'BHD'
  | 'BIF'
  | 'BMD'
  | 'BND'
  | 'BOB'
  | 'BRL'
  | 'BSD'
  | 'BTN'
  | 'BWP'
  | 'BYN'
  | 'BZD'
  | 'CAD'
  | 'CDF'
  | 'CHF'
  | 'CLP'
  | 'CNY'
  | 'COP'
  | 'CRC'
  | 'CUC'
  | 'CUP'
  | 'CVE'
  | 'CZK'
  | 'DJF'
  | 'DKK'
  | 'DOP'
  | 'DZD'
  | 'EGP'
  | 'ERN'
  | 'ETB'
  | 'EUR'
  | 'FJD'
  | 'FKP'
  | 'GBP'
  | 'GEL'
  | 'GGP'
  | 'GHS'
  | 'GIP'
  | 'GMD'
  | 'GNF'
  | 'GTQ'
  | 'GYD'
  | 'HKD'
  | 'HNL'
  | 'HRK'
  | 'HTG'
  | 'HUF'
  | 'IDR'
  | 'ILS'
  | 'IMP'
  | 'INR'
  | 'IQD'
  | 'IRR'
  | 'ISK'
  | 'JEP'
  | 'JMD'
  | 'JOD'
  | 'JPY'
  | 'KES'
  | 'KGS'
  | 'KHR'
  | 'KMF'
  | 'KPW'
  | 'KRW'
  | 'KWD'
  | 'KYD'
  | 'KZT'
  | 'LAK'
  | 'LBP'
  | 'LKR'
  | 'LRD'
  | 'LSL'
  | 'LYD'
  | 'MAD'
  | 'MDL'
  | 'MGA'
  | 'MKD'
  | 'MMK'
  | 'MNT'
  | 'MOP'
  | 'MRU'
  | 'MUR'
  | 'MVR'
  | 'MWK'
  | 'MXN'
  | 'MYR'
  | 'MZN'
  | 'NAD'
  | 'NGN'
  | 'NIO'
  | 'NOK'
  | 'NPR'
  | 'NZD'
  | 'OMR'
  | 'PAB'
  | 'PEN'
  | 'PGK'
  | 'PHP'
  | 'PKR'
  | 'PLN'
  | 'PYG'
  | 'QAR'
  | 'RON'
  | 'RSD'
  | 'RUB'
  | 'RWF'
  | 'SAR'
  | 'SBD'
  | 'SCR'
  | 'SDG'
  | 'SEK'
  | 'SGD'
  | 'SHP'
  | 'SLL'
  | 'SOS'
  | 'SPL'
  | 'SRD'
  | 'STN'
  | 'SVC'
  | 'SYP'
  | 'SZL'
  | 'THB'
  | 'TJS'
  | 'TMT'
  | 'TND'
  | 'TOP'
  | 'TRY'
  | 'TTD'
  | 'TVD'
  | 'TWD'
  | 'TZS'
  | 'UAH'
  | 'UGX'
  | 'USD'
  | 'UYU'
  | 'UZS'
  | 'VEF'
  | 'VND'
  | 'VUV'
  | 'WST'
  | 'XAF'
  | 'XCD'
  | 'XDR'
  | 'XOF'
  | 'XPF'
  | 'YER'
  | 'ZAR'
  | 'ZMW'
  | 'ZMK'
  | 'ZWD'
type Amount = { currency?: CurrencyCode | undefined; value?: number | undefined }
type ProjectStatus = 'INPROGRESS' | 'CLOSED'
type Project = {
  projectId?: string | undefined
  contactId?: string | undefined
  name: string
  currencyCode?: CurrencyCode | undefined
  minutesLogged?: number | undefined
  totalTaskAmount?: Amount | undefined
  totalExpenseAmount?: Amount | undefined
  estimateAmount?: Amount | undefined
  minutesToBeInvoiced?: number | undefined
  taskAmountToBeInvoiced?: Amount | undefined
  taskAmountInvoiced?: Amount | undefined
  expenseAmountToBeInvoiced?: Amount | undefined
  expenseAmountInvoiced?: Amount | undefined
  projectAmountInvoiced?: Amount | undefined
  deposit?: Amount | undefined
  depositApplied?: Amount | undefined
  creditNoteAmount?: Amount | undefined
  deadlineUtc?: string | undefined
  totalInvoiced?: Amount | undefined
  totalToBeInvoiced?: Amount | undefined
  estimate?: Amount | undefined
  status?: ProjectStatus | undefined
}
type Projects = { pagination?: Pagination | undefined; items?: Project[] | undefined }
type Error = { message?: string | undefined; modelState?: { [x: string]: unknown } | undefined }
type ProjectCreateOrUpdate = {
  contactId?: string | undefined
  name: string
  estimateAmount?: number | undefined
  deadlineUtc?: string | undefined
}
type ProjectPatch = { status: ProjectStatus }
type ProjectUser = {
  userId?: string | undefined
  name?: string | undefined
  email?: string | undefined
}
type ProjectUsers = { pagination?: Pagination | undefined; items?: ProjectUser[] | undefined }
type ChargeType = 'TIME' | 'FIXED' | 'NON_CHARGEABLE'
type Task = {
  taskId?: string | undefined
  name?: string | undefined
  rate?: Amount | undefined
  chargeType?: ChargeType | undefined
  estimateMinutes?: number | undefined
  projectId?: string | undefined
  totalMinutes?: number | undefined
  totalAmount?: Amount | undefined
  minutesInvoiced?: number | undefined
  minutesToBeInvoiced?: number | undefined
  fixedMinutes?: number | undefined
  nonChargeableMinutes?: number | undefined
  amountToBeInvoiced?: Amount | undefined
  amountInvoiced?: Amount | undefined
  status?: 'ACTIVE' | 'INVOICED' | 'LOCKED' | undefined
}
type Tasks = { pagination?: Pagination | undefined; items?: Task[] | undefined }
type TaskCreateOrUpdate = {
  name: string
  rate: Amount
  chargeType: ChargeType
  estimateMinutes?: number | undefined
}
type TimeEntry = {
  timeEntryId?: string | undefined
  userId?: string | undefined
  projectId?: string | undefined
  taskId?: string | undefined
  dateUtc?: string | undefined
  dateEnteredUtc?: string | undefined
  duration?: number | undefined
  description?: string | undefined
  status?: 'ACTIVE' | 'LOCKED' | 'INVOICED' | undefined
}
type TimeEntries = { pagination?: Pagination | undefined; items?: TimeEntry[] | undefined }
type TimeEntryCreateOrUpdate = {
  userId: string
  taskId: string
  dateUtc: string
  duration: number
  description?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/Projects': {
      $get:
        | {
            input: {
              query: {
                projectIds?: string[] | undefined
                contactID?: string | undefined
                states?: string | undefined
                page?: number | undefined
                pageSize?: number | undefined
              }
            } & { header: { 'Xero-Tenant-Id': string } }
            output: Projects
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                projectIds?: string[] | undefined
                contactID?: string | undefined
                states?: string | undefined
                page?: number | undefined
                pageSize?: number | undefined
              }
            } & { header: { 'Xero-Tenant-Id': string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: ProjectCreateOrUpdate }
            output: Project
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: ProjectCreateOrUpdate }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/Projects/:projectId': {
      $get:
        | {
            input: { param: { projectId: string } } & { header: { 'Xero-Tenant-Id': string } }
            output: Project
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & { header: { 'Xero-Tenant-Id': string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { projectId: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: ProjectCreateOrUpdate }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { projectId: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: ProjectCreateOrUpdate }
            output: Error
            outputFormat: 'json'
            status: 400
          }
      $patch:
        | {
            input: { param: { projectId: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: ProjectPatch }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { projectId: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: ProjectPatch }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/ProjectsUsers': {
      $get:
        | {
            input: { query: { page?: number | undefined; pageSize?: number | undefined } } & {
              header: { 'Xero-Tenant-Id': string }
            }
            output: ProjectUsers
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; pageSize?: number | undefined } } & {
              header: { 'Xero-Tenant-Id': string }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/Projects/:projectId/Tasks': {
      $get:
        | {
            input: { param: { projectId: string } } & {
              query: {
                page?: number | undefined
                pageSize?: number | undefined
                taskIds?: string | undefined
                chargeType?: ChargeType | undefined
              }
            } & { header: { 'Xero-Tenant-Id': string } }
            output: Tasks
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
              query: {
                page?: number | undefined
                pageSize?: number | undefined
                taskIds?: string | undefined
                chargeType?: ChargeType | undefined
              }
            } & { header: { 'Xero-Tenant-Id': string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { projectId: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: TaskCreateOrUpdate }
            output: Task
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { projectId: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: TaskCreateOrUpdate }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/Projects/:projectId/Tasks/:taskId': {
      $get:
        | {
            input: { param: { projectId: string; taskId: string } } & {
              header: { 'Xero-Tenant-Id': string }
            }
            output: Task
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string; taskId: string } } & {
              header: { 'Xero-Tenant-Id': string }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { projectId: string; taskId: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: TaskCreateOrUpdate }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { projectId: string; taskId: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: TaskCreateOrUpdate }
            output: Error
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { projectId: string; taskId: string } } & {
              header: { 'Xero-Tenant-Id': string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { projectId: string; taskId: string } } & {
              header: { 'Xero-Tenant-Id': string }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/Projects/:projectId/Time': {
      $get:
        | {
            input: { param: { projectId: string } } & {
              query: {
                userId?: string | undefined
                taskId?: string | undefined
                invoiceId?: string | undefined
                contactId?: string | undefined
                page?: number | undefined
                pageSize?: number | undefined
                states?: string[] | undefined
                isChargeable?: boolean | undefined
                dateAfterUtc?: string | undefined
                dateBeforeUtc?: string | undefined
              }
            } & { header: { 'Xero-Tenant-Id': string } }
            output: TimeEntries
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
              query: {
                userId?: string | undefined
                taskId?: string | undefined
                invoiceId?: string | undefined
                contactId?: string | undefined
                page?: number | undefined
                pageSize?: number | undefined
                states?: string[] | undefined
                isChargeable?: boolean | undefined
                dateAfterUtc?: string | undefined
                dateBeforeUtc?: string | undefined
              }
            } & { header: { 'Xero-Tenant-Id': string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { projectId: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: TimeEntryCreateOrUpdate }
            output: TimeEntry
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: TimeEntryCreateOrUpdate }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/Projects/:projectId/Time/:timeEntryId': {
      $get:
        | {
            input: { param: { projectId: string; timeEntryId: string } } & {
              header: { 'Xero-Tenant-Id': string }
            }
            output: TimeEntry
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string; timeEntryId: string } } & {
              header: { 'Xero-Tenant-Id': string }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { projectId: string; timeEntryId: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: TimeEntryCreateOrUpdate }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { projectId: string; timeEntryId: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: TimeEntryCreateOrUpdate }
            output: Error
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { projectId: string; timeEntryId: string } } & {
              header: { 'Xero-Tenant-Id': string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { projectId: string; timeEntryId: string } } & {
              header: { 'Xero-Tenant-Id': string }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  },
  '/'
>
export default routes
