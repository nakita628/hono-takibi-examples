import { createRoute, z } from '@hono/zod-openapi'

const BillAbstractSchema = z
  .object({
    abstract: z
      .string()
      .openapi({ example: 'This bill designates a new state arachnid.', title: 'Abstract' }),
    note: z.string().openapi({ example: 'house abstract', title: 'Note' }),
  })
  .openapi({ required: ['abstract', 'note'], title: 'BillAbstract' })
  .openapi('BillAbstract')

const OrganizationSchema = z
  .object({
    classification: z.string().openapi({ example: 'legislature', title: 'Classification' }),
    id: z
      .string()
      .openapi({ example: 'ocd-organization/32aab083-d7a0-44e0-9b95-a7790c542605', title: 'Id' }),
    name: z.string().openapi({ example: 'North Carolina General Assembly', title: 'Name' }),
  })
  .openapi({ required: ['id', 'name', 'classification'], title: 'Organization' })
  .openapi('Organization')

const BillActionSchema = z
  .object({
    classification: z.array(z.string()).openapi({ example: ['passed'], title: 'Classification' }),
    date: z.string().openapi({ example: '2020-03-14', title: 'Date' }),
    description: z.string().openapi({ example: 'Passed 1st Reading', title: 'Description' }),
    order: z.int().openapi({ title: 'Order' }),
    organization: OrganizationSchema,
  })
  .openapi({
    required: ['organization', 'description', 'date', 'classification', 'order'],
    title: 'BillAction',
  })
  .openapi('BillAction')

const BillDocumentLinkSchema = z
  .object({
    media_type: z.string().openapi({ example: 'application/pdf', title: 'Media Type' }),
    url: z.string().openapi({ example: 'https://example.com/doc.pdf', title: 'Url' }),
  })
  .openapi({ required: ['url', 'media_type'], title: 'BillDocumentLink' })
  .openapi('BillDocumentLink')

const BillDocumentOrVersionSchema = z
  .object({
    date: z.string().openapi({ example: '2020-10-01', title: 'Date' }),
    links: z.array(BillDocumentLinkSchema).openapi({ title: 'Links' }),
    note: z.string().openapi({ example: 'Latest Version', title: 'Note' }),
  })
  .openapi({ required: ['note', 'date', 'links'], title: 'BillDocumentOrVersion' })
  .openapi('BillDocumentOrVersion')

const JurisdictionClassificationSchema = z
  .enum(['state', 'municipality', 'country'])
  .openapi({ description: 'An enumeration.', title: 'JurisdictionClassification' })
  .openapi('JurisdictionClassification')

const CompactJurisdictionSchema = z
  .object({
    classification: JurisdictionClassificationSchema.openapi({ example: 'state' }),
    id: z
      .string()
      .openapi({ example: 'ocd-jurisdiction/country:us/state:nc/government', title: 'Id' }),
    name: z.string().openapi({ example: 'North Carolina', title: 'Name' }),
  })
  .openapi({ required: ['id', 'name', 'classification'], title: 'CompactJurisdiction' })
  .openapi('CompactJurisdiction')

const BillIdentifierSchema = z
  .object({ identifier: z.string().openapi({ example: 'HB 74', title: 'Identifier' }) })
  .openapi({ required: ['identifier'], title: 'BillIdentifier' })
  .openapi('BillIdentifier')

const BillTitleSchema = z
  .object({
    note: z.string().openapi({ example: 'short title', title: 'Note' }),
    title: z
      .string()
      .openapi({ example: 'Designating the scorpion as the state arachnid.', title: 'Title' }),
  })
  .openapi({ required: ['title', 'note'], title: 'BillTitle' })
  .openapi('BillTitle')

const RelatedBillSchema = z
  .object({
    identifier: z.string().openapi({ example: 'HB 123', title: 'Identifier' }),
    legislative_session: z.string().openapi({ example: '2022S1', title: 'Legislative Session' }),
    relation_type: z.string().openapi({ example: 'companion', title: 'Relation Type' }),
  })
  .openapi({
    required: ['identifier', 'legislative_session', 'relation_type'],
    title: 'RelatedBill',
  })
  .openapi('RelatedBill')

const LinkSchema = z
  .object({
    note: z.string().openapi({ example: 'homepage', title: 'Note' }),
    url: z.string().openapi({ example: 'https://example.com/', title: 'Url' }),
  })
  .openapi({ required: ['url', 'note'], title: 'Link' })
  .openapi('Link')

const OrgClassificationSchema = z
  .enum(['legislature', 'executive', 'lower', 'upper', 'government'])
  .openapi({ description: 'An enumeration.', title: 'OrgClassification' })
  .openapi('OrgClassification')

const CurrentRoleSchema = z
  .object({
    district: z
      .union([z.string(), z.int()])
      .default('')
      .exactOptional()
      .openapi({ example: 3, title: 'District' }),
    division_id: z
      .string()
      .default('')
      .exactOptional()
      .openapi({ example: 'ocd-division/country:us/state:nc/sldu:3', title: 'Division Id' }),
    org_classification: OrgClassificationSchema.openapi({ example: 'upper' }),
    title: z.string().openapi({ example: 'Senator', title: 'Title' }),
  })
  .openapi({ required: ['title', 'org_classification'], title: 'CurrentRole' })
  .openapi('CurrentRole')

const CompactPersonSchema = z
  .object({
    current_role: CurrentRoleSchema.exactOptional(),
    id: z
      .string()
      .openapi({ example: 'ocd-person/adb58f21-f2fd-4830-85b6-f490b0867d14', title: 'Id' }),
    name: z.string().openapi({ example: 'Angela Augusta', title: 'Name' }),
    party: z.string().openapi({ example: 'Democratic', title: 'Party' }),
  })
  .openapi({ required: ['id', 'name', 'party'], title: 'CompactPerson' })
  .openapi('CompactPerson')

const BillSponsorshipSchema = z
  .object({
    classification: z.string().openapi({ example: 'primary', title: 'Classification' }),
    entity_type: z.string().openapi({ example: 'person', title: 'Entity Type' }),
    name: z.string().openapi({ example: 'JONES', title: 'Name' }),
    organization: OrganizationSchema.exactOptional().openapi({ title: 'Organization' }),
    person: CompactPersonSchema.exactOptional(),
    primary: z.boolean().openapi({ title: 'Primary' }),
  })
  .openapi({
    required: ['name', 'entity_type', 'primary', 'classification'],
    title: 'BillSponsorship',
  })
  .openapi('BillSponsorship')

const VoteCountSchema = z
  .object({
    option: z.string().openapi({ example: 'yes', title: 'Option' }),
    value: z.int().openapi({ example: 48, title: 'Value' }),
  })
  .openapi({ required: ['option', 'value'], title: 'VoteCount' })
  .openapi('VoteCount')

const PersonVoteSchema = z
  .object({
    option: z.string().openapi({ example: 'no', title: 'Option' }),
    voter: CompactPersonSchema.exactOptional(),
    voter_name: z.string().openapi({ example: 'Wu', title: 'Voter Name' }),
  })
  .openapi({ required: ['option', 'voter_name'], title: 'PersonVote' })
  .openapi('PersonVote')

const VoteEventSchema = z
  .object({
    counts: z.array(VoteCountSchema).openapi({ title: 'Counts' }),
    extras: z.object({}).openapi({ title: 'Extras' }),
    id: z.string().openapi({ title: 'Id' }),
    identifier: z.string().openapi({ example: 'HV #3312', title: 'Identifier' }),
    motion_classification: z
      .array(z.string())
      .default([])
      .exactOptional()
      .openapi({ example: ['passage'], title: 'Motion Classification' }),
    motion_text: z.string().openapi({ example: 'Shall the bill be passed?', title: 'Motion Text' }),
    organization: OrganizationSchema,
    result: z.string().openapi({ example: 'pass', title: 'Result' }),
    sources: z.array(LinkSchema).openapi({ title: 'Sources' }),
    start_date: z.string().openapi({ example: '2020-09-18', title: 'Start Date' }),
    votes: z.array(PersonVoteSchema).openapi({ title: 'Votes' }),
  })
  .openapi({
    required: [
      'id',
      'motion_text',
      'start_date',
      'result',
      'identifier',
      'extras',
      'organization',
      'votes',
      'counts',
      'sources',
    ],
    title: 'VoteEvent',
  })
  .openapi('VoteEvent')

type BillType = {
  abstracts?: z.infer<typeof BillAbstractSchema>[]
  actions?: z.infer<typeof BillActionSchema>[]
  classification?: string[]
  created_at: string
  documents?: z.infer<typeof BillDocumentOrVersionSchema>[]
  extras?: { [key: string]: unknown }
  first_action_date?: string
  from_organization: z.infer<typeof OrganizationSchema>
  id: string
  identifier: string
  jurisdiction: z.infer<typeof CompactJurisdictionSchema>
  latest_action_date?: string
  latest_action_description?: string
  latest_passage_date?: string
  openstates_url: string
  other_identifiers?: z.infer<typeof BillIdentifierSchema>[]
  other_titles?: z.infer<typeof BillTitleSchema>[]
  related_bills?: z.infer<typeof RelatedBillSchema>[]
  session: string
  sources?: z.infer<typeof LinkSchema>[]
  sponsorships?: z.infer<typeof BillSponsorshipSchema>[]
  subject?: string[]
  title: string
  updated_at: string
  versions?: z.infer<typeof BillDocumentOrVersionSchema>[]
  votes?: z.infer<typeof VoteEventSchema>[]
}

const AltIdentifierSchema = z
  .object({
    identifier: z.string().openapi({ example: 'NCL000123', title: 'Identifier' }),
    scheme: z.string().openapi({ example: 'legacy_openstates', title: 'Scheme' }),
  })
  .openapi({ required: ['identifier', 'scheme'], title: 'AltIdentifier' })
  .openapi('AltIdentifier')

const AltNameSchema = z
  .object({
    name: z.string().openapi({ example: 'Auggie', title: 'Name' }),
    note: z.string().openapi({ example: 'nickname', title: 'Note' }),
  })
  .openapi({ required: ['name', 'note'], title: 'AltName' })
  .openapi('AltName')

const BillSchema: z.ZodType<BillType> = z
  .lazy(() =>
    z
      .object({
        abstracts: z.array(BillAbstractSchema).exactOptional().openapi({ title: 'Abstracts' }),
        actions: z.array(BillActionSchema).exactOptional().openapi({ title: 'Actions' }),
        classification: z
          .array(z.string())
          .default([])
          .exactOptional()
          .openapi({ example: ['resolution'], title: 'Classification' }),
        created_at: z.iso.datetime({ offset: true }).openapi({ title: 'Created At' }),
        documents: z
          .array(BillDocumentOrVersionSchema)
          .exactOptional()
          .openapi({ title: 'Documents' }),
        extras: z.object({}).default({}).exactOptional().openapi({ example: {}, title: 'Extras' }),
        first_action_date: z
          .string()
          .default('')
          .exactOptional()
          .openapi({ example: '2020-01-01', title: 'First Action Date' }),
        from_organization: OrganizationSchema,
        id: z
          .string()
          .openapi({ example: 'ocd-bill/f0049138-1ad8-4506-a2a4-f4dd1251bbba', title: 'Id' }),
        identifier: z.string().openapi({ example: 'SB 113', title: 'Identifier' }),
        jurisdiction: CompactJurisdictionSchema,
        latest_action_date: z
          .string()
          .default('')
          .exactOptional()
          .openapi({ example: '2020-02-01', title: 'Latest Action Date' }),
        latest_action_description: z
          .string()
          .default('')
          .exactOptional()
          .openapi({ example: 'Introduced in House', title: 'Latest Action Description' }),
        latest_passage_date: z
          .string()
          .default('')
          .exactOptional()
          .openapi({ example: '2020-03-01', title: 'Latest Passage Date' }),
        openstates_url: z
          .string()
          .openapi({
            example: 'https://openstates.org/nc/bills/2019/HB1105/',
            title: 'Openstates Url',
          }),
        other_identifiers: z
          .array(BillIdentifierSchema)
          .exactOptional()
          .openapi({ title: 'Other Identifiers' }),
        other_titles: z.array(BillTitleSchema).exactOptional().openapi({ title: 'Other Titles' }),
        related_bills: z
          .array(RelatedBillSchema)
          .exactOptional()
          .openapi({ title: 'Related Bills' }),
        session: z.string().openapi({ example: '2020', title: 'Session' }),
        sources: z.array(LinkSchema).exactOptional().openapi({ title: 'Sources' }),
        sponsorships: z
          .array(BillSponsorshipSchema)
          .exactOptional()
          .openapi({ title: 'Sponsorships' }),
        subject: z
          .array(z.string())
          .default([])
          .exactOptional()
          .openapi({ example: ['SCORPIONS', 'SYMBOLS'], title: 'Subject' }),
        title: z.string().openapi({ example: 'Adopting a State Scorpion', title: 'Title' }),
        updated_at: z.iso.datetime({ offset: true }).openapi({ title: 'Updated At' }),
        versions: z
          .array(BillDocumentOrVersionSchema)
          .exactOptional()
          .openapi({ title: 'Versions' }),
        votes: z.array(VoteEventSchema).exactOptional().openapi({ title: 'Votes' }),
      })
      .openapi({
        required: [
          'id',
          'session',
          'jurisdiction',
          'from_organization',
          'identifier',
          'title',
          'created_at',
          'updated_at',
          'openstates_url',
        ],
        title: 'Bill',
      }),
  )
  .openapi('Bill')

const BillIncludeSchema = z
  .enum([
    'sponsorships',
    'abstracts',
    'other_titles',
    'other_identifiers',
    'actions',
    'sources',
    'documents',
    'versions',
    'votes',
    'related_bills',
  ])
  .openapi({ description: 'An enumeration.', title: 'BillInclude' })
  .openapi('BillInclude')

const PaginationMetaSchema = z
  .object({
    max_page: z.int().openapi({ example: 3, title: 'Max Page' }),
    page: z.int().openapi({ example: 1, title: 'Page' }),
    per_page: z.int().openapi({ example: 20, title: 'Per Page' }),
    total_items: z.int().openapi({ example: 52, title: 'Total Items' }),
  })
  .openapi({ required: ['per_page', 'page', 'max_page', 'total_items'], title: 'PaginationMeta' })
  .openapi('PaginationMeta')

const BillListSchema = z
  .object({
    pagination: PaginationMetaSchema,
    results: z.array(BillSchema).openapi({ title: 'Results' }),
  })
  .openapi({ required: ['results', 'pagination'], title: 'BillList' })
  .openapi('BillList')

const BillSortOptionSchema = z
  .enum([
    'updated_asc',
    'updated_desc',
    'first_action_asc',
    'first_action_desc',
    'latest_action_asc',
    'latest_action_desc',
  ])
  .openapi({ description: 'An enumeration.', title: 'BillSortOption' })
  .openapi('BillSortOption')

const PostSchema = z
  .object({
    division_id: z
      .string()
      .openapi({ example: 'ocd-division/country:us/state:mn/sldu:4', title: 'Division Id' }),
    label: z.string().openapi({ example: '2', title: 'Label' }),
    maximum_memberships: z.int().openapi({ example: 1, title: 'Maximum Memberships' }),
    role: z.string().openapi({ example: 'Senator', title: 'Role' }),
  })
  .openapi({ required: ['label', 'role', 'division_id', 'maximum_memberships'], title: 'Post' })
  .openapi('Post')

const ChamberSchema = z
  .object({
    classification: z.string().openapi({ example: 'legislature', title: 'Classification' }),
    districts: z.array(PostSchema).exactOptional().openapi({ title: 'Districts' }),
    id: z
      .string()
      .openapi({ example: 'ocd-organization/32aab083-d7a0-44e0-9b95-a7790c542605', title: 'Id' }),
    name: z.string().openapi({ example: 'North Carolina General Assembly', title: 'Name' }),
  })
  .openapi({ required: ['id', 'name', 'classification'], title: 'Chamber' })
  .openapi('Chamber')

const CommitteeClassificationSchema = z
  .enum(['committee', 'subcommittee'])
  .openapi({ description: 'An enumeration.', title: 'CommitteeClassification' })
  .openapi('CommitteeClassification')

const CommitteeMembershipSchema = z
  .object({
    person: CompactPersonSchema.exactOptional(),
    person_name: z.string().openapi({ title: 'Person Name' }),
    role: z.string().openapi({ title: 'Role' }),
  })
  .openapi({ required: ['person_name', 'role'], title: 'CommitteeMembership' })
  .openapi('CommitteeMembership')

const CommitteeSchema = z
  .object({
    classification: CommitteeClassificationSchema,
    extras: z.object({}).openapi({ example: { room: 'Room 4B' }, title: 'Extras' }),
    id: z
      .string()
      .openapi({ example: 'ocd-organization/aabbbbcc-dddd-eeee-ffff-0123456789ab', title: 'Id' }),
    links: z.array(LinkSchema).exactOptional().openapi({ title: 'Links' }),
    memberships: z
      .array(CommitteeMembershipSchema)
      .exactOptional()
      .openapi({ title: 'Memberships' }),
    name: z.string().openapi({ example: 'Health & Public Services', title: 'Name' }),
    other_names: z.array(AltNameSchema).exactOptional().openapi({ title: 'Other Names' }),
    parent_id: z
      .string()
      .openapi({
        example: 'ocd-organization/aabbbbcc-dddd-eeee-ffff-999988887777',
        title: 'Parent Id',
      }),
    sources: z.array(LinkSchema).exactOptional().openapi({ title: 'Sources' }),
  })
  .openapi({
    required: ['id', 'name', 'classification', 'parent_id', 'extras'],
    title: 'Committee',
  })
  .openapi('Committee')

const CommitteeIncludeSchema = z
  .enum(['memberships', 'links', 'sources'])
  .openapi({ description: 'An enumeration.', title: 'CommitteeInclude' })
  .openapi('CommitteeInclude')

const CommitteeListSchema = z
  .object({
    pagination: PaginationMetaSchema,
    results: z.array(CommitteeSchema).openapi({ title: 'Results' }),
  })
  .openapi({ required: ['results', 'pagination'], title: 'CommitteeList' })
  .openapi('CommitteeList')

const CompactBillSchema = z
  .object({
    id: z
      .string()
      .openapi({ example: 'ocd-bill/12345678-0000-1111-2222-333344445555', title: 'Id' }),
    identifier: z.string().openapi({ title: 'Identifier' }),
    session: z.string().openapi({ title: 'Session' }),
    title: z.string().openapi({ title: 'Title' }),
  })
  .openapi({ required: ['id', 'session', 'identifier', 'title'], title: 'CompactBill' })
  .openapi('CompactBill')

const CompactVoteEventSchema = z
  .object({
    id: z
      .string()
      .openapi({ example: 'ocd-vote/12345678-0000-1111-2222-333344445555', title: 'Id' }),
    motion_text: z.string().openapi({ example: 'Shall the bill be passed?', title: 'Motion Text' }),
  })
  .openapi({ required: ['id', 'motion_text'], title: 'CompactVoteEvent' })
  .openapi('CompactVoteEvent')

const DataExportSchema = z
  .object({
    created_at: z.iso.datetime({ offset: true }).openapi({ title: 'Created At' }),
    data_type: z.string().openapi({ title: 'Data Type' }),
    updated_at: z.iso.datetime({ offset: true }).openapi({ title: 'Updated At' }),
    url: z.string().openapi({ title: 'Url' }),
  })
  .openapi({ required: ['created_at', 'updated_at', 'data_type', 'url'], title: 'DataExport' })
  .openapi('DataExport')

const EventMediaSchema = z
  .object({
    classification: z.string().openapi({ title: 'Classification' }),
    date: z.string().openapi({ title: 'Date' }),
    links: z.array(LinkSchema).openapi({ title: 'Links' }),
    note: z.string().openapi({ title: 'Note' }),
    offset: z.int().openapi({ title: 'Offset' }),
  })
  .openapi({ required: ['note', 'date', 'offset', 'classification', 'links'], title: 'EventMedia' })
  .openapi('EventMedia')

const EventRelatedEntitySchema = z
  .object({
    bill: CompactBillSchema.exactOptional(),
    entity_type: z.string().openapi({ example: 'person', title: 'Entity Type' }),
    name: z.string().openapi({ example: 'JONES', title: 'Name' }),
    note: z.string().openapi({ title: 'Note' }),
    organization: OrganizationSchema.exactOptional().openapi({ title: 'Organization' }),
    person: CompactPersonSchema.exactOptional(),
    vote: CompactVoteEventSchema.exactOptional(),
  })
  .openapi({ required: ['note', 'name', 'entity_type'], title: 'EventRelatedEntity' })
  .openapi('EventRelatedEntity')

const EventAgendaItemSchema = z
  .object({
    classification: z.array(z.string()).openapi({ title: 'Classification' }),
    description: z.string().openapi({ title: 'Description' }),
    extras: z.object({}).openapi({ title: 'Extras' }),
    media: z.array(EventMediaSchema).openapi({ title: 'Media' }),
    notes: z.array(z.string()).openapi({ title: 'Notes' }),
    order: z.int().openapi({ title: 'Order' }),
    related_entities: z.array(EventRelatedEntitySchema).openapi({ title: 'Related Entities' }),
    subjects: z.array(z.string()).openapi({ title: 'Subjects' }),
  })
  .openapi({
    required: [
      'description',
      'classification',
      'order',
      'subjects',
      'notes',
      'extras',
      'related_entities',
      'media',
    ],
    title: 'EventAgendaItem',
  })
  .openapi('EventAgendaItem')

const EventDocumentSchema = z
  .object({
    classification: z.string().openapi({ title: 'Classification' }),
    date: z.string().openapi({ title: 'Date' }),
    links: z.array(LinkSchema).openapi({ title: 'Links' }),
    note: z.string().openapi({ title: 'Note' }),
  })
  .openapi({ required: ['note', 'date', 'classification', 'links'], title: 'EventDocument' })
  .openapi('EventDocument')

const EventLocationSchema = z
  .object({
    name: z.string().openapi({ title: 'Name' }),
    url: z.string().openapi({ title: 'Url' }),
  })
  .openapi({ required: ['name', 'url'], title: 'EventLocation' })
  .openapi('EventLocation')

const EventParticipantSchema = z
  .object({
    entity_type: z.string().openapi({ example: 'person', title: 'Entity Type' }),
    name: z.string().openapi({ example: 'JONES', title: 'Name' }),
    note: z.string().openapi({ title: 'Note' }),
    organization: OrganizationSchema.exactOptional().openapi({ title: 'Organization' }),
    person: CompactPersonSchema.exactOptional(),
  })
  .openapi({ required: ['note', 'name', 'entity_type'], title: 'EventParticipant' })
  .openapi('EventParticipant')

const EventSchema = z
  .object({
    agenda: z.array(EventAgendaItemSchema).exactOptional().openapi({ title: 'Agenda' }),
    all_day: z.boolean().openapi({ title: 'All Day' }),
    classification: z.string().openapi({ title: 'Classification' }),
    deleted: z.boolean().openapi({ title: 'Deleted' }),
    description: z.string().openapi({ title: 'Description' }),
    documents: z.array(EventDocumentSchema).exactOptional().openapi({ title: 'Documents' }),
    end_date: z.string().openapi({ title: 'End Date' }),
    id: z.string().openapi({ title: 'Id' }),
    jurisdiction: CompactJurisdictionSchema,
    links: z.array(LinkSchema).exactOptional().openapi({ title: 'Links' }),
    location: EventLocationSchema.exactOptional(),
    media: z.array(EventMediaSchema).exactOptional().openapi({ title: 'Media' }),
    name: z.string().openapi({ title: 'Name' }),
    participants: z
      .array(EventParticipantSchema)
      .exactOptional()
      .openapi({ title: 'Participants' }),
    sources: z.array(LinkSchema).exactOptional().openapi({ title: 'Sources' }),
    start_date: z.string().openapi({ title: 'Start Date' }),
    status: z.string().openapi({ title: 'Status' }),
    upstream_id: z.string().openapi({ title: 'Upstream Id' }),
  })
  .openapi({
    required: [
      'id',
      'name',
      'jurisdiction',
      'description',
      'classification',
      'start_date',
      'end_date',
      'all_day',
      'status',
      'upstream_id',
      'deleted',
    ],
    title: 'Event',
  })
  .openapi('Event')

const EventIncludeSchema = z
  .enum(['links', 'sources', 'media', 'documents', 'participants', 'agenda'])
  .openapi({ description: 'An enumeration.', title: 'EventInclude' })
  .openapi('EventInclude')

const EventListSchema = z
  .object({
    pagination: PaginationMetaSchema,
    results: z.array(EventSchema).openapi({ title: 'Results' }),
  })
  .openapi({ required: ['results', 'pagination'], title: 'EventList' })
  .openapi('EventList')

const ValidationErrorSchema = z
  .object({
    loc: z.array(z.union([z.string(), z.int()])).openapi({ title: 'Location' }),
    msg: z.string().openapi({ title: 'Message' }),
    type: z.string().openapi({ title: 'Error Type' }),
  })
  .openapi({ required: ['loc', 'msg', 'type'], title: 'ValidationError' })
  .openapi('ValidationError')

const HTTPValidationErrorSchema = z
  .object({ detail: z.array(ValidationErrorSchema).exactOptional().openapi({ title: 'Detail' }) })
  .openapi({ title: 'HTTPValidationError', required: [] })
  .openapi('HTTPValidationError')

const RunPlanSchema = z
  .object({
    end_time: z.iso.datetime({ offset: true }).openapi({ title: 'End Time' }),
    start_time: z.iso.datetime({ offset: true }).openapi({ title: 'Start Time' }),
    success: z.boolean().openapi({ title: 'Success' }),
  })
  .openapi({ required: ['success', 'start_time', 'end_time'], title: 'RunPlan' })
  .openapi('RunPlan')

const LegislativeSessionSchema = z
  .object({
    classification: z.string().openapi({ title: 'Classification' }),
    downloads: z.array(DataExportSchema).exactOptional().openapi({ title: 'Downloads' }),
    end_date: z.string().openapi({ title: 'End Date' }),
    identifier: z.string().openapi({ title: 'Identifier' }),
    name: z.string().openapi({ title: 'Name' }),
    start_date: z.string().openapi({ title: 'Start Date' }),
  })
  .openapi({
    required: ['identifier', 'name', 'classification', 'start_date', 'end_date'],
    title: 'LegislativeSession',
  })
  .openapi('LegislativeSession')

const JurisdictionSchema = z
  .object({
    classification: JurisdictionClassificationSchema.openapi({ example: 'state' }),
    division_id: z
      .string()
      .default('')
      .exactOptional()
      .openapi({ example: 'ocd-division/country:us/state:nc', title: 'Division Id' }),
    id: z
      .string()
      .openapi({ example: 'ocd-jurisdiction/country:us/state:nc/government', title: 'Id' }),
    latest_bill_update: z.iso.datetime({ offset: true }).openapi({ title: 'Latest Bill Update' }),
    latest_people_update: z.iso
      .datetime({ offset: true })
      .openapi({ title: 'Latest People Update' }),
    latest_runs: z.array(RunPlanSchema).exactOptional().openapi({ title: 'Latest Runs' }),
    legislative_sessions: z
      .array(LegislativeSessionSchema)
      .exactOptional()
      .openapi({ title: 'Legislative Sessions' }),
    name: z.string().openapi({ example: 'North Carolina', title: 'Name' }),
    organizations: z.array(ChamberSchema).exactOptional().openapi({ title: 'Organizations' }),
    url: z.string().openapi({ example: 'https://nc.gov', title: 'Url' }),
  })
  .openapi({
    required: ['id', 'name', 'classification', 'url', 'latest_bill_update', 'latest_people_update'],
    title: 'Jurisdiction',
  })
  .openapi('Jurisdiction')

const JurisdictionIncludeSchema = z
  .enum(['organizations', 'legislative_sessions', 'latest_runs'])
  .openapi({ description: 'An enumeration.', title: 'JurisdictionInclude' })
  .openapi('JurisdictionInclude')

const JurisdictionListSchema = z
  .object({
    pagination: PaginationMetaSchema,
    results: z.array(JurisdictionSchema).openapi({ title: 'Results' }),
  })
  .openapi({ required: ['results', 'pagination'], title: 'JurisdictionList' })
  .openapi('JurisdictionList')

const OfficeSchema = z
  .object({
    address: z
      .string()
      .exactOptional()
      .openapi({ example: '212 Maple Lane; Raleigh NC; 27526', title: 'Address' }),
    classification: z
      .string()
      .exactOptional()
      .openapi({ example: 'capitol', title: 'Classification' }),
    fax: z.string().exactOptional().openapi({ example: '919-555-1234', title: 'Fax' }),
    name: z.string().openapi({ example: 'District Office', title: 'Name' }),
    voice: z.string().exactOptional().openapi({ example: '919-555-0064', title: 'Voice' }),
  })
  .openapi({ required: ['name'], title: 'Office' })
  .openapi('Office')

const PersonSchema = z
  .object({
    birth_date: z.string().openapi({ example: '1960-05-04', title: 'Birth Date' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ title: 'Created At' }),
    current_role: CurrentRoleSchema.exactOptional(),
    death_date: z.string().openapi({ example: '2019-04-10', title: 'Death Date' }),
    email: z.string().openapi({ example: 'aperson@example.com', title: 'Email' }),
    extras: z.object({}).openapi({ example: { profession: 'Doctor' }, title: 'Extras' }),
    family_name: z.string().openapi({ example: 'Augusta', title: 'Family Name' }),
    gender: z.string().openapi({ example: 'female', title: 'Gender' }),
    given_name: z.string().openapi({ example: 'Angela', title: 'Given Name' }),
    id: z
      .string()
      .openapi({ example: 'ocd-person/adb58f21-f2fd-4830-85b6-f490b0867d14', title: 'Id' }),
    image: z.string().openapi({ example: 'https://example.com/ncimg/3.png', title: 'Image' }),
    jurisdiction: CompactJurisdictionSchema,
    links: z.array(LinkSchema).exactOptional().openapi({ title: 'Links' }),
    name: z.string().openapi({ example: 'Angela Augusta', title: 'Name' }),
    offices: z.array(OfficeSchema).exactOptional().openapi({ title: 'Offices' }),
    openstates_url: z
      .string()
      .openapi({
        example: 'https://openstates.org/person/amos-l-quick-iii-28NRPPfJA6FGVl9RrjpKjl/',
        title: 'Openstates Url',
      }),
    other_identifiers: z
      .array(AltIdentifierSchema)
      .exactOptional()
      .openapi({ title: 'Other Identifiers' }),
    other_names: z.array(AltNameSchema).exactOptional().openapi({ title: 'Other Names' }),
    party: z.string().openapi({ example: 'Democratic', title: 'Party' }),
    sources: z.array(LinkSchema).exactOptional().openapi({ title: 'Sources' }),
    updated_at: z.iso.datetime({ offset: true }).openapi({ title: 'Updated At' }),
  })
  .openapi({
    required: [
      'id',
      'name',
      'party',
      'jurisdiction',
      'given_name',
      'family_name',
      'image',
      'email',
      'gender',
      'birth_date',
      'death_date',
      'extras',
      'created_at',
      'updated_at',
      'openstates_url',
    ],
    title: 'Person',
  })
  .openapi('Person')

const PersonIncludeSchema = z
  .enum(['other_names', 'other_identifiers', 'links', 'sources', 'offices'])
  .openapi({ description: 'An enumeration.', title: 'PersonInclude' })
  .openapi('PersonInclude')

const PersonListSchema = z
  .object({
    pagination: PaginationMetaSchema,
    results: z.array(PersonSchema).openapi({ title: 'Results' }),
  })
  .openapi({ required: ['results', 'pagination'], title: 'PersonList' })
  .openapi('PersonList')

export const getBillsRoute = createRoute({
  method: 'get',
  path: '/bills',
  tags: ['bills'],
  summary: 'Bills Search',
  description:
    'Search for bills matching given criteria.\n\nMust either specify a jurisdiction or a full text query (q).  Additional parameters will\nfuther restrict bills returned.',
  operationId: 'bills_search_bills_get',
  request: {
    query: z.object({
      jurisdiction: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by jurisdiction name or ID.',
            in: 'query',
            name: 'jurisdiction',
            required: false,
            schema: {
              description: 'Filter by jurisdiction name or ID.',
              title: 'Jurisdiction',
              type: 'string',
            },
          },
          description: 'Filter by jurisdiction name or ID.',
          title: 'Jurisdiction',
        }),
      session: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by session identifier.',
            in: 'query',
            name: 'session',
            required: false,
            schema: {
              description: 'Filter by session identifier.',
              title: 'Session',
              type: 'string',
            },
          },
          description: 'Filter by session identifier.',
          title: 'Session',
        }),
      chamber: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by chamber of origination.',
            in: 'query',
            name: 'chamber',
            required: false,
            schema: {
              description: 'Filter by chamber of origination.',
              title: 'Chamber',
              type: 'string',
            },
          },
          description: 'Filter by chamber of origination.',
          title: 'Chamber',
        }),
      identifier: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .default([])
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter to only include bills with this identifier.',
            in: 'query',
            name: 'identifier',
            required: false,
            schema: {
              default: [],
              description: 'Filter to only include bills with this identifier.',
              items: { type: 'string' },
              title: 'Identifier',
              type: 'array',
            },
          },
          description: 'Filter to only include bills with this identifier.',
          title: 'Identifier',
        }),
      classification: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by classification, e.g. bill or resolution',
            in: 'query',
            name: 'classification',
            required: false,
            schema: {
              description: 'Filter by classification, e.g. bill or resolution',
              title: 'Classification',
              type: 'string',
            },
          },
          description: 'Filter by classification, e.g. bill or resolution',
          title: 'Classification',
        }),
      subject: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .default([])
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by one or more subjects.',
            in: 'query',
            name: 'subject',
            required: false,
            schema: {
              default: [],
              description: 'Filter by one or more subjects.',
              items: { type: 'string' },
              title: 'Subject',
              type: 'array',
            },
          },
          description: 'Filter by one or more subjects.',
          title: 'Subject',
        }),
      updated_since: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter to only include bills with updates since a given date.',
            in: 'query',
            name: 'updated_since',
            required: false,
            schema: {
              description: 'Filter to only include bills with updates since a given date.',
              title: 'Updated Since',
              type: 'string',
            },
          },
          description: 'Filter to only include bills with updates since a given date.',
          title: 'Updated Since',
        }),
      created_since: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter to only include bills created since a given date.',
            in: 'query',
            name: 'created_since',
            required: false,
            schema: {
              description: 'Filter to only include bills created since a given date.',
              title: 'Created Since',
              type: 'string',
            },
          },
          description: 'Filter to only include bills created since a given date.',
          title: 'Created Since',
        }),
      action_since: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter to only include bills with an action since a given date.',
            in: 'query',
            name: 'action_since',
            required: false,
            schema: {
              description: 'Filter to only include bills with an action since a given date.',
              title: 'Action Since',
              type: 'string',
            },
          },
          description: 'Filter to only include bills with an action since a given date.',
          title: 'Action Since',
        }),
      sort: BillSortOptionSchema.default('updated_desc')
        .exactOptional()
        .openapi({
          param: {
            description: 'Desired sort order for bill results.',
            in: 'query',
            name: 'sort',
            required: false,
            schema: {
              allOf: [{ $ref: '#/components/schemas/BillSortOption' }],
              default: 'updated_desc',
              description: 'Desired sort order for bill results.',
            },
          },
          description: 'Desired sort order for bill results.',
        }),
      sponsor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter to only include bills sponsored by a given name or person ID.',
            in: 'query',
            name: 'sponsor',
            required: false,
            schema: {
              description: 'Filter to only include bills sponsored by a given name or person ID.',
              title: 'Sponsor',
              type: 'string',
            },
          },
          description: 'Filter to only include bills sponsored by a given name or person ID.',
          title: 'Sponsor',
        }),
      sponsor_classification: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter matched sponsors to only include particular types of sponsorships.',
            in: 'query',
            name: 'sponsor_classification',
            required: false,
            schema: {
              description:
                'Filter matched sponsors to only include particular types of sponsorships.',
              title: 'Sponsor Classification',
              type: 'string',
            },
          },
          description: 'Filter matched sponsors to only include particular types of sponsorships.',
          title: 'Sponsor Classification',
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by full text search term.',
            in: 'query',
            name: 'q',
            required: false,
            schema: { description: 'Filter by full text search term.', title: 'Q', type: 'string' },
          },
          description: 'Filter by full text search term.',
          title: 'Q',
        }),
      include: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(BillIncludeSchema),
        )
        .default([])
        .exactOptional()
        .openapi({
          param: {
            description: 'Additional information to include in response.',
            in: 'query',
            name: 'include',
            required: false,
            schema: {
              default: [],
              description: 'Additional information to include in response.',
              items: { $ref: '#/components/schemas/BillInclude' },
              type: 'array',
            },
          },
          description: 'Additional information to include in response.',
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, title: 'Page', type: 'integer' },
          },
          title: 'Page',
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'per_page',
            required: false,
            schema: { default: 10, title: 'Per Page', type: 'integer' },
          },
          title: 'Per Page',
        }),
      apikey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'apikey',
            required: false,
            schema: { title: 'Apikey', type: 'string' },
          },
          title: 'Apikey',
        }),
    }),
    headers: z.object({
      'x-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'x-api-key',
            required: false,
            schema: { title: 'X-Api-Key', type: 'string' },
          },
          title: 'X-Api-Key',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: BillListSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getBillsOcdBillOpenstatesBillIdRoute = createRoute({
  method: 'get',
  path: '/bills/ocd-bill/{openstates_bill_id}',
  tags: ['bills'],
  summary: 'Bill Detail By Id',
  description: 'Obtain bill information by internal ID in the format ocd-bill/*uuid*.',
  operationId: 'bill_detail_by_id_bills_ocd_bill__openstates_bill_id__get',
  request: {
    params: z.object({
      openstates_bill_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'openstates_bill_id',
            required: true,
            schema: { title: 'Openstates Bill Id', type: 'string' },
          },
          title: 'Openstates Bill Id',
        }),
    }),
    query: z.object({
      include: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(BillIncludeSchema),
        )
        .default([])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'include',
            required: false,
            schema: {
              default: [],
              items: { $ref: '#/components/schemas/BillInclude' },
              type: 'array',
            },
          },
        }),
      apikey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'apikey',
            required: false,
            schema: { title: 'Apikey', type: 'string' },
          },
          title: 'Apikey',
        }),
    }),
    headers: z.object({
      'x-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'x-api-key',
            required: false,
            schema: { title: 'X-Api-Key', type: 'string' },
          },
          title: 'X-Api-Key',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: BillSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getBillsJurisdictionSessionBillIdRoute = createRoute({
  method: 'get',
  path: '/bills/{jurisdiction}/{session}/{bill_id}',
  tags: ['bills'],
  summary: 'Bill Detail',
  description: 'Obtain bill information based on (state, session, bill_id).',
  operationId: 'bill_detail_bills__jurisdiction___session___bill_id__get',
  request: {
    params: z.object({
      jurisdiction: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'jurisdiction',
            required: true,
            schema: { title: 'Jurisdiction', type: 'string' },
          },
          title: 'Jurisdiction',
        }),
      session: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'session',
            required: true,
            schema: { title: 'Session', type: 'string' },
          },
          title: 'Session',
        }),
      bill_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'bill_id',
            required: true,
            schema: { title: 'Bill Id', type: 'string' },
          },
          title: 'Bill Id',
        }),
    }),
    query: z.object({
      include: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(BillIncludeSchema),
        )
        .default([])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'include',
            required: false,
            schema: {
              default: [],
              items: { $ref: '#/components/schemas/BillInclude' },
              type: 'array',
            },
          },
        }),
      apikey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'apikey',
            required: false,
            schema: { title: 'Apikey', type: 'string' },
          },
          title: 'Apikey',
        }),
    }),
    headers: z.object({
      'x-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'x-api-key',
            required: false,
            schema: { title: 'X-Api-Key', type: 'string' },
          },
          title: 'X-Api-Key',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: BillSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getCommitteesRoute = createRoute({
  method: 'get',
  path: '/committees',
  tags: ['committees'],
  summary: 'Committee List',
  operationId: 'committee_list_committees_get',
  request: {
    query: z.object({
      jurisdiction: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by jurisdiction name or ID.',
            in: 'query',
            name: 'jurisdiction',
            required: false,
            schema: {
              description: 'Filter by jurisdiction name or ID.',
              title: 'Jurisdiction',
              type: 'string',
            },
          },
          description: 'Filter by jurisdiction name or ID.',
          title: 'Jurisdiction',
        }),
      classification: CommitteeClassificationSchema.openapi({
        param: {
          in: 'query',
          name: 'classification',
          required: false,
          schema: { $ref: '#/components/schemas/CommitteeClassification' },
        },
      }).exactOptional(),
      parent: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'ocd-organization ID of parent committee.',
            in: 'query',
            name: 'parent',
            required: false,
            schema: {
              description: 'ocd-organization ID of parent committee.',
              title: 'Parent',
              type: 'string',
            },
          },
          description: 'ocd-organization ID of parent committee.',
          title: 'Parent',
        }),
      chamber: OrgClassificationSchema.openapi({
        param: {
          description: 'Chamber of committee, generally upper or lower.',
          in: 'query',
          name: 'chamber',
          required: false,
          schema: {
            allOf: [{ $ref: '#/components/schemas/OrgClassification' }],
            description: 'Chamber of committee, generally upper or lower.',
          },
        },
      }).exactOptional(),
      include: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(CommitteeIncludeSchema),
        )
        .default([])
        .exactOptional()
        .openapi({
          param: {
            description: 'Additional includes for the Committee response.',
            in: 'query',
            name: 'include',
            required: false,
            schema: {
              default: [],
              description: 'Additional includes for the Committee response.',
              items: { $ref: '#/components/schemas/CommitteeInclude' },
              type: 'array',
            },
          },
          description: 'Additional includes for the Committee response.',
        }),
      apikey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'apikey',
            required: false,
            schema: { title: 'Apikey', type: 'string' },
          },
          title: 'Apikey',
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, title: 'Page', type: 'integer' },
          },
          title: 'Page',
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'per_page',
            required: false,
            schema: { default: 20, title: 'Per Page', type: 'integer' },
          },
          title: 'Per Page',
        }),
    }),
    headers: z.object({
      'x-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'x-api-key',
            required: false,
            schema: { title: 'X-Api-Key', type: 'string' },
          },
          title: 'X-Api-Key',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: CommitteeListSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getCommitteesCommitteeIdRoute = createRoute({
  method: 'get',
  path: '/committees/{committee_id}',
  tags: ['committees'],
  summary: 'Committee Detail',
  description: 'Get details on a single committee by ID.',
  operationId: 'committee_detail_committees__committee_id__get',
  request: {
    params: z.object({
      committee_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'committee_id',
            required: true,
            schema: { title: 'Committee Id', type: 'string' },
          },
          title: 'Committee Id',
        }),
    }),
    query: z.object({
      include: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(CommitteeIncludeSchema),
        )
        .default([])
        .exactOptional()
        .openapi({
          param: {
            description: 'Additional includes for the Committee response.',
            in: 'query',
            name: 'include',
            required: false,
            schema: {
              default: [],
              description: 'Additional includes for the Committee response.',
              items: { $ref: '#/components/schemas/CommitteeInclude' },
              type: 'array',
            },
          },
          description: 'Additional includes for the Committee response.',
        }),
      apikey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'apikey',
            required: false,
            schema: { title: 'Apikey', type: 'string' },
          },
          title: 'Apikey',
        }),
    }),
    headers: z.object({
      'x-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'x-api-key',
            required: false,
            schema: { title: 'X-Api-Key', type: 'string' },
          },
          title: 'X-Api-Key',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: CommitteeSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getEventsRoute = createRoute({
  method: 'get',
  path: '/events',
  tags: ['events'],
  summary: 'Event List',
  operationId: 'event_list_events_get',
  request: {
    query: z.object({
      jurisdiction: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by jurisdiction name or ID.',
            in: 'query',
            name: 'jurisdiction',
            required: false,
            schema: {
              description: 'Filter by jurisdiction name or ID.',
              title: 'Jurisdiction',
              type: 'string',
            },
          },
          description: 'Filter by jurisdiction name or ID.',
          title: 'Jurisdiction',
        }),
      deleted: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Return events marked as deleted?',
            in: 'query',
            name: 'deleted',
            required: false,
            schema: {
              default: false,
              description: 'Return events marked as deleted?',
              title: 'Deleted',
              type: 'boolean',
            },
          },
          description: 'Return events marked as deleted?',
          title: 'Deleted',
        }),
      before: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit results to those starting before a given datetime.',
            in: 'query',
            name: 'before',
            required: false,
            schema: {
              description: 'Limit results to those starting before a given datetime.',
              title: 'Before',
              type: 'string',
            },
          },
          description: 'Limit results to those starting before a given datetime.',
          title: 'Before',
        }),
      after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit results to those starting before a given datetime.',
            in: 'query',
            name: 'after',
            required: false,
            schema: {
              description: 'Limit results to those starting before a given datetime.',
              title: 'After',
              type: 'string',
            },
          },
          description: 'Limit results to those starting before a given datetime.',
          title: 'After',
        }),
      require_bills: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit results to events with associated bills.',
            in: 'query',
            name: 'require_bills',
            required: false,
            schema: {
              default: false,
              description: 'Limit results to events with associated bills.',
              title: 'Require Bills',
              type: 'boolean',
            },
          },
          description: 'Limit results to events with associated bills.',
          title: 'Require Bills',
        }),
      include: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(EventIncludeSchema),
        )
        .default([])
        .exactOptional()
        .openapi({
          param: {
            description: 'Additional includes for the Event response.',
            in: 'query',
            name: 'include',
            required: false,
            schema: {
              default: [],
              description: 'Additional includes for the Event response.',
              items: { $ref: '#/components/schemas/EventInclude' },
              type: 'array',
            },
          },
          description: 'Additional includes for the Event response.',
        }),
      apikey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'apikey',
            required: false,
            schema: { title: 'Apikey', type: 'string' },
          },
          title: 'Apikey',
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, title: 'Page', type: 'integer' },
          },
          title: 'Page',
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'per_page',
            required: false,
            schema: { default: 20, title: 'Per Page', type: 'integer' },
          },
          title: 'Per Page',
        }),
    }),
    headers: z.object({
      'x-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'x-api-key',
            required: false,
            schema: { title: 'X-Api-Key', type: 'string' },
          },
          title: 'X-Api-Key',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: EventListSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getEventsEventIdRoute = createRoute({
  method: 'get',
  path: '/events/{event_id}',
  tags: ['events'],
  summary: 'Event Detail',
  description: 'Get details on a single event by ID.',
  operationId: 'event_detail_events__event_id__get',
  request: {
    params: z.object({
      event_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'event_id',
            required: true,
            schema: { title: 'Event Id', type: 'string' },
          },
          title: 'Event Id',
        }),
    }),
    query: z.object({
      include: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(EventIncludeSchema),
        )
        .default([])
        .exactOptional()
        .openapi({
          param: {
            description: 'Additional includes for the Event response.',
            in: 'query',
            name: 'include',
            required: false,
            schema: {
              default: [],
              description: 'Additional includes for the Event response.',
              items: { $ref: '#/components/schemas/EventInclude' },
              type: 'array',
            },
          },
          description: 'Additional includes for the Event response.',
        }),
      apikey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'apikey',
            required: false,
            schema: { title: 'Apikey', type: 'string' },
          },
          title: 'Apikey',
        }),
    }),
    headers: z.object({
      'x-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'x-api-key',
            required: false,
            schema: { title: 'X-Api-Key', type: 'string' },
          },
          title: 'X-Api-Key',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: EventSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getJurisdictionsRoute = createRoute({
  method: 'get',
  path: '/jurisdictions',
  tags: ['jurisdictions'],
  summary: 'Jurisdiction List',
  description: 'Get list of supported Jurisdictions, a Jurisdiction is a state or municipality.',
  operationId: 'jurisdiction_list_jurisdictions_get',
  request: {
    query: z.object({
      classification: JurisdictionClassificationSchema.openapi({
        param: {
          description: 'Filter returned jurisdictions by type.',
          in: 'query',
          name: 'classification',
          required: false,
          schema: {
            allOf: [{ $ref: '#/components/schemas/JurisdictionClassification' }],
            description: 'Filter returned jurisdictions by type.',
          },
        },
      }).exactOptional(),
      include: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(JurisdictionIncludeSchema),
        )
        .default([])
        .exactOptional()
        .openapi({
          param: {
            description: 'Additional information to include in response.',
            in: 'query',
            name: 'include',
            required: false,
            schema: {
              default: [],
              description: 'Additional information to include in response.',
              items: { $ref: '#/components/schemas/JurisdictionInclude' },
              type: 'array',
            },
          },
          description: 'Additional information to include in response.',
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, title: 'Page', type: 'integer' },
          },
          title: 'Page',
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(52)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'per_page',
            required: false,
            schema: { default: 52, title: 'Per Page', type: 'integer' },
          },
          title: 'Per Page',
        }),
      apikey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'apikey',
            required: false,
            schema: { title: 'Apikey', type: 'string' },
          },
          title: 'Apikey',
        }),
    }),
    headers: z.object({
      'x-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'x-api-key',
            required: false,
            schema: { title: 'X-Api-Key', type: 'string' },
          },
          title: 'X-Api-Key',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: JurisdictionListSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getJurisdictionsJurisdictionIdRoute = createRoute({
  method: 'get',
  path: '/jurisdictions/{jurisdiction_id}',
  tags: ['jurisdictions'],
  summary: 'Jurisdiction Detail',
  description: 'Get details on a single Jurisdiction (e.g. state or municipality).',
  operationId: 'jurisdiction_detail_jurisdictions__jurisdiction_id__get',
  request: {
    params: z.object({
      jurisdiction_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'jurisdiction_id',
            required: true,
            schema: { title: 'Jurisdiction Id', type: 'string' },
          },
          title: 'Jurisdiction Id',
        }),
    }),
    query: z.object({
      include: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(JurisdictionIncludeSchema),
        )
        .default([])
        .exactOptional()
        .openapi({
          param: {
            description: 'Additional includes for the Jurisdiction response.',
            in: 'query',
            name: 'include',
            required: false,
            schema: {
              default: [],
              description: 'Additional includes for the Jurisdiction response.',
              items: { $ref: '#/components/schemas/JurisdictionInclude' },
              type: 'array',
            },
          },
          description: 'Additional includes for the Jurisdiction response.',
        }),
      apikey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'apikey',
            required: false,
            schema: { title: 'Apikey', type: 'string' },
          },
          title: 'Apikey',
        }),
    }),
    headers: z.object({
      'x-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'x-api-key',
            required: false,
            schema: { title: 'X-Api-Key', type: 'string' },
          },
          title: 'X-Api-Key',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: JurisdictionSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getMetricsRoute = createRoute({
  method: 'get',
  path: '/metrics',
  summary: 'Metrics',
  description: 'Endpoint that serves Prometheus metrics.',
  operationId: 'metrics_metrics_get',
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
  },
})

export const getPeopleRoute = createRoute({
  method: 'get',
  path: '/people',
  tags: ['people'],
  summary: 'People Search',
  description:
    'Get list of people matching selected criteria.\n\nMust provide either **jurisdiction**, **name**, or one or more **id** parameters.',
  operationId: 'people_search_people_get',
  request: {
    query: z.object({
      jurisdiction: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by jurisdiction name or id.',
            in: 'query',
            name: 'jurisdiction',
            required: false,
            schema: {
              description: 'Filter by jurisdiction name or id.',
              title: 'Jurisdiction',
              type: 'string',
            },
          },
          description: 'Filter by jurisdiction name or id.',
          title: 'Jurisdiction',
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by name, case-insensitive match.',
            in: 'query',
            name: 'name',
            required: false,
            schema: {
              description: 'Filter by name, case-insensitive match.',
              title: 'Name',
              type: 'string',
            },
          },
          description: 'Filter by name, case-insensitive match.',
          title: 'Name',
        }),
      id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .default([])
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by id, can be specified multiple times for multiple people.',
            in: 'query',
            name: 'id',
            required: false,
            schema: {
              default: [],
              description: 'Filter by id, can be specified multiple times for multiple people.',
              items: { type: 'string' },
              title: 'Id',
              type: 'array',
            },
          },
          description: 'Filter by id, can be specified multiple times for multiple people.',
          title: 'Id',
        }),
      org_classification: OrgClassificationSchema.openapi({
        param: {
          description: 'Filter by current role.',
          in: 'query',
          name: 'org_classification',
          required: false,
          schema: {
            allOf: [{ $ref: '#/components/schemas/OrgClassification' }],
            description: 'Filter by current role.',
          },
        },
      }).exactOptional(),
      district: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by district name.',
            in: 'query',
            name: 'district',
            required: false,
            schema: { description: 'Filter by district name.', title: 'District', type: 'string' },
          },
          description: 'Filter by district name.',
          title: 'District',
        }),
      include: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(PersonIncludeSchema),
        )
        .default([])
        .exactOptional()
        .openapi({
          param: {
            description: 'Additional information to include in response.',
            in: 'query',
            name: 'include',
            required: false,
            schema: {
              default: [],
              description: 'Additional information to include in response.',
              items: { $ref: '#/components/schemas/PersonInclude' },
              type: 'array',
            },
          },
          description: 'Additional information to include in response.',
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, title: 'Page', type: 'integer' },
          },
          title: 'Page',
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'per_page',
            required: false,
            schema: { default: 10, title: 'Per Page', type: 'integer' },
          },
          title: 'Per Page',
        }),
      apikey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'apikey',
            required: false,
            schema: { title: 'Apikey', type: 'string' },
          },
          title: 'Apikey',
        }),
    }),
    headers: z.object({
      'x-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'x-api-key',
            required: false,
            schema: { title: 'X-Api-Key', type: 'string' },
          },
          title: 'X-Api-Key',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: PersonListSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getPeopleGeoRoute = createRoute({
  method: 'get',
  path: '/people.geo',
  tags: ['people'],
  summary: 'People Geo',
  description:
    'Get list of people currently representing a given location.\n\n**Note:** Currently limited to state legislators and US Congress.  Governors & mayors are not included.',
  operationId: 'people_geo_people_geo_get',
  request: {
    query: z.object({
      lat: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'Latitude of point.',
            in: 'query',
            name: 'lat',
            required: true,
            schema: { description: 'Latitude of point.', title: 'Lat', type: 'number' },
          },
          description: 'Latitude of point.',
          title: 'Lat',
        }),
      lng: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'Longitude of point.',
            in: 'query',
            name: 'lng',
            required: true,
            schema: { description: 'Longitude of point.', title: 'Lng', type: 'number' },
          },
          description: 'Longitude of point.',
          title: 'Lng',
        }),
      include: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(PersonIncludeSchema),
        )
        .default([])
        .exactOptional()
        .openapi({
          param: {
            description: 'Additional information to include in the response.',
            in: 'query',
            name: 'include',
            required: false,
            schema: {
              default: [],
              description: 'Additional information to include in the response.',
              items: { $ref: '#/components/schemas/PersonInclude' },
              type: 'array',
            },
          },
          description: 'Additional information to include in the response.',
        }),
      apikey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'apikey',
            required: false,
            schema: { title: 'Apikey', type: 'string' },
          },
          title: 'Apikey',
        }),
    }),
    headers: z.object({
      'x-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'x-api-key',
            required: false,
            schema: { title: 'X-Api-Key', type: 'string' },
          },
          title: 'X-Api-Key',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: PersonListSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})
