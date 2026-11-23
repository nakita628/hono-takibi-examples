type BranchModel = {
  Address1?: string | undefined
  Address2?: string | undefined
  Address3?: string | undefined
  Address4?: string | undefined
  CompanyName?: string | undefined
  County?: string | undefined
  EMailAddress?: string | undefined
  ETag?: string | undefined
  FaxPhone?: string | undefined
  LandPhone?: string | undefined
  Name?: string | undefined
  OID?: string | undefined
  Postcode?: string | undefined
  WebAddress?: string | undefined
}
type BranchModelResults = { Count?: number | undefined; Data?: BranchModel[] | undefined }
type LandlordAccountingEntryModel = {
  Amount?: number | undefined
  Date?: string | undefined
  Description?: string | undefined
  TransactionNumber?: number | undefined
}
type LandlordAccountingInvoiceModel = {
  Date?: string | undefined
  InvoiceID?: string | undefined
  IsMaintenanceInvoice?: boolean | undefined
}
type LandlordAccountingModel = {
  AccountBalance?: number | undefined
  LastPayment?: string | undefined
  PaymentHistory?: LandlordAccountingEntryModel[] | undefined
  Statements?: LandlordAccountingInvoiceModel[] | undefined
}
type Object = { [x: string]: unknown }
type LandlordCrmEntry = {
  BranchID?: string | undefined
  GlobalReference?: string | undefined
  Name?: string | undefined
  OID?: string | undefined
}
type LandlordMaintenanceJobNoteModel = {
  CreatedAt?: string | undefined
  NoteContents?: string | undefined
  OID?: string | undefined
}
type LandlordMaintenanceJobModel = {
  AssignedTo?: string | undefined
  ClosedDate?: string | undefined
  Description?: string | undefined
  MaintenanceNotes?: LandlordMaintenanceJobNoteModel[] | undefined
  Property?: string | undefined
  Reported?: string | undefined
  Status?: string | undefined
}
type LandlordMaintenanceModel = { Jobs?: LandlordMaintenanceJobModel[] | undefined }
type KeyValuePairStringString = { key?: string | undefined; value?: string | undefined }
type LandlordProfitLossRowModel = {
  MonthTotals?: KeyValuePairStringString[] | undefined
  NominalCode?: string | undefined
  Title?: string | undefined
  Total?: string | undefined
}
type LandlordProfitLossSectionModel = { Rows?: LandlordProfitLossRowModel[] | undefined }
type LandlordProfitLossModel = {
  DirectCosts?: LandlordProfitLossSectionModel | undefined
  GrossProfitLoss?: LandlordProfitLossSectionModel | undefined
  Income?: LandlordProfitLossSectionModel | undefined
}
type LandlordChaseNoteModel = {
  Date?: string | undefined
  Note?: string | undefined
  NoteType?: string | undefined
  TenantID?: string | undefined
}
type LandlordRentOustandingItem = {
  DebtDays?: number | undefined
  OutstandingRent?: number | undefined
  Property?: string | undefined
  Tenant?: string | undefined
  TenantID?: string | undefined
}
type LandlordRentArrearsModel = {
  ChaseNotes?: LandlordChaseNoteModel[] | undefined
  RentCollected?: number | undefined
  RentOutstanding?: LandlordRentOustandingItem[] | undefined
  TotalRentArrears?: number | undefined
}
type LandlordDetailsModel = {
  Address?: string | undefined
  Email?: string | undefined
  GlobalReference?: string | undefined
  ID?: string | undefined
  Mobile?: string | undefined
  Name?: string | undefined
  Phone?: string | undefined
}
type LandlordSettingsModel = { LinkedAccounts?: LandlordDetailsModel[] | undefined }
type LandlordSummaryTenancyModel = {
  Bond?: number | undefined
  BranchID?: string | undefined
  Description?: string | undefined
  GlobalReference?: string | undefined
  ID?: string | undefined
  MaintenanceJobs?: number | undefined
  ManagedRent?: boolean | undefined
  PropertyAddress?: string | undefined
  Rent?: string | undefined
  RentArrears?: number | undefined
  RentCollected?: number | undefined
  TenancyProperty?: string | undefined
  TenancyState?: string | undefined
}
type LandlordSummaryModel = {
  AccountBalance?: number | undefined
  LastPayment?: string | undefined
  Tenancies?: LandlordSummaryTenancyModel[] | undefined
  TotalRentArrears?: number | undefined
}
type LettingsLandlordDocument = {
  FileName?: string | undefined
  FileSize?: number | undefined
  ID?: string | undefined
  MIMEType?: string | undefined
  Note?: string | undefined
}
type LandlordMaintenanceCertificateModel = {
  Due?: string | undefined
  Files?: LettingsLandlordDocument[] | undefined
  Status?: string | undefined
  Type?: string | undefined
}
type LandlordLettingsInspectionModel = {
  InspectionDate?: string | undefined
  Notes?: string | undefined
}
type LandlordMaintenancePreferenceModel = {
  Name?: string | undefined
  Notes?: string | undefined
  Type?: string | undefined
}
type LandlordTenancyModel = {
  ActualEndDate?: string | undefined
  Beds?: number | undefined
  Bond?: number | undefined
  BranchID?: string | undefined
  Certificates?: LandlordMaintenanceCertificateModel[] | undefined
  Documents?: LettingsLandlordDocument[] | undefined
  FixedDate?: string | undefined
  GlobalReference?: string | undefined
  ID?: string | undefined
  Inspections?: LandlordLettingsInspectionModel[] | undefined
  ManagedRent?: boolean | undefined
  Preferences?: LandlordMaintenancePreferenceModel[] | undefined
  PreviousRentAmount?: number | undefined
  PropertyAddress?: string | undefined
  Rent?: string | undefined
  RentAmount?: number | undefined
  StartDate?: string | undefined
  TenancyProperty?: string | undefined
  TenancyState?: string | undefined
  Tenants?: string[] | undefined
}
type LandlordPhotoModel = {
  ETag?: string | undefined
  FileName?: string | undefined
  OID?: string | undefined
  PhotoType?: 'Photo' | 'Map' | 'FloorPlan' | 'SiteMap' | 'AerialPhoto' | undefined
}
type LandlordPhotoModelResults = {
  Count?: number | undefined
  Data?: LandlordPhotoModel[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v2/customer/:shortName/branch/branches': {
      $get:
        | {
            input: { param: { shortName: string } } & { query: { offset: number; count: number } }
            output: BranchModelResults
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { shortName: string } } & { query: { offset: number; count: number } }
            output: BranchModelResults
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { shortName: string } } & { query: { offset: number; count: number } }
            output: BranchModelResults
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { shortName: string } } & { query: { offset: number; count: number } }
            output: BranchModelResults
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/v2/customer/:shortName/branch/branches/:branchID': {
      $get:
        | {
            input: { param: { shortName: string; branchID: string } }
            output: BranchModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { shortName: string; branchID: string } }
            output: BranchModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { shortName: string; branchID: string } }
            output: BranchModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { shortName: string; branchID: string } }
            output: BranchModel
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/v2/customer/:shortName/landlord/accounting': {
      $get:
        | {
            input: { param: { shortName: string } } & { query: { token: string } }
            output: LandlordAccountingModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { shortName: string } } & { query: { token: string } }
            output: LandlordAccountingModel
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/v2/customer/:shortName/landlord/document': {
      $get:
        | {
            input: { param: { shortName: string } } & { query: { token: string; ID: string } }
            output: Object
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { shortName: string } } & { query: { token: string; ID: string } }
            output: Object
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { shortName: string } } & { query: { token: string; ID: string } }
            output: Object
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { shortName: string } } & { query: { token: string; ID: string } }
            output: Object
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/v2/customer/:shortName/landlord/inventory': {
      $get:
        | {
            input: { param: { shortName: string } } & {
              query: { token: string; tenancyID: string }
            }
            output: Object
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { shortName: string } } & {
              query: { token: string; tenancyID: string }
            }
            output: Object
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { shortName: string } } & {
              query: { token: string; tenancyID: string }
            }
            output: Object
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { shortName: string } } & {
              query: { token: string; tenancyID: string }
            }
            output: Object
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/v2/customer/:shortName/landlord/invoice': {
      $get:
        | {
            input: { param: { shortName: string } } & {
              query: { token: string; invoiceID: string }
            }
            output: Object
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { shortName: string } } & {
              query: { token: string; invoiceID: string }
            }
            output: Object
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { shortName: string } } & {
              query: { token: string; invoiceID: string }
            }
            output: Object
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { shortName: string } } & {
              query: { token: string; invoiceID: string }
            }
            output: Object
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/v2/customer/:shortName/landlord/landlordcrmentries': {
      $get:
        | {
            input: { param: { shortName: string } } & { query: { token: string } }
            output: LandlordCrmEntry[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { shortName: string } } & { query: { token: string } }
            output: LandlordCrmEntry[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { shortName: string } } & { query: { token: string } }
            output: LandlordCrmEntry[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { shortName: string } } & { query: { token: string } }
            output: LandlordCrmEntry[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/v2/customer/:shortName/landlord/maintenance': {
      $get:
        | {
            input: { param: { shortName: string } } & { query: { token: string } }
            output: LandlordMaintenanceModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { shortName: string } } & { query: { token: string } }
            output: LandlordMaintenanceModel
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/v2/customer/:shortName/landlord/profitloss': {
      $get:
        | {
            input: { param: { shortName: string } } & { query: { token: string } }
            output: LandlordProfitLossModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { shortName: string } } & { query: { token: string } }
            output: LandlordProfitLossModel
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/v2/customer/:shortName/landlord/rentarrears': {
      $get:
        | {
            input: { param: { shortName: string } } & { query: { token: string } }
            output: LandlordRentArrearsModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { shortName: string } } & { query: { token: string } }
            output: LandlordRentArrearsModel
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/v2/customer/:shortName/landlord/sas': {
      $get:
        | {
            input: { param: { shortName: string } } & { query: { token: string; yearEnd: number } }
            output: Object
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { shortName: string } } & { query: { token: string; yearEnd: number } }
            output: Object
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { shortName: string } } & { query: { token: string; yearEnd: number } }
            output: Object
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { shortName: string } } & { query: { token: string; yearEnd: number } }
            output: Object
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/v2/customer/:shortName/landlord/settings': {
      $get:
        | {
            input: { param: { shortName: string } } & { query: { token: string } }
            output: LandlordSettingsModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { shortName: string } } & { query: { token: string } }
            output: LandlordSettingsModel
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/v2/customer/:shortName/landlord/summary': {
      $get:
        | {
            input: { param: { shortName: string } } & { query: { token: string } }
            output: LandlordSummaryModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { shortName: string } } & { query: { token: string } }
            output: LandlordSummaryModel
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/v2/customer/:shortName/landlord/tenancy': {
      $get:
        | {
            input: { param: { shortName: string } } & {
              query: { token: string; tenancyID: string }
            }
            output: LandlordTenancyModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { shortName: string } } & {
              query: { token: string; tenancyID: string }
            }
            output: LandlordTenancyModel
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/v2/customer/:shortName/landlord/tenancy/maintenance/preference': {
      $post:
        | {
            input: { param: { shortName: string } } & {
              query: { token: string; tenancyID: string; name: string; notes: string }
            }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { shortName: string } } & {
              query: { token: string; tenancyID: string; name: string; notes: string }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { shortName: string } } & {
              query: { token: string; tenancyID: string; name: string; notes: string }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { shortName: string } } & {
              query: { token: string; tenancyID: string; name: string; notes: string }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/v2/customer/:shortName/landlord/tenancyagreement': {
      $get:
        | {
            input: { param: { shortName: string } } & {
              query: { token: string; tenancyID: string }
            }
            output: Object
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { shortName: string } } & {
              query: { token: string; tenancyID: string }
            }
            output: Object
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { shortName: string } } & {
              query: { token: string; tenancyID: string }
            }
            output: Object
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { shortName: string } } & {
              query: { token: string; tenancyID: string }
            }
            output: Object
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/v2/customer/:shortName/photo/download': {
      $get:
        | {
            input: { param: { shortName: string } } & {
              query: {
                token: string
                photoID: string
                width?: number | undefined
                height?: number | undefined
              }
            }
            output: Object
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { shortName: string } } & {
              query: {
                token: string
                photoID: string
                width?: number | undefined
                height?: number | undefined
              }
            }
            output: Object
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { shortName: string } } & {
              query: {
                token: string
                photoID: string
                width?: number | undefined
                height?: number | undefined
              }
            }
            output: Object
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { shortName: string } } & {
              query: {
                token: string
                photoID: string
                width?: number | undefined
                height?: number | undefined
              }
            }
            output: Object
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/v2/customer/:shortName/property/:propertyID/photos': {
      $get:
        | {
            input: { param: { shortName: string; propertyID: string } } & {
              query: { token: string; offset: number; count: number }
            }
            output: LandlordPhotoModelResults
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { shortName: string; propertyID: string } } & {
              query: { token: string; offset: number; count: number }
            }
            output: LandlordPhotoModelResults
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { shortName: string; propertyID: string } } & {
              query: { token: string; offset: number; count: number }
            }
            output: LandlordPhotoModelResults
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { shortName: string; propertyID: string } } & {
              query: { token: string; offset: number; count: number }
            }
            output: LandlordPhotoModelResults
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/v2/customer/:shortName/session': {
      $delete: {
        input: { param: { shortName: string } } & { query: { token: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get:
        | {
            input: { param: { shortName: string } } & { query: { token: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { shortName: string } } & { query: { token: string } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { shortName: string } } & { query: { token: string } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { shortName: string } } & { query: { token: string } }
            output: string
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { shortName: string } } & {
              query: { username: string; password: string }
            }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { shortName: string } } & {
              query: { username: string; password: string }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { shortName: string } } & {
              query: { username: string; password: string }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { shortName: string } } & {
              query: { username: string; password: string }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/v2/customer/:shortName/session/createlandlordlogin': {
      $post: {
        input: { param: { shortName: string } } & {
          query: {
            email: string
            title: string
            forename: string
            surname: string
            propertyAddress: string
            contactDetails: string
            branchID?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v2/customer/:shortName/session/password': {
      $put: {
        input: { param: { shortName: string } } & {
          query: { token: string; oldPassword: string; newPassword: string }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v2/customer/:shortName/session/resetpassword': {
      $post: {
        input: { param: { shortName: string } } & { query: { email: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  },
  '/'
>
export default routes
