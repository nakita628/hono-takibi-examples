import { createRoute, z } from '@hono/zod-openapi'

const AccessSchema = z
  .object({
    Id: z.string().exactOptional().openapi({ example: 'T45IHFA' }),
    Right: z.enum(['write', 'read', 'none']).exactOptional().openapi({ example: 'write' }),
  })
  .openapi({ required: [] })
  .openapi('Access')

const DocumentSchema = z
  .object({
    Author: z.string().exactOptional().openapi({ example: 'Antoine Dupond' }),
    Class: z.array(z.string().openapi({ example: ['Contract', 'Invoice'] })).exactOptional(),
    Code: z.string().exactOptional().openapi({ example: 'COD' }),
    Comment: z.string().exactOptional().openapi({ example: 'my document' }),
    Date: z.string().exactOptional().openapi({ example: '20161203' }),
    Extension: z.string().exactOptional().openapi({ example: 'pdf' }),
    FolderDate: z.string().exactOptional().openapi({ example: '20161203020506' }),
    Id: z.string().exactOptional().openapi({ example: 'P45IHFA' }),
    Title: z.string().exactOptional().openapi({ example: 'Facture décembre' }),
  })
  .openapi({ required: [] })
  .openapi('Document')

const AccountingSchema = DocumentSchema.and(
  z
    .object({
      Accounting: z
        .object({
          AccountedOn: z.string().exactOptional().openapi({ example: '20181202' }),
          Workbook: z
            .enum([
              'customer',
              'provider',
              'bank',
              'cashWoucher',
              'fiscal',
              'insurance',
              'social',
              'other',
              'permanent',
            ])
            .exactOptional()
            .openapi({ example: 'fiscal' }),
          YearMonth: z.string().exactOptional().openapi({ example: 201802 }),
        })
        .exactOptional()
        .openapi({ required: [] }),
    })
    .openapi({ required: [] }),
).openapi('Accounting')

const FolderSchema = z
  .object({
    About: z.string().exactOptional().openapi({ example: '<b> Mon premier dossier </b>' }),
    ArchivalDate: z.string().exactOptional().openapi({ example: '20160203' }),
    Class: z.string().exactOptional().openapi({ example: 'social' }),
    Home: z.boolean().exactOptional().openapi({ example: 'yes' }),
    Id: z.string().exactOptional().openapi({ example: 'T45IHFA' }),
    Keywords: z
      .array(z.string())
      .exactOptional()
      .openapi({ example: ['paris', 'comptabilité'] }),
    Level: z
      .enum(['confidential', 'regular', 'public'])
      .exactOptional()
      .openapi({ example: 'confidential' }),
    ModificationDate: z.string().exactOptional().openapi({ example: '20190325125042' }),
    Name: z.string().exactOptional().openapi({ example: 'Dupond' }),
    Parent: z.string().exactOptional().openapi({ example: 'TIOPHNA' }),
  })
  .openapi({ required: [] })
  .openapi('Folder')

const AccountingYearSchema = FolderSchema.and(
  z
    .object({
      Comment: z.string().exactOptional().openapi({ example: 'ogm of the company' }),
      End: z.string().exactOptional().openapi({ example: '20181231' }),
      NetIncome: z.number().exactOptional().openapi({ example: 52634.36 }),
      NetPosition: z.number().exactOptional().openapi({ example: 14580.36 }),
      Start: z.string().exactOptional().openapi({ example: '20171231' }),
      Tax: z.number().exactOptional().openapi({ example: 45698.36 }),
      TaxableIncome: z.number().exactOptional().openapi({ example: 869523.36 }),
      Turnover: z.number().exactOptional().openapi({ example: 1025.36 }),
    })
    .openapi({ required: [] }),
).openapi('AccountingYear')

const ContractSchema = FolderSchema.and(
  z
    .object({
      Comment: z.string().exactOptional().openapi({ example: 'pieces company' }),
      End: z.string().exactOptional().openapi({ example: '20190101' }),
      Start: z.string().exactOptional().openapi({ example: '20180630' }),
    })
    .openapi({ required: [] }),
).openapi('Contract')

const BankSchema = ContractSchema.and(
  z
    .object({
      ContractReference: z.string().exactOptional().openapi({ example: '13587449420F' }),
      Designation: z.string().exactOptional().openapi({ example: 'banque prêt entreprise' }),
    })
    .openapi({ required: [] }),
).openapi('Bank')

const BankStatementSchema = DocumentSchema.and(
  z
    .object({
      AccountedOn: z.string().exactOptional().openapi({ example: 20201231 }),
      Balance: z.number().exactOptional().openapi({ example: 1352.63 }),
      Number: z.number().exactOptional().openapi({ example: '10015848' }),
      StatementDate: z.string().exactOptional().openapi({ example: '20160801' }),
    })
    .openapi({ required: [] }),
).openapi('BankStatement')

const BusinessGroupSchema = z
  .object({
    Id: z.string().exactOptional().openapi({ example: 'P45IHFA' }),
    ModificationDate: z.string().exactOptional().openapi({ example: '20190325125042' }),
    Name: z.string().exactOptional().openapi({ example: 'Client Durand' }),
  })
  .openapi({ required: [] })
  .openapi('BusinessGroup')

const CallForDocumentSchema = z
  .object({
    Categories: z
      .array(z.string())
      .exactOptional()
      .openapi({ example: ['ID', 'Invoices'] }),
    ClientManagement: z.enum(['no', 'manager', 'adn']).exactOptional(),
    Comment: z.string().exactOptional().openapi({ example: 'first invitation' }),
    Contact: z.string().exactOptional().openapi({ example: 'Dupond' }),
    IsAdmin: z.boolean().exactOptional().openapi({ example: true }),
    Message: z
      .string()
      .exactOptional()
      .openapi({ example: "<p> Bienvenue dans l'espace de l'entreprise SOCIETE </p>" }),
    Player: z
      .enum(['guest', 'owner', 'manager', 'assistant', 'collaborator'])
      .exactOptional()
      .openapi({ example: 'guest' }),
    PlayerEnd: z.string().exactOptional().openapi({ example: '20190601' }),
    Signature: z.string().exactOptional().openapi({ example: 'cordialement' }),
    Subject: z.string().exactOptional().openapi({ example: 'invitation sur le coffre' }),
  })
  .openapi({ required: [] })
  .openapi('CallForDocument')

const CollectiveDecisionSchema = FolderSchema.and(
  z
    .object({
      Comment: z.string().exactOptional().openapi({ example: 'ogm of the company' }),
      Date: z.string().exactOptional().openapi({ example: '20180202' }),
      DividendDistributions: z.number().exactOptional().openapi({ example: 1025.36 }),
      DividendDistributionsDate: z.string().exactOptional().openapi({ example: '20180203' }),
      Event: z
        .enum([
          'EGM',
          'CGM',
          'OGM',
          'ConstituentAssembly',
          'SolePartner',
          'OtherEvent',
          'Other',
          'Office',
          'ExecutiveCommittee',
          'Consulting',
          'Board',
          'PartnersMeeting',
        ])
        .exactOptional()
        .openapi({ example: 'EGM' }),
    })
    .openapi({ required: [] }),
).openapi('CollectiveDecision')

const LegalEntitySchema = z
  .object({
    ArchivalDate: z.string().exactOptional().openapi({ example: '20160203' }),
    Comment: z.string().exactOptional().openapi({ example: 'my brother' }),
    Id: z.string().exactOptional().openapi({ example: 'T45IHFA' }),
    ModificationDate: z.string().exactOptional().openapi({ example: '20190325125042' }),
    Name: z.string().exactOptional().openapi({ example: 'Dupond' }),
  })
  .openapi({ required: [] })
  .openapi('LegalEntity')

const CompanyEntitySchema = LegalEntitySchema.and(
  z
    .object({
      ApeCode: z.string().exactOptional().openapi({ example: '420F' }),
      LegalName: z.string().exactOptional().openapi({ example: 'Mon entreprise Dupond' }),
      LegalStatut: z.string().exactOptional().openapi({ example: 'SAS' }),
      RegistrationNumber: z.string().exactOptional().openapi({ example: '236542158' }),
      Type: z.string().exactOptional().openapi({ example: 'EPT' }),
      VatNumber: z.string().exactOptional().openapi({ example: '46546847864' }),
    })
    .openapi({ required: [] }),
).openapi('CompanyEntity')

const ContractualRelationshipSchema = ContractSchema.and(
  z
    .object({
      ContractReference: z.string().exactOptional().openapi({ example: '13587449420F' }),
      Designation: z.string().exactOptional().openapi({ example: 'autre contrat' }),
    })
    .openapi({ required: [] }),
).openapi('ContractualRelationship')

const ContractualDocumentSchema = DocumentSchema.and(
  z
    .object({
      Amount: z.string().exactOptional().openapi({ example: '1001.36' }),
      Designation: z.string().exactOptional().openapi({ example: 'contrat client' }),
      Reference: z.string().exactOptional().openapi({ example: '151465AFHIA' }),
      StartDate: z.string().exactOptional().openapi({ example: '20181128' }),
      Type: z
        .enum([
          'contract',
          'engagement-letter',
          'amendment',
          'purchase-order',
          'delivery-order',
          'quotation',
          'other',
        ])
        .exactOptional()
        .openapi({ example: 'quotation' }),
    })
    .openapi({ required: [] }),
).openapi('ContractualDocument')

const CorporateTaxDeclarationSchema = DocumentSchema.and(
  z
    .object({
      Amount: z.float32().exactOptional().openapi({ example: 132.63 }),
      DeclarationDate: z.string().exactOptional().openapi({ example: '20160801' }),
      Order: z
        .enum(['1st advance', '2nd advance', '3rd advance', '4th advance', 'regularization'])
        .exactOptional()
        .openapi({ example: '1st advance' }),
      Rate: z.float32().exactOptional().openapi({ example: 10.63 }),
      TaxBase: z.float32().exactOptional().openapi({ example: 123.36 }),
    })
    .openapi({ required: [] }),
).openapi('CorporateTaxDeclaration')

const CustomerSchema = ContractSchema.and(
  z
    .object({
      CustomerNumber: z.string().exactOptional().openapi({ example: '13587449420F' }),
      Designation: z.string().exactOptional().openapi({ example: 'client pièces détachées' }),
    })
    .openapi({ required: [] }),
).openapi('Customer')

const EmployeeSchema = ContractSchema.and(
  z
    .object({
      ContractType: z.string().exactOptional().openapi({ example: '01' }),
      EmployeeNumber: z.string().exactOptional().openapi({ example: '13587FAZCD420F' }),
      Function: z.string().exactOptional().openapi({ example: 'commercial' }),
      PostalMail: z.boolean().exactOptional().openapi({ example: true }),
      SSNumber: z.string().exactOptional().openapi({ example: '1542012365985215' }),
    })
    .openapi({ required: [] }),
).openapi('Employee')

const EmployerSchema = ContractSchema.and(
  z
    .object({
      EmployeeNumber: z.string().exactOptional().openapi({ example: '13587FAZCD420F' }),
      Function: z.string().exactOptional().openapi({ example: 'commercial' }),
      SSNumber: z.string().exactOptional().openapi({ example: '1542012365985215' }),
    })
    .openapi({ required: [] }),
).openapi('Employer')

const ExchangeSchema = FolderSchema.openapi('Exchange')

const ExpenseProofSchema = DocumentSchema.and(
  z
    .object({
      Account: z
        .enum(['CAB', 'IKM', 'PRK', 'TXI', 'VOY', 'PTT', 'FHR', 'DIV', 'RES'])
        .exactOptional()
        .openapi({ example: 'CAB' }),
      ArchivalDate: z.string().exactOptional().openapi({ example: 20211231 }),
      ExpenseDate: z.string().exactOptional().openapi({ example: '20200202' }),
      InclVAT: z.number().exactOptional().openapi({ example: 1000 }),
      Provider: z.string().exactOptional().openapi({ example: 'G7' }),
      Reason: z.string().exactOptional().openapi({ example: 'taxi' }),
      Status: z.enum(['R', 'V', 'W']).exactOptional().openapi({ example: 'R' }),
      VAT: z.number().exactOptional().openapi({ example: 19.5 }),
    })
    .openapi({ required: [] }),
).openapi('ExpenseProof')

const ExpenseReportSchema = DocumentSchema.and(
  z
    .object({
      BeforeVAT: z.number().exactOptional().openapi({ example: 1000 }),
      ExpenseDate: z.string().exactOptional().openapi({ example: '20200202' }),
      InclVAT: z.number().exactOptional().openapi({ example: 1200 }),
      ProcessingDate: z.string().exactOptional().openapi({ example: '20200203' }),
      VAT: z.number().exactOptional().openapi({ example: 19.5 }),
    })
    .openapi({ required: [] }),
).openapi('ExpenseReport')

const FollowUpSchema = FolderSchema.and(
  z
    .object({
      ClientManagement: z.enum(['manager', 'adn', 'null']).exactOptional(),
      Invitation: z
        .object({
          Comment: z.string().exactOptional().openapi({ example: 'salarié invité' }),
          PlayerEnd: z.string().exactOptional().openapi({ example: '20190203' }),
          Status: z
            .union([
              z.literal(null),
              z.literal('on'),
              z.literal('refused'),
              z.literal('accepted'),
              z.literal('finished'),
              z.literal('expired'),
              z.literal('waiting for validation'),
            ])
            .exactOptional()
            .openapi({ example: 'accepted' }),
        })
        .exactOptional()
        .openapi({ required: [] }),
      Player: z
        .enum(['guest', 'manager', 'collaborator', 'owner', 'assistant'])
        .exactOptional()
        .openapi({ example: 'manager' }),
    })
    .openapi({ required: [] }),
).openapi('FollowUp')

const GroupSchema = z
  .object({
    EndDate: z.string().exactOptional().openapi({ example: '20160203' }),
    Id: z.string().exactOptional().openapi({ example: 'T45IHFA' }),
    Name: z.string().exactOptional().openapi({ example: 'RH' }),
  })
  .openapi({ required: [] })
  .openapi('Group')

const GuestInSpaceSchema = z
  .object({
    ClientManagement: z.enum(['no', 'manager', 'adn']).exactOptional(),
    Comment: z.string().exactOptional().openapi({ example: 'first invitation' }),
    Contact: z.string().exactOptional().openapi({ example: 'Dupond' }),
    Folders: z
      .array(
        z
          .object({
            Id: z.string().exactOptional().openapi({ example: 'PK8481482' }),
            Right: z.enum(['read', 'write']).exactOptional().openapi({ example: 'read' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    GroupIds: z.array(z.string().openapi({ example: ['PJFIA84', 'PHAJHFJHA'] })).exactOptional(),
    IsAdmin: z.boolean().exactOptional().openapi({ example: true }),
    MemberId: z.string().exactOptional().openapi({ example: 'PAIHIHFA79TFA' }),
    Message: z
      .string()
      .exactOptional()
      .openapi({ example: "<p> Bienvenue dans l'espace de l'entreprise SOCIETE </p>" }),
    Player: z
      .enum(['guest', 'owner', 'manager', 'assistant', 'collaborator'])
      .exactOptional()
      .openapi({ example: 'guest' }),
    PlayerEnd: z.string().exactOptional().openapi({ example: '20190601' }),
    Signature: z.string().exactOptional().openapi({ example: 'cordialement' }),
    Subject: z.string().exactOptional().openapi({ example: 'invitation sur le coffre' }),
  })
  .openapi({ required: [] })
  .openapi('GuestInSpace')

const InsuranceSchema = ContractSchema.and(
  z
    .object({
      CustomerNumber: z.string().exactOptional().openapi({ example: '13587449420F' }),
      Designation: z.string().exactOptional().openapi({ example: 'assurance civile' }),
      PolicyNumber: z.string().exactOptional().openapi({ example: '13587449420F' }),
    })
    .openapi({ required: [] }),
).openapi('Insurance')

const InvitationSchema = z
  .object({
    ClientManagement: z.enum(['no', 'manager', 'adn']).exactOptional(),
    CodeMethod: z
      .xor([
        z
          .object({
            Code: z.string().exactOptional().openapi({ example: '1234' }),
            Type: z.literal('manual').exactOptional(),
          })
          .openapi({ required: [] }),
        z
          .object({ Month: z.string().exactOptional(), Type: z.literal('payslip').exactOptional() })
          .openapi({ required: [] }),
        z.object({ Type: z.literal('SMS').exactOptional() }).openapi({ required: [] }),
      ])
      .exactOptional(),
    EmployeeAccess: z.boolean().exactOptional().openapi({ example: true }),
    Folders: z
      .array(
        z
          .object({
            Id: z.string().exactOptional().openapi({ example: 'PK8481482' }),
            Name: z.string().exactOptional().openapi({ example: 'Social' }),
            Right: z.enum(['read', 'write']).exactOptional().openapi({ example: 'read' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    GroupIds: z.array(z.string().openapi({ example: ['PJFIA84', 'PHAJHFJHA'] })).exactOptional(),
    Groups: z
      .array(
        z
          .object({
            EndDate: z.string().exactOptional().openapi({ example: '20230202' }),
            Id: z.string().exactOptional().openapi({ example: 'PK8481482' }),
            Name: z.string().exactOptional().openapi({ example: 'Mon Groupe' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    IsAdmin: z.boolean().exactOptional().openapi({ example: true }),
    LinkMethod: z
      .object({ Type: z.enum(['Postal', 'Email']).exactOptional().openapi({ example: 'Postal' }) })
      .exactOptional()
      .openapi({ required: [] }),
    Player: z
      .enum(['guest', 'owner', 'manager', 'assistant', 'collaborator'])
      .exactOptional()
      .openapi({ example: 'guest' }),
    PlayerEnd: z.string().exactOptional().openapi({ example: '20190601' }),
    Status: z
      .enum([
        'sent',
        'accepted',
        'refused',
        'expired',
        'finished',
        'waiting for validation',
        'waiting for password and userid',
        'waiting for login',
        'not sent',
        'waiting for invitation',
      ])
      .exactOptional()
      .openapi({ example: 'accepted' }),
  })
  .openapi({ required: [] })
  .openapi('Invitation')

const InvitationPersonSchema = z
  .object({ PersonId: z.string().exactOptional().openapi({ example: 'PAIHIHFA79TFA' }) })
  .openapi({ required: [] })
  .openapi('InvitationPerson')

const InvoiceSchema = DocumentSchema.and(
  z
    .object({
      AccountedOn: z.string().exactOptional().openapi({ example: 20201231 }),
      BeforeVAT: z.number().exactOptional().openapi({ example: 1000 }),
      DueDate: z.string().exactOptional().openapi({ example: 20190130 }),
      InclVAT: z.number().exactOptional().openapi({ example: 1200 }),
      InvoiceDate: z.string().exactOptional().openapi({ example: '20200202' }),
      Number: z.string().exactOptional().openapi({ example: '036459879874' }),
      PaymentDate: z.string().exactOptional().openapi({ example: 20190131 }),
      Type: z
        .enum([
          'commercial-invoice',
          'credit-note',
          'amending-invoice',
          'self-billing',
          'credit-self-billing',
          'down-payment-invoice',
          'informations-invoice',
        ])
        .exactOptional()
        .openapi({ example: 'commercial-invoice' }),
      VAT: z.number().exactOptional().openapi({ example: 19.5 }),
    })
    .openapi({ required: [] }),
).openapi('Invoice')

const LegalSchema = z
  .object({
    IdentificationNumber: z.string().exactOptional().openapi({ example: '548' }),
    RegistrationDate: z.string().exactOptional().openapi({ example: '20190325' }),
    RegistrationNumber: z.string().exactOptional().openapi({ example: '123456' }),
    VATNumber: z.string().exactOptional().openapi({ example: '123' }),
  })
  .openapi({ required: [] })
  .openapi('Legal')

const LoanSchema = ContractSchema.and(
  z
    .object({
      Amount: z.float32().exactOptional().openapi({ example: 1000 }),
      Category: z
        .enum([
          'debt spreading',
          'bank loan',
          'current account',
          'overdraft agreement',
          'leasing',
          'obligation',
        ])
        .exactOptional()
        .openapi({ example: 'debt spreading' }),
      Designation: z.string().exactOptional().openapi({ example: 'emprunt entreprise' }),
      DueAmount: z.float32().exactOptional().openapi({ example: 1000.6 }),
      MonthsNumber: z.number().exactOptional().openapi({ example: 12 }),
      Rate: z.float32().exactOptional().openapi({ example: 2.5 }),
      TotalCost: z.float32().exactOptional().openapi({ example: 10200 }),
    })
    .openapi({ required: [] }),
).openapi('Loan')

const MessageSchema = z
  .object({
    Author: z.string().exactOptional().openapi({ example: 'PKPOFJA7655TFA' }),
    Id: z.string().exactOptional().openapi({ example: 'T45IHFA' }),
    Level: z.enum(['confidential', 'regular']).exactOptional().openapi({ example: 'confidential' }),
    MessageDate: z.string().exactOptional().openapi({ example: '20160203' }),
    ModificationAuthor: z.string().exactOptional().openapi({ example: 'P8Y80FAVUV24' }),
    ModificationDate: z.string().exactOptional().openapi({ example: '20190325125042' }),
    Text: z.string().exactOptional().openapi({ example: '<p> hello world </p>' }),
  })
  .openapi({ required: [] })
  .openapi('Message')

const ModifyCollectSchema = z
  .object({
    Categories: z.array(z.string().openapi({ example: ['ID', 'Invoices'] })).exactOptional(),
    ClientManagement: z.enum(['no', 'manager', 'adn']).exactOptional(),
    IsAdmin: z.boolean().exactOptional().openapi({ example: true }),
    Player: z
      .enum(['guest', 'owner', 'manager', 'assistant', 'collaborator'])
      .exactOptional()
      .openapi({ example: 'guest' }),
    PlayerEnd: z.string().exactOptional().openapi({ example: '20190601' }),
  })
  .openapi({ required: [] })
  .openapi('ModifyCollect')

const ModifyInvitationSchema = z
  .object({
    ClientManagement: z.enum(['no', 'manager', 'adn']).exactOptional(),
    Folders: z
      .array(
        z
          .object({
            Id: z.string().exactOptional().openapi({ example: 'PK8481482' }),
            Right: z.enum(['read', 'write']).exactOptional().openapi({ example: 'read' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    GroupIds: z.array(z.string().openapi({ example: ['PJFIA84', 'PHAJHFJHA'] })).exactOptional(),
    IsAdmin: z.boolean().exactOptional().openapi({ example: true }),
    Player: z
      .enum(['guest', 'owner', 'manager', 'assistant', 'collaborator'])
      .exactOptional()
      .openapi({ example: 'guest' }),
    PlayerEnd: z.string().exactOptional().openapi({ example: '20190601' }),
  })
  .openapi({ required: [] })
  .openapi('ModifyInvitation')

const OtherTaxSchema = DocumentSchema.and(
  z
    .object({
      Amount: z.float32().exactOptional().openapi({ example: 132.63 }),
      DeclarationDate: z.string().exactOptional().openapi({ example: '20160801' }),
      Reference: z.string().exactOptional().openapi({ example: 'décla CFE' }),
    })
    .openapi({ required: [] }),
).openapi('OtherTax')

const PasswordSchema = z
  .object({
    Comment: z.string().exactOptional().openapi({ example: 'mon compte google' }),
    Designation: z.string().exactOptional().openapi({ example: 'compte google' }),
    Ident: z.string().exactOptional().openapi({ example: 'test' }),
    Link: z.string().exactOptional().openapi({ example: 'https://www.google.fr' }),
    Password: z.string().exactOptional().openapi({ example: 'azerty' }),
  })
  .openapi({ required: [] })
  .openapi('Password')

const PaySlipSchema = DocumentSchema.and(
  z
    .object({
      Begin: z.string().exactOptional().openapi({ example: '20160801' }),
      EmployeeContributions: z.float32().exactOptional().openapi({ example: 2000.5 }),
      EmployerContributions: z.float32().exactOptional().openapi({ example: 400.5 }),
      End: z.string().exactOptional().openapi({ example: '20160831' }),
      FixedGrossAmount: z.float32().exactOptional().openapi({ example: 1352.63 }),
      NetAmount: z.float32().exactOptional().openapi({ example: 1005.63 }),
      TotalGrossAmount: z.float32().exactOptional().openapi({ example: 1548.63 }),
      Vacation: z.float32().exactOptional().openapi({ example: 20.5 }),
      VariableGrossAmount: z.float32().exactOptional().openapi({ example: 132.63 }),
    })
    .openapi({ required: [] }),
).openapi('PaySlip')

const PayrollSchema = DocumentSchema.and(
  z
    .object({
      Begin: z.string().exactOptional().openapi({ example: '20160801' }),
      EmployeeContributions: z.float32().exactOptional().openapi({ example: 1352.63 }),
      EmployerContributions: z.float32().exactOptional().openapi({ example: 132.63 }),
      End: z.string().exactOptional().openapi({ example: '20160831' }),
      NetAmount: z.float32().exactOptional().openapi({ example: 1005.63 }),
      TotalGrossAmount: z.float32().exactOptional().openapi({ example: 1548.63 }),
    })
    .openapi({ required: [] }),
).openapi('Payroll')

const PersonSchema = LegalEntitySchema.and(
  z
    .object({
      Address: z
        .object({
          City: z.string().exactOptional().openapi({ example: 'Paris' }),
          Complement: z.string().exactOptional().openapi({ example: 'batiment A' }),
          Country: z.string().exactOptional().openapi({ example: 'France' }),
          Street: z.string().exactOptional().openapi({ example: '2, rue du chateau' }),
          ZipCode: z.string().exactOptional().openapi({ example: '75001' }),
        })
        .exactOptional()
        .openapi({ required: [] }),
      Birth: z
        .object({
          Date: z.int().exactOptional().openapi({ example: 19671231 }),
          Place: z.string().exactOptional().openapi({ example: 'Lille' }),
        })
        .exactOptional()
        .openapi({ required: [] }),
      Email: z.string().exactOptional().openapi({ example: 'bertrand@monmail.com' }),
      FirstName: z.string().exactOptional().openapi({ example: 'Bertrand' }),
      Function: z
        .array(z.string())
        .exactOptional()
        .openapi({ example: ['employee', 'provider'] }),
      MemberId: z.string().exactOptional().openapi({ example: 'P1A6FD090A' }),
      Mobile: z.string().exactOptional().openapi({ example: '+33606060606' }),
      Sex: z.enum(['male', 'female']).exactOptional().openapi({ example: 'male' }),
      Validated: z.enum(['true', 'false']).exactOptional().openapi({ example: 'true' }),
    })
    .openapi({ required: [] }),
).openapi('Person')

const PortfolioSchema = FolderSchema.and(
  z
    .object({ Designation: z.string().exactOptional().openapi({ example: 'My Portfolio' }) })
    .openapi({ required: [] }),
).openapi('Portfolio')

const ProfessionalPropertiesSchema = FolderSchema.and(
  z
    .object({
      Comment: z.string().exactOptional().openapi({ example: 'Peugeot Lyon' }),
      DateIn: z.string().exactOptional().openapi({ example: '20201802' }),
      DateOut: z.string().exactOptional().openapi({ example: '20201802' }),
      Designation: z.string().exactOptional().openapi({ example: 'peugeot siège' }),
      Value: z.number().exactOptional().openapi({ example: 1500.23 }),
    })
    .openapi({ required: [] }),
).openapi('ProfessionalProperties')

const ProfessionalVehicleSchema = ProfessionalPropertiesSchema.and(
  z
    .object({
      Brand: z.string().exactOptional().openapi({ example: 'Renault' }),
      CompanyTax: z.boolean().exactOptional().openapi({ example: true }),
      Model: z.string().exactOptional().openapi({ example: 'Clio' }),
      RegistrationDate: z.string().exactOptional().openapi({ example: '20181231' }),
      RegistrationNumber: z.string().exactOptional().openapi({ example: 'AA001AA' }),
      Type: z.string().exactOptional().openapi({ example: 'car' }),
    })
    .openapi({ required: [] }),
).openapi('ProfessionalVehicle')

const ProviderSchema = ContractSchema.and(
  z
    .object({
      About: z.string().exactOptional().openapi({ example: '<b> Mon premier fournisseur </b>' }),
      Designation: z.string().exactOptional().openapi({ example: 'fournisseur pièces détachées' }),
      ProviderNumber: z.string().exactOptional().openapi({ example: '13587449420F' }),
    })
    .openapi({ required: [] }),
).openapi('Provider')

const SectionSchema = z
  .object({
    Keywords: z.array(z.string().openapi({ example: ['paris', 'comptabilité'] })).exactOptional(),
    Name: z.string().exactOptional().openapi({ example: 'Journal' }),
    State: z.enum(['folded', 'unfolded', 'hidden']).exactOptional().openapi({ example: 'folded' }),
    Type: z
      .enum([
        'about',
        'notes',
        'documents',
        'tasks',
        'codes',
        'subfolders',
        'contacts',
        'any other specific type',
      ])
      .exactOptional()
      .openapi({ example: 'notes' }),
  })
  .openapi({ required: [] })
  .openapi('Section')

const SessionSchema = z
  .object({
    MemberId: z.string().exactOptional().openapi({ example: 'PIFIAJHNFA972BUBF' }),
    Scope: z.string().exactOptional().openapi({ example: 'collaborator' }),
  })
  .openapi({ required: [] })
  .openapi('Session')

const SocialContractSchema = DocumentSchema.and(
  z
    .object({
      ContractDate: z.string().exactOptional().openapi({ example: '20190202' }),
      ContractDuration: z.string().exactOptional().openapi({ example: '6 mois' }),
      ContractualChange: z.string().exactOptional().openapi({ example: 'augmentation' }),
      Position: z.string().exactOptional().openapi({ example: 'cadre' }),
      WageDevelopments: z.float32().exactOptional().openapi({ example: 1548.63 }),
    })
    .openapi({ required: [] }),
).openapi('SocialContract')

const SocialDeclarationSchema = DocumentSchema.and(
  z
    .object({
      Amount: z.float32().exactOptional().openapi({ example: 132.63 }),
      DeclarationDate: z.string().exactOptional().openapi({ example: '20160801' }),
    })
    .openapi({ required: [] }),
).openapi('SocialDeclaration')

const SocialRegimeSchema = ContractSchema.and(
  z
    .object({
      About: z.string().exactOptional().openapi({ example: '<b> Mon premier fournisseur </b>' }),
      Designation: z.string().exactOptional().openapi({ example: 'fournisseur pièces détachées' }),
      Periodicity: z
        .enum(['monthly', 'quarterly', 'half-yearly', 'annual', 'null'])
        .exactOptional()
        .openapi({ example: 'monthly' }),
      Type: z
        .enum(['mandatory', 'optional', 'null'])
        .exactOptional()
        .openapi({ example: 'mandatory' }),
    })
    .openapi({ required: [] }),
).openapi('SocialRegime')

const SpaceSchema = z
  .object({
    Id: z.string().exactOptional().openapi({ example: 'P12345' }),
    Logo: z
      .object({
        Content64Encoded: z.string().exactOptional().openapi({ example: 'PHNUOAFAFOPFAF' }),
        Extension: z.string().exactOptional().openapi({ example: 'png' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    ModificationDate: z.string().exactOptional().openapi({ example: '20190325125042' }),
    Name: z.string().exactOptional().openapi({ example: 'Mon Entreprise' }),
    Type: z
      .enum(['private', 'enterprise', 'company', 'association'])
      .exactOptional()
      .openapi({ example: 'company' }),
  })
  .openapi({ required: [] })
  .openapi('Space')

const SpacesInvoicingSchema = DocumentSchema.and(
  z
    .object({ InvoiceNumber: z.string().exactOptional().openapi({ example: 'A123' }) })
    .openapi({ required: [] }),
).openapi('SpacesInvoicing')

const TaxContractSchema = FolderSchema.and(
  z
    .object({
      Comment: z.string().exactOptional().openapi({ example: 'ogm of the company' }),
      Designation: z.string().exactOptional().openapi({ example: 'année 2019' }),
      End: z.string().exactOptional().openapi({ example: '20181231' }),
      Start: z.string().exactOptional().openapi({ example: '20171231' }),
    })
    .openapi({ required: [] }),
).openapi('TaxContract')

const TriggerSchema = z
  .object({
    Date: z.string().exactOptional(),
    Event: z.enum(['person', 'collect', 'document']).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Trigger')

const VATDeclarationSchema = DocumentSchema.and(
  z
    .object({
      Begin: z.string().exactOptional().openapi({ example: '20160801' }),
      CollectedVAT: z.float32().exactOptional().openapi({ example: 1548.63 }),
      CreditVAT: z.float32().exactOptional().openapi({ example: 400.5 }),
      DeductibleVAT: z.float32().exactOptional().openapi({ example: 20.5 }),
      End: z.string().exactOptional().openapi({ example: '20160831' }),
      ExemptTurnover: z.float32().exactOptional().openapi({ example: 132.63 }),
      Number: z.string().exactOptional().openapi({ example: '153126' }),
      PayableVAT: z.float32().exactOptional().openapi({ example: 2000.5 }),
      TaxableTurnover: z.float32().exactOptional().openapi({ example: 1352.63 }),
    })
    .openapi({ required: [] }),
).openapi('VATDeclaration')

const AccountingResponse = {
  description: 'A list of accountings document of the folder',
  content: { 'application/json': { schema: z.array(AccountingSchema) } },
}

const AccountingYearResponse = {
  description: 'A list of accounting years',
  content: {
    'application/json': {
      schema: z.array(
        AccountingYearSchema.and(
          z
            .object({ Id: z.string().exactOptional().openapi({ example: 'P45IHFA' }) })
            .openapi({ required: [] }),
        ),
      ),
    },
  },
}

const AccountingsJournalResponse = {
  description: 'A list of accountings document (journal)',
  content: {
    'application/json': {
      schema: z.array(
        z
          .object({
            AccountingDate: z.string().exactOptional().openapi({ example: '20181123' }),
            AccountingDocumentId: z.string().exactOptional().openapi({ example: 'P0I4UIBH91' }),
            Class: z.string().exactOptional().openapi({ example: 'invoice' }),
            Code: z.string().exactOptional().openapi({ example: 'delivered' }),
            DeliveryDate: z.string().exactOptional().openapi({ example: '20181123082356' }),
            Id: z.string().exactOptional().openapi({ example: 'PJDAKAZ9299' }),
            Number: z.int().exactOptional().openapi({ example: 12 }),
            TargetFolder: z
              .object({
                Id: z.string().exactOptional().openapi({ example: 'P90742HB' }),
                Name: z.string().exactOptional().openapi({ example: 'Exercice clos le' }),
              })
              .exactOptional()
              .openapi({ required: [] }),
            Workbook: z
              .enum([
                'customer',
                'provider',
                'bank',
                'cashWoucher',
                'fiscal',
                'insurance',
                'social',
                'other',
                'permanent',
              ])
              .exactOptional()
              .openapi({ example: 'fiscal' }),
            YearMonth: z.string().exactOptional().openapi({ example: '201811' }),
          })
          .openapi({ required: [] }),
      ),
    },
  },
}

const BankResponse = {
  description: 'A list of bank folders',
  content: { 'application/json': { schema: z.array(BankSchema) } },
}

const BankStatementResponse = {
  description: 'A list of bank statements of the folder bank',
  content: { 'application/json': { schema: z.array(BankStatementSchema) } },
}

const BusinessGroupResponse = {
  description: 'A list of groups',
  content: { 'application/json': { schema: z.array(BusinessGroupSchema) } },
}

const CollectiveDecisionResponse = {
  description: 'A list of collective decisions',
  content: {
    'application/json': {
      schema: z.array(
        CollectiveDecisionSchema.and(
          z
            .object({ Id: z.string().exactOptional().openapi({ example: 'P45IHFA' }) })
            .openapi({ required: [] }),
        ),
      ),
    },
  },
}

const CompanyEntityResponse = {
  description: 'A list of company entities',
  content: { 'application/json': { schema: z.array(CompanyEntitySchema) } },
}

const ContractResponse = {
  description: 'A list of contracts folders',
  content: { 'application/json': { schema: z.array(ContractSchema) } },
}

const ContractingCustomerResponse = {
  description: 'A list of customer folders',
  content: {
    'application/json': {
      schema: z.array(
        CustomerSchema.and(
          z
            .object({
              Contracting: z
                .object({
                  Id: z.string().exactOptional().openapi({ example: 'P12345' }),
                  Type: z.string().exactOptional().openapi({ example: 'Person' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        ),
      ),
    },
  },
}

const ContractingPartnerResponse = {
  description: 'A list of contracting partners',
  content: {
    'application/json': {
      schema: z.array(
        z
          .object({
            Class: z
              .enum(['CompanyEntity', 'Person'])
              .exactOptional()
              .openapi({ example: 'Person' }),
            Id: z.string().exactOptional().openapi({ example: 'P12345' }),
            Role: z.string().exactOptional().openapi({ example: 'employee' }),
          })
          .openapi({ required: [] }),
      ),
    },
  },
}

const ContractingSpaceResponse = {
  description: 'Id of contracting space',
  content: {
    'application/json': {
      schema: z
        .object({ SpaceId: z.string().exactOptional().openapi({ example: 'P12345' }) })
        .openapi({ required: [] }),
    },
  },
}

const ContractualRelationshipResponse = {
  description: 'A list of other contract folders',
  content: { 'application/json': { schema: z.array(ContractualRelationshipSchema) } },
}

const ContractualDocumentResponse = {
  description: 'A list of documents of the folder',
  content: { 'application/json': { schema: z.array(ContractualDocumentSchema) } },
}

const CorporateTaxDeclarationResponse = {
  description: 'A list of Corporate Tax declarations',
  content: { 'application/json': { schema: z.array(CorporateTaxDeclarationSchema) } },
}

const CurrentDocumentResponse = {
  description: 'current version of the document',
  content: {
    'application/json': {
      schema: z
        .object({
          Author: z.string().exactOptional().openapi({ example: 'Antoine Dupond' }),
          Class: z.array(z.string().openapi({ example: ['Contract', 'Invoice'] })).exactOptional(),
          Code: z.string().exactOptional().openapi({ example: 'COD' }),
          Comment: z.string().exactOptional().openapi({ example: 'my document' }),
          Date: z.string().exactOptional().openapi({ example: '20161203' }),
          Extension: z.string().exactOptional().openapi({ example: 'png' }),
          Id: z.string().exactOptional().openapi({ example: 'P45IHFA' }),
          Title: z.string().exactOptional().openapi({ example: 'Facture décembre' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const CustomerResponse = {
  description: 'A list of customer folders',
  content: { 'application/json': { schema: z.array(CustomerSchema) } },
}

const DeliveriesJournalResponse = {
  description: 'A list of document (journal)',
  content: {
    'application/json': {
      schema: z.array(
        z
          .object({
            Author: z.string().exactOptional().openapi({ example: 'Dupond' }),
            Class: z.string().exactOptional().openapi({ example: 'invoice' }),
            DeleteDate: z.string().exactOptional().openapi({ example: '20220223' }),
            DeliveryDate: z.string().exactOptional().openapi({ example: '20181123082356' }),
            Id: z.string().exactOptional().openapi({ example: 'PJDAKAZ9299' }),
            Number: z.int().exactOptional().openapi({ example: 12 }),
            TargetFolder: z
              .object({
                Id: z.string().exactOptional().openapi({ example: 'P90742HB' }),
                Name: z.string().exactOptional().openapi({ example: 'Exercice clos le' }),
              })
              .exactOptional()
              .openapi({ required: [] }),
          })
          .openapi({ required: [] }),
      ),
    },
  },
}

const DetailsResponse = {
  description: 'A list of contact details of a person',
  content: {
    'application/json': {
      schema: z.array(
        z
          .object({
            Address: z
              .object({
                City: z.string().exactOptional().openapi({ example: 'Paris' }),
                Complement: z.string().exactOptional().openapi({ example: 'batiment A' }),
                Country: z.string().exactOptional().openapi({ example: 'France' }),
                Street: z.string().exactOptional().openapi({ example: '2, rue du chateau' }),
                ZipCode: z.string().exactOptional().openapi({ example: '75001' }),
              })
              .exactOptional()
              .openapi({ required: [] }),
            Designation: z.string().exactOptional().openapi({ example: 'Office' }),
            Email: z
              .array(z.string().openapi({ example: ['bertrand@monmail.com'] }))
              .exactOptional(),
            Phone: z.array(z.string().openapi({ example: ['+33606060606'] })).exactOptional(),
          })
          .openapi({ required: [] }),
      ),
    },
  },
}

const DocumentResponse = {
  description: 'A list of documents of the folder',
  content: { 'application/json': { schema: z.array(DocumentSchema) } },
}

const DocumentDataResponse = {
  description: 'A list of documents of the folder',
  content: {
    'application/json': {
      schema: z.array(
        DocumentSchema.and(
          z.object({ Extend: z.object({}).exactOptional() }).openapi({ required: [] }),
        ),
      ),
    },
  },
}

const DocumentSearchResponse = {
  description: 'A list of documents returned by the search',
  content: {
    'application/json': {
      schema: z.array(
        z
          .object({
            Author: z.string().exactOptional().openapi({ example: 'Antoine Dupond' }),
            Code: z.string().exactOptional().openapi({ example: 'COD' }),
            Comment: z.string().exactOptional().openapi({ example: 'my document' }),
            Date: z.string().exactOptional().openapi({ example: '20161203' }),
            Extension: z.string().exactOptional().openapi({ example: 'pdf' }),
            Folders: z
              .array(
                z
                  .object({
                    Id: z.string().exactOptional().openapi({ example: 'PHFIHA393' }),
                    Name: z.string().exactOptional().openapi({ example: 'My Folder' }),
                  })
                  .openapi({ required: [] }),
              )
              .exactOptional(),
            Id: z.string().exactOptional().openapi({ example: 'P45IHFA' }),
            Title: z.string().exactOptional().openapi({ example: 'Facture décembre' }),
          })
          .openapi({ required: [] }),
      ),
    },
  },
}

const EmployeeResponse = {
  description: 'A list of employees folders',
  content: { 'application/json': { schema: z.array(EmployeeSchema) } },
}

const EmployerResponse = {
  description: 'A list of employers folders',
  content: { 'application/json': { schema: z.array(EmployerSchema) } },
}

const ExpenseProofResponse = {
  description:
    'A list of expense proof of the folder (if the folder is social the PersonId is also returned)',
  content: { 'application/json': { schema: z.array(ExpenseProofSchema) } },
}

const ExpenseReportResponse = {
  description:
    'A list of expense reports of the folder (if the folder is social the PersonId is also returned)',
  content: { 'application/json': { schema: z.array(ExpenseReportSchema) } },
}

const FolderResponse = {
  description: 'A list of folders',
  content: { 'application/json': { schema: z.array(FolderSchema) } },
}

const FollowUpResponse = {
  description: 'the folder of a person',
  content: { 'application/json': { schema: FollowUpSchema } },
}

const GroupResponse = {
  description: 'A list of groups',
  content: { 'application/json': { schema: z.array(GroupSchema) } },
}

const InsuranceResponse = {
  description: 'A list of insurance folders',
  content: { 'application/json': { schema: z.array(InsuranceSchema) } },
}

const InvoiceResponse = {
  description:
    'A list of invoices of the folder  (if the folder is the root folder (Customers of Providers) the FolderId, the Designation and the Contracting  of the contract are also returned)',
  content: { 'application/json': { schema: z.array(InvoiceSchema) } },
}

const LegalEntityFollowResponse = {
  description: 'legal entity of the folder',
  content: {
    'application/json': {
      schema: z
        .object({
          Class: z.enum(['CompanyEntity', 'Person']).exactOptional().openapi({ example: 'Person' }),
          Id: z.string().exactOptional().openapi({ example: 'P12345' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const LoanResponse = {
  description: 'A list of loan folders',
  content: { 'application/json': { schema: z.array(LoanSchema) } },
}

const LogsResponse = {
  description: 'State of activation of the logs',
  content: {
    'application/json': {
      schema: z
        .object({ Enabled: z.boolean().exactOptional().openapi({ example: true }) })
        .openapi({ required: [] }),
    },
  },
}

const MailingResponse = {
  description: 'A list of documents of the folder',
  content: {
    'application/json': {
      schema: z
        .object({
          PageNb: z.number().exactOptional().openapi({ example: 2 }),
          Price: z.string().exactOptional().openapi({ example: '1.37' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const MenusResponse = {
  description: 'menus of the hub',
  content: {
    'application/json': {
      schema: z
        .object({
          Folders: z
            .array(
              z
                .object({
                  Id: z.string().exactOptional().openapi({ example: 'PIHDOIAH81' }),
                  Name: z.string().exactOptional().openapi({ example: 'My Folder' }),
                })
                .openapi({ required: [] }),
            )
            .exactOptional(),
          Workbooks: z.array(z.string().openapi({ example: 'customer' })).exactOptional(),
        })
        .openapi({ required: [] }),
    },
  },
}

const MessageResponse = {
  description: 'A list of messages',
  content: { 'application/json': { schema: z.array(MessageSchema) } },
}

const NSDResponse = {
  description: 'A list of nominative social declarations of the folder social',
  content: {
    'application/json': {
      schema: z.array(
        PayrollSchema.and(
          z
            .object({ PayrollId: z.string().exactOptional().openapi({ example: 'PJOFAP2089' }) })
            .openapi({ required: [] }),
        ),
      ),
    },
  },
}

const OneAccessResponse = {
  description: 'An access to a folder',
  content: { 'application/json': { schema: AccessSchema.and(FolderSchema) } },
}

const OneAccessDocumentResponse = {
  description: 'accesses of one document (without folder date)',
  content: {
    'application/json': {
      schema: z
        .object({
          Access: z
            .array(
              z
                .object({
                  DownloadedOn: z.string().exactOptional().openapi({ example: '20210205' }),
                  FirstName: z.string().exactOptional().openapi({ example: 'Martin' }),
                  Name: z.string().exactOptional().openapi({ example: 'Dupond' }),
                  SeenOn: z.string().exactOptional().openapi({ example: '20180201' }),
                })
                .openapi({ required: [] }),
            )
            .exactOptional(),
          Author: z.string().exactOptional().openapi({ example: 'Antoine Dupond' }),
          Class: z.array(z.string().openapi({ example: ['Contract', 'Invoice'] })).exactOptional(),
          Code: z.string().exactOptional().openapi({ example: 'COD' }),
          Comment: z.string().exactOptional().openapi({ example: 'my document' }),
          Date: z.string().exactOptional().openapi({ example: '20161203' }),
          Extension: z.string().exactOptional().openapi({ example: 'png' }),
          Id: z.string().exactOptional().openapi({ example: 'P45IHFA' }),
          Title: z.string().exactOptional().openapi({ example: 'Facture décembre' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const OneAccountingResponse = {
  description: 'document with accounting property',
  content: {
    'application/json': {
      schema: z
        .object({
          Accounting: z
            .object({
              AccountedOn: z.string().exactOptional().openapi({ example: '20181202' }),
              Workbook: z
                .enum([
                  'customer',
                  'provider',
                  'bank',
                  'cashWoucher',
                  'fiscal',
                  'insurance',
                  'social',
                  'other',
                  'permanent',
                ])
                .exactOptional()
                .openapi({ example: 'fiscal' }),
              YearMonth: z.string().exactOptional().openapi({ example: 201802 }),
            })
            .exactOptional()
            .openapi({ required: [] }),
          Author: z.string().exactOptional().openapi({ example: 'Antoine Dupond' }),
          Class: z.array(z.string().openapi({ example: ['Contract', 'Invoice'] })).exactOptional(),
          Code: z.string().exactOptional().openapi({ example: 'COD' }),
          Comment: z.string().exactOptional().openapi({ example: 'my document' }),
          Date: z.string().exactOptional().openapi({ example: '20161203' }),
          Extension: z.string().exactOptional().openapi({ example: 'png' }),
          Id: z.string().exactOptional().openapi({ example: 'P45IHFA' }),
          Title: z.string().exactOptional().openapi({ example: 'Facture décembre' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const OneBankResponse = {
  description: 'A bank folder',
  content: { 'application/json': { schema: BankSchema } },
}

const OneBusinessGroupResponse = {
  description: 'A group',
  content: {
    'application/json': {
      schema: BusinessGroupSchema.and(
        z
          .object({ Id: z.string().exactOptional().openapi({ example: 'P45IHFA' }) })
          .openapi({ required: [] }),
      ).and(
        z
          .object({
            ModificationDate: z.string().exactOptional().openapi({ example: '20190325125042' }),
          })
          .openapi({ required: [] }),
      ),
    },
  },
}

const OneCompanyEntityResponse = {
  description: 'A company entity',
  content: { 'application/json': { schema: CompanyEntitySchema } },
}

const OneContractualRelationshipResponse = {
  description: 'A contractual relationship folder',
  content: { 'application/json': { schema: ContractualRelationshipSchema } },
}

const OneCustomerResponse = {
  description: 'A customer folder',
  content: {
    'application/json': {
      schema: CustomerSchema.and(
        z
          .object({
            Actors: z
              .array(
                z
                  .object({
                    Active: z.string().exactOptional().openapi({ example: 'no' }),
                    IsAdmin: z.string().exactOptional().openapi({ example: 'yes' }),
                    MemberId: z.string().exactOptional().openapi({ example: 'P12345' }),
                    Name: z.string().exactOptional().openapi({ example: 'Antoine Dupond' }),
                    Role: z.string().exactOptional().openapi({ example: 'collaborator' }),
                  })
                  .openapi({ required: [] }),
              )
              .exactOptional(),
            ClientSpaceId: z.string().exactOptional().openapi({ example: 'PDHIADHIA' }),
            PortfolioId: z.string().exactOptional().openapi({ example: 'PJFAIOJFR' }),
            SecondaryPortfolioIds: z
              .array(z.string().openapi({ example: 'PJFAIOJFR' }))
              .exactOptional(),
          })
          .openapi({ required: [] }),
      ),
    },
  },
}

const OneDocumentResponse = {
  description: 'content of one document (without folder date)',
  content: {
    '*/*': {
      schema: z
        .object({ File: z.file().exactOptional().openapi({ type: 'string', format: 'binary' }) })
        .openapi({ required: [] }),
    },
    'application/json': {
      schema: z
        .object({
          Author: z.string().exactOptional().openapi({ example: 'Antoine Dupond' }),
          Class: z
            .array(z.string())
            .exactOptional()
            .openapi({ example: ['Contract', 'Invoice'] }),
          Code: z.string().exactOptional().openapi({ example: 'COD' }),
          Comment: z.string().exactOptional().openapi({ example: 'my document' }),
          Date: z.string().exactOptional().openapi({ example: '20161203' }),
          Extension: z.string().exactOptional().openapi({ example: 'png' }),
          File: z
            .object({
              Content64Encoded: z.string().exactOptional().openapi({ example: 'JFOJAOJF=' }),
            })
            .exactOptional()
            .openapi({ required: [] }),
          Id: z.string().exactOptional().openapi({ example: 'P45IHFA' }),
          Title: z.string().exactOptional().openapi({ example: 'Facture décembre' }),
        })
        .openapi({ required: [] }),
    },
    'multipart/form-data': {
      schema: z
        .object({
          DTO: z
            .object({
              Author: z.string().exactOptional().openapi({ example: 'Antoine Dupond' }),
              Class: z
                .array(z.string().openapi({ example: ['Contract', 'Invoice'] }))
                .exactOptional(),
              Code: z.string().exactOptional().openapi({ example: 'COD' }),
              Comment: z.string().exactOptional().openapi({ example: 'my document' }),
              Date: z.string().exactOptional().openapi({ example: '20161203' }),
              Extension: z.string().exactOptional().openapi({ example: 'png' }),
              Id: z.string().exactOptional().openapi({ example: 'P45IHFA' }),
              Title: z.string().exactOptional().openapi({ example: 'Facture décembre' }),
            })
            .exactOptional()
            .openapi({ required: [] }),
          File: z.file().exactOptional().openapi({ type: 'string', format: 'binary' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const OneDocumentFoldersResponse = {
  description: 'document with folders',
  content: {
    'application/json': {
      schema: z
        .object({
          Author: z.string().exactOptional().openapi({ example: 'Antoine Dupond' }),
          Class: z.array(z.string().openapi({ example: ['Contract', 'Invoice'] })).exactOptional(),
          Code: z.string().exactOptional().openapi({ example: 'COD' }),
          Comment: z.string().exactOptional().openapi({ example: 'my document' }),
          Date: z.string().exactOptional().openapi({ example: '20161203' }),
          Extension: z.string().exactOptional().openapi({ example: 'png' }),
          FolderDate: z.string().exactOptional().openapi({ example: '20161203' }),
          Folders: z
            .array(
              z
                .object({
                  Id: z.string().exactOptional().openapi({ example: 'PHFIHA393' }),
                  Name: z.string().exactOptional().openapi({ example: 'My Folder' }),
                })
                .openapi({ required: [] }),
            )
            .exactOptional(),
          Id: z.string().exactOptional().openapi({ example: 'P45IHFA' }),
          Title: z.string().exactOptional().openapi({ example: 'Facture décembre' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const OneEmployeeResponse = {
  description: 'An employee folder',
  content: { 'application/json': { schema: EmployeeSchema } },
}

const OneFolderResponse = {
  description: 'A folder',
  content: {
    'application/json': {
      schema: FolderSchema.and(
        z
          .object({ Id: z.string().exactOptional().openapi({ example: 'T45IHFA' }) })
          .openapi({ required: [] }),
      ).and(
        z
          .object({
            ModificationDate: z.string().exactOptional().openapi({ example: '20190325125042' }),
          })
          .openapi({ required: [] }),
      ),
    },
  },
}

const OneGroupResponse = {
  description: 'A company entity',
  content: {
    'application/json': {
      schema: GroupSchema.and(
        z
          .object({
            Accesses: z
              .object({
                Id: z.string().exactOptional().openapi({ example: 'PAHIA1564165' }),
                Name: z.string().exactOptional().openapi({ example: 'Social' }),
                Right: z.enum(['read', 'write']).exactOptional().openapi({ example: 'read' }),
              })
              .exactOptional()
              .openapi({ required: [] }),
            Persons: z
              .object({ MemberId: z.string().exactOptional().openapi({ example: 'PAHIA1564165' }) })
              .exactOptional()
              .openapi({ required: [] }),
          })
          .openapi({ required: [] }),
      ),
    },
  },
}

const OneInsuranceResponse = {
  description: 'An insurance folder',
  content: { 'application/json': { schema: InsuranceSchema } },
}

const OneLegalResponse = {
  description: 'Legal informations of a space',
  content: { 'application/json': { schema: LegalSchema } },
}

const OneLoanResponse = {
  description: 'A loan folder',
  content: { 'application/json': { schema: LoanSchema } },
}

const OneMessageResponse = {
  description: 'A message',
  content: {
    'application/json': {
      schema: MessageSchema.and(
        z
          .object({ Id: z.string().exactOptional().openapi({ example: 'T45IHFA' }) })
          .openapi({ required: [] }),
      ).and(
        z
          .object({
            ModificationDate: z.string().exactOptional().openapi({ example: '20190325125042' }),
          })
          .openapi({ required: [] }),
      ),
    },
  },
}

const OneNSDResponse = {
  description: 'A nominative social declaration of the folder social',
  content: {
    'application/json': {
      schema: PayrollSchema.and(
        z
          .object({ PayrollId: z.string().exactOptional().openapi({ example: 'PJOFAP2089' }) })
          .openapi({ required: [] }),
      ),
    },
  },
}

const OnePasswordResponse = {
  description: 'A password',
  content: {
    'application/json': {
      schema: PasswordSchema.and(
        z
          .object({ Id: z.string().exactOptional().openapi({ example: 'T45IHFA' }) })
          .openapi({ required: [] }),
      ),
    },
  },
}

const OnePersonResponse = {
  description: 'A person',
  content: {
    'application/json': {
      schema: PersonSchema.and(
        z
          .object({ Id: z.string().exactOptional().openapi({ example: 'T45IHFA' }) })
          .openapi({ required: [] }),
      )
        .and(
          z
            .object({
              ModificationDate: z.string().exactOptional().openapi({ example: '20190325125042' }),
            })
            .openapi({ required: [] }),
        )
        .and(
          z
            .object({ MemberId: z.string().exactOptional().openapi({ example: 'P1A6FD090A' }) })
            .openapi({ required: [] }),
        ),
    },
  },
}

const OneProviderResponse = {
  description: 'A provider folder',
  content: { 'application/json': { schema: ProviderSchema } },
}

const OneSocialRegimeResponse = {
  description: 'A social regime folder',
  content: { 'application/json': { schema: SocialRegimeSchema } },
}

const OneSpaceResponse = {
  description: 'A space',
  content: {
    'application/json': {
      schema: z
        .object({
          Id: z.string().exactOptional().openapi({ example: 'P12345' }),
          ModificationDate: z.string().exactOptional().openapi({ example: '20190325125042' }),
          Name: z.string().exactOptional().openapi({ example: 'Mon Entreprise' }),
          Type: z
            .enum(['private', 'enterprise', 'company', 'association'])
            .exactOptional()
            .openapi({ example: 'company' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const OneSpaceWithExtendResponse = {
  description: 'A space',
  content: {
    'application/json': {
      schema: z
        .object({
          Extend: z
            .object({})
            .exactOptional()
            .openapi({ example: { test: 'test' } }),
          Id: z.string().exactOptional().openapi({ example: 'P12345' }),
          ModificationDate: z.string().exactOptional().openapi({ example: '20190325125042' }),
          Name: z.string().exactOptional().openapi({ example: 'Mon Entreprise' }),
          Type: z
            .enum(['private', 'enterprise', 'company', 'association'])
            .exactOptional()
            .openapi({ example: 'company' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const OneSpaceWithLogoResponse = {
  description: 'A space',
  content: {
    'application/json': { schema: SpaceSchema },
    'multipart/form-data': { schema: SpaceSchema },
  },
}

const OtherTaxResponse = {
  description: 'A list of other taxes declarations',
  content: { 'application/json': { schema: z.array(OtherTaxSchema) } },
}

const PartialProfileResponse = {
  description: 'the status of the member',
  content: {
    'application/json': {
      schema: z
        .object({
          Birth: z
            .object({
              City: z.string().exactOptional().openapi({ example: 'Créteil' }),
              Country: z.string().exactOptional().openapi({ example: 'FR' }),
              Date: z.string().exactOptional().openapi({ example: '19800101' }),
              ZipCode: z.string().exactOptional().openapi({ example: '94000' }),
            })
            .exactOptional()
            .openapi({ required: [] }),
          BirthName: z.string().exactOptional().openapi({ example: 'Dupond' }),
          FirstName: z.string().exactOptional().openapi({ example: 'Paule' }),
          Name: z.string().exactOptional().openapi({ example: 'Durand' }),
          PrivateSpaceId: z.string().exactOptional().openapi({ example: 'PFJAOJHFA' }),
          Sex: z.enum(['male', 'female']).exactOptional(),
          Status: z
            .enum(['validated', 'not validated'])
            .exactOptional()
            .openapi({ example: 'Person' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const PasswordResponse = {
  description: 'A list of passwords',
  content: {
    'application/json': {
      schema: z.array(
        PasswordSchema.and(
          z
            .object({ Id: z.string().exactOptional().openapi({ example: 'TJVPJAJJAFA' }) })
            .openapi({ required: [] }),
        ),
      ),
    },
  },
}

const PaySlipResponse = {
  description: 'A list of payslips of the folder employee',
  content: { 'application/json': { schema: z.array(PaySlipSchema) } },
}

const PayrollResponse = {
  description: 'A list of payrolls of the folder social',
  content: { 'application/json': { schema: z.array(PayrollSchema) } },
}

const PersonResponse = {
  description: 'A list of persons',
  content: { 'application/json': { schema: z.array(PersonSchema) } },
}

const PersonAccessResponse = {
  description: 'the access of a person to a customer contract folder',
  content: {
    'application/json': {
      schema: z.array(
        z
          .object({
            Active: z.string().exactOptional().openapi({ example: 'no' }),
            IsAdmin: z.string().exactOptional().openapi({ example: 'yes' }),
            MemberId: z.string().exactOptional().openapi({ example: 'P12345' }),
            Name: z.string().exactOptional().openapi({ example: 'Antoine Dupond' }),
            Role: z.string().exactOptional().openapi({ example: 'collaborator' }),
          })
          .openapi({ required: [] }),
      ),
    },
  },
}

const PortfoliosResponse = {
  description: 'A list of portfolios',
  content: {
    'application/json': {
      schema: z.array(
        PortfolioSchema.and(
          z
            .object({ Id: z.string().exactOptional().openapi({ example: 'P45IHFA' }) })
            .openapi({ required: [] }),
        ),
      ),
    },
  },
}

const ProfessionalVehicleResponse = {
  description: 'A list of professional Vehicles',
  content: {
    'application/json': {
      schema: z.array(
        ProfessionalVehicleSchema.and(
          z
            .object({ Id: z.string().exactOptional().openapi({ example: 'P45IHFA' }) })
            .openapi({ required: [] }),
        ),
      ),
    },
  },
}

const ProfileResponse = {
  description: 'the status of the member',
  content: {
    'application/json': {
      schema: z
        .object({
          Birth: z
            .object({
              City: z.string().exactOptional().openapi({ example: 'Créteil' }),
              Country: z.string().exactOptional().openapi({ example: 'FR' }),
              Date: z.string().exactOptional().openapi({ example: '19800101' }),
              ZipCode: z.string().exactOptional().openapi({ example: '94000' }),
            })
            .exactOptional()
            .openapi({ required: [] }),
          BirthName: z.string().exactOptional().openapi({ example: 'Dupond' }),
          FirstName: z.string().exactOptional().openapi({ example: 'Paule' }),
          IDFile: z
            .object({
              Content64Encoded: z.string().exactOptional().openapi({ example: 'PKDJFAJAFA' }),
            })
            .exactOptional()
            .openapi({ required: [] }),
          Name: z.string().exactOptional().openapi({ example: 'Durand' }),
          PrivateSpaceId: z.string().exactOptional().openapi({ example: 'PFJAOJHFA' }),
          Sex: z.enum(['male', 'female']).exactOptional(),
          Status: z
            .enum(['validated', 'not validated'])
            .exactOptional()
            .openapi({ example: 'Person' }),
        })
        .openapi({ required: [] }),
    },
    'multipart/form-data': {
      schema: z
        .object({
          Birth: z
            .object({
              City: z.string().exactOptional().openapi({ example: 'Créteil' }),
              Country: z.string().exactOptional().openapi({ example: 'France' }),
              Date: z.string().exactOptional().openapi({ example: '19800101' }),
              ZipCode: z.string().exactOptional().openapi({ example: '94000' }),
            })
            .exactOptional()
            .openapi({ required: [] }),
          BirthName: z.string().exactOptional().openapi({ example: 'Dupond' }),
          FirstName: z.string().exactOptional().openapi({ example: 'Paule' }),
          IDFile: z.file().exactOptional().openapi({ type: 'string', format: 'binary' }),
          Name: z.string().exactOptional().openapi({ example: 'Durand' }),
          PrivateSpaceId: z.string().exactOptional().openapi({ example: 'PFJAOJHFA' }),
          Sex: z.enum(['male', 'female']).exactOptional(),
          Status: z
            .enum(['validated', 'not validated'])
            .exactOptional()
            .openapi({ example: 'Person' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const ProviderResponse = {
  description: 'A list of provider folders',
  content: { 'application/json': { schema: z.array(ProviderSchema) } },
}

const RegistrationResponse = {
  description: 'the method to get the validation code or the registration link',
  content: {
    'application/json': {
      schema: z.xor([
        z
          .object({
            Message: z.string().exactOptional().openapi({ example: 'Contacter Antoine Dupond' }),
          })
          .openapi({ required: [] }),
        z
          .object({
            url: z.string().exactOptional().openapi({ example: 'https://www.google.com' }),
          })
          .openapi({ required: [] }),
      ]),
    },
  },
}

const RequiredDocumentResponse = {
  description: 'A list of required documents',
  content: {
    'application/json': {
      schema: z.array(
        z
          .object({
            Comment: z.string().exactOptional().openapi({ example: 'recto verso' }),
            Date: z.string().exactOptional().openapi({ example: '20161203' }),
            DocIds: z
              .array(z.string().openapi({ example: ['PIHFAHAF', 'PPJFAJHFHR94982'] }))
              .exactOptional(),
            Id: z.string().exactOptional().openapi({ example: 'TPKAZ9299' }),
            Name: z.string().exactOptional().openapi({ example: 'passeport' }),
            Status: z.enum(['waiting', 'validated', 'ended']).exactOptional(),
          })
          .openapi({ required: [] }),
      ),
    },
  },
}

const SearchResponse = {
  description: 'result object of search',
  content: {
    'application/json': {
      schema: z
        .object({
          Count: z
            .array(
              z
                .object({
                  Class: z
                    .enum(['Document', 'Message', 'Folder'])
                    .exactOptional()
                    .openapi({ example: 'Folder' }),
                  Count: z.int().exactOptional().openapi({ example: 3 }),
                })
                .openapi({ required: [] }),
            )
            .exactOptional(),
          Results: z
            .array(
              z
                .object({
                  Class: z
                    .enum(['Document', 'Message', 'Folder'])
                    .exactOptional()
                    .openapi({ example: 'Folder' }),
                  Extract: z
                    .object({
                      Text: z.string().exactOptional().openapi({ example: 'le dossier social' }),
                      Where: z.string().exactOptional().openapi({ example: 'Content' }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  Id: z.string().exactOptional().openapi({ example: 'P94901' }),
                  Label: z.string().exactOptional().openapi({ example: 'Document 1' }),
                  Location: z.array(z.string().openapi({ example: 'Document 1' })).exactOptional(),
                  Score: z.number().exactOptional().openapi({ example: 15.5656 }),
                  Specific: z
                    .object({ Extension: z.string().exactOptional().openapi({ example: 'pdf' }) })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .openapi({ required: [] }),
            )
            .exactOptional(),
          TotalCount: z.int().exactOptional().openapi({ example: 3 }),
        })
        .openapi({ required: [] }),
    },
  },
}

const SectionResponse = {
  description: 'A list of sections of the folder',
  content: {
    'application/json': {
      schema: z.array(
        SectionSchema.and(
          z
            .object({ Type: z.string().exactOptional().openapi({ example: 'About' }) })
            .openapi({ required: [] }),
        ),
      ),
    },
  },
}

const SessionResponse = {
  description: 'A session',
  content: { 'application/json': { schema: SessionSchema } },
}

const SocialContractResponse = {
  description: 'A list of social contracts of the folder employee',
  content: { 'application/json': { schema: z.array(SocialContractSchema) } },
}

const SocialDeclarationResponse = {
  description: 'A list of social declarations',
  content: { 'application/json': { schema: z.array(SocialDeclarationSchema) } },
}

const SocialRegimeResponse = {
  description: 'A list of social regime folders',
  content: { 'application/json': { schema: z.array(SocialRegimeSchema) } },
}

const SpaceResponse = {
  description: 'A list of Spaces',
  content: {
    'application/json': {
      schema: z.array(
        z
          .object({
            Id: z.string().exactOptional().openapi({ example: 'P12345' }),
            ModificationDate: z.string().exactOptional().openapi({ example: '20190325125042' }),
            Name: z.string().exactOptional().openapi({ example: 'Mon Entreprise' }),
            RegistrationNumber: z.string().exactOptional().openapi({ example: '123456' }),
            Type: z
              .enum(['private', 'enterprise', 'company', 'association'])
              .exactOptional()
              .openapi({ example: 'company' }),
          })
          .openapi({ required: [] }),
      ),
    },
  },
}

const SpaceMenusResponse = {
  description: 'menus tree of the hub/box',
  content: {
    'application/json': {
      schema: z
        .object({
          Menus: z
            .array(
              z
                .object({
                  Class: z.string().exactOptional().openapi({ example: 'Customer' }),
                  Id: z.string().exactOptional().openapi({ example: '/F/Piozhgzihgiahgoi' }),
                  Name: z.string().exactOptional().openapi({ example: 'My Folder' }),
                })
                .openapi({ required: [] }),
            )
            .exactOptional(),
          SpaceId: z.string().exactOptional().openapi({ example: 'PFHIAH4684' }),
          SpaceName: z.string().exactOptional().openapi({ example: 'Mon entreprise' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const SpaceMenusAllResponse = {
  description: 'menus tree of the hub',
  content: {
    'application/json': {
      schema: z
        .object({
          BusinessGroup: z
            .object({
              Id: z.string().exactOptional().openapi({ example: 'Piozhgzihgiahgoi' }),
              Name: z.string().exactOptional().openapi({ example: 'My BusinessGroup' }),
            })
            .exactOptional()
            .openapi({ required: [] }),
          Menus: z
            .array(
              z
                .object({
                  Class: z.string().exactOptional().openapi({ example: 'Customer' }),
                  Id: z.string().exactOptional().openapi({ example: '/F/Piozhgzihgiahgoi' }),
                  Name: z.string().exactOptional().openapi({ example: 'My Folder' }),
                })
                .openapi({ required: [] }),
            )
            .exactOptional(),
          SpaceId: z.string().exactOptional().openapi({ example: 'PFHIAH4684' }),
          SpaceName: z.string().exactOptional().openapi({ example: 'Mon entreprise' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const SpaceOneMenusResponse = {
  description: 'menu tree of the hub/box',
  content: {
    'application/json': {
      schema: z
        .object({
          Label: z.string().exactOptional().openapi({ example: 'Dossier banque' }),
          MenuId: z.string().exactOptional().openapi({ example: 'PFHIAH4684' }),
          Pictogram: z.string().exactOptional().openapi({ example: 'KPFJAPFJKA' }),
          SubMenus: z
            .array(
              z
                .object({
                  Label: z.string().exactOptional().openapi({ example: 'Dossier banque' }),
                  MenuId: z.string().exactOptional().openapi({ example: '/F/Piozhgzihgiahgoi' }),
                  Pictogram: z.string().exactOptional().openapi({ example: 'KPFJAPFJKA' }),
                })
                .openapi({ required: [] }),
            )
            .exactOptional(),
        })
        .openapi({ required: [] }),
    },
  },
}

const SpacesInvoicingResponse = {
  description: 'A list of csv invoicings',
  content: { 'application/json': { schema: z.array(SpacesInvoicingSchema) } },
}

const StatusResponse = {
  description: 'A list of status of',
  content: {
    'application/json': {
      schema: z.array(
        z
          .object({
            Code: z.string().exactOptional().openapi({ example: 'COD' }),
            Comment: z.string().exactOptional().openapi({ example: 'my first code' }),
            Label: z.string().exactOptional().openapi({ example: 'code 1' }),
          })
          .openapi({ required: [] }),
      ),
    },
  },
}

const SumInvoiceResponse = {
  description: 'Sum of the invoices of the folder',
  content: {
    'application/json': {
      schema: z
        .object({
          BeforeVAT: z.number().exactOptional().openapi({ example: 1229.5 }),
          InclVAT: z.number().exactOptional().openapi({ example: 1329.5 }),
          VAT: z.number().exactOptional().openapi({ example: 29.5 }),
        })
        .openapi({ required: [] }),
    },
  },
}

const TaxContractResponse = {
  description: 'A list of tax contracts',
  content: {
    'application/json': {
      schema: z.array(
        TaxContractSchema.and(
          z
            .object({ Id: z.string().exactOptional().openapi({ example: 'P45IHFA' }) })
            .openapi({ required: [] }),
        ),
      ),
    },
  },
}

const TriggersResponse = {
  description: 'A list of triggers',
  content: { 'application/json': { schema: z.array(TriggerSchema) } },
}

const VATDeclarationResponse = {
  description: 'A list of VAT declarations',
  content: { 'application/json': { schema: z.array(VATDeclarationSchema) } },
}

const AccountingYearRequestBody = {
  description: 'AccountingYear to add',
  content: {
    'application/json': {
      schema: z
        .object({
          About: z.string().exactOptional().openapi({ example: '<b> Mon premier dossier </b>' }),
          Comment: z.string().exactOptional().openapi({ example: 'ogm of the company' }),
          End: z.string().exactOptional().openapi({ example: '20181231' }),
          Home: z.boolean().exactOptional().openapi({ example: 'yes' }),
          Keywords: z
            .array(z.string())
            .exactOptional()
            .openapi({ example: ['paris', 'comptabilité'] }),
          Level: z
            .enum(['confidential', 'regular', 'public'])
            .exactOptional()
            .openapi({ example: 'confidential' }),
          NetIncome: z.number().exactOptional().openapi({ example: 52634.36 }),
          NetPosition: z.number().exactOptional().openapi({ example: 14580.36 }),
          Start: z.string().exactOptional().openapi({ example: '20180101' }),
          Tax: z.number().exactOptional().openapi({ example: 45698.36 }),
          TaxableIncome: z.number().exactOptional().openapi({ example: 869523.36 }),
          Turnover: z.number().exactOptional().openapi({ example: 1025.36 }),
        })
        .openapi({ required: [] })
        .openapi({ required: ['End'] }),
    },
  },
  required: true,
}

const BSpaceRequestBody = {
  description: 'Space to add (except private)',
  content: {
    'application/json': {
      schema: z
        .object({
          Logo: z
            .object({
              Content64Encoded: z.string().exactOptional().openapi({ example: 'NIFHAZFA07GA=' }),
              Name: z.string().exactOptional().openapi({ example: 'toto.png' }),
            })
            .exactOptional()
            .openapi({ required: [] }),
          Name: z.string().exactOptional().openapi({ example: 'Mon Entreprise' }),
          TemplateSpaceId: z.string().exactOptional().openapi({ example: 'PKOJOFOFKAOKF' }),
          Type: z
            .enum(['enterprise', 'company', 'association'])
            .exactOptional()
            .openapi({ example: 'company' }),
        })
        .openapi({ required: [] })
        .openapi({ required: ['Type'] }),
    },
  },
  required: true,
}

const BankRequestBody = {
  description: 'Bank to add (except name, class and archivaldate)',
  content: {
    'application/json': {
      schema: z
        .object({
          About: z.string().exactOptional().openapi({ example: '<b> Mon premier dossier </b>' }),
          Comment: z.string().exactOptional().openapi({ example: 'pieces company' }),
          ContractReference: z.string().exactOptional().openapi({ example: '13587449420F' }),
          Designation: z.string().exactOptional().openapi({ example: 'client pièces détachées' }),
          End: z.string().exactOptional().openapi({ example: '20190101' }),
          Home: z.boolean().exactOptional().openapi({ example: 'yes' }),
          Keywords: z
            .array(z.string())
            .exactOptional()
            .openapi({ example: ['paris', 'comptabilité'] }),
          Level: z
            .enum(['confidential', 'regular', 'public'])
            .exactOptional()
            .openapi({ example: 'confidential' }),
          Start: z.string().exactOptional().openapi({ example: '20180630' }),
        })
        .openapi({ required: [] }),
    },
  },
  required: true,
}

const BankStatementRequestBody = {
  description:
    'Bank statement to add (either DocumentId,StatementDate either (File,Name,Content64Encoded,Title,StatementDate) is mandatory)',
  content: {
    'application/json': {
      schema: z
        .xor([
          z
            .object({
              Balance: z.number().exactOptional().openapi({ example: 1352.63 }),
              DocumentId: z.string().exactOptional().openapi({ example: 'PBUFBAUBF1531' }),
              Number: z.number().exactOptional().openapi({ example: '10015848' }),
              StatementDate: z.string().exactOptional().openapi({ example: '20160801' }),
            })
            .openapi({ required: [] }),
          z
            .object({
              Accounting: z
                .object({
                  AccountedOn: z.string().exactOptional().openapi({ example: '20181202' }),
                  Workbook: z
                    .enum([
                      'customer',
                      'provider',
                      'bank',
                      'cashWoucher',
                      'fiscal',
                      'insurance',
                      'social',
                      'other',
                      'permanent',
                    ])
                    .exactOptional()
                    .openapi({ example: 'fiscal' }),
                  YearMonth: z.string().exactOptional().openapi({ example: 201902 }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              Author: z.string().exactOptional().openapi({ example: 'Antoine Dupond' }),
              Balance: z.number().exactOptional().openapi({ example: 1352.63 }),
              Code: z.string().exactOptional().openapi({ example: 'COD' }),
              Comment: z.string().exactOptional().openapi({ example: 'my document' }),
              Date: z.string().exactOptional().openapi({ example: '20161203' }),
              File: z
                .object({
                  Content64Encoded: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'gjgjJ9FJA829H9HA18B' }),
                  Name: z.string().exactOptional().openapi({ example: 'MonDocument.pdf' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              Number: z.number().exactOptional().openapi({ example: '10015848' }),
              StatementDate: z.string().exactOptional().openapi({ example: '20160801' }),
              Title: z.string().exactOptional().openapi({ example: 'Facture décembre' }),
            })
            .openapi({ required: [] }),
        ])
        .openapi({
          required: ['Title', 'File', 'Name', 'Content64Encoded', 'DocumentId', 'StatementDate'],
        }),
    },
    'multipart/form-data': {
      schema: z
        .object({
          Accounting: z
            .object({
              AccountedOn: z.string().exactOptional().openapi({ example: '20181202' }),
              Workbook: z
                .enum([
                  'customer',
                  'provider',
                  'bank',
                  'cashWoucher',
                  'fiscal',
                  'insurance',
                  'social',
                  'other',
                  'permanent',
                ])
                .exactOptional()
                .openapi({ example: 'fiscal' }),
              YearMonth: z.string().exactOptional().openapi({ example: 201902 }),
            })
            .exactOptional()
            .openapi({ required: [] }),
          Author: z.string().exactOptional().openapi({ example: 'Antoine Dupond' }),
          Balance: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.number(),
            )
            .exactOptional()
            .openapi({ example: 1352.63 }),
          Code: z.string().exactOptional().openapi({ example: 'COD' }),
          Comment: z.string().exactOptional().openapi({ example: 'my document' }),
          Date: z.string().exactOptional().openapi({ example: '20161203' }),
          File: z.file().exactOptional().openapi({ type: 'string', format: 'binary' }),
          Number: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.number(),
            )
            .exactOptional()
            .openapi({ example: '10015848' }),
          StatementDate: z.string().exactOptional().openapi({ example: '20160801' }),
          Title: z.string().exactOptional().openapi({ example: 'Facture décembre' }),
        })
        .openapi({ required: [] })
        .openapi({ required: ['Title', 'File', 'Name', 'StatementDate'] }),
    },
  },
  required: true,
}

const BusinessGroupRequestBody = {
  description: 'BusinessGroup to add',
  content: {
    'application/json': {
      schema: z
        .object({ Name: z.string().exactOptional().openapi({ example: 'Client Durand' }) })
        .openapi({ required: [] })
        .openapi({ required: ['Name'] }),
    },
  },
  required: true,
}

const CollectiveDecisionRequestBody = {
  description: 'CollectiveDecision to add',
  content: {
    'application/json': {
      schema: z
        .object({
          About: z.string().exactOptional().openapi({ example: '<b> Mon premier dossier </b>' }),
          Comment: z.string().exactOptional().openapi({ example: 'ogm of the company' }),
          Date: z.string().exactOptional().openapi({ example: '20180202' }),
          DividendDistributions: z.number().exactOptional().openapi({ example: 1025.36 }),
          DividendDistributionsDate: z.string().exactOptional().openapi({ example: '20180203' }),
          Event: z
            .enum([
              'EGM',
              'CGM',
              'OGM',
              'ConstituentAssembly',
              'SolePartner',
              'OtherEvent',
              'Other',
              'Office',
              'ExecutiveCommittee',
              'Consulting',
              'Board',
              'PartnersMeeting',
            ])
            .exactOptional()
            .openapi({
              description:
                "for space type 'company' enums allowed are  'EGM','CGM','OGM','ConstituentAssembly','SolePartner','OtherEvent','Office','ExecutiveCommittee','Consulting','Board','PartnersMeeting' and for space type 'association' enums allowed are 'EGM','CGM','OGM','Other','Office','ExecutiveCommittee'",
              example: 'EGM',
            }),
          Home: z.boolean().exactOptional().openapi({ example: 'yes' }),
          Keywords: z
            .array(z.string())
            .exactOptional()
            .openapi({ example: ['paris', 'comptabilité'] }),
          Level: z
            .enum(['confidential', 'regular', 'public'])
            .exactOptional()
            .openapi({ example: 'confidential' }),
        })
        .openapi({ required: [] })
        .openapi({ required: ['Event', 'Date'] }),
    },
  },
  required: true,
}

const CommonFolderRequestBody = {
  description: 'Common Folder to add',
  content: {
    'application/json': {
      schema: z
        .object({
          About: z.string().exactOptional().openapi({ example: '<b> Mon premier dossier </b>' }),
          ArchivalDate: z.string().exactOptional().openapi({ example: '20160203' }),
          Home: z.boolean().exactOptional().openapi({ example: 'yes' }),
          Keywords: z
            .array(z.string())
            .exactOptional()
            .openapi({ example: ['paris', 'comptabilité'] }),
          Level: z
            .enum(['confidential', 'regular', 'public'])
            .exactOptional()
            .openapi({ example: 'confidential' }),
          Name: z.string().exactOptional().openapi({ example: 'Dupond' }),
          Rights: z.boolean().exactOptional().openapi({ example: true }),
        })
        .openapi({ required: [] })
        .openapi({ required: ['Name'] }),
    },
  },
  required: true,
}

const CompanyEntityRequestBody = {
  description: 'Company to add Name or LegalName are mandatory',
  content: {
    'application/json': {
      schema: z
        .object({
          ApeCode: z.string().exactOptional().openapi({ example: '420F' }),
          ArchivalDate: z.string().exactOptional().openapi({ example: '20160203' }),
          Comment: z.string().exactOptional().openapi({ example: 'my brother' }),
          LegalName: z.string().exactOptional().openapi({ example: 'Mon entreprise Dupond' }),
          LegalStatut: z.string().exactOptional().openapi({ example: 'SAS' }),
          Name: z.string().exactOptional().openapi({ example: 'Dupond' }),
          RegistrationNumber: z.string().exactOptional().openapi({ example: '236542158' }),
          Type: z.string().exactOptional().openapi({ example: 'EPT' }),
          VatNumber: z.string().exactOptional().openapi({ example: '46546847864' }),
        })
        .openapi({ required: [] })
        .openapi({ required: ['Name', 'LegalName'] }),
    },
  },
  required: true,
}

const ContractualDocumentRequestBody = {
  description:
    'Document to add (either DocumentId either (File,Name,Content64Encoded,Title) is mandatory)',
  content: {
    'application/json': {
      schema: z
        .xor([
          z
            .object({
              Amount: z.string().exactOptional().openapi({ example: '1001.36' }),
              Designation: z.string().exactOptional().openapi({ example: 'contrat client' }),
              DocumentId: z.string().exactOptional().openapi({ example: 'PBUFBAUBF1531' }),
              Reference: z.string().exactOptional().openapi({ example: '151465AFHIA' }),
              StartDate: z.string().exactOptional().openapi({ example: '20181128' }),
              Type: z
                .enum([
                  'contract',
                  'engagement-letter',
                  'amendment',
                  'purchase-order',
                  'delivery-order',
                  'quotation',
                  'other',
                ])
                .exactOptional()
                .openapi({ example: 'quotation' }),
            })
            .openapi({ required: [] }),
          z
            .object({
              Accounting: z
                .object({
                  AccountedOn: z.string().exactOptional().openapi({ example: '20181202' }),
                  Workbook: z
                    .enum([
                      'customer',
                      'provider',
                      'bank',
                      'cashWoucher',
                      'fiscal',
                      'insurance',
                      'social',
                      'other',
                      'permanent',
                    ])
                    .exactOptional()
                    .openapi({ example: 'fiscal' }),
                  YearMonth: z.string().exactOptional().openapi({ example: 201902 }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              Amount: z.string().exactOptional().openapi({ example: '1001.36' }),
              Author: z.string().exactOptional().openapi({ example: 'Antoine Dupond' }),
              Code: z.string().exactOptional().openapi({ example: 'COD' }),
              Comment: z.string().exactOptional().openapi({ example: 'my document' }),
              Date: z.string().exactOptional().openapi({ example: '20161203' }),
              Designation: z.string().exactOptional().openapi({ example: 'contrat client' }),
              File: z
                .object({
                  Content64Encoded: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'gjgjJ9FJA829H9HA18B' }),
                  Name: z.string().exactOptional().openapi({ example: 'MonDocument.pdf' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              Reference: z.string().exactOptional().openapi({ example: '151465AFHIA' }),
              StartDate: z.string().exactOptional().openapi({ example: '20181128' }),
              Title: z.string().exactOptional().openapi({ example: 'Facture décembre' }),
              Type: z
                .enum([
                  'contract',
                  'engagement-letter',
                  'amendment',
                  'purchase-order',
                  'delivery-order',
                  'quotation',
                  'other',
                ])
                .exactOptional()
                .openapi({ example: 'quotation' }),
            })
            .openapi({ required: [] }),
        ])
        .openapi({ required: ['Title', 'File', 'Name', 'Content64Encoded', 'DocumentId'] }),
    },
    'multipart/form-data': {
      schema: z
        .object({
          Accounting: z
            .object({
              AccountedOn: z.string().exactOptional().openapi({ example: '20181202' }),
              Workbook: z
                .enum([
                  'customer',
                  'provider',
                  'bank',
                  'cashWoucher',
                  'fiscal',
                  'insurance',
                  'social',
                  'other',
                  'permanent',
                ])
                .exactOptional()
                .openapi({ example: 'fiscal' }),
              YearMonth: z.string().exactOptional().openapi({ example: 201902 }),
            })
            .exactOptional()
            .openapi({ required: [] }),
          Amount: z.string().exactOptional().openapi({ example: '1001.36' }),
          Author: z.string().exactOptional().openapi({ example: 'Antoine Dupond' }),
          Code: z.string().exactOptional().openapi({ example: 'COD' }),
          Comment: z.string().exactOptional().openapi({ example: 'my document' }),
          Date: z.string().exactOptional().openapi({ example: '20161203' }),
          Designation: z.string().exactOptional().openapi({ example: 'contrat client' }),
          File: z.file().exactOptional().openapi({ type: 'string', format: 'binary' }),
          Reference: z.string().exactOptional().openapi({ example: '151465AFHIA' }),
          StartDate: z.string().exactOptional().openapi({ example: '20181128' }),
          Title: z.string().exactOptional().openapi({ example: 'Facture décembre' }),
          Type: z
            .enum([
              'contract',
              'engagement-letter',
              'amendment',
              'purchase-order',
              'delivery-order',
              'quotation',
              'other',
            ])
            .exactOptional()
            .openapi({ example: 'quotation' }),
        })
        .openapi({ required: [] })
        .openapi({ required: ['Title', 'File', 'Name'] }),
    },
  },
  required: true,
}

const CorporateTaxDeclarationRequestBody = {
  description:
    'Corporate tax declaration to add (either (DeclarationDate,DocumentId) either (File,Name,Content64Encoded,Title,DeclarationDate) is mandatory)',
  content: {
    'application/json': {
      schema: z
        .xor([
          z
            .object({
              Amount: z.float32().exactOptional().openapi({ example: 132.63 }),
              DeclarationDate: z.string().exactOptional().openapi({ example: '20160801' }),
              DocumentId: z.string().exactOptional().openapi({ example: 'PBUFBAUBF1531' }),
              Order: z
                .enum([
                  '1st advance',
                  '2nd advance',
                  '3rd advance',
                  '4th advance',
                  'regularization',
                ])
                .exactOptional()
                .openapi({ example: '1st advance' }),
              Rate: z.float32().exactOptional().openapi({ example: 10.63 }),
              TaxBase: z.float32().exactOptional().openapi({ example: 123.36 }),
            })
            .openapi({ required: [] }),
          z
            .object({
              Accounting: z
                .object({
                  AccountedOn: z.string().exactOptional().openapi({ example: '20181202' }),
                  Workbook: z
                    .enum([
                      'customer',
                      'provider',
                      'bank',
                      'cashWoucher',
                      'fiscal',
                      'insurance',
                      'social',
                      'other',
                      'permanent',
                    ])
                    .exactOptional()
                    .openapi({ example: 'fiscal' }),
                  YearMonth: z.string().exactOptional().openapi({ example: 201902 }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              Amount: z.float32().exactOptional().openapi({ example: 132.63 }),
              Author: z.string().exactOptional().openapi({ example: 'Antoine Dupond' }),
              Code: z.string().exactOptional().openapi({ example: 'COD' }),
              Comment: z.string().exactOptional().openapi({ example: 'my document' }),
              Date: z.string().exactOptional().openapi({ example: '20161203' }),
              DeclarationDate: z.string().exactOptional().openapi({ example: '20160801' }),
              File: z
                .object({
                  Content64Encoded: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'gjgjJ9FJA829H9HA18B' }),
                  Name: z.string().exactOptional().openapi({ example: 'MonDocument.pdf' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              Order: z
                .enum([
                  '1st advance',
                  '2nd advance',
                  '3rd advance',
                  '4th advance',
                  'regularization',
                ])
                .exactOptional()
                .openapi({ example: '1st advance' }),
              Rate: z.float32().exactOptional().openapi({ example: 10.63 }),
              TaxBase: z.float32().exactOptional().openapi({ example: 123.36 }),
              Title: z.string().exactOptional().openapi({ example: 'Facture décembre' }),
            })
            .openapi({ required: [] }),
        ])
        .openapi({ required: ['Title', 'File', 'Name', 'Content64Encoded', 'DocumentId'] }),
    },
    'multipart/form-data': {
      schema: z
        .object({
          Accounting: z
            .object({
              AccountedOn: z.string().exactOptional().openapi({ example: '20181202' }),
              Workbook: z
                .enum([
                  'customer',
                  'provider',
                  'bank',
                  'cashWoucher',
                  'fiscal',
                  'insurance',
                  'social',
                  'other',
                  'permanent',
                ])
                .exactOptional()
                .openapi({ example: 'fiscal' }),
              YearMonth: z.string().exactOptional().openapi({ example: 201902 }),
            })
            .exactOptional()
            .openapi({ required: [] }),
          Amount: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.float32(),
            )
            .exactOptional()
            .openapi({ example: 132.63 }),
          Author: z.string().exactOptional().openapi({ example: 'Antoine Dupond' }),
          Code: z.string().exactOptional().openapi({ example: 'COD' }),
          Comment: z.string().exactOptional().openapi({ example: 'my document' }),
          Date: z.string().exactOptional().openapi({ example: '20161203' }),
          DeclarationDate: z.string().exactOptional().openapi({ example: '20160801' }),
          File: z.file().exactOptional().openapi({ type: 'string', format: 'binary' }),
          Order: z
            .enum(['1st advance', '2nd advance', '3rd advance', '4th advance', 'regularization'])
            .exactOptional()
            .openapi({ example: '1st advance' }),
          Rate: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.float32(),
            )
            .exactOptional()
            .openapi({ example: 10.63 }),
          TaxBase: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.float32(),
            )
            .exactOptional()
            .openapi({ example: 123.36 }),
          Title: z.string().exactOptional().openapi({ example: 'Facture décembre' }),
        })
        .openapi({ required: [] })
        .openapi({ required: ['Title', 'File', 'Name'] }),
    },
  },
  required: true,
}

const CreateInvitationRequestBody = {
  description: 'Invitation to create',
  content: {
    'application/json': {
      schema: z
        .object({
          ClientManagement: z.enum(['no', 'manager', 'adn']).exactOptional(),
          EmployeeAccess: z.boolean().exactOptional().openapi({ example: true }),
          Folders: z
            .array(
              z
                .object({
                  Id: z.string().exactOptional().openapi({ example: 'PK8481482' }),
                  Right: z.enum(['read', 'write']).exactOptional().openapi({ example: 'read' }),
                })
                .openapi({ required: [] }),
            )
            .exactOptional(),
          GroupIds: z
            .array(z.string().openapi({ example: ['PJFIA84', 'PHAJHFJHA'] }))
            .exactOptional(),
          IsAdmin: z.boolean().exactOptional().openapi({ example: true }),
          Player: z
            .enum(['guest', 'owner', 'manager', 'assistant', 'collaborator'])
            .exactOptional()
            .openapi({ example: 'guest' }),
          PlayerEnd: z.string().exactOptional().openapi({ example: '20190601' }),
        })
        .openapi({ required: [] }),
    },
  },
  required: true,
}

const CustomerRequestBody = {
  description: 'Customer to add (except name, class and archivaldate)',
  content: {
    'application/json': {
      schema: z
        .object({
          About: z.string().exactOptional().openapi({ example: '<b> Mon premier dossier </b>' }),
          Comment: z.string().exactOptional().openapi({ example: 'pieces company' }),
          CustomerNumber: z.string().exactOptional().openapi({ example: '13587449420F' }),
          Designation: z.string().exactOptional().openapi({ example: 'client pièces détachées' }),
          End: z.string().exactOptional().openapi({ example: '20190101' }),
          Home: z.boolean().exactOptional().openapi({ example: 'yes' }),
          Keywords: z
            .array(z.string())
            .exactOptional()
            .openapi({ example: ['paris', 'comptabilité'] }),
          Level: z
            .enum(['confidential', 'regular', 'public'])
            .exactOptional()
            .openapi({ example: 'confidential' }),
          PortfolioId: z.string().exactOptional().openapi({ example: 'T1OJFOAZ7449420F' }),
          Start: z.string().exactOptional().openapi({ example: '20180630' }),
        })
        .openapi({ required: [] }),
    },
  },
  required: true,
}

const DetailsRequestBody = {
  description: 'Contact details to add or replace (Designation and Phone or Mail are mandatory)',
  content: {
    'application/json': {
      schema: z
        .object({
          Address: z
            .object({
              City: z.string().exactOptional().openapi({ example: 'Paris' }),
              Complement: z.string().exactOptional().openapi({ example: 'batiment A' }),
              Country: z.string().exactOptional().openapi({ example: 'France' }),
              Street: z.string().exactOptional().openapi({ example: '2, rue du chateau' }),
              ZipCode: z.string().exactOptional().openapi({ example: '75001' }),
            })
            .exactOptional()
            .openapi({ required: [] }),
          Designation: z.string().exactOptional().openapi({ example: 'Office' }),
          Email: z.array(z.string().openapi({ example: ['bertrand@monmail.com'] })).exactOptional(),
          Phone: z.array(z.string().openapi({ example: ['+33606060606'] })).exactOptional(),
        })
        .openapi({ required: [] })
        .openapi({ required: ['Designation'] }),
    },
  },
  required: true,
}

const DocumentRequestBody = {
  description:
    'Document to add (either DocumentId either (File,Name,Content64Encoded,Title) is mandatory)',
  content: {
    'application/json': {
      schema: z
        .xor([
          z
            .object({
              DocumentId: z.string().exactOptional().openapi({ example: 'PBUFBAUBF1531' }),
            })
            .openapi({ required: [] }),
          z
            .object({
              Accounting: z
                .object({
                  AccountedOn: z.string().exactOptional().openapi({ example: '20181202' }),
                  Workbook: z
                    .enum([
                      'customer',
                      'provider',
                      'bank',
                      'cashWoucher',
                      'fiscal',
                      'insurance',
                      'social',
                      'other',
                      'permanent',
                    ])
                    .exactOptional()
                    .openapi({ example: 'fiscal' }),
                  YearMonth: z.string().exactOptional().openapi({ example: 201902 }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              Author: z.string().exactOptional().openapi({ example: 'Antoine Dupond' }),
              Code: z.string().exactOptional().openapi({ example: 'COD' }),
              Comment: z.string().exactOptional().openapi({ example: 'my document' }),
              Date: z.string().exactOptional().openapi({ example: '20161203' }),
              File: z
                .object({
                  Content64Encoded: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'gjgjJ9FJA829H9HA18B' }),
                  Name: z.string().exactOptional().openapi({ example: 'MonDocument.pdf' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              Title: z.string().exactOptional().openapi({ example: 'Facture décembre' }),
            })
            .openapi({ required: [] }),
        ])
        .openapi({ required: ['Title', 'File', 'Name', 'Content64Encoded'] }),
    },
    'multipart/form-data': {
      schema: z
        .object({
          Accounting: z
            .object({
              AccountedOn: z.string().exactOptional().openapi({ example: '20181202' }),
              Workbook: z
                .enum([
                  'customer',
                  'provider',
                  'bank',
                  'cashWoucher',
                  'fiscal',
                  'insurance',
                  'social',
                  'other',
                  'permanent',
                ])
                .exactOptional()
                .openapi({ example: 'fiscal' }),
              YearMonth: z.string().exactOptional().openapi({ example: 201902 }),
            })
            .exactOptional()
            .openapi({ required: [] }),
          Author: z.string().exactOptional().openapi({ example: 'Antoine Dupond' }),
          Code: z.string().exactOptional().openapi({ example: 'COD' }),
          Comment: z.string().exactOptional().openapi({ example: 'my document' }),
          Date: z.string().exactOptional().openapi({ example: '20161203' }),
          File: z.file().exactOptional().openapi({ type: 'string', format: 'binary' }),
          Title: z.string().exactOptional().openapi({ example: 'Facture décembre' }),
        })
        .openapi({ required: [] })
        .openapi({ required: ['Title', 'File', 'Name'] }),
    },
  },
  required: true,
}

const DocumentsRequestBody = {
  description: 'Document to add',
  content: {
    'application/json': {
      schema: z
        .object({
          Accounting: z
            .object({
              AccountedOn: z.string().exactOptional().openapi({ example: '20181202' }),
              Workbook: z
                .enum([
                  'customer',
                  'provider',
                  'bank',
                  'cashWoucher',
                  'fiscal',
                  'insurance',
                  'social',
                  'other',
                  'permanent',
                ])
                .exactOptional()
                .openapi({ example: 'fiscal' }),
              YearMonth: z.string().exactOptional().openapi({ example: 201902 }),
            })
            .exactOptional()
            .openapi({ required: [] }),
          Author: z.string().exactOptional().openapi({ example: 'Antoine Dupond' }),
          Code: z.string().exactOptional().openapi({ example: 'COD' }),
          Comment: z.string().exactOptional().openapi({ example: 'my document' }),
          Date: z.string().exactOptional().openapi({ example: '20161203' }),
          File: z
            .object({
              Content64Encoded: z
                .string()
                .exactOptional()
                .openapi({ example: 'gjgjJ9FJA829H9HA18B' }),
              Name: z.string().exactOptional().openapi({ example: 'Mon Document' }),
            })
            .openapi({ required: [] }),
          Title: z.string().openapi({ example: 'Facture décembre' }),
        })
        .openapi({ required: ['Title', 'File'] }),
    },
    'multipart/form-data': {
      schema: z
        .object({
          Accounting: z
            .object({
              AccountedOn: z.string().exactOptional().openapi({ example: '20181202' }),
              Workbook: z
                .enum([
                  'customer',
                  'provider',
                  'bank',
                  'cashWoucher',
                  'fiscal',
                  'insurance',
                  'social',
                  'other',
                  'permanent',
                ])
                .exactOptional()
                .openapi({ example: 'fiscal' }),
              YearMonth: z.string().exactOptional().openapi({ example: 201902 }),
            })
            .exactOptional()
            .openapi({ required: [] }),
          Author: z.string().exactOptional().openapi({ example: 'Antoine Dupond' }),
          Code: z.string().exactOptional().openapi({ example: 'COD' }),
          Comment: z.string().exactOptional().openapi({ example: 'my document' }),
          Date: z.string().exactOptional().openapi({ example: '20161203' }),
          File: z.file().openapi({ type: 'string', format: 'binary' }),
          Title: z.string().openapi({ example: 'Facture décembre' }),
        })
        .openapi({ required: ['Title', 'File'] }),
    },
  },
  required: true,
}

const EmployeeRequestBody = {
  description: 'Employee to add (except name, class and archivaldate)',
  content: {
    'application/json': {
      schema: z
        .object({
          About: z.string().exactOptional().openapi({ example: '<b> Mon premier dossier </b>' }),
          Comment: z.string().exactOptional().openapi({ example: 'pieces company' }),
          ContractType: z.string().exactOptional().openapi({ example: '01' }),
          EmployeeNumber: z.string().exactOptional().openapi({ example: '13587FAZCD420F' }),
          End: z.string().exactOptional().openapi({ example: '20190101' }),
          Function: z.string().exactOptional().openapi({ example: 'commercial' }),
          Home: z.boolean().exactOptional().openapi({ example: 'yes' }),
          Keywords: z
            .array(z.string())
            .exactOptional()
            .openapi({ example: ['paris', 'comptabilité'] }),
          Level: z
            .enum(['confidential', 'regular', 'public'])
            .exactOptional()
            .openapi({ example: 'confidential' }),
          PostalMail: z.boolean().exactOptional().openapi({ example: true }),
          SSNumber: z.string().exactOptional().openapi({ example: '1542012365985215' }),
          Start: z.string().exactOptional().openapi({ example: '20180630' }),
        })
        .openapi({ required: [] }),
    },
  },
  required: true,
}

const ExpenseProofRequestBody = {
  description:
    'Expense proof to add (either DocumentId, ExpenseDate either (File,Name,Content64Encoded,Title,ExpenseDate) is mandatory)',
  content: {
    'application/json': {
      schema: z
        .xor([
          z
            .object({
              Account: z
                .enum(['CAB', 'IKM', 'PRK', 'TXI', 'VOY', 'PTT', 'FHR', 'DIV', 'RES'])
                .exactOptional()
                .openapi({ example: 'CAB' }),
              ArchivalDate: z.string().exactOptional().openapi({ example: 20211231 }),
              BeforeVAT: z.number().exactOptional().openapi({ example: 1000 }),
              DocumentId: z.string().exactOptional().openapi({ example: 'PBUFBAUBF1531' }),
              ExpenseDate: z.string().exactOptional().openapi({ example: '20200202' }),
              ExpenseReportId: z.string().exactOptional().openapi({ example: 'PFOIAHF874984' }),
              Provider: z.string().exactOptional().openapi({ example: 'G7' }),
              Reason: z.string().exactOptional().openapi({ example: 'taxi' }),
              Status: z.enum(['R', 'V', 'W']).exactOptional().openapi({ example: 'R' }),
              VAT: z.number().exactOptional().openapi({ example: 19.5 }),
            })
            .openapi({ required: [] }),
          z
            .object({
              Account: z
                .enum(['CAB', 'IKM', 'PRK', 'TXI', 'VOY', 'PTT', 'FHR', 'DIV', 'RES'])
                .exactOptional()
                .openapi({ example: 'CAB' }),
              Accounting: z
                .object({
                  AccountedOn: z.string().exactOptional().openapi({ example: '20181202' }),
                  Workbook: z
                    .enum([
                      'customer',
                      'provider',
                      'bank',
                      'cashWoucher',
                      'fiscal',
                      'insurance',
                      'social',
                      'other',
                      'permanent',
                    ])
                    .exactOptional()
                    .openapi({ example: 'fiscal' }),
                  YearMonth: z.string().exactOptional().openapi({ example: 201902 }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              ArchivalDate: z.string().exactOptional().openapi({ example: 20211231 }),
              Author: z.string().exactOptional().openapi({ example: 'Antoine Dupond' }),
              BeforeVAT: z.number().exactOptional().openapi({ example: 1000 }),
              Code: z.string().exactOptional().openapi({ example: 'COD' }),
              Comment: z.string().exactOptional().openapi({ example: 'my document' }),
              Date: z.string().exactOptional().openapi({ example: '20161203' }),
              ExpenseDate: z.string().exactOptional().openapi({ example: '20200202' }),
              ExpenseReportId: z.string().exactOptional().openapi({ example: 'PFOIAHF874984' }),
              File: z
                .object({
                  Content64Encoded: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'gjgjJ9FJA829H9HA18B' }),
                  Name: z.string().exactOptional().openapi({ example: 'MonDocument.pdf' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              Provider: z.string().exactOptional().openapi({ example: 'G7' }),
              Reason: z.string().exactOptional().openapi({ example: 'taxi' }),
              Status: z.enum(['R', 'V', 'W']).exactOptional().openapi({ example: 'R' }),
              Title: z.string().exactOptional().openapi({ example: 'Facture décembre' }),
              VAT: z.number().exactOptional().openapi({ example: 19.5 }),
            })
            .openapi({ required: [] }),
        ])
        .openapi({ required: ['Title', 'File', 'Name', 'Content64Encoded', 'DocumentId'] }),
    },
    'multipart/form-data': {
      schema: z
        .object({
          Account: z
            .enum(['CAB', 'IKM', 'PRK', 'TXI', 'VOY', 'PTT', 'FHR', 'DIV', 'RES'])
            .exactOptional()
            .openapi({ example: 'CAB' }),
          Accounting: z
            .object({
              AccountedOn: z.string().exactOptional().openapi({ example: '20181202' }),
              Workbook: z
                .enum([
                  'customer',
                  'provider',
                  'bank',
                  'cashWoucher',
                  'fiscal',
                  'insurance',
                  'social',
                  'other',
                  'permanent',
                ])
                .exactOptional()
                .openapi({ example: 'fiscal' }),
              YearMonth: z.string().exactOptional().openapi({ example: 201902 }),
            })
            .exactOptional()
            .openapi({ required: [] }),
          ArchivalDate: z.string().exactOptional().openapi({ example: 20211231 }),
          Author: z.string().exactOptional().openapi({ example: 'Antoine Dupond' }),
          BeforeVAT: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.number(),
            )
            .exactOptional()
            .openapi({ example: 1000 }),
          Code: z.string().exactOptional().openapi({ example: 'COD' }),
          Comment: z.string().exactOptional().openapi({ example: 'my document' }),
          Date: z.string().exactOptional().openapi({ example: '20161203' }),
          ExpenseDate: z.string().exactOptional().openapi({ example: '20200202' }),
          ExpenseReportId: z.string().exactOptional().openapi({ example: 'PFOIAHF874984' }),
          File: z.file().exactOptional().openapi({ type: 'string', format: 'binary' }),
          Provider: z.string().exactOptional().openapi({ example: 'G7' }),
          Reason: z.string().exactOptional().openapi({ example: 'taxi' }),
          Status: z.enum(['R', 'V', 'W']).exactOptional().openapi({ example: 'R' }),
          Title: z.string().exactOptional().openapi({ example: 'Facture décembre' }),
          VAT: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.number(),
            )
            .exactOptional()
            .openapi({ example: 19.5 }),
        })
        .openapi({ required: [] })
        .openapi({ required: ['Title', 'File', 'Name'] }),
    },
  },
  required: true,
}

const ExpenseReportRequestBody = {
  description:
    'expense proof to add (either DocumentId, ExpenseDate either (File,Name,Content64Encoded,Title,ExpenseDate) is mandatory)',
  content: {
    'application/json': {
      schema: z
        .xor([
          z
            .object({
              BeforeVAT: z.number().exactOptional().openapi({ example: 1000 }),
              Date: z.string().exactOptional().openapi({ example: '20161203' }),
              DocumentId: z.string().exactOptional().openapi({ example: 'PBUFBAUBF1531' }),
              ExpenseDate: z.string().exactOptional().openapi({ example: '20200202' }),
              InclVAT: z.number().exactOptional().openapi({ example: 1200 }),
              ProcessingDate: z.string().exactOptional().openapi({ example: '20200203' }),
              VAT: z.number().exactOptional().openapi({ example: 19.5 }),
            })
            .openapi({ required: [] }),
          z
            .object({
              Accounting: z
                .object({
                  AccountedOn: z.string().exactOptional().openapi({ example: '20181202' }),
                  Workbook: z
                    .enum([
                      'customer',
                      'provider',
                      'bank',
                      'cashWoucher',
                      'fiscal',
                      'insurance',
                      'social',
                      'other',
                      'permanent',
                    ])
                    .exactOptional()
                    .openapi({ example: 'fiscal' }),
                  YearMonth: z.string().exactOptional().openapi({ example: 201902 }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              Author: z.string().exactOptional().openapi({ example: 'Antoine Dupond' }),
              BeforeVAT: z.number().exactOptional().openapi({ example: 1000 }),
              Code: z.string().exactOptional().openapi({ example: 'COD' }),
              Comment: z.string().exactOptional().openapi({ example: 'my document' }),
              Date: z.string().exactOptional().openapi({ example: '20161203' }),
              ExpenseDate: z.string().exactOptional().openapi({ example: '20200202' }),
              File: z
                .object({
                  Content64Encoded: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'gjgjJ9FJA829H9HA18B' }),
                  Name: z.string().exactOptional().openapi({ example: 'MonDocument.pdf' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              InclVAT: z.number().exactOptional().openapi({ example: 1200 }),
              ProcessingDate: z.string().exactOptional().openapi({ example: '20200203' }),
              Title: z.string().exactOptional().openapi({ example: 'Facture décembre' }),
              VAT: z.number().exactOptional().openapi({ example: 19.5 }),
            })
            .openapi({ required: [] }),
        ])
        .openapi({ required: ['Title', 'File', 'Name', 'Content64Encoded', 'DocumentId'] }),
    },
    'multipart/form-data': {
      schema: z
        .object({
          Accounting: z
            .object({
              AccountedOn: z.string().exactOptional().openapi({ example: '20181202' }),
              Workbook: z
                .enum([
                  'customer',
                  'provider',
                  'bank',
                  'cashWoucher',
                  'fiscal',
                  'insurance',
                  'social',
                  'other',
                  'permanent',
                ])
                .exactOptional()
                .openapi({ example: 'fiscal' }),
              YearMonth: z.string().exactOptional().openapi({ example: 201902 }),
            })
            .exactOptional()
            .openapi({ required: [] }),
          Author: z.string().exactOptional().openapi({ example: 'Antoine Dupond' }),
          BeforeVAT: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.number(),
            )
            .exactOptional()
            .openapi({ example: 1000 }),
          Code: z.string().exactOptional().openapi({ example: 'COD' }),
          Comment: z.string().exactOptional().openapi({ example: 'my document' }),
          Date: z.string().exactOptional().openapi({ example: '20161203' }),
          ExpenseDate: z.string().exactOptional().openapi({ example: '20200202' }),
          File: z.file().exactOptional().openapi({ type: 'string', format: 'binary' }),
          InclVAT: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.number(),
            )
            .exactOptional()
            .openapi({ example: 1200 }),
          ProcessingDate: z.string().exactOptional().openapi({ example: '20200203' }),
          Title: z.string().exactOptional().openapi({ example: 'Facture décembre' }),
          VAT: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.number(),
            )
            .exactOptional()
            .openapi({ example: 19.5 }),
        })
        .openapi({ required: [] })
        .openapi({ required: ['Title', 'File', 'Name'] }),
    },
  },
  required: true,
}

const FolderRequestBody = {
  description: 'Folder to add',
  content: {
    'application/json': {
      schema: z
        .object({
          About: z.string().exactOptional().openapi({ example: '<b> Mon premier dossier </b>' }),
          ArchivalDate: z.string().exactOptional().openapi({ example: '20160203' }),
          Home: z.boolean().exactOptional().openapi({ example: 'yes' }),
          Keywords: z
            .array(z.string())
            .exactOptional()
            .openapi({ example: ['paris', 'comptabilité'] }),
          Level: z
            .enum(['confidential', 'regular', 'public'])
            .exactOptional()
            .openapi({ example: 'confidential' }),
          Name: z.string().exactOptional().openapi({ example: 'Dupond' }),
        })
        .openapi({ required: [] })
        .openapi({ required: ['Name'] }),
    },
  },
  required: true,
}

const GroupRequestBody = {
  description: 'Group',
  content: {
    'application/json': {
      schema: z
        .object({
          EndDate: z.string().exactOptional().openapi({ example: '20160203' }),
          Name: z.string().exactOptional().openapi({ example: 'RH' }),
        })
        .openapi({ required: [] })
        .openapi({ required: ['Name', 'LegalName'] }),
    },
  },
  required: true,
}

const HubDocumentsRequestBody = {
  description: 'Document to add',
  content: {
    'application/json': {
      schema: z
        .object({
          Accounting: z
            .object({
              AccountedOn: z.string().exactOptional().openapi({ example: '20181202' }),
              Workbook: z
                .enum([
                  'customer',
                  'provider',
                  'bank',
                  'cashWoucher',
                  'fiscal',
                  'insurance',
                  'social',
                  'other',
                  'permanent',
                ])
                .exactOptional()
                .openapi({ example: 'fiscal' }),
              YearMonth: z.string().exactOptional().openapi({ example: 201902 }),
            })
            .exactOptional()
            .openapi({ required: [] }),
          AddContractAllowed: z.boolean().exactOptional().openapi({ example: true }),
          Author: z.string().exactOptional().openapi({ example: 'Antoine Dupond' }),
          Comment: z.string().exactOptional().openapi({ example: 'my document' }),
          Date: z.string().exactOptional().openapi({ example: '20161203' }),
          File: z
            .object({
              Content64Encoded: z
                .string()
                .exactOptional()
                .openapi({ example: 'gjgjJ9FJA829H9HA18B' }),
              Name: z.string().exactOptional().openapi({ example: 'Mon Document' }),
            })
            .openapi({ required: [] }),
          Title: z.string().openapi({ example: 'Facture décembre' }),
        })
        .openapi({ required: ['Title', 'File'] }),
    },
    'multipart/form-data': {
      schema: z
        .object({
          Accounting: z
            .object({
              AccountedOn: z.string().exactOptional().openapi({ example: '20181202' }),
              Workbook: z
                .enum([
                  'customer',
                  'provider',
                  'bank',
                  'cashWoucher',
                  'fiscal',
                  'insurance',
                  'social',
                  'other',
                  'permanent',
                ])
                .exactOptional()
                .openapi({ example: 'fiscal' }),
              YearMonth: z.string().exactOptional().openapi({ example: 201902 }),
            })
            .exactOptional()
            .openapi({ required: [] }),
          Author: z.string().exactOptional().openapi({ example: 'Antoine Dupond' }),
          Comment: z.string().exactOptional().openapi({ example: 'my document' }),
          Date: z.string().exactOptional().openapi({ example: '20161203' }),
          File: z.file().openapi({ type: 'string', format: 'binary' }),
          Title: z.string().openapi({ example: 'Facture décembre' }),
        })
        .openapi({ required: ['Title', 'File'] }),
    },
  },
  required: true,
}

const InsuranceRequestBody = {
  description: 'Insurance to add (except name, class and archivaldate)',
  content: {
    'application/json': {
      schema: z
        .object({
          About: z.string().exactOptional().openapi({ example: '<b> Mon premier dossier </b>' }),
          Comment: z.string().exactOptional().openapi({ example: 'pieces company' }),
          CustomerNumber: z.string().exactOptional().openapi({ example: '13587449420F' }),
          Designation: z.string().exactOptional().openapi({ example: 'client pièces détachées' }),
          End: z.string().exactOptional().openapi({ example: '20190101' }),
          Home: z.boolean().exactOptional().openapi({ example: 'yes' }),
          Keywords: z
            .array(z.string())
            .exactOptional()
            .openapi({ example: ['paris', 'comptabilité'] }),
          Level: z
            .enum(['confidential', 'regular', 'public'])
            .exactOptional()
            .openapi({ example: 'confidential' }),
          PolicyNumber: z.string().exactOptional().openapi({ example: '1358' }),
          Start: z.string().exactOptional().openapi({ example: '20180630' }),
        })
        .openapi({ required: [] }),
    },
  },
  required: true,
}

const InvoiceRequestBody = {
  description:
    'Invoice to add (either DocumentId, InvoiceDate either (File,Name,Content64Encoded,Title,InvoiceDate) is mandatory)',
  content: {
    'application/json': {
      schema: z
        .xor([
          z
            .object({
              BeforeVAT: z.number().exactOptional().openapi({ example: 1000 }),
              Date: z.string().exactOptional().openapi({ example: '20161203' }),
              DocumentId: z.string().exactOptional().openapi({ example: 'PBUFBAUBF1531' }),
              DueDate: z.string().exactOptional().openapi({ example: 20190130 }),
              InclVAT: z.number().exactOptional().openapi({ example: 1200 }),
              InvoiceDate: z.string().exactOptional().openapi({ example: '20200202' }),
              Number: z.string().exactOptional().openapi({ example: '036459879874' }),
              PaymentDate: z.string().exactOptional().openapi({ example: 20190131 }),
              Type: z
                .enum([
                  'commercial-invoice',
                  'credit-note',
                  'amending-invoice',
                  'self-billing',
                  'credit-self-billing',
                  'down-payment-invoice',
                  'informations-invoice',
                ])
                .exactOptional()
                .openapi({ example: 'commercial-invoice' }),
              VAT: z.number().exactOptional().openapi({ example: 19.5 }),
            })
            .openapi({ required: [] }),
          z
            .object({
              Accounting: z
                .object({
                  AccountedOn: z.string().exactOptional().openapi({ example: '20181202' }),
                  Workbook: z
                    .enum([
                      'customer',
                      'provider',
                      'bank',
                      'cashWoucher',
                      'fiscal',
                      'insurance',
                      'social',
                      'other',
                      'permanent',
                    ])
                    .exactOptional()
                    .openapi({ example: 'fiscal' }),
                  YearMonth: z.string().exactOptional().openapi({ example: 201902 }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              Author: z.string().exactOptional().openapi({ example: 'Antoine Dupond' }),
              BeforeVAT: z.number().exactOptional().openapi({ example: 1000 }),
              Code: z.string().exactOptional().openapi({ example: 'COD' }),
              Comment: z.string().exactOptional().openapi({ example: 'my document' }),
              Date: z.string().exactOptional().openapi({ example: '20161203' }),
              DueDate: z.string().exactOptional().openapi({ example: 20190130 }),
              File: z
                .object({
                  Content64Encoded: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'gjgjJ9FJA829H9HA18B' }),
                  Name: z.string().exactOptional().openapi({ example: 'MonDocument.pdf' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              InclVAT: z.number().exactOptional().openapi({ example: 1200 }),
              InvoiceDate: z.string().exactOptional().openapi({ example: '20200202' }),
              Number: z.string().exactOptional().openapi({ example: '036459879874' }),
              PaymentDate: z.string().exactOptional().openapi({ example: 20190131 }),
              Title: z.string().exactOptional().openapi({ example: 'Facture décembre' }),
              Type: z
                .enum([
                  'commercial-invoice',
                  'credit-note',
                  'amending-invoice',
                  'self-billing',
                  'credit-self-billing',
                  'down-payment-invoice',
                  'informations-invoice',
                ])
                .exactOptional()
                .openapi({ example: 'commercial-invoice' }),
              VAT: z.number().exactOptional().openapi({ example: 19.5 }),
            })
            .openapi({ required: [] }),
        ])
        .openapi({ required: ['Title', 'File', 'Name', 'Content64Encoded', 'DocumentId'] }),
    },
    'multipart/form-data': {
      schema: z
        .object({
          Accounting: z
            .object({
              AccountedOn: z.string().exactOptional().openapi({ example: '20181202' }),
              Workbook: z
                .enum([
                  'customer',
                  'provider',
                  'bank',
                  'cashWoucher',
                  'fiscal',
                  'insurance',
                  'social',
                  'other',
                  'permanent',
                ])
                .exactOptional()
                .openapi({ example: 'fiscal' }),
              YearMonth: z.string().exactOptional().openapi({ example: 201902 }),
            })
            .exactOptional()
            .openapi({ required: [] }),
          Author: z.string().exactOptional().openapi({ example: 'Antoine Dupond' }),
          BeforeVAT: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.number(),
            )
            .exactOptional()
            .openapi({ example: 1000 }),
          Code: z.string().exactOptional().openapi({ example: 'COD' }),
          Comment: z.string().exactOptional().openapi({ example: 'my document' }),
          Date: z.string().exactOptional().openapi({ example: '20161203' }),
          DueDate: z.string().exactOptional().openapi({ example: 20190130 }),
          File: z.file().exactOptional().openapi({ type: 'string', format: 'binary' }),
          InclVAT: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.number(),
            )
            .exactOptional()
            .openapi({ example: 1200 }),
          InvoiceDate: z.string().exactOptional().openapi({ example: '20200202' }),
          Number: z.string().exactOptional().openapi({ example: '036459879874' }),
          PaymentDate: z.string().exactOptional().openapi({ example: 20190131 }),
          Title: z.string().exactOptional().openapi({ example: 'Facture décembre' }),
          Type: z
            .enum([
              'commercial-invoice',
              'credit-note',
              'amending-invoice',
              'self-billing',
              'credit-self-billing',
              'down-payment-invoice',
              'informations-invoice',
            ])
            .exactOptional()
            .openapi({ example: 'commercial-invoice' }),
          VAT: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.number(),
            )
            .exactOptional()
            .openapi({ example: 19.5 }),
        })
        .openapi({ required: [] })
        .openapi({ required: ['Title', 'File', 'Name'] }),
    },
  },
  required: true,
}

const LoanRequestBody = {
  description: 'Loan to add (except name, class and archivaldate)',
  content: {
    'application/json': {
      schema: z
        .object({
          About: z.string().exactOptional().openapi({ example: '<b> Mon premier dossier </b>' }),
          Amount: z.float32().exactOptional().openapi({ example: 1000 }),
          Category: z
            .enum([
              'debt spreading',
              'bank loan',
              'current account',
              'overdraft agreement',
              'leasing',
              'obligation',
            ])
            .exactOptional()
            .openapi({ example: 'debt spreading' }),
          Comment: z.string().exactOptional().openapi({ example: 'pieces company' }),
          Designation: z.string().exactOptional().openapi({ example: 'emprunt entreprise' }),
          DueAmount: z.float32().exactOptional().openapi({ example: 1000.6 }),
          End: z.string().exactOptional().openapi({ example: '20190101' }),
          Home: z.boolean().exactOptional().openapi({ example: 'yes' }),
          Keywords: z
            .array(z.string())
            .exactOptional()
            .openapi({ example: ['paris', 'comptabilité'] }),
          Level: z
            .enum(['confidential', 'regular', 'public'])
            .exactOptional()
            .openapi({ example: 'confidential' }),
          MonthsNumber: z.number().exactOptional().openapi({ example: 12 }),
          Rate: z.float32().exactOptional().openapi({ example: 2.5 }),
          Start: z.string().exactOptional().openapi({ example: '20180630' }),
          TotalCost: z.float32().exactOptional().openapi({ example: 10200 }),
        })
        .openapi({ required: [] }),
    },
  },
  required: true,
}

const LogsRequestBody = {
  description: 'State of activation of the logs',
  content: {
    'application/json': {
      schema: z
        .object({ Enabled: z.boolean().exactOptional().openapi({ example: true }) })
        .openapi({ required: [] }),
    },
  },
}

const MailingDocumentRequestBody = {
  description: 'document to send by mail',
  content: {
    'application/json': {
      schema: z
        .object({
          Address: z
            .object({
              City: z.string().exactOptional().openapi({ example: 'Paris' }),
              Complement: z.string().exactOptional().openapi({ example: 'batiment A' }),
              Country: z.string().exactOptional().openapi({ example: 'France' }),
              Street: z.string().exactOptional().openapi({ example: '2, rue du chateau' }),
              ZipCode: z.string().exactOptional().openapi({ example: '75001' }),
            })
            .exactOptional()
            .openapi({ required: [] }),
          Name: z.string().exactOptional().openapi({ example: 'Société Dupond' }),
        })
        .openapi({ required: [] }),
    },
  },
  required: true,
}

const MenuDocumentsRequestBody = {
  description: 'Document to add',
  content: {
    'application/json': {
      schema: z
        .object({
          Author: z.string().exactOptional().openapi({ example: 'Antoine Dupond' }),
          Comment: z.string().exactOptional().openapi({ example: 'my document' }),
          Date: z.string().exactOptional().openapi({ example: '20161203' }),
          File: z
            .object({
              Content64Encoded: z
                .string()
                .exactOptional()
                .openapi({ example: 'gjgjJ9FJA829H9HA18B' }),
              Name: z.string().exactOptional().openapi({ example: 'Mon Document' }),
            })
            .openapi({ required: [] }),
          Title: z.string().openapi({ example: 'Facture décembre' }),
        })
        .openapi({ required: ['Title', 'File'] }),
    },
    'multipart/form-data': {
      schema: z
        .object({
          Author: z.string().exactOptional().openapi({ example: 'Antoine Dupond' }),
          Comment: z.string().exactOptional().openapi({ example: 'my document' }),
          Date: z.string().exactOptional().openapi({ example: '20161203' }),
          File: z.file().openapi({ type: 'string', format: 'binary' }),
          Title: z.string().openapi({ example: 'Facture décembre' }),
        })
        .openapi({ required: ['Title', 'File'] }),
    },
  },
  required: true,
}

const MessageRequestBody = {
  description:
    "Message to write (except Author and ModificationAuthor). Text must be Html, tags  'audio','button','input','script','select','textarea','video' are deleted",
  content: {
    'application/json': {
      schema: z
        .object({
          Level: z
            .enum(['confidential', 'regular'])
            .exactOptional()
            .openapi({ example: 'confidential' }),
          MessageDate: z.string().exactOptional().openapi({ example: '20160203' }),
          Notify: z
            .object({
              How: z.enum(['std', 'mail', 'sms']).exactOptional().openapi({ example: 'sms' }),
              MemberIds: z
                .array(z.string().openapi({ example: ['PJOFJAFJAOJ', 'PJFJAPJF'] }))
                .exactOptional(),
            })
            .exactOptional()
            .openapi({ required: [] }),
          Text: z.string().exactOptional().openapi({ example: '<p> hello world </p>' }),
        })
        .openapi({ required: [] })
        .openapi({ required: ['Text'] }),
    },
  },
  required: true,
}

const ModifyAccessRequestBody = {
  description: 'Access to modify',
  content: {
    'application/json': {
      schema: z
        .object({
          Right: z.enum(['write', 'read', 'none']).exactOptional().openapi({ example: 'write' }),
        })
        .openapi({ required: [] })
        .and(
          z
            .object({
              About: z
                .string()
                .exactOptional()
                .openapi({ example: '<b> Mon premier dossier </b>' }),
              Home: z.boolean().exactOptional().openapi({ example: 'yes' }),
              Keywords: z
                .array(z.string())
                .exactOptional()
                .openapi({ example: ['paris', 'comptabilité'] }),
              Level: z
                .enum(['confidential', 'regular', 'public'])
                .exactOptional()
                .openapi({ example: 'confidential' }),
            })
            .openapi({ required: [] }),
        ),
    },
  },
  required: true,
}

const ModifyAccountingYearRequestBody = {
  description: 'Accounting year to modify (except name, class and archivaldate)',
  content: {
    'application/json': {
      schema: z
        .object({
          About: z.string().exactOptional().openapi({ example: '<b> Mon premier dossier </b>' }),
          Comment: z.string().exactOptional().openapi({ example: 'ogm of the company' }),
          End: z.string().exactOptional().openapi({ example: '20181231' }),
          Home: z.boolean().exactOptional().openapi({ example: 'yes' }),
          Keywords: z
            .array(z.string())
            .exactOptional()
            .openapi({ example: ['paris', 'comptabilité'] }),
          Level: z
            .enum(['confidential', 'regular', 'public'])
            .exactOptional()
            .openapi({ example: 'confidential' }),
          NetIncome: z.number().exactOptional().openapi({ example: 52634.36 }),
          NetPosition: z.number().exactOptional().openapi({ example: 14580.36 }),
          Start: z.string().exactOptional().openapi({ example: '20180101' }),
          Tax: z.number().exactOptional().openapi({ example: 45698.36 }),
          TaxableIncome: z.number().exactOptional().openapi({ example: 869523.36 }),
          Turnover: z.number().exactOptional().openapi({ example: 1025.36 }),
        })
        .openapi({ required: [] }),
    },
  },
  required: true,
}

const ModifyBankRequestBody = {
  description: 'Bank to modify (except name, class and archivaldate)',
  content: {
    'application/json': {
      schema: z
        .object({
          About: z.string().exactOptional().openapi({ example: '<b> Mon premier dossier </b>' }),
          Comment: z.string().exactOptional().openapi({ example: 'pieces company' }),
          ContractReference: z.string().exactOptional().openapi({ example: '13587449420F' }),
          Designation: z.string().exactOptional().openapi({ example: 'client pièces détachées' }),
          End: z.string().exactOptional().openapi({ example: '20190101' }),
          Home: z.boolean().exactOptional().openapi({ example: 'yes' }),
          Keywords: z
            .array(z.string())
            .exactOptional()
            .openapi({ example: ['paris', 'comptabilité'] }),
          Level: z
            .enum(['confidential', 'regular', 'public'])
            .exactOptional()
            .openapi({ example: 'confidential' }),
          Start: z.string().exactOptional().openapi({ example: '20180630' }),
        })
        .openapi({ required: [] }),
    },
  },
  required: true,
}

const ModifyBankStatementRequestBody = {
  description: 'A bank statement to modify',
  content: {
    'application/json': {
      schema: z
        .object({
          Balance: z.number().exactOptional().openapi({ example: 1352.63 }),
          Number: z.number().exactOptional().openapi({ example: '10015848' }),
          StatementDate: z.string().exactOptional().openapi({ example: '20160801' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const ModifyBusinessGroupRequestBody = {
  description: 'BusinessGroup to modify',
  content: {
    'application/json': {
      schema: z
        .object({ Name: z.string().exactOptional().openapi({ example: 'Client Durand' }) })
        .openapi({ required: [] }),
    },
  },
  required: true,
}

const ModifyCFolderRequestBody = {
  description: 'Folder to modify',
  content: {
    'application/json': {
      schema: z
        .object({
          About: z.string().exactOptional().openapi({ example: '<b> Mon premier dossier </b>' }),
          ArchivalDate: z.string().exactOptional().openapi({ example: '20160203' }),
          Home: z.boolean().exactOptional().openapi({ example: 'yes' }),
          Keywords: z
            .array(z.string())
            .exactOptional()
            .openapi({ example: ['paris', 'comptabilité'] }),
          Level: z
            .enum(['confidential', 'regular', 'public'])
            .exactOptional()
            .openapi({ example: 'confidential' }),
          Name: z.string().exactOptional().openapi({ example: 'Dupond' }),
        })
        .openapi({ required: [] }),
    },
  },
  required: true,
}

const ModifyCollectiveDecisionRequestBody = {
  description: 'Collective decision to modify (except name, class and archivaldate)',
  content: {
    'application/json': {
      schema: z
        .object({
          About: z.string().exactOptional().openapi({ example: '<b> Mon premier dossier </b>' }),
          Comment: z.string().exactOptional().openapi({ example: 'ogm of the company' }),
          Date: z.string().exactOptional().openapi({ example: '20180202' }),
          DividendDistributions: z.number().exactOptional().openapi({ example: 1025.36 }),
          DividendDistributionsDate: z.string().exactOptional().openapi({ example: '20180203' }),
          Event: z
            .enum([
              'EGM',
              'CGM',
              'OGM',
              'ConstituentAssembly',
              'SolePartner',
              'OtherEvent',
              'Other',
              'Office',
              'ExecutiveCommittee',
              'Consulting',
              'Board',
              'PartnersMeeting',
            ])
            .exactOptional()
            .openapi({
              description:
                "for space type 'company' enums allowed are  'EGM','CGM','OGM','ConstituentAssembly','SolePartner','OtherEvent','Office','ExecutiveCommittee','Consulting','Board','PartnersMeeting' and for space type 'association' enums allowed are 'EGM','CGM','OGM','Other','Office','ExecutiveCommittee'",
              example: 'EGM',
            }),
          Home: z.boolean().exactOptional().openapi({ example: 'yes' }),
          Keywords: z
            .array(z.string())
            .exactOptional()
            .openapi({ example: ['paris', 'comptabilité'] }),
          Level: z
            .enum(['confidential', 'regular', 'public'])
            .exactOptional()
            .openapi({ example: 'confidential' }),
        })
        .openapi({ required: [] }),
    },
  },
  required: true,
}

const ModifyCompanyEntityRequestBody = {
  description: 'Company entity to modify',
  content: {
    'application/json': {
      schema: z
        .object({
          ApeCode: z.string().exactOptional().openapi({ example: '420F' }),
          ArchivalDate: z.string().exactOptional().openapi({ example: '20160203' }),
          Comment: z.string().exactOptional().openapi({ example: 'my brother' }),
          LegalName: z.string().exactOptional().openapi({ example: 'Mon entreprise Dupond' }),
          LegalStatut: z.string().exactOptional().openapi({ example: 'SAS' }),
          Name: z.string().exactOptional().openapi({ example: 'Dupond' }),
          RegistrationNumber: z.string().exactOptional().openapi({ example: '236542158' }),
          Type: z.string().exactOptional().openapi({ example: 'EPT' }),
          VatNumber: z.string().exactOptional().openapi({ example: '46546847864' }),
        })
        .openapi({ required: [] }),
    },
  },
  required: true,
}

const ModifyContractualDocumentRequestBody = {
  description: 'A contractual document to modify',
  content: {
    'application/json': {
      schema: z
        .object({
          Amount: z.string().exactOptional().openapi({ example: '1001.36' }),
          Designation: z.string().exactOptional().openapi({ example: 'contrat client' }),
          Reference: z.string().exactOptional().openapi({ example: '151465AFHIA' }),
          StartDate: z.string().exactOptional().openapi({ example: '20181128' }),
          Type: z
            .enum([
              'contract',
              'engagement-letter',
              'amendment',
              'purchase-order',
              'delivery-order',
              'quotation',
              'other',
            ])
            .exactOptional()
            .openapi({ example: 'quotation' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const ModifyCorporateTaxDeclarationRequestBody = {
  description: 'A Corporate Tax Declaration to modify',
  content: {
    'application/json': {
      schema: z
        .object({
          Amount: z.float32().exactOptional().openapi({ example: 132.63 }),
          DeclarationDate: z.string().exactOptional().openapi({ example: '20160801' }),
          Order: z
            .enum(['1st advance', '2nd advance', '3rd advance', '4th advance', 'regularization'])
            .exactOptional()
            .openapi({ example: '1st advance' }),
          Rate: z.float32().exactOptional().openapi({ example: 10.63 }),
          TaxBase: z.float32().exactOptional().openapi({ example: 123.36 }),
        })
        .openapi({ required: [] }),
    },
  },
}

const ModifyCustomerRequestBody = {
  description: 'Customer to modify (except name, class and archivaldate)',
  content: {
    'application/json': {
      schema: z
        .object({
          About: z.string().exactOptional().openapi({ example: '<b> Mon premier dossier </b>' }),
          Comment: z.string().exactOptional().openapi({ example: 'pieces company' }),
          CustomerNumber: z.string().exactOptional().openapi({ example: '13587449420F' }),
          Designation: z.string().exactOptional().openapi({ example: 'client pièces détachées' }),
          End: z.string().exactOptional().openapi({ example: '20190101' }),
          Home: z.boolean().exactOptional().openapi({ example: 'yes' }),
          KeepOld: z.boolean().exactOptional().openapi({ example: true }),
          Keywords: z
            .array(z.string())
            .exactOptional()
            .openapi({ example: ['paris', 'comptabilité'] }),
          Level: z
            .enum(['confidential', 'regular', 'public'])
            .exactOptional()
            .openapi({ example: 'confidential' }),
          PortfolioId: z.string().exactOptional().openapi({ example: 'T1OJFOAZ7449420F' }),
          SecondaryPortfolioId: z.string().exactOptional().openapi({ example: 'T1OJFOAZ7449420F' }),
          Start: z.string().exactOptional().openapi({ example: '20180630' }),
        })
        .openapi({ required: [] }),
    },
  },
  required: true,
}

const ModifyCustomerContRequestBody = {
  description: 'Customer contract to modify',
  content: {
    'application/json': {
      schema: z
        .object({
          Groups: z
            .union([
              z.literal('tax'),
              z.literal('wealth management'),
              z.literal('social'),
              z.literal('social manager'),
              z.literal('purchases'),
              z.literal('sales'),
              z.literal('legal'),
              z.literal('accounting'),
            ])
            .exactOptional()
            .openapi({ example: ['social', 'legal'] }),
          IsAdmin: z.boolean().exactOptional().openapi({ example: false }),
          Role: z
            .enum(['collaborator', 'assistant', 'empty'])
            .exactOptional()
            .openapi({ example: 'collaborator' }),
        })
        .openapi({ required: [] }),
    },
  },
  required: true,
}

const ModifyDocumentRequestBody = {
  description: 'document to modify (except name, class and archivaldate)',
  content: {
    'application/json': {
      schema: z
        .object({
          Accounting: z
            .object({
              AccountedOn: z.string().exactOptional().openapi({ example: '20181202' }),
              Workbook: z
                .enum([
                  'customer',
                  'provider',
                  'bank',
                  'cashWoucher',
                  'fiscal',
                  'insurance',
                  'social',
                  'other',
                  'permanent',
                ])
                .exactOptional()
                .openapi({ example: 'fiscal' }),
              YearMonth: z.string().exactOptional().openapi({ example: 201802 }),
            })
            .exactOptional()
            .openapi({ required: [] }),
          Author: z.string().exactOptional().openapi({ example: 'Antoine Dupond' }),
          Code: z.string().exactOptional().openapi({ example: 'COD' }),
          Comment: z.string().exactOptional().openapi({ example: 'my document' }),
          Date: z.string().exactOptional().openapi({ example: '20161203' }),
          Title: z.string().exactOptional().openapi({ example: 'Facture décembre' }),
        })
        .openapi({ required: [] }),
    },
  },
  required: true,
}

const ModifyEmailProfileRequestBody = {
  description: 'Email to modify',
  content: {
    'application/json': {
      schema: z.xor([
        z
          .object({ Email: z.string().exactOptional().openapi({ example: 'paule@durand.fr' }) })
          .openapi({ required: [] }),
        z
          .object({
            Email: z.string().exactOptional().openapi({ example: 'paule@durand.fr' }),
            EmailCode: z.string().exactOptional().openapi({ example: '1256' }),
            SMSCode: z.string().exactOptional().openapi({ example: 'FAHF' }),
          })
          .openapi({ required: [] }),
      ]),
    },
  },
  required: true,
}

const ModifyEmployeeRequestBody = {
  description: 'Employee to modify (except name, class and archivaldate)',
  content: {
    'application/json': {
      schema: z
        .object({
          About: z.string().exactOptional().openapi({ example: '<b> Mon premier dossier </b>' }),
          Comment: z.string().exactOptional().openapi({ example: 'pieces company' }),
          ContractType: z.string().exactOptional().openapi({ example: '01' }),
          EmployeeNumber: z.string().exactOptional().openapi({ example: '13587FAZCD420F' }),
          End: z.string().exactOptional().openapi({ example: '20190101' }),
          Function: z.string().exactOptional().openapi({ example: 'commercial' }),
          Home: z.boolean().exactOptional().openapi({ example: 'yes' }),
          Keywords: z
            .array(z.string())
            .exactOptional()
            .openapi({ example: ['paris', 'comptabilité'] }),
          Level: z
            .enum(['confidential', 'regular', 'public'])
            .exactOptional()
            .openapi({ example: 'confidential' }),
          PostalMail: z.boolean().exactOptional().openapi({ example: true }),
          SSNumber: z.string().exactOptional().openapi({ example: '1542012365985215' }),
          Start: z.string().exactOptional().openapi({ example: '20180630' }),
        })
        .openapi({ required: [] }),
    },
  },
  required: true,
}

const ModifyExpenseProofRequestBody = {
  description: 'An expense proof to modify',
  content: {
    'application/json': {
      schema: z
        .object({
          Account: z
            .enum(['CAB', 'IKM', 'PRK', 'TXI', 'VOY', 'PTT', 'FHR', 'DIV', 'RES'])
            .exactOptional()
            .openapi({ example: 'CAB' }),
          ArchivalDate: z.string().exactOptional().openapi({ example: 20211231 }),
          BeforeVAT: z.number().exactOptional().openapi({ example: 1000 }),
          ExpenseDate: z.string().exactOptional().openapi({ example: '20200202' }),
          ExpenseReportId: z.string().exactOptional().openapi({ example: 'PFOIAHF874984' }),
          Provider: z.string().exactOptional().openapi({ example: 'G7' }),
          Reason: z.string().exactOptional().openapi({ example: 'taxi' }),
          Status: z.enum(['R', 'V', 'W']).exactOptional().openapi({ example: 'R' }),
          VAT: z.number().exactOptional().openapi({ example: 19.5 }),
        })
        .openapi({ required: [] }),
    },
  },
}

const ModifyExpenseReportRequestBody = {
  description: 'An expense report to modify',
  content: {
    'application/json': {
      schema: z
        .object({
          BeforeVAT: z.number().exactOptional().openapi({ example: 1000 }),
          ExpenseDate: z.string().exactOptional().openapi({ example: '20200202' }),
          InclVAT: z.number().exactOptional().openapi({ example: 1200 }),
          ProcessingDate: z.string().exactOptional().openapi({ example: '20200203' }),
          VAT: z.number().exactOptional().openapi({ example: 19.5 }),
        })
        .openapi({ required: [] }),
    },
  },
}

const ModifyFolderRequestBody = {
  description: 'Folder to modify (except Name, Class,ModificationDate and ArchivalDate)',
  content: {
    'application/json': {
      schema: z
        .object({
          About: z.string().exactOptional().openapi({ example: '<b> Mon premier dossier </b>' }),
          Home: z.boolean().exactOptional().openapi({ example: 'yes' }),
          Keywords: z
            .array(z.string())
            .exactOptional()
            .openapi({ example: ['paris', 'comptabilité'] }),
          Level: z
            .enum(['confidential', 'regular', 'public'])
            .exactOptional()
            .openapi({ example: 'confidential' }),
        })
        .openapi({ required: [] }),
    },
  },
  required: true,
}

const ModifyFolderGroupRequestBody = {
  description: 'Group to modify to add folder access',
  content: {
    'application/json': {
      schema: z
        .object({ Right: z.enum(['read', 'write']).exactOptional().openapi({ example: 'read' }) })
        .openapi({ required: [] })
        .openapi({ required: ['Right'] }),
    },
  },
  required: true,
}

const ModifyGroupRequestBody = {
  description: 'Group to modify',
  content: {
    'application/json': {
      schema: z
        .object({
          EndDate: z.string().exactOptional().openapi({ example: '20160203' }),
          Name: z.string().exactOptional().openapi({ example: 'RH' }),
        })
        .openapi({ required: [] }),
    },
  },
  required: true,
}

const ModifyInsuranceRequestBody = {
  description: 'Insurance to modify (except name, class and archivaldate)',
  content: {
    'application/json': {
      schema: z
        .object({
          About: z.string().exactOptional().openapi({ example: '<b> Mon premier dossier </b>' }),
          Comment: z.string().exactOptional().openapi({ example: 'pieces company' }),
          CustomerNumber: z.string().exactOptional().openapi({ example: '13587449420F' }),
          Designation: z.string().exactOptional().openapi({ example: 'client pièces détachées' }),
          End: z.string().exactOptional().openapi({ example: '20190101' }),
          Home: z.boolean().exactOptional().openapi({ example: 'yes' }),
          Keywords: z
            .array(z.string())
            .exactOptional()
            .openapi({ example: ['paris', 'comptabilité'] }),
          Level: z
            .enum(['confidential', 'regular', 'public'])
            .exactOptional()
            .openapi({ example: 'confidential' }),
          PolicyNumber: z.string().exactOptional().openapi({ example: '1358' }),
          Start: z.string().exactOptional().openapi({ example: '20180630' }),
        })
        .openapi({ required: [] }),
    },
  },
  required: true,
}

const ModifyInvoiceRequestBody = {
  description: 'A invoice to modify',
  content: {
    'application/json': {
      schema: z
        .object({
          BeforeVAT: z.number().exactOptional().openapi({ example: 1000 }),
          DueDate: z.string().exactOptional().openapi({ example: 20190130 }),
          InclVAT: z.number().exactOptional().openapi({ example: 1200 }),
          InvoiceDate: z.string().exactOptional().openapi({ example: '20200202' }),
          Number: z.string().exactOptional().openapi({ example: '036459879874' }),
          PaymentDate: z.string().exactOptional().openapi({ example: 20190131 }),
          Type: z
            .enum([
              'commercial-invoice',
              'credit-note',
              'amending-invoice',
              'self-billing',
              'credit-self-billing',
              'down-payment-invoice',
              'informations-invoice',
            ])
            .exactOptional()
            .openapi({ example: 'commercial-invoice' }),
          VAT: z.number().exactOptional().openapi({ example: 19.5 }),
        })
        .openapi({ required: [] }),
    },
  },
}

const ModifyLegalRequestBody = {
  description: 'Legal information to modify',
  content: { 'application/json': { schema: LegalSchema } },
  required: true,
}

const ModifyLoanRequestBody = {
  description: 'Loan to modify (except name, class and archivaldate)',
  content: {
    'application/json': {
      schema: z
        .object({
          About: z.string().exactOptional().openapi({ example: '<b> Mon premier dossier </b>' }),
          Amount: z.float32().exactOptional().openapi({ example: 1000 }),
          Category: z
            .enum([
              'debt spreading',
              'bank loan',
              'current account',
              'overdraft agreement',
              'leasing',
              'obligation',
            ])
            .exactOptional()
            .openapi({ example: 'debt spreading' }),
          Comment: z.string().exactOptional().openapi({ example: 'pieces company' }),
          Designation: z.string().exactOptional().openapi({ example: 'emprunt entreprise' }),
          DueAmount: z.float32().exactOptional().openapi({ example: 1000.6 }),
          End: z.string().exactOptional().openapi({ example: '20190101' }),
          Home: z.boolean().exactOptional().openapi({ example: 'yes' }),
          Keywords: z
            .array(z.string())
            .exactOptional()
            .openapi({ example: ['paris', 'comptabilité'] }),
          Level: z
            .enum(['confidential', 'regular', 'public'])
            .exactOptional()
            .openapi({ example: 'confidential' }),
          MonthsNumber: z.number().exactOptional().openapi({ example: 12 }),
          Rate: z.float32().exactOptional().openapi({ example: 2.5 }),
          Start: z.string().exactOptional().openapi({ example: '20180630' }),
          TotalCost: z.float32().exactOptional().openapi({ example: 10200 }),
        })
        .openapi({ required: [] }),
    },
  },
  required: true,
}

const ModifyMessageRequestBody = {
  description: 'Message to modify (except Author and ModificationAuthor)',
  content: {
    'application/json': {
      schema: z
        .object({
          Level: z
            .enum(['confidential', 'regular'])
            .exactOptional()
            .openapi({ example: 'confidential' }),
          MessageDate: z.string().exactOptional().openapi({ example: '20160203' }),
          Notify: z
            .object({
              How: z.enum(['std', 'mail', 'sms']).exactOptional().openapi({ example: 'sms' }),
              MemberIds: z
                .array(z.string().openapi({ example: ['PJOFJAFJAOJ', 'PJFJAPJF'] }))
                .exactOptional(),
            })
            .exactOptional()
            .openapi({ required: [] }),
          Text: z.string().exactOptional().openapi({ example: '<p> hello world </p>' }),
        })
        .openapi({ required: [] }),
    },
  },
  required: true,
}

const ModifyMobileProfileRequestBody = {
  description: 'Mobile to modify',
  content: {
    'application/json': {
      schema: z.xor([
        z
          .object({ Mobile: z.string().exactOptional().openapi({ example: 33606060606 }) })
          .openapi({ required: [] }),
        z
          .object({
            Mobile: z.string().exactOptional().openapi({ example: 33606060606 }),
            Password: z.string().exactOptional().openapi({ example: 'azerty' }),
            SMSCode: z.string().exactOptional().openapi({ example: 'FAHF' }),
          })
          .openapi({ required: [] }),
      ]),
    },
  },
  required: true,
}

const ModifyOtherTaxRequestBody = {
  description: 'A  Tax Declaration to modify',
  content: {
    'application/json': {
      schema: z
        .object({
          Amount: z.float32().exactOptional().openapi({ example: 132.63 }),
          DeclarationDate: z.string().exactOptional().openapi({ example: '20160801' }),
          Reference: z.string().exactOptional().openapi({ example: 'décla CFE' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const ModifyPasswordRequestBody = {
  description: 'Password to modify',
  content: {
    'application/json': {
      schema: z
        .object({
          Comment: z.string().exactOptional().openapi({ example: 'mon compte google' }),
          Designation: z.string().exactOptional().openapi({ example: 'compte google' }),
          Ident: z.string().exactOptional().openapi({ example: 'test' }),
          Link: z.string().exactOptional().openapi({ example: 'www.google.fr' }),
          Password: z.string().exactOptional().openapi({ example: 'azerty' }),
        })
        .openapi({ required: [] }),
    },
  },
  required: true,
}

const ModifyPayrollRequestBody = {
  description: 'A payroll to modify',
  content: {
    'application/json': {
      schema: z
        .object({
          Begin: z.string().exactOptional().openapi({ example: '20160801' }),
          EmployeeContributions: z.float32().exactOptional().openapi({ example: 1352.63 }),
          EmployerContributions: z.float32().exactOptional().openapi({ example: 132.63 }),
          End: z.string().exactOptional().openapi({ example: '20160831' }),
          NetAmount: z.float32().exactOptional().openapi({ example: 1005.63 }),
          TotalGrossAmount: z.float32().exactOptional().openapi({ example: 1548.63 }),
        })
        .openapi({ required: [] }),
    },
  },
}

const ModifyPayslipRequestBody = {
  description: 'A payslip to modify',
  content: {
    'application/json': {
      schema: z
        .object({
          Begin: z.string().exactOptional().openapi({ example: '20160801' }),
          EmployeeContributions: z.float32().exactOptional().openapi({ example: 2000.5 }),
          EmployerContributions: z.float32().exactOptional().openapi({ example: 400.5 }),
          End: z.string().exactOptional().openapi({ example: '20160831' }),
          FixedGrossAmount: z.float32().exactOptional().openapi({ example: 1352.63 }),
          NetAmount: z.float32().exactOptional().openapi({ example: 1005.63 }),
          TotalGrossAmount: z.float32().exactOptional().openapi({ example: 1548.63 }),
          Vacation: z.float32().exactOptional().openapi({ example: 20.5 }),
          VariableGrossAmount: z.float32().exactOptional().openapi({ example: 132.63 }),
        })
        .openapi({ required: [] }),
    },
  },
}

const ModifyPersonRequestBody = {
  description: 'Person to modify',
  content: {
    'application/json': {
      schema: z
        .object({
          Address: z
            .object({
              City: z.string().exactOptional().openapi({ example: 'Paris' }),
              Complement: z.string().exactOptional().openapi({ example: 'batiment A' }),
              Country: z.string().exactOptional().openapi({ example: 'France' }),
              Street: z.string().exactOptional().openapi({ example: '2, rue du chateau' }),
              ZipCode: z.string().exactOptional().openapi({ example: '75001' }),
            })
            .exactOptional()
            .openapi({ required: [] }),
          ArchivalDate: z.string().exactOptional().openapi({ example: '20160203' }),
          Birth: z
            .object({
              Date: z.int().exactOptional().openapi({ example: 19671231 }),
              Place: z.string().exactOptional().openapi({ example: 'Lille' }),
            })
            .exactOptional()
            .openapi({ required: [] }),
          Comment: z.string().exactOptional().openapi({ example: 'my brother' }),
          Email: z.string().exactOptional().openapi({ example: 'bertrand@monmail.com' }),
          FirstName: z.string().exactOptional().openapi({ example: 'Bertrand' }),
          Mobile: z.string().exactOptional().openapi({ example: '+33606060606' }),
          Name: z.string().exactOptional().openapi({ example: 'Dupond' }),
          Sex: z.enum(['male', 'female']).exactOptional().openapi({ example: 'male' }),
        })
        .openapi({ required: [] }),
    },
  },
  required: true,
}

const ModifyPlayerRequestBody = {
  description: 'Person to modify',
  content: {
    'application/json': {
      schema: z
        .object({
          ClientManagement: z.enum(['no', 'manager', 'adn']).exactOptional(),
          IsAdmin: z.boolean().exactOptional().openapi({ example: true }),
          Player: z
            .enum(['guest', 'owner', 'manager', 'assistant', 'collaborator'])
            .openapi({ example: 'guest' }),
          PlayerEnd: z.string().exactOptional().openapi({ example: '20210203' }),
        })
        .openapi({ required: ['Player'] }),
    },
  },
  required: true,
}

const ModifyPortfolioRequestBody = {
  description: 'Portfolio to modify',
  content: {
    'application/json': {
      schema: z
        .object({
          Apply: z.boolean().exactOptional().openapi({ example: true }),
          Groups: z
            .union([
              z.literal('tax'),
              z.literal('wealth management'),
              z.literal('social'),
              z.literal('social manager'),
              z.literal('purchases'),
              z.literal('sales'),
              z.literal('legal'),
              z.literal('accounting'),
            ])
            .exactOptional()
            .openapi({ example: ['social', 'legal'] }),
          IsAdmin: z.boolean().exactOptional().openapi({ example: false }),
          Role: z
            .enum(['collaborator', 'assistant', 'empty'])
            .exactOptional()
            .openapi({ example: 'collaborator' }),
        })
        .openapi({ required: [] }),
    },
  },
  required: true,
}

const ModifyProfessionalVehicleRequestBody = {
  description: 'Professional vehicle to modify (except name, class and archivaldate)',
  content: {
    'application/json': {
      schema: z
        .object({
          About: z.string().exactOptional().openapi({ example: '<b> Mon premier dossier </b>' }),
          Brand: z.string().exactOptional().openapi({ example: 'Renault' }),
          Comment: z.string().exactOptional().openapi({ example: 'Peugeot Lyon' }),
          CompanyTax: z.boolean().exactOptional().openapi({ example: true }),
          DateIn: z.string().exactOptional().openapi({ example: '20201802' }),
          DateOut: z.string().exactOptional().openapi({ example: '20201802' }),
          Designation: z.string().exactOptional().openapi({ example: 'peugeot siège' }),
          Home: z.boolean().exactOptional().openapi({ example: 'yes' }),
          Keywords: z
            .array(z.string())
            .exactOptional()
            .openapi({ example: ['paris', 'clio'] }),
          Level: z
            .enum(['confidential', 'regular', 'public'])
            .exactOptional()
            .openapi({ example: 'confidential' }),
          Model: z.string().exactOptional().openapi({ example: 'Clio' }),
          RegistrationDate: z.string().exactOptional().openapi({ example: '20181231' }),
          RegistrationNumber: z.string().exactOptional().openapi({ example: 'AA001AA' }),
          Type: z.string().exactOptional().openapi({ example: 'car' }),
          Value: z.number().exactOptional().openapi({ example: 1500.23 }),
        })
        .openapi({ required: [] }),
    },
  },
  required: true,
}

const ModifyProfileRequestBody = {
  description: 'Profile to add',
  content: {
    'application/json': {
      schema: z
        .object({
          Birth: z
            .object({
              City: z.string().exactOptional().openapi({ example: 'Créteil' }),
              Country: z.string().exactOptional().openapi({ example: 'FR' }),
              Date: z.string().exactOptional().openapi({ example: '19800101' }),
              ZipCode: z.string().exactOptional().openapi({ example: '94000' }),
            })
            .exactOptional()
            .openapi({ required: [] }),
          BirthName: z.string().exactOptional().openapi({ example: 'Dupond' }),
          Email: z.string().exactOptional().openapi({ example: 'paule@durand.fr' }),
          FirstName: z.string().exactOptional().openapi({ example: 'Paule' }),
          IDFile: z
            .object({
              Content64Encoded: z.string().exactOptional().openapi({ example: 'PIHFPAH20FBIA=' }),
              Name: z.string().exactOptional().openapi({ example: 'id.png' }),
            })
            .exactOptional()
            .openapi({ required: [] }),
          Name: z.string().exactOptional().openapi({ example: 'Durand' }),
          Sex: z.enum(['male', 'female']).exactOptional(),
        })
        .openapi({ required: [] }),
    },
    'multipart/form-data': {
      schema: z
        .object({
          Birth: z
            .object({
              City: z.string().exactOptional().openapi({ example: 'Créteil' }),
              Country: z.string().exactOptional().openapi({ example: 'France' }),
              Date: z.string().exactOptional().openapi({ example: '19800101' }),
              ZipCode: z.string().exactOptional().openapi({ example: '94000' }),
            })
            .exactOptional()
            .openapi({ required: [] }),
          BirthName: z.string().exactOptional().openapi({ example: 'Dupond' }),
          Email: z.string().exactOptional().openapi({ example: 'paule@durand.fr' }),
          FirstName: z.string().exactOptional().openapi({ example: 'Paule' }),
          IDFile: z.file().exactOptional().openapi({ type: 'string', format: 'binary' }),
          Name: z.string().exactOptional().openapi({ example: 'Durand' }),
          Sex: z.enum(['male', 'female']).exactOptional(),
        })
        .openapi({ required: [] }),
    },
  },
  required: true,
}

const ModifyProviderRequestBody = {
  description: 'Provider to modify (except name, class and archivaldate)',
  content: {
    'application/json': {
      schema: z
        .object({
          About: z.string().exactOptional().openapi({ example: '<b> Mon premier dossier </b>' }),
          Comment: z.string().exactOptional().openapi({ example: 'pieces company' }),
          Designation: z.string().exactOptional().openapi({ example: 'client pièces détachées' }),
          End: z.string().exactOptional().openapi({ example: '20190101' }),
          Home: z.boolean().exactOptional().openapi({ example: 'yes' }),
          Keywords: z
            .array(z.string())
            .exactOptional()
            .openapi({ example: ['paris', 'comptabilité'] }),
          Level: z
            .enum(['confidential', 'regular', 'public'])
            .exactOptional()
            .openapi({ example: 'confidential' }),
          ProviderNumber: z.string().exactOptional().openapi({ example: '13587449420F' }),
          Start: z.string().exactOptional().openapi({ example: '20180630' }),
        })
        .openapi({ required: [] }),
    },
  },
  required: true,
}

const ModifyReqStatusRequestBody = {
  description: 'Status to modify',
  content: {
    'application/json': {
      schema: z
        .object({
          Status: z
            .enum(['waiting', 'ended', 'validated'])
            .exactOptional()
            .openapi({ example: 'waiting' }),
        })
        .openapi({ required: [] }),
    },
  },
  required: true,
}

const ModifySocialContractRequestBody = {
  description: 'A social contract to modify',
  content: {
    'application/json': {
      schema: z
        .object({
          ContractDate: z.string().exactOptional().openapi({ example: '20190202' }),
          ContractDuration: z.string().exactOptional().openapi({ example: '6 mois' }),
          ContractualChange: z.string().exactOptional().openapi({ example: 'augmentation' }),
          Position: z.string().exactOptional().openapi({ example: 'cadre' }),
          WageDevelopments: z.float32().exactOptional().openapi({ example: 1548.63 }),
        })
        .openapi({ required: [] }),
    },
  },
}

const ModifySocialDeclarationRequestBody = {
  description: 'A  Social Declaration to modify',
  content: {
    'application/json': {
      schema: z
        .object({
          Amount: z.float32().exactOptional().openapi({ example: 132.63 }),
          DeclarationDate: z.string().exactOptional().openapi({ example: '20160801' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const ModifySocialRegimeRequestBody = {
  description: 'Social Regime to modify (except name, class and archivaldate)',
  content: {
    'application/json': {
      schema: z
        .object({
          About: z.string().exactOptional().openapi({ example: '<b> Mon premier dossier </b>' }),
          Comment: z.string().exactOptional().openapi({ example: 'pieces company' }),
          Designation: z.string().exactOptional().openapi({ example: 'client pièces détachées' }),
          End: z.string().exactOptional().openapi({ example: '20190101' }),
          Home: z.boolean().exactOptional().openapi({ example: 'yes' }),
          Keywords: z
            .array(z.string())
            .exactOptional()
            .openapi({ example: ['paris', 'comptabilité'] }),
          Level: z
            .enum(['confidential', 'regular', 'public'])
            .exactOptional()
            .openapi({ example: 'confidential' }),
          Periodicity: z
            .enum(['monthly', 'quarterly', 'half-yearly', 'annual', 'null'])
            .exactOptional()
            .openapi({ example: 'monthly' }),
          Start: z.string().exactOptional().openapi({ example: '20180630' }),
          Type: z
            .enum(['mandatory', 'optional', 'null'])
            .exactOptional()
            .openapi({ example: 'mandatory' }),
        })
        .openapi({ required: [] }),
    },
  },
  required: true,
}

const ModifySpaceRequestBody = {
  description: 'Space to modify (except private)',
  content: {
    'application/json': {
      schema: z
        .object({
          Logo: z
            .object({
              Content64Encoded: z.string().exactOptional().openapi({ example: 'NIFHAZFA07GA=' }),
              Name: z.string().exactOptional().openapi({ example: 'toto.png' }),
            })
            .exactOptional()
            .openapi({ required: [] }),
          Name: z.string().exactOptional().openapi({ example: 'Mon Entreprise' }),
          TemplateSpaceId: z.string().exactOptional().openapi({ example: 'PHAOH8486' }),
        })
        .openapi({ required: [] }),
    },
  },
  required: true,
}

const ModifyTaxContractRequestBody = {
  description: 'Tax contract to modify (except name, class and archivaldate)',
  content: {
    'application/json': {
      schema: z
        .object({
          About: z.string().exactOptional().openapi({ example: '<b> Mon premier dossier </b>' }),
          ArchivalDate: z.string().exactOptional().openapi({ example: '20160203' }),
          Comment: z.string().exactOptional().openapi({ example: 'pieces company' }),
          Designation: z.string().exactOptional().openapi({ example: 'taxes foncières' }),
          End: z.string().exactOptional().openapi({ example: '20190101' }),
          Home: z.boolean().exactOptional().openapi({ example: 'yes' }),
          Keywords: z
            .array(z.string())
            .exactOptional()
            .openapi({ example: ['paris', 'comptabilité'] }),
          Level: z
            .enum(['confidential', 'regular', 'public'])
            .exactOptional()
            .openapi({ example: 'confidential' }),
          Start: z.string().exactOptional().openapi({ example: '20180630' }),
        })
        .openapi({ required: [] }),
    },
  },
  required: true,
}

const ModifyVATDeclarationRequestBody = {
  description: 'A VAT Declaration to modify',
  content: {
    'application/json': {
      schema: z
        .object({
          Begin: z.string().exactOptional().openapi({ example: '20160801' }),
          CollectedVAT: z.float32().exactOptional().openapi({ example: 1548.63 }),
          CreditVAT: z.float32().exactOptional().openapi({ example: 400.5 }),
          DeductibleVAT: z.float32().exactOptional().openapi({ example: 20.5 }),
          End: z.string().exactOptional().openapi({ example: '20160831' }),
          ExemptTurnover: z.float32().exactOptional().openapi({ example: 132.63 }),
          Number: z.string().exactOptional().openapi({ example: '153126' }),
          PayableVAT: z.float32().exactOptional().openapi({ example: 2000.5 }),
          TaxableTurnover: z.float32().exactOptional().openapi({ example: 1352.63 }),
        })
        .openapi({ required: [] }),
    },
  },
}

const OtherTaxRequestBody = {
  description:
    'Other tax declaration to add (either (Reference,DocumentId) either (File,Name,Content64Encoded,Title,Reference) is mandatory)',
  content: {
    'application/json': {
      schema: z
        .xor([
          z
            .object({
              Amount: z.float32().exactOptional().openapi({ example: 132.63 }),
              DeclarationDate: z.string().exactOptional().openapi({ example: '20160801' }),
              DocumentId: z.string().exactOptional().openapi({ example: 'PBUFBAUBF1531' }),
              Reference: z.string().exactOptional().openapi({ example: 'décla CFE' }),
            })
            .openapi({ required: [] }),
          z
            .object({
              Accounting: z
                .object({
                  AccountedOn: z.string().exactOptional().openapi({ example: '20181202' }),
                  Workbook: z
                    .enum([
                      'customer',
                      'provider',
                      'bank',
                      'cashWoucher',
                      'fiscal',
                      'insurance',
                      'social',
                      'other',
                      'permanent',
                    ])
                    .exactOptional()
                    .openapi({ example: 'fiscal' }),
                  YearMonth: z.string().exactOptional().openapi({ example: 201902 }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              Amount: z.float32().exactOptional().openapi({ example: 132.63 }),
              Author: z.string().exactOptional().openapi({ example: 'Antoine Dupond' }),
              Code: z.string().exactOptional().openapi({ example: 'COD' }),
              Comment: z.string().exactOptional().openapi({ example: 'my document' }),
              Date: z.string().exactOptional().openapi({ example: '20161203' }),
              DeclarationDate: z.string().exactOptional().openapi({ example: '20160801' }),
              File: z
                .object({
                  Content64Encoded: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'gjgjJ9FJA829H9HA18B' }),
                  Name: z.string().exactOptional().openapi({ example: 'MonDocument.pdf' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              Reference: z.string().exactOptional().openapi({ example: 'décla CFE' }),
              Title: z.string().exactOptional().openapi({ example: 'Facture décembre' }),
            })
            .openapi({ required: [] }),
        ])
        .openapi({ required: ['Title', 'File', 'Name', 'Content64Encoded', 'DocumentId'] }),
    },
    'multipart/form-data': {
      schema: z
        .object({
          Accounting: z
            .object({
              AccountedOn: z.string().exactOptional().openapi({ example: '20181202' }),
              Workbook: z
                .enum([
                  'customer',
                  'provider',
                  'bank',
                  'cashWoucher',
                  'fiscal',
                  'insurance',
                  'social',
                  'other',
                  'permanent',
                ])
                .exactOptional()
                .openapi({ example: 'fiscal' }),
              YearMonth: z.string().exactOptional().openapi({ example: 201902 }),
            })
            .exactOptional()
            .openapi({ required: [] }),
          Amount: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.float32(),
            )
            .exactOptional()
            .openapi({ example: 132.63 }),
          Author: z.string().exactOptional().openapi({ example: 'Antoine Dupond' }),
          Code: z.string().exactOptional().openapi({ example: 'COD' }),
          Comment: z.string().exactOptional().openapi({ example: 'my document' }),
          Date: z.string().exactOptional().openapi({ example: '20161203' }),
          DeclarationDate: z.string().exactOptional().openapi({ example: '20160801' }),
          File: z.file().exactOptional().openapi({ type: 'string', format: 'binary' }),
          Reference: z.string().exactOptional().openapi({ example: 'décla CFE' }),
          Title: z.string().exactOptional().openapi({ example: 'Facture décembre' }),
        })
        .openapi({ required: [] })
        .openapi({ required: ['Title', 'File', 'Name'] }),
    },
  },
  required: true,
}

const PSpaceRequestBody = {
  description: 'role and groups to apply to the managed private space',
  content: {
    'application/json': {
      schema: z
        .object({
          Groups: z
            .union([z.literal('tax'), z.literal('wealth management'), z.literal('legal')])
            .exactOptional()
            .openapi({ example: ['tax', 'legal'] }),
          Role: z
            .enum(['collaborator', 'manager'])
            .exactOptional()
            .openapi({ example: 'collaborator' }),
        })
        .openapi({ required: [] })
        .openapi({ required: ['Role'] }),
    },
  },
  required: true,
}

const PasswordRequestBody = {
  description: 'Password to write',
  content: {
    'application/json': {
      schema: z
        .object({
          Comment: z.string().exactOptional().openapi({ example: 'mon compte google' }),
          Designation: z.string().exactOptional().openapi({ example: 'compte google' }),
          Ident: z.string().exactOptional().openapi({ example: 'test' }),
          Link: z.string().exactOptional().openapi({ example: 'www.google.fr' }),
          Password: z.string().exactOptional().openapi({ example: 'azerty' }),
        })
        .openapi({ required: [] })
        .openapi({ required: ['Designation'] }),
    },
  },
  required: true,
}

const PaySlipRequestBody = {
  description:
    'Payslip to add (either DocumentId either (File,Name,Content64Encoded,Title) is mandatory)',
  content: {
    'application/json': {
      schema: z
        .xor([
          z
            .object({
              Begin: z.string().exactOptional().openapi({ example: '20160801' }),
              DocumentId: z.string().exactOptional().openapi({ example: 'PBUFBAUBF1531' }),
              EmployeeContributions: z.float32().exactOptional().openapi({ example: 2000.5 }),
              EmployerContributions: z.float32().exactOptional().openapi({ example: 400.5 }),
              End: z.string().exactOptional().openapi({ example: '20160831' }),
              FixedGrossAmount: z.float32().exactOptional().openapi({ example: 1352.63 }),
              NetAmount: z.float32().exactOptional().openapi({ example: 1005.63 }),
              TotalGrossAmount: z.float32().exactOptional().openapi({ example: 1548.63 }),
              Vacation: z.float32().exactOptional().openapi({ example: 20.5 }),
              VariableGrossAmount: z.float32().exactOptional().openapi({ example: 132.63 }),
            })
            .openapi({ required: [] }),
          z
            .object({
              Accounting: z
                .object({
                  AccountedOn: z.string().exactOptional().openapi({ example: '20181202' }),
                  Workbook: z
                    .enum([
                      'customer',
                      'provider',
                      'bank',
                      'cashWoucher',
                      'fiscal',
                      'insurance',
                      'social',
                      'other',
                      'permanent',
                    ])
                    .exactOptional()
                    .openapi({ example: 'fiscal' }),
                  YearMonth: z.string().exactOptional().openapi({ example: 201902 }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              Author: z.string().exactOptional().openapi({ example: 'Antoine Dupond' }),
              Begin: z.string().exactOptional().openapi({ example: '20160801' }),
              Code: z.string().exactOptional().openapi({ example: 'COD' }),
              Comment: z.string().exactOptional().openapi({ example: 'my document' }),
              Date: z.string().exactOptional().openapi({ example: '20161203' }),
              EmployeeContributions: z.float32().exactOptional().openapi({ example: 2000.5 }),
              EmployerContributions: z.float32().exactOptional().openapi({ example: 400.5 }),
              End: z.string().exactOptional().openapi({ example: '20160831' }),
              File: z
                .object({
                  Content64Encoded: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'gjgjJ9FJA829H9HA18B' }),
                  Name: z.string().exactOptional().openapi({ example: 'MonDocument.pdf' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              FixedGrossAmount: z.float32().exactOptional().openapi({ example: 1352.63 }),
              NetAmount: z.float32().exactOptional().openapi({ example: 1005.63 }),
              Title: z.string().exactOptional().openapi({ example: 'Facture décembre' }),
              TotalGrossAmount: z.float32().exactOptional().openapi({ example: 1548.63 }),
              Vacation: z.float32().exactOptional().openapi({ example: 20.5 }),
              VariableGrossAmount: z.float32().exactOptional().openapi({ example: 132.63 }),
            })
            .openapi({ required: [] }),
        ])
        .openapi({ required: ['Title', 'File', 'Name', 'Content64Encoded', 'DocumentId'] }),
    },
    'multipart/form-data': {
      schema: z
        .object({
          Accounting: z
            .object({
              AccountedOn: z.string().exactOptional().openapi({ example: '20181202' }),
              Workbook: z
                .enum([
                  'customer',
                  'provider',
                  'bank',
                  'cashWoucher',
                  'fiscal',
                  'insurance',
                  'social',
                  'other',
                  'permanent',
                ])
                .exactOptional()
                .openapi({ example: 'fiscal' }),
              YearMonth: z.string().exactOptional().openapi({ example: 201902 }),
            })
            .exactOptional()
            .openapi({ required: [] }),
          Author: z.string().exactOptional().openapi({ example: 'Antoine Dupond' }),
          Begin: z.string().exactOptional().openapi({ example: '20160801' }),
          Code: z.string().exactOptional().openapi({ example: 'COD' }),
          Comment: z.string().exactOptional().openapi({ example: 'my document' }),
          Date: z.string().exactOptional().openapi({ example: '20161203' }),
          EmployeeContributions: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.float32(),
            )
            .exactOptional()
            .openapi({ example: 2000.5 }),
          EmployerContributions: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.float32(),
            )
            .exactOptional()
            .openapi({ example: 400.5 }),
          End: z.string().exactOptional().openapi({ example: '20160831' }),
          File: z.file().exactOptional().openapi({ type: 'string', format: 'binary' }),
          FixedGrossAmount: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.float32(),
            )
            .exactOptional()
            .openapi({ example: 1352.63 }),
          NetAmount: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.float32(),
            )
            .exactOptional()
            .openapi({ example: 1005.63 }),
          Title: z.string().exactOptional().openapi({ example: 'Facture décembre' }),
          TotalGrossAmount: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.float32(),
            )
            .exactOptional()
            .openapi({ example: 1548.63 }),
          Vacation: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.float32(),
            )
            .exactOptional()
            .openapi({ example: 20.5 }),
          VariableGrossAmount: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.float32(),
            )
            .exactOptional()
            .openapi({ example: 132.63 }),
        })
        .openapi({ required: [] })
        .openapi({ required: ['Title', 'File', 'Name'] }),
    },
  },
  required: true,
}

const PaySlipsRequestBody = {
  description: 'Payslips to add',
  content: {
    'application/json': {
      schema: z
        .array(
          PaySlipSchema.and(
            z
              .object({
                File: z
                  .object({
                    Content64Encoded: z
                      .string()
                      .exactOptional()
                      .openapi({ example: 'gjgjJ9FJA829H9HA18B' }),
                    Name: z.string().exactOptional().openapi({ example: 'Ma fiche de salaire' }),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
              })
              .openapi({ required: [] }),
          ),
        )
        .openapi({ required: ['Title', 'File'] }),
    },
    'multipart/form-data': {
      schema: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            DocumentSchema.and(
              z
                .object({
                  Begin: z.string().exactOptional().openapi({ example: '20160801' }),
                  EmployeeContributions: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.float32(),
                    )
                    .exactOptional()
                    .openapi({ example: 2000.5 }),
                  EmployerContributions: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.float32(),
                    )
                    .exactOptional()
                    .openapi({ example: 400.5 }),
                  End: z.string().exactOptional().openapi({ example: '20160831' }),
                  FixedGrossAmount: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.float32(),
                    )
                    .exactOptional()
                    .openapi({ example: 1352.63 }),
                  NetAmount: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.float32(),
                    )
                    .exactOptional()
                    .openapi({ example: 1005.63 }),
                  TotalGrossAmount: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.float32(),
                    )
                    .exactOptional()
                    .openapi({ example: 1548.63 }),
                  Vacation: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.float32(),
                    )
                    .exactOptional()
                    .openapi({ example: 20.5 }),
                  VariableGrossAmount: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.float32(),
                    )
                    .exactOptional()
                    .openapi({ example: 132.63 }),
                })
                .openapi({ required: [] }),
            ).and(
              z
                .object({
                  File: z.file().exactOptional().openapi({ type: 'string', format: 'binary' }),
                })
                .openapi({ required: [] }),
            ),
          ),
        )
        .openapi({ required: ['Title', 'File'] }),
    },
  },
  required: true,
}

const PayrollRequestBody = {
  description: 'Payroll to add or to generate',
  content: {
    'application/json': {
      schema: z
        .xor([
          z
            .object({
              Begin: z.string().exactOptional().openapi({ example: '20160801' }),
              DocumentId: z.string().exactOptional().openapi({ example: 'PBUFBAUBF1531' }),
              EmployeeContributions: z.float32().exactOptional().openapi({ example: 1352.63 }),
              EmployerContributions: z.float32().exactOptional().openapi({ example: 132.63 }),
              End: z.string().exactOptional().openapi({ example: '20160831' }),
              NetAmount: z.float32().exactOptional().openapi({ example: 1005.63 }),
              TotalGrossAmount: z.float32().exactOptional().openapi({ example: 1548.63 }),
            })
            .openapi({ required: [] }),
          z
            .object({
              Accounting: z
                .object({
                  AccountedOn: z.string().exactOptional().openapi({ example: '20181202' }),
                  Workbook: z
                    .enum([
                      'customer',
                      'provider',
                      'bank',
                      'cashWoucher',
                      'fiscal',
                      'insurance',
                      'social',
                      'other',
                      'permanent',
                    ])
                    .exactOptional()
                    .openapi({ example: 'fiscal' }),
                  YearMonth: z.string().exactOptional().openapi({ example: 201902 }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              Author: z.string().exactOptional().openapi({ example: 'Antoine Dupond' }),
              Begin: z.string().exactOptional().openapi({ example: '20160801' }),
              Code: z.string().exactOptional().openapi({ example: 'COD' }),
              Comment: z.string().exactOptional().openapi({ example: 'my document' }),
              Date: z.string().exactOptional().openapi({ example: '20161203' }),
              EmployeeContributions: z.float32().exactOptional().openapi({ example: 1352.63 }),
              EmployerContributions: z.float32().exactOptional().openapi({ example: 132.63 }),
              End: z.string().exactOptional().openapi({ example: '20160831' }),
              File: z
                .object({
                  Content64Encoded: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'gjgjJ9FJA829H9HA18B' }),
                  Name: z.string().exactOptional().openapi({ example: 'MonDocument.pdf' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              NetAmount: z.float32().exactOptional().openapi({ example: 1005.63 }),
              Title: z.string().exactOptional().openapi({ example: 'Facture décembre' }),
              TotalGrossAmount: z.float32().exactOptional().openapi({ example: 1548.63 }),
            })
            .openapi({ required: [] }),
        ])
        .openapi({ required: ['Title', 'File', 'Name', 'Content64Encoded', 'DocumentId'] }),
    },
    'multipart/form-data': {
      schema: z
        .object({
          Accounting: z
            .object({
              AccountedOn: z.string().exactOptional().openapi({ example: '20181202' }),
              Workbook: z
                .enum([
                  'customer',
                  'provider',
                  'bank',
                  'cashWoucher',
                  'fiscal',
                  'insurance',
                  'social',
                  'other',
                  'permanent',
                ])
                .exactOptional()
                .openapi({ example: 'fiscal' }),
              YearMonth: z.string().exactOptional().openapi({ example: 201902 }),
            })
            .exactOptional()
            .openapi({ required: [] }),
          Author: z.string().exactOptional().openapi({ example: 'Antoine Dupond' }),
          Begin: z.string().exactOptional().openapi({ example: '20160801' }),
          Code: z.string().exactOptional().openapi({ example: 'COD' }),
          Comment: z.string().exactOptional().openapi({ example: 'my document' }),
          Date: z.string().exactOptional().openapi({ example: '20161203' }),
          EmployeeContributions: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.float32(),
            )
            .exactOptional()
            .openapi({ example: 1352.63 }),
          EmployerContributions: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.float32(),
            )
            .exactOptional()
            .openapi({ example: 132.63 }),
          End: z.string().exactOptional().openapi({ example: '20160831' }),
          File: z.file().exactOptional().openapi({ type: 'string', format: 'binary' }),
          NetAmount: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.float32(),
            )
            .exactOptional()
            .openapi({ example: 1005.63 }),
          Title: z.string().exactOptional().openapi({ example: 'Facture décembre' }),
          TotalGrossAmount: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.float32(),
            )
            .exactOptional()
            .openapi({ example: 1548.63 }),
        })
        .openapi({ required: [] })
        .openapi({ required: ['Title', 'File', 'Name'] }),
    },
  },
  required: true,
}

const PersonRequestBody = {
  description: 'Person to add',
  content: {
    'application/json': {
      schema: z
        .object({
          Address: z
            .object({
              City: z.string().exactOptional().openapi({ example: 'Paris' }),
              Complement: z.string().exactOptional().openapi({ example: 'batiment A' }),
              Country: z.string().exactOptional().openapi({ example: 'France' }),
              Street: z.string().exactOptional().openapi({ example: '2, rue du chateau' }),
              ZipCode: z.string().exactOptional().openapi({ example: '75001' }),
            })
            .exactOptional()
            .openapi({ required: [] }),
          ArchivalDate: z.string().exactOptional().openapi({ example: '20160203' }),
          Birth: z
            .object({
              Date: z.int().exactOptional().openapi({ example: 19671231 }),
              Place: z.string().exactOptional().openapi({ example: 'Lille' }),
            })
            .exactOptional()
            .openapi({ required: [] }),
          Comment: z.string().exactOptional().openapi({ example: 'my brother' }),
          Email: z.string().exactOptional().openapi({ example: 'bertrand@monmail.com' }),
          FirstName: z.string().exactOptional().openapi({ example: 'Bertrand' }),
          Mobile: z.string().exactOptional().openapi({ example: '+33606060606' }),
          Name: z.string().exactOptional().openapi({ example: 'Dupond' }),
          Sex: z.enum(['male', 'female']).exactOptional().openapi({ example: 'male' }),
        })
        .openapi({ required: [] })
        .openapi({ required: ['Name', 'FirstName', 'Sex'] }),
    },
  },
  required: true,
}

const PortfolioRequestBody = {
  description: 'Portfolio to add (except Class and Name)',
  content: {
    'application/json': {
      schema: z
        .object({
          About: z.string().exactOptional().openapi({ example: '<b> Mon premier dossier </b>' }),
          ArchivalDate: z.string().exactOptional().openapi({ example: '20160203' }),
          Designation: z.string().exactOptional().openapi({ example: 'My Portfolio' }),
          Home: z.boolean().exactOptional().openapi({ example: 'yes' }),
          Keywords: z
            .array(z.string())
            .exactOptional()
            .openapi({ example: ['paris', 'comptabilité'] }),
          Level: z
            .enum(['confidential', 'regular', 'public'])
            .exactOptional()
            .openapi({ example: 'confidential' }),
          Name: z.string().exactOptional().openapi({ example: 'Dupond' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const ProfessionalVehicleRequestBody = {
  description: 'Professional vehicle to add',
  content: {
    'application/json': {
      schema: z
        .object({
          About: z.string().exactOptional().openapi({ example: '<b> Mon premier dossier </b>' }),
          Brand: z.string().exactOptional().openapi({ example: 'Renault' }),
          Comment: z.string().exactOptional().openapi({ example: 'Peugeot Lyon' }),
          CompanyTax: z.boolean().exactOptional().openapi({ example: true }),
          DateIn: z.string().exactOptional().openapi({ example: '20201802' }),
          DateOut: z.string().exactOptional().openapi({ example: '20201802' }),
          Designation: z.string().exactOptional().openapi({ example: 'peugeot siège' }),
          Home: z.boolean().exactOptional().openapi({ example: 'yes' }),
          Keywords: z
            .array(z.string())
            .exactOptional()
            .openapi({ example: ['paris', 'clio'] }),
          Level: z
            .enum(['confidential', 'regular', 'public'])
            .exactOptional()
            .openapi({ example: 'confidential' }),
          Model: z.string().exactOptional().openapi({ example: 'Clio' }),
          RegistrationDate: z.string().exactOptional().openapi({ example: '20181231' }),
          RegistrationNumber: z.string().exactOptional().openapi({ example: 'AA001AA' }),
          Type: z.string().exactOptional().openapi({ example: 'car' }),
          Value: z.number().exactOptional().openapi({ example: 1500.23 }),
        })
        .openapi({ required: [] })
        .openapi({ required: ['Designation'] }),
    },
  },
  required: true,
}

const ProfileRequestBody = {
  description: 'Profile to add',
  content: {
    'application/json': {
      schema: z
        .object({
          Birth: z
            .object({
              City: z.string().exactOptional().openapi({ example: 'Créteil' }),
              Country: z.string().exactOptional().openapi({ example: 'FR' }),
              Date: z.string().exactOptional().openapi({ example: '19800101' }),
              ZipCode: z.string().exactOptional().openapi({ example: '94000' }),
            })
            .exactOptional()
            .openapi({ required: [] }),
          BirthName: z.string().exactOptional().openapi({ example: 'Dupond' }),
          Email: z.string().exactOptional().openapi({ example: 'paule@durand.fr' }),
          FirstName: z.string().exactOptional().openapi({ example: 'Paule' }),
          IDFile: z
            .object({
              Content64Encoded: z.string().exactOptional().openapi({ example: 'PIHFPAH20FBIA=' }),
              Name: z.string().exactOptional().openapi({ example: 'id.png' }),
            })
            .exactOptional()
            .openapi({ required: [] }),
          Name: z.string().exactOptional().openapi({ example: 'Durand' }),
          Sex: z.enum(['male', 'female']).exactOptional(),
        })
        .openapi({ required: [] })
        .openapi({ required: ['Name', 'FirstName', 'Email', 'Sex', 'File', 'BirthName', 'Birth'] }),
    },
    'multipart/form-data': {
      schema: z
        .object({
          Birth: z
            .object({
              City: z.string().exactOptional().openapi({ example: 'Créteil' }),
              Country: z.string().exactOptional().openapi({ example: 'France' }),
              Date: z.string().exactOptional().openapi({ example: '19800101' }),
              ZipCode: z.string().exactOptional().openapi({ example: '94000' }),
            })
            .exactOptional()
            .openapi({ required: [] }),
          BirthName: z.string().exactOptional().openapi({ example: 'Dupond' }),
          Email: z.string().exactOptional().openapi({ example: 'paule@durand.fr' }),
          FirstName: z.string().exactOptional().openapi({ example: 'Paule' }),
          IDFile: z.file().exactOptional().openapi({ type: 'string', format: 'binary' }),
          Name: z.string().exactOptional().openapi({ example: 'Durand' }),
          Sex: z.enum(['male', 'female']).exactOptional(),
        })
        .openapi({ required: [] })
        .openapi({ required: ['Name', 'FirstName', 'Email', 'Sex', 'File', 'BirthName', 'Birth'] }),
    },
  },
  required: true,
}

const ProviderRequestBody = {
  description: 'Provider to add (except name, class and archivaldate)',
  content: {
    'application/json': {
      schema: z
        .object({
          About: z.string().exactOptional().openapi({ example: '<b> Mon premier dossier </b>' }),
          Comment: z.string().exactOptional().openapi({ example: 'pieces company' }),
          Designation: z.string().exactOptional().openapi({ example: 'client pièces détachées' }),
          End: z.string().exactOptional().openapi({ example: '20190101' }),
          Home: z.boolean().exactOptional().openapi({ example: 'yes' }),
          Keywords: z
            .array(z.string())
            .exactOptional()
            .openapi({ example: ['paris', 'comptabilité'] }),
          Level: z
            .enum(['confidential', 'regular', 'public'])
            .exactOptional()
            .openapi({ example: 'confidential' }),
          ProviderNumber: z.string().exactOptional().openapi({ example: '13587449420F' }),
          Start: z.string().exactOptional().openapi({ example: '20180630' }),
        })
        .openapi({ required: [] }),
    },
  },
  required: true,
}

const RegistrationRequestBody = {
  description: 'code and secret to accept the invitation',
  content: {
    'application/json': {
      schema: z
        .object({
          Code: z.string().exactOptional().openapi({ example: 'OJFOA' }),
          Secret: z.string().exactOptional().openapi({ example: 123456 }),
        })
        .openapi({ required: [] }),
    },
  },
  required: true,
}

const RequiredDocumentRequestBody = {
  description: 'Required Document to add',
  content: {
    'application/json': {
      schema: z
        .object({
          File: z
            .object({
              Content64Encoded: z
                .string()
                .exactOptional()
                .openapi({ example: 'gjgjJ9FJA829H9HA18B' }),
              Name: z.string().exactOptional().openapi({ example: 'MonDocument.pdf' }),
            })
            .exactOptional()
            .openapi({ required: [] }),
        })
        .openapi({ required: [] })
        .openapi({ required: ['File', 'Name', 'Content64Encoded'] }),
    },
    'multipart/form-data': {
      schema: z
        .object({
          File: z.file().exactOptional().openapi({ type: 'string', format: 'binary' }),
          Name: z.string().exactOptional().openapi({ example: 'Facture décembre' }),
        })
        .openapi({ required: [] })
        .openapi({ required: ['Name', 'File'] }),
    },
  },
  required: true,
}

const SendInvitationRequestBody = {
  description: 'content of invitation message to send',
  content: {
    'application/json': {
      schema: z
        .object({
          Contact: z.string().exactOptional().openapi({ example: 'Dupond' }),
          Message: z
            .string()
            .exactOptional()
            .openapi({ example: "<p> Bienvenue dans l'espace de l'envtreprise SOCIETE </p>" }),
          Signature: z.string().exactOptional().openapi({ example: 'cordialement' }),
          Subject: z.string().exactOptional().openapi({ example: 'invitation sur le coffre' }),
        })
        .openapi({ required: [] }),
    },
  },
  required: true,
}

const SocialContractRequestBody = {
  description:
    'Social contract to add (either DocumentId either (File,Name,Content64Encoded,Title) is mandatory)',
  content: {
    'application/json': {
      schema: z
        .xor([
          z
            .object({
              ContractDate: z.string().exactOptional().openapi({ example: '20190202' }),
              ContractDuration: z.string().exactOptional().openapi({ example: '6 mois' }),
              ContractualChange: z.string().exactOptional().openapi({ example: 'augmentation' }),
              DocumentId: z.string().exactOptional().openapi({ example: 'PBUFBAUBF1531' }),
              Position: z.string().exactOptional().openapi({ example: 'cadre' }),
              WageDevelopments: z.float32().exactOptional().openapi({ example: 1548.63 }),
            })
            .openapi({ required: [] }),
          z
            .object({
              Accounting: z
                .object({
                  AccountedOn: z.string().exactOptional().openapi({ example: '20181202' }),
                  Workbook: z
                    .enum([
                      'customer',
                      'provider',
                      'bank',
                      'cashWoucher',
                      'fiscal',
                      'insurance',
                      'social',
                      'other',
                      'permanent',
                    ])
                    .exactOptional()
                    .openapi({ example: 'fiscal' }),
                  YearMonth: z.string().exactOptional().openapi({ example: 201902 }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              Author: z.string().exactOptional().openapi({ example: 'Antoine Dupond' }),
              Code: z.string().exactOptional().openapi({ example: 'COD' }),
              Comment: z.string().exactOptional().openapi({ example: 'my document' }),
              ContractDate: z.string().exactOptional().openapi({ example: '20190202' }),
              ContractDuration: z.string().exactOptional().openapi({ example: '6 mois' }),
              ContractualChange: z.string().exactOptional().openapi({ example: 'augmentation' }),
              Date: z.string().exactOptional().openapi({ example: '20161203' }),
              File: z
                .object({
                  Content64Encoded: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'gjgjJ9FJA829H9HA18B' }),
                  Name: z.string().exactOptional().openapi({ example: 'MonDocument.pdf' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              Position: z.string().exactOptional().openapi({ example: 'cadre' }),
              Title: z.string().exactOptional().openapi({ example: 'Facture décembre' }),
              WageDevelopments: z.float32().exactOptional().openapi({ example: 1548.63 }),
            })
            .openapi({ required: [] }),
        ])
        .openapi({ required: ['Title', 'File', 'Name', 'Content64Encoded', 'DocumentId'] }),
    },
    'multipart/form-data': {
      schema: z
        .object({
          Accounting: z
            .object({
              AccountedOn: z.string().exactOptional().openapi({ example: '20181202' }),
              Workbook: z
                .enum([
                  'customer',
                  'provider',
                  'bank',
                  'cashWoucher',
                  'fiscal',
                  'insurance',
                  'social',
                  'other',
                  'permanent',
                ])
                .exactOptional()
                .openapi({ example: 'fiscal' }),
              YearMonth: z.string().exactOptional().openapi({ example: 201902 }),
            })
            .exactOptional()
            .openapi({ required: [] }),
          Author: z.string().exactOptional().openapi({ example: 'Antoine Dupond' }),
          Code: z.string().exactOptional().openapi({ example: 'COD' }),
          Comment: z.string().exactOptional().openapi({ example: 'my document' }),
          ContractDate: z.string().exactOptional().openapi({ example: '20190202' }),
          ContractDuration: z.string().exactOptional().openapi({ example: '6 mois' }),
          ContractualChange: z.string().exactOptional().openapi({ example: 'augmentation' }),
          Date: z.string().exactOptional().openapi({ example: '20161203' }),
          File: z.file().exactOptional().openapi({ type: 'string', format: 'binary' }),
          Position: z.string().exactOptional().openapi({ example: 'cadre' }),
          Title: z.string().exactOptional().openapi({ example: 'Facture décembre' }),
          WageDevelopments: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.float32(),
            )
            .exactOptional()
            .openapi({ example: 1548.63 }),
        })
        .openapi({ required: [] })
        .openapi({ required: ['Title', 'File', 'Name'] }),
    },
  },
  required: true,
}

const SocialDeclarationRequestBody = {
  description:
    'Social declaration to add (either (Reference,DocumentId) either (File,Name,Content64Encoded,Title,Reference) is mandatory)',
  content: {
    'application/json': {
      schema: z
        .xor([
          z
            .object({
              Amount: z.float32().exactOptional().openapi({ example: 132.63 }),
              DeclarationDate: z.string().exactOptional().openapi({ example: '20160801' }),
              DocumentId: z.string().exactOptional().openapi({ example: 'PBUFBAUBF1531' }),
            })
            .openapi({ required: [] }),
          z
            .object({
              Accounting: z
                .object({
                  AccountedOn: z.string().exactOptional().openapi({ example: '20181202' }),
                  Workbook: z
                    .enum([
                      'customer',
                      'provider',
                      'bank',
                      'cashWoucher',
                      'fiscal',
                      'insurance',
                      'social',
                      'other',
                      'permanent',
                    ])
                    .exactOptional()
                    .openapi({ example: 'fiscal' }),
                  YearMonth: z.string().exactOptional().openapi({ example: 201902 }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              Amount: z.float32().exactOptional().openapi({ example: 132.63 }),
              Author: z.string().exactOptional().openapi({ example: 'Antoine Dupond' }),
              Code: z.string().exactOptional().openapi({ example: 'COD' }),
              Comment: z.string().exactOptional().openapi({ example: 'my document' }),
              Date: z.string().exactOptional().openapi({ example: '20161203' }),
              DeclarationDate: z.string().exactOptional().openapi({ example: '20160801' }),
              File: z
                .object({
                  Content64Encoded: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'gjgjJ9FJA829H9HA18B' }),
                  Name: z.string().exactOptional().openapi({ example: 'MonDocument.pdf' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              Title: z.string().exactOptional().openapi({ example: 'Facture décembre' }),
            })
            .openapi({ required: [] }),
        ])
        .openapi({ required: ['Title', 'File', 'Name', 'Content64Encoded', 'DocumentId'] }),
    },
    'multipart/form-data': {
      schema: z
        .object({
          Accounting: z
            .object({
              AccountedOn: z.string().exactOptional().openapi({ example: '20181202' }),
              Workbook: z
                .enum([
                  'customer',
                  'provider',
                  'bank',
                  'cashWoucher',
                  'fiscal',
                  'insurance',
                  'social',
                  'other',
                  'permanent',
                ])
                .exactOptional()
                .openapi({ example: 'fiscal' }),
              YearMonth: z.string().exactOptional().openapi({ example: 201902 }),
            })
            .exactOptional()
            .openapi({ required: [] }),
          Amount: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.float32(),
            )
            .exactOptional()
            .openapi({ example: 132.63 }),
          Author: z.string().exactOptional().openapi({ example: 'Antoine Dupond' }),
          Code: z.string().exactOptional().openapi({ example: 'COD' }),
          Comment: z.string().exactOptional().openapi({ example: 'my document' }),
          Date: z.string().exactOptional().openapi({ example: '20161203' }),
          DeclarationDate: z.string().exactOptional().openapi({ example: '20160801' }),
          File: z.file().exactOptional().openapi({ type: 'string', format: 'binary' }),
          Title: z.string().exactOptional().openapi({ example: 'Facture décembre' }),
        })
        .openapi({ required: [] })
        .openapi({ required: ['Title', 'File', 'Name'] }),
    },
  },
  required: true,
}

const SocialRegimeRequestBody = {
  description: 'SocialRegime to add (except name, class and archivaldate)',
  content: {
    'application/json': {
      schema: z
        .object({
          About: z.string().exactOptional().openapi({ example: '<b> Mon premier dossier </b>' }),
          Comment: z.string().exactOptional().openapi({ example: 'pieces company' }),
          Designation: z.string().exactOptional().openapi({ example: 'client pièces détachées' }),
          End: z.string().exactOptional().openapi({ example: '20190101' }),
          Home: z.boolean().exactOptional().openapi({ example: 'yes' }),
          Keywords: z
            .array(z.string())
            .exactOptional()
            .openapi({ example: ['paris', 'comptabilité'] }),
          Level: z
            .enum(['confidential', 'regular', 'public'])
            .exactOptional()
            .openapi({ example: 'confidential' }),
          Periodicity: z
            .enum(['monthly', 'quarterly', 'half-yearly', 'annual', 'null'])
            .exactOptional()
            .openapi({ example: 'monthly' }),
          Start: z.string().exactOptional().openapi({ example: '20180630' }),
          Type: z
            .enum(['mandatory', 'optional', 'null'])
            .exactOptional()
            .openapi({ example: 'mandatory' }),
        })
        .openapi({ required: [] })
        .openapi({ required: ['Name'] }),
    },
  },
  required: true,
}

const SpaceRequestBody = {
  description: 'Space to add (except private)',
  content: {
    'application/json': {
      schema: z
        .object({
          LegalStatut: z.string().exactOptional().openapi({ example: 'SA' }),
          Logo: z
            .object({
              Content64Encoded: z.string().exactOptional().openapi({ example: 'NIFHAZFA07GA=' }),
              Name: z.string().exactOptional().openapi({ example: 'toto.png' }),
            })
            .exactOptional()
            .openapi({ required: [] }),
          Name: z.string().exactOptional().openapi({ example: 'Mon Entreprise' }),
          RegistrationNumber: z.string().exactOptional().openapi({ example: 5146486846 }),
          TemplateSpaceId: z.string().exactOptional().openapi({ example: 'PKOJOFOFKAOKF' }),
          Type: z
            .enum(['enterprise', 'company', 'association'])
            .exactOptional()
            .openapi({ example: 'company' }),
        })
        .openapi({ required: [] })
        .openapi({ required: ['Name', 'Type'] }),
    },
  },
  required: true,
}

const StatusRequestBody = {
  description: 'Status to add or replace',
  content: {
    'application/json': {
      schema: z
        .object({
          Code: z.string().exactOptional().openapi({ example: 'COD' }),
          Comment: z.string().exactOptional().openapi({ example: 'my first code' }),
          Label: z.string().exactOptional().openapi({ example: 'code 1' }),
        })
        .openapi({ required: [] })
        .openapi({ required: ['Code', 'Label'] }),
    },
  },
  required: true,
}

const TaxContractRequestBody = {
  description: 'Tax contract to add',
  content: {
    'application/json': {
      schema: z
        .object({
          About: z.string().exactOptional().openapi({ example: '<b> Mon premier dossier </b>' }),
          Comment: z.string().exactOptional().openapi({ example: 'ogm of the company' }),
          Designation: z.string().exactOptional().openapi({ example: 'année 2019' }),
          End: z.string().exactOptional().openapi({ example: '20181231' }),
          Home: z.boolean().exactOptional().openapi({ example: 'yes' }),
          Keywords: z
            .array(z.string())
            .exactOptional()
            .openapi({ example: ['paris', 'comptabilité'] }),
          Level: z
            .enum(['confidential', 'regular', 'public'])
            .exactOptional()
            .openapi({ example: 'confidential' }),
          Start: z.string().exactOptional().openapi({ example: '20180101' }),
        })
        .openapi({ required: [] })
        .openapi({ required: ['Designation'] }),
    },
  },
  required: true,
}

const VATDeclarationRequestBody = {
  description:
    'VATDeclaration to add (either (DocumentId,End) either (File,Name,Content64Encoded,Title,End) is mandatory)',
  content: {
    'application/json': {
      schema: z
        .xor([
          z
            .object({
              Begin: z.string().exactOptional().openapi({ example: '20160801' }),
              CollectedVAT: z.float32().exactOptional().openapi({ example: 1548.63 }),
              CreditVAT: z.float32().exactOptional().openapi({ example: 400.5 }),
              DeductibleVAT: z.float32().exactOptional().openapi({ example: 20.5 }),
              DocumentId: z.string().exactOptional().openapi({ example: 'PBUFBAUBF1531' }),
              End: z.string().exactOptional().openapi({ example: '20160831' }),
              ExemptTurnover: z.float32().exactOptional().openapi({ example: 132.63 }),
              Number: z.string().exactOptional().openapi({ example: '153126' }),
              PayableVAT: z.float32().exactOptional().openapi({ example: 2000.5 }),
              TaxableTurnover: z.float32().exactOptional().openapi({ example: 1352.63 }),
            })
            .openapi({ required: [] }),
          z
            .object({
              Accounting: z
                .object({
                  AccountedOn: z.string().exactOptional().openapi({ example: '20181202' }),
                  Workbook: z
                    .enum([
                      'customer',
                      'provider',
                      'bank',
                      'cashWoucher',
                      'fiscal',
                      'insurance',
                      'social',
                      'other',
                      'permanent',
                    ])
                    .exactOptional()
                    .openapi({ example: 'fiscal' }),
                  YearMonth: z.string().exactOptional().openapi({ example: 201902 }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              Author: z.string().exactOptional().openapi({ example: 'Antoine Dupond' }),
              Begin: z.string().exactOptional().openapi({ example: '20160801' }),
              Code: z.string().exactOptional().openapi({ example: 'COD' }),
              CollectedVAT: z.float32().exactOptional().openapi({ example: 1548.63 }),
              Comment: z.string().exactOptional().openapi({ example: 'my document' }),
              CreditVAT: z.float32().exactOptional().openapi({ example: 400.5 }),
              Date: z.string().exactOptional().openapi({ example: '20161203' }),
              DeductibleVAT: z.float32().exactOptional().openapi({ example: 20.5 }),
              End: z.string().exactOptional().openapi({ example: '20160831' }),
              ExemptTurnover: z.float32().exactOptional().openapi({ example: 132.63 }),
              File: z
                .object({
                  Content64Encoded: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'gjgjJ9FJA829H9HA18B' }),
                  Name: z.string().exactOptional().openapi({ example: 'MonDocument.pdf' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              Number: z.string().exactOptional().openapi({ example: '153126' }),
              PayableVAT: z.float32().exactOptional().openapi({ example: 2000.5 }),
              TaxableTurnover: z.float32().exactOptional().openapi({ example: 1352.63 }),
              Title: z.string().exactOptional().openapi({ example: 'Facture décembre' }),
            })
            .openapi({ required: [] }),
        ])
        .openapi({ required: ['Title', 'File', 'Name', 'Content64Encoded', 'DocumentId', 'End'] }),
    },
    'multipart/form-data': {
      schema: z
        .object({
          Accounting: z
            .object({
              AccountedOn: z.string().exactOptional().openapi({ example: '20181202' }),
              Workbook: z
                .enum([
                  'customer',
                  'provider',
                  'bank',
                  'cashWoucher',
                  'fiscal',
                  'insurance',
                  'social',
                  'other',
                  'permanent',
                ])
                .exactOptional()
                .openapi({ example: 'fiscal' }),
              YearMonth: z.string().exactOptional().openapi({ example: 201902 }),
            })
            .exactOptional()
            .openapi({ required: [] }),
          Author: z.string().exactOptional().openapi({ example: 'Antoine Dupond' }),
          Begin: z.string().exactOptional().openapi({ example: '20160801' }),
          Code: z.string().exactOptional().openapi({ example: 'COD' }),
          CollectedVAT: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.float32(),
            )
            .exactOptional()
            .openapi({ example: 1548.63 }),
          Comment: z.string().exactOptional().openapi({ example: 'my document' }),
          CreditVAT: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.float32(),
            )
            .exactOptional()
            .openapi({ example: 400.5 }),
          Date: z.string().exactOptional().openapi({ example: '20161203' }),
          DeductibleVAT: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.float32(),
            )
            .exactOptional()
            .openapi({ example: 20.5 }),
          End: z.string().exactOptional().openapi({ example: '20160831' }),
          ExemptTurnover: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.float32(),
            )
            .exactOptional()
            .openapi({ example: 132.63 }),
          File: z.file().exactOptional().openapi({ type: 'string', format: 'binary' }),
          Number: z.string().exactOptional().openapi({ example: '153126' }),
          PayableVAT: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.float32(),
            )
            .exactOptional()
            .openapi({ example: 2000.5 }),
          TaxableTurnover: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.float32(),
            )
            .exactOptional()
            .openapi({ example: 1352.63 }),
          Title: z.string().exactOptional().openapi({ example: 'Facture décembre' }),
        })
        .openapi({ required: [] })
        .openapi({ required: ['Title', 'File', 'Name', 'End'] }),
    },
  },
  required: true,
}

const VersionRequestBody = {
  description: 'Version to add',
  content: {
    'application/json': {
      schema: z
        .object({
          Author: z.string().exactOptional().openapi({ example: 'Antoine Dupond' }),
          Code: z.string().exactOptional().openapi({ example: 'COD' }),
          Comment: z.string().exactOptional().openapi({ example: 'my document' }),
          Date: z.string().exactOptional().openapi({ example: '20161203' }),
          File: z
            .object({
              Content64Encoded: z
                .string()
                .exactOptional()
                .openapi({ example: 'gjgjJ9FJA829H9HA18B' }),
              Name: z.string().exactOptional().openapi({ example: 'MonDocument.pdf' }),
            })
            .exactOptional()
            .openapi({ required: [] }),
          Title: z.string().exactOptional().openapi({ example: 'Facture décembre' }),
        })
        .openapi({ required: [] })
        .openapi({ required: ['Title', 'File', 'Name', 'Content64Encoded'] }),
    },
    'multipart/form-data': {
      schema: z
        .object({
          Author: z.string().exactOptional().openapi({ example: 'Antoine Dupond' }),
          Code: z.string().exactOptional().openapi({ example: 'COD' }),
          Comment: z.string().exactOptional().openapi({ example: 'my document' }),
          Date: z.string().exactOptional().openapi({ example: '20161203' }),
          File: z.file().exactOptional().openapi({ type: 'string', format: 'binary' }),
          Title: z.string().exactOptional().openapi({ example: 'Facture décembre' }),
        })
        .openapi({ required: [] })
        .openapi({ required: ['Title', 'File', 'Name'] }),
    },
  },
  required: true,
}

const ZipRequestBody = {
  description: 'Documents to archive',
  content: {
    'application/json': {
      schema: z
        .object({
          DocumentId: z.array(z.string().openapi({ example: 'POFA872498' })).exactOptional(),
        })
        .openapi({ required: [] })
        .openapi({ required: ['DocumentId'] }),
    },
  },
  required: true,
}

const GmaAuthSecurityScheme = {
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://sandbox.gerermesaffaires.com/openid/v1/authorize',
      refreshUrl: 'https://sandbox.gerermesaffaires.com/openid/v1/token',
      scopes: {
        box: '*Originally missing*',
        collaborator: 'blue access',
        hub: '*Originally missing*',
        owner: 'green access',
      },
      tokenUrl: 'https://sandbox.gerermesaffaires.com/openid/v1/token',
    },
    clientCredentials: {
      refreshUrl: 'https://sandbox.gerermesaffaires.com/openid/v1/token',
      scopes: { box: '*Originally missing*', hub: '*Originally missing*', robot: 'server access' },
      tokenUrl: 'https://sandbox.gerermesaffaires.com/openid/v1/token',
    },
  },
  type: 'oauth2',
}

export const getBoxMenusRoute = createRoute({
  method: 'get',
  path: '/box/menus',
  description: 'Returns predefined folders and workbooks of the Box for all the spaces',
  responses: { 200: SpaceMenusResponse },
  security: [{ gma_auth: ['owner'] }],
})

export const getBusinessGroupsRoute = createRoute({
  method: 'get',
  path: '/business-groups',
  description: 'Returns a list of groups custom ordered by name',
  request: {
    query: z.object({
      Name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Name of the group',
            in: 'query',
            name: 'Name',
            required: false,
            schema: { example: 'Dupond', type: 'string' },
          },
          example: 'Dupond',
        }),
    }),
  },
  responses: { 200: BusinessGroupResponse },
  security: [{ gma_auth: ['collaborator'] }],
})

export const postBusinessGroupsRoute = createRoute({
  method: 'post',
  path: '/business-groups',
  description: 'Adds a group (only for managers and ADN collaborators)',
  request: { body: BusinessGroupRequestBody },
  responses: {
    201: {
      description: 'Id of group created',
      content: {
        'application/json': {
          schema: z
            .object({ Id: z.string().exactOptional().openapi({ example: 'P1234' }) })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        Location: {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              description: 'path of the group created',
              example: '/business-groups/P64684',
            }),
        },
      }),
    },
  },
  security: [{ gma_auth: ['collaborator'] }],
})

export const patchBusinessGroupsRoute = createRoute({
  method: 'patch',
  path: '/business-groups',
  description: 'Modifies an object',
  request: { body: ModifyBusinessGroupRequestBody },
  responses: { 204: { description: 'OK' } },
  security: [{ gma_auth: ['collaborator'] }],
})

export const getBusinessGroupsAllRoute = createRoute({
  method: 'get',
  path: '/business-groups/all',
  description: 'Returns list of groups custom for managers',
  request: {
    query: z.object({
      Name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Name of the group',
            in: 'query',
            name: 'Name',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: BusinessGroupResponse },
  security: [{ gma_auth: ['collaborator'] }],
})

export const getBusinessGroupsIdRoute = createRoute({
  method: 'get',
  path: '/business-groups/{id}',
  description: 'Returns a group',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the group',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P18784', type: 'string' },
          },
          example: 'P18784',
        }),
    }),
  },
  responses: { 200: OneBusinessGroupResponse },
  security: [{ gma_auth: ['collaborator'] }],
})

export const getBusinessGroupsIdSpacesRoute = createRoute({
  method: 'get',
  path: '/business-groups/{id}/spaces',
  description: 'Returns spaces of the business group with id',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the group',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P18784', type: 'string' },
          },
          example: 'P18784',
        }),
    }),
    query: z.object({
      Name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Name of the space',
            in: 'query',
            name: 'Name',
            required: false,
            schema: { example: 'Mon Entreprise', type: 'string' },
          },
          example: 'Mon Entreprise',
        }),
      Type: z
        .enum(['private', 'enterprise', 'company', 'association'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Type of the space',
            in: 'query',
            name: 'Type',
            required: false,
            schema: {
              enum: ['private', 'enterprise', 'company', 'association'],
              example: 'private',
              type: 'string',
            },
          },
          example: 'private',
        }),
      RegistrationNumber: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'registration number of the space',
            in: 'query',
            name: 'RegistrationNumber',
            required: false,
            schema: { example: '12345', type: 'string' },
          },
          example: '12345',
        }),
    }),
  },
  responses: { 200: SpaceResponse },
  security: [{ gma_auth: ['collaborator'] }],
})

export const deleteBusinessGroupsIdSpacesSpaceIdRoute = createRoute({
  method: 'delete',
  path: '/business-groups/{id}/spaces/{spaceId}',
  description: 'Remove a customer space from partner',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the group of the customer space',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P18784', type: 'string' },
          },
          example: 'P18784',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P18784', type: 'string' },
          },
          example: 'P18784',
        }),
    }),
  },
  responses: { 204: { description: 'OK' } },
  security: [{ gma_auth: ['collaborator'] }],
})

export const postBusinessGroupsIdSpacesSpaceIdLegalEntitiesPersonIdCustomersFolderIdGuestInSpaceRoute =
  createRoute({
    method: 'post',
    path: '/business-groups/{id}/spaces/{spaceId}/legal-entities/{personId}/customers/{folderId}/guest-in-space',
    description: 'send an invitation to manager the private space of personId',
    request: {
      params: z.object({
        id: z
          .string()
          .openapi({
            param: {
              description: 'Id of the group',
              in: 'path',
              name: 'id',
              required: true,
              schema: { example: 'P18784', type: 'string' },
            },
            example: 'P18784',
          }),
        spaceId: z
          .string()
          .openapi({
            param: {
              description: 'Id of the company space which contains the customer folder',
              in: 'path',
              name: 'spaceId',
              required: true,
              schema: { example: 'P18784', type: 'string' },
            },
            example: 'P18784',
          }),
        personId: z
          .string()
          .openapi({
            param: {
              description: 'Id of the person customer',
              in: 'path',
              name: 'personId',
              required: true,
              schema: { example: 'P18784', type: 'string' },
            },
            example: 'P18784',
          }),
        folderId: z
          .string()
          .openapi({
            param: {
              description: 'Id of the folder customer',
              in: 'path',
              name: 'folderId',
              required: true,
              schema: { example: 'P18784', type: 'string' },
            },
            example: 'P18784',
          }),
      }),
      body: PSpaceRequestBody,
    },
    responses: {
      201: {
        description: 'Id of space created',
        content: {
          'application/json': {
            schema: z
              .object({ Id: z.string().exactOptional().openapi({ example: 'P1234' }) })
              .openapi({ required: [] }),
          },
        },
        headers: z.object({
          Location: {
            schema: z
              .string()
              .exactOptional()
              .openapi({
                param: { required: false },
                description: 'path of the space created',
                example: '/business-groups/P468486/spaces/P64684',
              }),
          },
        }),
      },
    },
    security: [{ gma_auth: ['collaborator'] }],
  })

export const postBusinessGroupsIdSpacesSpaceIdLegalEntitiesPersonIdCustomersFolderIdSpacesRoute =
  createRoute({
    method: 'post',
    path: '/business-groups/{id}/spaces/{spaceId}/legal-entities/{personId}/customers/{folderId}/spaces',
    description: 'Add a Space in a group',
    request: {
      params: z.object({
        id: z
          .string()
          .openapi({
            param: {
              description: 'Id of the group',
              in: 'path',
              name: 'id',
              required: true,
              schema: { example: 'P18784', type: 'string' },
            },
            example: 'P18784',
          }),
        spaceId: z
          .string()
          .openapi({
            param: {
              description: 'Id of the company space which contains the customer folder',
              in: 'path',
              name: 'spaceId',
              required: true,
              schema: { example: 'P18784', type: 'string' },
            },
            example: 'P18784',
          }),
        personId: z
          .string()
          .openapi({
            param: {
              description: 'Id of the person customer',
              in: 'path',
              name: 'personId',
              required: true,
              schema: { example: 'P18784', type: 'string' },
            },
            example: 'P18784',
          }),
        folderId: z
          .string()
          .openapi({
            param: {
              description: 'Id of the folder customer',
              in: 'path',
              name: 'folderId',
              required: true,
              schema: { example: 'P18784', type: 'string' },
            },
            example: 'P18784',
          }),
      }),
      body: BSpaceRequestBody,
    },
    responses: {
      201: {
        description: 'Id of space created',
        content: {
          'application/json': {
            schema: z
              .object({ Id: z.string().exactOptional().openapi({ example: 'P1234' }) })
              .openapi({ required: [] }),
          },
        },
        headers: z.object({
          Location: {
            schema: z
              .string()
              .exactOptional()
              .openapi({
                param: { required: false },
                description: 'path of the space created',
                example: '/business-groups/P468486/spaces/P64684',
              }),
          },
        }),
      },
    },
    security: [{ gma_auth: ['collaborator'] }],
  })

export const getHubBusinessGroupsIdMenusRoute = createRoute({
  method: 'get',
  path: '/hub/business-groups/{Id}/menus',
  description:
    'Returns predefined folders and workbooks of the Hub for all the spaces of the business group',
  request: {
    params: z.object({
      Id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the business group',
            in: 'path',
            name: 'Id',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
  },
  responses: { 200: SpaceMenusResponse },
  security: [{ gma_auth: ['collaborator'] }],
})

export const postHubDocumentsRoute = createRoute({
  method: 'post',
  path: '/hub/documents',
  description:
    'Add a document (this document is analyzed to be saved in the correct folder and correct space)',
  request: { body: HubDocumentsRequestBody },
  responses: {
    201: {
      description: 'Id of documents created',
      content: {
        'application/json': {
          schema: z
            .object({ Id: z.string().exactOptional().openapi({ example: 'T1234' }) })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        Location: {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              description: 'path of the documents created',
              example: '/hub/spaces/PFJOJAF14546/documents/P48548FDAF',
            }),
        },
      }),
    },
  },
  security: [{ gma_auth: ['collaborator', 'owner', 'robot'] }],
})

export const getHubMenusRoute = createRoute({
  method: 'get',
  path: '/hub/menus',
  description: 'Returns predefined folders and workbooks of the Hub for all the spaces',
  responses: { 200: SpaceMenusResponse },
  security: [{ gma_auth: ['collaborator'] }],
})

export const getHubMenusAllRoute = createRoute({
  method: 'get',
  path: '/hub/menus/all',
  description:
    'Returns predefined folders and workbooks of the Hub for all the spaces and customer spaces',
  responses: { 200: SpaceMenusAllResponse },
  security: [{ gma_auth: ['collaborator'] }],
})

export const postHubPayslipsRoute = createRoute({
  method: 'post',
  path: '/hub/payslips',
  description:
    'Add a payslip (this document is analyzed to be saved in the correct folder and correct space)',
  request: { body: HubDocumentsRequestBody },
  responses: {
    201: {
      description: 'Id of documents created',
      content: {
        'application/json': {
          schema: z
            .object({ Id: z.string().exactOptional().openapi({ example: 'T1234' }) })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        Location: {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              description: 'path of the documents created',
              example: '/hub/spaces/PFJOJAF14546/documents/P48548FDAF',
            }),
        },
      }),
    },
  },
  security: [{ gma_auth: ['collaborator', 'owner', 'robot'] }],
})

export const postHubSpacesSpaceIdDocumentsRoute = createRoute({
  method: 'post',
  path: '/hub/spaces/{spaceId}/documents',
  description:
    'Add a document in a space (this document is analyzed to be saved in the correct folder)',
  request: {
    params: z.object({
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    body: DocumentsRequestBody,
  },
  responses: {
    201: {
      description: 'Id of documents created',
      content: {
        'application/json': {
          schema: z
            .object({ Id: z.string().exactOptional().openapi({ example: 'T1234' }) })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        Location: {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              description: 'path of the documents created',
              example: '/hub/spaces/PFJOJAF14546/documents/P48548FDAF',
            }),
        },
      }),
    },
  },
  security: [{ gma_auth: ['collaborator', 'owner', 'robot'] }],
})

export const getHubSpacesSpaceIdMenusRoute = createRoute({
  method: 'get',
  path: '/hub/spaces/{spaceId}/menus',
  description: 'Returns predefined folders and workbooks of the Hub for the space',
  request: {
    params: z.object({
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
  },
  responses: { 200: MenusResponse },
})

export const postHubSpacesSpaceIdPayslipsRoute = createRoute({
  method: 'post',
  path: '/hub/spaces/{spaceId}/payslips',
  description:
    'Add a payslip in a space (this document is analyzed to be saved in the correct folder)',
  request: {
    params: z.object({
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    body: DocumentsRequestBody,
  },
  responses: {
    201: {
      description: 'Id of documents created',
      content: {
        'application/json': {
          schema: z
            .object({ Id: z.string().exactOptional().openapi({ example: 'T1234' }) })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        Location: {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              description: 'path of the documents created',
              example: '/hub/spaces/PFJOJAF14546/documents/P48548FDAF',
            }),
        },
      }),
    },
  },
  security: [{ gma_auth: ['collaborator', 'owner', 'robot'] }],
})

export const getMenusRoute = createRoute({
  method: 'get',
  path: '/menus',
  description: 'Returns predefined entries',
  responses: { 200: SpaceOneMenusResponse },
})

export const postMenusMenuIdDocumentsRoute = createRoute({
  method: 'post',
  path: '/menus/{menuId}/documents',
  description: 'add a document to the target menuId',
  request: {
    params: z.object({
      menuId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'menuId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    body: MenuDocumentsRequestBody,
  },
  responses: {
    201: {
      description: 'Report of upload',
      content: {
        'application/json': {
          schema: z
            .object({ Report: z.object({}).exactOptional().openapi({ example: 'T1234' }) })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ gma_auth: ['collaborator', 'owner', 'robot', 'box', 'hub'] }],
})

export const getProfileRoute = createRoute({
  method: 'get',
  path: '/profile',
  description: 'Returns status of member',
  request: {
    query: z.object({
      Contract: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'to get a contract (if not signed error 404 + html contract)',
            in: 'query',
            name: 'Contract',
            required: false,
            schema: { example: 'member', type: 'string' },
          },
          example: 'member',
        }),
    }),
  },
  responses: { 200: PartialProfileResponse },
  security: [{ gma_auth: ['owner'] }],
})

export const postProfileRoute = createRoute({
  method: 'post',
  path: '/profile',
  description: 'create infos of profile',
  request: { body: ProfileRequestBody },
  responses: { 204: { description: 'OK' } },
  security: [{ gma_auth: ['owner'] }],
})

export const patchProfileRoute = createRoute({
  method: 'patch',
  path: '/profile',
  description: 'modify infos of profile',
  request: { body: ModifyProfileRequestBody },
  responses: { 204: { description: 'OK' } },
  security: [{ gma_auth: ['owner'] }],
})

export const patchProfileEmailRoute = createRoute({
  method: 'patch',
  path: '/profile/email',
  description: 'modify email of profile',
  request: { body: ModifyEmailProfileRequestBody },
  responses: { 204: { description: 'OK' } },
  security: [{ gma_auth: ['owner'] }],
})

export const getProfileIdFileRoute = createRoute({
  method: 'get',
  path: '/profile/id-file',
  description: 'Returns status of member',
  request: {
    query: z.object({
      Contract: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'to get a contract (if not signed error 404 + html contract)',
            in: 'query',
            name: 'Contract',
            required: false,
            schema: { example: 'member', type: 'string' },
          },
          example: 'member',
        }),
    }),
  },
  responses: { 200: ProfileResponse },
})

export const patchProfileMobileRoute = createRoute({
  method: 'patch',
  path: '/profile/mobile',
  description: 'modify mobile of profile',
  request: { body: ModifyMobileProfileRequestBody },
  responses: { 204: { description: 'OK' } },
  security: [{ gma_auth: ['owner'] }],
})

export const getRegistrationRoute = createRoute({
  method: 'get',
  path: '/registration',
  description:
    'Returns the method to get the validation code or the link to register after invitation',
  request: {
    query: z.object({
      Code: z
        .string()
        .openapi({
          param: {
            description: 'Code of the invitation',
            in: 'query',
            name: 'Code',
            required: true,
            schema: { example: 'HFIHA', type: 'string' },
          },
          example: 'HFIHA',
        }),
    }),
  },
  responses: { 200: RegistrationResponse },
  security: [{ gma_auth: ['owner'] }],
})

export const postRegistrationRoute = createRoute({
  method: 'post',
  path: '/registration',
  description: 'complete the invitation',
  request: { body: RegistrationRequestBody },
  responses: {
    201: {
      description: 'Id of the private space and the contract folder',
      content: {
        'application/json': {
          schema: z
            .object({
              Private: z
                .object({
                  FolderId: z.string().exactOptional().openapi({ example: 'POJFA987EA' }),
                  SpaceId: z.string().exactOptional().openapi({ example: 'P1234' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ gma_auth: ['owner'] }],
})

export const getSessionRoute = createRoute({
  method: 'get',
  path: '/session',
  description: 'Returns member id of user logged',
  responses: { 200: SessionResponse },
  security: [{ gma_auth: ['collaborator', 'owner', 'robot'] }],
})

export const getSpacesRoute = createRoute({
  method: 'get',
  path: '/spaces',
  description: 'Returns spaces of my group',
  request: {
    query: z.object({
      Name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Name of the space',
            in: 'query',
            name: 'Name',
            required: false,
            schema: { example: 'Mon Entreprise', type: 'string' },
          },
          example: 'Mon Entreprise',
        }),
      Type: z
        .enum(['private', 'enterprise', 'company', 'association'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Type of the space',
            in: 'query',
            name: 'Type',
            required: false,
            schema: {
              enum: ['private', 'enterprise', 'company', 'association'],
              example: 'private',
              type: 'string',
            },
          },
          example: 'private',
        }),
      RegistrationNumber: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'registration number of the space',
            in: 'query',
            name: 'RegistrationNumber',
            required: false,
            schema: { example: '12345', type: 'string' },
          },
          example: '12345',
        }),
    }),
  },
  responses: { 200: SpaceResponse },
})

export const postSpacesRoute = createRoute({
  method: 'post',
  path: '/spaces',
  description: 'Add a Space in my group',
  request: { body: SpaceRequestBody },
  responses: {
    201: {
      description: 'Id of space created',
      content: {
        'application/json': {
          schema: z
            .object({ Id: z.string().exactOptional().openapi({ example: 'P1234' }) })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        Location: {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              description: 'path of the space created',
              example: '/spaces/P64684',
            }),
        },
      }),
    },
  },
  security: [{ gma_auth: ['collaborator', 'owner', 'robot'] }],
})

export const getSpacesAllRoute = createRoute({
  method: 'get',
  path: '/spaces/all',
  description: 'Returns all spaces',
  request: {
    query: z.object({
      Name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Name of the space',
            in: 'query',
            name: 'Name',
            required: false,
            schema: { example: 'Mon Entreprise', type: 'string' },
          },
          example: 'Mon Entreprise',
        }),
      Type: z
        .enum(['private', 'enterprise', 'company', 'association'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Type of the space',
            in: 'query',
            name: 'Type',
            required: false,
            schema: {
              enum: ['private', 'enterprise', 'company', 'association'],
              example: 'private',
              type: 'string',
            },
          },
          example: 'private',
        }),
    }),
  },
  responses: { 200: SpaceResponse },
})

export const getSpacesIdRoute = createRoute({
  method: 'get',
  path: '/spaces/{id}',
  description: 'Returns a space',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P18784', type: 'string' },
          },
          example: 'P18784',
        }),
    }),
  },
  responses: { 200: OneSpaceResponse },
})

export const deleteSpacesIdRoute = createRoute({
  method: 'delete',
  path: '/spaces/{id}',
  description: 'Delete a Space (only space not delivered to customer)',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P18784', type: 'string' },
          },
          example: 'P18784',
        }),
    }),
  },
  responses: { 204: { description: 'OK' } },
})

export const patchSpacesIdRoute = createRoute({
  method: 'patch',
  path: '/spaces/{id}',
  description: 'Modify a Space (except private)',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P18784', type: 'string' },
          },
          example: 'P18784',
        }),
    }),
    body: ModifySpaceRequestBody,
  },
  responses: { 204: { description: 'OK' } },
})

export const getSpacesIdAccountingYearRoute = createRoute({
  method: 'get',
  path: '/spaces/{id}/accounting-year',
  description: 'Returns list of accounting years for the space {id}',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P15646476', type: 'string' },
          },
          example: 'P15646476',
        }),
    }),
    query: z.object({
      End: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'End date of the accounting year (YYYYMM or YYYYMMDD) (range not available)',
            in: 'query',
            name: 'End',
            required: false,
            schema: { example: '201603', type: 'string' },
          },
          example: '201603',
        }),
      EffectiveDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Effective date inside  the accounting year  (range not available)',
            in: 'query',
            name: 'EffectiveDate',
            required: false,
            schema: { example: '20160301', type: 'string' },
          },
          example: '20160301',
        }),
    }),
  },
  responses: { 200: AccountingYearResponse },
})

export const postSpacesIdAccountingYearRoute = createRoute({
  method: 'post',
  path: '/spaces/{id}/accounting-year',
  description: 'Create a accounting year for the space id',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P198746', type: 'string' },
          },
          example: 'P198746',
        }),
    }),
    body: AccountingYearRequestBody,
  },
  responses: {
    201: {
      description: 'Id of the accounting year created',
      content: {
        'application/json': {
          schema: z
            .object({ Id: z.string().exactOptional().openapi({ example: 'T1234' }) })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        Location: {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              description: 'path of the accounting year created',
              example: '/spaces/P468486/accounting-year/T6JFH4FGFGGz84/',
            }),
        },
      }),
    },
  },
  security: [{ gma_auth: ['collaborator', 'owner', 'robot'] }],
})

export const getSpacesIdCollectiveDecisionRoute = createRoute({
  method: 'get',
  path: '/spaces/{id}/collective-decision',
  description: 'Returns list of collective decisions for the space {id}',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P15646476', type: 'string' },
          },
          example: 'P15646476',
        }),
    }),
    query: z.object({
      Date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Date of the collective decision YYYMMDD',
            in: 'query',
            name: 'Date',
            required: false,
            schema: { example: '20160302,null', type: 'string' },
          },
          example: '20160302,null',
        }),
      Event: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Event of the collective decision (see post for the list of events)',
            in: 'query',
            name: 'Event',
            required: false,
            schema: { example: 'OGM', type: 'string' },
          },
          example: 'OGM',
        }),
      Range: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'index range of the results',
            in: 'query',
            name: 'Range',
            required: false,
            schema: { example: '10-19', type: 'string' },
          },
          example: '10-19',
        }),
      HasCompanyRegistrationCertificate: z
        .enum(['true', 'false'])
        .exactOptional()
        .openapi({
          param: {
            description: 'If true returns only invoices with a CompanyRegistrationCertificate',
            in: 'query',
            name: 'HasCompanyRegistrationCertificate',
            required: false,
            schema: { enum: ['true', 'false'], example: 'true', type: 'string' },
          },
          example: 'true',
        }),
      HasStatus: z
        .enum(['true', 'false'])
        .exactOptional()
        .openapi({
          param: {
            description: 'If true returns only invoices with a Status',
            in: 'query',
            name: 'HasStatus',
            required: false,
            schema: { enum: ['true', 'false'], example: 'true', type: 'string' },
          },
          example: 'true',
        }),
      HasSireneRegister: z
        .enum(['true', 'false'])
        .exactOptional()
        .openapi({
          param: {
            description: 'If true returns only invoices with a SireneRegister',
            in: 'query',
            name: 'HasSireneRegister',
            required: false,
            schema: { enum: ['true', 'false'], example: 'true', type: 'string' },
          },
          example: 'true',
        }),
      HasMinutes: z
        .enum(['true', 'false'])
        .exactOptional()
        .openapi({
          param: {
            description: 'If true returns only invoices with Minutes',
            in: 'query',
            name: 'HasMinutes',
            required: false,
            schema: { enum: ['true', 'false'], example: 'true', type: 'string' },
          },
          example: 'true',
        }),
    }),
  },
  responses: { 200: CollectiveDecisionResponse },
})

export const postSpacesIdCollectiveDecisionRoute = createRoute({
  method: 'post',
  path: '/spaces/{id}/collective-decision',
  description: 'Create a colletive decision for the space id',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P198746', type: 'string' },
          },
          example: 'P198746',
        }),
    }),
    body: CollectiveDecisionRequestBody,
  },
  responses: {
    201: {
      description: 'Id of the collective decision created',
      content: {
        'application/json': {
          schema: z
            .object({ Id: z.string().exactOptional().openapi({ example: 'T1234' }) })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        Location: {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              description: 'path of the collective decision created',
              example: '/spaces/P468486/collective-decision/T6JFH4FGFGGz84/',
            }),
        },
      }),
    },
  },
  security: [{ gma_auth: ['collaborator', 'owner', 'robot'] }],
})

export const getSpacesIdCompanyEntitiesRoute = createRoute({
  method: 'get',
  path: '/spaces/{id}/company-entities',
  description: 'Returns list of company entities',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P15646476', type: 'string' },
          },
          example: 'P15646476',
        }),
    }),
    query: z.object({
      Name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Name of the company entity',
            in: 'query',
            name: 'Name',
            required: false,
            schema: { example: 'Source de France', type: 'string' },
          },
          example: 'Source de France',
        }),
      LegalName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Legal name of the company entity',
            in: 'query',
            name: 'LegalName',
            required: false,
            schema: { example: 'Source de France SAS', type: 'string' },
          },
          example: 'Source de France SAS',
        }),
      RegistrationNumber: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'registration number of the company entity',
            in: 'query',
            name: 'RegistrationNumber',
            required: false,
            schema: { example: '12356213854', type: 'string' },
          },
          example: '12356213854',
        }),
    }),
  },
  responses: { 200: CompanyEntityResponse },
})

export const postSpacesIdCompanyEntitiesRoute = createRoute({
  method: 'post',
  path: '/spaces/{id}/company-entities',
  description: 'Add a Company Entity in a Space',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T198746', type: 'string' },
          },
          example: 'T198746',
        }),
    }),
    body: CompanyEntityRequestBody,
  },
  responses: {
    201: {
      description: 'Id of company entity created',
      content: {
        'application/json': {
          schema: z
            .object({ Id: z.string().exactOptional().openapi({ example: 'T1234' }) })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        Location: {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              description: 'path of the company entity created',
              example: '/spaces/P468486/company-entities/P6JFH4FGFGGz84',
            }),
        },
      }),
    },
  },
  security: [{ gma_auth: ['collaborator', 'owner', 'robot'] }],
})

export const getSpacesIdCompanyEntitiesAllRoute = createRoute({
  method: 'get',
  path: '/spaces/{id}/company-entities/all',
  description: 'Returns list of company entities even company entities archived',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P15646476', type: 'string' },
          },
          example: 'P15646476',
        }),
    }),
    query: z.object({
      Name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Name of the company entity',
            in: 'query',
            name: 'Name',
            required: false,
            schema: { example: 'Source de France', type: 'string' },
          },
          example: 'Source de France',
        }),
      RegistrationNumber: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'registration number of the company entity',
            in: 'query',
            name: 'RegistrationNumber',
            required: false,
            schema: { example: '12356213854', type: 'string' },
          },
          example: '12356213854',
        }),
    }),
  },
  responses: { 200: CompanyEntityResponse },
})

export const getSpacesIdCompanyEntitiesCompanyIdRoute = createRoute({
  method: 'get',
  path: '/spaces/{id}/company-entities/{companyId}',
  description: 'Returns a compay entity',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P15646476', type: 'string' },
          },
          example: 'P15646476',
        }),
      companyId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the company entity',
            in: 'path',
            name: 'companyId',
            required: true,
            schema: { example: 'P15646476', type: 'string' },
          },
          example: 'P15646476',
        }),
    }),
  },
  responses: { 200: OneCompanyEntityResponse },
})

export const patchSpacesIdCompanyEntitiesCompanyIdRoute = createRoute({
  method: 'patch',
  path: '/spaces/{id}/company-entities/{companyId}',
  description: 'Modify a company entity',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P187867864', type: 'string' },
          },
          example: 'P187867864',
        }),
      companyId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the company entity to modify',
            in: 'path',
            name: 'companyId',
            required: true,
            schema: { example: 'P1863763784', type: 'string' },
          },
          example: 'P1863763784',
        }),
    }),
    body: ModifyCompanyEntityRequestBody,
  },
  responses: { 204: { description: 'OK' } },
})

export const getSpacesIdCompanyEntitiesPersonIdDetailsRoute = createRoute({
  method: 'get',
  path: '/spaces/{id}/company-entities/{personId}/details',
  description: 'Returns all details of a company entity',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P15646476', type: 'string' },
          },
          example: 'P15646476',
        }),
      personId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the company entity to get',
            in: 'path',
            name: 'personId',
            required: true,
            schema: { example: 'T18784', type: 'string' },
          },
          example: 'T18784',
        }),
    }),
  },
  responses: { 200: DetailsResponse },
})

export const postSpacesIdCompanyEntitiesPersonIdDetailsRoute = createRoute({
  method: 'post',
  path: '/spaces/{id}/company-entities/{personId}/details',
  description: 'Replace or Add a contact detail for a person',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P18784', type: 'string' },
          },
          example: 'P18784',
        }),
      personId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the person or memberId',
            in: 'path',
            name: 'personId',
            required: true,
            schema: { example: 'P18784', type: 'string' },
          },
          example: 'P18784',
        }),
    }),
    body: DetailsRequestBody,
  },
  responses: { 204: { description: 'OK' } },
})

export const deleteSpacesIdCompanyEntitiesPersonIdDetailsDesignationRoute = createRoute({
  method: 'delete',
  path: '/spaces/{id}/company-entities/{personId}/details/{designation}',
  description: 'delete a contact detail for a company entity',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P18784', type: 'string' },
          },
          example: 'P18784',
        }),
      personId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the person or memberId',
            in: 'path',
            name: 'personId',
            required: true,
            schema: { example: 'P18784', type: 'string' },
          },
          example: 'P18784',
        }),
      designation: z
        .string()
        .openapi({
          param: {
            description: 'designation',
            in: 'path',
            name: 'designation',
            required: true,
            schema: { example: 'P18784', type: 'string' },
          },
          example: 'P18784',
        }),
    }),
  },
  responses: { 204: { description: 'OK' } },
})

export const postSpacesIdDocumentsDownloadRoute = createRoute({
  method: 'post',
  path: '/spaces/{id}/documents/download',
  description: 'create an archive with documents',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P198746', type: 'string' },
          },
          example: 'P198746',
        }),
    }),
    body: ZipRequestBody,
  },
  responses: {
    201: {
      description: 'Zip file base64 encoded',
      content: {
        'application/json': {
          schema: z
            .object({ ZipFile: z.string().exactOptional().openapi({ example: 'KPFKPKAAFKFJ' }) })
            .openapi({ required: [] }),
        },
        'multipart/form-data': {
          schema: z
            .object({
              ZipFile: z.file().exactOptional().openapi({ type: 'string', format: 'binary' }),
            })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        Location: {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              description: 'path of the person created',
              example: '/spaces/P468486/zip/P6JFH4684',
            }),
        },
      }),
    },
  },
  security: [{ gma_auth: ['collaborator', 'owner', 'robot'] }],
})

export const getSpacesIdFoldersFolderIdPersonsMemberIdRoute = createRoute({
  method: 'get',
  path: '/spaces/{id}/folders/{folderId}/persons/{memberId}',
  description: 'return the access of a person in a customer contract',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P18784', type: 'string' },
          },
          example: 'P18784',
        }),
      memberId: z
        .string()
        .openapi({
          param: {
            description: 'memberId of the person',
            in: 'path',
            name: 'memberId',
            required: true,
            schema: { example: 'P18784', type: 'string' },
          },
          example: 'P18784',
        }),
      folderId: z
        .string()
        .openapi({
          param: {
            description: 'id of the customer folder',
            in: 'path',
            name: 'folderId',
            required: true,
            schema: { example: 'T18784', type: 'string' },
          },
          example: 'T18784',
        }),
    }),
  },
  responses: { 200: PersonAccessResponse },
})

export const patchSpacesIdFoldersFolderIdPersonsMemberIdRoute = createRoute({
  method: 'patch',
  path: '/spaces/{id}/folders/{folderId}/persons/{memberId}',
  description: 'Add/Modify/Delete a person in a customer contract (except manager)',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P18784', type: 'string' },
          },
          example: 'P18784',
        }),
      memberId: z
        .string()
        .openapi({
          param: {
            description: 'memberId of the person',
            in: 'path',
            name: 'memberId',
            required: true,
            schema: { example: 'P18784', type: 'string' },
          },
          example: 'P18784',
        }),
      folderId: z
        .string()
        .openapi({
          param: {
            description: 'id of the customer folder',
            in: 'path',
            name: 'folderId',
            required: true,
            schema: { example: 'T18784', type: 'string' },
          },
          example: 'T18784',
        }),
    }),
    body: ModifyCustomerContRequestBody,
  },
  responses: { 204: { description: 'OK' } },
})

export const patchSpacesIdFoldersFolderIdPersonsMemberIdActiveaccessRoute = createRoute({
  method: 'patch',
  path: '/spaces/{id}/folders/{folderId}/persons/{memberId}/activeaccess',
  description: 'open an access',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P18784', type: 'string' },
          },
          example: 'P18784',
        }),
      memberId: z
        .string()
        .openapi({
          param: {
            description: 'memberId of the person',
            in: 'path',
            name: 'memberId',
            required: true,
            schema: { example: 'P18784', type: 'string' },
          },
          example: 'P18784',
        }),
      folderId: z
        .string()
        .openapi({
          param: {
            description: 'id of the customer folder',
            in: 'path',
            name: 'folderId',
            required: true,
            schema: { example: 'T18784', type: 'string' },
          },
          example: 'T18784',
        }),
    }),
  },
  responses: { 204: { description: 'OK' } },
})

export const patchSpacesIdFoldersFolderIdPersonsMemberIdUnactiveaccessRoute = createRoute({
  method: 'patch',
  path: '/spaces/{id}/folders/{folderId}/persons/{memberId}/unactiveaccess',
  description: 'close an access',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P18784', type: 'string' },
          },
          example: 'P18784',
        }),
      memberId: z
        .string()
        .openapi({
          param: {
            description: 'memberId of the person',
            in: 'path',
            name: 'memberId',
            required: true,
            schema: { example: 'P18784', type: 'string' },
          },
          example: 'P18784',
        }),
      folderId: z
        .string()
        .openapi({
          param: {
            description: 'id of the customer folder',
            in: 'path',
            name: 'folderId',
            required: true,
            schema: { example: 'T18784', type: 'string' },
          },
          example: 'T18784',
        }),
    }),
  },
  responses: { 204: { description: 'OK' } },
})

export const postSpacesIdFoldersFolderIdPersonsPersonIdGuestInSpaceRoute = createRoute({
  method: 'post',
  path: '/spaces/{id}/folders/{folderId}/persons/{personId}/guest-in-space',
  description: 'invite a owner in a space',
  request: {
    params: z.object({
      folderId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder customer',
            in: 'path',
            name: 'folderId',
            required: true,
            schema: { example: 'T198NFNIAJFAA46', type: 'string' },
          },
          example: 'T198NFNIAJFAA46',
        }),
      personId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the person to invite to his space',
            in: 'path',
            name: 'personId',
            required: true,
            schema: { example: 'P198NFNIAJFAA46', type: 'string' },
          },
          example: 'P198NFNIAJFAA46',
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    body: {
      description: 'PersonId (if exist)of the person in the customer space',
      content: { 'application/json': { schema: InvitationPersonSchema } },
      required: true,
    },
  },
  responses: { 204: { description: 'OK' } },
  security: [{ gma_auth: ['collaborator', 'owner', 'robot'] }],
})

export const getSpacesIdGroupsRoute = createRoute({
  method: 'get',
  path: '/spaces/{id}/groups',
  description: 'Returns list of groups',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P15646476', type: 'string' },
          },
          example: 'P15646476',
        }),
    }),
    query: z.object({
      Name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Name of the groups',
            in: 'query',
            name: 'Name',
            required: false,
            schema: { example: 'RH', type: 'string' },
          },
          example: 'RH',
        }),
    }),
  },
  responses: { 200: GroupResponse },
})

export const postSpacesIdGroupsRoute = createRoute({
  method: 'post',
  path: '/spaces/{id}/groups',
  description: 'Add a group in a Space',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T198746', type: 'string' },
          },
          example: 'T198746',
        }),
    }),
    body: GroupRequestBody,
  },
  responses: {
    201: {
      description: 'Id of company entity created',
      content: {
        'application/json': {
          schema: z
            .object({ Id: z.string().exactOptional().openapi({ example: 'T1234' }) })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        Location: {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              description: 'path of the group created',
              example: '/spaces/P468486/groups/P6JFH4FGFGGz84',
            }),
        },
      }),
    },
  },
  security: [{ gma_auth: ['collaborator', 'owner', 'robot'] }],
})

export const getSpacesIdGroupsAllRoute = createRoute({
  method: 'get',
  path: '/spaces/{id}/groups/all',
  description: 'Returns list of groups even archived of the space',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P15646476', type: 'string' },
          },
          example: 'P15646476',
        }),
    }),
    query: z.object({
      Name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Name of the group',
            in: 'query',
            name: 'Name',
            required: false,
            schema: { example: 'RH', type: 'string' },
          },
          example: 'RH',
        }),
    }),
  },
  responses: { 200: GroupResponse },
})

export const getSpacesIdGroupsGroupIdRoute = createRoute({
  method: 'get',
  path: '/spaces/{id}/groups/{groupId}',
  description: 'Returns a group',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P15646476', type: 'string' },
          },
          example: 'P15646476',
        }),
      groupId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the group',
            in: 'path',
            name: 'groupId',
            required: true,
            schema: { example: 'P15646476', type: 'string' },
          },
          example: 'P15646476',
        }),
    }),
  },
  responses: { 200: OneGroupResponse },
})

export const patchSpacesIdGroupsGroupIdRoute = createRoute({
  method: 'patch',
  path: '/spaces/{id}/groups/{groupId}',
  description: 'Modify a group',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P187867864', type: 'string' },
          },
          example: 'P187867864',
        }),
      groupId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the group to modify',
            in: 'path',
            name: 'groupId',
            required: true,
            schema: { example: 'P1863763784', type: 'string' },
          },
          example: 'P1863763784',
        }),
    }),
    body: ModifyGroupRequestBody,
  },
  responses: { 204: { description: 'OK' } },
})

export const deleteSpacesIdGroupsGroupIdFoldersFolderIdRoute = createRoute({
  method: 'delete',
  path: '/spaces/{id}/groups/{groupId}/folders/{folderId}',
  description: 'delete access to a folder for a group',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P187867864', type: 'string' },
          },
          example: 'P187867864',
        }),
      groupId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the group to modify',
            in: 'path',
            name: 'groupId',
            required: true,
            schema: { example: 'P1863763784', type: 'string' },
          },
          example: 'P1863763784',
        }),
      folderId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'folderId',
            required: true,
            schema: { example: 'P1863763784', type: 'string' },
          },
          example: 'P1863763784',
        }),
    }),
  },
  responses: { 204: { description: 'OK' } },
})

export const patchSpacesIdGroupsGroupIdFoldersFolderIdRoute = createRoute({
  method: 'patch',
  path: '/spaces/{id}/groups/{groupId}/folders/{folderId}',
  description: 'Add access to a folder for a group',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P187867864', type: 'string' },
          },
          example: 'P187867864',
        }),
      groupId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the group to modify',
            in: 'path',
            name: 'groupId',
            required: true,
            schema: { example: 'P1863763784', type: 'string' },
          },
          example: 'P1863763784',
        }),
      folderId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'folderId',
            required: true,
            schema: { example: 'P1863763784', type: 'string' },
          },
          example: 'P1863763784',
        }),
    }),
    body: ModifyFolderGroupRequestBody,
  },
  responses: { 204: { description: 'OK' } },
})

export const deleteSpacesIdGroupsGroupIdPersonsMemberIdRoute = createRoute({
  method: 'delete',
  path: '/spaces/{id}/groups/{groupId}/persons/{memberId}',
  description: 'Delete a person of a group',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P187867864', type: 'string' },
          },
          example: 'P187867864',
        }),
      groupId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the group to modify',
            in: 'path',
            name: 'groupId',
            required: true,
            schema: { example: 'P1863763784', type: 'string' },
          },
          example: 'P1863763784',
        }),
      memberId: z
        .string()
        .openapi({
          param: {
            description: 'MemberId of the person',
            in: 'path',
            name: 'memberId',
            required: true,
            schema: { example: 'P1863763784', type: 'string' },
          },
          example: 'P1863763784',
        }),
    }),
  },
  responses: { 204: { description: 'OK' } },
})

export const patchSpacesIdGroupsGroupIdPersonsMemberIdRoute = createRoute({
  method: 'patch',
  path: '/spaces/{id}/groups/{groupId}/persons/{memberId}',
  description: 'Add a person to a group',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P187867864', type: 'string' },
          },
          example: 'P187867864',
        }),
      groupId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the group to modify',
            in: 'path',
            name: 'groupId',
            required: true,
            schema: { example: 'P1863763784', type: 'string' },
          },
          example: 'P1863763784',
        }),
      memberId: z
        .string()
        .openapi({
          param: {
            description: 'MemberId of the person',
            in: 'path',
            name: 'memberId',
            required: true,
            schema: { example: 'P1863763784', type: 'string' },
          },
          example: 'P1863763784',
        }),
    }),
  },
  responses: { 204: { description: 'OK' } },
})

export const getSpacesIdLegalRoute = createRoute({
  method: 'get',
  path: '/spaces/{id}/legal',
  description: 'Returns legal information of a space (except private)',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P18784', type: 'string' },
          },
          example: 'P18784',
        }),
    }),
  },
  responses: { 200: OneLegalResponse },
})

export const patchSpacesIdLegalRoute = createRoute({
  method: 'patch',
  path: '/spaces/{id}/legal',
  description: 'Modify legal information of a Space (except private)',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P18784', type: 'string' },
          },
          example: 'P18784',
        }),
    }),
    body: ModifyLegalRequestBody,
  },
  responses: { 204: { description: 'OK' } },
})

export const getSpacesIdLogoRoute = createRoute({
  method: 'get',
  path: '/spaces/{id}/logo',
  description: 'Returns a space with the logo',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P18784', type: 'string' },
          },
          example: 'P18784',
        }),
    }),
  },
  responses: { 200: OneSpaceWithLogoResponse },
})

export const getSpacesIdPersonsRoute = createRoute({
  method: 'get',
  path: '/spaces/{id}/persons',
  description: 'Returns list of persons',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P15646476', type: 'string' },
          },
          example: 'P15646476',
        }),
    }),
    query: z.object({
      Function: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Function of the person',
            in: 'query',
            name: 'Function',
            required: false,
            schema: { example: 'employee', type: 'string' },
          },
          example: 'employee',
        }),
      Range: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'index range of the results',
            in: 'query',
            name: 'Range',
            required: false,
            schema: { example: '10-19', type: 'string' },
          },
          example: '10-19',
        }),
      Name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Name of the person',
            in: 'query',
            name: 'Name',
            required: false,
            schema: { example: 'Germain', type: 'string' },
          },
          example: 'Germain',
        }),
      Validated: z
        .enum(['true', 'false'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Status of the person',
            in: 'query',
            name: 'Validated',
            required: false,
            schema: { enum: ['true', 'false'], example: 'true', type: 'string' },
          },
          example: 'true',
        }),
      Email: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Email of the person',
            in: 'query',
            name: 'Email',
            required: false,
            schema: { example: 'maxgermain@maxgermain.com', type: 'string' },
          },
          example: 'maxgermain@maxgermain.com',
        }),
    }),
  },
  responses: { 200: PersonResponse },
})

export const postSpacesIdPersonsRoute = createRoute({
  method: 'post',
  path: '/spaces/{id}/persons',
  description: 'Add a Person in a Space',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P198746', type: 'string' },
          },
          example: 'P198746',
        }),
    }),
    body: PersonRequestBody,
  },
  responses: {
    201: {
      description: 'Id of person created',
      content: {
        'application/json': {
          schema: z
            .object({ Id: z.string().exactOptional().openapi({ example: 'T1234' }) })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        Location: {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              description: 'path of the person created',
              example: '/spaces/P468486/persons/P6JFH4684',
            }),
        },
      }),
    },
  },
  security: [{ gma_auth: ['collaborator', 'owner', 'robot'] }],
})

export const getSpacesIdPersonsAllRoute = createRoute({
  method: 'get',
  path: '/spaces/{id}/persons/all',
  description: 'Returns list of persons even persons archived',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P15646476', type: 'string' },
          },
          example: 'P15646476',
        }),
    }),
    query: z.object({
      Name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Name of the person',
            in: 'query',
            name: 'Name',
            required: false,
            schema: { example: 'Germain', type: 'string' },
          },
          example: 'Germain',
        }),
      Function: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Function of the person',
            in: 'query',
            name: 'Function',
            required: false,
            schema: { example: 'employee', type: 'string' },
          },
          example: 'employee',
        }),
      Range: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'index range of the results',
            in: 'query',
            name: 'Range',
            required: false,
            schema: { example: '10-19', type: 'string' },
          },
          example: '10-19',
        }),
      Validated: z
        .enum(['true', 'false'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Status of the person',
            in: 'query',
            name: 'Validated',
            required: false,
            schema: { enum: ['true', 'false'], example: 'true', type: 'string' },
          },
          example: 'true',
        }),
      Email: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Email of the person',
            in: 'query',
            name: 'Email',
            required: false,
            schema: { example: 'maxgermain@maxgermain.com', type: 'string' },
          },
          example: 'maxgermain@maxgermain.com',
        }),
    }),
  },
  responses: { 200: PersonResponse },
})

export const patchSpacesIdPersonsMemberIdPlayerRoute = createRoute({
  method: 'patch',
  path: '/spaces/{id}/persons/{memberId}/player',
  description: 'Modify the role of a person',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P18784', type: 'string' },
          },
          example: 'P18784',
        }),
      memberId: z
        .string()
        .openapi({
          param: {
            description: 'memberId of the person',
            in: 'path',
            name: 'memberId',
            required: true,
            schema: { example: 'P18784', type: 'string' },
          },
          example: 'P18784',
        }),
    }),
    body: ModifyPlayerRequestBody,
  },
  responses: { 204: { description: 'OK' } },
})

export const getSpacesIdPersonsPersonIdRoute = createRoute({
  method: 'get',
  path: '/spaces/{id}/persons/{personId}',
  description: 'Returns a person',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P15646476', type: 'string' },
          },
          example: 'P15646476',
        }),
      personId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the person to get or memberId',
            in: 'path',
            name: 'personId',
            required: true,
            schema: { example: 'T18784', type: 'string' },
          },
          example: 'T18784',
        }),
    }),
  },
  responses: { 200: OnePersonResponse },
})

export const deleteSpacesIdPersonsPersonIdRoute = createRoute({
  method: 'delete',
  path: '/spaces/{id}/persons/{personId}',
  description: 'delete a person',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P18784', type: 'string' },
          },
          example: 'P18784',
        }),
      personId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the person to modify or memberId',
            in: 'path',
            name: 'personId',
            required: true,
            schema: { example: 'P18784', type: 'string' },
          },
          example: 'P18784',
        }),
    }),
  },
  responses: { 204: { description: 'OK' } },
})

export const patchSpacesIdPersonsPersonIdRoute = createRoute({
  method: 'patch',
  path: '/spaces/{id}/persons/{personId}',
  description: 'Modify a person',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P18784', type: 'string' },
          },
          example: 'P18784',
        }),
      personId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the person to modify or memberId',
            in: 'path',
            name: 'personId',
            required: true,
            schema: { example: 'P18784', type: 'string' },
          },
          example: 'P18784',
        }),
    }),
    body: ModifyPersonRequestBody,
  },
  responses: { 204: { description: 'OK' } },
})

export const getSpacesIdPersonsPersonIdDetailsRoute = createRoute({
  method: 'get',
  path: '/spaces/{id}/persons/{personId}/details',
  description: 'Returns all details of a person',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P15646476', type: 'string' },
          },
          example: 'P15646476',
        }),
      personId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the person to get or memberId',
            in: 'path',
            name: 'personId',
            required: true,
            schema: { example: 'T18784', type: 'string' },
          },
          example: 'T18784',
        }),
    }),
  },
  responses: { 200: DetailsResponse },
})

export const postSpacesIdPersonsPersonIdDetailsRoute = createRoute({
  method: 'post',
  path: '/spaces/{id}/persons/{personId}/details',
  description: 'Replace or Add a contact detail for a person',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P18784', type: 'string' },
          },
          example: 'P18784',
        }),
      personId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the person or memberId',
            in: 'path',
            name: 'personId',
            required: true,
            schema: { example: 'P18784', type: 'string' },
          },
          example: 'P18784',
        }),
    }),
    body: DetailsRequestBody,
  },
  responses: { 204: { description: 'OK' } },
})

export const deleteSpacesIdPersonsPersonIdDetailsDesignationRoute = createRoute({
  method: 'delete',
  path: '/spaces/{id}/persons/{personId}/details/{designation}',
  description: 'delete a contact detail for a person',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P18784', type: 'string' },
          },
          example: 'P18784',
        }),
      personId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the person or memberId',
            in: 'path',
            name: 'personId',
            required: true,
            schema: { example: 'P18784', type: 'string' },
          },
          example: 'P18784',
        }),
      designation: z
        .string()
        .openapi({
          param: {
            description: 'designation',
            in: 'path',
            name: 'designation',
            required: true,
            schema: { example: 'P18784', type: 'string' },
          },
          example: 'P18784',
        }),
    }),
  },
  responses: { 204: { description: 'OK' } },
})

export const getSpacesIdPersonsPersonIdFoldersRoute = createRoute({
  method: 'get',
  path: '/spaces/{id}/persons/{personId}/folders',
  description: 'Returns list of folders with exceptionnal access of the person personId',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P15646476', type: 'string' },
          },
          example: 'P15646476',
        }),
      personId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the person to get folders',
            in: 'path',
            name: 'personId',
            required: true,
            schema: { example: 'T18784', type: 'string' },
          },
          example: 'T18784',
        }),
    }),
    query: z.object({
      Range: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'index range of the results',
            in: 'query',
            name: 'Range',
            required: false,
            schema: { example: '10-19', type: 'string' },
          },
          example: '10-19',
        }),
    }),
  },
  responses: { 200: FolderResponse },
})

export const getSpacesIdPersonsPersonIdGroupsRoute = createRoute({
  method: 'get',
  path: '/spaces/{id}/persons/{personId}/groups',
  description: 'Returns list of groups of the person personId',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P15646476', type: 'string' },
          },
          example: 'P15646476',
        }),
      personId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the person to get groups',
            in: 'path',
            name: 'personId',
            required: true,
            schema: { example: 'T18784', type: 'string' },
          },
          example: 'T18784',
        }),
    }),
  },
  responses: { 200: GroupResponse },
})

export const getSpacesIdPersonsPersonIdPortfoliosRoute = createRoute({
  method: 'get',
  path: '/spaces/{id}/persons/{personId}/portfolios',
  description: 'Returns list of portfolios of the person personId',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P15646476', type: 'string' },
          },
          example: 'P15646476',
        }),
      personId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the person to get portfolios',
            in: 'path',
            name: 'personId',
            required: true,
            schema: { example: 'T18784', type: 'string' },
          },
          example: 'T18784',
        }),
    }),
  },
  responses: { 200: PortfoliosResponse },
})

export const postSpacesIdPersonsPersonIdPortfoliosRoute = createRoute({
  method: 'post',
  path: '/spaces/{id}/persons/{personId}/portfolios',
  description: 'Create a portfolio for the person personId',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P198746', type: 'string' },
          },
          example: 'P198746',
        }),
      personId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the person who will be the owner of the portfolio',
            in: 'path',
            name: 'personId',
            required: true,
            schema: { example: 'T18784', type: 'string' },
          },
          example: 'T18784',
        }),
    }),
    body: PortfolioRequestBody,
  },
  responses: {
    201: {
      description: 'Id of the portfolio created',
      content: {
        'application/json': {
          schema: z
            .object({ Id: z.string().exactOptional().openapi({ example: 'P1234' }) })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        Location: {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              description: 'path of the portfolio created',
              example: '/spaces/P468486/persons/P6JFH4FGFGGz84/portfolios/PM6965TUGA',
            }),
        },
      }),
    },
  },
  security: [{ gma_auth: ['collaborator', 'owner', 'robot'] }],
})

export const patchSpacesIdPortfoliosPortfolioIdPersonsMemberIdRoute = createRoute({
  method: 'patch',
  path: '/spaces/{id}/portfolios/{portfolioId}/persons/{memberId}',
  description: 'Add/Modify/Delete a person in a portfolio (except manager)',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P18784', type: 'string' },
          },
          example: 'P18784',
        }),
      memberId: z
        .string()
        .openapi({
          param: {
            description: 'memberId of the person',
            in: 'path',
            name: 'memberId',
            required: true,
            schema: { example: 'P18784', type: 'string' },
          },
          example: 'P18784',
        }),
      portfolioId: z
        .string()
        .openapi({
          param: {
            description: 'id of the portfolio',
            in: 'path',
            name: 'portfolioId',
            required: true,
            schema: { example: 'T18784', type: 'string' },
          },
          example: 'T18784',
        }),
    }),
    body: ModifyPortfolioRequestBody,
  },
  responses: { 204: { description: 'OK' } },
})

export const getSpacesIdProfessionalVehiclesRoute = createRoute({
  method: 'get',
  path: '/spaces/{id}/professional-vehicles',
  description: 'Returns list of professionalvehicles for the space {id}',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P15646476', type: 'string' },
          },
          example: 'P15646476',
        }),
    }),
    query: z.object({
      Designation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'designation of the vehicle',
            in: 'query',
            name: 'Designation',
            required: false,
            schema: { example: 'peugeot', type: 'string' },
          },
          example: 'peugeot',
        }),
    }),
  },
  responses: { 200: ProfessionalVehicleResponse },
})

export const postSpacesIdProfessionalVehiclesRoute = createRoute({
  method: 'post',
  path: '/spaces/{id}/professional-vehicles',
  description: 'Create a professional vehicle for the space',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P198746', type: 'string' },
          },
          example: 'P198746',
        }),
    }),
    body: ProfessionalVehicleRequestBody,
  },
  responses: {
    201: {
      description: 'Id of the professional vehicle created',
      content: {
        'application/json': {
          schema: z
            .object({ Id: z.string().exactOptional().openapi({ example: 'T1234' }) })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        Location: {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              description: 'path of the professional vehicle created',
              example: '/spaces/P468486/professionalvehicles/T6JFH4FGFGGz84/',
            }),
        },
      }),
    },
  },
  security: [{ gma_auth: ['collaborator', 'owner', 'robot'] }],
})

export const getSpacesIdSettingsNf203LogsRoute = createRoute({
  method: 'get',
  path: '/spaces/{id}/settings/nf203/logs',
  description: 'Returns state of activation of logs',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P15646476', type: 'string' },
          },
          example: 'P15646476',
        }),
    }),
  },
  responses: { 200: LogsResponse },
  security: [{ gma_auth: ['collaborator', 'owner', 'robot'] }],
})

export const postSpacesIdSettingsNf203LogsRoute = createRoute({
  method: 'post',
  path: '/spaces/{id}/settings/nf203/logs',
  description: 'Enable/Disable logs',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P198746', type: 'string' },
          },
          example: 'P198746',
        }),
    }),
    body: LogsRequestBody,
  },
  responses: { 204: { description: 'Nothing' } },
  security: [{ gma_auth: ['collaborator', 'owner', 'robot'] }],
})

export const getSpacesIdStatusRoute = createRoute({
  method: 'get',
  path: '/spaces/{id}/status',
  description: 'Returns all status of the space',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P15646476', type: 'string' },
          },
          example: 'P15646476',
        }),
    }),
  },
  responses: { 200: StatusResponse },
})

export const postSpacesIdStatusRoute = createRoute({
  method: 'post',
  path: '/spaces/{id}/status',
  description: 'Replace or Add a status',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P18784', type: 'string' },
          },
          example: 'P18784',
        }),
    }),
    body: StatusRequestBody,
  },
  responses: { 204: { description: 'OK' } },
})

export const deleteSpacesIdStatusCodeRoute = createRoute({
  method: 'delete',
  path: '/spaces/{id}/status/{code}',
  description: 'delete a status of the space',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P18784', type: 'string' },
          },
          example: 'P18784',
        }),
      code: z
        .string()
        .openapi({
          param: {
            description: 'code of the status',
            in: 'path',
            name: 'code',
            required: true,
            schema: { example: 'P18784', type: 'string' },
          },
          example: 'P18784',
        }),
    }),
  },
  responses: { 204: { description: 'OK' } },
})

export const getSpacesIdTaxContractsRoute = createRoute({
  method: 'get',
  path: '/spaces/{id}/tax-contracts',
  description: 'Returns list of tax contracts for the space {id}',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P15646476', type: 'string' },
          },
          example: 'P15646476',
        }),
    }),
  },
  responses: { 200: TaxContractResponse },
})

export const postSpacesIdTaxContractsRoute = createRoute({
  method: 'post',
  path: '/spaces/{id}/tax-contracts',
  description: 'Create a tax contract for the space',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P198746', type: 'string' },
          },
          example: 'P198746',
        }),
    }),
    body: TaxContractRequestBody,
  },
  responses: {
    201: {
      description: 'Id of the tax contract created',
      content: {
        'application/json': {
          schema: z
            .object({ Id: z.string().exactOptional().openapi({ example: 'T1234' }) })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        Location: {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              description: 'path of the tax contract created',
              example: '/spaces/P468486/taxcontract/T6JFH4FGFGGz84/',
            }),
        },
      }),
    },
  },
  security: [{ gma_auth: ['collaborator', 'owner', 'robot'] }],
})

export const getSpacesIdTriggersRoute = createRoute({
  method: 'get',
  path: '/spaces/{id}/triggers',
  description: 'Returns list of triggers for the space {id}',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P15646476', type: 'string' },
          },
          example: 'P15646476',
        }),
    }),
  },
  responses: { 200: TriggersResponse },
  security: [{ gma_auth: ['collaborator', 'owner', 'robot'] }],
})

export const postSpacesIdTriggersNameRoute = createRoute({
  method: 'post',
  path: '/spaces/{id}/triggers/{name}',
  description: 'Creates a trigger for the space id',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P198746', type: 'string' },
          },
          example: 'P198746',
        }),
      name: z
        .string()
        .openapi({
          param: {
            description: 'trigger name',
            in: 'path',
            name: 'name',
            required: true,
            schema: { example: 'collect', type: 'string' },
          },
          example: 'collect',
        }),
    }),
  },
  responses: { 201: { description: 'nothing' } },
  security: [{ gma_auth: ['collaborator', 'owner', 'robot'] }],
})

export const deleteSpacesIdTriggersNameRoute = createRoute({
  method: 'delete',
  path: '/spaces/{id}/triggers/{name}',
  description: 'Deletes a trigger for the space id',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P198746', type: 'string' },
          },
          example: 'P198746',
        }),
      name: z
        .string()
        .openapi({
          param: {
            description: 'trigger name',
            in: 'path',
            name: 'name',
            required: true,
            schema: { example: 'collect', type: 'string' },
          },
          example: 'collect',
        }),
    }),
  },
  responses: { 204: { description: 'nothing' } },
  security: [{ gma_auth: ['collaborator', 'owner', 'robot'] }],
})

export const deleteSpacesSpaceIdCommonFoldersIdRoute = createRoute({
  method: 'delete',
  path: '/spaces/{spaceId}/common-folders/{id}',
  description: 'Delete a common folder',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T18784', type: 'string' },
          },
          example: 'T18784',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
  },
  responses: { 204: { description: 'OK' } },
})

export const patchSpacesSpaceIdCommonFoldersIdRoute = createRoute({
  method: 'patch',
  path: '/spaces/{spaceId}/common-folders/{id}',
  description: 'Modify a common folder',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T18784', type: 'string' },
          },
          example: 'T18784',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    body: ModifyCFolderRequestBody,
  },
  responses: { 204: { description: 'OK' } },
})

export const getSpacesSpaceIdCompanyEntitiesIdFollowUpsRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/company-entities/{id}/follow-ups',
  description: 'Returns folder of the company entity',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the company entity',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T15646IFHA476', type: 'string' },
          },
          example: 'T15646IFHA476',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
  },
  responses: { 200: FolderResponse },
})

export const getSpacesSpaceIdCustomersRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/customers',
  description: 'Returns folder with Id and customer data',
  request: {
    params: z.object({
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    query: z.object({
      CustomerNumber: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'CustomerNumber of the customer',
            in: 'query',
            name: 'CustomerNumber',
            required: false,
            schema: { type: 'string' },
          },
        }),
      WithContractingPartner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'if present returns infos of the ContractingPartner too',
            in: 'query',
            name: 'WithContractingPartner',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: CustomerResponse },
})

export const getSpacesSpaceIdCustomersAllRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/customers/all',
  description: 'Returns folder with Id and customer data (even archived)',
  request: {
    params: z.object({
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    query: z.object({
      CustomerNumber: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'CustomerNumber of the employee',
            in: 'query',
            name: 'CustomerNumber',
            required: false,
            schema: { type: 'string' },
          },
        }),
      WithContractingPartner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'if present returns infos of the ContractingPartner too',
            in: 'query',
            name: 'WithContractingPartner',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: CustomerResponse },
})

export const getSpacesSpaceIdDocumentsRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/documents',
  description: 'Returns documents of the folder',
  request: {
    params: z.object({
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    query: z.object({
      FullText: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Text to find',
            in: 'query',
            name: 'FullText',
            required: false,
            schema: { example: 'durand', type: 'string' },
          },
          example: 'durand',
        }),
      Range: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'index range of the results',
            in: 'query',
            name: 'Range',
            required: false,
            schema: { example: '10-19', type: 'string' },
          },
          example: '10-19',
        }),
      Class: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'class of the document to find',
            in: 'query',
            name: 'Class',
            required: false,
            schema: { example: 'payslip', type: 'string' },
          },
          example: 'payslip',
        }),
    }),
  },
  responses: { 200: DocumentSearchResponse },
})

export const patchSpacesSpaceIdDocumentsDocumentIdRoute = createRoute({
  method: 'patch',
  path: '/spaces/{spaceId}/documents/{documentId}',
  description: 'modify a doc',
  request: {
    params: z.object({
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
      documentId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the document',
            in: 'path',
            name: 'documentId',
            required: true,
            schema: { example: 'PJOFJAFA8Y', type: 'string' },
          },
          example: 'PJOFJAFA8Y',
        }),
    }),
    body: ModifyDocumentRequestBody,
  },
  responses: { 204: { description: 'OK' } },
})

export const getSpacesSpaceIdDocumentsDocumentIdExtendRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/documents/{documentId}/extend',
  description: 'read the data of a document',
  request: {
    params: z.object({
      documentId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the document',
            in: 'path',
            name: 'documentId',
            required: true,
            schema: { example: 'P15646IFHA476', type: 'string' },
          },
          example: 'P15646IFHA476',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
  },
  responses: { 200: DocumentDataResponse },
})

export const postSpacesSpaceIdDocumentsDocumentIdExtendRoute = createRoute({
  method: 'post',
  path: '/spaces/{spaceId}/documents/{documentId}/extend',
  description: 'Add a data to a document',
  request: {
    params: z.object({
      documentId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the document',
            in: 'path',
            name: 'documentId',
            required: true,
            schema: { example: 'P1987HGFKJFAA46', type: 'string' },
          },
          example: 'P1987HGFKJFAA46',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    body: { content: { 'application/json': { schema: z.object({}) } }, required: true },
  },
  responses: {
    201: {
      description: 'Id of document created',
      content: {
        'application/json': {
          schema: z
            .object({ Id: z.string().exactOptional().openapi({ example: 'P1234' }) })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        Location: {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              description: 'path of the document created',
              example: '/folders/PFJOJAF14546/documents/P48548FDAF',
            }),
        },
      }),
    },
  },
  security: [{ gma_auth: ['collaborator', 'owner', 'robot'] }],
})

export const getSpacesSpaceIdDocumentsDocumentIdFoldersRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/documents/{documentId}/folders',
  description: 'Returns versions of the document',
  request: {
    params: z.object({
      documentId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the document',
            in: 'path',
            name: 'documentId',
            required: true,
            schema: { example: 'P15646IFHA476', type: 'string' },
          },
          example: 'P15646IFHA476',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
  },
  responses: { 200: OneDocumentFoldersResponse },
})

export const postSpacesSpaceIdDocumentsDocumentIdMailingRoute = createRoute({
  method: 'post',
  path: '/spaces/{spaceId}/documents/{documentId}/mailing',
  description: 'send by mail a document',
  request: {
    params: z.object({
      documentId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the document',
            in: 'path',
            name: 'documentId',
            required: true,
            schema: { example: 'P1987HGFKJFAA46', type: 'string' },
          },
          example: 'P1987HGFKJFAA46',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    body: MailingDocumentRequestBody,
  },
  responses: { 200: MailingResponse },
  security: [{ gma_auth: ['collaborator', 'owner', 'robot'] }],
})

export const getSpacesSpaceIdDocumentsDocumentIdMailingpriceRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/documents/{documentId}/mailingprice',
  description: 'returns the number of pages and the price of the pdf to send by mail',
  request: {
    params: z.object({
      documentId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the document',
            in: 'path',
            name: 'documentId',
            required: true,
            schema: { example: 'P1987HGFKJFAA46', type: 'string' },
          },
          example: 'P1987HGFKJFAA46',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
  },
  responses: { 200: MailingResponse },
  security: [{ gma_auth: ['collaborator', 'owner', 'robot'] }],
})

export const getSpacesSpaceIdDocumentsDocumentIdVersionsRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/documents/{documentId}/versions',
  description: 'Returns versions of the document',
  request: {
    params: z.object({
      documentId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the document',
            in: 'path',
            name: 'documentId',
            required: true,
            schema: { example: 'P15646IFHA476', type: 'string' },
          },
          example: 'P15646IFHA476',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
  },
  responses: { 200: DocumentResponse },
})

export const postSpacesSpaceIdDocumentsDocumentIdVersionsRoute = createRoute({
  method: 'post',
  path: '/spaces/{spaceId}/documents/{documentId}/versions',
  description: 'Add a version to a document and set it as current',
  request: {
    params: z.object({
      documentId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the document',
            in: 'path',
            name: 'documentId',
            required: true,
            schema: { example: 'P1987HGFKJFAA46', type: 'string' },
          },
          example: 'P1987HGFKJFAA46',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    body: VersionRequestBody,
  },
  responses: {
    201: {
      description: 'Id of document created',
      content: {
        'application/json': {
          schema: z
            .object({ Id: z.string().exactOptional().openapi({ example: 'P1234' }) })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        Location: {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              description: 'path of the document created',
              example: '/folders/PFJOJAF14546/documents/P48548FDAF',
            }),
        },
      }),
    },
  },
  security: [{ gma_auth: ['collaborator', 'owner', 'robot'] }],
})

export const getSpacesSpaceIdDocumentsDocumentIdVersionsCurrentRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/documents/{documentId}/versions/current',
  description: 'Returns current version of the document',
  request: {
    params: z.object({
      documentId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the document',
            in: 'path',
            name: 'documentId',
            required: true,
            schema: { example: 'P15646IFHA476', type: 'string' },
          },
          example: 'P15646IFHA476',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
  },
  responses: { 200: CurrentDocumentResponse },
})

export const getSpacesSpaceIdDocumentsIdAccessRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/documents/{id}/access',
  description: 'Returns accesses of one document',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the document',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P15646IFHA476', type: 'string' },
          },
          example: 'P15646IFHA476',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
  },
  responses: { 200: OneAccessDocumentResponse },
})

export const getSpacesSpaceIdDocumentsIdAccountingRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/documents/{id}/accounting',
  description: 'Returns the document with the accounting property',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the document',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P15646IFHA476', type: 'string' },
          },
          example: 'P15646IFHA476',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
  },
  responses: { 200: OneAccountingResponse },
})

export const getSpacesSpaceIdDocumentsIdDownloadRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/documents/{id}/download',
  description: 'Returns content of one document',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the document',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P15646IFHA476', type: 'string' },
          },
          example: 'P15646IFHA476',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
  },
  responses: { 200: OneDocumentResponse },
})

export const getSpacesSpaceIdEmployeesRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/employees',
  description: 'Returns folders with Id and employee data',
  request: {
    params: z.object({
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    query: z.object({
      SSNumber: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'SSNumber of the employee',
            in: 'query',
            name: 'SSNumber',
            required: false,
            schema: { type: 'string' },
          },
        }),
      EmployeeNumber: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'EmployeeNumber of the employee',
            in: 'query',
            name: 'EmployeeNumber',
            required: false,
            schema: { type: 'string' },
          },
        }),
      WithContractingPartner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'if present returns infos of the ContractingPartner too',
            in: 'query',
            name: 'WithContractingPartner',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: EmployeeResponse },
})

export const getSpacesSpaceIdEmployeesAllRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/employees/all',
  description: 'Returns folders with Id and employee data (even archived)',
  request: {
    params: z.object({
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    query: z.object({
      SSNumber: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'SSNumber of the employee',
            in: 'query',
            name: 'SSNumber',
            required: false,
            schema: { type: 'string' },
          },
        }),
      EmployeeNumber: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'EmployeeNumber of the employee',
            in: 'query',
            name: 'EmployeeNumber',
            required: false,
            schema: { type: 'string' },
          },
        }),
      WithContractingPartner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'if present returns infos of the ContractingPartner too',
            in: 'query',
            name: 'WithContractingPartner',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: EmployeeResponse },
})

export const getSpacesSpaceIdEmployersRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/employers',
  description: 'Returns folders with Id and employer data',
  request: {
    params: z.object({
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    query: z.object({
      EmployeeNumber: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'EmployeeNumber of the employer contract',
            in: 'query',
            name: 'EmployeeNumber',
            required: false,
            schema: { type: 'string' },
          },
        }),
      WithContractingPartner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'if present returns infos of the ContractingPartner too',
            in: 'query',
            name: 'WithContractingPartner',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: EmployeeResponse },
})

export const getSpacesSpaceIdEmployersAllRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/employers/all',
  description: 'Returns folders with Id and employer data (even archived)',
  request: {
    params: z.object({
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    query: z.object({
      EmployeeNumber: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'EmployeeNumber of the employer contract',
            in: 'query',
            name: 'EmployeeNumber',
            required: false,
            schema: { type: 'string' },
          },
        }),
      WithContractingPartner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'if present returns infos of the ContractingPartner too',
            in: 'query',
            name: 'WithContractingPartner',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: EmployeeResponse },
})

export const getSpacesSpaceIdExtendRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/extend',
  description: 'read the data of a space',
  request: {
    params: z.object({
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
  },
  responses: { 200: OneSpaceWithExtendResponse },
})

export const postSpacesSpaceIdExtendRoute = createRoute({
  method: 'post',
  path: '/spaces/{spaceId}/extend',
  description: 'Add a data to a space',
  request: {
    params: z.object({
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    body: { content: { 'application/json': { schema: z.object({}) } }, required: true },
  },
  responses: {
    201: {
      description: 'Id of document created',
      content: {
        'application/json': {
          schema: z
            .object({ Id: z.string().exactOptional().openapi({ example: 'P1234' }) })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        Location: {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              description: 'path of the document created',
              example: '/folders/PFJOJAF14546/documents/P48548FDAF',
            }),
        },
      }),
    },
  },
  security: [{ gma_auth: ['collaborator', 'owner', 'robot'] }],
})

export const getSpacesSpaceIdFoldersRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/folders',
  description: 'Returns folders of the space',
  request: {
    query: z.object({
      Name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Name of the folder',
            in: 'query',
            name: 'Name',
            required: false,
            schema: { example: 'Secrétariat juridique', type: 'string' },
          },
          example: 'Secrétariat juridique',
        }),
      Keywords: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'keywords attached to the folder',
            in: 'query',
            name: 'Keywords',
            required: false,
            schema: { example: 'juridique', type: 'string' },
          },
          example: 'juridique',
        }),
      RootFolders: z
        .literal('all')
        .exactOptional()
        .openapi({
          param: {
            description: 'only root folders',
            in: 'query',
            name: 'RootFolders',
            required: false,
            schema: { enum: ['all'], example: 'all', type: 'string' },
          },
          example: 'all',
        }),
      Range: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'index range of the results',
            in: 'query',
            name: 'Range',
            required: false,
            schema: { example: '10-19', type: 'string' },
          },
          example: '10-19',
        }),
      Class: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'class of the folder',
            in: 'query',
            name: 'Class',
            required: false,
            schema: { example: 'social', type: 'string' },
          },
          example: 'social',
        }),
    }),
    params: z.object({
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
  },
  responses: { 200: FolderResponse },
})

export const getSpacesSpaceIdFoldersAllRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/folders/all',
  description: 'Returns folders of the space (even archived)',
  request: {
    query: z.object({
      Name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Name of the folder',
            in: 'query',
            name: 'Name',
            required: false,
            schema: { example: 'Secrétariat juridique', type: 'string' },
          },
          example: 'Secrétariat juridique',
        }),
      Range: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'index range of the results',
            in: 'query',
            name: 'Range',
            required: false,
            schema: { example: '10-19', type: 'string' },
          },
          example: '10-19',
        }),
      Keywords: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'keywords attached to the folder',
            in: 'query',
            name: 'Keywords',
            required: false,
            schema: { example: 'juridique', type: 'string' },
          },
          example: 'juridique',
        }),
      Class: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'class of the folder',
            in: 'query',
            name: 'Class',
            required: false,
            schema: { example: 'social', type: 'string' },
          },
          example: 'social',
        }),
    }),
    params: z.object({
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
  },
  responses: { 200: FolderResponse },
})

export const deleteSpacesSpaceIdFoldersFolderIdBankStatementsDocumentIdRoute = createRoute({
  method: 'delete',
  path: '/spaces/{spaceId}/folders/{folderId}/bank-statements/{documentId}',
  description: 'delete a bank statement',
  request: {
    params: z.object({
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
      folderId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'folderId',
            required: true,
            schema: { example: 'PJOFJAFA8Y', type: 'string' },
          },
          example: 'PJOFJAFA8Y',
        }),
      documentId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the document',
            in: 'path',
            name: 'documentId',
            required: true,
            schema: { example: 'PJOFJAFA8Y', type: 'string' },
          },
          example: 'PJOFJAFA8Y',
        }),
    }),
  },
  responses: { 204: { description: 'OK' } },
})

export const patchSpacesSpaceIdFoldersFolderIdBankStatementsDocumentIdRoute = createRoute({
  method: 'patch',
  path: '/spaces/{spaceId}/folders/{folderId}/bank-statements/{documentId}',
  description: 'modify a bank statement',
  request: {
    params: z.object({
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
      folderId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'folderId',
            required: true,
            schema: { example: 'PJOFJAFA8Y', type: 'string' },
          },
          example: 'PJOFJAFA8Y',
        }),
      documentId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the document',
            in: 'path',
            name: 'documentId',
            required: true,
            schema: { example: 'PJOFJAFA8Y', type: 'string' },
          },
          example: 'PJOFJAFA8Y',
        }),
    }),
    body: ModifyBankStatementRequestBody,
  },
  responses: { 204: { description: 'OK' } },
})

export const deleteSpacesSpaceIdFoldersFolderIdContractualDocumentsDocumentIdRoute = createRoute({
  method: 'delete',
  path: '/spaces/{spaceId}/folders/{folderId}/contractual-documents/{documentId}',
  description: 'delete a contractual document',
  request: {
    params: z.object({
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
      folderId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'folderId',
            required: true,
            schema: { example: 'PJOFJAFA8Y', type: 'string' },
          },
          example: 'PJOFJAFA8Y',
        }),
      documentId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the document',
            in: 'path',
            name: 'documentId',
            required: true,
            schema: { example: 'PJOFJAFA8Y', type: 'string' },
          },
          example: 'PJOFJAFA8Y',
        }),
    }),
  },
  responses: { 204: { description: 'OK' } },
})

export const patchSpacesSpaceIdFoldersFolderIdContractualDocumentsDocumentIdRoute = createRoute({
  method: 'patch',
  path: '/spaces/{spaceId}/folders/{folderId}/contractual-documents/{documentId}',
  description: 'modify a contractual document',
  request: {
    params: z.object({
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
      folderId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'folderId',
            required: true,
            schema: { example: 'PJOFJAFA8Y', type: 'string' },
          },
          example: 'PJOFJAFA8Y',
        }),
      documentId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the document',
            in: 'path',
            name: 'documentId',
            required: true,
            schema: { example: 'PJOFJAFA8Y', type: 'string' },
          },
          example: 'PJOFJAFA8Y',
        }),
    }),
    body: ModifyContractualDocumentRequestBody,
  },
  responses: { 204: { description: 'OK' } },
})

export const deleteSpacesSpaceIdFoldersFolderIdCorporateTaxDeclarationsDocumentIdRoute =
  createRoute({
    method: 'delete',
    path: '/spaces/{spaceId}/folders/{folderId}/corporate-tax-declarations/{documentId}',
    description: 'delete a corporate tax declaration',
    request: {
      params: z.object({
        spaceId: z
          .string()
          .openapi({
            param: {
              description: 'Id of the space',
              in: 'path',
              name: 'spaceId',
              required: true,
              schema: { example: 'P156HUFHA476', type: 'string' },
            },
            example: 'P156HUFHA476',
          }),
        folderId: z
          .string()
          .openapi({
            param: {
              description: 'Id of the folder',
              in: 'path',
              name: 'folderId',
              required: true,
              schema: { example: 'PJOFJAFA8Y', type: 'string' },
            },
            example: 'PJOFJAFA8Y',
          }),
        documentId: z
          .string()
          .openapi({
            param: {
              description: 'Id of the document',
              in: 'path',
              name: 'documentId',
              required: true,
              schema: { example: 'PJOFJAFA8Y', type: 'string' },
            },
            example: 'PJOFJAFA8Y',
          }),
      }),
    },
    responses: { 204: { description: 'OK' } },
  })

export const patchSpacesSpaceIdFoldersFolderIdCorporateTaxDeclarationsDocumentIdRoute = createRoute(
  {
    method: 'patch',
    path: '/spaces/{spaceId}/folders/{folderId}/corporate-tax-declarations/{documentId}',
    description: 'modify a coporate tax declaration',
    request: {
      params: z.object({
        spaceId: z
          .string()
          .openapi({
            param: {
              description: 'Id of the space',
              in: 'path',
              name: 'spaceId',
              required: true,
              schema: { example: 'P156HUFHA476', type: 'string' },
            },
            example: 'P156HUFHA476',
          }),
        folderId: z
          .string()
          .openapi({
            param: {
              description: 'Id of the folder',
              in: 'path',
              name: 'folderId',
              required: true,
              schema: { example: 'PJOFJAFA8Y', type: 'string' },
            },
            example: 'PJOFJAFA8Y',
          }),
        documentId: z
          .string()
          .openapi({
            param: {
              description: 'Id of the document',
              in: 'path',
              name: 'documentId',
              required: true,
              schema: { example: 'PJOFJAFA8Y', type: 'string' },
            },
            example: 'PJOFJAFA8Y',
          }),
      }),
      body: ModifyCorporateTaxDeclarationRequestBody,
    },
    responses: { 204: { description: 'OK' } },
  },
)

export const deleteSpacesSpaceIdFoldersFolderIdExpenseProofsDocumentIdRoute = createRoute({
  method: 'delete',
  path: '/spaces/{spaceId}/folders/{folderId}/expense-proofs/{documentId}',
  description: 'delete an expense proof',
  request: {
    params: z.object({
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
      folderId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'folderId',
            required: true,
            schema: { example: 'PJOFJAFA8Y', type: 'string' },
          },
          example: 'PJOFJAFA8Y',
        }),
      documentId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the document',
            in: 'path',
            name: 'documentId',
            required: true,
            schema: { example: 'PJOFJAFA8Y', type: 'string' },
          },
          example: 'PJOFJAFA8Y',
        }),
    }),
  },
  responses: { 204: { description: 'OK' } },
})

export const patchSpacesSpaceIdFoldersFolderIdExpenseProofsDocumentIdRoute = createRoute({
  method: 'patch',
  path: '/spaces/{spaceId}/folders/{folderId}/expense-proofs/{documentId}',
  description: 'modify an expense report',
  request: {
    params: z.object({
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
      folderId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'folderId',
            required: true,
            schema: { example: 'PJOFJAFA8Y', type: 'string' },
          },
          example: 'PJOFJAFA8Y',
        }),
      documentId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the document',
            in: 'path',
            name: 'documentId',
            required: true,
            schema: { example: 'PJOFJAFA8Y', type: 'string' },
          },
          example: 'PJOFJAFA8Y',
        }),
    }),
    body: ModifyExpenseProofRequestBody,
  },
  responses: { 204: { description: 'OK' } },
})

export const deleteSpacesSpaceIdFoldersFolderIdExpenseReportsDocumentIdRoute = createRoute({
  method: 'delete',
  path: '/spaces/{spaceId}/folders/{folderId}/expense-reports/{documentId}',
  description: 'delete an expense report',
  request: {
    params: z.object({
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
      folderId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'folderId',
            required: true,
            schema: { example: 'PJOFJAFA8Y', type: 'string' },
          },
          example: 'PJOFJAFA8Y',
        }),
      documentId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the document',
            in: 'path',
            name: 'documentId',
            required: true,
            schema: { example: 'PJOFJAFA8Y', type: 'string' },
          },
          example: 'PJOFJAFA8Y',
        }),
    }),
  },
  responses: { 204: { description: 'OK' } },
})

export const patchSpacesSpaceIdFoldersFolderIdExpenseReportsDocumentIdRoute = createRoute({
  method: 'patch',
  path: '/spaces/{spaceId}/folders/{folderId}/expense-reports/{documentId}',
  description: 'modify an expense report',
  request: {
    params: z.object({
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
      folderId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'folderId',
            required: true,
            schema: { example: 'PJOFJAFA8Y', type: 'string' },
          },
          example: 'PJOFJAFA8Y',
        }),
      documentId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the document',
            in: 'path',
            name: 'documentId',
            required: true,
            schema: { example: 'PJOFJAFA8Y', type: 'string' },
          },
          example: 'PJOFJAFA8Y',
        }),
    }),
    body: ModifyExpenseReportRequestBody,
  },
  responses: { 204: { description: 'OK' } },
})

export const deleteSpacesSpaceIdFoldersFolderIdInvoicesDocumentIdRoute = createRoute({
  method: 'delete',
  path: '/spaces/{spaceId}/folders/{folderId}/invoices/{documentId}',
  description: 'delete an invoice document',
  request: {
    params: z.object({
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
      folderId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'folderId',
            required: true,
            schema: { example: 'PJOFJAFA8Y', type: 'string' },
          },
          example: 'PJOFJAFA8Y',
        }),
      documentId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the document',
            in: 'path',
            name: 'documentId',
            required: true,
            schema: { example: 'PJOFJAFA8Y', type: 'string' },
          },
          example: 'PJOFJAFA8Y',
        }),
    }),
  },
  responses: { 204: { description: 'OK' } },
})

export const patchSpacesSpaceIdFoldersFolderIdInvoicesDocumentIdRoute = createRoute({
  method: 'patch',
  path: '/spaces/{spaceId}/folders/{folderId}/invoices/{documentId}',
  description: 'modify a invoice',
  request: {
    params: z.object({
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
      folderId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'folderId',
            required: true,
            schema: { example: 'PJOFJAFA8Y', type: 'string' },
          },
          example: 'PJOFJAFA8Y',
        }),
      documentId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the document',
            in: 'path',
            name: 'documentId',
            required: true,
            schema: { example: 'PJOFJAFA8Y', type: 'string' },
          },
          example: 'PJOFJAFA8Y',
        }),
    }),
    body: ModifyInvoiceRequestBody,
  },
  responses: { 204: { description: 'OK' } },
})

export const getSpacesSpaceIdFoldersFolderIdNominativeSocialDeclarationsDocumentIdRoute =
  createRoute({
    method: 'get',
    path: '/spaces/{spaceId}/folders/{folderId}/nominative-social-declarations/{documentId}',
    description: 'get a nominative social declaration',
    request: {
      params: z.object({
        spaceId: z
          .string()
          .openapi({
            param: {
              description: 'Id of the space',
              in: 'path',
              name: 'spaceId',
              required: true,
              schema: { example: 'P156HUFHA476', type: 'string' },
            },
            example: 'P156HUFHA476',
          }),
        folderId: z
          .string()
          .openapi({
            param: {
              description: 'Id of the folder',
              in: 'path',
              name: 'folderId',
              required: true,
              schema: { example: 'PJOFJAFA8Y', type: 'string' },
            },
            example: 'PJOFJAFA8Y',
          }),
        documentId: z
          .string()
          .openapi({
            param: {
              description: 'Id of the document',
              in: 'path',
              name: 'documentId',
              required: true,
              schema: { example: 'PJOFJAFA8Y', type: 'string' },
            },
            example: 'PJOFJAFA8Y',
          }),
      }),
    },
    responses: { 200: OneNSDResponse },
  })

export const deleteSpacesSpaceIdFoldersFolderIdOtherTaxesDocumentIdRoute = createRoute({
  method: 'delete',
  path: '/spaces/{spaceId}/folders/{folderId}/other-taxes/{documentId}',
  description: 'delete a tax declaration',
  request: {
    params: z.object({
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
      folderId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'folderId',
            required: true,
            schema: { example: 'PJOFJAFA8Y', type: 'string' },
          },
          example: 'PJOFJAFA8Y',
        }),
      documentId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the document',
            in: 'path',
            name: 'documentId',
            required: true,
            schema: { example: 'PJOFJAFA8Y', type: 'string' },
          },
          example: 'PJOFJAFA8Y',
        }),
    }),
  },
  responses: { 204: { description: 'OK' } },
})

export const patchSpacesSpaceIdFoldersFolderIdOtherTaxesDocumentIdRoute = createRoute({
  method: 'patch',
  path: '/spaces/{spaceId}/folders/{folderId}/other-taxes/{documentId}',
  description: 'modify an other tax declaration',
  request: {
    params: z.object({
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
      folderId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'folderId',
            required: true,
            schema: { example: 'PJOFJAFA8Y', type: 'string' },
          },
          example: 'PJOFJAFA8Y',
        }),
      documentId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the document',
            in: 'path',
            name: 'documentId',
            required: true,
            schema: { example: 'PJOFJAFA8Y', type: 'string' },
          },
          example: 'PJOFJAFA8Y',
        }),
    }),
    body: ModifyOtherTaxRequestBody,
  },
  responses: { 204: { description: 'OK' } },
})

export const deleteSpacesSpaceIdFoldersFolderIdPayrollsDocumentIdRoute = createRoute({
  method: 'delete',
  path: '/spaces/{spaceId}/folders/{folderId}/payrolls/{documentId}',
  description: 'delete a payroll',
  request: {
    params: z.object({
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
      folderId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'folderId',
            required: true,
            schema: { example: 'PJOFJAFA8Y', type: 'string' },
          },
          example: 'PJOFJAFA8Y',
        }),
      documentId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the document',
            in: 'path',
            name: 'documentId',
            required: true,
            schema: { example: 'PJOFJAFA8Y', type: 'string' },
          },
          example: 'PJOFJAFA8Y',
        }),
    }),
  },
  responses: { 204: { description: 'OK' } },
})

export const patchSpacesSpaceIdFoldersFolderIdPayrollsDocumentIdRoute = createRoute({
  method: 'patch',
  path: '/spaces/{spaceId}/folders/{folderId}/payrolls/{documentId}',
  description: 'modify a payroll',
  request: {
    params: z.object({
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
      folderId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'folderId',
            required: true,
            schema: { example: 'PJOFJAFA8Y', type: 'string' },
          },
          example: 'PJOFJAFA8Y',
        }),
      documentId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the document',
            in: 'path',
            name: 'documentId',
            required: true,
            schema: { example: 'PJOFJAFA8Y', type: 'string' },
          },
          example: 'PJOFJAFA8Y',
        }),
    }),
    body: ModifyPayrollRequestBody,
  },
  responses: { 204: { description: 'OK' } },
})

export const postSpacesSpaceIdFoldersFolderIdPayrollsDocumentIdRefreshRoute = createRoute({
  method: 'post',
  path: '/spaces/{spaceId}/folders/{folderId}/payrolls/{documentId}/refresh',
  description: 'recalculate a payroll',
  request: {
    params: z.object({
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
      folderId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'folderId',
            required: true,
            schema: { example: 'PJOFJAFA8Y', type: 'string' },
          },
          example: 'PJOFJAFA8Y',
        }),
      documentId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the document',
            in: 'path',
            name: 'documentId',
            required: true,
            schema: { example: 'PJOFJAFA8Y', type: 'string' },
          },
          example: 'PJOFJAFA8Y',
        }),
    }),
  },
  responses: {
    201: {
      description: 'Id of the payroll generated',
      content: {
        'application/json': {
          schema: z
            .object({ Id: z.string().exactOptional().openapi({ example: 'T1234' }) })
            .openapi({ required: [] }),
        },
      },
    },
    204: { description: 'OK' },
  },
})

export const deleteSpacesSpaceIdFoldersFolderIdPayslipsDocumentIdRoute = createRoute({
  method: 'delete',
  path: '/spaces/{spaceId}/folders/{folderId}/payslips/{documentId}',
  description: 'delete a payslip',
  request: {
    params: z.object({
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
      folderId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'folderId',
            required: true,
            schema: { example: 'PJOFJAFA8Y', type: 'string' },
          },
          example: 'PJOFJAFA8Y',
        }),
      documentId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the document',
            in: 'path',
            name: 'documentId',
            required: true,
            schema: { example: 'PJOFJAFA8Y', type: 'string' },
          },
          example: 'PJOFJAFA8Y',
        }),
    }),
  },
  responses: { 204: { description: 'OK' } },
})

export const patchSpacesSpaceIdFoldersFolderIdPayslipsDocumentIdRoute = createRoute({
  method: 'patch',
  path: '/spaces/{spaceId}/folders/{folderId}/payslips/{documentId}',
  description: 'modify a payslip',
  request: {
    params: z.object({
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
      folderId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'folderId',
            required: true,
            schema: { example: 'PJOFJAFA8Y', type: 'string' },
          },
          example: 'PJOFJAFA8Y',
        }),
      documentId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the document',
            in: 'path',
            name: 'documentId',
            required: true,
            schema: { example: 'PJOFJAFA8Y', type: 'string' },
          },
          example: 'PJOFJAFA8Y',
        }),
    }),
    body: ModifyPayslipRequestBody,
  },
  responses: { 204: { description: 'OK' } },
})

export const deleteSpacesSpaceIdFoldersFolderIdSocialContractsDocumentIdRoute = createRoute({
  method: 'delete',
  path: '/spaces/{spaceId}/folders/{folderId}/social-contracts/{documentId}',
  description: 'delete a social contract',
  request: {
    params: z.object({
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
      folderId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'folderId',
            required: true,
            schema: { example: 'PJOFJAFA8Y', type: 'string' },
          },
          example: 'PJOFJAFA8Y',
        }),
      documentId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the document',
            in: 'path',
            name: 'documentId',
            required: true,
            schema: { example: 'PJOFJAFA8Y', type: 'string' },
          },
          example: 'PJOFJAFA8Y',
        }),
    }),
  },
  responses: { 204: { description: 'OK' } },
})

export const patchSpacesSpaceIdFoldersFolderIdSocialContractsDocumentIdRoute = createRoute({
  method: 'patch',
  path: '/spaces/{spaceId}/folders/{folderId}/social-contracts/{documentId}',
  description: 'modify a social contract',
  request: {
    params: z.object({
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
      folderId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'folderId',
            required: true,
            schema: { example: 'PJOFJAFA8Y', type: 'string' },
          },
          example: 'PJOFJAFA8Y',
        }),
      documentId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the document',
            in: 'path',
            name: 'documentId',
            required: true,
            schema: { example: 'PJOFJAFA8Y', type: 'string' },
          },
          example: 'PJOFJAFA8Y',
        }),
    }),
    body: ModifySocialContractRequestBody,
  },
  responses: { 204: { description: 'OK' } },
})

export const deleteSpacesSpaceIdFoldersFolderIdSocialDeclarationsDocumentIdRoute = createRoute({
  method: 'delete',
  path: '/spaces/{spaceId}/folders/{folderId}/social-declarations/{documentId}',
  description: 'delete a social declaration',
  request: {
    params: z.object({
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
      folderId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'folderId',
            required: true,
            schema: { example: 'PJOFJAFA8Y', type: 'string' },
          },
          example: 'PJOFJAFA8Y',
        }),
      documentId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the document',
            in: 'path',
            name: 'documentId',
            required: true,
            schema: { example: 'PJOFJAFA8Y', type: 'string' },
          },
          example: 'PJOFJAFA8Y',
        }),
    }),
  },
  responses: { 204: { description: 'OK' } },
})

export const patchSpacesSpaceIdFoldersFolderIdSocialDeclarationsDocumentIdRoute = createRoute({
  method: 'patch',
  path: '/spaces/{spaceId}/folders/{folderId}/social-declarations/{documentId}',
  description: 'modify a social declaration',
  request: {
    params: z.object({
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
      folderId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'folderId',
            required: true,
            schema: { example: 'PJOFJAFA8Y', type: 'string' },
          },
          example: 'PJOFJAFA8Y',
        }),
      documentId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the document',
            in: 'path',
            name: 'documentId',
            required: true,
            schema: { example: 'PJOFJAFA8Y', type: 'string' },
          },
          example: 'PJOFJAFA8Y',
        }),
    }),
    body: ModifySocialDeclarationRequestBody,
  },
  responses: { 204: { description: 'OK' } },
})

export const deleteSpacesSpaceIdFoldersFolderIdVatDeclarationsDocumentIdRoute = createRoute({
  method: 'delete',
  path: '/spaces/{spaceId}/folders/{folderId}/vat-declarations/{documentId}',
  description: 'delete a VAT declaration',
  request: {
    params: z.object({
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
      folderId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'folderId',
            required: true,
            schema: { example: 'PJOFJAFA8Y', type: 'string' },
          },
          example: 'PJOFJAFA8Y',
        }),
      documentId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the document',
            in: 'path',
            name: 'documentId',
            required: true,
            schema: { example: 'PJOFJAFA8Y', type: 'string' },
          },
          example: 'PJOFJAFA8Y',
        }),
    }),
  },
  responses: { 204: { description: 'OK' } },
})

export const patchSpacesSpaceIdFoldersFolderIdVatDeclarationsDocumentIdRoute = createRoute({
  method: 'patch',
  path: '/spaces/{spaceId}/folders/{folderId}/vat-declarations/{documentId}',
  description: 'modify a vat declaration',
  request: {
    params: z.object({
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
      folderId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'folderId',
            required: true,
            schema: { example: 'PJOFJAFA8Y', type: 'string' },
          },
          example: 'PJOFJAFA8Y',
        }),
      documentId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the document',
            in: 'path',
            name: 'documentId',
            required: true,
            schema: { example: 'PJOFJAFA8Y', type: 'string' },
          },
          example: 'PJOFJAFA8Y',
        }),
    }),
    body: ModifyVATDeclarationRequestBody,
  },
  responses: { 204: { description: 'OK' } },
})

export const getSpacesSpaceIdFoldersIdRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/folders/{id}',
  description: 'Returns folder with Id',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T15646476', type: 'string' },
          },
          example: 'T15646476',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
  },
  responses: { 200: OneFolderResponse },
})

export const patchSpacesSpaceIdFoldersIdRoute = createRoute({
  method: 'patch',
  path: '/spaces/{spaceId}/folders/{id}',
  description: 'Modify a Folder (except Name, Class, ModificationDate and ArchivalDate)',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T18784', type: 'string' },
          },
          example: 'T18784',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    body: ModifyFolderRequestBody,
  },
  responses: { 204: { description: 'OK' } },
})

export const deleteSpacesSpaceIdFoldersIdAccountingYearRoute = createRoute({
  method: 'delete',
  path: '/spaces/{spaceId}/folders/{id}/accounting-year',
  description: 'delete an AccountingYear',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T18784', type: 'string' },
          },
          example: 'T18784',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
  },
  responses: { 204: { description: 'OK' } },
})

export const patchSpacesSpaceIdFoldersIdAccountingYearRoute = createRoute({
  method: 'patch',
  path: '/spaces/{spaceId}/folders/{id}/accounting-year',
  description:
    'Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and AccountingYear data',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T18784', type: 'string' },
          },
          example: 'T18784',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    body: ModifyAccountingYearRequestBody,
  },
  responses: { 204: { description: 'OK' } },
})

export const getSpacesSpaceIdFoldersIdAccountingsRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/folders/{id}/accountings',
  description:
    'Returns accountings documents of the folder (results and taxation or accountingyear)',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T15646IFHA476', type: 'string' },
          },
          example: 'T15646IFHA476',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    query: z.object({
      Date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'date range of the documents',
            in: 'query',
            name: 'Date',
            required: false,
            schema: { example: '20160321,null', type: 'string' },
          },
          example: '20160321,null',
        }),
      FolderDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'date range of attachment',
            in: 'query',
            name: 'FolderDate',
            required: false,
            schema: { example: '20180306,null', type: 'string' },
          },
          example: '20180306,null',
        }),
      Title: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Title of the accounting document',
            in: 'query',
            name: 'Title',
            required: false,
            schema: { example: 'Accounting', type: 'string' },
          },
          example: 'Accounting',
        }),
      Workbook: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'workbook of the accounting',
            in: 'query',
            name: 'Workbook',
            required: false,
            schema: { example: 'Accounting', type: 'string' },
          },
          example: 'Accounting',
        }),
      Class: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'class of the accounting',
            in: 'query',
            name: 'Class',
            required: false,
            schema: { example: 'Invoice', type: 'string' },
          },
          example: 'Invoice',
        }),
      AccountedOn: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'accountedon of the accounting (boolean available)',
            in: 'query',
            name: 'AccountedOn',
            required: false,
            schema: { example: '20180201,null', type: 'string' },
          },
          example: '20180201,null',
        }),
      WithFolders: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'if present, the folders containing the documents are returned',
            in: 'query',
            name: 'WithFolders',
            required: false,
            schema: { example: 'yes', type: 'string' },
          },
          example: 'yes',
        }),
      Range: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'index range of the results',
            in: 'query',
            name: 'Range',
            required: false,
            schema: { example: '10-19', type: 'string' },
          },
          example: '10-19',
        }),
    }),
  },
  responses: { 200: AccountingResponse },
})

export const getSpacesSpaceIdFoldersIdAccountingsJournalRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/folders/{id}/accountings-journal',
  description: 'journal of accountings document delivered to a customer',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the customer folder',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T15646IFHA476', type: 'string' },
          },
          example: 'T15646IFHA476',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    query: z.object({
      DeliveryDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'delivery dates of the document',
            in: 'query',
            name: 'DeliveryDate',
            required: false,
            schema: { example: '20191123082536,null', type: 'string' },
          },
          example: '20191123082536,null',
        }),
      AccountingDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'accounting dates of the document',
            in: 'query',
            name: 'AccountingDate',
            required: false,
            schema: { example: '20170215,null', type: 'string' },
          },
          example: '20170215,null',
        }),
      Number: z
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
            description: 'numbers of the document',
            in: 'query',
            name: 'Number',
            required: false,
            schema: { example: '12,17', type: 'integer' },
          },
          example: '12,17',
        }),
      Workbook: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'workbook of the document',
            in: 'query',
            name: 'Workbook',
            required: false,
            schema: { example: 'cashwoucher', type: 'string' },
          },
          example: 'cashwoucher',
        }),
      YearMonth: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'yearmonth of the document',
            in: 'query',
            name: 'YearMonth',
            required: false,
            schema: { example: '201802', type: 'string' },
          },
          example: '201802',
        }),
      Class: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'class of the document',
            in: 'query',
            name: 'Class',
            required: false,
            schema: { example: 'invoice', type: 'string' },
          },
          example: 'invoice',
        }),
      Code: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'code of the document',
            in: 'query',
            name: 'Code',
            required: false,
            schema: { example: 'delivered', type: 'string' },
          },
          example: 'delivered',
        }),
      TargetFolderName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Name of the target folder of the document',
            in: 'query',
            name: 'TargetFolderName',
            required: false,
            schema: { example: 'Exercice*', type: 'string' },
          },
          example: 'Exercice*',
        }),
    }),
  },
  responses: { 200: AccountingsJournalResponse },
})

export const getSpacesSpaceIdFoldersIdBankRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/folders/{id}/bank',
  description: 'Returns folder with Id and bank data',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T15646476', type: 'string' },
          },
          example: 'T15646476',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
  },
  responses: { 200: OneBankResponse },
})

export const deleteSpacesSpaceIdFoldersIdBankRoute = createRoute({
  method: 'delete',
  path: '/spaces/{spaceId}/folders/{id}/bank',
  description:
    'Delete a Folder (except Name, Class, ModificationDate and ArchivalDate) and Bank data',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T18784', type: 'string' },
          },
          example: 'T18784',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
  },
  responses: { 204: { description: 'OK' } },
})

export const patchSpacesSpaceIdFoldersIdBankRoute = createRoute({
  method: 'patch',
  path: '/spaces/{spaceId}/folders/{id}/bank',
  description:
    'Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Bank data',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T18784', type: 'string' },
          },
          example: 'T18784',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    body: ModifyBankRequestBody,
  },
  responses: { 204: { description: 'OK' } },
})

export const getSpacesSpaceIdFoldersIdBankStatementsRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/folders/{id}/bank-statements',
  description: 'Returns bank statements of the folder bank',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder bank',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T15646IFHA476', type: 'string' },
          },
          example: 'T15646IFHA476',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    query: z.object({
      Date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'range date of the documents',
            in: 'query',
            name: 'Date',
            required: false,
            schema: { example: '20160321, null', type: 'string' },
          },
          example: '20160321, null',
        }),
      Number: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of the bank statement',
            in: 'query',
            name: 'Number',
            required: false,
            schema: { example: '201603', type: 'string' },
          },
          example: '201603',
        }),
      Range: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'index range of the results',
            in: 'query',
            name: 'Range',
            required: false,
            schema: { example: '10-19', type: 'string' },
          },
          example: '10-19',
        }),
    }),
  },
  responses: { 200: BankStatementResponse },
})

export const postSpacesSpaceIdFoldersIdBankStatementsRoute = createRoute({
  method: 'post',
  path: '/spaces/{spaceId}/folders/{id}/bank-statements',
  description: 'Add a bank statement in a folder bank',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder bank',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P1987HGFKJFAA46', type: 'string' },
          },
          example: 'P1987HGFKJFAA46',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    body: BankStatementRequestBody,
  },
  responses: {
    201: {
      description: 'Id of document created',
      content: {
        'application/json': {
          schema: z
            .object({ Id: z.string().exactOptional().openapi({ example: 'T1234' }) })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        Location: {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              description: 'path of the document created',
              example: '/folders/PFJOJAF14546/bankstatements/P48548FDAF',
            }),
        },
      }),
    },
  },
  security: [{ gma_auth: ['collaborator', 'owner', 'robot'] }],
})

export const patchSpacesSpaceIdFoldersIdCollectiveDecisionRoute = createRoute({
  method: 'patch',
  path: '/spaces/{spaceId}/folders/{id}/collective-decision',
  description:
    'Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Collective Decision data',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T18784', type: 'string' },
          },
          example: 'T18784',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    body: ModifyCollectiveDecisionRequestBody,
  },
  responses: { 204: { description: 'OK' } },
})

export const getSpacesSpaceIdFoldersIdCommonFoldersRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/folders/{id}/common-folders',
  description: 'Returns common folders of a folder',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P15646IFHA476', type: 'string' },
          },
          example: 'P15646IFHA476',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    query: z.object({
      Name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Name of the folder',
            in: 'query',
            name: 'Name',
            required: false,
            schema: { example: 'Folder one', type: 'string' },
          },
          example: 'Folder one',
        }),
      Keywords: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'keywords attached to the folder',
            in: 'query',
            name: 'Keywords',
            required: false,
            schema: { example: 'juridique', type: 'string' },
          },
          example: 'juridique',
        }),
    }),
  },
  responses: { 200: FolderResponse },
})

export const postSpacesSpaceIdFoldersIdCommonFoldersRoute = createRoute({
  method: 'post',
  path: '/spaces/{spaceId}/folders/{id}/common-folders',
  description: 'Add a common folder in another folder',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P1987HGFKJFAA46', type: 'string' },
          },
          example: 'P1987HGFKJFAA46',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    body: CommonFolderRequestBody,
  },
  responses: {
    201: {
      description: 'Id of folder created',
      content: {
        'application/json': {
          schema: z
            .object({ Id: z.string().exactOptional().openapi({ example: 'T1234' }) })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        Location: {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              description: 'path of the folder created',
              example: 'spaces/P464864/folders/PFJOJAF14546/common-folders/P48548FDAF',
            }),
        },
      }),
    },
  },
  security: [{ gma_auth: ['collaborator', 'owner', 'robot'] }],
})

export const getSpacesSpaceIdFoldersIdCommonFoldersAllRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/folders/{id}/common-folders/all',
  description: 'Returns common folders (even archived) of a folder',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P15646IFHA476', type: 'string' },
          },
          example: 'P15646IFHA476',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    query: z.object({
      Name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Name of the folder',
            in: 'query',
            name: 'Name',
            required: false,
            schema: { example: 'Folder one', type: 'string' },
          },
          example: 'Folder one',
        }),
      Keywords: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'keywords attached to the folder',
            in: 'query',
            name: 'Keywords',
            required: false,
            schema: { example: 'juridique', type: 'string' },
          },
          example: 'juridique',
        }),
    }),
  },
  responses: { 200: FolderResponse },
})

export const getSpacesSpaceIdFoldersIdContractingPartnerRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/folders/{id}/contracting-partner',
  description: 'Returns all contracting partners of a contract',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder (contract)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T15646IFHA476', type: 'string' },
          },
          example: 'T15646IFHA476',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
  },
  responses: { 200: ContractingPartnerResponse },
})

export const getSpacesSpaceIdFoldersIdContractingPartnerSpaceRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/folders/{id}/contracting-partner/space',
  description: 'Returns collector space of a contract',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder (contract)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T15646IFHA476', type: 'string' },
          },
          example: 'T15646IFHA476',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
  },
  responses: { 200: ContractingPartnerResponse },
})

export const getSpacesSpaceIdFoldersIdContractualDocumentsRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/folders/{id}/contractual-documents',
  description: 'Returns documents of the folder',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T15646IFHA476', type: 'string' },
          },
          example: 'T15646IFHA476',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    query: z.object({
      Date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'date range of the documents',
            in: 'query',
            name: 'Date',
            required: false,
            schema: { example: '20160321,null', type: 'string' },
          },
          example: '20160321,null',
        }),
      FolderDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'date range of attachment',
            in: 'query',
            name: 'FolderDate',
            required: false,
            schema: { example: '20180306,null', type: 'string' },
          },
          example: '20180306,null',
        }),
      Type: z
        .enum([
          'contract',
          'engagement-letter',
          'amendment',
          'purchase-order',
          'delivery-order',
          'quotation',
          'other',
        ])
        .exactOptional()
        .openapi({
          param: {
            description: 'Type of the document',
            in: 'query',
            name: 'Type',
            required: false,
            schema: {
              enum: [
                'contract',
                'engagement-letter',
                'amendment',
                'purchase-order',
                'delivery-order',
                'quotation',
                'other',
              ],
              example: 'amendment',
              type: 'string',
            },
          },
          example: 'amendment',
        }),
      Range: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'index range of the results',
            in: 'query',
            name: 'Range',
            required: false,
            schema: { example: '10-19', type: 'string' },
          },
          example: '10-19',
        }),
    }),
  },
  responses: { 200: ContractualDocumentResponse },
})

export const postSpacesSpaceIdFoldersIdContractualDocumentsRoute = createRoute({
  method: 'post',
  path: '/spaces/{spaceId}/folders/{id}/contractual-documents',
  description: 'Add a document in a folder',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P1987HGFKJFAA46', type: 'string' },
          },
          example: 'P1987HGFKJFAA46',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    body: ContractualDocumentRequestBody,
  },
  responses: {
    201: {
      description: 'Id of document created',
      content: {
        'application/json': {
          schema: z
            .object({ Id: z.string().exactOptional().openapi({ example: 'T1234' }) })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        Location: {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              description: 'path of the document created',
              example: '/folders/PFJOJAF14546/contractual-documents/P48548FDAF',
            }),
        },
      }),
    },
  },
  security: [{ gma_auth: ['collaborator', 'owner', 'robot'] }],
})

export const getSpacesSpaceIdFoldersIdContractualRelationshipRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/folders/{id}/contractual-relationship',
  description: 'Returns folder with Id and contractual-relationship data',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T15646476', type: 'string' },
          },
          example: 'T15646476',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
  },
  responses: { 200: OneContractualRelationshipResponse },
})

export const getSpacesSpaceIdFoldersIdCoporateTaxDeclarationsRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/folders/{id}/coporate-tax-declarations',
  description: 'Returns corporate tax declarations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder result and taxation',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T15646IFHA476', type: 'string' },
          },
          example: 'T15646IFHA476',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    query: z.object({
      Date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'range date of the documents',
            in: 'query',
            name: 'Date',
            required: false,
            schema: { example: '20160321, null', type: 'string' },
          },
          example: '20160321, null',
        }),
      Range: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'index range of the results',
            in: 'query',
            name: 'Range',
            required: false,
            schema: { example: '10-19', type: 'string' },
          },
          example: '10-19',
        }),
    }),
  },
  responses: { 200: CorporateTaxDeclarationResponse },
})

export const postSpacesSpaceIdFoldersIdCoporateTaxDeclarationsRoute = createRoute({
  method: 'post',
  path: '/spaces/{spaceId}/folders/{id}/coporate-tax-declarations',
  description: 'Add a corporate tax declaration',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder result and taxation',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P1987HGFKJFAA46', type: 'string' },
          },
          example: 'P1987HGFKJFAA46',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    body: CorporateTaxDeclarationRequestBody,
  },
  responses: {
    201: {
      description: 'Id of document created',
      content: {
        'application/json': {
          schema: z
            .object({ Id: z.string().exactOptional().openapi({ example: 'T1234' }) })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        Location: {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              description: 'path of the document created',
              example: '/folders/PFJOJAF14546/coporatetaxdeclarations/P48548FDAF',
            }),
        },
      }),
    },
  },
  security: [{ gma_auth: ['collaborator', 'owner', 'robot'] }],
})

export const getSpacesSpaceIdFoldersIdCustomerRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/folders/{id}/customer',
  description: 'Returns folder with Id and customer data',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T15646476', type: 'string' },
          },
          example: 'T15646476',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
  },
  responses: { 200: OneCustomerResponse },
})

export const deleteSpacesSpaceIdFoldersIdCustomerRoute = createRoute({
  method: 'delete',
  path: '/spaces/{spaceId}/folders/{id}/customer',
  description: 'delete a customer',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T18784', type: 'string' },
          },
          example: 'T18784',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
  },
  responses: { 204: { description: 'OK' } },
})

export const patchSpacesSpaceIdFoldersIdCustomerRoute = createRoute({
  method: 'patch',
  path: '/spaces/{spaceId}/folders/{id}/customer',
  description:
    'Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Customer data',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T18784', type: 'string' },
          },
          example: 'T18784',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    body: ModifyCustomerRequestBody,
  },
  responses: { 204: { description: 'OK' } },
})

export const getSpacesSpaceIdFoldersIdDeliveriesJournalRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/folders/{id}/deliveries-journal',
  description: 'journal of documents delivered to a customer',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the customer folder',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T15646IFHA476', type: 'string' },
          },
          example: 'T15646IFHA476',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    query: z.object({
      DeliveryDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'delivery dates of the document',
            in: 'query',
            name: 'DeliveryDate',
            required: false,
            schema: { example: '20191123082536,null', type: 'string' },
          },
          example: '20191123082536,null',
        }),
      AccountingDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'accounting dates of the document',
            in: 'query',
            name: 'AccountingDate',
            required: false,
            schema: { example: '20170215,null', type: 'string' },
          },
          example: '20170215,null',
        }),
      Number: z
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
            description: 'numbers of the document',
            in: 'query',
            name: 'Number',
            required: false,
            schema: { example: '12,17', type: 'integer' },
          },
          example: '12,17',
        }),
      Class: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'class of the document',
            in: 'query',
            name: 'Class',
            required: false,
            schema: { example: 'invoice', type: 'string' },
          },
          example: 'invoice',
        }),
      TargetFolderName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Name of the target folder of the document',
            in: 'query',
            name: 'TargetFolderName',
            required: false,
            schema: { example: 'Exercice*', type: 'string' },
          },
          example: 'Exercice*',
        }),
    }),
  },
  responses: { 200: DeliveriesJournalResponse },
})

export const getSpacesSpaceIdFoldersIdDocumentsRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/folders/{id}/documents',
  description: 'Returns documents of the folder',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T15646IFHA476', type: 'string' },
          },
          example: 'T15646IFHA476',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    query: z.object({
      Date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'date range of the documents',
            in: 'query',
            name: 'Date',
            required: false,
            schema: { example: '20160321,null', type: 'string' },
          },
          example: '20160321,null',
        }),
      Title: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Title of the document',
            in: 'query',
            name: 'Title',
            required: false,
            schema: { example: 'Facture EDF', type: 'string' },
          },
          example: 'Facture EDF',
        }),
      FolderDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'date range of attachment',
            in: 'query',
            name: 'FolderDate',
            required: false,
            schema: { example: '20180306,null', type: 'string' },
          },
          example: '20180306,null',
        }),
      Class: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Class of document',
            in: 'query',
            name: 'Class',
            required: false,
            schema: { example: 'Contract', type: 'string' },
          },
          example: 'Contract',
        }),
      Range: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'index range of the results',
            in: 'query',
            name: 'Range',
            required: false,
            schema: { example: '10-19', type: 'string' },
          },
          example: '10-19',
        }),
    }),
  },
  responses: { 200: DocumentResponse },
})

export const postSpacesSpaceIdFoldersIdDocumentsRoute = createRoute({
  method: 'post',
  path: '/spaces/{spaceId}/folders/{id}/documents',
  description: 'Add a document in a folder',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P1987HGFKJFAA46', type: 'string' },
          },
          example: 'P1987HGFKJFAA46',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    body: DocumentRequestBody,
  },
  responses: {
    201: {
      description: 'Id of document created',
      content: {
        'application/json': {
          schema: z
            .object({ Id: z.string().exactOptional().openapi({ example: 'P1234' }) })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        Location: {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              description: 'path of the document created',
              example: '/folders/PFJOJAF14546/documents/P48548FDAF',
            }),
        },
      }),
    },
  },
  security: [{ gma_auth: ['collaborator', 'owner', 'robot'] }],
})

export const patchSpacesSpaceIdFoldersIdDocumentsDocumentIdDetachRoute = createRoute({
  method: 'patch',
  path: '/spaces/{spaceId}/folders/{id}/documents/{documentId}/detach',
  description: 'Detach a doc of a folder',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P18784', type: 'string' },
          },
          example: 'P18784',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
      documentId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the document',
            in: 'path',
            name: 'documentId',
            required: true,
            schema: { example: 'PJOFJAFA8Y', type: 'string' },
          },
          example: 'PJOFJAFA8Y',
        }),
    }),
  },
  responses: { 204: { description: 'OK' } },
})

export const getSpacesSpaceIdFoldersIdEmployeeRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/folders/{id}/employee',
  description: 'Returns folder with Id and employee data',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T15646476', type: 'string' },
          },
          example: 'T15646476',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
  },
  responses: { 200: OneEmployeeResponse },
})

export const deleteSpacesSpaceIdFoldersIdEmployeeRoute = createRoute({
  method: 'delete',
  path: '/spaces/{spaceId}/folders/{id}/employee',
  description:
    'Delete a Folder (except Name, Class, ModificationDate and ArchivalDate) and Employee data',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T18784', type: 'string' },
          },
          example: 'T18784',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
  },
  responses: { 204: { description: 'OK' } },
})

export const patchSpacesSpaceIdFoldersIdEmployeeRoute = createRoute({
  method: 'patch',
  path: '/spaces/{spaceId}/folders/{id}/employee',
  description:
    'Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Employee data',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T18784', type: 'string' },
          },
          example: 'T18784',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    body: ModifyEmployeeRequestBody,
  },
  responses: { 204: { description: 'OK' } },
})

export const getSpacesSpaceIdFoldersIdExpenseProofsRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/folders/{id}/expense-proofs',
  description: 'Returns expense proofs of the folder (social, followup or exchange)',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T15646IFHA476', type: 'string' },
          },
          example: 'T15646IFHA476',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    query: z.object({
      Date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'date range of the documents',
            in: 'query',
            name: 'Date',
            required: false,
            schema: { example: '20160321,null', type: 'string' },
          },
          example: '20160321,null',
        }),
      FolderDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'date range of attachment',
            in: 'query',
            name: 'FolderDate',
            required: false,
            schema: { example: '20180306,null', type: 'string' },
          },
          example: '20180306,null',
        }),
      Status: z
        .enum(['R', 'W', 'V'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Status of the expense proof',
            in: 'query',
            name: 'Status',
            required: false,
            schema: { enum: ['R', 'W', 'V'], example: 'R', type: 'string' },
          },
          example: 'R',
        }),
      NoExpenseReport: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'To return expense proofs not attached to an expense report',
            in: 'query',
            name: 'NoExpenseReport',
            required: false,
            schema: { example: '1', type: 'boolean' },
          },
          example: '1',
        }),
      Range: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'index range of the results',
            in: 'query',
            name: 'Range',
            required: false,
            schema: { example: '10-19', type: 'string' },
          },
          example: '10-19',
        }),
    }),
  },
  responses: { 200: ExpenseProofResponse },
})

export const postSpacesSpaceIdFoldersIdExpenseProofsRoute = createRoute({
  method: 'post',
  path: '/spaces/{spaceId}/folders/{id}/expense-proofs',
  description: 'Add a expense proof in a folder followup or exchange',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P1987HGFKJFAA46', type: 'string' },
          },
          example: 'P1987HGFKJFAA46',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    body: ExpenseProofRequestBody,
  },
  responses: {
    201: {
      description: 'Id of expense proof created',
      content: {
        'application/json': {
          schema: z
            .object({ Id: z.string().exactOptional().openapi({ example: 'T1234' }) })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        Location: {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              description: 'path of the expense proof created',
              example: '/folders/PFJOJAF14546/expenseproofs/P48548FDAF',
            }),
        },
      }),
    },
  },
  security: [{ gma_auth: ['collaborator', 'owner', 'robot'] }],
})

export const getSpacesSpaceIdFoldersIdExpenseReportsRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/folders/{id}/expense-reports',
  description: 'Returns expense reports of the folder (social or followup)',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T15646IFHA476', type: 'string' },
          },
          example: 'T15646IFHA476',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    query: z.object({
      Date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'date range of the documents',
            in: 'query',
            name: 'Date',
            required: false,
            schema: { example: '20160321,null', type: 'string' },
          },
          example: '20160321,null',
        }),
      FolderDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'date range of attachment',
            in: 'query',
            name: 'FolderDate',
            required: false,
            schema: { example: '20180306,null', type: 'string' },
          },
          example: '20180306,null',
        }),
      WithExtend: z
        .enum(['true', 'false'])
        .exactOptional()
        .openapi({
          param: {
            description: 'If present returns also the data extend',
            in: 'query',
            name: 'WithExtend',
            required: false,
            schema: { enum: ['true', 'false'], example: 'true', type: 'string' },
          },
          example: 'true',
        }),
      Range: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'index range of the results',
            in: 'query',
            name: 'Range',
            required: false,
            schema: { example: '10-19', type: 'string' },
          },
          example: '10-19',
        }),
      ProcessingDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'range of processing date (boolean available)',
            in: 'query',
            name: 'ProcessingDate',
            required: false,
            schema: { example: '20180526,null', type: 'string' },
          },
          example: '20180526,null',
        }),
      ExpenseDate: z
        .any()
        .exactOptional()
        .openapi({
          param: {
            description: 'range of ExpenseDate (valid available)',
            in: 'query',
            name: 'ExpenseDate',
            required: false,
            schema: { example: '20180526,null' },
          },
          example: '20180526,null',
        }),
      SortOrder: z
        .enum(['asc', 'desc'])
        .exactOptional()
        .openapi({
          param: {
            description: 'order of sort (if absent default is asc)',
            in: 'query',
            name: 'SortOrder',
            required: false,
            schema: { enum: ['asc', 'desc'], example: 'asc', type: 'string' },
          },
          example: 'asc',
        }),
      SortName: z
        .enum(['ExpenseDate', 'InclVAT', 'Title'])
        .exactOptional()
        .openapi({
          param: {
            description: 'name of value for sort',
            in: 'query',
            name: 'SortName',
            required: false,
            schema: {
              enum: ['ExpenseDate', 'InclVAT', 'Title'],
              example: 'ExpenseDate',
              type: 'string',
            },
          },
          example: 'ExpenseDate',
        }),
    }),
  },
  responses: { 200: ExpenseReportResponse },
})

export const postSpacesSpaceIdFoldersIdExpenseReportsRoute = createRoute({
  method: 'post',
  path: '/spaces/{spaceId}/folders/{id}/expense-reports',
  description: 'Add a expense report in a folder followup',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P1987HGFKJFAA46', type: 'string' },
          },
          example: 'P1987HGFKJFAA46',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    body: ExpenseReportRequestBody,
  },
  responses: {
    201: {
      description: 'Id of expense report created',
      content: {
        'application/json': {
          schema: z
            .object({ Id: z.string().exactOptional().openapi({ example: 'T1234' }) })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        Location: {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              description: 'path of the expense report created',
              example: '/folders/PFJOJAF14546/expensereports/P48548FDAF',
            }),
        },
      }),
    },
  },
  security: [{ gma_auth: ['collaborator', 'owner', 'robot'] }],
})

export const getSpacesSpaceIdFoldersIdExpenseReportsExpenseReportIdExpenseProofsRoute = createRoute(
  {
    method: 'get',
    path: '/spaces/{spaceId}/folders/{id}/expense-reports/{expenseReportId}/expense-proofs',
    description: 'Returns expense proofs linked to the expenseReportId',
    request: {
      params: z.object({
        id: z
          .string()
          .openapi({
            param: {
              description: 'Id of the folder',
              in: 'path',
              name: 'id',
              required: true,
              schema: { example: 'T15646IFHA476', type: 'string' },
            },
            example: 'T15646IFHA476',
          }),
        spaceId: z
          .string()
          .openapi({
            param: {
              description: 'Id of the space',
              in: 'path',
              name: 'spaceId',
              required: true,
              schema: { example: 'P156HUFHA476', type: 'string' },
            },
            example: 'P156HUFHA476',
          }),
        expenseReportId: z
          .string()
          .openapi({
            param: {
              description: 'Id of the expense report',
              in: 'path',
              name: 'expenseReportId',
              required: true,
              schema: { example: 'P156HUFHA476', type: 'string' },
            },
            example: 'P156HUFHA476',
          }),
      }),
      query: z.object({
        Date: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description: 'Date of the documents (YYYY or YYYYMM or YYYYMMDD)',
              in: 'query',
              name: 'Date',
              required: false,
              schema: { example: '20160321', type: 'string' },
            },
            example: '20160321',
          }),
        Status: z
          .enum(['R', 'W', 'V'])
          .exactOptional()
          .openapi({
            param: {
              description: 'Status of the expense proof',
              in: 'query',
              name: 'Status',
              required: false,
              schema: { enum: ['R', 'W', 'V'], example: 'R', type: 'string' },
            },
            example: 'R',
          }),
        FolderDate: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description: 'Date of upload of the document (YYYY or YYYYMM or YYYYMMDD)',
              in: 'query',
              name: 'FolderDate',
              required: false,
              schema: { example: 20180202000000, type: 'string' },
            },
            example: 20180202000000,
          }),
      }),
    },
    responses: { 200: ExpenseProofResponse },
  },
)

export const getSpacesSpaceIdFoldersIdInsuranceRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/folders/{id}/insurance',
  description: 'Returns folder with Id and insurance data',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T15646476', type: 'string' },
          },
          example: 'T15646476',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
  },
  responses: { 200: OneInsuranceResponse },
})

export const deleteSpacesSpaceIdFoldersIdInsuranceRoute = createRoute({
  method: 'delete',
  path: '/spaces/{spaceId}/folders/{id}/insurance',
  description:
    'Delete a Folder (except Name, Class, ModificationDate and ArchivalDate) and Insurance data',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T18784', type: 'string' },
          },
          example: 'T18784',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
  },
  responses: { 204: { description: 'OK' } },
})

export const patchSpacesSpaceIdFoldersIdInsuranceRoute = createRoute({
  method: 'patch',
  path: '/spaces/{spaceId}/folders/{id}/insurance',
  description:
    'Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Insurance data',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T18784', type: 'string' },
          },
          example: 'T18784',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    body: ModifyInsuranceRequestBody,
  },
  responses: { 204: { description: 'OK' } },
})

export const getSpacesSpaceIdFoldersIdInvoicesRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/folders/{id}/invoices',
  description:
    'Returns invoices of the folder (customer, provider, accountingyear or root folders customers or providers)',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T15646IFHA476', type: 'string' },
          },
          example: 'T15646IFHA476',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    query: z.object({
      Title: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Title of the documents',
            in: 'query',
            name: 'Title',
            required: false,
            schema: { example: 'factrure', type: 'string' },
          },
          example: 'factrure',
        }),
      Date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'date range of the documents',
            in: 'query',
            name: 'Date',
            required: false,
            schema: { example: '20160321,null', type: 'string' },
          },
          example: '20160321,null',
        }),
      Number: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of the invoice',
            in: 'query',
            name: 'Number',
            required: false,
            schema: { example: 23585, type: 'string' },
          },
          example: 23585,
        }),
      InclVAT: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'amount incl. VAT',
            in: 'query',
            name: 'InclVAT',
            required: false,
            schema: { example: '100.50,123.69', type: 'number' },
          },
          example: '100.50,123.69',
        }),
      BeforeVAT: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'amount before VAT',
            in: 'query',
            name: 'BeforeVAT',
            required: false,
            schema: { example: '102.50,123.69', type: 'number' },
          },
          example: '102.50,123.69',
        }),
      DueDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'date due payment',
            in: 'query',
            name: 'DueDate',
            required: false,
            schema: { example: '20201231,20211231', type: 'string' },
          },
          example: '20201231,20211231',
        }),
      PaymentDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'date of payment (boolean and valid available)',
            in: 'query',
            name: 'PaymentDate',
            required: false,
            schema: { example: '20201201,20211201', type: 'string' },
          },
          example: '20201201,20211201',
        }),
      InvoiceDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'range date of invoice',
            in: 'query',
            name: 'InvoiceDate',
            required: false,
            schema: { example: '20201201', type: 'string' },
          },
          example: '20201201',
        }),
      FolderDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'date range of attachment',
            in: 'query',
            name: 'FolderDate',
            required: false,
            schema: { example: '20180306,null', type: 'string' },
          },
          example: '20180306,null',
        }),
      AccountedOn: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'value of AccountedOn (boolean available but not range)',
            in: 'query',
            name: 'AccountedOn',
            required: false,
            schema: { example: '20220101', type: 'string' },
          },
          example: '20220101',
        }),
      WithExtend: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'If present returns also the data extend',
            in: 'query',
            name: 'WithExtend',
            required: false,
            schema: { example: '202102,null', type: 'string' },
          },
          example: '202102,null',
        }),
      Extend: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'json object to filter extend data',
            in: 'query',
            name: 'Extend',
            required: false,
            schema: {
              example:
                '[{"Name":"field1","Equals":"test"},{"Name":"field2","Start":"20180101"},{"Name":"field3","End":"20190101"}]',
              type: 'string',
            },
          },
          example:
            '[{"Name":"field1","Equals":"test"},{"Name":"field2","Start":"20180101"},{"Name":"field3","End":"20190101"}]',
        }),
      Range: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'index range of the results',
            in: 'query',
            name: 'Range',
            required: false,
            schema: { example: '10-19', type: 'string' },
          },
          example: '10-19',
        }),
      SortOrder: z
        .enum(['asc', 'desc'])
        .exactOptional()
        .openapi({
          param: {
            description: 'order of sort (if absent default is asc)',
            in: 'query',
            name: 'SortOrder',
            required: false,
            schema: { enum: ['asc', 'desc'], example: 'asc', type: 'string' },
          },
          example: 'asc',
        }),
      SortName: z
        .enum(['DueDate', 'PaymentDate', 'InvoiceDate', 'InclVAT', 'Contracting', 'Title'])
        .exactOptional()
        .openapi({
          param: {
            description: 'name of value for sort',
            in: 'query',
            name: 'SortName',
            required: false,
            schema: {
              enum: ['DueDate', 'PaymentDate', 'InvoiceDate', 'InclVAT', 'Contracting', 'Title'],
              example: 'PaymentDate',
              type: 'string',
            },
          },
          example: 'PaymentDate',
        }),
    }),
  },
  responses: { 200: InvoiceResponse },
})

export const postSpacesSpaceIdFoldersIdInvoicesRoute = createRoute({
  method: 'post',
  path: '/spaces/{spaceId}/folders/{id}/invoices',
  description: 'Add a invoice in a folder of a customer or a provider',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P1987HGFKJFAA46', type: 'string' },
          },
          example: 'P1987HGFKJFAA46',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    body: InvoiceRequestBody,
  },
  responses: {
    201: {
      description: 'Id of invoice created',
      content: {
        'application/json': {
          schema: z
            .object({ Id: z.string().exactOptional().openapi({ example: 'T1234' }) })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        Location: {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              description: 'path of the invoice created',
              example: '/folders/PFJOJAF14546/invoices/P48548FDAF',
            }),
        },
      }),
    },
  },
  security: [{ gma_auth: ['collaborator', 'owner', 'robot'] }],
})

export const getSpacesSpaceIdFoldersIdLegalEntityRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/folders/{id}/legal-entity',
  description: 'Returns legal entity of a follow up folder',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder (followup)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T15646IFHA476', type: 'string' },
          },
          example: 'T15646IFHA476',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
  },
  responses: { 200: LegalEntityFollowResponse },
})

export const getSpacesSpaceIdFoldersIdLoanRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/folders/{id}/loan',
  description: 'Returns folder with Id and loan data',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T15646476', type: 'string' },
          },
          example: 'T15646476',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
  },
  responses: { 200: OneLoanResponse },
})

export const deleteSpacesSpaceIdFoldersIdLoanRoute = createRoute({
  method: 'delete',
  path: '/spaces/{spaceId}/folders/{id}/loan',
  description:
    'Delete a Folder (except Name, Class, ModificationDate and ArchivalDate) and Loan data',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T18784', type: 'string' },
          },
          example: 'T18784',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
  },
  responses: { 204: { description: 'OK' } },
})

export const patchSpacesSpaceIdFoldersIdLoanRoute = createRoute({
  method: 'patch',
  path: '/spaces/{spaceId}/folders/{id}/loan',
  description:
    'Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Loan data',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T18784', type: 'string' },
          },
          example: 'T18784',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    body: ModifyLoanRequestBody,
  },
  responses: { 204: { description: 'OK' } },
})

export const getSpacesSpaceIdFoldersIdMessagesRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/folders/{id}/messages',
  description: 'Returns messages of the folder',
  request: {
    query: z.object({
      Text: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Name of the message',
            in: 'query',
            name: 'Text',
            required: false,
            schema: { example: '*welcom*', type: 'string' },
          },
          example: '*welcom*',
        }),
      Range: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'index range of the results',
            in: 'query',
            name: 'Range',
            required: false,
            schema: { example: '10-19', type: 'string' },
          },
          example: '10-19',
        }),
      MessageDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'date of the message',
            in: 'query',
            name: 'MessageDate',
            required: false,
            schema: { example: '20190202', type: 'string' },
          },
          example: '20190202',
        }),
    }),
    params: z.object({
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P18784', type: 'string' },
          },
          example: 'P18784',
        }),
    }),
  },
  responses: { 200: MessageResponse },
})

export const postSpacesSpaceIdFoldersIdMessagesRoute = createRoute({
  method: 'post',
  path: '/spaces/{spaceId}/folders/{id}/messages',
  description: 'Write a message in the journal of a folder',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P18784', type: 'string' },
          },
          example: 'P18784',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    body: MessageRequestBody,
  },
  responses: { 200: { description: 'OK' } },
  security: [{ gma_auth: ['collaborator', 'owner', 'robot'] }],
})

export const getSpacesSpaceIdFoldersIdMessagesMessageIdRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/folders/{id}/messages/{messageId}',
  description: 'Returns message with Id',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T15646476', type: 'string' },
          },
          example: 'T15646476',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
      messageId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the mesage',
            in: 'path',
            name: 'messageId',
            required: true,
            schema: { example: 'TJOFJAFA8Y', type: 'string' },
          },
          example: 'TJOFJAFA8Y',
        }),
    }),
  },
  responses: { 200: OneMessageResponse },
})

export const patchSpacesSpaceIdFoldersIdMessagesMessageIdRoute = createRoute({
  method: 'patch',
  path: '/spaces/{spaceId}/folders/{id}/messages/{messageId}',
  description: 'Modify a Message',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P18784', type: 'string' },
          },
          example: 'P18784',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
      messageId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the message',
            in: 'path',
            name: 'messageId',
            required: true,
            schema: { example: 'TJOFJAFA8Y', type: 'string' },
          },
          example: 'TJOFJAFA8Y',
        }),
    }),
    body: ModifyMessageRequestBody,
  },
  responses: { 204: { description: 'OK' } },
})

export const getSpacesSpaceIdFoldersIdNominativeSocialDeclarationsRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/folders/{id}/nominative-social-declarations',
  description: 'Returns nominative social declarations of the folder social',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder social',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T15646IFHA476', type: 'string' },
          },
          example: 'T15646IFHA476',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    query: z.object({
      Date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'range date of the documents',
            in: 'query',
            name: 'Date',
            required: false,
            schema: { example: '20160321, null', type: 'string' },
          },
          example: '20160321, null',
        }),
      Range: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'index range of the results',
            in: 'query',
            name: 'Range',
            required: false,
            schema: { example: '10-19', type: 'string' },
          },
          example: '10-19',
        }),
    }),
  },
  responses: { 200: NSDResponse },
})

export const getSpacesSpaceIdFoldersIdOtherTaxesRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/folders/{id}/other-taxes',
  description: 'Returns other taxes declarations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder taxcontract',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T15646IFHA476', type: 'string' },
          },
          example: 'T15646IFHA476',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    query: z.object({
      Date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'range date of the documents',
            in: 'query',
            name: 'Date',
            required: false,
            schema: { example: '20160321, null', type: 'string' },
          },
          example: '20160321, null',
        }),
      Range: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'index range of the results',
            in: 'query',
            name: 'Range',
            required: false,
            schema: { example: '10-19', type: 'string' },
          },
          example: '10-19',
        }),
    }),
  },
  responses: { 200: OtherTaxResponse },
})

export const postSpacesSpaceIdFoldersIdOtherTaxesRoute = createRoute({
  method: 'post',
  path: '/spaces/{spaceId}/folders/{id}/other-taxes',
  description: 'Add a tax declaration',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder tax contract',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P1987HGFKJFAA46', type: 'string' },
          },
          example: 'P1987HGFKJFAA46',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    body: OtherTaxRequestBody,
  },
  responses: {
    201: {
      description: 'Id of document created',
      content: {
        'application/json': {
          schema: z
            .object({ Id: z.string().exactOptional().openapi({ example: 'T1234' }) })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        Location: {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              description: 'path of the document created',
              example: '/folders/PFJOJAF14546/othertaxes/P48548FDAF',
            }),
        },
      }),
    },
  },
  security: [{ gma_auth: ['collaborator', 'owner', 'robot'] }],
})

export const getSpacesSpaceIdFoldersIdPasswordsRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/folders/{id}/passwords',
  description: 'Returns identifiers/passwords of the folder',
  request: {
    params: z.object({
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P18784', type: 'string' },
          },
          example: 'P18784',
        }),
    }),
  },
  responses: { 200: PasswordResponse },
})

export const postSpacesSpaceIdFoldersIdPasswordsRoute = createRoute({
  method: 'post',
  path: '/spaces/{spaceId}/folders/{id}/passwords',
  description: 'Write a identifier/password in aa folder',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P18784', type: 'string' },
          },
          example: 'P18784',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    body: PasswordRequestBody,
  },
  responses: { 200: { description: 'OK' } },
  security: [{ gma_auth: ['collaborator', 'owner', 'robot'] }],
})

export const getSpacesSpaceIdFoldersIdPasswordsPasswordIdRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/folders/{id}/passwords/{passwordId}',
  description: 'Returns password with Id',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T15646476', type: 'string' },
          },
          example: 'T15646476',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
      passwordId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the password',
            in: 'path',
            name: 'passwordId',
            required: true,
            schema: { example: 'TJOFJAFA8Y', type: 'string' },
          },
          example: 'TJOFJAFA8Y',
        }),
    }),
  },
  responses: { 200: OnePasswordResponse },
})

export const deleteSpacesSpaceIdFoldersIdPasswordsPasswordIdRoute = createRoute({
  method: 'delete',
  path: '/spaces/{spaceId}/folders/{id}/passwords/{passwordId}',
  description: 'delete a password',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P18784', type: 'string' },
          },
          example: 'P18784',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
      passwordId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the password',
            in: 'path',
            name: 'passwordId',
            required: true,
            schema: { example: 'TJOFJAFA8Y', type: 'string' },
          },
          example: 'TJOFJAFA8Y',
        }),
    }),
  },
  responses: { 204: { description: 'OK' } },
})

export const patchSpacesSpaceIdFoldersIdPasswordsPasswordIdRoute = createRoute({
  method: 'patch',
  path: '/spaces/{spaceId}/folders/{id}/passwords/{passwordId}',
  description: 'Modify a Password',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P18784', type: 'string' },
          },
          example: 'P18784',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
      passwordId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the password',
            in: 'path',
            name: 'passwordId',
            required: true,
            schema: { example: 'TJOFJAFA8Y', type: 'string' },
          },
          example: 'TJOFJAFA8Y',
        }),
    }),
    body: ModifyPasswordRequestBody,
  },
  responses: { 204: { description: 'OK' } },
})

export const getSpacesSpaceIdFoldersIdPayrollsRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/folders/{id}/payrolls',
  description: 'Returns payrolls of the folder social',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder social',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T15646IFHA476', type: 'string' },
          },
          example: 'T15646IFHA476',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    query: z.object({
      Date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'range date of the documents',
            in: 'query',
            name: 'Date',
            required: false,
            schema: { example: '20160321, null', type: 'string' },
          },
          example: '20160321, null',
        }),
      Begin: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'begin date of the payrolls',
            in: 'query',
            name: 'Begin',
            required: false,
            schema: { example: '20160321,null', type: 'string' },
          },
          example: '20160321,null',
        }),
      End: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'end date of the payrolls',
            in: 'query',
            name: 'End',
            required: false,
            schema: { example: '20160321,null', type: 'string' },
          },
          example: '20160321,null',
        }),
      Range: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'index range of the results',
            in: 'query',
            name: 'Range',
            required: false,
            schema: { example: '10-19', type: 'string' },
          },
          example: '10-19',
        }),
    }),
  },
  responses: { 200: PayrollResponse },
})

export const postSpacesSpaceIdFoldersIdPayrollsRoute = createRoute({
  method: 'post',
  path: '/spaces/{spaceId}/folders/{id}/payrolls',
  description: 'Add a payroll in a folder social',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder social',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P1987HGFKJFAA46', type: 'string' },
          },
          example: 'P1987HGFKJFAA46',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    body: PayrollRequestBody,
  },
  responses: {
    201: {
      description: 'Id of document created',
      content: {
        'application/json': {
          schema: z
            .object({ Id: z.string().exactOptional().openapi({ example: 'T1234' }) })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        Location: {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              description: 'path of the document created',
              example: '/folders/PFJOJAF14546/payrolls/P48548FDAF',
            }),
        },
      }),
    },
  },
  security: [{ gma_auth: ['collaborator', 'owner', 'robot'] }],
})

export const postSpacesSpaceIdFoldersIdPayrollsPayrollIdNominativeSocialDeclarationRoute =
  createRoute({
    method: 'post',
    path: '/spaces/{spaceId}/folders/{id}/payrolls/{payrollId}/nominative-social-declaration',
    description: 'Add a nominative social declaration in a folder social',
    request: {
      params: z.object({
        id: z
          .string()
          .openapi({
            param: {
              description: 'Id of the folder social',
              in: 'path',
              name: 'id',
              required: true,
              schema: { example: 'P1987HGFKJFAA46', type: 'string' },
            },
            example: 'P1987HGFKJFAA46',
          }),
        spaceId: z
          .string()
          .openapi({
            param: {
              description: 'Id of the space',
              in: 'path',
              name: 'spaceId',
              required: true,
              schema: { example: 'P156HUFHA476', type: 'string' },
            },
            example: 'P156HUFHA476',
          }),
        payrollId: z
          .string()
          .openapi({
            param: {
              description: 'Id of the payroll',
              in: 'path',
              name: 'payrollId',
              required: true,
              schema: { example: 'P156HUFHA476', type: 'string' },
            },
            example: 'P156HUFHA476',
          }),
      }),
      body: DocumentRequestBody,
    },
    responses: {
      201: {
        description: 'Id of document created',
        content: {
          'application/json': {
            schema: z
              .object({ Id: z.string().exactOptional().openapi({ example: 'T1234' }) })
              .openapi({ required: [] }),
          },
        },
        headers: z.object({
          Location: {
            schema: z
              .string()
              .exactOptional()
              .openapi({
                param: { required: false },
                description: 'path of the document created',
                example:
                  '/folders/PFJOJAF14546/payrolls/P48548FDAF/nominativesocialdeclaration/PFJAIFJ',
              }),
          },
        }),
      },
    },
    security: [{ gma_auth: ['collaborator', 'owner', 'robot'] }],
  })

export const deleteSpacesSpaceIdFoldersIdPayrollsPayrollIdNominativeSocialDeclarationRoute =
  createRoute({
    method: 'delete',
    path: '/spaces/{spaceId}/folders/{id}/payrolls/{payrollId}/nominative-social-declaration',
    description: 'delete a nominative social declaration in a folder social',
    request: {
      params: z.object({
        id: z
          .string()
          .openapi({
            param: {
              description: 'Id of the folder social',
              in: 'path',
              name: 'id',
              required: true,
              schema: { example: 'P1987HGFKJFAA46', type: 'string' },
            },
            example: 'P1987HGFKJFAA46',
          }),
        spaceId: z
          .string()
          .openapi({
            param: {
              description: 'Id of the space',
              in: 'path',
              name: 'spaceId',
              required: true,
              schema: { example: 'P156HUFHA476', type: 'string' },
            },
            example: 'P156HUFHA476',
          }),
        payrollId: z
          .string()
          .openapi({
            param: {
              description: 'Id of the payroll',
              in: 'path',
              name: 'payrollId',
              required: true,
              schema: { example: 'P156HUFHA476', type: 'string' },
            },
            example: 'P156HUFHA476',
          }),
      }),
    },
    responses: { 204: { description: 'OK' } },
    security: [{ gma_auth: ['collaborator', 'owner', 'robot'] }],
  })

export const getSpacesSpaceIdFoldersIdPayslipsRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/folders/{id}/payslips',
  description: 'Returns payslips of the folder employee',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder employee',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T15646IFHA476', type: 'string' },
          },
          example: 'T15646IFHA476',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    query: z.object({
      Date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'range date of the documents',
            in: 'query',
            name: 'Date',
            required: false,
            schema: { example: '20160321, null', type: 'string' },
          },
          example: '20160321, null',
        }),
      Range: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'index range of the results',
            in: 'query',
            name: 'Range',
            required: false,
            schema: { example: '10-19', type: 'string' },
          },
          example: '10-19',
        }),
    }),
  },
  responses: { 200: PaySlipResponse },
})

export const postSpacesSpaceIdFoldersIdPayslipsRoute = createRoute({
  method: 'post',
  path: '/spaces/{spaceId}/folders/{id}/payslips',
  description: 'Add a payslip in a folder employee',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder employee',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P1987HGFKJFAA46', type: 'string' },
          },
          example: 'P1987HGFKJFAA46',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    body: PaySlipRequestBody,
  },
  responses: {
    201: {
      description: 'Id of document created',
      content: {
        'application/json': {
          schema: z
            .object({ Id: z.string().exactOptional().openapi({ example: 'T1234' }) })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        Location: {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              description: 'path of the document created',
              example: '/folders/PFJOJAF14546/payslips/P48548FDAF',
            }),
        },
      }),
    },
  },
  security: [{ gma_auth: ['collaborator', 'owner', 'robot'] }],
})

export const deleteSpacesSpaceIdFoldersIdPortfolioPortfolioIdRoute = createRoute({
  method: 'delete',
  path: '/spaces/{spaceId}/folders/{id}/portfolio/{portfolioId}',
  description: 'delete a secondary portfolio of a customer contract',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T18784', type: 'string' },
          },
          example: 'T18784',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
      portfolioId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the portfolio',
            in: 'path',
            name: 'portfolioId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
  },
  responses: { 204: { description: 'OK' } },
})

export const deleteSpacesSpaceIdFoldersIdProfessionalVehicleRoute = createRoute({
  method: 'delete',
  path: '/spaces/{spaceId}/folders/{id}/professional-vehicle',
  description: 'delete a Professional Vehicle',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T18784', type: 'string' },
          },
          example: 'T18784',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
  },
  responses: { 204: { description: 'OK' } },
})

export const patchSpacesSpaceIdFoldersIdProfessionalVehicleRoute = createRoute({
  method: 'patch',
  path: '/spaces/{spaceId}/folders/{id}/professional-vehicle',
  description:
    'Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Professional Vehicle data',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T18784', type: 'string' },
          },
          example: 'T18784',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    body: ModifyProfessionalVehicleRequestBody,
  },
  responses: { 204: { description: 'OK' } },
})

export const getSpacesSpaceIdFoldersIdProviderRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/folders/{id}/provider',
  description: 'Returns folder with Id and provider data',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T15646476', type: 'string' },
          },
          example: 'T15646476',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
  },
  responses: { 200: OneProviderResponse },
})

export const deleteSpacesSpaceIdFoldersIdProviderRoute = createRoute({
  method: 'delete',
  path: '/spaces/{spaceId}/folders/{id}/provider',
  description: 'delete a provider',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T18784', type: 'string' },
          },
          example: 'T18784',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
  },
  responses: { 204: { description: 'OK' } },
})

export const patchSpacesSpaceIdFoldersIdProviderRoute = createRoute({
  method: 'patch',
  path: '/spaces/{spaceId}/folders/{id}/provider',
  description:
    'Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Provider data',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T18784', type: 'string' },
          },
          example: 'T18784',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    body: ModifyProviderRequestBody,
  },
  responses: { 204: { description: 'OK' } },
})

export const getSpacesSpaceIdFoldersIdRequiredDocumentsRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/folders/{id}/required-documents',
  description: 'list of the required documents for a person',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder either exchange either followup',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T15646IFHA476', type: 'string' },
          },
          example: 'T15646IFHA476',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
  },
  responses: { 200: RequiredDocumentResponse },
})

export const postSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidRoute = createRoute({
  method: 'post',
  path: '/spaces/{spaceId}/folders/{id}/required-documents/{requireddocumentid}',
  description: 'Add a required document to a line',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder exchange or followup',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P1987HGFKJFAA46', type: 'string' },
          },
          example: 'P1987HGFKJFAA46',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
      requireddocumentid: z
        .string()
        .openapi({
          param: {
            description: 'Id of the requireddocument',
            in: 'path',
            name: 'requireddocumentid',
            required: true,
            schema: { example: 'T156HUFHA476', type: 'string' },
          },
          example: 'T156HUFHA476',
        }),
    }),
    body: RequiredDocumentRequestBody,
  },
  responses: {
    201: {
      description: 'Id of document created',
      content: {
        'application/json': {
          schema: z
            .object({ Id: z.string().exactOptional().openapi({ example: 'P1234' }) })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        Location: {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              description: 'path of the document created',
              example: '/folders/PFJOJAF14546/documents/P48548FDAF',
            }),
        },
      }),
    },
  },
  security: [{ gma_auth: ['collaborator', 'owner', 'robot'] }],
})

export const patchSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidRoute = createRoute({
  method: 'patch',
  path: '/spaces/{spaceId}/folders/{id}/required-documents/{requireddocumentid}',
  description: 'Modify the status of a requireddocument',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder exchange or followup',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P18784', type: 'string' },
          },
          example: 'P18784',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
      requireddocumentid: z
        .string()
        .openapi({
          param: {
            description: 'Id of the requireddocument',
            in: 'path',
            name: 'requireddocumentid',
            required: true,
            schema: { example: 'T156HUFHA476', type: 'string' },
          },
          example: 'T156HUFHA476',
        }),
    }),
    body: ModifyReqStatusRequestBody,
  },
  responses: { 204: { description: 'OK' } },
})

export const deleteSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidDocumentsDocumentIdRoute =
  createRoute({
    method: 'delete',
    path: '/spaces/{spaceId}/folders/{id}/required-documents/{requireddocumentid}/documents/{documentId}',
    description: 'delete a document from a required document',
    request: {
      params: z.object({
        id: z
          .string()
          .openapi({
            param: {
              description: 'Id of the folder exchange or followup',
              in: 'path',
              name: 'id',
              required: true,
              schema: { example: 'P1987HGFKJFAA46', type: 'string' },
            },
            example: 'P1987HGFKJFAA46',
          }),
        spaceId: z
          .string()
          .openapi({
            param: {
              description: 'Id of the space',
              in: 'path',
              name: 'spaceId',
              required: true,
              schema: { example: 'P156HUFHA476', type: 'string' },
            },
            example: 'P156HUFHA476',
          }),
        requireddocumentid: z
          .string()
          .openapi({
            param: {
              description: 'Id of the requireddocument',
              in: 'path',
              name: 'requireddocumentid',
              required: true,
              schema: { example: 'T156HUFHA476', type: 'string' },
            },
            example: 'T156HUFHA476',
          }),
        documentId: z
          .string()
          .openapi({
            param: {
              description: 'Id of the document to delete',
              in: 'path',
              name: 'documentId',
              required: true,
              schema: { example: 'P156HUFHA476', type: 'string' },
            },
            example: 'P156HUFHA476',
          }),
      }),
    },
    responses: { 204: { description: 'OK' } },
    security: [{ gma_auth: ['collaborator', 'owner', 'robot'] }],
  })

export const getSpacesSpaceIdFoldersIdSectionsRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/folders/{id}/sections',
  description: 'Returns sections of the folder',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T15646IFHA476', type: 'string' },
          },
          example: 'T15646IFHA476',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
  },
  responses: { 200: SectionResponse },
})

export const getSpacesSpaceIdFoldersIdSocialContractsRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/folders/{id}/social-contracts',
  description: 'Returns social contracts of the folder employee',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder employee',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T15646IFHA476', type: 'string' },
          },
          example: 'T15646IFHA476',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    query: z.object({
      Date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'range date of the documents',
            in: 'query',
            name: 'Date',
            required: false,
            schema: { example: '20160321, null', type: 'string' },
          },
          example: '20160321, null',
        }),
      Range: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'index range of the results',
            in: 'query',
            name: 'Range',
            required: false,
            schema: { example: '10-19', type: 'string' },
          },
          example: '10-19',
        }),
    }),
  },
  responses: { 200: SocialContractResponse },
})

export const postSpacesSpaceIdFoldersIdSocialContractsRoute = createRoute({
  method: 'post',
  path: '/spaces/{spaceId}/folders/{id}/social-contracts',
  description: 'Add a social contract in a folder employee',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder employee',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P1987HGFKJFAA46', type: 'string' },
          },
          example: 'P1987HGFKJFAA46',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    body: SocialContractRequestBody,
  },
  responses: {
    201: {
      description: 'Id of document created',
      content: {
        'application/json': {
          schema: z
            .object({ Id: z.string().exactOptional().openapi({ example: 'T1234' }) })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        Location: {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              description: 'path of the document created',
              example: '/folders/PFJOJAF14546/socialcontracts/P48548FDAF',
            }),
        },
      }),
    },
  },
  security: [{ gma_auth: ['collaborator', 'owner', 'robot'] }],
})

export const getSpacesSpaceIdFoldersIdSocialDeclarationsRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/folders/{id}/social-declarations',
  description: 'Returns social declarations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder socialregime',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T15646IFHA476', type: 'string' },
          },
          example: 'T15646IFHA476',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    query: z.object({
      Date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'range date of the documents',
            in: 'query',
            name: 'Date',
            required: false,
            schema: { example: '20160321, null', type: 'string' },
          },
          example: '20160321, null',
        }),
      Range: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'index range of the results',
            in: 'query',
            name: 'Range',
            required: false,
            schema: { example: '10-19', type: 'string' },
          },
          example: '10-19',
        }),
    }),
  },
  responses: { 200: SocialDeclarationResponse },
})

export const postSpacesSpaceIdFoldersIdSocialDeclarationsRoute = createRoute({
  method: 'post',
  path: '/spaces/{spaceId}/folders/{id}/social-declarations',
  description: 'Add a social declaration',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder social regime',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P1987HGFKJFAA46', type: 'string' },
          },
          example: 'P1987HGFKJFAA46',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    body: SocialDeclarationRequestBody,
  },
  responses: {
    201: {
      description: 'Id of document created',
      content: {
        'application/json': {
          schema: z
            .object({ Id: z.string().exactOptional().openapi({ example: 'T1234' }) })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        Location: {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              description: 'path of the document created',
              example: '/folders/PFJOJAF14546/socialdeclarations/P48548FDAF',
            }),
        },
      }),
    },
  },
  security: [{ gma_auth: ['collaborator', 'owner', 'robot'] }],
})

export const getSpacesSpaceIdFoldersIdSocialRegimesRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/folders/{id}/social-regimes',
  description: 'Returns folder with Id and social regime data',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T15646476', type: 'string' },
          },
          example: 'T15646476',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
  },
  responses: { 200: OneSocialRegimeResponse },
})

export const deleteSpacesSpaceIdFoldersIdSocialRegimesRoute = createRoute({
  method: 'delete',
  path: '/spaces/{spaceId}/folders/{id}/social-regimes',
  description: 'delete a social regime',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T18784', type: 'string' },
          },
          example: 'T18784',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
  },
  responses: { 204: { description: 'OK' } },
})

export const patchSpacesSpaceIdFoldersIdSocialRegimesRoute = createRoute({
  method: 'patch',
  path: '/spaces/{spaceId}/folders/{id}/social-regimes',
  description:
    'Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Social Regime data',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T18784', type: 'string' },
          },
          example: 'T18784',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    body: ModifySocialRegimeRequestBody,
  },
  responses: { 204: { description: 'OK' } },
})

export const getSpacesSpaceIdFoldersIdSumInvoicesRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/folders/{id}/sum-invoices',
  description:
    'Returns sum of invoices of the folder (customer, provider, accountingyear or root folders customers or providers)',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T15646IFHA476', type: 'string' },
          },
          example: 'T15646IFHA476',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    query: z.object({
      Number: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of the invoice',
            in: 'query',
            name: 'Number',
            required: false,
            schema: { example: 23585, type: 'string' },
          },
          example: 23585,
        }),
      InclVat: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'amount incl. VAT',
            in: 'query',
            name: 'InclVat',
            required: false,
            schema: { example: '100.50,101.50', type: 'number' },
          },
          example: '100.50,101.50',
        }),
      BeforeVAT: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'amount before VAT',
            in: 'query',
            name: 'BeforeVAT',
            required: false,
            schema: { example: '102.50,101.50', type: 'number' },
          },
          example: '102.50,101.50',
        }),
      DueDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'range date due payment',
            in: 'query',
            name: 'DueDate',
            required: false,
            schema: { example: '20201231', type: 'string' },
          },
          example: '20201231',
        }),
      PaymentDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'range date of payment',
            in: 'query',
            name: 'PaymentDate',
            required: false,
            schema: { example: '20201201,null', type: 'string' },
          },
          example: '20201201,null',
        }),
      InvoiceDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'range date of invoice',
            in: 'query',
            name: 'InvoiceDate',
            required: false,
            schema: { example: '20201201,null', type: 'string' },
          },
          example: '20201201,null',
        }),
    }),
  },
  responses: { 200: SumInvoiceResponse },
})

export const deleteSpacesSpaceIdFoldersIdTaxContractRoute = createRoute({
  method: 'delete',
  path: '/spaces/{spaceId}/folders/{id}/tax-contract',
  description:
    'Delete a Folder (except Name, Class, ModificationDate and ArchivalDate) and tax contract data',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T18784', type: 'string' },
          },
          example: 'T18784',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
  },
  responses: { 204: { description: 'OK' } },
})

export const patchSpacesSpaceIdFoldersIdTaxContractRoute = createRoute({
  method: 'patch',
  path: '/spaces/{spaceId}/folders/{id}/tax-contract',
  description:
    'Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Tax Contract data',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T18784', type: 'string' },
          },
          example: 'T18784',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    body: ModifyTaxContractRequestBody,
  },
  responses: { 204: { description: 'OK' } },
})

export const getSpacesSpaceIdFoldersIdVatDeclarationsRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/folders/{id}/vat-declarations',
  description: 'Returns vat declarations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder result and taxation',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T15646IFHA476', type: 'string' },
          },
          example: 'T15646IFHA476',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    query: z.object({
      Date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'range date of the documents',
            in: 'query',
            name: 'Date',
            required: false,
            schema: { example: '20160321, null', type: 'string' },
          },
          example: '20160321, null',
        }),
      Range: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'index range of the results',
            in: 'query',
            name: 'Range',
            required: false,
            schema: { example: '10-19', type: 'string' },
          },
          example: '10-19',
        }),
    }),
  },
  responses: { 200: VATDeclarationResponse },
})

export const postSpacesSpaceIdFoldersIdVatDeclarationsRoute = createRoute({
  method: 'post',
  path: '/spaces/{spaceId}/folders/{id}/vat-declarations',
  description: 'Add a vat declaration',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder result and taxation',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P1987HGFKJFAA46', type: 'string' },
          },
          example: 'P1987HGFKJFAA46',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    body: VATDeclarationRequestBody,
  },
  responses: {
    201: {
      description: 'Id of document created',
      content: {
        'application/json': {
          schema: z
            .object({ Id: z.string().exactOptional().openapi({ example: 'T1234' }) })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        Location: {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              description: 'path of the document created',
              example: '/folders/PFJOJAF14546/vatdeclarations/P48548FDAF',
            }),
        },
      }),
    },
  },
  security: [{ gma_auth: ['collaborator', 'owner', 'robot'] }],
})

export const getSpacesSpaceIdFoldersIdDocumentClassRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/folders/{id}/{documentClass}',
  description: 'Returns document of documentClass (without specific data) of the folder',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T15646IFHA476', type: 'string' },
          },
          example: 'T15646IFHA476',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
      documentClass: z
        .string()
        .openapi({
          param: {
            description: 'class of the document',
            in: 'path',
            name: 'documentClass',
            required: true,
            schema: { example: 'birthCertificate', type: 'string' },
          },
          example: 'birthCertificate',
        }),
    }),
  },
  responses: { 200: DocumentResponse },
})

export const postSpacesSpaceIdFoldersIdDocumentClassRoute = createRoute({
  method: 'post',
  path: '/spaces/{spaceId}/folders/{id}/{documentClass}',
  description: 'Add a document in a folder',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P1987HGFKJFAA46', type: 'string' },
          },
          example: 'P1987HGFKJFAA46',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
      documentClass: z
        .string()
        .openapi({
          param: {
            description: 'class of the document',
            in: 'path',
            name: 'documentClass',
            required: true,
            schema: { example: 'birthCertificate', type: 'string' },
          },
          example: 'birthCertificate',
        }),
    }),
    body: DocumentRequestBody,
  },
  responses: {
    201: {
      description: 'Id of document created',
      content: {
        'application/json': {
          schema: z
            .object({ Id: z.string().exactOptional().openapi({ example: 'P123' }) })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        Location: {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              description: 'path of the document created',
              example: '/folders/PFJOJAF14546/documents/P48548FDAF',
            }),
        },
      }),
    },
  },
  security: [{ gma_auth: ['collaborator', 'owner', 'robot'] }],
})

export const deleteSpacesSpaceIdFoldersIdDocumentClassRoute = createRoute({
  method: 'delete',
  path: '/spaces/{spaceId}/folders/{id}/{documentClass}',
  description: 'delete a class document',
  request: {
    params: z.object({
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'PJOFJAFA8Y', type: 'string' },
          },
          example: 'PJOFJAFA8Y',
        }),
      documentClass: z
        .string()
        .openapi({
          param: {
            description: 'class of the document',
            in: 'path',
            name: 'documentClass',
            required: true,
            schema: { example: 'birthCertificate', type: 'string' },
          },
          example: 'birthCertificate',
        }),
    }),
  },
  responses: { 204: { description: 'OK' } },
})

export const getSpacesSpaceIdLegalEntitiesIdBanksRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/legal-entities/{id}/banks',
  description: 'Returns list of bank folders for a legal-entity',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the legal-entity',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T15646476', type: 'string' },
          },
          example: 'T15646476',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
  },
  responses: { 200: BankResponse },
})

export const postSpacesSpaceIdLegalEntitiesIdBanksRoute = createRoute({
  method: 'post',
  path: '/spaces/{spaceId}/legal-entities/{id}/banks',
  description: 'Add a folder for a bank',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the bank or memberId',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T1987HGFA46', type: 'string' },
          },
          example: 'T1987HGFA46',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    body: BankRequestBody,
  },
  responses: {
    201: {
      description: 'Id of folder created',
      content: {
        'application/json': {
          schema: z
            .object({ Id: z.string().exactOptional().openapi({ example: 'T1234' }) })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        Location: {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              description: 'path of the folder created',
              example: '/folders/KJF64988',
            }),
        },
      }),
    },
  },
  security: [{ gma_auth: ['collaborator', 'owner', 'robot'] }],
})

export const getSpacesSpaceIdLegalEntitiesIdBanksAllRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/legal-entities/{id}/banks/all',
  description: 'Returns folder of the banks even archived',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the bank',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T15646476', type: 'string' },
          },
          example: 'T15646476',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
  },
  responses: { 200: BankResponse },
})

export const getSpacesSpaceIdLegalEntitiesIdContractsRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/legal-entities/{id}/contracts',
  description: 'Returns all contract folders of the legal entity',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the legal entity or memberId',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T15646476', type: 'string' },
          },
          example: 'T15646476',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
  },
  responses: { 200: ContractResponse },
})

export const getSpacesSpaceIdLegalEntitiesIdContractualRelationshipsRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/legal-entities/{id}/contractual-relationships',
  description: 'Returns folder of the others contract with legal entity',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the legal-entity or memberId',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T15646476', type: 'string' },
          },
          example: 'T15646476',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
  },
  responses: { 200: ContractualRelationshipResponse },
})

export const getSpacesSpaceIdLegalEntitiesIdContractualRelationshipsAllRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/legal-entities/{id}/contractual-relationships/all',
  description: 'Returns folder of the others contract with legal entity (even archived)',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the legal-entity or memberId',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T15646476', type: 'string' },
          },
          example: 'T15646476',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
  },
  responses: { 200: ContractualRelationshipResponse },
})

export const getSpacesSpaceIdLegalEntitiesIdCustomersRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/legal-entities/{id}/customers',
  description: 'Returns folder of the customer',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the customer or memberId',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T15646476', type: 'string' },
          },
          example: 'T15646476',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
  },
  responses: { 200: CustomerResponse },
})

export const postSpacesSpaceIdLegalEntitiesIdCustomersRoute = createRoute({
  method: 'post',
  path: '/spaces/{spaceId}/legal-entities/{id}/customers',
  description: 'Add a folder for a customer',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the customer or memberId',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T1987HGFA46', type: 'string' },
          },
          example: 'T1987HGFA46',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    body: CustomerRequestBody,
  },
  responses: {
    201: {
      description: 'Id of folder created',
      content: {
        'application/json': {
          schema: z
            .object({ Id: z.string().exactOptional().openapi({ example: 'T1234' }) })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        Location: {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              description: 'path of the folder created',
              example: '/folders/KJF64988',
            }),
        },
      }),
    },
  },
  security: [{ gma_auth: ['collaborator', 'owner', 'robot'] }],
})

export const getSpacesSpaceIdLegalEntitiesIdCustomersAllRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/legal-entities/{id}/customers/all',
  description: 'Returns folder of the customers (even archived)',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the customer or memberId',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T15646476', type: 'string' },
          },
          example: 'T15646476',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
  },
  responses: { 200: CustomerResponse },
})

export const getSpacesSpaceIdLegalEntitiesIdInsurancesRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/legal-entities/{id}/insurances',
  description: 'Returns list of insurance folders for a legal-entity',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the insurance',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T15646476', type: 'string' },
          },
          example: 'T15646476',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
  },
  responses: { 200: InsuranceResponse },
})

export const postSpacesSpaceIdLegalEntitiesIdInsurancesRoute = createRoute({
  method: 'post',
  path: '/spaces/{spaceId}/legal-entities/{id}/insurances',
  description: 'Add a folder for a insurance',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the insurance or memberId',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T1987HGFA46', type: 'string' },
          },
          example: 'T1987HGFA46',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    body: InsuranceRequestBody,
  },
  responses: {
    201: {
      description: 'Id of folder created',
      content: {
        'application/json': {
          schema: z
            .object({ Id: z.string().exactOptional().openapi({ example: 'T1234' }) })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        Location: {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              description: 'path of the folder created',
              example: '/folders/KJF64988',
            }),
        },
      }),
    },
  },
  security: [{ gma_auth: ['collaborator', 'owner', 'robot'] }],
})

export const getSpacesSpaceIdLegalEntitiesIdInsurancesAllRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/legal-entities/{id}/insurances/all',
  description: 'Returns folder of the insurances even archived',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the insurance',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T15646476', type: 'string' },
          },
          example: 'T15646476',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
  },
  responses: { 200: InsuranceResponse },
})

export const getSpacesSpaceIdLegalEntitiesIdLoansRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/legal-entities/{id}/loans',
  description: 'Returns folder of the loan',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the loan',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T15646476', type: 'string' },
          },
          example: 'T15646476',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
  },
  responses: { 200: LoanResponse },
})

export const postSpacesSpaceIdLegalEntitiesIdLoansRoute = createRoute({
  method: 'post',
  path: '/spaces/{spaceId}/legal-entities/{id}/loans',
  description: 'Add a folder for a loan',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the loan or memberId',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T1987HGFA46', type: 'string' },
          },
          example: 'T1987HGFA46',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    body: LoanRequestBody,
  },
  responses: {
    201: {
      description: 'Id of folder created',
      content: {
        'application/json': {
          schema: z
            .object({ Id: z.string().exactOptional().openapi({ example: 'T1234' }) })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        Location: {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              description: 'path of the folder created',
              example: '/folders/KJF64988',
            }),
        },
      }),
    },
  },
  security: [{ gma_auth: ['collaborator', 'owner', 'robot'] }],
})

export const getSpacesSpaceIdLegalEntitiesIdLoansAllRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/legal-entities/{id}/loans/all',
  description: 'Returns folder of the loans even archived',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the loan',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T15646476', type: 'string' },
          },
          example: 'T15646476',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
  },
  responses: { 200: LoanResponse },
})

export const getSpacesSpaceIdLegalEntitiesIdProvidersRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/legal-entities/{id}/providers',
  description: 'Returns list of providers folders for a legal-entity',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the provider or memberId',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P15646476', type: 'string' },
          },
          example: 'P15646476',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
  },
  responses: { 200: ProviderResponse },
})

export const postSpacesSpaceIdLegalEntitiesIdProvidersRoute = createRoute({
  method: 'post',
  path: '/spaces/{spaceId}/legal-entities/{id}/providers',
  description: 'Add a folder for a provider',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the provider or memberId',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P1987HGFA46', type: 'string' },
          },
          example: 'P1987HGFA46',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    body: ProviderRequestBody,
  },
  responses: {
    201: {
      description: 'Id of folder created',
      content: {
        'application/json': {
          schema: z
            .object({ Id: z.string().exactOptional().openapi({ example: 'T1234' }) })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        Location: {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              description: 'path of the folder created',
              example: '/folders/KJF64988',
            }),
        },
      }),
    },
  },
  security: [{ gma_auth: ['collaborator', 'owner', 'robot'] }],
})

export const getSpacesSpaceIdLegalEntitiesIdProvidersAllRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/legal-entities/{id}/providers/all',
  description: 'Returns folder of the providers even archived',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the provider or memberId',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P15646476', type: 'string' },
          },
          example: 'P15646476',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
  },
  responses: { 200: ProviderResponse },
})

export const getSpacesSpaceIdLegalEntitiesIdSocialRegimesRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/legal-entities/{id}/social-regimes',
  description: 'Returns list of social regimes folders for a legal-entity',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the legal entity or memberId',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P15646476', type: 'string' },
          },
          example: 'P15646476',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
  },
  responses: { 200: SocialRegimeResponse },
})

export const postSpacesSpaceIdLegalEntitiesIdSocialRegimesRoute = createRoute({
  method: 'post',
  path: '/spaces/{spaceId}/legal-entities/{id}/social-regimes',
  description: 'Add a folder for a social regime',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the legal entity or memberId',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P1987HGFA46', type: 'string' },
          },
          example: 'P1987HGFA46',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    body: SocialRegimeRequestBody,
  },
  responses: {
    201: {
      description: 'Id of folder created',
      content: {
        'application/json': {
          schema: z
            .object({ Id: z.string().exactOptional().openapi({ example: 'T1234' }) })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        Location: {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              description: 'path of the folder created',
              example: '/folders/KJF64988',
            }),
        },
      }),
    },
  },
  security: [{ gma_auth: ['collaborator', 'owner', 'robot'] }],
})

export const getSpacesSpaceIdLegalEntitiesIdSocialRegimesAllRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/legal-entities/{id}/social-regimes/all',
  description: 'Returns folder of the social regimes even archived',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the legal entity or memberId',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P15646476', type: 'string' },
          },
          example: 'P15646476',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
  },
  responses: { 200: SocialRegimeResponse },
})

export const getSpacesSpaceIdLoansRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/loans',
  description: 'Returns list of all loan folders of the space',
  request: {
    params: z.object({
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
  },
  responses: { 200: LoanResponse },
})

export const getSpacesSpaceIdLoansAllRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/loans/all',
  description: 'Returns list of all loan folders even archived of the space',
  request: {
    params: z.object({
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
  },
  responses: { 200: LoanResponse },
})

export const postSpacesSpaceIdPersonsIdCallForDocumentRoute = createRoute({
  method: 'post',
  path: '/spaces/{spaceId}/persons/{id}/call-for-document',
  description: 'invite a person to collect documents',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the person or memberId',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P198NFNIAJFAA46', type: 'string' },
          },
          example: 'P198NFNIAJFAA46',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    body: {
      description: 'Infos to invite',
      content: { 'application/json': { schema: CallForDocumentSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Id of the folder of the person invited',
      content: {
        'application/json': {
          schema: z
            .object({ Id: z.string().exactOptional().openapi({ example: 'T12FJOAHJ34' }) })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        Location: {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              description: 'path of the folder of the person',
              example: '/persons/PFJOFJOAJHZ4546',
            }),
        },
      }),
    },
  },
  security: [{ gma_auth: ['collaborator', 'owner', 'robot'] }],
})

export const patchSpacesSpaceIdPersonsIdCallForDocumentRoute = createRoute({
  method: 'patch',
  path: '/spaces/{spaceId}/persons/{id}/call-for-document',
  description: 'modify the invitation of a person to collect documents',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the person',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P198NFNIAJFAA46', type: 'string' },
          },
          example: 'P198NFNIAJFAA46',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    body: {
      description: 'Infos to invite',
      content: { 'application/json': { schema: ModifyCollectSchema } },
      required: true,
    },
  },
  responses: { 204: { description: 'OK' } },
  security: [{ gma_auth: ['collaborator', 'owner', 'robot'] }],
})

export const getSpacesSpaceIdPersonsIdEmployeesRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/persons/{id}/employees',
  description: 'Returns folder of the employee',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the person or memberId',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P15HBGUFA76', type: 'string' },
          },
          example: 'P15HBGUFA76',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
  },
  responses: { 200: EmployeeResponse },
})

export const postSpacesSpaceIdPersonsIdEmployeesRoute = createRoute({
  method: 'post',
  path: '/spaces/{spaceId}/persons/{id}/employees',
  description: 'Add a folder for a employee',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the employee',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P198JFUAFA46', type: 'string' },
          },
          example: 'P198JFUAFA46',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    body: EmployeeRequestBody,
  },
  responses: {
    201: {
      description: 'Id of folder created',
      content: {
        'application/json': {
          schema: z
            .object({ Id: z.string().exactOptional().openapi({ example: 'T1234' }) })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        Location: {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              description: 'path of the folder created',
              example: '/folders/KJF64988',
            }),
        },
      }),
    },
  },
  security: [{ gma_auth: ['collaborator', 'owner', 'robot'] }],
})

export const getSpacesSpaceIdPersonsIdEmployeesAllRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/persons/{id}/employees/all',
  description: 'Returns folder of all employees (even archived)',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the person or memberId',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P15HBGUFA76', type: 'string' },
          },
          example: 'P15HBGUFA76',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
  },
  responses: { 200: EmployeeResponse },
})

export const getSpacesSpaceIdPersonsIdExchangeRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/persons/{id}/exchange',
  description: 'Returns folder exchange of the person',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the person or memberId',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T15646IFHA476', type: 'string' },
          },
          example: 'T15646IFHA476',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
  },
  responses: { 200: OneFolderResponse },
})

export const getSpacesSpaceIdPersonsIdFollowUpsRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/persons/{id}/follow-ups',
  description: 'Returns folder of the person',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the person or memberId',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T15646IFHA476', type: 'string' },
          },
          example: 'T15646IFHA476',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
  },
  responses: { 200: FollowUpResponse },
})

export const postSpacesSpaceIdPersonsIdGuestInSpaceRoute = createRoute({
  method: 'post',
  path: '/spaces/{spaceId}/persons/{id}/guest-in-space',
  description: 'invite a person in a space',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the person',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P198NFNIAJFAA46', type: 'string' },
          },
          example: 'P198NFNIAJFAA46',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    body: {
      description: 'Infos to invite',
      content: { 'application/json': { schema: GuestInSpaceSchema } },
      required: true,
    },
  },
  responses: { 204: { description: 'OK' } },
  security: [{ gma_auth: ['collaborator', 'owner', 'robot'] }],
})

export const deleteSpacesSpaceIdPersonsIdGuestInSpaceRoute = createRoute({
  method: 'delete',
  path: '/spaces/{spaceId}/persons/{id}/guest-in-space',
  description: 'delete the invitation of a person in a space',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the person',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P198NFNIAJFAA46', type: 'string' },
          },
          example: 'P198NFNIAJFAA46',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
  },
  responses: { 204: { description: 'OK' } },
  security: [{ gma_auth: ['collaborator', 'owner', 'robot'] }],
})

export const patchSpacesSpaceIdPersonsIdGuestInSpaceRoute = createRoute({
  method: 'patch',
  path: '/spaces/{spaceId}/persons/{id}/guest-in-space',
  description: 'invite a person in a space',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the person',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P198NFNIAJFAA46', type: 'string' },
          },
          example: 'P198NFNIAJFAA46',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    body: {
      description: 'Infos to invite',
      content: { 'application/json': { schema: ModifyInvitationSchema } },
      required: true,
    },
  },
  responses: { 204: { description: 'OK' } },
  security: [{ gma_auth: ['collaborator', 'owner', 'robot'] }],
})

export const getSpacesSpaceIdPersonsIdInvitationRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/persons/{id}/invitation',
  description: 'Returns invitation of a person',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the person',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P198NFNIAJFAA46', type: 'string' },
          },
          example: 'P198NFNIAJFAA46',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
  },
  responses: {
    200: { description: 'Automatically created', content: { '*/*': { schema: InvitationSchema } } },
  },
})

export const postSpacesSpaceIdPersonsIdInvitationRoute = createRoute({
  method: 'post',
  path: '/spaces/{spaceId}/persons/{id}/invitation',
  description: 'create an invitation in a space for a person',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the person',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P198NFNIAJFAA46', type: 'string' },
          },
          example: 'P198NFNIAJFAA46',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    body: CreateInvitationRequestBody,
  },
  responses: {
    201: {
      description: 'Id of invitation created',
      content: {
        'application/json': {
          schema: z
            .object({ Id: z.string().exactOptional().openapi({ example: 'T1234' }) })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ gma_auth: ['collaborator', 'owner', 'robot'] }],
})

export const deleteSpacesSpaceIdPersonsIdInvitationRoute = createRoute({
  method: 'delete',
  path: '/spaces/{spaceId}/persons/{id}/invitation',
  description: 'delete the invitation of a person in a space',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the person',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P198NFNIAJFAA46', type: 'string' },
          },
          example: 'P198NFNIAJFAA46',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
  },
  responses: { 204: { description: 'OK' } },
  security: [{ gma_auth: ['collaborator', 'owner', 'robot'] }],
})

export const patchSpacesSpaceIdPersonsIdInvitationRoute = createRoute({
  method: 'patch',
  path: '/spaces/{spaceId}/persons/{id}/invitation',
  description: 'modify an invitation',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the person',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P198NFNIAJFAA46', type: 'string' },
          },
          example: 'P198NFNIAJFAA46',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    body: CreateInvitationRequestBody,
  },
  responses: { 204: { description: 'OK' } },
  security: [{ gma_auth: ['collaborator', 'owner', 'robot'] }],
})

export const postSpacesSpaceIdPersonsIdInvitationInvitationIdSendRoute = createRoute({
  method: 'post',
  path: '/spaces/{spaceId}/persons/{id}/invitation/{invitationId}/send',
  description: 'send the invitation of a person in a space',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the person',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'P198NFNIAJFAA46', type: 'string' },
          },
          example: 'P198NFNIAJFAA46',
        }),
      invitationId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the invitation',
            in: 'path',
            name: 'invitationId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    body: SendInvitationRequestBody,
  },
  responses: {
    201: {
      description: 'Id of document created',
      content: {
        'application/json': {
          schema: z
            .object({ Id: z.string().exactOptional().openapi({ example: 'T1234' }) })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ gma_auth: ['collaborator', 'owner', 'robot'] }],
})

export const getSpacesSpaceIdPersonsMemberIdFoldersIdRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/persons/{memberId}/folders/{id}',
  description: 'Returns folderId with the access of the person',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T15646476', type: 'string' },
          },
          example: 'T15646476',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
      memberId: z
        .string()
        .openapi({
          param: {
            description: 'memberId of the person',
            in: 'path',
            name: 'memberId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
  },
  responses: { 200: OneAccessResponse },
})

export const patchSpacesSpaceIdPersonsMemberIdFoldersIdRoute = createRoute({
  method: 'patch',
  path: '/spaces/{spaceId}/persons/{memberId}/folders/{id}',
  description: 'Modify an access',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the folder',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 'T18784', type: 'string' },
          },
          example: 'T18784',
        }),
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
      memberId: z
        .string()
        .openapi({
          param: {
            description: 'memberId of the person',
            in: 'path',
            name: 'memberId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    body: ModifyAccessRequestBody,
  },
  responses: { 204: { description: 'OK' } },
})

export const getSpacesSpaceIdProvidersRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/providers',
  description: 'Returns folder with Id and provider data',
  request: {
    params: z.object({
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    query: z.object({
      WithContractingPartner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'if present returns infos of the ContractingPartner too',
            in: 'query',
            name: 'WithContractingPartner',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: ProviderResponse },
})

export const getSpacesSpaceIdProvidersAllRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/providers/all',
  description: 'Returns folder with Id and provider data (even archived)',
  request: {
    params: z.object({
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    query: z.object({
      WithContractingPartner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'if present returns infos of the ContractingPartner too',
            in: 'query',
            name: 'WithContractingPartner',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: ProviderResponse },
})

export const getSpacesSpaceIdSearchRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/search',
  description: 'Research text inside documents, folders or messages',
  request: {
    params: z.object({
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const spread = new Map<string, string[]>([
          ['Class', ['QueryContext']],
          ['Filters', ['QueryContext']],
        ])
        for (const [key, item] of Object.entries(val)) {
          const owners = spread.get(key)
          if (owners !== undefined) {
            for (const owner of owners) {
              group(owner)[key] = item
            }
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([...rest, ...groups])
      })
      .pipe(
        z.object({
          Query: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                description: 'Text to find',
                in: 'query',
                name: 'Query',
                required: false,
                schema: { example: 'durand', type: 'string' },
              },
              example: 'durand',
            }),
          Range: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                description: 'index range of the results',
                in: 'query',
                name: 'Range',
                required: false,
                schema: { example: '10-19', type: 'string' },
              },
              example: '10-19',
            }),
          QueryContext: z
            .object({
              Class: z
                .enum(['Folder', 'Document', 'Message'])
                .exactOptional()
                .openapi({ example: 'Folder' }),
              Filters: z
                .object({
                  DocumentClass: z.string().exactOptional().openapi({ example: 'payslip' }),
                  ExcludedFolders: z
                    .preprocess(
                      (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                      z.array(z.string()),
                    )
                    .exactOptional(),
                  IncludedFolders: z
                    .preprocess(
                      (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                      z.array(z.string().openapi({ example: ['POJFA9492'] })),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .exactOptional()
            .openapi({
              param: {
                description: 'context of research',
                in: 'query',
                name: 'QueryContext',
                required: false,
                schema: {
                  properties: {
                    Class: {
                      enum: ['Folder', 'Document', 'Message'],
                      example: 'Folder',
                      type: 'string',
                    },
                    Filters: {
                      properties: {
                        DocumentClass: { example: 'payslip', type: 'string' },
                        ExcludedFolders: { items: { type: 'string' }, type: 'array' },
                        IncludedFolders: {
                          items: { example: ['POJFA9492'], type: 'string' },
                          type: 'array',
                        },
                      },
                      type: 'object',
                    },
                  },
                  type: 'object',
                },
              },
              required: [],
            }),
        }),
      ),
  },
  responses: { 200: SearchResponse },
})

export const getSpacesSpaceIdSocialRegimesRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/social-regimes',
  description: 'Returns folder with Id and social regime data',
  request: {
    params: z.object({
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    query: z.object({
      WithContractingPartner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'if present returns infos of the ContractingPartner too',
            in: 'query',
            name: 'WithContractingPartner',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: SocialRegimeResponse },
})

export const getSpacesSpaceIdSocialRegimesAllRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/social-regimes/all',
  description: 'Returns folder with Id and social regime data (even archived)',
  request: {
    params: z.object({
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    query: z.object({
      WithContractingPartner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'if present returns infos of the ContractingPartner too',
            in: 'query',
            name: 'WithContractingPartner',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: SocialRegimeResponse },
})

export const getSpacesSpaceIdSpacesInvoicingsRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/spaces-invoicings',
  description: 'Returns CSV Invoicings of the spaces for the account of the spaceId',
  request: {
    params: z.object({
      spaceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { example: 'P156HUFHA476', type: 'string' },
          },
          example: 'P156HUFHA476',
        }),
    }),
    query: z.object({
      Date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'date range of the documents',
            in: 'query',
            name: 'Date',
            required: false,
            schema: { example: '20160321,null', type: 'string' },
          },
          example: '20160321,null',
        }),
    }),
  },
  responses: { 200: SpacesInvoicingResponse },
})
