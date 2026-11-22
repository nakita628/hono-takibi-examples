type User = {
  Id: string
  Name?: string | undefined
  FirstName?: string | undefined
  LastName?: string | undefined
  FullName?: string | undefined
}
type FileObject = {
  Name?: string | undefined
  MimeType?: string | undefined
  Size?: number | undefined
  CreatedDateUtc?: string | undefined
  UpdatedDateUtc?: string | undefined
  User?: User | undefined
  Id?: string | undefined
  FolderId?: string | undefined
}
type Files = {
  TotalCount?: number | undefined
  Page?: number | undefined
  PerPage?: number | undefined
  Items?: FileObject[] | undefined
}
type UploadObject = { body: string; name: string; filename: string; mimeType?: string | undefined }
type ObjectGroup =
  | 'Account'
  | 'BankTransaction'
  | 'Contact'
  | 'CreditNote'
  | 'Invoice'
  | 'Item'
  | 'ManualJournal'
  | 'Overpayment'
  | 'Payment'
  | 'Prepayment'
  | 'Quote'
  | 'Receipt'
type ObjectType =
  | 'Unknown'
  | 'Accpay'
  | 'AccPayCredit'
  | 'AccPayPayment'
  | 'AccRec'
  | 'AccRecCredit'
  | 'AccRecPayment'
  | 'Adjustment'
  | 'ApCreditPayment'
  | 'ApOverPayment'
  | 'ApOverPaymentPayment'
  | 'ApOverPaymentSourcePayment'
  | 'ApPrepayment'
  | 'ApPrepaymentPayment'
  | 'ApPrepaymentSourcePayment'
  | 'ArCreditPayment'
  | 'ArOverPayment'
  | 'ArOverpaymentPayment'
  | 'ArOverpaymentSourcePayment'
  | 'ArPrepayment'
  | 'ArPrepaymentPayment'
  | 'ArPrepaymentSourcePayment'
  | 'CashPaid'
  | 'CashRec'
  | 'ExpPayment'
  | 'ManJournal'
  | 'PurchaseOrder'
  | 'Receipt'
  | 'Transfer'
  | 'Account'
  | 'Contact'
  | 'Business'
  | 'Employee'
  | 'Person'
  | 'User'
  | 'Org'
  | 'FixedAsset'
  | 'PayRun'
  | 'PriceListItem'
  | 'Bank'
  | 'Current'
  | 'Equity'
  | 'Expense'
  | 'Fixed'
  | 'Liability'
  | 'Prepayment'
  | 'Revenue'
  | 'Sales'
  | 'Overheads'
  | 'Depreciatn'
  | 'OtherIncome'
  | 'DirectCosts'
  | 'Currliab'
  | 'Termliab'
  | 'NonCurrent'
  | 'SalesQuote'
type Association = {
  SendWithObject?: boolean | undefined
  Name?: string | undefined
  Size?: number | undefined
  CreatedDateUtc?: string | undefined
  AssociationDateUtc?: string | undefined
  FileId?: string | undefined
  ObjectId?: string | undefined
  ObjectGroup?: ObjectGroup | undefined
  ObjectType?: ObjectType | undefined
}
type Folder = {
  Name?: string | undefined
  FileCount?: number | undefined
  Email?: string | undefined
  IsInbox?: boolean | undefined
  Id?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/Files': {
      $get: {
        input: {
          query: {
            pagesize?: number | undefined
            page?: number | undefined
            sort?: 'Name' | 'Size' | 'CreatedDateUTC' | undefined
            direction?: 'ASC' | 'DESC' | undefined
          }
        } & { header: { 'xero-tenant-id': string } }
        output: Files
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string } } & {
          form: UploadObject
        }
        output: FileObject
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/Files/:FileId': {
      $get: {
        input: { param: { FileId: string } } & { header: { 'xero-tenant-id': string } }
        output: FileObject
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { FileId: string } } & {
          header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
        } & { json: FileObject }
        output: FileObject
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { FileId: string } } & { header: { 'xero-tenant-id': string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/Files/:FolderId': {
      $post: {
        input: { param: { FolderId: string } } & {
          header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
        } & { form: UploadObject }
        output: FileObject
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/Files/:FileId/Content': {
      $get: {
        input: { param: { FileId: string } } & { header: { 'xero-tenant-id': string } }
        output: File
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/Files/:FileId/Associations': {
      $get: {
        input: { param: { FileId: string } } & { header: { 'xero-tenant-id': string } }
        output: Association[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { FileId: string } } & {
          header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
        } & { json: Association }
        output: Association
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/Files/:FileId/Associations/:ObjectId': {
      $delete: {
        input: { param: { FileId: string; ObjectId: string } } & {
          header: { 'xero-tenant-id': string }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/Associations/:ObjectId': {
      $get: {
        input: { param: { ObjectId: string } } & {
          query: {
            pagesize?: number | undefined
            page?: number | undefined
            sort?: 'Name' | 'Size' | 'CreatedDateUtc' | 'AssociationDateUtc' | undefined
            direction?: 'ASC' | 'DESC' | undefined
          }
        } & { header: { 'xero-tenant-id': string } }
        output: Association[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Associations/Count': {
      $get: {
        input: { query: { ObjectIds: string[] } } & { header: { 'xero-tenant-id': string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Folders': {
      $get: {
        input: { query: { sort?: 'Name' | 'Size' | 'CreatedDateUTC' | undefined } } & {
          header: { 'xero-tenant-id': string }
        }
        output: Folder[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string } } & {
          json: Folder
        }
        output: Folder
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Folders/:FolderId': {
      $get: {
        input: { param: { FolderId: string } } & { header: { 'xero-tenant-id': string } }
        output: Folder
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { FolderId: string } } & {
          header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
        } & { json: Folder }
        output: Folder
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { FolderId: string } } & { header: { 'xero-tenant-id': string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/Inbox': {
      $get: {
        input: { header: { 'xero-tenant-id': string } }
        output: Folder
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
