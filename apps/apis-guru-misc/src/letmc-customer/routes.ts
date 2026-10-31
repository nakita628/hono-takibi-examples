import { createRoute, z } from '@hono/zod-openapi'

const BranchModelSchema = z
  .object({
    Address1: z.string().exactOptional().openapi({ description: 'Branch address line 1.' }),
    Address2: z.string().exactOptional().openapi({ description: 'Branch address line 2.' }),
    Address3: z.string().exactOptional().openapi({ description: 'Branch address line 3.' }),
    Address4: z.string().exactOptional().openapi({ description: 'Branch address line 4.' }),
    CompanyName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The relevant company name, if not the one specified on the branch then the one on company.',
      }),
    County: z.string().exactOptional().openapi({ description: 'County' }),
    EMailAddress: z.string().exactOptional().openapi({ description: 'Branch email address.' }),
    ETag: z
      .string()
      .exactOptional()
      .openapi({ description: 'A unique identifier defining the object and change revision.' }),
    FaxPhone: z.string().exactOptional().openapi({ description: 'Branch fax phone number.' }),
    LandPhone: z.string().exactOptional().openapi({ description: 'Branch land phone number.' }),
    Name: z.string().exactOptional().openapi({ description: 'The branch name.' }),
    OID: z.string().exactOptional().openapi({ description: 'The unique Object ID (OID).' }),
    Postcode: z.string().exactOptional().openapi({ description: 'Branch address postcode.' }),
    WebAddress: z.string().exactOptional().openapi({ description: 'Branch web address.' }),
  })
  .openapi({ description: 'Defines a single branch of a client.', required: [] })
  .openapi('BranchModel')

const BranchModelResultsSchema = z
  .object({
    Count: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The total number of results available for all pages' }),
    Data: z
      .array(BranchModelSchema)
      .exactOptional()
      .openapi({ description: 'The resulting data returned from the paged query range' }),
  })
  .openapi({
    description: 'Holds results from a paged query returning BranchModel values',
    required: [],
  })
  .openapi('BranchModelResults')

const KeyValuePairStringStringSchema = z
  .object({ key: z.string().exactOptional(), value: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('KeyValuePairStringString')

const LandlordAccountingEntryModelSchema = z
  .object({
    Amount: z.float64().exactOptional().openapi({ description: 'Amount' }),
    Date: z.iso.datetime({ offset: true }).exactOptional().openapi({ description: 'Payment Date' }),
    Description: z.string().exactOptional().openapi({ description: 'Description.' }),
    TransactionNumber: z.int32().exactOptional().openapi({ description: 'Transaction Number' }),
  })
  .openapi({ description: 'Landlord Accounting - Finance Entry', required: [] })
  .openapi('LandlordAccountingEntryModel')

const LandlordAccountingInvoiceModelSchema = z
  .object({
    Date: z.iso.datetime({ offset: true }).exactOptional().openapi({ description: 'Payment Date' }),
    InvoiceID: z.string().exactOptional().openapi({ description: 'Transaction Number' }),
    IsMaintenanceInvoice: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Does this invoice contain contractor payments?' }),
  })
  .openapi({ description: 'Invoices', required: [] })
  .openapi('LandlordAccountingInvoiceModel')

const LandlordAccountingModelSchema = z
  .object({
    AccountBalance: z.float64().exactOptional().openapi({ description: 'Account Balance' }),
    LastPayment: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Last Payment Made' }),
    PaymentHistory: z
      .array(LandlordAccountingEntryModelSchema)
      .exactOptional()
      .openapi({ description: 'Payment History' }),
    Statements: z
      .array(LandlordAccountingInvoiceModelSchema)
      .exactOptional()
      .openapi({ description: 'Statements' }),
  })
  .openapi({ description: 'Landlord Accounting', required: [] })
  .openapi('LandlordAccountingModel')

const LandlordChaseNoteModelSchema = z
  .object({
    Date: z.iso.datetime({ offset: true }).exactOptional().openapi({ description: 'Created Date' }),
    Note: z.string().exactOptional().openapi({ description: 'Note.' }),
    NoteType: z.string().exactOptional().openapi({ description: 'Note Type' }),
    TenantID: z.string().exactOptional().openapi({ description: 'Tenant' }),
  })
  .openapi({ description: 'Landlord Arrears Chase Note.', required: [] })
  .openapi('LandlordChaseNoteModel')

const LandlordCrmEntrySchema = z
  .object({
    BranchID: z.string().exactOptional(),
    GlobalReference: z.string().exactOptional(),
    Name: z.string().exactOptional(),
    OID: z.string().exactOptional(),
  })
  .openapi({ description: 'Class for Landlord CRM Entries', required: [] })
  .openapi('LandlordCrmEntry')

const LandlordDetailsModelSchema = z
  .object({
    Address: z.string().exactOptional().openapi({ description: 'Address' }),
    Email: z.string().exactOptional().openapi({ description: 'Email' }),
    GlobalReference: z.string().exactOptional().openapi({ description: 'User Friendly ID' }),
    ID: z.string().exactOptional().openapi({ description: 'ID' }),
    Mobile: z.string().exactOptional().openapi({ description: 'Mobile' }),
    Name: z.string().exactOptional().openapi({ description: 'Name' }),
    Phone: z.string().exactOptional().openapi({ description: 'Phone' }),
  })
  .openapi({ description: 'Landlord Details', required: [] })
  .openapi('LandlordDetailsModel')

const LandlordLettingsInspectionModelSchema = z
  .object({
    InspectionDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'InspectionDate' }),
    Notes: z.string().exactOptional().openapi({ description: 'Notes' }),
  })
  .openapi({ description: 'Lettings Inspection', required: [] })
  .openapi('LandlordLettingsInspectionModel')

const LettingsLandlordDocumentSchema = z
  .object({
    FileName: z.string().exactOptional().openapi({ description: 'File Name' }),
    FileSize: z.int32().exactOptional().openapi({ description: 'File Size Bytes' }),
    ID: z.string().exactOptional().openapi({ description: 'ID' }),
    MIMEType: z.string().exactOptional().openapi({ description: 'MIME Type' }),
    Note: z.string().exactOptional().openapi({ description: 'Document Note' }),
  })
  .openapi({ description: 'Document details.', required: [] })
  .openapi('LettingsLandlordDocument')

const LandlordMaintenanceCertificateModelSchema = z
  .object({
    Due: z.iso.datetime({ offset: true }).exactOptional().openapi({ description: 'Due' }),
    Files: z
      .array(LettingsLandlordDocumentSchema)
      .exactOptional()
      .openapi({ description: 'Files' }),
    Status: z.string().exactOptional().openapi({ description: 'Status.' }),
    Type: z.string().exactOptional().openapi({ description: 'Type' }),
  })
  .openapi({ description: 'Maintenance Certificate', required: [] })
  .openapi('LandlordMaintenanceCertificateModel')

const LandlordMaintenanceJobNoteModelSchema = z
  .object({
    CreatedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Created At:-' }),
    NoteContents: z.string().exactOptional().openapi({ description: 'Note Contents:-' }),
    OID: z.string().exactOptional().openapi({ description: 'Job ID:-' }),
  })
  .openapi({ description: 'Maintenance Job Note Helper Model:-', required: [] })
  .openapi('LandlordMaintenanceJobNoteModel')

const LandlordMaintenanceJobModelSchema = z
  .object({
    AssignedTo: z.string().exactOptional().openapi({ description: 'AssignedTo' }),
    ClosedDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Job Closed Date:-', readOnly: true }),
    Description: z.string().exactOptional().openapi({ description: 'Description' }),
    MaintenanceNotes: z.array(LandlordMaintenanceJobNoteModelSchema).exactOptional(),
    Property: z.string().exactOptional().openapi({ description: 'Property' }),
    Reported: z.iso.datetime({ offset: true }).exactOptional().openapi({ description: 'Reported' }),
    Status: z.string().exactOptional().openapi({ description: 'Status' }),
  })
  .openapi({ description: 'Maintenance Job', required: [] })
  .openapi('LandlordMaintenanceJobModel')

const LandlordMaintenanceModelSchema = z
  .object({
    Jobs: z
      .array(LandlordMaintenanceJobModelSchema)
      .exactOptional()
      .openapi({ description: 'Maintenance Jobs.' }),
  })
  .openapi({ description: 'Landlord Maintenance', required: [] })
  .openapi('LandlordMaintenanceModel')

const LandlordMaintenancePreferenceModelSchema = z
  .object({
    Name: z.string().exactOptional().openapi({ description: 'Name' }),
    Notes: z.string().exactOptional().openapi({ description: 'Notes.' }),
    Type: z.string().exactOptional().openapi({ description: 'Type' }),
  })
  .openapi({ description: 'Maintenance Preference', required: [] })
  .openapi('LandlordMaintenancePreferenceModel')

const LandlordPhotoModelSchema = z
  .object({
    ETag: z
      .string()
      .exactOptional()
      .openapi({ description: 'A unique identifier defining the object and change revision.' }),
    FileName: z.string().exactOptional().openapi({ description: 'The file name.' }),
    OID: z.string().exactOptional().openapi({ description: 'The unique Object ID (OID).' }),
    PhotoType: z
      .enum(['Photo', 'Map', 'FloorPlan', 'SiteMap', 'AerialPhoto'])
      .exactOptional()
      .openapi({ description: 'The photo type.' }),
  })
  .openapi({ description: 'Stores a photo related to a property structure.', required: [] })
  .openapi('LandlordPhotoModel')

const LandlordPhotoModelResultsSchema = z
  .object({
    Count: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The total number of results available for all pages' }),
    Data: z
      .array(LandlordPhotoModelSchema)
      .exactOptional()
      .openapi({ description: 'The resulting data returned from the paged query range' }),
  })
  .openapi({
    description: 'Holds results from a paged query returning LandlordPhotoModel values',
    required: [],
  })
  .openapi('LandlordPhotoModelResults')

const LandlordProfitLossRowModelSchema = z
  .object({
    MonthTotals: z
      .array(KeyValuePairStringStringSchema)
      .exactOptional()
      .openapi({ description: 'Month Totals' }),
    NominalCode: z.string().exactOptional().openapi({ description: 'Nominal Code' }),
    Title: z.string().exactOptional().openapi({ description: 'Title of the values.' }),
    Total: z.string().exactOptional().openapi({ description: 'Total for all months.' }),
  })
  .openapi({ description: 'Class for a group of entries.', required: [] })
  .openapi('LandlordProfitLossRowModel')

const LandlordProfitLossSectionModelSchema = z
  .object({
    Rows: z
      .array(LandlordProfitLossRowModelSchema)
      .exactOptional()
      .openapi({ description: 'Rows.' }),
  })
  .openapi({ description: 'Class for a group of entries.', required: [] })
  .openapi('LandlordProfitLossSectionModel')

const LandlordProfitLossModelSchema = z
  .object({
    DirectCosts: LandlordProfitLossSectionModelSchema.exactOptional(),
    GrossProfitLoss: LandlordProfitLossSectionModelSchema.exactOptional(),
    Income: LandlordProfitLossSectionModelSchema.exactOptional(),
  })
  .openapi({ description: 'Class to represent proffit loss report.', required: [] })
  .openapi('LandlordProfitLossModel')

const LandlordRentOustandingItemSchema = z
  .object({
    DebtDays: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Days since the tenant went into arrears' }),
    OutstandingRent: z.float64().exactOptional().openapi({ description: 'Outstanding Rent' }),
    Property: z.string().exactOptional().openapi({ description: 'Property' }),
    Tenant: z.string().exactOptional().openapi({ description: 'Tenant' }),
    TenantID: z.string().exactOptional().openapi({ description: 'TenantID' }),
  })
  .openapi({ description: 'Outstanding Rent', required: [] })
  .openapi('LandlordRentOustandingItem')

const LandlordRentArrearsModelSchema = z
  .object({
    ChaseNotes: z
      .array(LandlordChaseNoteModelSchema)
      .exactOptional()
      .openapi({ description: 'Chase Notes' }),
    RentCollected: z.float64().exactOptional().openapi({ description: 'Rent Collected' }),
    RentOutstanding: z
      .array(LandlordRentOustandingItemSchema)
      .exactOptional()
      .openapi({ description: 'Outstanding Rent' }),
    TotalRentArrears: z.float64().exactOptional().openapi({ description: 'Rent Arrears' }),
  })
  .openapi({ description: 'Landlord Rent Arrears.', required: [] })
  .openapi('LandlordRentArrearsModel')

const LandlordSettingsModelSchema = z
  .object({
    LinkedAccounts: z
      .array(LandlordDetailsModelSchema)
      .exactOptional()
      .openapi({ description: 'Linked Accounts' }),
  })
  .openapi({ description: 'Landlord Settings', required: [] })
  .openapi('LandlordSettingsModel')

const LandlordSummaryTenancyModelSchema = z
  .object({
    Bond: z.float64().exactOptional().openapi({ description: 'Bomd' }),
    BranchID: z.string().exactOptional().openapi({ description: 'The Tenancy Branch ID' }),
    Description: z.string().exactOptional().openapi({ description: 'Description.' }),
    GlobalReference: z.string().exactOptional().openapi({ description: 'User Friendly ID' }),
    ID: z.string().exactOptional().openapi({ description: 'ID' }),
    MaintenanceJobs: z.int32().exactOptional().openapi({ description: 'Maintenance Jobs.' }),
    ManagedRent: z.boolean().exactOptional().openapi({ description: 'State of the tenancy' }),
    PropertyAddress: z
      .string()
      .exactOptional()
      .openapi({ description: 'Display Property Address' }),
    Rent: z.string().exactOptional().openapi({ description: 'Rent' }),
    RentArrears: z.float64().exactOptional().openapi({ description: 'Rent Arrears' }),
    RentCollected: z.float64().exactOptional().openapi({ description: 'Rent Arrears' }),
    TenancyProperty: z.string().exactOptional().openapi({ description: 'Tenancy Property' }),
    TenancyState: z.string().exactOptional().openapi({ description: 'State of the tenancy' }),
  })
  .openapi({ description: 'Landlord Summary - Landing Page.', required: [] })
  .openapi('LandlordSummaryTenancyModel')

const LandlordSummaryModelSchema = z
  .object({
    AccountBalance: z.float64().exactOptional().openapi({ description: 'Account Balance' }),
    LastPayment: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Last Payment Made' }),
    Tenancies: z
      .array(LandlordSummaryTenancyModelSchema)
      .exactOptional()
      .openapi({ description: 'Tenancies' }),
    TotalRentArrears: z.float64().exactOptional().openapi({ description: 'Rent Arrears' }),
  })
  .openapi({ description: 'Landlord Summary - Landing Page.', required: [] })
  .openapi('LandlordSummaryModel')

const LandlordTenancyModelSchema = z
  .object({
    ActualEndDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Actual End Date' }),
    Beds: z.int32().exactOptional().openapi({ description: 'Beds' }),
    Bond: z.float64().exactOptional().openapi({ description: 'Bond' }),
    BranchID: z.string().exactOptional().openapi({ description: 'The tenancy branch ID:-' }),
    Certificates: z
      .array(LandlordMaintenanceCertificateModelSchema)
      .exactOptional()
      .openapi({ description: 'Maintenance Certificates.' }),
    Documents: z
      .array(LettingsLandlordDocumentSchema)
      .exactOptional()
      .openapi({ description: 'Tenancy documents:-' }),
    FixedDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Fixed Date' }),
    GlobalReference: z.string().exactOptional().openapi({ description: 'User Friendly ID' }),
    ID: z.string().exactOptional().openapi({ description: 'ID' }),
    Inspections: z
      .array(LandlordLettingsInspectionModelSchema)
      .exactOptional()
      .openapi({ description: 'Inspections' }),
    ManagedRent: z.boolean().exactOptional().openapi({ description: 'State of the tenancy' }),
    Preferences: z
      .array(LandlordMaintenancePreferenceModelSchema)
      .exactOptional()
      .openapi({ description: 'Maintenance Preferences.' }),
    PreviousRentAmount: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Previous Rent Amount' }),
    PropertyAddress: z
      .string()
      .exactOptional()
      .openapi({ description: 'Display Property Address' }),
    Rent: z.string().exactOptional().openapi({ description: 'Rent' }),
    RentAmount: z.float64().exactOptional().openapi({ description: 'Rent Amount' }),
    StartDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Start Date' }),
    TenancyProperty: z.string().exactOptional().openapi({ description: 'Tenancy Property' }),
    TenancyState: z.string().exactOptional().openapi({ description: 'State of the tenancy' }),
    Tenants: z.array(z.string()).exactOptional().openapi({ description: 'Tenants' }),
  })
  .openapi({ description: 'Landlord Tenancy Model.', required: [] })
  .openapi('LandlordTenancyModel')

const ObjectSchema = z.object({}).openapi('Object')

const ApiKeySecurityScheme = {
  description: 'ApiKey Authentication',
  in: 'header',
  name: 'ApiKey',
  type: 'apiKey',
}

const BasicSecurityScheme = {
  description: 'Basic HTTP Authentication',
  scheme: 'basic',
  type: 'http',
}

export const getV2CustomerShortNameBranchBranchesRoute = createRoute({
  method: 'get',
  path: '/v2/customer/{shortName}/branch/branches',
  tags: ['BranchController'],
  summary: 'All branches defined for a company',
  operationId: 'BranchController_GetBranches',
  request: {
    params: z.object({
      shortName: z
        .string()
        .openapi({
          param: {
            description: 'The unique client short-name',
            in: 'path',
            name: 'shortName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The index of the first item to return',
            in: 'query',
            name: 'offset',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The maximum number of items to return (up to 1000 per request)',
            in: 'query',
            name: 'count',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: BranchModelResultsSchema },
        'application/xml': { schema: BranchModelResultsSchema },
        'text/json': { schema: BranchModelResultsSchema },
        'text/xml': { schema: BranchModelResultsSchema },
      },
    },
  },
})

export const getV2CustomerShortNameBranchBranchesBranchIDRoute = createRoute({
  method: 'get',
  path: '/v2/customer/{shortName}/branch/branches/{branchID}',
  tags: ['BranchController'],
  summary: 'Get a specific branch given its unique Object ID (OID)',
  request: {
    params: z.object({
      shortName: z
        .string()
        .openapi({
          param: {
            description: 'The unique client short-name',
            in: 'path',
            name: 'shortName',
            required: true,
            schema: { type: 'string' },
          },
        }),
      branchID: z
        .string()
        .openapi({
          param: {
            description: 'The unique ID of the Branch',
            in: 'path',
            name: 'branchID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: BranchModelSchema },
        'application/xml': { schema: BranchModelSchema },
        'text/json': { schema: BranchModelSchema },
        'text/xml': { schema: BranchModelSchema },
      },
    },
  },
})

export const getV2CustomerShortNameLandlordAccountingRoute = createRoute({
  method: 'get',
  path: '/v2/customer/{shortName}/landlord/accounting',
  tags: ['LandlordController'],
  summary: 'Get the accounting details for the landlord.',
  operationId: 'LandlordController_GetAccounts',
  request: {
    params: z.object({
      shortName: z
        .string()
        .openapi({
          param: {
            description: 'The unique client short-name',
            in: 'path',
            name: 'shortName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'The login token returned from the /session POST call',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: LandlordAccountingModelSchema },
        'text/json': { schema: LandlordAccountingModelSchema },
      },
    },
  },
})

export const getV2CustomerShortNameLandlordDocumentRoute = createRoute({
  method: 'get',
  path: '/v2/customer/{shortName}/landlord/document',
  tags: ['LandlordController'],
  summary: 'Download a Document',
  operationId: 'LandlordController_GetDocument',
  request: {
    params: z.object({
      shortName: z
        .string()
        .openapi({
          param: {
            description: 'The unique client short-name',
            in: 'path',
            name: 'shortName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'The login token returned from the /session POST call',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
      ID: z
        .string()
        .openapi({
          param: {
            description: 'The Document ID',
            in: 'query',
            name: 'ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: ObjectSchema },
        'application/xml': { schema: ObjectSchema },
        'text/json': { schema: ObjectSchema },
        'text/xml': { schema: ObjectSchema },
      },
    },
  },
})

export const getV2CustomerShortNameLandlordInventoryRoute = createRoute({
  method: 'get',
  path: '/v2/customer/{shortName}/landlord/inventory',
  tags: ['LandlordController'],
  summary: 'Generate a Inventory PDF for a tenancy',
  operationId: 'LandlordController_GetInvetoryReport',
  request: {
    params: z.object({
      shortName: z
        .string()
        .openapi({
          param: {
            description: 'The unique client short-name',
            in: 'path',
            name: 'shortName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'The login token returned from the /session POST call',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
      tenancyID: z
        .string()
        .openapi({
          param: {
            description: 'The Tenancy ID',
            in: 'query',
            name: 'tenancyID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: ObjectSchema },
        'application/xml': { schema: ObjectSchema },
        'text/json': { schema: ObjectSchema },
        'text/xml': { schema: ObjectSchema },
      },
    },
  },
})

export const getV2CustomerShortNameLandlordInvoiceRoute = createRoute({
  method: 'get',
  path: '/v2/customer/{shortName}/landlord/invoice',
  tags: ['LandlordController'],
  summary: 'Get an invoice pdf belonging to the landlord.',
  operationId: 'LandlordController_GetInvoice',
  request: {
    params: z.object({
      shortName: z
        .string()
        .openapi({
          param: {
            description: 'The unique client short-name',
            in: 'path',
            name: 'shortName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'The login token returned from the /session POST call',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
      invoiceID: z
        .string()
        .openapi({
          param: {
            description: 'The invoice ID to load.',
            in: 'query',
            name: 'invoiceID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: ObjectSchema },
        'application/xml': { schema: ObjectSchema },
        'text/json': { schema: ObjectSchema },
        'text/xml': { schema: ObjectSchema },
      },
    },
  },
})

export const getV2CustomerShortNameLandlordLandlordcrmentriesRoute = createRoute({
  method: 'get',
  path: '/v2/customer/{shortName}/landlord/landlordcrmentries',
  tags: ['LandlordController'],
  summary: "Retrieve landlord's CRM ID",
  operationId: 'LandlordController_GetLandlordCrmEntries',
  request: {
    params: z.object({
      shortName: z
        .string()
        .openapi({
          param: {
            description: 'The unique client short-name',
            in: 'path',
            name: 'shortName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'The login token returned from the /session POST call',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(LandlordCrmEntrySchema) },
        'application/xml': { schema: z.array(LandlordCrmEntrySchema) },
        'text/json': { schema: z.array(LandlordCrmEntrySchema) },
        'text/xml': { schema: z.array(LandlordCrmEntrySchema) },
      },
    },
  },
})

export const getV2CustomerShortNameLandlordMaintenanceRoute = createRoute({
  method: 'get',
  path: '/v2/customer/{shortName}/landlord/maintenance',
  tags: ['LandlordController'],
  summary: 'Get Active maintenance jobs.',
  operationId: 'LandlordController_GetMaintenanceJobs',
  request: {
    params: z.object({
      shortName: z
        .string()
        .openapi({
          param: {
            description: 'The unique client short-name',
            in: 'path',
            name: 'shortName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'The login token returned from the /session POST call',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: LandlordMaintenanceModelSchema },
        'text/json': { schema: LandlordMaintenanceModelSchema },
      },
    },
  },
})

export const getV2CustomerShortNameLandlordProfitlossRoute = createRoute({
  method: 'get',
  path: '/v2/customer/{shortName}/landlord/profitloss',
  tags: ['LandlordController'],
  summary: 'Generate a Profit and Loss Report',
  operationId: 'LandlordController_GetProfitLossReport',
  request: {
    params: z.object({
      shortName: z
        .string()
        .openapi({
          param: {
            description: 'The unique client short-name',
            in: 'path',
            name: 'shortName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'The login token returned from the /session POST call',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: LandlordProfitLossModelSchema },
        'text/json': { schema: LandlordProfitLossModelSchema },
      },
    },
  },
})

export const getV2CustomerShortNameLandlordRentarrearsRoute = createRoute({
  method: 'get',
  path: '/v2/customer/{shortName}/landlord/rentarrears',
  tags: ['LandlordController'],
  summary: 'Rent Arrears',
  operationId: 'LandlordController_GetRentArrears',
  request: {
    params: z.object({
      shortName: z
        .string()
        .openapi({
          param: {
            description: 'The unique client short-name',
            in: 'path',
            name: 'shortName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'The login token returned from the /session POST call',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: LandlordRentArrearsModelSchema },
        'text/json': { schema: LandlordRentArrearsModelSchema },
      },
    },
  },
})

export const getV2CustomerShortNameLandlordSasRoute = createRoute({
  method: 'get',
  path: '/v2/customer/{shortName}/landlord/sas',
  tags: ['LandlordController'],
  summary: 'Generate a Self Assessment Tax Report',
  operationId: 'LandlordController_GetSASReport',
  request: {
    params: z.object({
      shortName: z
        .string()
        .openapi({
          param: {
            description: 'The unique client short-name',
            in: 'path',
            name: 'shortName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'The login token returned from the /session POST call',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
      yearEnd: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The Tax Year End.',
            in: 'query',
            name: 'yearEnd',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: ObjectSchema },
        'application/xml': { schema: ObjectSchema },
        'text/json': { schema: ObjectSchema },
        'text/xml': { schema: ObjectSchema },
      },
    },
  },
})

export const getV2CustomerShortNameLandlordSettingsRoute = createRoute({
  method: 'get',
  path: '/v2/customer/{shortName}/landlord/settings',
  tags: ['LandlordController'],
  summary: 'Get contact details of all linked landlords.',
  operationId: 'LandlordController_GetSettings',
  request: {
    params: z.object({
      shortName: z
        .string()
        .openapi({
          param: {
            description: 'The unique client short-name',
            in: 'path',
            name: 'shortName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'The login token returned from the /session POST call',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: LandlordSettingsModelSchema },
        'text/json': { schema: LandlordSettingsModelSchema },
      },
    },
  },
})

export const getV2CustomerShortNameLandlordSummaryRoute = createRoute({
  method: 'get',
  path: '/v2/customer/{shortName}/landlord/summary',
  tags: ['LandlordController'],
  summary: 'Get the summary details for the landlord.',
  operationId: 'LandlordController_GetSummaryDetails',
  request: {
    params: z.object({
      shortName: z
        .string()
        .openapi({
          param: {
            description: 'The unique client short-name',
            in: 'path',
            name: 'shortName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'The login token returned from the /session POST call',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: LandlordSummaryModelSchema },
        'text/json': { schema: LandlordSummaryModelSchema },
      },
    },
  },
})

export const getV2CustomerShortNameLandlordTenancyRoute = createRoute({
  method: 'get',
  path: '/v2/customer/{shortName}/landlord/tenancy',
  tags: ['LandlordController'],
  summary: 'Get tenancy details.',
  operationId: 'LandlordController_GetTenancy',
  request: {
    params: z.object({
      shortName: z
        .string()
        .openapi({
          param: {
            description: 'The unique client short-name',
            in: 'path',
            name: 'shortName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'The login token returned from the /session POST call',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
      tenancyID: z
        .string()
        .openapi({
          param: {
            description: 'The Tenancy ID',
            in: 'query',
            name: 'tenancyID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: LandlordTenancyModelSchema },
        'text/json': { schema: LandlordTenancyModelSchema },
      },
    },
  },
})

export const postV2CustomerShortNameLandlordTenancyMaintenancePreferenceRoute = createRoute({
  method: 'post',
  path: '/v2/customer/{shortName}/landlord/tenancy/maintenance/preference',
  tags: ['LandlordController'],
  summary: 'Post tenancy maintenance preferences:-',
  operationId: 'LandlordController_CreateMaintenancePreference',
  request: {
    params: z.object({
      shortName: z
        .string()
        .openapi({
          param: {
            description: 'The unique client short-name',
            in: 'path',
            name: 'shortName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'The login token returned from the /session POST call',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
      tenancyID: z
        .string()
        .openapi({
          param: {
            description: 'The Tenancy ID',
            in: 'query',
            name: 'tenancyID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description: 'Name of the maintenance preference to add',
            in: 'query',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      notes: z
        .string()
        .openapi({
          param: {
            description: 'Notes of the maintenance preference to add',
            in: 'query',
            name: 'notes',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.string() },
        'application/xml': { schema: z.string() },
        'text/json': { schema: z.string() },
        'text/xml': { schema: z.string() },
      },
    },
  },
})

export const getV2CustomerShortNameLandlordTenancyagreementRoute = createRoute({
  method: 'get',
  path: '/v2/customer/{shortName}/landlord/tenancyagreement',
  tags: ['LandlordController'],
  summary: 'Generate a Tenancy Agreement Copy (PDF)',
  operationId: 'LandlordController_GetTenancyAgreementReport',
  request: {
    params: z.object({
      shortName: z
        .string()
        .openapi({
          param: {
            description: 'The unique client short-name',
            in: 'path',
            name: 'shortName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'The login token returned from the /session POST call',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
      tenancyID: z
        .string()
        .openapi({
          param: {
            description: 'The Tenancy ID',
            in: 'query',
            name: 'tenancyID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: ObjectSchema },
        'application/xml': { schema: ObjectSchema },
        'text/json': { schema: ObjectSchema },
        'text/xml': { schema: ObjectSchema },
      },
    },
  },
})

export const getV2CustomerShortNamePhotoDownloadRoute = createRoute({
  method: 'get',
  path: '/v2/customer/{shortName}/photo/download',
  tags: ['PhotoController'],
  summary: 'Downloads the photo of a property given the photo ID.',
  operationId: 'PhotoController_GetPhotoDownload',
  request: {
    params: z.object({
      shortName: z
        .string()
        .openapi({
          param: {
            description: 'The unique client short-name',
            in: 'path',
            name: 'shortName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'The login token returned from the /session POST call',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
      photoID: z
        .string()
        .openapi({
          param: {
            description: 'The unique ID of the photo on the property',
            in: 'query',
            name: 'photoID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      width: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'An optional parameter specifying the image width',
            in: 'query',
            name: 'width',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      height: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'An optional parameter specifying the image height',
            in: 'query',
            name: 'height',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: ObjectSchema },
        'application/xml': { schema: ObjectSchema },
        'text/json': { schema: ObjectSchema },
        'text/xml': { schema: ObjectSchema },
      },
    },
  },
})

export const getV2CustomerShortNamePropertyPropertyIDPhotosRoute = createRoute({
  method: 'get',
  path: '/v2/customer/{shortName}/property/{propertyID}/photos',
  tags: ['PropertyController'],
  summary: 'A collection showing all the photos linked to a specific block, property or room',
  operationId: 'PropertyController_GetPropertiesPhotos',
  request: {
    params: z.object({
      shortName: z
        .string()
        .openapi({
          param: {
            description: 'The unique client short-name',
            in: 'path',
            name: 'shortName',
            required: true,
            schema: { type: 'string' },
          },
        }),
      propertyID: z
        .string()
        .openapi({
          param: {
            description: 'The unique ID of the Property',
            in: 'path',
            name: 'propertyID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'The login token returned from the /session POST call',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The index of the first item to return',
            in: 'query',
            name: 'offset',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The maximum number of items to return (up to 1000 per request)',
            in: 'query',
            name: 'count',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: LandlordPhotoModelResultsSchema },
        'application/xml': { schema: LandlordPhotoModelResultsSchema },
        'text/json': { schema: LandlordPhotoModelResultsSchema },
        'text/xml': { schema: LandlordPhotoModelResultsSchema },
      },
    },
  },
})

export const getV2CustomerShortNameSessionRoute = createRoute({
  method: 'get',
  path: '/v2/customer/{shortName}/session',
  tags: ['SessionController'],
  summary: 'Gets information about the currently logged on customer.',
  operationId: 'SessionController_GetSessionInfo',
  request: {
    params: z.object({
      shortName: z
        .string()
        .openapi({
          param: {
            description: 'The unique client short-name',
            in: 'path',
            name: 'shortName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'The login token returned from the /session POST call',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.string() },
        'application/xml': { schema: z.string() },
        'text/json': { schema: z.string() },
        'text/xml': { schema: z.string() },
      },
    },
  },
})

export const postV2CustomerShortNameSessionRoute = createRoute({
  method: 'post',
  path: '/v2/customer/{shortName}/session',
  tags: ['SessionController'],
  summary: 'Login as a customer given their username and password.',
  operationId: 'SessionController_Login',
  request: {
    params: z.object({
      shortName: z
        .string()
        .openapi({
          param: {
            description: 'The unique client short-name',
            in: 'path',
            name: 'shortName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      username: z
        .string()
        .openapi({
          param: {
            description: "The user's username.",
            in: 'query',
            name: 'username',
            required: true,
            schema: { type: 'string' },
          },
        }),
      password: z
        .string()
        .openapi({
          param: {
            description: "The user's password.",
            in: 'query',
            name: 'password',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.string() },
        'application/xml': { schema: z.string() },
        'text/json': { schema: z.string() },
        'text/xml': { schema: z.string() },
      },
    },
  },
})

export const deleteV2CustomerShortNameSessionRoute = createRoute({
  method: 'delete',
  path: '/v2/customer/{shortName}/session',
  tags: ['SessionController'],
  summary: 'Logout a customer previously logged in via the Login endpoint.',
  operationId: 'SessionController_Logout',
  request: {
    params: z.object({
      shortName: z
        .string()
        .openapi({
          param: {
            description: 'The unique client short-name',
            in: 'path',
            name: 'shortName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'The login token returned from the /session POST call',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'No Content' } },
})

export const postV2CustomerShortNameSessionCreatelandlordloginRoute = createRoute({
  method: 'post',
  path: '/v2/customer/{shortName}/session/createlandlordlogin',
  tags: ['SessionController'],
  summary: 'Send a request to the in-tray to create a landlord login.',
  operationId: 'SessionController_CreateLandlordLogin',
  request: {
    params: z.object({
      shortName: z
        .string()
        .openapi({
          param: {
            description: 'The unique client short-name',
            in: 'path',
            name: 'shortName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      email: z
        .string()
        .openapi({
          param: {
            description: 'The email address of the landlord',
            in: 'query',
            name: 'email',
            required: true,
            schema: { type: 'string' },
          },
        }),
      title: z
        .string()
        .openapi({
          param: {
            description: 'The title of the landlord',
            in: 'query',
            name: 'title',
            required: true,
            schema: { type: 'string' },
          },
        }),
      forename: z
        .string()
        .openapi({
          param: {
            description: 'The forename of the landlord',
            in: 'query',
            name: 'forename',
            required: true,
            schema: { type: 'string' },
          },
        }),
      surname: z
        .string()
        .openapi({
          param: {
            description: 'The surname of the landlord',
            in: 'query',
            name: 'surname',
            required: true,
            schema: { type: 'string' },
          },
        }),
      propertyAddress: z
        .string()
        .openapi({
          param: {
            description: 'Address of the property linked to the landlord',
            in: 'query',
            name: 'propertyAddress',
            required: true,
            schema: { type: 'string' },
          },
        }),
      contactDetails: z
        .string()
        .openapi({
          param: {
            description: 'Contact details of the landlord',
            in: 'query',
            name: 'contactDetails',
            required: true,
            schema: { type: 'string' },
          },
        }),
      branchID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              '(Optional) The branch ID linked to the login. This will determine which in tray the request display in',
            in: 'query',
            name: 'branchID',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'No Content' } },
})

export const putV2CustomerShortNameSessionPasswordRoute = createRoute({
  method: 'put',
  path: '/v2/customer/{shortName}/session/password',
  tags: ['SessionController'],
  summary: 'Change the password of a customer given their existing and new password.',
  operationId: 'SessionController_ChangePassword',
  request: {
    params: z.object({
      shortName: z
        .string()
        .openapi({
          param: {
            description: 'The unique client short-name',
            in: 'path',
            name: 'shortName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'The login token returned from the /session POST call',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
      oldPassword: z
        .string()
        .openapi({
          param: {
            description: "The customer's existing password.",
            in: 'query',
            name: 'oldPassword',
            required: true,
            schema: { type: 'string' },
          },
        }),
      newPassword: z
        .string()
        .openapi({
          param: {
            description: "The customer's new password.",
            in: 'query',
            name: 'newPassword',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'No Content' } },
})

export const postV2CustomerShortNameSessionResetpasswordRoute = createRoute({
  method: 'post',
  path: '/v2/customer/{shortName}/session/resetpassword',
  tags: ['SessionController'],
  summary: "Reset the customer's password. An email will be sent out to reset.",
  operationId: 'SessionController_ResetPassword',
  request: {
    params: z.object({
      shortName: z
        .string()
        .openapi({
          param: {
            description: 'The unique client short-name',
            in: 'path',
            name: 'shortName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      email: z
        .string()
        .openapi({
          param: {
            description: 'The login Email Address.',
            in: 'query',
            name: 'email',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'No Content' } },
})
