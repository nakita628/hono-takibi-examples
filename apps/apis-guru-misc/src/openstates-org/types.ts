type BillInclude =
  | 'sponsorships'
  | 'abstracts'
  | 'other_titles'
  | 'other_identifiers'
  | 'actions'
  | 'sources'
  | 'documents'
  | 'versions'
  | 'votes'
  | 'related_bills'
type PaginationMeta = { max_page: number; page: number; per_page: number; total_items: number }
type BillAbstract = { abstract: string; note: string }
type Organization = { classification: string; id: string; name: string }
type BillAction = {
  classification: string[]
  date: string
  description: string
  order: number
  organization: Organization
}
type BillDocumentLink = { media_type: string; url: string }
type BillDocumentOrVersion = { date: string; links: BillDocumentLink[]; note: string }
type CompactJurisdiction = { classification: {}; id: string; name: string }
type BillIdentifier = { identifier: string }
type BillTitle = { note: string; title: string }
type RelatedBill = { identifier: string; legislative_session: string; relation_type: string }
type Link = { note: string; url: string }
type CurrentRole = {
  district?: string | number | undefined
  division_id?: string | undefined
  org_classification: {}
  title: string
}
type CompactPerson = {
  current_role?: CurrentRole | undefined
  id: string
  name: string
  party: string
}
type BillSponsorship = {
  classification: string
  entity_type: string
  name: string
  organization?: { classification: string; id: string; name: string } | undefined
  person?: CompactPerson | undefined
  primary: boolean
}
type VoteCount = { option: string; value: number }
type PersonVote = { option: string; voter?: CompactPerson | undefined; voter_name: string }
type VoteEvent = {
  counts: VoteCount[]
  extras: { [x: string]: unknown }
  id: string
  identifier: string
  motion_classification?: string[] | undefined
  motion_text: string
  organization: Organization
  result: string
  sources: Link[]
  start_date: string
  votes: PersonVote[]
}
type Bill = {
  abstracts?: BillAbstract[] | undefined
  actions?: BillAction[] | undefined
  classification?: string[] | undefined
  created_at: string
  documents?: BillDocumentOrVersion[] | undefined
  extras?: { [x: string]: unknown } | undefined
  first_action_date?: string | undefined
  from_organization: Organization
  id: string
  identifier: string
  jurisdiction: CompactJurisdiction
  latest_action_date?: string | undefined
  latest_action_description?: string | undefined
  latest_passage_date?: string | undefined
  openstates_url: string
  other_identifiers?: BillIdentifier[] | undefined
  other_titles?: BillTitle[] | undefined
  related_bills?: RelatedBill[] | undefined
  session: string
  sources?: Link[] | undefined
  sponsorships?: BillSponsorship[] | undefined
  subject?: string[] | undefined
  title: string
  updated_at: string
  versions?: BillDocumentOrVersion[] | undefined
  votes?: VoteEvent[] | undefined
}
type BillList = { pagination: PaginationMeta; results: Bill[] }
type ValidationError = { loc: (string | number)[]; msg: string; type: string }
type HTTPValidationError = { detail?: ValidationError[] | undefined }
type CommitteeClassification = 'committee' | 'subcommittee'
type CommitteeInclude = 'memberships' | 'links' | 'sources'
type CommitteeMembership = { person?: CompactPerson | undefined; person_name: string; role: string }
type AltName = { name: string; note: string }
type Committee = {
  classification: CommitteeClassification
  extras: { [x: string]: unknown }
  id: string
  links?: Link[] | undefined
  memberships?: CommitteeMembership[] | undefined
  name: string
  other_names?: AltName[] | undefined
  parent_id: string
  sources?: Link[] | undefined
}
type CommitteeList = { pagination: PaginationMeta; results: Committee[] }
type EventInclude = 'links' | 'sources' | 'media' | 'documents' | 'participants' | 'agenda'
type EventMedia = {
  classification: string
  date: string
  links: Link[]
  note: string
  offset: number
}
type CompactBill = { id: string; identifier: string; session: string; title: string }
type CompactVoteEvent = { id: string; motion_text: string }
type EventRelatedEntity = {
  bill?: CompactBill | undefined
  entity_type: string
  name: string
  note: string
  organization?: { classification: string; id: string; name: string } | undefined
  person?: CompactPerson | undefined
  vote?: CompactVoteEvent | undefined
}
type EventAgendaItem = {
  classification: string[]
  description: string
  extras: { [x: string]: unknown }
  media: EventMedia[]
  notes: string[]
  order: number
  related_entities: EventRelatedEntity[]
  subjects: string[]
}
type EventDocument = { classification: string; date: string; links: Link[]; note: string }
type EventLocation = { name: string; url: string }
type EventParticipant = {
  entity_type: string
  name: string
  note: string
  organization?: { classification: string; id: string; name: string } | undefined
  person?: CompactPerson | undefined
}
type Event = {
  agenda?: EventAgendaItem[] | undefined
  all_day: boolean
  classification: string
  deleted: boolean
  description: string
  documents?: EventDocument[] | undefined
  end_date: string
  id: string
  jurisdiction: CompactJurisdiction
  links?: Link[] | undefined
  location?: EventLocation | undefined
  media?: EventMedia[] | undefined
  name: string
  participants?: EventParticipant[] | undefined
  sources?: Link[] | undefined
  start_date: string
  status: string
  upstream_id: string
}
type EventList = { pagination: PaginationMeta; results: Event[] }
type JurisdictionInclude = 'organizations' | 'legislative_sessions' | 'latest_runs'
type RunPlan = { end_time: string; start_time: string; success: boolean }
type DataExport = { created_at: string; data_type: string; updated_at: string; url: string }
type LegislativeSession = {
  classification: string
  downloads?: DataExport[] | undefined
  end_date: string
  identifier: string
  name: string
  start_date: string
}
type Post = { division_id: string; label: string; maximum_memberships: number; role: string }
type Chamber = { classification: string; districts?: Post[] | undefined; id: string; name: string }
type Jurisdiction = {
  classification: {}
  division_id?: string | undefined
  id: string
  latest_bill_update: string
  latest_people_update: string
  latest_runs?: RunPlan[] | undefined
  legislative_sessions?: LegislativeSession[] | undefined
  name: string
  organizations?: Chamber[] | undefined
  url: string
}
type JurisdictionList = { pagination: PaginationMeta; results: Jurisdiction[] }
type PersonInclude = 'other_names' | 'other_identifiers' | 'links' | 'sources' | 'offices'
type Office = {
  address?: string | undefined
  classification?: string | undefined
  fax?: string | undefined
  name: string
  voice?: string | undefined
}
type AltIdentifier = { identifier: string; scheme: string }
type Person = {
  birth_date: string
  created_at: string
  current_role?: CurrentRole | undefined
  death_date: string
  email: string
  extras: { [x: string]: unknown }
  family_name: string
  gender: string
  given_name: string
  id: string
  image: string
  jurisdiction: CompactJurisdiction
  links?: Link[] | undefined
  name: string
  offices?: Office[] | undefined
  openstates_url: string
  other_identifiers?: AltIdentifier[] | undefined
  other_names?: AltName[] | undefined
  party: string
  sources?: Link[] | undefined
  updated_at: string
}
type PersonList = { pagination: PaginationMeta; results: Person[] }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/bills': {
      $get:
        | {
            input: {
              query: {
                jurisdiction?: string | undefined
                session?: string | undefined
                chamber?: string | undefined
                identifier?: string[] | undefined
                classification?: string | undefined
                subject?: string[] | undefined
                updated_since?: string | undefined
                created_since?: string | undefined
                action_since?: string | undefined
                sort?: {} | undefined
                sponsor?: string | undefined
                sponsor_classification?: string | undefined
                q?: string | undefined
                include?: BillInclude[] | undefined
                page?: number | undefined
                per_page?: number | undefined
                apikey?: string | undefined
              }
            } & { header: { 'x-api-key'?: string | undefined } }
            output: BillList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                jurisdiction?: string | undefined
                session?: string | undefined
                chamber?: string | undefined
                identifier?: string[] | undefined
                classification?: string | undefined
                subject?: string[] | undefined
                updated_since?: string | undefined
                created_since?: string | undefined
                action_since?: string | undefined
                sort?: {} | undefined
                sponsor?: string | undefined
                sponsor_classification?: string | undefined
                q?: string | undefined
                include?: BillInclude[] | undefined
                page?: number | undefined
                per_page?: number | undefined
                apikey?: string | undefined
              }
            } & { header: { 'x-api-key'?: string | undefined } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/bills/ocd-bill/:openstates_bill_id': {
      $get:
        | {
            input: { param: { openstates_bill_id: string } } & {
              query: { include?: BillInclude[] | undefined; apikey?: string | undefined }
            } & { header: { 'x-api-key'?: string | undefined } }
            output: Bill
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { openstates_bill_id: string } } & {
              query: { include?: BillInclude[] | undefined; apikey?: string | undefined }
            } & { header: { 'x-api-key'?: string | undefined } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/bills/:jurisdiction/:session/:bill_id': {
      $get:
        | {
            input: { param: { jurisdiction: string; session: string; bill_id: string } } & {
              query: { include?: BillInclude[] | undefined; apikey?: string | undefined }
            } & { header: { 'x-api-key'?: string | undefined } }
            output: Bill
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { jurisdiction: string; session: string; bill_id: string } } & {
              query: { include?: BillInclude[] | undefined; apikey?: string | undefined }
            } & { header: { 'x-api-key'?: string | undefined } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/committees': {
      $get:
        | {
            input: {
              query: {
                jurisdiction?: string | undefined
                classification?: CommitteeClassification | undefined
                parent?: string | undefined
                chamber?: {} | undefined
                include?: CommitteeInclude[] | undefined
                apikey?: string | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            } & { header: { 'x-api-key'?: string | undefined } }
            output: CommitteeList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                jurisdiction?: string | undefined
                classification?: CommitteeClassification | undefined
                parent?: string | undefined
                chamber?: {} | undefined
                include?: CommitteeInclude[] | undefined
                apikey?: string | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            } & { header: { 'x-api-key'?: string | undefined } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/committees/:committee_id': {
      $get:
        | {
            input: { param: { committee_id: string } } & {
              query: { include?: CommitteeInclude[] | undefined; apikey?: string | undefined }
            } & { header: { 'x-api-key'?: string | undefined } }
            output: Committee
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { committee_id: string } } & {
              query: { include?: CommitteeInclude[] | undefined; apikey?: string | undefined }
            } & { header: { 'x-api-key'?: string | undefined } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/events': {
      $get:
        | {
            input: {
              query: {
                jurisdiction?: string | undefined
                deleted?: boolean | undefined
                before?: string | undefined
                after?: string | undefined
                require_bills?: boolean | undefined
                include?: EventInclude[] | undefined
                apikey?: string | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            } & { header: { 'x-api-key'?: string | undefined } }
            output: EventList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                jurisdiction?: string | undefined
                deleted?: boolean | undefined
                before?: string | undefined
                after?: string | undefined
                require_bills?: boolean | undefined
                include?: EventInclude[] | undefined
                apikey?: string | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            } & { header: { 'x-api-key'?: string | undefined } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/events/:event_id': {
      $get:
        | {
            input: { param: { event_id: string } } & {
              query: { include?: EventInclude[] | undefined; apikey?: string | undefined }
            } & { header: { 'x-api-key'?: string | undefined } }
            output: Event
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { event_id: string } } & {
              query: { include?: EventInclude[] | undefined; apikey?: string | undefined }
            } & { header: { 'x-api-key'?: string | undefined } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/jurisdictions': {
      $get:
        | {
            input: {
              query: {
                classification?: {} | undefined
                include?: JurisdictionInclude[] | undefined
                page?: number | undefined
                per_page?: number | undefined
                apikey?: string | undefined
              }
            } & { header: { 'x-api-key'?: string | undefined } }
            output: JurisdictionList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                classification?: {} | undefined
                include?: JurisdictionInclude[] | undefined
                page?: number | undefined
                per_page?: number | undefined
                apikey?: string | undefined
              }
            } & { header: { 'x-api-key'?: string | undefined } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/jurisdictions/:jurisdiction_id': {
      $get:
        | {
            input: { param: { jurisdiction_id: string } } & {
              query: { include?: JurisdictionInclude[] | undefined; apikey?: string | undefined }
            } & { header: { 'x-api-key'?: string | undefined } }
            output: Jurisdiction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { jurisdiction_id: string } } & {
              query: { include?: JurisdictionInclude[] | undefined; apikey?: string | undefined }
            } & { header: { 'x-api-key'?: string | undefined } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/metrics': {
      $get: { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/people': {
      $get:
        | {
            input: {
              query: {
                jurisdiction?: string | undefined
                name?: string | undefined
                id?: string[] | undefined
                org_classification?: {} | undefined
                district?: string | undefined
                include?: PersonInclude[] | undefined
                page?: number | undefined
                per_page?: number | undefined
                apikey?: string | undefined
              }
            } & { header: { 'x-api-key'?: string | undefined } }
            output: PersonList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                jurisdiction?: string | undefined
                name?: string | undefined
                id?: string[] | undefined
                org_classification?: {} | undefined
                district?: string | undefined
                include?: PersonInclude[] | undefined
                page?: number | undefined
                per_page?: number | undefined
                apikey?: string | undefined
              }
            } & { header: { 'x-api-key'?: string | undefined } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/people.geo': {
      $get:
        | {
            input: {
              query: {
                lat: number
                lng: number
                include?: PersonInclude[] | undefined
                apikey?: string | undefined
              }
            } & { header: { 'x-api-key'?: string | undefined } }
            output: PersonList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                lat: number
                lng: number
                include?: PersonInclude[] | undefined
                apikey?: string | undefined
              }
            } & { header: { 'x-api-key'?: string | undefined } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  },
  '/'
>
export default routes
