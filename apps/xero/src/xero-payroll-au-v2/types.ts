type Pagination = {
  page?: number | undefined
  pageSize?: number | undefined
  pageCount?: number | undefined
  itemCount?: number | undefined
}
type InvalidField = { name?: string | undefined; reason?: string | undefined }
type Problem = {
  type?: string | undefined
  title?: string | undefined
  status?: string | undefined
  detail?: string | undefined
  instance?: string | undefined
  invalidFields?: InvalidField[] | undefined
}
type TimesheetLine = {
  timesheetLineID?: string | undefined
  date: string
  earningsRateID: string
  trackingItemID?: string | undefined
  numberOfUnits: number
}
type TimesheetLines = TimesheetLine[]
type Timesheet = {
  timesheetID?: string | undefined
  payrollCalendarID: string
  employeeID: string
  startDate: string
  endDate: string
  status?: 'Draft' | 'Approved' | 'Completed' | undefined
  totalHours?: number | undefined
  updatedDateUTC?: string | undefined
  timesheetLines?: TimesheetLines | undefined
}
type Timesheets = {
  pagination?: Pagination | undefined
  problem?: Problem | undefined
  timesheets?: Timesheet[] | undefined
}
type TimesheetObject = {
  pagination?: Pagination | undefined
  problem?: Problem | undefined
  timesheet?: Timesheet | undefined
}
type TimesheetLineObject = {
  pagination?: Pagination | undefined
  problem?: Problem | undefined
  timesheetLine?: TimesheetLine | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/Timesheets': {
      $get: {
        input: {
          query: {
            page?: number | undefined
            filter?: string | undefined
            status?: string | undefined
            startDate?: string | undefined
            endDate?: string | undefined
            sort?: string | undefined
          }
        } & { header: { 'Xero-Tenant-Id': string } }
        output: Timesheets
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: Timesheet }
            output: TimesheetObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: Timesheet }
            output: Problem
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/Timesheets/:TimesheetID': {
      $get: {
        input: { param: { TimesheetID: string } } & { header: { 'Xero-Tenant-Id': string } }
        output: TimesheetObject
        outputFormat: 'json'
        status: 200
      }
      $delete:
        | {
            input: { param: { TimesheetID: string } } & { header: { 'Xero-Tenant-Id': string } }
            output: TimesheetLine
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { TimesheetID: string } } & { header: { 'Xero-Tenant-Id': string } }
            output: Problem
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/Timesheets/:TimesheetID/Lines': {
      $post:
        | {
            input: { param: { TimesheetID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: TimesheetLine }
            output: TimesheetLineObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { TimesheetID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: TimesheetLine }
            output: Problem
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/Timesheets/:TimesheetID/Approve': {
      $post:
        | {
            input: { param: { TimesheetID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            }
            output: TimesheetObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { TimesheetID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            }
            output: Problem
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/Timesheets/:TimesheetID/RevertToDraft': {
      $post:
        | {
            input: { param: { TimesheetID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            }
            output: TimesheetObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { TimesheetID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            }
            output: Problem
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/Timesheets/:TimesheetID/Lines/:TimesheetLineID': {
      $put:
        | {
            input: { param: { TimesheetID: string; TimesheetLineID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: TimesheetLine }
            output: TimesheetLineObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { TimesheetID: string; TimesheetLineID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: TimesheetLine }
            output: Problem
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { TimesheetID: string; TimesheetLineID: string } } & {
              header: { 'Xero-Tenant-Id': string }
            }
            output: TimesheetLine
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { TimesheetID: string; TimesheetLineID: string } } & {
              header: { 'Xero-Tenant-Id': string }
            }
            output: Problem
            outputFormat: 'json'
            status: 400
          }
    }
  },
  '/'
>
export default routes
