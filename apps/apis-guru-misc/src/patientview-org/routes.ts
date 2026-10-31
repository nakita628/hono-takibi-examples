import { createRoute, z } from '@hono/zod-openapi'

const LookupTypeSchema = z
  .object({
    created: z.iso.datetime({ offset: true }).exactOptional(),
    description: z.string().exactOptional(),
    id: z
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
    lastUpdate: z.iso.datetime({ offset: true }).exactOptional(),
    type: z
      .enum([
        'GROUP',
        'MENU',
        'ROLE',
        'CODE_STANDARD',
        'CODE_TYPE',
        'FEATURE_TYPE',
        'RELATIONSHIP_TYPE',
        'IDENTIFIER',
        'CONTACT_POINT_TYPE',
        'STATISTIC_TYPE',
        'NEWS_TYPE',
        'GENDER',
        'IBD_CROHNSLOCATION',
        'IBD_CROHNSPROXIMALTERMINALILEUM',
        'IBD_CROHNSPERIANAL',
        'IBD_CROHNSBEHAVIOUR',
        'IBD_UCEXTENT',
        'IBD_EGIMCOMPLICATION',
        'IBD_SURGERYMAINPROCEDURE',
        'IBD_SMOKINGSTATUS',
        'IBD_FAMILYHISTORY',
        'LINK_TYPE',
      ])
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LookupType')

const ContactPointTypeSchema = z
  .object({
    description: z.string().exactOptional(),
    id: z
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
    lookupType: LookupTypeSchema.exactOptional(),
    value: z
      .enum([
        'UNIT_WEB_ADDRESS',
        'TRUST_WEB_ADDRESS',
        'PV_ADMIN_NAME',
        'PV_ADMIN_PHONE',
        'PV_ADMIN_EMAIL',
        'UNIT_ENQUIRIES_PHONE',
        'UNIT_ENQUIRIES_EMAIL',
        'APPOINTMENT_PHONE',
        'APPOINTMENT_EMAIL',
        'OUT_OF_HOURS_INFO',
      ])
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ContactPointType')

const ContactPointSchema = z
  .object({
    contactPointType: ContactPointTypeSchema.exactOptional(),
    content: z.string().exactOptional(),
    created: z.iso.datetime({ offset: true }).exactOptional(),
    id: z
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
    lastUpdate: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ContactPoint')

const FeatureSchema = z
  .object({
    created: z.iso.datetime({ offset: true }).exactOptional(),
    description: z.string().exactOptional(),
    id: z
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
    lastUpdate: z.iso.datetime({ offset: true }).exactOptional(),
    name: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Feature')

const GroupFeatureSchema = z
  .object({
    created: z.iso.datetime({ offset: true }).exactOptional(),
    feature: FeatureSchema.exactOptional(),
    id: z
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
    lastUpdate: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GroupFeature')

const LookupSchema = z
  .object({
    created: z.iso.datetime({ offset: true }).exactOptional(),
    description: z.string().exactOptional(),
    descriptionFriendly: z.string().exactOptional(),
    displayOrder: z
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
    id: z
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
    lastUpdate: z.iso.datetime({ offset: true }).exactOptional(),
    lookupType: LookupTypeSchema.exactOptional(),
    value: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Lookup')

const LinkSchema = z
  .object({
    created: z.iso.datetime({ offset: true }).exactOptional(),
    displayOrder: z.int32().exactOptional(),
    id: z
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
    lastUpdate: z.iso.datetime({ offset: true }).exactOptional(),
    link: z.string().exactOptional(),
    linkType: LookupSchema.exactOptional(),
    name: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Link')

const LocationSchema = z
  .object({
    address: z.string().exactOptional(),
    created: z.iso.datetime({ offset: true }).exactOptional(),
    email: z.string().exactOptional(),
    id: z
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
    label: z.string().exactOptional(),
    lastUpdate: z.iso.datetime({ offset: true }).exactOptional(),
    name: z.string().exactOptional(),
    phone: z.string().exactOptional(),
    web: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Location')

type GroupType = {
  address1?: string
  address2?: string
  address3?: string
  childGroups?: GroupType[]
  code?: string
  contactPoints?: z.infer<typeof ContactPointSchema>[]
  created?: string
  fhirResourceId?: string
  groupFeatures?: z.infer<typeof GroupFeatureSchema>[]
  groupType?: z.infer<typeof LookupSchema>
  id?: bigint
  lastImportDate?: string
  lastUpdate?: string
  links?: z.infer<typeof LinkSchema>[]
  locations?: z.infer<typeof LocationSchema>[]
  name?: string
  parentGroups?: GroupType[]
  postcode?: string
  sftpUser?: string
  shortName?: string
  visible?: boolean
  visibleToJoin?: boolean
}

const CategorySchema = z
  .object({
    friendlyDescription: z.string().exactOptional(),
    hidden: z.boolean().exactOptional(),
    icd10Description: z.string().exactOptional(),
    id: z
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
    number: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Category')

const CodeCategorySchema = z
  .object({
    category: CategorySchema.exactOptional(),
    id: z
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
  .openapi({ required: [] })
  .openapi('CodeCategory')

const ExternalStandardSchema = z
  .object({
    description: z.string().exactOptional(),
    id: z
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
    name: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ExternalStandard')

const CodeExternalStandardSchema = z
  .object({
    codeString: z.string().exactOptional(),
    externalStandard: ExternalStandardSchema.exactOptional(),
    id: z
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
  .openapi({ required: [] })
  .openapi('CodeExternalStandard')

const CodeSchema = z
  .object({
    code: z.string().exactOptional(),
    codeCategories: z
      .array(CodeCategorySchema)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    codeType: LookupSchema.exactOptional(),
    created: z.iso.datetime({ offset: true }).exactOptional(),
    description: z.string().exactOptional(),
    displayOrder: z.int32().exactOptional(),
    externalStandards: z
      .array(CodeExternalStandardSchema)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    fullDescription: z.string().exactOptional(),
    hideFromPatients: z.boolean().exactOptional(),
    id: z
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
    lastUpdate: z.iso.datetime({ offset: true }).exactOptional(),
    links: z
      .array(LinkSchema)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    patientFriendlyName: z.string().exactOptional(),
    removedExternally: z.boolean().exactOptional(),
    sourceType: z.enum(['PATIENTVIEW', 'NHS_CHOICES']).exactOptional(),
    standardType: LookupSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Code')

const GroupSchema: z.ZodType<GroupType> = z
  .lazy(() =>
    z
      .object({
        address1: z.string().exactOptional(),
        address2: z.string().exactOptional(),
        address3: z.string().exactOptional(),
        childGroups: z.array(GroupSchema).exactOptional(),
        code: z.string().exactOptional(),
        contactPoints: z
          .array(ContactPointSchema)
          .superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          })
          .exactOptional(),
        created: z.iso.datetime({ offset: true }).exactOptional(),
        fhirResourceId: z.uuid().exactOptional(),
        groupFeatures: z
          .array(GroupFeatureSchema)
          .superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          })
          .exactOptional(),
        groupType: LookupSchema.exactOptional(),
        id: z
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
        lastImportDate: z.iso.datetime({ offset: true }).exactOptional(),
        lastUpdate: z.iso.datetime({ offset: true }).exactOptional(),
        links: z
          .array(LinkSchema)
          .superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          })
          .exactOptional(),
        locations: z
          .array(LocationSchema)
          .superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          })
          .exactOptional(),
        name: z.string().exactOptional(),
        parentGroups: z.array(GroupSchema).exactOptional(),
        postcode: z.string().exactOptional(),
        sftpUser: z.string().exactOptional(),
        shortName: z.string().exactOptional(),
        visible: z.boolean().exactOptional(),
        visibleToJoin: z.boolean().exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('Group')

const FhirAllergySchema = z
  .object({
    confidenceLevel: z.string().exactOptional(),
    group: GroupSchema.exactOptional(),
    id: z
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
    identifier: z.string().exactOptional(),
    infoSource: z.string().exactOptional(),
    reaction: z.string().exactOptional(),
    recordedDate: z.iso.datetime({ offset: true }).exactOptional(),
    status: z.string().exactOptional(),
    substance: z.string().exactOptional(),
    type: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FhirAllergy')

const FhirConditionSchema = z
  .object({
    asserter: z.string().exactOptional(),
    category: z.string().exactOptional(),
    code: z.string().exactOptional(),
    date: z.iso.datetime({ offset: true }).exactOptional(),
    description: z.string().exactOptional(),
    fullDescription: z.string().exactOptional(),
    group: GroupSchema.exactOptional(),
    id: z
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
    identifier: z.string().exactOptional(),
    links: z
      .array(LinkSchema)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    notes: z.string().exactOptional(),
    severity: z.string().exactOptional(),
    status: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FhirCondition')

const FhirObservationSchema = z
  .object({
    applies: z.iso.datetime({ offset: true }).exactOptional(),
    bodySite: z.string().exactOptional(),
    comments: z.string().exactOptional(),
    comparator: z.string().exactOptional(),
    diagram: z.string().exactOptional(),
    group: GroupSchema.exactOptional(),
    id: z
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
    identifier: z.string().exactOptional(),
    location: z.string().exactOptional(),
    name: z.string().exactOptional(),
    temporaryUuid: z.string().exactOptional(),
    units: z.string().exactOptional(),
    value: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FhirObservation')

const FhirProcedureSchema = z
  .object({
    bodySite: z.string().exactOptional(),
    id: z
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
    type: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FhirProcedure')

const FhirEncounterSchema = z
  .object({
    date: z.iso.datetime({ offset: true }).exactOptional(),
    encounterType: z.string().exactOptional(),
    group: GroupSchema.exactOptional(),
    id: z
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
    identifier: z.string().exactOptional(),
    links: z
      .array(LinkSchema)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    observations: z
      .array(FhirObservationSchema)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    procedures: z
      .array(FhirProcedureSchema)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    status: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FhirEncounter')

const FhirContactSchema = z
  .object({
    id: z
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
    system: z.string().exactOptional(),
    use: z.string().exactOptional(),
    value: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FhirContact')

const FhirIdentifierSchema = z
  .object({
    id: z
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
    label: z.string().exactOptional(),
    value: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FhirIdentifier')

const FhirPractitionerSchema = z
  .object({
    address1: z.string().exactOptional(),
    address2: z.string().exactOptional(),
    address3: z.string().exactOptional(),
    address4: z.string().exactOptional(),
    allowInviteGp: z.boolean().exactOptional(),
    contacts: z.array(FhirContactSchema).exactOptional(),
    gender: z.string().exactOptional(),
    groupCode: z.string().exactOptional(),
    identifier: z.string().exactOptional(),
    inviteDate: z.iso.datetime({ offset: true }).exactOptional(),
    name: z.string().exactOptional(),
    postcode: z.string().exactOptional(),
    role: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FhirPractitioner')

const FhirPatientSchema = z
  .object({
    address1: z.string().exactOptional(),
    address2: z.string().exactOptional(),
    address3: z.string().exactOptional(),
    address4: z.string().exactOptional(),
    contacts: z.array(FhirContactSchema).exactOptional(),
    dateOfBirth: z.iso.datetime({ offset: true }).exactOptional(),
    dateOfBirthNoTime: z.string().exactOptional(),
    forename: z.string().exactOptional(),
    gender: z.string().exactOptional(),
    group: GroupSchema.exactOptional(),
    groupCode: z.string().exactOptional(),
    identifier: z.string().exactOptional(),
    identifiers: z.array(FhirIdentifierSchema).exactOptional(),
    postcode: z.string().exactOptional(),
    practitioners: z.array(FhirPractitionerSchema).exactOptional(),
    surname: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FhirPatient')

type PatientType = {
  diagnosisCodes?: z.infer<typeof CodeSchema>[]
  fhirAllergies?: z.infer<typeof FhirAllergySchema>[]
  fhirConditions?: z.infer<typeof FhirConditionSchema>[]
  fhirEncounters?: z.infer<typeof FhirEncounterSchema>[]
  fhirObservations?: z.infer<typeof FhirObservationSchema>[]
  fhirPatient?: z.infer<typeof FhirPatientSchema>
  fhirPractitioners?: z.infer<typeof FhirPractitionerSchema>[]
  group?: z.infer<typeof GroupSchema>
  id?: bigint
}

const ApiKeySchema = z
  .object({
    expired: z.boolean().exactOptional(),
    expiryDate: z.iso.datetime({ offset: true }).exactOptional(),
    key: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ApiKey')

const BaseGroupSchema = z
  .object({
    code: z.string().exactOptional(),
    groupType: LookupSchema.exactOptional(),
    id: z
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
    lastImportDate: z.iso.datetime({ offset: true }).exactOptional(),
    name: z.string().exactOptional(),
    parentCodes: z.array(z.string()).exactOptional(),
    shortName: z.string().exactOptional(),
    visible: z.boolean().exactOptional(),
    visibleToJoin: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BaseGroup')

const CredentialsSchema = z
  .object({
    apiKey: z.string().exactOptional(),
    password: z.string().exactOptional(),
    username: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Credentials')

const EntryStringListFhirObservationSchema = z
  .object({ key: z.array(FhirObservationSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('EntryStringListFhirObservation')

const EntryLongMapStringListFhirObservationSchema = z
  .object({ key: z.array(EntryStringListFhirObservationSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('EntryLongMapStringListFhirObservation')

const FhirObservationPageSchema = z
  .object({
    data: z.array(EntryLongMapStringListFhirObservationSchema).exactOptional(),
    totalElements: z
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
    totalPages: z
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
  .openapi({ required: [] })
  .openapi('FhirObservationPage')

const RoleSchema = z
  .object({
    description: z.string().exactOptional(),
    id: z
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
    name: z
      .enum([
        'PATIENT',
        'UNIT_ADMIN',
        'STAFF_ADMIN',
        'DISEASE_GROUP_ADMIN',
        'SPECIALTY_ADMIN',
        'GLOBAL_ADMIN',
        'GP_ADMIN',
        'MEMBER',
        'PUBLIC',
        'UNIT_ADMIN_API',
        'IMPORTER',
      ])
      .exactOptional(),
    visible: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Role')

const GroupRoleSchema = z
  .object({
    group: GroupSchema.exactOptional(),
    id: z
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
    role: RoleSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GroupRole')

const ObservationHeadingGroupSchema = z
  .object({
    created: z.iso.datetime({ offset: true }).exactOptional(),
    group: GroupSchema.exactOptional(),
    id: z
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
    panel: z
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
    panelOrder: z
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
  .openapi({ required: [] })
  .openapi('ObservationHeadingGroup')

const ObservationHeadingSchema = z
  .object({
    code: z.string().exactOptional(),
    created: z.iso.datetime({ offset: true }).exactOptional(),
    decimalPlaces: z
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
    defaultPanel: z
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
    defaultPanelOrder: z
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
    heading: z.string().exactOptional(),
    id: z
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
    infoLink: z.string().exactOptional(),
    lastUpdate: z.iso.datetime({ offset: true }).exactOptional(),
    maxGraph: z.float64().exactOptional(),
    minGraph: z.float64().exactOptional(),
    name: z.string().exactOptional(),
    normalRange: z.string().exactOptional(),
    observationHeadingGroups: z
      .array(ObservationHeadingGroupSchema)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    units: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ObservationHeading')

const PatientSchema: z.ZodType<PatientType> = z
  .lazy(() =>
    z
      .object({
        diagnosisCodes: z.array(CodeSchema).exactOptional(),
        fhirAllergies: z.array(FhirAllergySchema).exactOptional(),
        fhirConditions: z.array(FhirConditionSchema).exactOptional(),
        fhirEncounters: z.array(FhirEncounterSchema).exactOptional(),
        fhirObservations: z.array(FhirObservationSchema).exactOptional(),
        fhirPatient: FhirPatientSchema.exactOptional(),
        fhirPractitioners: z.array(FhirPractitionerSchema).exactOptional(),
        group: GroupSchema.exactOptional(),
        id: z
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
      .openapi({ required: [] }),
  )
  .openapi('Patient')

const PatientManagementSchema = z
  .object({
    condition: FhirConditionSchema.exactOptional(),
    encounters: z.array(FhirEncounterSchema).exactOptional(),
    groupCode: z.string().exactOptional(),
    identifier: z.string().exactOptional(),
    observations: z.array(FhirObservationSchema).exactOptional(),
    patient: FhirPatientSchema.exactOptional(),
    practitioners: z.array(FhirPractitionerSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PatientManagement')

const RouteSchema = z
  .object({
    controller: z.string().exactOptional(),
    created: z.iso.datetime({ offset: true }).exactOptional(),
    displayOrder: z.int32().exactOptional(),
    id: z
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
    lookup: LookupSchema.exactOptional(),
    templateUrl: z.string().exactOptional(),
    title: z.string().exactOptional(),
    url: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Route')

const UUIDSchema = z.any().openapi('UUID')

const UserFeatureSchema = z
  .object({
    created: z.iso.datetime({ offset: true }).exactOptional(),
    feature: FeatureSchema.exactOptional(),
    id: z
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
    lastUpdate: z.iso.datetime({ offset: true }).exactOptional(),
    optInDate: z.iso.datetime({ offset: true }).exactOptional(),
    optInHidden: z.boolean().exactOptional(),
    optInStatus: z.boolean().exactOptional(),
    optOutHidden: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UserFeature')

const UserSchema = z
  .object({
    apiKey: ApiKeySchema.exactOptional(),
    canSwitchUser: z.boolean().exactOptional(),
    changePassword: z.boolean().exactOptional(),
    contactNumber: z.string().exactOptional(),
    created: z.iso.datetime({ offset: true }).exactOptional(),
    currentLogin: z.iso.datetime({ offset: true }).exactOptional(),
    currentLoginIpAddress: z.string().exactOptional(),
    dateOfBirth: z.iso.datetime({ offset: true }).exactOptional(),
    deleted: z.boolean().exactOptional(),
    dummy: z.boolean().exactOptional(),
    email: z.string().exactOptional(),
    emailVerified: z.boolean().exactOptional(),
    forename: z.string().exactOptional(),
    groupRoles: z
      .array(GroupRoleSchema)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    hideSecretWordNotification: z.boolean().exactOptional(),
    id: z
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
    identifiers: z
      .array(z.object({}))
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    lastLogin: z.iso.datetime({ offset: true }).exactOptional(),
    lastLoginIpAddress: z.string().exactOptional(),
    latestDataReceivedBy: BaseGroupSchema.exactOptional(),
    latestDataReceivedDate: z.iso.datetime({ offset: true }).exactOptional(),
    locked: z.boolean().exactOptional(),
    picture: z.string().exactOptional(),
    roleDescription: z.string().exactOptional(),
    secretWordIsSet: z.boolean().exactOptional(),
    surname: z.string().exactOptional(),
    userFeatures: z
      .array(UserFeatureSchema)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    username: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('User')

const UserTokenSchema = z
  .object({
    auditActions: z.array(z.string()).exactOptional(),
    checkSecretWord: z.boolean().exactOptional(),
    created: z.iso.datetime({ offset: true }).exactOptional(),
    expiration: z.iso.datetime({ offset: true }).exactOptional(),
    externalStandards: z.array(ExternalStandardSchema).exactOptional(),
    groupFeatures: z.array(FeatureSchema).exactOptional(),
    groupMessagingEnabled: z.boolean().exactOptional(),
    mustSetSecretWord: z.boolean().exactOptional(),
    patientFeatures: z.array(FeatureSchema).exactOptional(),
    patientMessagingFeatureTypes: z.array(z.string()).exactOptional(),
    patientRoles: z.array(RoleSchema).exactOptional(),
    routes: z
      .array(RouteSchema)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    secretWord: z.string().exactOptional(),
    secretWordChoices: z.object({}).exactOptional(),
    secretWordIndexes: z.array(z.string()).exactOptional(),
    secretWordSalt: z.string().exactOptional(),
    secretWordToken: z.string().exactOptional(),
    securityRoles: z.array(RoleSchema).exactOptional(),
    shouldEnterCondition: z.boolean().exactOptional(),
    staffFeatures: z.array(FeatureSchema).exactOptional(),
    staffRoles: z.array(RoleSchema).exactOptional(),
    token: z.string().exactOptional(),
    user: UserSchema.exactOptional(),
    userFeatures: z.array(FeatureSchema).exactOptional(),
    userGroups: z.array(BaseGroupSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UserToken')

const PatientManagementRequestBody = {
  description: 'patientManagement',
  content: { 'application/json': { schema: PatientManagementSchema } },
}

export const postAuthLoginRoute = createRoute({
  method: 'post',
  path: '/auth/login',
  tags: ['auth-controller'],
  summary: 'Log In',
  description:
    'Authenticate using username and password, returns token, which must be added to X-Auth-Token in header of all future requests',
  operationId: 'logIn',
  request: {
    body: {
      description: 'credentials',
      content: { 'application/json': { schema: CredentialsSchema } },
    },
  },
  responses: {
    200: {
      description: 'Description was not specified',
      content: { '*/*': { schema: UserTokenSchema } },
    },
    201: { description: 'Created' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const deleteAuthLogoutTokenRoute = createRoute({
  method: 'delete',
  path: '/auth/logout/{token}',
  tags: ['auth-controller'],
  summary: 'Log Out',
  description: 'Log Out',
  operationId: 'logOut',
  request: {
    params: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'token',
            in: 'path',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Description was not specified' },
    204: { description: 'No Content' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
  },
})

export const getAuthTokenBasicuserinformationRoute = createRoute({
  method: 'get',
  path: '/auth/{token}/basicuserinformation',
  tags: ['auth-controller'],
  summary: 'Get Basic User Information',
  description:
    'Once logged in and have a token, get basic user information including group role membership',
  operationId: 'getBasicUserInformation',
  request: {
    params: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'token',
            in: 'path',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: UserSchema } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getPatientUserIdBasicRoute = createRoute({
  method: 'get',
  path: '/patient/{userId}/basic',
  tags: ['patient-controller'],
  summary: 'Get Basic Patient Information',
  description:
    'Given a User ID, get basic patient information for a user from clinical data stored in FHIR',
  operationId: 'getBasicPatientDetails',
  request: {
    params: z.object({
      userId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'userId',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.array(PatientSchema) } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getPatientmanagementDiagnosesRoute = createRoute({
  method: 'get',
  path: '/patientmanagement/diagnoses',
  tags: ['patient-management-controller'],
  summary: 'getPatientManagementDiagnoses',
  description: 'getPatientManagementDiagnoses',
  operationId: 'getPatientManagementDiagnoses',
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.array(CodeSchema) } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getPatientmanagementLookuptypesRoute = createRoute({
  method: 'get',
  path: '/patientmanagement/lookuptypes',
  tags: ['patient-management-controller'],
  summary: 'getPatientManagementLookupTypes',
  description: 'getPatientManagementLookupTypes',
  operationId: 'getPatientManagementLookupTypes',
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(LookupTypeSchema) } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const postPatientmanagementValidateRoute = createRoute({
  method: 'post',
  path: '/patientmanagement/validate',
  tags: ['patient-management-controller'],
  summary: 'validatePatientManagement',
  description: 'validatePatientManagement',
  operationId: 'validatePatientManagement',
  request: { body: PatientManagementRequestBody },
  responses: {
    200: { description: 'Description was not specified' },
    201: { description: 'Created' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getPatientmanagementUserIdGroupGroupIdIdentifierIdentifierIdRoute = createRoute({
  method: 'get',
  path: '/patientmanagement/{userId}/group/{groupId}/identifier/{identifierId}',
  tags: ['patient-management-controller'],
  summary: 'getPatientManagement',
  description: 'getPatientManagement',
  operationId: 'getPatientManagement',
  request: {
    params: z.object({
      userId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'userId',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      groupId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'groupId',
            in: 'path',
            name: 'groupId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      identifierId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'identifierId',
            in: 'path',
            name: 'identifierId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: PatientManagementSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const postPatientmanagementUserIdGroupGroupIdIdentifierIdentifierIdRoute = createRoute({
  method: 'post',
  path: '/patientmanagement/{userId}/group/{groupId}/identifier/{identifierId}',
  tags: ['patient-management-controller'],
  summary: 'savePatientManagement',
  description: 'savePatientManagement',
  operationId: 'savePatientManagement',
  request: {
    params: z.object({
      userId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'userId',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      groupId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'groupId',
            in: 'path',
            name: 'groupId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      identifierId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'identifierId',
            in: 'path',
            name: 'identifierId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'patientManagement',
      content: { 'application/json': { schema: PatientManagementSchema } },
    },
  },
  responses: {
    200: { description: 'Description was not specified' },
    201: { description: 'Created' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const postPatientmanagementUserIdGroupGroupIdIdentifierIdentifierIdSurgeriesRoute =
  createRoute({
    method: 'post',
    path: '/patientmanagement/{userId}/group/{groupId}/identifier/{identifierId}/surgeries',
    tags: ['patient-management-controller'],
    summary: 'savePatientManagementSurgeries',
    description: 'savePatientManagementSurgeries',
    operationId: 'savePatientManagementSurgeries',
    request: {
      params: z.object({
        userId: z
          .preprocess((val) => {
            if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
              return val
            if (/^-?\d+$/.test(val)) return BigInt(val)
            const num = Number(val)
            return Number.isSafeInteger(num) ? BigInt(num) : val
          }, z.int64())
          .openapi({
            param: {
              description: 'userId',
              in: 'path',
              name: 'userId',
              required: true,
              schema: { format: 'int64', type: 'integer' },
            },
          }),
        groupId: z
          .preprocess((val) => {
            if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
              return val
            if (/^-?\d+$/.test(val)) return BigInt(val)
            const num = Number(val)
            return Number.isSafeInteger(num) ? BigInt(num) : val
          }, z.int64())
          .openapi({
            param: {
              description: 'groupId',
              in: 'path',
              name: 'groupId',
              required: true,
              schema: { format: 'int64', type: 'integer' },
            },
          }),
        identifierId: z
          .preprocess((val) => {
            if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
              return val
            if (/^-?\d+$/.test(val)) return BigInt(val)
            const num = Number(val)
            return Number.isSafeInteger(num) ? BigInt(num) : val
          }, z.int64())
          .openapi({
            param: {
              description: 'identifierId',
              in: 'path',
              name: 'identifierId',
              required: true,
              schema: { format: 'int64', type: 'integer' },
            },
          }),
      }),
      body: {
        description: 'patientManagement',
        content: { 'application/json': { schema: PatientManagementSchema } },
      },
    },
    responses: {
      200: { description: 'Description was not specified' },
      201: { description: 'Created' },
      401: { description: 'Unauthorized' },
      403: { description: 'Forbidden' },
      404: { description: 'Not Found' },
    },
  })

export const getUserUserIdAvailableobservationheadingsRoute = createRoute({
  method: 'get',
  path: '/user/{userId}/availableobservationheadings',
  tags: ['observation-heading-controller'],
  summary: 'Get Available Observations Types For a User',
  description:
    'Given a User ID retrieve a list of available observation types for that user (where they have observation data).',
  operationId: 'getAvailableObservationHeadings',
  request: {
    params: z.object({
      userId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'userId',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(ObservationHeadingSchema) } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getUserUserIdObservationsRoute = createRoute({
  method: 'get',
  path: '/user/{userId}/observations',
  tags: ['observation-controller'],
  summary: 'Get Observations of Multiple Types For a User',
  description: 'Given a User ID and search parameters, retrieve a page of observations.',
  operationId: 'getObservationsByCodes',
  request: {
    params: z.object({
      userId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'userId',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      code: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description: 'code',
            in: 'query',
            name: 'code',
            required: true,
            schema: { items: { type: 'string' }, type: 'array', uniqueItems: false },
          },
        }),
      limit: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'limit',
            in: 'query',
            name: 'limit',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      offset: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'offset',
            in: 'query',
            name: 'offset',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      orderDirection: z
        .string()
        .openapi({
          param: {
            description: 'orderDirection',
            in: 'query',
            name: 'orderDirection',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: FhirObservationPageSchema } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getUserUserIdObservationsCodeRoute = createRoute({
  method: 'get',
  path: '/user/{userId}/observations/{code}',
  tags: ['observation-controller'],
  summary: 'Get Observations of a Certain Type For a User',
  description: 'Given a User ID and observation code, retrieve all observations.',
  operationId: 'getObservationsByCode',
  request: {
    params: z.object({
      userId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'userId',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      code: z
        .string()
        .openapi({
          param: {
            description: 'code',
            in: 'path',
            name: 'code',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.array(FhirObservationSchema) } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getUserUserIdObservationsCodePatiententeredRoute = createRoute({
  method: 'get',
  path: '/user/{userId}/observations/{code}/patiententered',
  tags: ['observation-controller'],
  summary: 'Get patient entered Observations of a Certain Type For a User',
  description: 'Given a User ID and observation code, retrieve patient entered observations.',
  operationId: 'getPatientEnteredObservationsByCode',
  request: {
    params: z.object({
      userId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'userId',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      code: z
        .string()
        .openapi({
          param: {
            description: 'code',
            in: 'path',
            name: 'code',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.array(FhirObservationSchema) } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getUserUserIdPatiententeredobservationheadingsRoute = createRoute({
  method: 'get',
  path: '/user/{userId}/patiententeredobservationheadings',
  tags: ['observation-heading-controller'],
  summary: 'Get Available Patient Entered Observations Types For a User',
  description:
    'Given a User ID retrieve a list of available observation types for that user (where they have patient entered observation data).',
  operationId: 'getPatientEnteredObservationHeadings',
  request: {
    params: z.object({
      userId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'userId',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(ObservationHeadingSchema) } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})
