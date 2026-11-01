import { createRoute, z } from '@hono/zod-openapi'

const BillSchema = z
  .object({
    congress: z.int().exactOptional().openapi({ example: 119 }),
    latestAction: z
      .object({
        actionDate: z.iso.date().exactOptional().openapi({ example: '2025-11-21' }),
        text: z
          .string()
          .exactOptional()
          .openapi({
            example:
              'Read twice and referred to the Committee on Agriculture, Nutrition, and Forestry.',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    number: z.string().exactOptional().openapi({ example: 3281 }),
    originChamber: z.string().exactOptional().openapi({ example: 'Senate' }),
    originChamberCode: z.string().exactOptional().openapi({ example: 'S' }),
    title: z
      .string()
      .exactOptional()
      .openapi({ example: 'A bill to repeal certain provisions relating to nutrition.' }),
    type: z.string().exactOptional().openapi({ example: 'S' }),
    updateDate: z.iso.date().exactOptional().openapi({ example: '2025-11-21' }),
    updateDateIncludingText: z.iso.date().exactOptional().openapi({ example: '2025-11-21' }),
    url: z
      .url()
      .exactOptional()
      .openapi({ example: 'http://api.congress.gov/v3/bill/119/s/3281?format=xml' }),
  })
  .openapi({ xml: { wrapped: false }, required: [] })
  .openapi('Bill')

const LawsSchema = z
  .object({
    number: z.string().exactOptional().openapi({ example: '117-108' }),
    type: z.string().exactOptional().openapi({ example: 'Public Law' }),
  })
  .openapi({ required: [] })
  .openapi('Laws')

const LawSchema = z
  .object({
    congress: z.int().exactOptional().openapi({ example: 119 }),
    latestAction: z
      .object({
        actionDate: z.iso.date().exactOptional().openapi({ example: '2025-11-21' }),
        text: z.string().exactOptional().openapi({ example: 'Became Public Law No: 119-37.' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    laws: z.array(LawsSchema).exactOptional(),
    number: z.string().exactOptional().openapi({ example: '2808' }),
    originChamber: z.string().exactOptional().openapi({ example: 'House' }),
    originChamberCode: z.string().exactOptional().openapi({ example: 'H' }),
    title: z.string().exactOptional().openapi({ example: 'Homebuyers Privacy Protection Act' }),
    type: z.string().exactOptional().openapi({ example: 'HR' }),
    updateDate: z.iso.date().exactOptional().openapi({ example: '2025-11-21' }),
    updateDateIncludingText: z.iso.date().exactOptional().openapi({ example: '2025-11-21' }),
    url: z
      .url()
      .exactOptional()
      .openapi({ example: 'https://api.congress.gov/v3/bill/119/hr/2808?format=json' }),
  })
  .openapi({ required: [] })
  .openapi('Law')

const CboCostSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        example:
          'As ordered reported by the House Committee on Oversight and Accountability on September 20, 2023\n',
      }),
    pubDate: z.iso.date().exactOptional().openapi({ example: '2023-10-10T19:58:00Z' }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        example: 'H.R. 4984, D.C. Robert F. Kennedy Memorial Stadium Campus Revitalization Act',
      }),
    url: z.url().exactOptional().openapi({ example: 'https://www.cbo.gov/publication/59651' }),
  })
  .openapi({ required: [] })
  .openapi('CboCost')

const CommitteeReportSchema = z
  .object({
    citation: z.string().exactOptional().openapi({ example: 'H. Rept. 118-400' }),
    url: z
      .url()
      .exactOptional()
      .openapi({
        example: 'https://api.congress.gov/v3/committee-report/118/HRPT/400?format=json',
      }),
  })
  .openapi({ required: [] })
  .openapi('CommitteeReport')

const SponsorSchema = z
  .object({
    bioguideId: z.string().exactOptional().openapi({ example: 'G000555' }),
    firstName: z.string().exactOptional().openapi({ example: 'Bill' }),
    lastName: z.string().exactOptional().openapi({ example: 'Washington' }),
    fullName: z.string().exactOptional().openapi({ example: 'Senator Bill Washington [I-NY]' }),
    isByRequest: z.string().exactOptional().openapi({ example: 'N' }),
    middleName: z.string().exactOptional().openapi({ example: 'J.' }),
    party: z.string().exactOptional().openapi({ example: 'I' }),
    state: z.string().exactOptional().openapi({ example: 'VA' }),
    url: z
      .url()
      .exactOptional()
      .openapi({ example: 'https://api.congress.gov/v3/member/G000555?format=json' }),
  })
  .openapi({ required: [] })
  .openapi('Sponsor')

const LawNumberSchema = z
  .object({
    actions: z
      .object({
        count: z.int().exactOptional().openapi({ example: 1 }),
        url: z
          .string()
          .exactOptional()
          .openapi({ example: 'https://api.congress.gov/v3/law/118/hr/4984/actions?format=json' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    cboCostEstimates: z.array(CboCostSchema).exactOptional(),
    committeeReports: z.array(CommitteeReportSchema).exactOptional(),
    committees: z
      .object({
        count: z.int().exactOptional().openapi({ example: 1 }),
        url: z
          .string()
          .exactOptional()
          .openapi({
            example: 'https://api.congress.gov/v3/law/118/hr/4984/committees?format=json',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    congress: z.int().exactOptional().openapi({ example: 118 }),
    constitutionalAuthorityStatementText: z
      .string()
      .exactOptional()
      .openapi({
        example:
          '<pre>\n[Congressional Record Volume 169, Number 130 (Thursday, July 27, 2023)]\n[House]\n[Pages H4143-H4144]\nFrom the Congressional Record Online through the Government Publishing Office [<a href="https://www.gpo.gov">www.gpo.gov</a>]\nBy Mr. COMER:\nH.R. 4984.\nCongress has the power to enact this legislation pursuant\nto the following:\nArticle I, Section 8, Clause 17 of the U.S. Constitution,\nin that the legislation ``to exercise exclusive Legislation\nin all Cases\n[[Page H4144]]\nwhatsoever, over such District (not exceeding ten Miles\nsquare) as may, by Cession of particular States, and the\nAcceptance of Congress, become the Seat of the Government of\nthe United States, and to exercise like Authority over all\nPlaces purchased by the Consent of the Legislature of the\nState in which the Same shall be, for the Erection of Forts,\nMagazines, Arsenals, dock-Yards, and other needful\nBuildings.\'\'\nThe single subject of this legislation is:\nTo transfer administrative jurisdiction of the District of\nColumbia RFK Memorial Stadium campus from the Secretary of\nthe Interior to the Administrator of General Services and\nauthorize a new lease with D.C. for redevelopment.\n</pre>',
      }),
    cosponsors: z
      .object({
        count: z.int().exactOptional().openapi({ example: 21 }),
        url: z
          .string()
          .exactOptional()
          .openapi({
            example: 'https://api.congress.gov/v3/law/118/hr/4984/cosponsors?format=json',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    introducedDate: z.iso.date().exactOptional().openapi({ example: '2023-07-27' }),
    latestAction: z
      .object({
        actionDate: z.iso.date().exactOptional().openapi({ example: '2025-01-06' }),
        text: z.string().exactOptional().openapi({ example: 'Became Public Law No: 118-274.' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    laws: z.array(LawsSchema).exactOptional(),
    number: z.string().exactOptional().openapi({ example: '4984' }),
    originChamber: z.string().exactOptional().openapi({ example: 'House' }),
    originChamberCode: z.string().exactOptional().openapi({ example: 'H' }),
    policyArea: z
      .object({
        name: z.string().exactOptional().openapi({ example: 'Government Operations and Politics' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    sponsors: z.array(SponsorSchema).exactOptional(),
    subjects: z
      .object({
        count: z.int().exactOptional().openapi({ example: 11 }),
        url: z
          .string()
          .exactOptional()
          .openapi({
            example: 'https://api.congress.gov/v3/bill/118/hr/4984/subjects?format=json',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    summaries: z
      .object({
        count: z.int().exactOptional().openapi({ example: 5 }),
        url: z
          .url()
          .exactOptional()
          .openapi({
            example: 'https://api.congress.gov/v3/bill/118/hr/4984/summaries?format=json',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    textVersions: z
      .object({
        count: z.int().exactOptional().openapi({ example: 6 }),
        url: z
          .url()
          .exactOptional()
          .openapi({
            example: 'https://api.congress.gov/v3/bill/118/hr/4984/textversions?format=json',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    title: z
      .string()
      .exactOptional()
      .openapi({ example: 'D.C. Robert F. Kennedy Memorial Stadium Campus Revitalization Act' }),
    titles: z
      .object({
        count: z.int().exactOptional().openapi({ example: 9 }),
        url: z
          .string()
          .exactOptional()
          .openapi({ example: 'https://api.congress.gov/v3/bill/118/hr/4984/titles?format=json' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    type: z.string().exactOptional().openapi({ example: 'HR' }),
    updateDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2025-05-27T14:16:54Z' }),
    updateDateIncludingText: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2025-05-27T14:16:54Z' }),
  })
  .openapi({ required: [] })
  .openapi('LawNumber')

const BillDetailSchema = z
  .object({
    actions: z
      .object({
        count: z.int().exactOptional().openapi({ example: 1 }),
        url: z
          .string()
          .exactOptional()
          .openapi({ example: 'https://api.congress.gov/v3/bill/117/s/1234/actions?format=json' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    committees: z
      .object({
        count: z.int().exactOptional().openapi({ example: 1 }),
        url: z
          .string()
          .exactOptional()
          .openapi({
            example: 'https://api.congress.gov/v3/bill/117/s/1234/committees?format=json',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    congress: z.int().exactOptional().openapi({ example: 117 }),
    introducedDate: z.iso.date().exactOptional().openapi({ example: '2019-01-01' }),
    latestAction: z
      .object({
        actionDate: z.iso.date().exactOptional().openapi({ example: '2019-01-01' }),
        text: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    legislationUrl: z
      .url()
      .exactOptional()
      .openapi({ example: 'https://www.congress.gov/bill/117th-congress/senate-bill/1234' }),
    number: z.string().exactOptional().openapi({ example: 1234 }),
    originChamber: z.string().exactOptional().openapi({ example: 'Senate' }),
    originChamberCode: z.string().exactOptional().openapi({ example: 'S' }),
    policyArea: z
      .object({ name: z.string().exactOptional().openapi({ example: 'Health' }) })
      .exactOptional()
      .openapi({ required: [] }),
    relatedBills: z
      .url()
      .exactOptional()
      .openapi({ example: 'https://api.congress.gov/v3/bill/117/s/1234/relatedbills?format=json' }),
    sponsors: z.array(SponsorSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BillDetail')

const ActionsSchema = z
  .object({
    actionCode: z.string().exactOptional().openapi({ example: '36000' }),
    actionDate: z.iso.date().exactOptional().openapi({ example: '2019-01-01' }),
    sourceSystem: z
      .object({
        code: z.int().exactOptional().openapi({ example: 1 }),
        name: z.string().exactOptional().openapi({ example: 'Library of Congress' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    text: z.string().exactOptional().openapi({ example: 'Became Public Law No: 117-108.' }),
    type: z.string().exactOptional().openapi({ example: 'BecameLaw' }),
  })
  .openapi({ required: [] })
  .openapi('Actions')

const AmendmentsSchema = z
  .object({
    congress: z.int().exactOptional().openapi({ example: 117 }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        example:
          'Pursuant to the provisions of H. Res. 912, the amendment in the nature of a substitute consisting of the text of Rules Committee Print 117-32 is considered as adopted.',
      }),
    latestAction: z
      .object({
        actionDate: z.iso.date().exactOptional().openapi({ example: '2019-01-01' }),
        text: z
          .string()
          .exactOptional()
          .openapi({
            example:
              'On agreeing to the Maloney, Carolyn B. amendment (A002) Agreed to by voice vote. ',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    number: z.string().exactOptional().openapi({ example: '173' }),
    type: z.string().exactOptional().openapi({ example: 'HAMDT' }),
    updateDate: z.iso.date().exactOptional().openapi({ example: '2022-02-18T16:38:41Z' }),
    url: z
      .url()
      .exactOptional()
      .openapi({ example: 'https://api.congress.gov/v3/amendment/117/hamdt/173?format=json' }),
  })
  .openapi({ required: [] })
  .openapi('Amendments')

const ActivitySchema = z
  .object({
    date: z.iso.date().exactOptional().openapi({ example: '2019-01-01' }),
    name: z.string().exactOptional().openapi({ example: 'Reported By' }),
  })
  .openapi({ required: [] })
  .openapi('Activity')

const CommitteeSchema = z
  .object({
    activities: z.array(ActivitySchema).exactOptional(),
    chamber: z.string().exactOptional().openapi({ example: 'House' }),
    name: z.string().exactOptional().openapi({ example: 'House Committee on the Judiciary' }),
    systemCode: z.string().exactOptional().openapi({ example: 'hsgo00' }),
    type: z.string().exactOptional().openapi({ example: 'Standing' }),
    url: z
      .url()
      .exactOptional()
      .openapi({ example: 'https://api.congress.gov/v3/committee/house/hsgo00?format=json' }),
  })
  .openapi({ required: [] })
  .openapi('Committee')

const CoSponsorSchema = z
  .object({
    bioguidId: z.string().exactOptional().openapi({ example: 'F000450' }),
    district: z.int().exactOptional().openapi({ example: 5 }),
    firstName: z.string().exactOptional().openapi({ example: 'Virginia' }),
    fullName: z.string().exactOptional().openapi({ example: 'Rep. Foxx, Virginia [R-NC-5]' }),
    isOriginalCosponsor: z.boolean().exactOptional().openapi({ example: true }),
    lastName: z.string().exactOptional().openapi({ example: 'Foxx' }),
    party: z.string().exactOptional().openapi({ example: 'R' }),
    sponsorshipDate: z.iso.date().exactOptional().openapi({ example: '2021-05-11' }),
    state: z.string().exactOptional().openapi({ example: 'NC' }),
    url: z
      .url()
      .exactOptional()
      .openapi({ example: 'https://api.congress.gov/v3/member/F000450?format=json' }),
  })
  .openapi({ required: [] })
  .openapi('CoSponsor')

const RelationshipDetailsSchema = z
  .object({
    identifiedBy: z.string().exactOptional().openapi({ example: 'CRS' }),
    type: z.string().exactOptional().openapi({ example: 'Related Bill' }),
  })
  .openapi({ required: [] })
  .openapi('RelationshipDetails')

const RelatedBillsSchema = z
  .object({
    congress: z.int().exactOptional().openapi({ example: 117 }),
    lastestAction: z
      .object({
        actionDate: z.iso.date().exactOptional().openapi({ example: '2019-01-01' }),
        text: z
          .string()
          .exactOptional()
          .openapi({
            example:
              'On agreeing to the Maloney, Carolyn B. amendment (A002) Agreed to by voice vote. ',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    number: z.int().exactOptional().openapi({ example: 1720 }),
    relationshipDetails: z.array(RelationshipDetailsSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RelatedBills')

const LegislativeSubjectsSchema = z
  .object({
    name: z.string().exactOptional().openapi({ example: 'Congressional oversight' }),
    updateDate: z.iso.date().exactOptional().openapi({ example: '2022-02-18T16:38:41Z' }),
  })
  .openapi({ required: [] })
  .openapi('LegislativeSubjects')

const PolicyAreaSchema = z
  .object({
    name: z.string().exactOptional().openapi({ example: 'Government Operations and Politics' }),
  })
  .openapi({ required: [] })
  .openapi('PolicyArea')

const SubjectsSchema = z
  .object({
    legislativeSubjects: z.array(LegislativeSubjectsSchema).exactOptional(),
    policyArea: PolicyAreaSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Subjects')

const BillSummariesArraySchema = z
  .object({
    actionDate: z.iso.date().exactOptional().openapi({ example: '2022-02-18T16:38:41Z' }),
    actionDesc: z.string().exactOptional().openapi({ example: 'Passed Senate' }),
    text: z
      .string()
      .exactOptional()
      .openapi({
        example:
          '<p><strong>COVID-19 Medical Production Act</strong></p> <p>This bill provides additional funding for FY2021 to acquire medical supplies, vaccines, and other equipment to combat COVID-19 (i.e., coronavirus disease 2019) using authorities under the Defense Production Act of 1950. That act confers on the President a broad set of authorities to influence domestic industry to provide essential materials and goods for the national defense.</p> <p>This funding is available through FY2025. Beginning in FY2023, it may be used to meet public health needs to address any pathogen determined by the President to have the potential to create a public health emergency.</p>',
      }),
    updateDate: z.iso.date().exactOptional().openapi({ example: '2022-02-18T16:38:41Z' }),
    versionCode: z.string().exactOptional().openapi({ example: '173' }),
  })
  .openapi({ required: [] })
  .openapi('BillSummariesArray')

const BillSummariesSchema = z.array(BillSummariesArraySchema).openapi('BillSummaries')

const FormatsSchema = z
  .object({
    type: z.string().exactOptional().openapi({ example: 'Formatted Text' }),
    url: z
      .url()
      .exactOptional()
      .openapi({ example: 'https://www.congress.gov/117/bills/hr3076/BILLS-117hr3076enr.htm' }),
  })
  .openapi({ required: [] })
  .openapi('Formats')

const TextVersionsSchema = z
  .object({
    date: z.iso.date().exactOptional().openapi({ example: '2022-02-18T16:38:41Z' }),
    formats: z.array(FormatsSchema).exactOptional(),
    type: z.string().exactOptional().openapi({ example: 'Enrolled Bill' }),
  })
  .openapi({ required: [] })
  .openapi('TextVersions')

const TextSchema = z.array(TextVersionsSchema).openapi('Text')

const TitlesArraySchema = z
  .object({
    title: z
      .string()
      .exactOptional()
      .openapi({
        example:
          'A bill to amend the Health and Human Services Act of 1968 to provide for the establishment of a national health care system.',
      }),
    updateDate: z.iso.date().exactOptional().openapi({ example: '2022-02-18T16:38:41Z' }),
    titleType: z.string().exactOptional().openapi({ example: 'Display Title' }),
    titleTypeCode: z.int().exactOptional().openapi({ example: 45 }),
    billTextVersionCode: z.string().exactOptional().openapi({ example: 'RH' }),
    billTextVersionName: z.string().exactOptional().openapi({ example: 'Reported in House' }),
  })
  .openapi({ required: [] })
  .openapi('TitlesArray')

const TitlesSchema = z.array(TitlesArraySchema).openapi('Titles')

const AmendmentSchema = z
  .object({
    congress: z.int().exactOptional().openapi({ example: 117 }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        example: 'Amendment changes the effective date of the bill to the date of enactment.',
      }),
    latestAction: z
      .object({
        actionDate: z.iso.date().exactOptional().openapi({ example: '2021-08-08' }),
        actionTime: z
          .string()
          .regex(
            /^(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|[+-](?:[01]\d|2[0-3]):[0-5]\d)?$/,
          )
          .exactOptional()
          .openapi({ format: 'time', example: '12:00:00' }),
        text: z
          .string()
          .exactOptional()
          .openapi({
            example:
              'Amendment SA 2137 agreed to in Senate by Yea-Nay Vote. 69 - 28. Record Vote Number: 312.',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    number: z.string().exactOptional().openapi({ example: '2137' }),
    purpose: z.string().exactOptional().openapi({ example: 'In the nature of a substitute.' }),
    type: z.string().exactOptional(),
    updateDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2021-08-08T12:00:00Z' }),
    url: z
      .url()
      .exactOptional()
      .openapi({ example: 'https://api.congress.gov/v3/amendment/117/samdt/2137?format=json' }),
  })
  .openapi({ required: [] })
  .openapi('Amendment')

const AmendedBillSchema = z
  .object({
    congress: z.int().exactOptional().openapi({ example: 117 }),
    number: z.string().exactOptional().openapi({ example: '5' }),
    originChamber: z.string().exactOptional().openapi({ example: 'Senate' }),
    originChamberCode: z.string().exactOptional().openapi({ example: 'S' }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        example:
          'A concurrent resolution setting forth the congressional budget for the United States Government for fiscal year 2021 and setting forth the appropriate budgetary levels for fiscal years 2022 through 2030.',
      }),
    type: z.string().exactOptional().openapi({ example: 'SCONRES' }),
    updateDateIncludingText: z.iso.date().exactOptional().openapi({ example: '2025-04-07' }),
    url: z
      .url()
      .exactOptional()
      .openapi({ example: 'https://api.congress.gov/v3/bill/117/sconres/5?format=json' }),
  })
  .openapi({ required: [] })
  .openapi('AmendedBill')

const TextVersionSchema = z
  .object({
    count: z.int().exactOptional().openapi({ example: 1 }),
    url: z
      .url()
      .exactOptional()
      .openapi({ example: 'https://api.congress.gov/v3/amendment/117/samdt/4/text?format=json' }),
  })
  .openapi({ required: [] })
  .openapi('TextVersion')

const AmendmentNumberSchema = z
  .object({
    actions: z
      .object({
        count: z.int().exactOptional().openapi({ example: 1 }),
        url: z
          .url()
          .exactOptional()
          .openapi({
            example: 'https://api.congress.gov/v3/amendment/117/samdt/4/actions?format=json',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    amendedBill: AmendedBillSchema.exactOptional(),
    chamber: z.string().exactOptional(),
    congress: z.int().exactOptional().openapi({ example: 117 }),
    number: z.string().exactOptional().openapi({ example: '2137' }),
    sponsors: z.array(SponsorSchema).exactOptional(),
    submittedDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2021-02-02T05:00:00Z' }),
    textVersions: TextVersionSchema.exactOptional(),
    type: z.string().exactOptional(),
    updateDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2021-08-08T12:00:00Z' }),
  })
  .openapi({ required: [] })
  .openapi('AmendmentNumber')

const RecordedVoteSchema = z
  .object({
    chamber: z.string().exactOptional().openapi({ example: 'Senate' }),
    congress: z.int().exactOptional().openapi({ example: 117 }),
    date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2021-08-08T12:00:00Z' }),
    rollNumber: z.int().exactOptional().openapi({ example: 312 }),
    sessionNumber: z.int().exactOptional().openapi({ example: 1 }),
    url: z
      .url()
      .exactOptional()
      .openapi({
        example:
          'https://www.senate.gov/legislative/LIS/roll_call_votes/vote1171/vote_117_1_00312.xml',
      }),
  })
  .openapi({ required: [] })
  .openapi('RecordedVote')

const SourceSystemSchema = z
  .object({
    code: z.int().exactOptional().openapi({ example: 0 }),
    name: z.string().exactOptional().openapi({ example: 'Senate' }),
  })
  .openapi({ required: [] })
  .openapi('SourceSystem')

const AmendmentActionsSchema = z
  .object({
    actionDate: z.iso.date().exactOptional().openapi({ example: '2021-08-08' }),
    recordedVotes: z.array(RecordedVoteSchema).exactOptional(),
    sourceSystem: SourceSystemSchema.exactOptional(),
    text: z
      .string()
      .exactOptional()
      .openapi({
        example:
          'Amendment SA 2137 agreed to in Senate by Yea-Nay Vote. 69 - 28. Record Vote Number: 312.',
      }),
    type: z.string().exactOptional().openapi({ example: 'Floor' }),
  })
  .openapi({ required: [] })
  .openapi('AmendmentActions')

const AmendmentActions2Schema = z.array(AmendmentActionsSchema).openapi('AmendmentActions2')

const AmendmentCosponsorsSchema = z.array(CoSponsorSchema).openapi('AmendmentCosponsors')

const AmendmentAmendmentsSchema = z.array(AmendmentSchema).openapi('AmendmentAmendments')

const AmendmentTextSchema = z.array(TextVersionsSchema).openapi('AmendmentText')

const SummaryBillSchema = z
  .object({
    congress: z.int().exactOptional().openapi({ example: 117 }),
    number: z.string().exactOptional().openapi({ example: 1234 }),
    originChamber: z.string().exactOptional().openapi({ example: 'Senate' }),
    originChamberCode: z.string().exactOptional().openapi({ example: 'S' }),
    title: z.string().exactOptional().openapi({ example: 'Pay Our Capitol Police Act' }),
    type: z.string().exactOptional().openapi({ example: 'HR' }),
    updateDateIncludingText: z.iso.date().exactOptional().openapi({ example: '2021-08-08' }),
    url: z
      .url()
      .exactOptional()
      .openapi({ example: 'https://api.congress.gov/v3/bill/117/hr/1234?format=json' }),
  })
  .openapi({ required: [] })
  .openapi('SummaryBill')

const SummariesArraySchema = z
  .object({
    actionDate: z.iso.date().exactOptional().openapi({ example: '2022-02-18T16:38:41Z' }),
    actionDesc: z.string().exactOptional().openapi({ example: 'Passed Senate' }),
    bill: SummaryBillSchema.exactOptional(),
    currentChamber: z.string().exactOptional().openapi({ example: 'Senate' }),
    currentChamberCode: z.string().exactOptional().openapi({ example: 'S' }),
    lastSummaryUpdateDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2022-02-18T16:38:41Z' }),
    text: z
      .string()
      .exactOptional()
      .openapi({
        example:
          '<p><strong>COVID-19 Medical Production Act</strong></p> <p>This bill provides additional funding for FY2021 to acquire medical supplies, vaccines, and other equipment to combat COVID-19 (i.e., coronavirus disease 2019) using authorities under the Defense Production Act of 1950. That act confers on the President a broad set of authorities to influence domestic industry to provide essential materials and goods for the national defense.</p> <p>This funding is available through FY2025. Beginning in FY2023, it may be used to meet public health needs to address any pathogen determined by the President to have the potential to create a public health emergency.</p>',
      }),
    updateDate: z.iso.date().exactOptional().openapi({ example: '2022-02-18T16:38:41Z' }),
    versionCode: z.string().exactOptional().openapi({ example: '173' }),
  })
  .openapi({ required: [] })
  .openapi('SummariesArray')

const SummariesSchema = z.array(SummariesArraySchema).openapi('Summaries')

const SessionsSchema = z
  .object({
    chamber: z.string().exactOptional().openapi({ example: 'House of Representatives' }),
    number: z.int().exactOptional().openapi({ example: 1 }),
    startDate: z.iso.date().exactOptional().openapi({ example: '2019-01-01' }),
    endDate: z.iso.date().exactOptional().openapi({ example: '2020-01-01' }),
  })
  .openapi({ required: [] })
  .openapi('Sessions')

const CongressSchema = z
  .object({
    endYear: z.string().exactOptional().openapi({ example: '2022' }),
    name: z.string().exactOptional().openapi({ example: '117th Congress' }),
    sessions: z.array(SessionsSchema).exactOptional(),
    startYear: z.string().exactOptional().openapi({ example: '2021' }),
  })
  .openapi({ required: [] })
  .openapi('Congress')

const CongressesSchema = z.array(CongressSchema).openapi('Congresses')

const MemberTermsSchema = z
  .object({
    chamber: z.string().exactOptional().openapi({ example: 'House of Representatives' }),
    startYear: z.int().exactOptional().openapi({ example: 1991 }),
  })
  .openapi({ required: [] })
  .openapi('MemberTerms')

const MembersSchema = z
  .object({
    bioguideId: z.string().exactOptional().openapi({ example: 'N000147' }),
    depiction: z
      .object({
        attribution: z
          .string()
          .exactOptional()
          .openapi({ example: 'Congressional Pictorial Directory' }),
        imageUrl: z
          .url()
          .exactOptional()
          .openapi({
            example: 'https://www.congress.gov/img/member/116_dg_dc_norton_eleanor_200.jpg',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    name: z.string().exactOptional().openapi({ example: 'Norton, Eleanor Holmes' }),
    partyName: z.string().exactOptional().openapi({ example: 'Democratic' }),
    state: z.string().exactOptional().openapi({ example: 'District of Columbia' }),
    terms: z
      .object({ item: z.array(MemberTermsSchema).exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    updateDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2025-11-12T08:45:43Z' }),
    url: z
      .url()
      .exactOptional()
      .openapi({ example: 'https://api.congress.gov/v3/member/N000147?format=json' }),
  })
  .openapi({ required: [] })
  .openapi('Members')

const LeadershipSchema = z
  .object({
    congress: z.int().exactOptional().openapi({ example: 113 }),
    type: z.string().exactOptional().openapi({ example: 'President Pro Tempore' }),
  })
  .openapi({ required: [] })
  .openapi('Leadership')

const PartyHistorySchema = z
  .object({
    partyAbbreviation: z.string().exactOptional().openapi({ example: 'D' }),
    partyName: z.string().exactOptional().openapi({ example: 'Democrat' }),
    startYear: z.int().exactOptional().openapi({ example: 1975 }),
  })
  .openapi({ required: [] })
  .openapi('PartyHistory')

const MemberDetailTermsSchema = z
  .object({
    chamber: z.string().exactOptional().openapi({ example: 'Senate' }),
    congress: z.int().exactOptional().openapi({ example: 116 }),
    endYear: z.int().exactOptional().openapi({ example: 2021 }),
    memberType: z.string().exactOptional().openapi({ example: 'Senator' }),
    startYear: z.int().exactOptional().openapi({ example: 2019 }),
    stateCode: z.string().exactOptional().openapi({ example: 'VT' }),
    stateName: z.string().exactOptional().openapi({ example: 'Vermont' }),
  })
  .openapi({ required: [] })
  .openapi('MemberDetailTerms')

const MemberSchema = z
  .object({
    bioguideId: z.string().exactOptional().openapi({ example: 'L000174' }),
    birthYear: z.string().exactOptional().openapi({ example: '1940' }),
    cosponsoredLegislation: z
      .object({
        count: z.int().exactOptional().openapi({ example: 1 }),
        url: z
          .string()
          .exactOptional()
          .openapi({
            example: 'https://api.congress.gov/v3/member/L000174/cosponsored-legislation"',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    depiction: z
      .object({
        attribution: z
          .string()
          .exactOptional()
          .openapi({
            example:
              '<a href="\\&quot;https://www.senate.gov/artandhistory/history/common/generic/Photo_Collection_of_the_Senate_Historical_Office.htm\\&quot;">Courtesy U.S. Senate Historical Office</a>',
          }),
        imageUrl: z
          .url()
          .exactOptional()
          .openapi({ example: 'https://www.congress.gov/img/member/l000174_200.jpg' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    directOrderName: z.string().exactOptional().openapi({ example: 'Patrick J. Leahy' }),
    firstName: z.string().exactOptional().openapi({ example: 'Patrick' }),
    honorificName: z.string().exactOptional().openapi({ example: 'Mr.' }),
    invertedOrderName: z.string().exactOptional().openapi({ example: 'Leahy, Patrick J.' }),
    lastname: z.string().exactOptional().openapi({ example: 'Leahy' }),
    leadership: z.array(LeadershipSchema).exactOptional(),
    partyHistory: z.array(PartyHistorySchema).exactOptional(),
    sponsoredLegislation: z
      .object({
        count: z.int().exactOptional().openapi({ example: 1768 }),
        url: z
          .url()
          .exactOptional()
          .openapi({ example: 'https://api.congress.gov/v3/member/L000174/sponsored-legislation' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    state: z.string().exactOptional().openapi({ example: 'Vermont' }),
    terms: z.array(MemberDetailTermsSchema).exactOptional(),
    updateDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2022-11-07T13:42:19Z' }),
  })
  .openapi({ required: [] })
  .openapi('Member')

const LatestActionSchema = z
  .object({
    actionDate: z.iso.date().exactOptional().openapi({ example: '2022-06-16' }),
    text: z
      .string()
      .exactOptional()
      .openapi({ example: 'Read twice and referred to the Committee on the Judiciary.' }),
  })
  .openapi({ required: [] })
  .openapi('LatestAction')

const SponsoredLegislationSchema = z
  .object({
    congress: z.int().exactOptional().openapi({ example: 117 }),
    introducedDate: z.iso.date().exactOptional().openapi({ example: '2022-06-16' }),
    latestAction: LatestActionSchema.exactOptional(),
    number: z.string().exactOptional().openapi({ example: '4417' }),
    policyArea: PolicyAreaSchema.exactOptional(),
    title: z
      .string()
      .exactOptional()
      .openapi({ example: 'Patent Trial and Appeal Board Reform Act of 2022' }),
    type: z.string().exactOptional().openapi({ example: 'S' }),
    url: z
      .url()
      .exactOptional()
      .openapi({ example: 'https://api.congress.gov/v3/bill/117/s/4417?format=json' }),
  })
  .openapi({ required: [] })
  .openapi('SponsoredLegislation')

const MemberSponsoredLegislationSchema = z
  .array(SponsoredLegislationSchema)
  .openapi('MemberSponsoredLegislation')

const HouseVoteSchema = z
  .object({
    congress: z.int().exactOptional().openapi({ example: 119 }),
    identifier: z.int().exactOptional().openapi({ example: 1191202517 }),
    legislationNumber: z.string().exactOptional().openapi({ example: '30' }),
    legislationType: z.string().exactOptional().openapi({ example: 'HR' }),
    legislationUrl: z
      .url()
      .exactOptional()
      .openapi({ example: 'https://congress.gov/bill/119/house-bill/30' }),
    result: z.string().exactOptional().openapi({ example: 'Passed' }),
    rollCallNumber: z.int().exactOptional().openapi({ example: 17 }),
    sessionNumber: z.int().exactOptional().openapi({ example: 1 }),
    sourceDataURL: z
      .string()
      .exactOptional()
      .openapi({ example: 'https://clerk.house.gov/evs/2025/roll017.xml' }),
    startDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2025-01-16T11:00:00-05:00' }),
    updateDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2025-04-18T08:44:47-04:00' }),
    url: z
      .url()
      .exactOptional()
      .openapi({ example: 'https://api.congress.gov/v3/house-vote/119/1/17' }),
    voteType: z.string().exactOptional().openapi({ example: 'Yea-and-Nay' }),
  })
  .openapi({ required: [] })
  .openapi('HouseVote')

const HouseVoteNumberBaseSchema = z
  .object({
    congress: z.int().exactOptional().openapi({ example: 119 }),
    identifier: z.int().exactOptional().openapi({ example: 1191202517 }),
    legislationNumber: z.string().exactOptional().openapi({ example: '30' }),
    legislationType: z.string().exactOptional().openapi({ example: 'HR' }),
    legislationUrl: z
      .url()
      .exactOptional()
      .openapi({ example: 'https://congress.gov/bill/119/house-bill/30' }),
    result: z.string().exactOptional().openapi({ example: 'Passed' }),
    rollCallNumber: z.int().exactOptional().openapi({ example: 17 }),
    sessionNumber: z.int().exactOptional().openapi({ example: 1 }),
    sourceDataURL: z
      .string()
      .exactOptional()
      .openapi({ example: 'https://clerk.house.gov/evs/2025/roll017.xml' }),
    startDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2025-01-16T11:00:00-05:00' }),
    updateDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2025-04-18T08:44:47-04:00' }),
    voteType: z.string().exactOptional().openapi({ example: 'Yea-and-Nay' }),
  })
  .openapi({ required: [] })
  .openapi('HouseVoteNumberBase')

const PartySchema = z
  .object({
    name: z.string().exactOptional().openapi({ example: 'Republican' }),
    type: z.string().exactOptional().openapi({ example: 'R' }),
  })
  .openapi({ required: [] })
  .openapi('Party')

const VotePartySchema = z
  .object({
    nayTotal: z.int().exactOptional().openapi({ example: 0 }),
    notVotingTotal: z.int().exactOptional().openapi({ example: 6 }),
    presentTotal: z.int().exactOptional().openapi({ example: 0 }),
    voteParty: z.string().exactOptional().openapi({ example: 'R' }),
    yeaTotal: z.int().exactOptional().openapi({ example: 213 }),
    party: PartySchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('VoteParty')

const HouseVoteResultsSchema = z
  .object({
    bioguideID: z.string().exactOptional().openapi({ example: 'A000055' }),
    firstName: z.string().exactOptional().openapi({ example: 'Robert' }),
    lastName: z.string().exactOptional().openapi({ example: 'Aderholt' }),
    voteCast: z.string().exactOptional().openapi({ example: 'Yea' }),
    voteParty: z.string().exactOptional().openapi({ example: 'R' }),
    voteState: z.string().exactOptional().openapi({ example: 'AL' }),
  })
  .openapi({ required: [] })
  .openapi('HouseVoteResults')

const HouseVoteNumberSchema = HouseVoteNumberBaseSchema.and(
  z
    .object({
      votePartyTotal: z.array(VotePartySchema).exactOptional(),
      voteQuestion: z.string().exactOptional().openapi({ example: 'On Passage' }),
    })
    .openapi({ required: [] }),
).openapi('HouseVoteNumber')

const HouseVoteMembersSchema = HouseVoteNumberBaseSchema.and(
  z
    .object({
      results: z.array(HouseVoteResultsSchema).exactOptional(),
      voteQuestion: z.string().exactOptional().openapi({ example: 'On Passage' }),
    })
    .openapi({ required: [] }),
).openapi('HouseVoteMembers')

const SubcommitteesSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ example: 'Investigations and Oversight Subcommittee' }),
    systemCode: z.string().exactOptional().openapi({ example: 'hspw01' }),
    url: z
      .url()
      .exactOptional()
      .openapi({ example: 'https://api.congress.gov/v3/committee/house/hspw01?format=json' }),
  })
  .openapi({ required: [] })
  .openapi('Subcommittees')

const ParentcommitteeSchema = z
  .object({
    name: z.string().exactOptional().openapi({ example: 'Judiciary Committee' }),
    systemCode: z.string().exactOptional().openapi({ example: 'hsju00' }),
    url: z
      .url()
      .exactOptional()
      .openapi({ example: 'https://api.congress.gov/v3/committee/house/hsju00?format=json' }),
  })
  .openapi({ required: [] })
  .openapi('Parentcommittee')

const CommitteesSchema = z
  .object({
    chamber: z.string().exactOptional().openapi({ example: 'House' }),
    committeeTypeCode: z.string().exactOptional().openapi({ example: 'Standing' }),
    updateDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2020-02-04T00:07:37Z' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ example: 'Transportation and Infrastructure Committee' }),
    parent: ParentcommitteeSchema.exactOptional(),
    subcommittees: z.array(SubcommitteesSchema).exactOptional(),
    systemCode: z.string().exactOptional().openapi({ example: 'hspw00' }),
    url: z
      .url()
      .exactOptional()
      .openapi({ example: 'https://api.congress.gov/v3/committee/house/hspw00?format=json' }),
  })
  .openapi({ required: [] })
  .openapi('Committees')

const CommitteeHistorySchema = z
  .object({
    libraryOfCongressName: z
      .string()
      .exactOptional()
      .openapi({ example: 'Transportation and Infrastructure' }),
    officialName: z
      .string()
      .exactOptional()
      .openapi({ example: 'Committee on Transportation and Infrastructure' }),
    startDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '1995-01-04T05:00:00Z' }),
    updateDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2020-02-04T00:07:37Z' }),
    endDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2020-03-04T05:00:00Z' }),
  })
  .openapi({ required: [] })
  .openapi('CommitteeHistory')

const CommitteeDetailSchema = z
  .object({
    bills: z
      .object({
        count: z.int().exactOptional().openapi({ example: 25384 }),
        url: z
          .url()
          .exactOptional()
          .openapi({
            example: 'https://api.congress.gov/v3/committee/house/hspw00/bills?format=json',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    communications: z
      .object({
        count: z.int().exactOptional().openapi({ example: 25384 }),
        url: z
          .url()
          .exactOptional()
          .openapi({
            example:
              'https://api.congress.gov/v3/committee/house/hspw00/house-communication?format=json',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    history: z.array(CommitteeHistorySchema).exactOptional(),
    isCurrent: z.boolean().exactOptional().openapi({ example: true }),
    reports: z
      .object({
        count: z.int().exactOptional().openapi({ example: 25384 }),
        url: z
          .url()
          .exactOptional()
          .openapi({
            example: 'https://api.congress.gov/v3/committee/house/hspw00/reports?format=json',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    subcommittees: z.array(SubcommitteesSchema).exactOptional(),
    systemCode: z.string().exactOptional().openapi({ example: 'hspw00' }),
    type: z.string().exactOptional().openapi({ example: 'Standing' }),
    updateDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2020-02-04T00:07:37Z' }),
  })
  .openapi({ required: [] })
  .openapi('CommitteeDetail')

const CommitteeBillSchema = z
  .object({
    actionDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2022-02-18T16:38:41Z' }),
    congress: z.int().exactOptional().openapi({ example: 117 }),
    number: z.string().exactOptional().openapi({ example: '117' }),
    relationshipType: z.string().exactOptional().openapi({ example: 'Referred to' }),
    type: z.string().exactOptional().openapi({ example: 'HCONRES' }),
    updateDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2022-02-18T16:38:41Z' }),
    url: z
      .url()
      .exactOptional()
      .openapi({ example: 'https://api.congress.gov/v3/bill/112/hconres/117?format=json' }),
  })
  .openapi({ required: [] })
  .openapi('CommitteeBill')

const CommitteeReportsSchema = z
  .object({
    chamber: z.string().exactOptional().openapi({ example: 'House' }),
    citation: z.string().exactOptional().openapi({ example: 'H. Rept. 109-570' }),
    congress: z.int().exactOptional().openapi({ example: 117 }),
    number: z.int().exactOptional().openapi({ example: 570 }),
    part: z.int().exactOptional().openapi({ example: 1 }),
    type: z.string().exactOptional().openapi({ example: 'HRPT' }),
    updateDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2022-02-18T16:38:41Z' }),
    url: z
      .url()
      .exactOptional()
      .openapi({ example: 'https://api.congress.gov/v3/bill/117hr570?format=json' }),
  })
  .openapi({ required: [] })
  .openapi('CommitteeReports')

const CommitteeBillsSchema = z
  .object({
    bills: z.array(CommitteeBillSchema).exactOptional(),
    count: z.int().exactOptional().openapi({ example: 27251 }),
    url: z
      .url()
      .exactOptional()
      .openapi({ example: 'https://api.congress.gov/v3/committee/house/hspw00/bills?format=json' }),
  })
  .openapi({ required: [] })
  .openapi('CommitteeBills')

const CommitteeReports2Schema = z.array(CommitteeReportsSchema).openapi('CommitteeReports2')

const AssociatedBillSchema = z
  .object({
    congress: z.int().exactOptional().openapi({ example: 116 }),
    number: z.string().exactOptional().openapi({ example: '6395' }),
    type: z.string().exactOptional().openapi({ example: 'HR' }),
    url: z
      .url()
      .exactOptional()
      .openapi({ example: 'https://api.congress.gov/v3/bill/116/hr/6395?format=json' }),
  })
  .openapi({ required: [] })
  .openapi('AssociatedBill')

const AssociatedNominationSchema = z
  .object({
    congress: z.int().exactOptional().openapi({ example: 116 }),
    number: z.int().exactOptional().openapi({ example: 614 }),
    part: z.string().exactOptional().openapi({ example: '00' }),
    url: z
      .url()
      .exactOptional()
      .openapi({ example: 'https://api.congress.gov/v3/nomination/116/614?format=json' }),
  })
  .openapi({ required: [] })
  .openapi('AssociatedNomination')

const AssociatedTreatySchema = z
  .object({
    congress: z.int().exactOptional().openapi({ example: 112 }),
    number: z.int().exactOptional().openapi({ example: 8 }),
    url: z
      .url()
      .exactOptional()
      .openapi({ example: 'https://api.congress.gov/v3/treaty/112/8?format=json' }),
  })
  .openapi({ required: [] })
  .openapi('AssociatedTreaty')

const AssociatedHearingTranscriptSchema = z
  .object({
    jacketNumber: z.int().exactOptional().openapi({ example: 52640 }),
    url: z
      .url()
      .exactOptional()
      .openapi({ example: 'https://api.congress.gov/v3/hearing/118/house/52640?format=json' }),
  })
  .openapi({ required: [] })
  .openapi('AssociatedHearingTranscript')

const CommitteeReportsNumberSchema = z
  .array(
    CommitteeReportsSchema.and(
      z
        .object({
          associatedBill: z.array(AssociatedBillSchema).exactOptional(),
          isConferenceReport: z.boolean().exactOptional().openapi({ example: true }),
          issueDate: z.iso
            .datetime({ offset: true })
            .exactOptional()
            .openapi({ example: '2020-12-03T05:00:00Z' }),
          reportType: z.string().exactOptional().openapi({ example: 'H.Rept.' }),
          sessionNumber: z.int().exactOptional().openapi({ example: 2 }),
          text: z
            .object({
              count: z.int().exactOptional().openapi({ example: 2 }),
              url: z
                .url()
                .exactOptional()
                .openapi({
                  example:
                    'https://api.congress.gov/v3/committee-report/116/hrpt/617/text?format=json',
                }),
            })
            .exactOptional()
            .openapi({ required: [] }),
          title: z
            .string()
            .exactOptional()
            .openapi({
              example:
                'WILLIAM M. (MAC) THORNBERRY NATIONAL DEFENSE AUTHORIZATION ACT FOR FISCAL YEAR 2021',
            }),
        })
        .openapi({ required: [] }),
    ),
  )
  .openapi('CommitteeReportsNumber')

const CommitteereportsformatsSchema = z
  .object({
    isErrata: z.string().exactOptional().openapi({ example: 'N' }),
    type: z.string().exactOptional().openapi({ example: 'Formatted Text' }),
    url: z
      .url()
      .exactOptional()
      .openapi({
        example: 'https://www.congress.gov/116/crpt/hrpt617/generated/CRPT-116hrpt617.htm',
      }),
  })
  .openapi({ required: [] })
  .openapi('Committeereportsformats')

const CommitteeReportsTextSchema = z
  .array(CommitteereportsformatsSchema)
  .openapi('CommitteeReportsText')

const NominationTypeSchema = z
  .object({
    isCivilian: z.boolean().exactOptional().openapi({ example: false }),
    isMilitary: z.boolean().exactOptional().openapi({ example: true }),
  })
  .openapi({ required: [] })
  .openapi('NominationType')

const CommitteeNominationsSchema = z
  .object({
    citation: z.string().exactOptional().openapi({ example: 'PN2477' }),
    congress: z.int().exactOptional().openapi({ example: 117 }),
    description: z
      .string()
      .exactOptional()
      .openapi({ example: 'Nomination of xyz for the 117th Congress' }),
    latestAction: LatestActionSchema.exactOptional(),
    nominationType: NominationTypeSchema.exactOptional(),
    number: z.int().exactOptional().openapi({ example: 2477 }),
    partNumber: z.string().exactOptional().openapi({ example: '00' }),
    receivedDate: z.iso.date().exactOptional().openapi({ example: '2022-08-03' }),
    updateDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2022-09-30T04:40:14Z' }),
    url: z
      .url()
      .exactOptional()
      .openapi({ example: 'https://api.congress.gov/v3/nomination/117/2477?format=json' }),
  })
  .openapi({ required: [] })
  .openapi('CommitteeNominations')

const CommitteeNominations2Schema = z
  .array(CommitteeNominationsSchema)
  .openapi('CommitteeNominations2')

const CommitteeCommunicationSchema = z
  .object({
    communicationType: z
      .object({
        code: z.string().exactOptional().openapi({ example: 'EC' }),
        name: z.string().exactOptional().openapi({ example: 'Executive Communication' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    congress: z.int().exactOptional().openapi({ example: 114 }),
    number: z.int().exactOptional().openapi({ example: 3262 }),
    referralDate: z.iso.date().exactOptional().openapi({ example: '2015-10-27' }),
    updateDate: z.iso.date().exactOptional().openapi({ example: '2018-02-02' }),
  })
  .openapi({ required: [] })
  .openapi('CommitteeCommunication')

const CommitteeHouseCommunicationSchema = CommitteeCommunicationSchema.and(
  z
    .object({
      chamber: z.string().exactOptional().openapi({ example: 'House' }),
      url: z
        .url()
        .exactOptional()
        .openapi({
          example: 'https://api.congress.gov/v3/house-communication/114/ec/3262?format=json',
        }),
    })
    .openapi({ required: [] }),
).openapi('CommitteeHouseCommunication')

const CommitteeSenateCommunicationSchema = CommitteeCommunicationSchema.and(
  z
    .object({
      chamber: z.string().exactOptional().openapi({ example: 'Senate' }),
      url: z
        .url()
        .exactOptional()
        .openapi({
          example: 'https://api.congress.gov/v3/senate-communication/114/ec/7402?format=json',
        }),
    })
    .openapi({ required: [] }),
).openapi('CommitteeSenateCommunication')

const CommitteePrintsSchema = z
  .object({
    chamber: z.string().exactOptional().openapi({ example: 'House' }),
    congress: z.int().exactOptional().openapi({ example: 117 }),
    jacketNumber: z.int().exactOptional().openapi({ example: 48144 }),
    updateDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2022-08-01T21:19:33Z' }),
    url: z
      .url()
      .exactOptional()
      .openapi({
        example: 'https://api.congress.gov/v3/committee-print/117/house/48144?format=json',
      }),
  })
  .openapi({ required: [] })
  .openapi('CommitteePrints')

const CommitteePrintCommitteesSchema = z
  .object({
    name: z.string().exactOptional().openapi({ example: 'Rules Committee' }),
    systemCode: z.string().exactOptional().openapi({ example: 'hsru00' }),
    url: z
      .url()
      .exactOptional()
      .openapi({ example: 'https://api.congress.gov/v3/committee/house/hsru00?format=json' }),
  })
  .openapi({ required: [] })
  .openapi('CommitteePrintCommittees')

const CommitteePrintSchema = z.array(CommitteePrintsSchema).openapi('CommitteePrint')

const CommitteePrintDetailSchema = z
  .object({
    associatedBills: z.array(AssociatedBillSchema).exactOptional(),
    chamber: z.string().exactOptional().openapi({ example: 'House' }),
    citation: z.string().exactOptional().openapi({ example: '117-62' }),
    committees: z.array(CommitteePrintCommitteesSchema).exactOptional(),
    congress: z.int().exactOptional().openapi({ example: 117 }),
    jacketNumber: z.int().exactOptional().openapi({ example: 48144 }),
    text: z
      .object({
        count: z.int().exactOptional().openapi({ example: 4 }),
        url: z
          .url()
          .exactOptional()
          .openapi({
            example: 'https://api.congress.gov/v3/committee-print/117/house/48144/text?format=json',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    number: z.string().exactOptional().openapi({ example: '62' }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        example:
          'RULES COMMITTEE PRINT 117-62 TEXT OF H.R. 5768, VIOLENT INCIDENT CLEAR- ANCE AND TECHNOLOGICAL INVESTIGATIVE METHODS ACT OF 2022',
      }),
    updateDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2022-08-01T21:19:33Z' }),
  })
  .openapi({ required: [] })
  .openapi('CommitteePrintDetail')

const CommitteePrintTextSchema = z
  .object({
    type: z.string().exactOptional().openapi({ example: 'Formatted Text' }),
    url: z
      .url()
      .exactOptional()
      .openapi({ example: 'https://www.congress.gov/117/cprt/HPRT48144/CPRT-117HPRT48144.htm' }),
  })
  .openapi({ required: [] })
  .openapi('CommitteePrintText')

const CommitteePrintDetailTextSchema = z
  .array(CommitteePrintTextSchema)
  .openapi('CommitteePrintDetailText')

const CommitteeMeetingsSchema = z
  .object({
    chamber: z.string().exactOptional().openapi({ example: 'House' }),
    congress: z.int().exactOptional().openapi({ example: 117 }),
    eventid: z.string().exactOptional().openapi({ example: '115522' }),
    updateDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2022-08-01T21:19:33Z' }),
    url: z
      .url()
      .exactOptional()
      .openapi({
        example: 'https://api.congress.gov/v3/committee-meeting/118/house/115522?format=json',
      }),
  })
  .openapi({ required: [] })
  .openapi('CommitteeMeetings')

const CommitteeMeetingSchema = z.array(CommitteeMeetingsSchema).openapi('CommitteeMeeting')

const MeetingdocumentSchema = z
  .object({
    description: z.string().exactOptional().openapi({ example: '' }),
    documentType: z.string().exactOptional().openapi({ example: 'Support Document ' }),
    format: z.string().exactOptional().openapi({ example: 'PDF' }),
    name: z.string().exactOptional().openapi({ example: 'Hearing Notice' }),
    url: z
      .url()
      .exactOptional()
      .openapi({
        example:
          'https://www.congress.gov/118/meeting/house/115538/documents/HHRG-118-II24-20230324-SD001.pdf',
      }),
  })
  .openapi({ required: [] })
  .openapi('Meetingdocument')

const RelatedItemSchema = z
  .object({
    bills: z.array(AssociatedBillSchema).exactOptional(),
    nominations: z.array(AssociatedNominationSchema).exactOptional(),
    treaties: z.array(AssociatedTreatySchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RelatedItem')

const VideoSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        example:
          'Legislative Hearing on H.R. 1246 and H.R. 1532 | Indian and Insular Affairs Subcommittee',
      }),
    url: z
      .url()
      .exactOptional()
      .openapi({ example: 'https://www.congress.gov/event/118th-Congress/house-event/115538' }),
  })
  .openapi({ required: [] })
  .openapi('Video')

const WitnessDocumentSchema = z
  .object({
    documentType: z.string().exactOptional().openapi({ example: 'Witness Statement' }),
    format: z.string().exactOptional().openapi({ example: 'PDF' }),
    url: z
      .url()
      .exactOptional()
      .openapi({
        example:
          'https://www.congress.gov/118/meeting/house/115538/witnesses/HHRG-118-II24-Wstate-NewlandB-20230324.pdf',
      }),
  })
  .openapi({ required: [] })
  .openapi('WitnessDocument')

const WitnessSchema = z
  .object({
    name: z.string().exactOptional().openapi({ example: 'The Honorable John Williams' }),
    organization: z.string().exactOptional().openapi({ example: 'United Auburn Rancheria' }),
    position: z.string().exactOptional().openapi({ example: 'Vice Chairman' }),
  })
  .openapi({ required: [] })
  .openapi('Witness')

const CommitteeMeetingDetailSchema = z
  .object({
    chamber: z.string().exactOptional().openapi({ example: 'House' }),
    committees: z.array(SubcommitteesSchema).exactOptional(),
    congress: z.int().exactOptional().openapi({ example: 117 }),
    date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2022-08-01T04:44:57Z' }),
    eventid: z.string().exactOptional().openapi({ example: '115538' }),
    hearingTranscript: z.array(AssociatedHearingTranscriptSchema).exactOptional(),
    location: z
      .object({
        building: z
          .string()
          .exactOptional()
          .openapi({ example: 'Longworth House Office Building' }),
        room: z.string().exactOptional().openapi({ example: '1234' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    meetingDocuments: z.array(MeetingdocumentSchema).exactOptional(),
    meetingStatus: z
      .enum(['Canceled', 'Draft', 'Postponed', 'Rescheduled', 'Scheduled'])
      .exactOptional()
      .openapi({ example: 'Scheduled' }),
    relatedItems: z.array(RelatedItemSchema).exactOptional(),
    title: z
      .string()
      .exactOptional()
      .openapi({
        example:
          'Legislative hearing on: •\tH.R. 1246 (Rep. Hageman), To authorize leases of up to 99 years for land held in trust for federally recognized Indian tribes; and\r\n•\tH.R. 1532 (Rep. Hageman), To authorize any Indian Tribe to lease, sell, convey, warrant, or otherwise transfer real property to which that Indian Tribe holds fee title without the consent of the Federal Government, and for other purposes.',
      }),
    type: z.string().exactOptional().openapi({ example: 'Hearing' }),
    updateDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2022-08-01T04:44:57Z' }),
    videos: z.array(VideoSchema).exactOptional(),
    witnessDocuments: z.array(WitnessDocumentSchema).exactOptional(),
    witnesses: z.array(WitnessSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CommitteeMeetingDetail')

const HearingSchema = z
  .object({
    chamber: z.string().exactOptional().openapi({ example: 'House' }),
    congress: z.int().exactOptional().openapi({ example: 117 }),
    jacketNumber: z.int().exactOptional().openapi({ example: 48144 }),
    updateDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2022-08-01T21:19:33Z' }),
    url: z
      .url()
      .exactOptional()
      .openapi({ example: 'https://api.congress.gov/v3/hearing/117/house/41365?format=json' }),
  })
  .openapi({ required: [] })
  .openapi('Hearing')

const HearingsSchema = z.array(HearingSchema).openapi('Hearings')

const AssociatedMeetingSchema = z
  .object({
    eventId: z.string().exactOptional().openapi({ example: '115266' }),
    url: z
      .url()
      .exactOptional()
      .openapi({
        example: 'https://api.congress.gov/v3/committee-meeting/117/house/115266?format=json',
      }),
  })
  .openapi({ required: [] })
  .openapi('AssociatedMeeting')

const HearingDetailSchema = z
  .object({
    associatedMeeting: AssociatedMeetingSchema.exactOptional(),
    chamber: z.string().exactOptional().openapi({ example: 'House' }),
    citation: z.string().exactOptional().openapi({ example: 'H.Hrg.118' }),
    committees: z.array(SubcommitteesSchema).exactOptional(),
    congress: z.int().exactOptional().openapi({ example: 118 }),
    dates: z.array(z.iso.date().openapi({ example: '2022-08-01' })).exactOptional(),
    formats: z.array(FormatsSchema).exactOptional(),
    jacketNumber: z.int().exactOptional().openapi({ example: 50896 }),
    libraryOfCongressidentifier: z.string().exactOptional().openapi({ example: 'LC70380' }),
    title: z
      .string()
      .exactOptional()
      .openapi({ example: 'FEDERAL PANDEMIC SPENDING: A PRESCRIPTION FOR WASTE, FRAUD AND ABUSE' }),
    updateDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2025-11-04T03:21:12Z' }),
  })
  .openapi({ required: [] })
  .openapi('HearingDetail')

const IssuesSchema = z
  .object({
    Congress: z.string().exactOptional().openapi({ example: '117' }),
    Id: z.int().exactOptional().openapi({ example: 26958 }),
    Issue: z.string().exactOptional().openapi({ example: '109' }),
    Links: z
      .object({
        Digest: z
          .object({
            Label: z.string().exactOptional().openapi({ example: 'Daily Digest' }),
            Ordinal: z.int().exactOptional().openapi({ example: 1 }),
            PDF: z
              .array(
                z
                  .object({
                    Part: z.string().exactOptional().openapi({ example: '1' }),
                    Url: z
                      .url()
                      .exactOptional()
                      .openapi({
                        example:
                          'https://www.congress.gov/117/crec/2022/06/28/168/109/CREC-2022-06-28-dailydigest.pdf',
                      }),
                  })
                  .openapi({ required: [] }),
              )
              .exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
        FullRecord: z
          .object({
            Label: z.string().exactOptional().openapi({ example: 'Entire Issue' }),
            Ordinal: z.int().exactOptional().openapi({ example: 5 }),
            PDF: z
              .array(
                z
                  .object({
                    Part: z.string().exactOptional().openapi({ example: '1' }),
                    Url: z
                      .url()
                      .exactOptional()
                      .openapi({
                        example:
                          'https://www.congress.gov/117/crec/2022/06/28/168/109/CREC-2022-06-28.pdf',
                      }),
                  })
                  .openapi({ required: [] }),
              )
              .exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
        House: z
          .object({
            Label: z.string().exactOptional().openapi({ example: 'House Section' }),
            Ordinal: z.int().exactOptional().openapi({ example: 3 }),
            PDF: z
              .array(
                z
                  .object({
                    Part: z.string().exactOptional().openapi({ example: '1' }),
                    Url: z
                      .url()
                      .exactOptional()
                      .openapi({
                        example:
                          'https://www.congress.gov/117/crec/2022/06/28/168/109/CREC-2022-06-28-house.pdf',
                      }),
                  })
                  .openapi({ required: [] }),
              )
              .exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
        Remarks: z
          .object({
            Label: z.string().exactOptional().openapi({ example: 'Extensions of Remarks Section' }),
            Ordinal: z.int().exactOptional().openapi({ example: 4 }),
            PDF: z
              .array(
                z
                  .object({
                    Part: z.string().exactOptional().openapi({ example: '1' }),
                    Url: z
                      .url()
                      .exactOptional()
                      .openapi({
                        example:
                          'https://www.congress.gov/117/crec/2022/06/28/168/109/CREC-2022-06-28-extensions.pdf',
                      }),
                  })
                  .openapi({ required: [] }),
              )
              .exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
        Senate: z
          .object({
            Label: z.string().exactOptional().openapi({ example: 'Senate Section' }),
            Ordinal: z.int().exactOptional().openapi({ example: 2 }),
            PDF: z
              .array(
                z
                  .object({
                    Part: z.string().exactOptional().openapi({ example: '1' }),
                    Url: z
                      .url()
                      .exactOptional()
                      .openapi({
                        example:
                          'https://www.congress.gov/117/crec/2022/06/28/168/109/CREC-2022-06-28-senate.pdf',
                      }),
                  })
                  .openapi({ required: [] }),
              )
              .exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    PublishDate: z.iso.date().exactOptional().openapi({ example: '2022-02-18' }),
    Session: z.string().exactOptional().openapi({ example: '2' }),
    Volume: z.string().exactOptional().openapi({ example: '168' }),
  })
  .openapi({ required: [] })
  .openapi('Issues')

const CongressionalRecordSchema = z
  .object({
    IndexStart: z.int().exactOptional().openapi({ example: 1 }),
    Issues: z.array(IssuesSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CongressionalRecord')

const DailyCongressionalRecordSchema = z
  .object({
    congress: z.string().exactOptional().openapi({ example: '118' }),
    issueDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2023-07-11T04:00:00Z' }),
    issueNumber: z.string().exactOptional().openapi({ example: '118' }),
    sessionNumber: z.string().exactOptional().openapi({ example: '1' }),
    updateDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2023-07-12T11:30:30Z' }),
    url: z
      .url()
      .exactOptional()
      .openapi({
        example: 'https://api.congress.gov/v3/daily-congressional-record/169/118?format=json',
      }),
    volumeNumber: z.string().exactOptional().openapi({ example: '169' }),
  })
  .openapi({ required: [] })
  .openapi('DailyCongressionalRecord')

const DailyCongressionalRecord2Schema = z
  .array(DailyCongressionalRecordSchema)
  .openapi('DailyCongressionalRecord2')

const FullIssueSchema = z
  .object({
    articles: z
      .object({
        count: z.int().exactOptional().openapi({ example: 315 }),
        url: z
          .url()
          .exactOptional()
          .openapi({
            example:
              'https://api.congress.gov/v3/daily-congressional-record/171/1/articles?format=json',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    entireIssue: z
      .array(
        z
          .object({
            part: z.string().exactOptional().openapi({ example: '1' }),
            type: z.string().exactOptional().openapi({ example: 'PDF' }),
            url: z
              .url()
              .exactOptional()
              .openapi({
                example:
                  'https://www.congress.gov/119/crec/2025/01/03/171/1/CREC-2025-01-03-v171.pdf',
              }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    sections: z
      .array(
        z
          .object({
            endPage: z.string().exactOptional().openapi({ example: 'D12' }),
            name: z.string().exactOptional().openapi({ example: 'Daily Digest' }),
            startPage: z.string().exactOptional().openapi({ example: 'D1' }),
            text: z
              .array(
                z
                  .object({
                    type: z.string().exactOptional().openapi({ example: 'Formatted Text' }),
                    url: z
                      .url()
                      .exactOptional()
                      .openapi({
                        example: 'https://www.congress.gov/119/crec/2025/01/03/d03ja5-1.htm',
                      }),
                  })
                  .openapi({ required: [] }),
              )
              .exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FullIssue')

const DailyCongressionalRecordIssueSchema = z
  .object({
    issue: z
      .object({
        congress: z.int().exactOptional().openapi({ example: 119 }),
        fullIssue: FullIssueSchema.exactOptional(),
        issueDate: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ example: '2025-01-03T05:00:00Z' }),
        issueNumber: z.string().exactOptional().openapi({ example: '1' }),
        sessionNumber: z.int().exactOptional().openapi({ example: 1 }),
        updateDate: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ example: '2025-01-04T16:59:21Z' }),
        url: z
          .url()
          .exactOptional()
          .openapi({
            example: 'https://api.congress.gov/v3/daily-congressional-record/171/1?format=json',
          }),
        volumeNumber: z.int().exactOptional().openapi({ example: 171 }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('DailyCongressionalRecordIssue')

const SectionArticleSchema = z
  .object({
    endPage: z.string().exactOptional().openapi({ example: 'D760' }),
    startPage: z.string().exactOptional().openapi({ example: 'D759' }),
    text: z
      .array(
        z
          .object({
            type: z.string().exactOptional().openapi({ example: 'Formatted Text' }),
            url: z
              .url()
              .exactOptional()
              .openapi({
                example:
                  'https://www.congress.gov/116/crec/2020/09/04/modified/CREC-2020-09-04-pt1-PgD759.htm',
              }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    title: z
      .url()
      .exactOptional()
      .openapi({
        example:
          'Daily Digest/Next Meeting of the SENATE + Next Meeting of the HOUSE OF REPRESENTATIVES + Other End Matter; Congressional Record Vol. 166, No. 153',
      }),
  })
  .openapi({ required: [] })
  .openapi('SectionArticle')

const ArticleSchema = z
  .object({
    name: z.string().exactOptional().openapi({ example: 'Daily Digest' }),
    sectionArticles: z.array(SectionArticleSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Article')

const DailyCongressionalRecordArticlesSchema = z
  .object({ articles: z.array(ArticleSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('DailyCongressionalRecordArticles')

const BoundCongressionalRecordSchema = z
  .object({
    congress: z.int().exactOptional().openapi({ example: 101 }),
    date: z.string().exactOptional().openapi({ example: '1990-05-01' }),
    sessionNumber: z.int().exactOptional().openapi({ example: 2 }),
    updateDate: z.iso.date().exactOptional().openapi({ example: '2020-10-20' }),
    url: z
      .url()
      .exactOptional()
      .openapi({
        example: 'https://api.congress.gov/v3/bound-congressional-record/1990/5/1?format=json',
      }),
    volumeNumber: z.int().exactOptional().openapi({ example: 136 }),
  })
  .openapi({ required: [] })
  .openapi('BoundCongressionalRecord')

const BoundCongressionalRecord2Schema = z
  .object({ boundCongressionalRecord: z.array(BoundCongressionalRecordSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('BoundCongressionalRecord2')

const CommunicationTypeSchema = z
  .object({
    code: z.string().exactOptional().openapi({ example: 'EC' }),
    name: z.string().exactOptional().openapi({ example: 'Executive Communication' }),
  })
  .openapi({ required: [] })
  .openapi('CommunicationType')

const HouseCommunicationSchema = z
  .object({
    chamber: z.string().exactOptional().openapi({ example: 'House' }),
    communicationType: CommunicationTypeSchema.exactOptional(),
    congressNumber: z.int().exactOptional().openapi({ example: 117 }),
    number: z.string().exactOptional().openapi({ example: '2057' }),
    updateDate: z.iso.date().exactOptional().openapi({ example: '2021-09-01' }),
    url: z
      .url()
      .exactOptional()
      .openapi({
        example: 'https://api.congress.gov/v3/house-communication/117/ec/2057?format=json',
      }),
  })
  .openapi({ required: [] })
  .openapi('HouseCommunication')

const HouseCommunicationsSchema = z
  .object({ houseCommunications: z.array(HouseCommunicationSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('HouseCommunications')

const HouseCommunicationTypeNumberSchema = z
  .object({
    abstract: z
      .string()
      .exactOptional()
      .openapi({
        example:
          "A letter from the Director, Regulatory Management Division, Environmental Protection Agency, transmitting the Agency's request for applications - Technical Assistance to Brownfields Communities [EPA-I-OLEM-OBLR-22-12] received February 9, 2024, pursuant to 5 U.S.C. 801(a)(1)(A); Public Law 104–121, section 251; (110 Stat. 868); to the Committee on Energy and Commerce.",
      }),
    chamber: z.string().exactOptional().openapi({ example: 'House' }),
    committees: z
      .array(
        SubcommitteesSchema.and(
          z
            .object({
              referralDate: z.iso.date().exactOptional().openapi({ example: '2024-03-07' }),
            })
            .openapi({ required: [] }),
        ),
      )
      .exactOptional(),
    communicationType: CommunicationTypeSchema.exactOptional(),
    congress: z.int().exactOptional().openapi({ example: 118 }),
    congressionalRecordDate: z.iso.date().exactOptional().openapi({ example: '2024-03-07' }),
    isRulemaking: z.string().exactOptional().openapi({ example: 'True' }),
    legalAuthority: z
      .url()
      .exactOptional()
      .openapi({
        example: '5 U.S.C. 801(a)(1)(A); Public Law 104–121, section 251; (110 Stat. 868)',
      }),
    matchingRequirements: z
      .array(
        z
          .object({
            number: z.int().exactOptional().openapi({ example: 8070 }),
            url: z
              .url()
              .exactOptional()
              .openapi({ example: 'https://api.congress.gov/v3/house-requirement/8070' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    number: z.int().exactOptional().openapi({ example: 3324 }),
    reportNature: z
      .string()
      .exactOptional()
      .openapi({
        example:
          "The Agency's request for applications - Technical Assistance to Brownfields Communities [EPA-I-OLEM-OBLR-22-12] received February 9, 2024.",
      }),
    sessionNumber: z.int().exactOptional().openapi({ example: 2 }),
    submittingAgency: z
      .string()
      .exactOptional()
      .openapi({ example: 'Environmental Protection Agency' }),
    submittingOfficial: z
      .string()
      .exactOptional()
      .openapi({ example: 'Director, Regulatory Management Division' }),
    updateDate: z.iso.date().exactOptional().openapi({ example: '2024-09-03' }),
  })
  .openapi({ required: [] })
  .openapi('HouseCommunicationTypeNumber')

const HouseRequirementSchema = z
  .object({
    number: z.int().exactOptional().openapi({ example: 8070 }),
    updateDate: z.iso.date().exactOptional().openapi({ example: '2021-08-13' }),
    url: z
      .url()
      .exactOptional()
      .openapi({ example: 'https://api.congress.gov/v3/house-requirement/8070?format=json' }),
  })
  .openapi({ required: [] })
  .openapi('HouseRequirement')

const HouseRequirementsSchema = z
  .object({ houseRequirements: z.array(HouseRequirementSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('HouseRequirements')

const MatchCommunicationSchema = z
  .object({
    count: z.int().exactOptional().openapi({ example: 90774 }),
    url: z
      .url()
      .exactOptional()
      .openapi({
        example:
          'https://api.congress.gov/v3/house-requirement/8070/matching-communications?format=json',
      }),
  })
  .openapi({ required: [] })
  .openapi('MatchCommunication')

const HouseRequirement2Schema = z
  .object({
    houseRequirement: z
      .object({
        activeRecord: z.boolean().exactOptional().openapi({ example: true }),
        frequency: z.string().exactOptional().openapi({ example: '[No deadline specified].' }),
        legalAuthority: z
          .string()
          .exactOptional()
          .openapi({
            example: '5 U.S.C. 801(a)(1)(A); Public Law 104–121, section 251; (110 Stat. 868)',
          }),
        matchingCommunications: MatchCommunicationSchema.exactOptional(),
        nature: z
          .string()
          .exactOptional()
          .openapi({ example: 'Congressional review of agency rulemaking.' }),
        number: z.int().exactOptional().openapi({ example: 8070 }),
        parentAgency: z
          .string()
          .exactOptional()
          .openapi({ example: 'Multiple Executive Agencies and Departments' }),
        submittingAgency: z
          .string()
          .exactOptional()
          .openapi({ example: 'Multiple Executive Agencies and Departments' }),
        updateDate: z.iso.date().exactOptional().openapi({ example: '2021-08-13' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('HouseRequirement2')

const MatchCommunicationsSchema = z
  .object({
    chamber: z.string().exactOptional().openapi({ example: 'House' }),
    communicationType: CommunicationTypeSchema.exactOptional(),
    congress: z.int().exactOptional().openapi({ example: 112 }),
    number: z.int().exactOptional().openapi({ example: 2 }),
    url: z
      .url()
      .exactOptional()
      .openapi({ example: 'https://api.congress.gov/v3/house-communication/112/EC/2?format=json' }),
  })
  .openapi({ required: [] })
  .openapi('MatchCommunications')

const MatchCommunications2Schema = z
  .object({ matchCommunications: z.array(MatchCommunicationsSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('MatchCommunications2')

const SenateCommunicationSchema = z
  .object({
    chamber: z.string().exactOptional().openapi({ example: 'Senate' }),
    communicationType: CommunicationTypeSchema.exactOptional(),
    congress: z.int().exactOptional().openapi({ example: 117 }),
    number: z.string().exactOptional().openapi({ example: '1615' }),
    updateDate: z.iso.date().exactOptional().openapi({ example: '2021-09-01' }),
    url: z
      .url()
      .exactOptional()
      .openapi({
        example: 'https://api.congress.gov/v3/senate-communication/117/ec/1615?format=json',
      }),
  })
  .openapi({ required: [] })
  .openapi('SenateCommunication')

const SenateCommunicationsSchema = z
  .object({ senateCommunications: z.array(SenateCommunicationSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('SenateCommunications')

const SenateCommunicationTypeNumberSchema = z
  .object({
    abstract: z
      .string()
      .exactOptional()
      .openapi({
        example:
          "A letter from the Director, Regulatory Management Division, Environmental Protection Agency, transmitting the Agency's request for applications - Technical Assistance to Brownfields Communities [EPA-I-OLEM-OBLR-22-12] received February 9, 2024, pursuant to 5 U.S.C. 801(a)(1)(A); Public Law 104–121, section 251; (110 Stat. 868); to the Committee on Energy and Commerce.",
      }),
    chamber: z.string().exactOptional().openapi({ example: 'House' }),
    committees: z
      .array(
        SubcommitteesSchema.and(
          z
            .object({
              referralDate: z.iso.date().exactOptional().openapi({ example: '2024-03-07' }),
            })
            .openapi({ required: [] }),
        ),
      )
      .exactOptional(),
    congress: z.int().exactOptional().openapi({ example: 118 }),
    congressionalRecordDate: z.iso.date().exactOptional().openapi({ example: '2024-03-07' }),
    number: z.int().exactOptional().openapi({ example: 3324 }),
    sessionNumber: z.int().exactOptional().openapi({ example: 2 }),
    updateDate: z.iso.date().exactOptional().openapi({ example: '2024-09-03' }),
  })
  .openapi({ required: [] })
  .openapi('SenateCommunicationTypeNumber')

const LatestNominationActionSchema = z
  .object({
    actionDate: z.iso.date().exactOptional().openapi({ example: '2022-12-07' }),
    text: z
      .string()
      .exactOptional()
      .openapi({
        example: 'Received in the Senate and referred to the Committee on Armed Services.',
      }),
  })
  .openapi({ required: [] })
  .openapi('LatestNominationAction')

const NominationSchema = z
  .object({
    citation: z.string().exactOptional().openapi({ example: 'PN2804' }),
    congress: z.int().exactOptional().openapi({ example: 117 }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        example:
          'Mary Anne Carter, of Tennessee, to be Chairperson of the National Endowment for the Arts for a term of four years, vice Maria Rosario Jackson, resigned.',
      }),
    latestAction: LatestNominationActionSchema.exactOptional(),
    nominationType: NominationTypeSchema.exactOptional(),
    number: z.int().exactOptional().openapi({ example: 2804 }),
    organization: z.string().exactOptional().openapi({ example: 'Army' }),
    partNumber: z.string().exactOptional().openapi({ example: '00' }),
    receivedDate: z.iso.date().exactOptional().openapi({ example: '2022-12-07' }),
    updateDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2022-12-08T05:25:17Z' }),
    url: z
      .url()
      .exactOptional()
      .openapi({ example: 'https://api.congress.gov/v3/nomination/117/2804?format=json' }),
  })
  .openapi({ required: [] })
  .openapi('Nomination')

const NominationsSchema = z
  .object({ nominations: z.array(NominationSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('Nominations')

const NomineeSchema = z
  .object({
    nomineeCount: z.int().exactOptional().openapi({ example: 1 }),
    ordinal: z.int().exactOptional().openapi({ example: 1 }),
    organization: z.string().exactOptional().openapi({ example: 'Federal Maritime Commission' }),
    positionTitle: z.string().exactOptional().openapi({ example: 'Federal Maritime Commissioner' }),
    url: z
      .url()
      .exactOptional()
      .openapi({ example: 'https://api.congress.gov/v3/nomination/118/16/1?format=json' }),
  })
  .openapi({ required: [] })
  .openapi('Nominee')

const Nomination2Schema = z
  .object({
    nomination: z
      .object({
        actions: z
          .object({
            count: z.int().exactOptional().openapi({ example: 7 }),
            url: z
              .url()
              .exactOptional()
              .openapi({
                example: 'https://api.congress.gov/v3/nomination/118/16/actions?format=json',
              }),
          })
          .exactOptional()
          .openapi({ required: [] }),
        authorityDate: z.iso.date().exactOptional().openapi({ example: '2025-10-21' }),
        citation: z.string().exactOptional().openapi({ example: 'PN16' }),
        committees: z
          .object({
            count: z.int().exactOptional().openapi({ example: 1 }),
            url: z
              .url()
              .exactOptional()
              .openapi({
                example: 'https://api.congress.gov/v3/nomination/118/16/committees?format=json',
              }),
          })
          .exactOptional()
          .openapi({ required: [] }),
        congress: z.int().exactOptional().openapi({ example: 118 }),
        description: z
          .string()
          .exactOptional()
          .openapi({
            example:
              'Daniel B. Maffei, of New York, to be a Federal Maritime Commissioner for a term expiring June 30, 2027.  (Reappointment)',
          }),
        hearings: z
          .object({
            count: z.int().exactOptional().openapi({ example: 1 }),
            url: z
              .url()
              .exactOptional()
              .openapi({
                example: 'https://api.congress.gov/v3/nomination/118/16/hearings?format=json',
              }),
          })
          .exactOptional()
          .openapi({ required: [] }),
        latestAction: z
          .object({
            actionDate: z.iso.date().exactOptional().openapi({ example: '2024-05-14' }),
            text: z
              .string()
              .exactOptional()
              .openapi({ example: 'Confirmed by the Senate by Voice Vote.' }),
          })
          .exactOptional()
          .openapi({ required: [] }),
        nominationType: NominationTypeSchema.exactOptional(),
        nominees: z.array(NomineeSchema).exactOptional(),
        number: z.int().exactOptional().openapi({ example: 16 }),
        partNumber: z.string().exactOptional().openapi({ example: '00' }),
        receivedDate: z.iso.date().exactOptional().openapi({ example: '2023-01-03' }),
        updateDate: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ example: '2025-10-22T15:58:44Z' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('Nomination2')

const SenatecommitteeSchema = z
  .object({
    name: z.string().exactOptional().openapi({ example: 'Armed Services Committee' }),
    systemCode: z.string().exactOptional().openapi({ example: 'ssas00' }),
    url: z
      .url()
      .exactOptional()
      .openapi({ example: 'https://api.congress.gov/v3/committee/senate/ssas00?format=json' }),
  })
  .openapi({ required: [] })
  .openapi('Senatecommittee')

const NomineeActionSchema = z
  .object({
    actionCode: z.string().exactOptional().openapi({ example: 'S05120' }),
    actionDate: z.iso.date().exactOptional().openapi({ example: '2022-08-03' }),
    committees: z.array(SenatecommitteeSchema).exactOptional(),
    text: z
      .string()
      .exactOptional()
      .openapi({
        example: 'Received in the Senate and referred to the Committee on Armed Services',
      }),
    type: z.string().exactOptional().openapi({ example: 'IntroReferral' }),
  })
  .openapi({ required: [] })
  .openapi('NomineeAction')

const NominationNomineeSchema = z
  .object({ nominees: z.array(NomineeSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('NominationNominee')

const NominationActionsSchema = z
  .object({ actions: z.array(NomineeActionSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('NominationActions')

const NominationCommitteeSchema = z
  .object({
    activities: z.array(ActivitySchema).exactOptional(),
    chamber: z.string().exactOptional().openapi({ example: 'Senate' }),
    name: z.string().exactOptional().openapi({ example: 'Judiciary Committee' }),
    systemCode: z.string().exactOptional().openapi({ example: 'ssju00' }),
    type: z.string().exactOptional().openapi({ example: 'Standing' }),
    url: z
      .url()
      .exactOptional()
      .openapi({ example: 'https://api.congress.gov/v3/committee/senate/ssju00?format=json' }),
  })
  .openapi({ required: [] })
  .openapi('NominationCommittee')

const NominationCommitteesSchema = z
  .object({ committees: z.array(NominationCommitteeSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('NominationCommittees')

const NominationHearingSchema = z
  .object({
    chamber: z.string().exactOptional().openapi({ example: 'Senate' }),
    citation: z.string().exactOptional().openapi({ example: 'S.Hrg.118-694' }),
    date: z.iso.date().exactOptional().openapi({ example: '2024-02-28' }),
    jacketNumber: z.int().exactOptional().openapi({ example: 61203 }),
    number: z.int().exactOptional().openapi({ example: 694 }),
  })
  .openapi({ required: [] })
  .openapi('NominationHearing')

const NominationHearing2Schema = z
  .object({ hearings: z.array(NominationHearingSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('NominationHearing2')

const CrsreportSchema = z
  .object({
    contentType: z.string().exactOptional().openapi({ example: 'Reports' }),
    id: z.string().exactOptional().openapi({ example: 'R43083' }),
    publishDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2025-02-05T11:34:25Z' }),
    status: z.string().exactOptional().openapi({ example: 'Active' }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        example: 'SBA Assistance to Small Business Startups: Client Experiences and Program Impact',
      }),
    updateDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2025-02-07T01:36:49Z' }),
    url: z
      .url()
      .exactOptional()
      .openapi({ example: 'https://api.congress.gov/v3/crsreport/R43083' }),
    version: z.int().exactOptional().openapi({ example: 145 }),
  })
  .openapi({ required: [] })
  .openapi('Crsreport')

const CrsReportSchema = z
  .object({ CRSReports: z.array(CrsreportSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('CrsReport')

const FormatSchema = z
  .object({
    format: z.string().exactOptional().openapi({ example: 'PDF' }),
    url: z
      .url()
      .exactOptional()
      .openapi({
        example: 'https://www.congress.gov/crs_external_products/R/PDF/R47175/R47175.1.pdf',
      }),
  })
  .openapi({ required: [] })
  .openapi('Format')

const RelatedMaterialSchema = z
  .object({
    URL: z
      .string()
      .exactOptional()
      .openapi({ example: 'https://api.congress.gov/v3/law/93/pub/344' }),
    congress: z.int().exactOptional().openapi({ example: 93 }),
    number: z.string().exactOptional().openapi({ example: '93-344' }),
    title: z
      .string()
      .exactOptional()
      .openapi({ example: 'Providing for budget allocations, and for other purposes.' }),
    type: z.string().exactOptional().openapi({ example: 'PUB' }),
  })
  .openapi({ required: [] })
  .openapi('RelatedMaterial')

const AuthorSchema = z
  .object({ author: z.string().exactOptional().openapi({ example: 'Megan S. Lynch' }) })
  .openapi({ required: [] })
  .openapi('Author')

const TopicSchema = z
  .object({
    topic: z.string().exactOptional().openapi({ example: 'Budget & Appropriations Procedure' }),
  })
  .openapi({ required: [] })
  .openapi('Topic')

const CrsReportDetailSchema = z
  .object({
    authors: z.array(AuthorSchema).exactOptional(),
    contentType: z.string().exactOptional().openapi({ example: 'Reports' }),
    formats: z.array(FormatSchema).exactOptional(),
    id: z.string().exactOptional().openapi({ example: 'R47175' }),
    publishDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2022-07-11T04:00:00Z' }),
    relatedMaterials: z.array(RelatedMaterialSchema).exactOptional(),
    status: z.string().exactOptional().openapi({ example: 'Active' }),
    summary: z
      .string()
      .exactOptional()
      .openapi({
        example:
          'The Congressional Budget Act of 1974 directs Congress to adopt a budget resolution each spring, providing an agreement between the House and Senate on a budget plan for the upcoming fiscal year (and at least four additional years). The annual budget resolution includes certain spending and revenue levels that become enforceable through points of order once both chambers have adopted the resolution.\nCongress does not always adopt a budget resolution, however, and this may complicate the development and consideration of budgetary legislation. Congress has, therefore, developed an alternative legislative tool, typically referred to as a “deeming resolution” because it is deemed to serve in place of an annual budget resolution for the purposes of establishing enforceable budgetary levels. \nOn June 8, 2022, the House of Representatives adopted H.Res. 1151, a deeming resolution for FY2023. H.Res. 1151 provided a committee spending allocation (302(a) allocation) to the House Appropriations Committee ($1.603 trillion). It also directed the chair of the House Budget Committee to subsequently file a statement in the Congressional Record that includes committee spending allocations for all other committees, as well as aggregate spending and revenue levels. (Those levels were filed on June 21, 2022.) H.Res. 1151 specified that the levels filed in the Congressional Record be consistent with the “most recent baseline of the Congressional Budget Office,” meaning that the committee spending allocations (other than for the Appropriations Committee) and the aggregate spending and revenue levels have been set at the levels currently projected under current law. \nIn addition to providing enforceable budgetary levels within the House, H.Res. 1151 grants authority to the chair of the House Budget Committee to “adjust” the budgetary levels provided under the deeming resolution in the future under specified circumstances. In addition, the resolution states that provisions designated as “emergency” shall be effectively exempt from House budgetary rules and specifies that certain accounts may receive advance appropriations for FY2024 and FY2025. \n',
      }),
    title: z
      .string()
      .exactOptional()
      .openapi({ example: "Settings Budgetary Levels: The House's FY2023 Deeming Resolution" }),
    topics: z.array(TopicSchema).exactOptional(),
    updateDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2025-06-20T23:46:23Z' }),
    url: z.url().exactOptional().openapi({ example: 'www.congress.gov/crs-report/R47175' }),
    version: z.int().exactOptional().openapi({ example: 1 }),
  })
  .openapi({ required: [] })
  .openapi('CrsReportDetail')

const TreatySchema = z
  .object({
    congressReceived: z.int().exactOptional().openapi({ example: 89 }),
    congressConsidered: z.int().exactOptional().openapi({ example: 89 }),
    number: z.int().exactOptional().openapi({ example: 3 }),
    parts: z.looseObject({}).exactOptional(),
    suffix: z.string().exactOptional().openapi({ example: '' }),
    topic: z.string().exactOptional().openapi({ example: 'Dispute Settlement and Arbitration' }),
    transmittedDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '1965-05-17T00:00:00Z' }),
    updateDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2024-12-11T00:18:16Z' }),
    url: z
      .url()
      .exactOptional()
      .openapi({ example: 'https://api.congress.gov/v3/treaty/89/3?format=json' }),
  })
  .openapi({ required: [] })
  .openapi('Treaty')

const Treaty2Schema = z
  .object({ treaties: z.array(TreatySchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('Treaty2')

const TreatyDetailSchema = z
  .object({
    treaty: z
      .object({
        actions: z
          .object({
            count: z.int().exactOptional().openapi({ example: 3 }),
            url: z
              .url()
              .exactOptional()
              .openapi({ example: 'https://api.congress.gov/v3/treaty/89/7/actions?format=json' }),
          })
          .exactOptional()
          .openapi({ required: [] }),
        congressConsidered: z.int().exactOptional().openapi({ example: 89 }),
        congressReceived: z.int().exactOptional().openapi({ example: 89 }),
        countriesParties: z
          .array(
            z
              .object({ name: z.string().exactOptional().openapi({ example: 'Belgium' }) })
              .openapi({ required: [] }),
          )
          .exactOptional(),
        inForceDate: z.string().exactOptional().openapi({ example: '' }),
        indexTerms: z
          .array(
            z
              .object({ name: z.string().exactOptional().openapi({ example: 'ENGLISH' }) })
              .openapi({ required: [] }),
          )
          .exactOptional(),
        number: z.int().exactOptional().openapi({ example: 7 }),
        oldNumber: z.string().exactOptional().openapi({ example: 'G. 89-1' }),
        oldNumberDisplayName: z
          .string()
          .exactOptional()
          .openapi({ example: 'Ex. G, 89th Congress, 1st Session' }),
        parts: z.looseObject({}).exactOptional(),
        relatedDocs: z.array(z.looseObject({})).exactOptional(),
        resolutionText: z.string().exactOptional().openapi({ example: '' }),
        suffix: z.string().exactOptional().openapi({ example: '' }),
        titles: z
          .array(
            z
              .object({
                title: z
                  .string()
                  .exactOptional()
                  .openapi({
                    example:
                      'PROTOCOL MODIFYING CONVENTION WITH BELGIUM FOR THE AVOIDANCE OF DOUBLE TAXATION',
                  }),
                titleType: z.string().exactOptional().openapi({ example: 'Treaty - Short Title' }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
        topic: z.string().exactOptional().openapi({ example: 'Taxation' }),
        transmitted: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ example: '1965-08-05T00:00:00Z' }),
        updateDate: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ example: '2022-02-26T16:25:25Z' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('TreatyDetail')

const TreatyActionSchema = z
  .object({
    actionCode: z.string().exactOptional().openapi({ example: 'S05291' }),
    actionDate: z.iso.date().exactOptional().openapi({ example: '2022-08-03' }),
    committee: SenatecommitteeSchema.exactOptional(),
    text: z
      .string()
      .exactOptional()
      .openapi({
        example:
          'Resolution of advice and consent to ratification agreed to as amended in Senate by Yea-Nay Vote. 95 - 1. Record Vote Number: 282.',
      }),
    type: z.string().exactOptional().openapi({ example: 'Floor' }),
  })
  .openapi({ required: [] })
  .openapi('TreatyAction')

const TreatyActionsSchema = z
  .object({ actions: z.array(TreatyActionSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('TreatyActions')

const TreatySubcommitteeSchema = z
  .object({
    activities: z
      .array(
        z
          .object({
            date: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({ example: '1965-10-19T04:00:00Z' }),
            name: z.string().exactOptional().openapi({ example: 'Reported By' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    name: z.string().exactOptional().openapi({ example: 'Foreign Relations Committee' }),
    systemCode: z.string().exactOptional().openapi({ example: 'ssfr01' }),
    url: z
      .url()
      .exactOptional()
      .openapi({ example: 'https://api.congress.gov/v3/committee/senate/ssfr01?format=json' }),
  })
  .openapi({ required: [] })
  .openapi('TreatySubcommittee')

const TreatyCommitteeSchema = z
  .object({
    activities: z
      .array(
        z
          .object({
            date: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({ example: '1965-10-19T04:00:00Z' }),
            name: z.string().exactOptional().openapi({ example: 'Reported By' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    chamber: z.string().exactOptional().openapi({ example: 'Senate' }),
    name: z.string().exactOptional().openapi({ example: 'Foreign Relations Committee' }),
    subcommittees: z.array(TreatySubcommitteeSchema).exactOptional(),
    systemCode: z.string().exactOptional().openapi({ example: 'ssfr00' }),
    type: z.string().exactOptional().openapi({ example: 'Standing' }),
    url: z
      .string()
      .exactOptional()
      .openapi({ example: 'https://api.congress.gov/v3/committee/senate/ssfr00?format=json' }),
  })
  .openapi({ required: [] })
  .openapi('TreatyCommittee')

const TreatyCommitteesSchema = z
  .object({ treatyCommittees: z.array(TreatyCommitteeSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('TreatyCommittees')

const FormatParamsSchema = z
  .enum(['xml', 'json'])
  .default('xml')
  .exactOptional()
  .openapi({
    param: {
      name: 'format',
      in: 'query',
      description: 'The data format. Value can be xml or json.',
      required: false,
      schema: { type: 'string', default: 'xml', enum: ['xml', 'json'] },
    },
  })

const OffsetParamsSchema = z
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
      name: 'offset',
      in: 'query',
      description: 'The starting record returned. 0 is the first record.',
      required: false,
      schema: { type: 'integer' },
    },
  })

const LimitParamsSchema = z
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
      name: 'limit',
      in: 'query',
      description: 'The number of records returned. The maximum limit is 250.',
      required: false,
      schema: { type: 'integer' },
    },
  })

const FromDateTimeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'fromDateTime',
      in: 'query',
      description:
        'The starting timestamp to filter by update date. Use format: YYYY-MM-DDT00:00:00Z.',
      required: false,
      schema: { type: 'string' },
    },
  })

const ToDateTimeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'toDateTime',
      in: 'query',
      description:
        'The ending timestamp to filter by update date. Use format: YYYY-MM-DDT00:00:00Z.',
      required: false,
      schema: { type: 'string' },
    },
  })

const SortParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'sort',
      in: 'query',
      description:
        'Sort by update date in Congress.gov. Value can be updateDate+asc or updateDate+desc.',
      required: false,
      schema: { type: 'string' },
    },
  })

const CongressParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int32().min(1).max(119),
  )
  .openapi({
    param: {
      name: 'congress',
      in: 'path',
      description: 'The congress number. For example, can be 117.',
      required: true,
      schema: { type: 'integer', format: 'int32', minimum: 1, maximum: 119 },
    },
  })

const BillTypeParamsSchema = z
  .enum(['hr', 's', 'hjres', 'sjres', 'hconres', 'sconres', 'hres', 'sres'])
  .openapi({
    param: {
      name: 'billType',
      in: 'path',
      description:
        'The type of bill. Value can be hr, s, hjres, sjres, hconres, sconres, hres, or sres.',
      required: true,
      schema: {
        type: 'string',
        enum: ['hr', 's', 'hjres', 'sjres', 'hconres', 'sconres', 'hres', 'sres'],
      },
    },
  })

const BillNumberParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(1),
  )
  .openapi({
    param: {
      name: 'billNumber',
      in: 'path',
      description: "The bill's assigned number. For example, the value can be 3076.",
      required: true,
      schema: { type: 'integer', minimum: 1 },
    },
  })

const LawTypeParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'lawType',
      in: 'path',
      description: "The law type. Values are either 'pub' or 'priv.'",
      required: true,
      schema: { type: 'string' },
    },
  })

const LawNumberParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .openapi({
    param: {
      name: 'lawNumber',
      in: 'path',
      description: 'The law number',
      required: true,
      schema: { type: 'integer' },
    },
  })

const AmendmentTypeParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'amendmentType',
      in: 'path',
      description: 'The type of amendment. Value can be hamdt, samdt, or suamdt.',
      required: true,
      schema: { type: 'string' },
    },
  })

const AmendmentNumberParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'amendmentNumber',
      in: 'path',
      description: "The amendment's assigned number. For example, the value can be 2137.",
      required: true,
      schema: { type: 'string' },
    },
  })

const CurrentMemberParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      name: 'currentMember',
      in: 'query',
      description: 'The status of the member. Use true or false',
      schema: { type: 'boolean', example: true },
      required: false,
    },
    example: true,
  })

const BioguideIdParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'bioguideId',
      in: 'path',
      description:
        'The bioguide identifier for the congressional member. For example, the value can be L000174.',
      required: true,
      schema: { type: 'string' },
    },
  })

const StateCodeParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'stateCode',
      in: 'path',
      description:
        'The two letter identifier for the state the member represents. For example, the value can be MI for Michigan.',
      required: true,
      schema: { type: 'string' },
    },
  })

const DistrictParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .openapi({
    param: {
      name: 'district',
      in: 'path',
      description:
        'The district number for the district the member represents. For example, the value can be 10.',
      required: true,
      schema: { type: 'integer' },
    },
  })

const SessionParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.union([z.literal(1), z.literal(2)]),
  )
  .openapi({
    param: {
      name: 'session',
      in: 'path',
      description: 'The session number. The value can be 1 or 2.',
      required: true,
      schema: { type: 'integer', enum: [1, 2] },
    },
  })

const VoteNumberParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .openapi({
    param: {
      name: 'voteNumber',
      in: 'path',
      description: 'The assigned roll call vote number. For example, 17.',
      required: true,
      schema: { type: 'integer' },
    },
  })

const HousechamberParamsSchema = z
  .string()
  .default('house')
  .openapi({
    param: {
      name: 'chamber',
      in: 'path',
      description: 'The chamber name. Value can be house.',
      required: true,
      schema: { type: 'string', default: 'house' },
    },
  })

const SenatechamberParamsSchema = z
  .string()
  .default('senate')
  .openapi({
    param: {
      name: 'chamber',
      in: 'path',
      description: 'The chamber name. Value can be senate.',
      required: true,
      schema: { type: 'string', default: 'senate' },
    },
  })

const ChamberParamsSchema = z
  .enum(['house', 'senate', 'joint'])
  .openapi({
    param: {
      name: 'chamber',
      in: 'path',
      description: 'The chamber name. Value can be house, senate, or joint.',
      required: true,
      schema: { type: 'string', enum: ['house', 'senate', 'joint'] },
    },
  })

const CommitteeCodeParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'committeeCode',
      in: 'path',
      description: 'The committee code. For example, the value can be hspw00.',
      required: true,
      schema: { type: 'string' },
    },
  })

const ConferenceParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      name: 'conference',
      in: 'query',
      description: 'Flag to indicate conference reports. Value can be true or false.',
      required: false,
      schema: { type: 'boolean', example: true },
    },
    example: true,
  })

const ReportTypeParamsSchema = z
  .enum(['hrpt', 'srpt', 'erpt'])
  .openapi({
    param: {
      name: 'reportType',
      in: 'path',
      description: 'The type of committee report. Value can be hrpt, srpt, or erpt.',
      required: true,
      schema: { type: 'string', enum: ['hrpt', 'srpt', 'erpt'] },
    },
  })

const ReportNumberParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .openapi({
    param: {
      name: 'reportNumber',
      in: 'path',
      description: "The committee report's assigned number. For example, the value can be 617.",
      required: true,
      schema: { type: 'integer' },
    },
  })

const CrsReportNumberParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'reportNumber',
      in: 'path',
      description: 'The number or ID of the report. For example, R47175.',
      required: true,
      schema: { type: 'string' },
    },
  })

const JacketNumberParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .openapi({
    param: {
      name: 'jacketNumber',
      in: 'path',
      description: 'The jacket number for the print. For example, the value can be 48144.',
      required: true,
      schema: { type: 'integer' },
    },
  })

const EventIdParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'eventId',
      in: 'path',
      required: true,
      description: 'The event identifier. For example, the value can be 115538.',
      schema: { type: 'string' },
    },
  })

const YParamsSchema = z
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
      name: 'y',
      in: 'query',
      description: 'The year the issue was published. For example, the value can be 2022.',
      required: false,
      schema: { type: 'integer' },
    },
  })

const MParamsSchema = z
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
      name: 'm',
      in: 'query',
      description: 'The month the issue was published. For example, the value can be 6.',
      required: false,
      schema: { type: 'integer' },
    },
  })

const DParamsSchema = z
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
      name: 'd',
      in: 'query',
      description: 'The day the issue was published. For example, the value can be 28.',
      required: false,
      schema: { type: 'integer' },
    },
  })

const VolumeNumberParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .openapi({
    param: {
      name: 'volumeNumber',
      in: 'path',
      description: 'The specified volume of the daily Congressional record, for example 166.',
      required: true,
      schema: { type: 'integer' },
    },
  })

const IssueNumberParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .openapi({
    param: {
      name: 'issueNumber',
      in: 'path',
      description: 'The specified issue of the daily Congressional record, for example 153.',
      required: true,
      schema: { type: 'integer' },
    },
  })

const YearParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .openapi({
    param: {
      name: 'year',
      in: 'path',
      description: 'The specified year of the bound Congressional record, for example 1990.',
      required: true,
      schema: { type: 'integer' },
    },
  })

const MonthParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .openapi({
    param: {
      name: 'month',
      in: 'path',
      description:
        'The specified month of the bound Congressional record, for example 4 for April.',
      required: true,
      schema: { type: 'integer' },
    },
  })

const DayParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .openapi({
    param: {
      name: 'day',
      in: 'path',
      description: 'The specified day of the bound Congressional record, for example 18.',
      required: true,
      schema: { type: 'integer' },
    },
  })

const CommunicationTypeParamsSchema = z
  .enum(['ec', 'ml', 'pm', 'pt'])
  .openapi({
    param: {
      name: 'communicationType',
      in: 'path',
      description: 'The type of communication. Value can be ec, ml, pm, or pt.',
      required: true,
      schema: { type: 'string', enum: ['ec', 'ml', 'pm', 'pt'] },
    },
  })

const SenateCommunicationTypeParamsSchema = z
  .enum(['ec', 'pm', 'pom'])
  .openapi({
    param: {
      name: 'communicationType',
      in: 'path',
      description: 'The type of communication. Value can be ec, pm, or pom.',
      required: true,
      schema: { type: 'string', enum: ['ec', 'pm', 'pom'] },
    },
  })

const CommunicationNumberParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .openapi({
    param: {
      name: 'communicationNumber',
      in: 'path',
      description: "The communication's assigned number. For example, the value can be 3324.",
      required: true,
      schema: { type: 'integer' },
    },
  })

const RequirementNumberParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .openapi({
    param: {
      name: 'requirementNumber',
      in: 'path',
      description: "The requirement's assigned number. For example, the value can be 8070.",
      required: true,
      schema: { type: 'integer' },
    },
  })

const NominationNumberParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .openapi({
    param: {
      name: 'nominationNumber',
      in: 'path',
      description: "The nomination's assigned number. For example, the value can be 389.",
      required: true,
      schema: { type: 'integer' },
    },
  })

const OrdinalParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .openapi({
    param: {
      name: 'ordinal',
      in: 'path',
      description: 'The ordinal number. For example, the value can be 1',
      required: true,
      schema: { type: 'integer' },
    },
  })

const TreatyNumberParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .openapi({
    param: {
      name: 'treatyNumber',
      in: 'path',
      description: "The treaty's assigned number. For example, the value can be 13.",
      required: true,
      schema: { type: 'integer' },
    },
  })

const TreatySuffixParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'treatySuffix',
      in: 'path',
      description: "The treaty's partition letter value. For example, the value can be A.",
      required: true,
      schema: { type: 'string' },
    },
  })

const ApiKeyAuthSecurityScheme = { type: 'apiKey', in: 'query', name: 'api_key' }

export const getBillRoute = createRoute({
  method: 'get',
  path: '/bill',
  tags: ['bill'],
  summary: 'Returns a list of bills sorted by date of latest action',
  description: 'Returns a list of bills sorted by date of latest action',
  operationId: 'getBills',
  request: {
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
      fromDateTime: FromDateTimeParamsSchema,
      toDateTime: ToDateTimeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: BillSchema },
        'application/xml': { schema: BillSchema },
      },
    },
    400: { description: 'Invalid status value' },
    404: { description: 'Not found' },
  },
})

export const getBillCongressRoute = createRoute({
  method: 'get',
  path: '/bill/{congress}',
  tags: ['bill'],
  summary:
    'Returns a list of bills filtered by the specified congress, sorted by date of latest action',
  description:
    'Returns a list of bills filtered by the specified congress, sorted by date of latest action',
  operationId: 'getBillsByCongress',
  request: {
    params: z.object({
      congress: z
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
            name: 'congress',
            in: 'path',
            description: 'The congress number. For example, can be 117.',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
      fromDateTime: FromDateTimeParamsSchema,
      toDateTime: ToDateTimeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: BillSchema },
        'application/xml': { schema: BillSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getBillCongressBillTypeRoute = createRoute({
  method: 'get',
  path: '/bill/{congress}/{billType}',
  tags: ['bill'],
  summary:
    'Returns a list of bills filtered by the specified congress and bill type, sorted by date of latest action.',
  description:
    'Returns a list of bills filtered by the specified congress and bill type, sorted by date of latest action.',
  operationId: 'getBillsByCongressAndBillType',
  request: {
    params: z.object({ congress: CongressParamsSchema, billType: BillTypeParamsSchema }),
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
      fromDateTime: FromDateTimeParamsSchema,
      toDateTime: ToDateTimeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: BillSchema },
        'application/xml': { schema: BillSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getBillCongressBillTypeBillNumberRoute = createRoute({
  method: 'get',
  path: '/bill/{congress}/{billType}/{billNumber}',
  tags: ['bill'],
  summary: 'Returns detailed information for a specified bill.',
  description: 'Returns detailed information for a specified bill.',
  operationId: 'getBill',
  request: {
    params: z.object({
      congress: CongressParamsSchema,
      billType: BillTypeParamsSchema,
      billNumber: BillNumberParamsSchema,
    }),
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
      fromDateTime: FromDateTimeParamsSchema,
      toDateTime: ToDateTimeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: BillDetailSchema },
        'application/xml': { schema: BillDetailSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getBillCongressBillTypeBillNumberActionsRoute = createRoute({
  method: 'get',
  path: '/bill/{congress}/{billType}/{billNumber}/actions',
  tags: ['bill'],
  summary: 'Returns the list of actions on a specified bill.',
  description: 'Returns the list of actions on a specified bill.',
  operationId: 'getBillActions',
  request: {
    params: z.object({
      congress: CongressParamsSchema,
      billType: BillTypeParamsSchema,
      billNumber: BillNumberParamsSchema,
    }),
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
      fromDateTime: FromDateTimeParamsSchema,
      toDateTime: ToDateTimeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: ActionsSchema },
        'application/xml': { schema: ActionsSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getBillCongressBillTypeBillNumberAmendmentsRoute = createRoute({
  method: 'get',
  path: '/bill/{congress}/{billType}/{billNumber}/amendments',
  tags: ['bill'],
  summary: 'Returns the list of amendments to a specified bill.',
  description: 'Returns the list of amendments to a specified bill.',
  operationId: 'getBillAmendments',
  request: {
    params: z.object({
      congress: CongressParamsSchema,
      billType: BillTypeParamsSchema,
      billNumber: BillNumberParamsSchema,
    }),
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
      fromDateTime: FromDateTimeParamsSchema,
      toDateTime: ToDateTimeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: AmendmentsSchema },
        'application/xml': { schema: AmendmentsSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getBillCongressBillTypeBillNumberCommitteesRoute = createRoute({
  method: 'get',
  path: '/bill/{congress}/{billType}/{billNumber}/committees',
  tags: ['bill'],
  summary: 'Returns the list of committees associated with a specified bill.',
  description: 'Returns the list of committees associated with a specified bill.',
  operationId: 'getBillCommittees',
  request: {
    params: z.object({
      congress: CongressParamsSchema,
      billType: BillTypeParamsSchema,
      billNumber: BillNumberParamsSchema,
    }),
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: CommitteeSchema },
        'application/xml': { schema: CommitteeSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getBillCongressBillTypeBillNumberCosponsorsRoute = createRoute({
  method: 'get',
  path: '/bill/{congress}/{billType}/{billNumber}/cosponsors',
  tags: ['bill'],
  summary: 'Returns the list of cosponsors on a specified bill.',
  description: 'Returns the list of cosponsors on a specified bill.',
  operationId: 'getBillCosponsors',
  request: {
    params: z.object({
      congress: CongressParamsSchema,
      billType: BillTypeParamsSchema,
      billNumber: BillNumberParamsSchema,
    }),
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
      fromDateTime: FromDateTimeParamsSchema,
      toDateTime: ToDateTimeParamsSchema,
      sort: SortParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: CoSponsorSchema },
        'application/xml': { schema: CoSponsorSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getBillCongressBillTypeBillNumberRelatedbillsRoute = createRoute({
  method: 'get',
  path: '/bill/{congress}/{billType}/{billNumber}/relatedbills',
  tags: ['bill'],
  summary: 'Returns the list of related bills to a specified bill.',
  description: 'Returns the list of related bills to a specified bill.',
  operationId: 'getBillRelatedBills',
  request: {
    params: z.object({
      congress: CongressParamsSchema,
      billType: BillTypeParamsSchema,
      billNumber: BillNumberParamsSchema,
    }),
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: RelatedBillsSchema },
        'application/xml': { schema: RelatedBillsSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getBillCongressBillTypeBillNumberSubjectsRoute = createRoute({
  method: 'get',
  path: '/bill/{congress}/{billType}/{billNumber}/subjects',
  tags: ['bill'],
  summary: 'Returns the list of legislative subjects on a specified bill.',
  description: 'Returns the list of legislative subjects on a specified bill.',
  operationId: 'getBillSubjects',
  request: {
    params: z.object({
      congress: CongressParamsSchema,
      billType: BillTypeParamsSchema,
      billNumber: BillNumberParamsSchema,
    }),
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
      fromDateTime: FromDateTimeParamsSchema,
      toDateTime: ToDateTimeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: SubjectsSchema },
        'application/xml': { schema: SubjectsSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getBillCongressBillTypeBillNumberSummariesRoute = createRoute({
  method: 'get',
  path: '/bill/{congress}/{billType}/{billNumber}/summaries',
  tags: ['bill'],
  summary: 'Returns the list of summaries for a specified bill.',
  description: 'Returns the list of summaries for a specified bill.',
  operationId: 'getBillSummaries',
  request: {
    params: z.object({
      congress: CongressParamsSchema,
      billType: BillTypeParamsSchema,
      billNumber: BillNumberParamsSchema,
    }),
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: BillSummariesSchema },
        'application/xml': { schema: BillSummariesSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getBillCongressBillTypeBillNumberTextRoute = createRoute({
  method: 'get',
  path: '/bill/{congress}/{billType}/{billNumber}/text',
  tags: ['bill'],
  summary: 'Returns the list of text versions for a specified bill.',
  description: 'Returns the list of text versions for a specified bill.',
  operationId: 'getBillTexts',
  request: {
    params: z.object({
      congress: CongressParamsSchema,
      billType: BillTypeParamsSchema,
      billNumber: BillNumberParamsSchema,
    }),
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: TextSchema },
        'application/xml': { schema: TextSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getBillCongressBillTypeBillNumberTitlesRoute = createRoute({
  method: 'get',
  path: '/bill/{congress}/{billType}/{billNumber}/titles',
  tags: ['bill'],
  summary: 'Returns the list of titles for a specified bill.',
  description: 'Returns the list of titles for a specified bill.',
  operationId: 'getBillTitles',
  request: {
    params: z.object({
      congress: CongressParamsSchema,
      billType: BillTypeParamsSchema,
      billNumber: BillNumberParamsSchema,
    }),
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
      fromDateTime: FromDateTimeParamsSchema,
      toDateTime: ToDateTimeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: TitlesSchema },
        'application/xml': { schema: TitlesSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getLawCongressRoute = createRoute({
  method: 'get',
  path: '/law/{congress}',
  tags: ['bill'],
  summary: 'Returns a list of laws filtered by the specified congress.',
  description: 'Returns a list of laws filtered by the specified congress.',
  operationId: 'getLawsByCongress',
  request: {
    params: z.object({ congress: CongressParamsSchema }),
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: LawSchema },
        'application/xml': { schema: LawSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getLawCongressLawTypeRoute = createRoute({
  method: 'get',
  path: '/law/{congress}/{lawType}',
  tags: ['bill'],
  summary:
    'Returns a list of laws filtered by specified congress and law type (public or private).',
  description:
    'Returns a list of laws filtered by specified congress and law type (public or private).',
  operationId: 'getLawsByCongressAndLawType',
  request: {
    params: z.object({ congress: CongressParamsSchema, lawType: LawTypeParamsSchema }),
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: LawSchema },
        'application/xml': { schema: LawSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getLawCongressLawTypeLawNumberRoute = createRoute({
  method: 'get',
  path: '/law/{congress}/{lawType}/{lawNumber}',
  tags: ['bill'],
  summary:
    'Returns a law filtered by specified congress, law type (public or private), and law number.',
  description:
    'Returns a law filtered by specified congress, law type (public or private), and law number.',
  operationId: 'getLaw',
  request: {
    params: z.object({
      congress: CongressParamsSchema,
      lawType: LawTypeParamsSchema,
      lawNumber: LawNumberParamsSchema,
    }),
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: LawNumberSchema },
        'application/xml': { schema: LawNumberSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getAmendmentRoute = createRoute({
  method: 'get',
  path: '/amendment',
  tags: ['amendments'],
  summary: 'Returns a list of amendments sorted by date of latest action.',
  description: 'Returns a list of amendments sorted by date of latest action.',
  operationId: 'getAmendments',
  request: {
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
      fromDateTime: FromDateTimeParamsSchema,
      toDateTime: ToDateTimeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: AmendmentSchema },
        'application/xml': { schema: AmendmentSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getAmendmentCongressRoute = createRoute({
  method: 'get',
  path: '/amendment/{congress}',
  tags: ['amendments'],
  summary:
    'Returns a list of amendments filtered by the specified congress, sorted by date of latest action.',
  description:
    'Returns a list of amendments filtered by the specified congress, sorted by date of latest action.',
  operationId: 'getAmendmentsByCongress',
  request: {
    params: z.object({ congress: CongressParamsSchema }),
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
      fromDateTime: FromDateTimeParamsSchema,
      toDateTime: ToDateTimeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: AmendmentSchema },
        'application/xml': { schema: AmendmentSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getAmendmentCongressAmendmentTypeRoute = createRoute({
  method: 'get',
  path: '/amendment/{congress}/{amendmentType}',
  tags: ['amendments'],
  summary:
    'Returns a list of amendments filtered by the specified congress and amendment type, sorted by date of latest action.',
  description:
    'Returns a list of amendments filtered by the specified congress and amendment type, sorted by date of latest action.',
  operationId: 'getAmendmentsByCongressAndType',
  request: {
    params: z.object({ congress: CongressParamsSchema, amendmentType: AmendmentTypeParamsSchema }),
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
      fromDateTime: FromDateTimeParamsSchema,
      toDateTime: ToDateTimeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: AmendmentSchema },
        'application/xml': { schema: AmendmentSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getAmendmentCongressAmendmentTypeAmendmentNumberRoute = createRoute({
  method: 'get',
  path: '/amendment/{congress}/{amendmentType}/{amendmentNumber}',
  tags: ['amendments'],
  summary: 'Returns detailed information for a specified amendment.',
  description: 'Returns detailed information for a specified amendment.',
  operationId: 'getAmendment',
  request: {
    params: z.object({
      congress: CongressParamsSchema,
      amendmentType: AmendmentTypeParamsSchema,
      amendmentNumber: AmendmentNumberParamsSchema,
    }),
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
      fromDateTime: FromDateTimeParamsSchema,
      toDateTime: ToDateTimeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: AmendmentNumberSchema },
        'application/xml': { schema: AmendmentNumberSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getAmendmentCongressAmendmentTypeAmendmentNumberActionsRoute = createRoute({
  method: 'get',
  path: '/amendment/{congress}/{amendmentType}/{amendmentNumber}/actions',
  tags: ['amendments'],
  summary: 'Returns the list of actions on a specified amendment.',
  description: 'Returns the list of actions on a specified amendment.',
  operationId: 'getAmendmentActions',
  request: {
    params: z.object({
      congress: CongressParamsSchema,
      amendmentType: AmendmentTypeParamsSchema,
      amendmentNumber: AmendmentNumberParamsSchema,
    }),
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: AmendmentActions2Schema },
        'application/xml': { schema: AmendmentActions2Schema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getAmendmentCongressAmendmentTypeAmendmentNumberCosponsorsRoute = createRoute({
  method: 'get',
  path: '/amendment/{congress}/{amendmentType}/{amendmentNumber}/cosponsors',
  tags: ['amendments'],
  summary: 'Returns the list of cosponsors on a specified amendment.',
  description: 'Returns the list of cosponsors on a specified amendment.',
  operationId: 'getAmendmentCosponsors',
  request: {
    params: z.object({
      congress: CongressParamsSchema,
      amendmentType: AmendmentTypeParamsSchema,
      amendmentNumber: AmendmentNumberParamsSchema,
    }),
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: AmendmentCosponsorsSchema },
        'application/xml': { schema: AmendmentCosponsorsSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getAmendmentCongressAmendmentTypeAmendmentNumberAmendmentsRoute = createRoute({
  method: 'get',
  path: '/amendment/{congress}/{amendmentType}/{amendmentNumber}/amendments',
  tags: ['amendments'],
  summary: 'Returns the list of amendments to a specified amendment.',
  description: 'Returns the list of amendments to a specified amendment.',
  operationId: 'getAmendmentAmendments',
  request: {
    params: z.object({
      congress: CongressParamsSchema,
      amendmentType: AmendmentTypeParamsSchema,
      amendmentNumber: AmendmentNumberParamsSchema,
    }),
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: AmendmentAmendmentsSchema },
        'application/xml': { schema: AmendmentAmendmentsSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getAmendmentCongressAmendmentTypeAmendmentNumberTextRoute = createRoute({
  method: 'get',
  path: '/amendment/{congress}/{amendmentType}/{amendmentNumber}/text',
  tags: ['amendments'],
  summary:
    'Returns the list of text versions for a specified amendment from the 117th Congress onwards.',
  description:
    'Returns the list of text versions for a specified amendment from the 117th Congress onwards.',
  operationId: 'geAmendmentTexts',
  request: {
    params: z.object({
      congress: CongressParamsSchema,
      amendmentType: AmendmentTypeParamsSchema,
      amendmentNumber: AmendmentNumberParamsSchema,
    }),
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: AmendmentTextSchema },
        'application/xml': { schema: AmendmentTextSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getSummariesRoute = createRoute({
  method: 'get',
  path: '/summaries',
  tags: ['summaries'],
  summary: 'Returns a list of summaries sorted by date of last update.',
  description: 'Returns a list of summaries sorted by date of last update.',
  operationId: 'getSummaries',
  request: {
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
      fromDateTime: FromDateTimeParamsSchema,
      toDateTime: ToDateTimeParamsSchema,
      sort: SortParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: SummariesSchema },
        'application/xml': { schema: SummariesSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getSummariesCongressRoute = createRoute({
  method: 'get',
  path: '/summaries/{congress}',
  tags: ['summaries'],
  summary: 'Returns a list of summaries filtered by congress, sorted by date of last update.',
  description: 'Returns a list of summaries filtered by congress, sorted by date of last update.',
  operationId: 'getSummariesByCongress',
  request: {
    params: z.object({ congress: CongressParamsSchema }),
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
      fromDateTime: FromDateTimeParamsSchema,
      toDateTime: ToDateTimeParamsSchema,
      sort: SortParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: SummariesSchema },
        'application/xml': { schema: SummariesSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getSummariesCongressBillTypeRoute = createRoute({
  method: 'get',
  path: '/summaries/{congress}/{billType}',
  tags: ['summaries'],
  summary:
    'Returns a list of summaries filtered by congress and by bill type, sorted by date of last update.',
  description:
    'Returns a list of summaries filtered by congress and by bill type, sorted by date of last update.',
  operationId: 'getSummariesByCongressAndBillType',
  request: {
    params: z.object({ congress: CongressParamsSchema, billType: BillTypeParamsSchema }),
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
      fromDateTime: FromDateTimeParamsSchema,
      toDateTime: ToDateTimeParamsSchema,
      sort: SortParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: SummariesSchema },
        'application/xml': { schema: SummariesSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getCongressRoute = createRoute({
  method: 'get',
  path: '/congress',
  tags: ['congress'],
  summary: 'Returns a list of congresses and congressional sessions.',
  description: 'Returns a list of congresses and congressional sessions.',
  operationId: 'getCongresses',
  request: {
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: CongressesSchema },
        'application/xml': { schema: CongressesSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getCongressCongressRoute = createRoute({
  method: 'get',
  path: '/congress/{congress}',
  tags: ['congress'],
  summary: 'Returns a list of congresses and congressional sessions.',
  description: 'Returns a list of congresses and congressional sessions.',
  operationId: 'getCongressByNumber',
  request: {
    params: z.object({ congress: CongressParamsSchema }),
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: CongressesSchema },
        'application/xml': { schema: CongressesSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getCongressCurrentRoute = createRoute({
  method: 'get',
  path: '/congress/current',
  tags: ['congress'],
  summary: 'Returns a list of congresses and congressional sessions.',
  description: 'Returns a list of congresses and congressional sessions.',
  operationId: 'getCurrentCongress',
  request: {
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: CongressesSchema },
        'application/xml': { schema: CongressesSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getMemberRoute = createRoute({
  method: 'get',
  path: '/member',
  tags: ['member'],
  summary: 'Returns a list of congressional members.',
  description: 'Returns a list of congressional members.',
  operationId: 'getMembers',
  request: {
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
      fromDateTime: FromDateTimeParamsSchema,
      toDateTime: ToDateTimeParamsSchema,
      currentMember: CurrentMemberParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: MembersSchema },
        'application/xml': { schema: MembersSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getMemberBioguideIdRoute = createRoute({
  method: 'get',
  path: '/member/{bioguideId}',
  tags: ['member'],
  summary: 'Returns detailed information for a specified congressional member.',
  description: 'Returns detailed information for a specified congressional member.',
  operationId: 'getMemberByBioguideId',
  request: {
    params: z.object({ bioguideId: BioguideIdParamsSchema }),
    query: z.object({ format: FormatParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: MemberSchema },
        'application/xml': { schema: MemberSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getMemberBioguideIdSponsoredLegislationRoute = createRoute({
  method: 'get',
  path: '/member/{bioguideId}/sponsored-legislation',
  tags: ['member'],
  summary: 'Returns the list of legislation sponsored by a specified congressional member.',
  description: 'Returns the list of legislation sponsored by a specified congressional member.',
  operationId: 'getMemberSponsoredLegislation',
  request: {
    params: z.object({ bioguideId: BioguideIdParamsSchema }),
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: MemberSponsoredLegislationSchema },
        'application/xml': { schema: MemberSponsoredLegislationSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getMemberBioguideIdCosponsoredLegislationRoute = createRoute({
  method: 'get',
  path: '/member/{bioguideId}/cosponsored-legislation',
  tags: ['member'],
  summary: 'Returns the list of legislation cosponsored by a specified congressional member.',
  description: 'Returns the list of legislation cosponsored by a specified congressional member.',
  operationId: 'getMemberCosponsoredLegislation',
  request: {
    params: z.object({ bioguideId: BioguideIdParamsSchema }),
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: MemberSponsoredLegislationSchema },
        'application/xml': { schema: MemberSponsoredLegislationSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getMemberCongressCongressRoute = createRoute({
  method: 'get',
  path: '/member/congress/{congress}',
  tags: ['member'],
  summary: 'Returns the list of members specified by Congress.',
  description: 'Returns the list of members specified by Congress.',
  operationId: 'getMembersByCongressNumber',
  request: {
    params: z.object({ congress: CongressParamsSchema }),
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
      currentMember: CurrentMemberParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: MembersSchema },
        'application/xml': { schema: MembersSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getMemberStateCodeRoute = createRoute({
  method: 'get',
  path: '/member/{stateCode}',
  tags: ['member'],
  summary: 'Returns a list of members filtered by state.',
  description: 'Returns a list of members filtered by state.',
  operationId: 'getMembersByStateCode',
  request: {
    params: z.object({ stateCode: StateCodeParamsSchema }),
    query: z.object({
      format: FormatParamsSchema,
      limit: LimitParamsSchema,
      currentMember: CurrentMemberParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: MembersSchema },
        'application/xml': { schema: MembersSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getMemberStateCodeDistrictRoute = createRoute({
  method: 'get',
  path: '/member/{stateCode}/{district}',
  tags: ['member'],
  summary: 'Returns a list of members filtered by state and district.',
  description: 'Returns a list of members filtered by state and district.',
  operationId: 'getMembersByStateAndDistrict',
  request: {
    params: z.object({ stateCode: StateCodeParamsSchema, district: DistrictParamsSchema }),
    query: z.object({ format: FormatParamsSchema, currentMember: CurrentMemberParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: MembersSchema },
        'application/xml': { schema: MembersSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getMemberCongressCongressStateCodeDistrictRoute = createRoute({
  method: 'get',
  path: '/member/congress/{congress}/{stateCode}/{district}',
  tags: ['member'],
  summary: 'Returns a list of members filtered by congress, state and district.',
  description: 'Returns a list of members filtered by congress, state and district.',
  operationId: 'getMembersByCongressStateAndDistrict',
  request: {
    params: z.object({
      stateCode: StateCodeParamsSchema,
      district: DistrictParamsSchema,
      congress: CongressParamsSchema,
    }),
    query: z.object({ format: FormatParamsSchema, currentMember: CurrentMemberParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: MembersSchema },
        'application/xml': { schema: MembersSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getHouseVoteRoute = createRoute({
  method: 'get',
  path: '/house-vote',
  tags: ['house-vote'],
  summary:
    'Returns House of Representatives roll call vote data from the API. This endpoint is currently in beta.',
  description:
    'Returns House of Representatives roll call vote data from the API. This endpoint is currently in beta.',
  operationId: 'getHouseVotes',
  request: {
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: HouseVoteSchema },
        'application/xml': { schema: HouseVoteSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getHouseVoteCongressRoute = createRoute({
  method: 'get',
  path: '/house-vote/{congress}',
  tags: ['house-vote'],
  summary:
    'Returns House of Representatives roll call vote data from the API filtered by the specified Congress. This endpoint is currently in beta.',
  description:
    'Returns House of Representatives roll call vote data from the API filtered by the specified Congress. This endpoint is currently in beta.',
  operationId: 'getHouseVotesByCongress',
  request: {
    params: z.object({ congress: CongressParamsSchema }),
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: HouseVoteSchema },
        'application/xml': { schema: HouseVoteSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getHouseVoteCongressSessionRoute = createRoute({
  method: 'get',
  path: '/house-vote/{congress}/{session}',
  tags: ['house-vote'],
  summary:
    'Returns House of Representatives roll call vote data from the API filtered by the specified Congress and session. This endpoint is currently in beta.',
  description:
    'Returns House of Representatives roll call vote data from the API filtered by the specified Congress and session. This endpoint is currently in beta.',
  operationId: 'getHouseVotesByCongressAndSession',
  request: {
    params: z.object({ congress: CongressParamsSchema, session: SessionParamsSchema }),
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: HouseVoteSchema },
        'application/xml': { schema: HouseVoteSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getHouseVoteCongressSessionVoteNumberRoute = createRoute({
  method: 'get',
  path: '/house-vote/{congress}/{session}/{voteNumber}',
  tags: ['house-vote'],
  summary:
    'Returns detailed information for a specified House of Representatives roll call vote. This endpoint is currently in beta.',
  description:
    'Returns detailed information for a specified House of Representatives roll call vote. This endpoint is currently in beta.',
  operationId: 'getHouseVoteByCongressSessionAndVoteNumber',
  request: {
    params: z.object({
      congress: CongressParamsSchema,
      session: SessionParamsSchema,
      voteNumber: VoteNumberParamsSchema,
    }),
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: HouseVoteNumberSchema },
        'application/xml': { schema: HouseVoteNumberSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getHouseVoteCongressSessionVoteNumberMembersRoute = createRoute({
  method: 'get',
  path: '/house-vote/{congress}/{session}/{voteNumber}/members',
  tags: ['house-vote'],
  summary:
    'Returns detailed information for how members voted on a specified House of Representatives roll call vote. This endpoint is currently in beta.',
  description:
    'Returns detailed information for how members voted on a specified House of Representatives roll call vote. This endpoint is currently in beta.',
  operationId: 'getHouseVoteMemberVotes',
  request: {
    params: z.object({
      congress: CongressParamsSchema,
      session: SessionParamsSchema,
      voteNumber: VoteNumberParamsSchema,
    }),
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: HouseVoteMembersSchema },
        'application/xml': { schema: HouseVoteMembersSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getCommitteeRoute = createRoute({
  method: 'get',
  path: '/committee',
  tags: ['committee'],
  summary: 'Returns a list of congressional committees.',
  description: 'Returns a list of congressional committees.',
  operationId: 'getCommittees',
  request: {
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
      fromDateTime: FromDateTimeParamsSchema,
      toDateTime: ToDateTimeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: CommitteesSchema },
        'application/xml': { schema: CommitteesSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getCommitteeChamberRoute = createRoute({
  method: 'get',
  path: '/committee/{chamber}',
  tags: ['committee'],
  summary: 'Returns a list of congressional committees filtered by the specified chamber.',
  description: 'Returns a list of congressional committees filtered by the specified chamber.',
  operationId: 'getCommitteesByChamber',
  request: {
    params: z.object({ chamber: ChamberParamsSchema }),
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
      fromDateTime: FromDateTimeParamsSchema,
      toDateTime: ToDateTimeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: CommitteesSchema },
        'application/xml': { schema: CommitteesSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getCommitteeCongressRoute = createRoute({
  method: 'get',
  path: '/committee/{congress}',
  tags: ['committee'],
  summary: 'Returns a list of congressional committees filtered by the specified congress.',
  description: 'Returns a list of congressional committees filtered by the specified congress.',
  operationId: 'getCommitteesByCongress',
  request: {
    params: z.object({ congress: CongressParamsSchema }),
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
      fromDateTime: FromDateTimeParamsSchema,
      toDateTime: ToDateTimeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: CommitteesSchema },
        'application/xml': { schema: CommitteesSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getCommitteeCongressChamberRoute = createRoute({
  method: 'get',
  path: '/committee/{congress}/{chamber}',
  tags: ['committee'],
  summary:
    'Returns a list of congressional committees filtered by the specified congress and chamber.',
  description:
    'Returns a list of congressional committees filtered by the specified congress and chamber.',
  operationId: 'getCommitteesByCongressAndChamber',
  request: {
    params: z.object({ congress: CongressParamsSchema, chamber: ChamberParamsSchema }),
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
      fromDateTime: FromDateTimeParamsSchema,
      toDateTime: ToDateTimeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: CommitteesSchema },
        'application/xml': { schema: CommitteesSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getCommitteeChamberCommitteeCodeRoute = createRoute({
  method: 'get',
  path: '/committee/{chamber}/{committeeCode}',
  tags: ['committee'],
  summary: 'Returns detailed information for a specified congressional committee.',
  description: 'Returns detailed information for a specified congressional committee.',
  operationId: 'getCommitteeByChamberAndCode',
  request: {
    params: z.object({ chamber: ChamberParamsSchema, committeeCode: CommitteeCodeParamsSchema }),
    query: z.object({ format: FormatParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: CommitteeDetailSchema },
        'application/xml': { schema: CommitteeDetailSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getCommitteeCongressChamberCommitteeCodeRoute = createRoute({
  method: 'get',
  path: '/committee/{congress}/{chamber}/{committeeCode}',
  tags: ['committee'],
  summary:
    'Returns detailed information for a specified congressional committee filtered by the specified Congress.',
  description:
    'Returns detailed information for a specified congressional committee filtered by the specified Congress.',
  operationId: 'getCommitteeByCongressChamberAndCode',
  request: {
    params: z.object({
      congress: CongressParamsSchema,
      chamber: ChamberParamsSchema,
      committeeCode: CommitteeCodeParamsSchema,
    }),
    query: z.object({ format: FormatParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: CommitteeDetailSchema },
        'application/xml': { schema: CommitteeDetailSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getCommitteeChamberCommitteeCodeBillsRoute = createRoute({
  method: 'get',
  path: '/committee/{chamber}/{committeeCode}/bills',
  tags: ['committee'],
  summary: 'Returns the list of legislation associated with the specified congressional committee.',
  description:
    'Returns the list of legislation associated with the specified congressional committee.',
  operationId: 'getCommitteeBills',
  request: {
    params: z.object({ chamber: ChamberParamsSchema, committeeCode: CommitteeCodeParamsSchema }),
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
      fromDateTime: FromDateTimeParamsSchema,
      toDateTime: ToDateTimeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: CommitteeBillsSchema },
        'application/xml': { schema: CommitteeBillsSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getCommitteeChamberCommitteeCodeReportsRoute = createRoute({
  method: 'get',
  path: '/committee/{chamber}/{committeeCode}/reports',
  tags: ['committee'],
  summary:
    'Returns the list of committee reports associated with a specified congressional committee.',
  description:
    'Returns the list of committee reports associated with a specified congressional committee.',
  operationId: 'getCommitteeReportsByCommittee',
  request: {
    params: z.object({ chamber: ChamberParamsSchema, committeeCode: CommitteeCodeParamsSchema }),
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
      fromDateTime: FromDateTimeParamsSchema,
      toDateTime: ToDateTimeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: CommitteeReports2Schema },
        'application/xml': { schema: CommitteeReports2Schema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getCommitteeChamberCommitteeCodeNominationsRoute = createRoute({
  method: 'get',
  path: '/committee/{chamber}/{committeeCode}/nominations',
  tags: ['committee'],
  summary: 'Returns the list of nominations associated with a specified congressional committee.',
  description:
    'Returns the list of nominations associated with a specified congressional committee.',
  operationId: 'getCommitteeNominations',
  request: {
    params: z.object({ chamber: ChamberParamsSchema, committeeCode: CommitteeCodeParamsSchema }),
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: CommitteeNominations2Schema },
        'application/xml': { schema: CommitteeNominations2Schema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getCommitteeChamberCommitteeCodeHouseCommunicationRoute = createRoute({
  method: 'get',
  path: '/committee/{chamber}/{committeeCode}/house-communication',
  tags: ['committee'],
  summary:
    'Returns the list of House communications associated with a specified congressional committee.',
  description:
    'Returns the list of House communications associated with a specified congressional committee.',
  operationId: 'getCommitteeHouseCommunications',
  request: {
    params: z.object({
      chamber: HousechamberParamsSchema,
      committeeCode: CommitteeCodeParamsSchema,
    }),
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: CommitteeHouseCommunicationSchema },
        'application/xml': { schema: CommitteeHouseCommunicationSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getCommitteeChamberCommitteeCodeSenateCommunicationRoute = createRoute({
  method: 'get',
  path: '/committee/{chamber}/{committeeCode}/senate-communication',
  tags: ['committee'],
  summary:
    'Returns the list of Senate communications associated with a specified congressional committee.',
  description:
    'Returns the list of Senate communications associated with a specified congressional committee.',
  operationId: 'getCommitteeSenateCommunications',
  request: {
    params: z.object({
      chamber: SenatechamberParamsSchema,
      committeeCode: CommitteeCodeParamsSchema,
    }),
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: CommitteeSenateCommunicationSchema },
        'application/xml': { schema: CommitteeSenateCommunicationSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getCommitteeReportRoute = createRoute({
  method: 'get',
  path: '/committee-report',
  tags: ['committee-report'],
  summary: 'Returns the list of committee reports.',
  description: 'Returns the list of committee reports.',
  operationId: 'getCommitteeReports',
  request: {
    query: z.object({
      format: FormatParamsSchema,
      conference: ConferenceParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
      fromDateTime: FromDateTimeParamsSchema,
      toDateTime: ToDateTimeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: CommitteeReports2Schema },
        'application/xml': { schema: CommitteeReports2Schema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getCommitteeReportCongressRoute = createRoute({
  method: 'get',
  path: '/committee-report/{congress}',
  tags: ['committee-report'],
  summary: 'Returns the list of committee reports filtered by specified congress.',
  description: 'Returns the list of committee reports filtered by specified congress.',
  operationId: 'getCommitteeReportByCongress',
  request: {
    params: z.object({ congress: CongressParamsSchema }),
    query: z.object({
      format: FormatParamsSchema,
      conference: ConferenceParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
      fromDateTime: FromDateTimeParamsSchema,
      toDateTime: ToDateTimeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: CommitteeReports2Schema },
        'application/xml': { schema: CommitteeReports2Schema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getCommitteeReportCongressReportTypeRoute = createRoute({
  method: 'get',
  path: '/committee-report/{congress}/{reportType}',
  tags: ['committee-report'],
  summary: 'Returns the list of committee reports filtered by specified congress and report type.',
  description:
    'Returns the list of committee reports filtered by specified congress and report type.',
  operationId: 'getCommitteeReportsByCongressAndType',
  request: {
    params: z.object({ congress: CongressParamsSchema, reportType: ReportTypeParamsSchema }),
    query: z.object({
      format: FormatParamsSchema,
      conference: ConferenceParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
      fromDateTime: FromDateTimeParamsSchema,
      toDateTime: ToDateTimeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: CommitteeReports2Schema },
        'application/xml': { schema: CommitteeReports2Schema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getCommitteeReportCongressReportTypeReportNumberRoute = createRoute({
  method: 'get',
  path: '/committee-report/{congress}/{reportType}/{reportNumber}',
  tags: ['committee-report'],
  summary: 'Returns detailed information for a specified committee report.',
  description: 'Returns detailed information for a specified committee report.',
  operationId: 'getCommitteeReportByCongressTypeAndNumber',
  request: {
    params: z.object({
      congress: CongressParamsSchema,
      reportType: ReportTypeParamsSchema,
      reportNumber: ReportNumberParamsSchema,
    }),
    query: z.object({ format: FormatParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: CommitteeReportsNumberSchema },
        'application/xml': { schema: CommitteeReportsNumberSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getCommitteeReportCongressReportTypeReportNumberTextRoute = createRoute({
  method: 'get',
  path: '/committee-report/{congress}/{reportType}/{reportNumber}/text',
  tags: ['committee-report'],
  summary: 'Returns the list of texts for a specified committee report.',
  description: 'Returns the list of texts for a specified committee report.',
  operationId: 'getCommitteeReportText',
  request: {
    params: z.object({
      congress: CongressParamsSchema,
      reportType: ReportTypeParamsSchema,
      reportNumber: ReportNumberParamsSchema,
    }),
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: CommitteeReportsTextSchema },
        'application/xml': { schema: CommitteeReportsTextSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getCommitteePrintRoute = createRoute({
  method: 'get',
  path: '/committee-print',
  tags: ['committee-print'],
  summary: 'Returns a list of committee prints.',
  description: 'Returns a list of committee prints.',
  operationId: 'getCommitteePrints',
  request: {
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
      fromDateTime: FromDateTimeParamsSchema,
      toDateTime: ToDateTimeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: CommitteePrintSchema },
        'application/xml': { schema: CommitteePrintSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getCommitteePrintCongressRoute = createRoute({
  method: 'get',
  path: '/committee-print/{congress}',
  tags: ['committee-print'],
  summary: 'Returns a list of committee prints filtered by the specified congress.',
  description: 'Returns a list of committee prints filtered by the specified congress.',
  operationId: 'getCommitteePrintsByCongress',
  request: {
    params: z.object({ congress: CongressParamsSchema }),
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
      fromDateTime: FromDateTimeParamsSchema,
      toDateTime: ToDateTimeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: CommitteePrintSchema },
        'application/xml': { schema: CommitteePrintSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getCommitteePrintCongressChamberRoute = createRoute({
  method: 'get',
  path: '/committee-print/{congress}/{chamber}',
  tags: ['committee-print'],
  summary: 'Returns a list of committee prints filtered by the specified congress and chamber.',
  description: 'Returns a list of committee prints filtered by the specified congress and chamber.',
  operationId: 'getCommitteePrintsByCongressAndChamber',
  request: {
    params: z.object({ congress: CongressParamsSchema, chamber: ChamberParamsSchema }),
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
      fromDateTime: FromDateTimeParamsSchema,
      toDateTime: ToDateTimeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: CommitteePrintSchema },
        'application/xml': { schema: CommitteePrintSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getCommitteePrintCongressChamberJacketNumberRoute = createRoute({
  method: 'get',
  path: '/committee-print/{congress}/{chamber}/{jacketNumber}',
  tags: ['committee-print'],
  summary: 'Returns detailed information for a specified committee print.',
  description: 'Returns detailed information for a specified committee print.',
  operationId: 'getCommitteePrintByCongressChamberAndJacketNumber',
  request: {
    params: z.object({
      congress: CongressParamsSchema,
      chamber: ChamberParamsSchema,
      jacketNumber: JacketNumberParamsSchema,
    }),
    query: z.object({ format: FormatParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: CommitteePrintDetailSchema },
        'application/xml': { schema: CommitteePrintDetailSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getCommitteePrintCongressChamberJacketNumberTextRoute = createRoute({
  method: 'get',
  path: '/committee-print/{congress}/{chamber}/{jacketNumber}/text',
  tags: ['committee-print'],
  summary: 'Returns the list of texts for a specified committee print.',
  description: 'Returns the list of texts for a specified committee print.',
  operationId: 'getCommitteePrintText',
  request: {
    params: z.object({
      congress: CongressParamsSchema,
      chamber: ChamberParamsSchema,
      jacketNumber: JacketNumberParamsSchema,
    }),
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: CommitteePrintDetailTextSchema },
        'application/xml': { schema: CommitteePrintDetailTextSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getCommitteeMeetingRoute = createRoute({
  method: 'get',
  path: '/committee-meeting',
  tags: ['committee-meeting'],
  summary: 'Returns a list of committee meetings.',
  description: 'Returns a list of committee meetings.',
  operationId: 'getCommitteeMeetings',
  request: {
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
      fromDateTime: FromDateTimeParamsSchema,
      toDateTime: ToDateTimeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: CommitteeMeetingSchema },
        'application/xml': { schema: CommitteeMeetingSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getCommitteeMeetingCongressRoute = createRoute({
  method: 'get',
  path: '/committee-meeting/{congress}',
  tags: ['committee-meeting'],
  summary: 'Returns a list of committee meetings filtered by the specified congress.',
  description: 'Returns a list of committee meetings filtered by the specified congress.',
  operationId: 'getCommitteeMeetingsByCongress',
  request: {
    params: z.object({ congress: CongressParamsSchema }),
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
      fromDateTime: FromDateTimeParamsSchema,
      toDateTime: ToDateTimeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: CommitteeMeetingSchema },
        'application/xml': { schema: CommitteeMeetingSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getCommitteeMeetingCongressChamberRoute = createRoute({
  method: 'get',
  path: '/committee-meeting/{congress}/{chamber}',
  tags: ['committee-meeting'],
  summary: 'Returns a list of committee meetings filtered by the specified congress and chamber.',
  description:
    'Returns a list of committee meetings filtered by the specified congress and chamber.',
  operationId: 'getCommitteeMeetingsByCongressAndChamber',
  request: {
    params: z.object({ congress: CongressParamsSchema, chamber: ChamberParamsSchema }),
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
      fromDateTime: FromDateTimeParamsSchema,
      toDateTime: ToDateTimeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: CommitteeMeetingSchema },
        'application/xml': { schema: CommitteeMeetingSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getCommitteeMeetingCongressChamberEventIdRoute = createRoute({
  method: 'get',
  path: '/committee-meeting/{congress}/{chamber}/{eventId}',
  tags: ['committee-meeting'],
  summary: 'Returns detailed information for a specified committee meeting.',
  description: 'Returns detailed information for a specified committee meeting.',
  operationId: 'getCommitteeMeetingByCongressChamberAndEventId',
  request: {
    params: z.object({
      congress: CongressParamsSchema,
      chamber: ChamberParamsSchema,
      eventId: EventIdParamsSchema,
    }),
    query: z.object({ format: FormatParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: CommitteeMeetingDetailSchema },
        'application/xml': { schema: CommitteeMeetingDetailSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getHearingRoute = createRoute({
  method: 'get',
  path: '/hearing',
  tags: ['hearing'],
  summary: 'Returns a list of hearings.',
  description: 'Returns a list of hearings.',
  operationId: 'getHearings',
  request: {
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: HearingsSchema },
        'application/xml': { schema: HearingsSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getHearingCongressRoute = createRoute({
  method: 'get',
  path: '/hearing/{congress}',
  tags: ['hearing'],
  summary: 'Returns a list of hearings filtered by specified congress.',
  description: 'Returns a list of hearings filtered by specified congress.',
  operationId: 'getHearingsByCongress',
  request: {
    params: z.object({ congress: CongressParamsSchema }),
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: HearingsSchema },
        'application/xml': { schema: HearingsSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getHearingCongressChamberRoute = createRoute({
  method: 'get',
  path: '/hearing/{congress}/{chamber}',
  tags: ['hearing'],
  summary: 'Returns a list of hearings filtered by specified congress and chamber.',
  description: 'Returns a list of hearings filtered by specified congress and chamber.',
  operationId: 'getHearingsByCongressAndChamber',
  request: {
    params: z.object({ congress: CongressParamsSchema, chamber: ChamberParamsSchema }),
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: HearingsSchema },
        'application/xml': { schema: HearingsSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getHearingCongressChamberJacketNumberRoute = createRoute({
  method: 'get',
  path: '/hearing/{congress}/{chamber}/{jacketNumber}',
  tags: ['hearing'],
  summary: 'Returns detailed information for a specified hearing.',
  description: 'Returns detailed information for a specified hearing.',
  operationId: 'getHearingByCongressChamberAndJacketNumber',
  request: {
    params: z.object({
      congress: CongressParamsSchema,
      chamber: ChamberParamsSchema,
      jacketNumber: JacketNumberParamsSchema,
    }),
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: HearingDetailSchema },
        'application/xml': { schema: HearingDetailSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getCongressionalRecordRoute = createRoute({
  method: 'get',
  path: '/congressional-record',
  tags: ['congressional-record'],
  summary: 'Returns a list of congressional record issues sorted by most recent.',
  description: 'Returns a list of congressional record issues sorted by most recent.',
  operationId: 'getCongressionalRecords',
  request: {
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
      y: YParamsSchema,
      m: MParamsSchema,
      d: DParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: CongressionalRecordSchema },
        'application/xml': { schema: CongressionalRecordSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getDailyCongressionalRecordRoute = createRoute({
  method: 'get',
  path: '/daily-congressional-record',
  tags: ['daily-congressional-record'],
  summary: 'Returns a list of daily congressional record issues sorted by most recent.',
  description: 'Returns a list of daily congressional record issues sorted by most recent.',
  operationId: 'getDailyCongressionalRecords',
  request: {
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: DailyCongressionalRecord2Schema },
        'application/xml': { schema: DailyCongressionalRecord2Schema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getDailyCongressionalRecordVolumeNumberRoute = createRoute({
  method: 'get',
  path: '/daily-congressional-record/{volumeNumber}',
  tags: ['daily-congressional-record'],
  summary: 'Returns a list of daily Congressional Records filtered by the specified volume number.',
  description:
    'Returns a list of daily Congressional Records filtered by the specified volume number.',
  operationId: 'getDailyCongressionalRecordsByVolumeNumber',
  request: {
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
    }),
    params: z.object({ volumeNumber: VolumeNumberParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: DailyCongressionalRecord2Schema },
        'application/xml': { schema: DailyCongressionalRecord2Schema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getDailyCongressionalRecordVolumeNumberIssueNumberRoute = createRoute({
  method: 'get',
  path: '/daily-congressional-record/{volumeNumber}/{issueNumber}',
  tags: ['daily-congressional-record'],
  summary:
    'Returns a list of daily Congressional Records filtered by the specified volume number and specified issue number.',
  description:
    'Returns a list of daily Congressional Records filtered by the specified volume number and specified issue number.',
  operationId: 'getDailyCongressionalRecordIssue',
  request: {
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
    }),
    params: z.object({
      volumeNumber: VolumeNumberParamsSchema,
      issueNumber: IssueNumberParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: DailyCongressionalRecordIssueSchema },
        'application/xml': { schema: DailyCongressionalRecordIssueSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getDailyCongressionalRecordVolumeNumberIssueNumberArticlesRoute = createRoute({
  method: 'get',
  path: '/daily-congressional-record/{volumeNumber}/{issueNumber}/articles',
  tags: ['daily-congressional-record'],
  summary:
    'Returns a list of daily Congressional Record articles filtered by the specified volume number and specified issue number.',
  description:
    'Returns a list of daily Congressional Record articles filtered by the specified volume number and specified issue number.',
  operationId: 'getDailyCongressionalRecordIssueArticles',
  request: {
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
    }),
    params: z.object({
      volumeNumber: VolumeNumberParamsSchema,
      issueNumber: IssueNumberParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: DailyCongressionalRecordArticlesSchema },
        'application/xml': { schema: DailyCongressionalRecordArticlesSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getBoundCongressionalRecordRoute = createRoute({
  method: 'get',
  path: '/bound-congressional-record',
  tags: ['bound-congressional-record'],
  summary: 'Returns a list of bound congressional records issues sorted by most recent.',
  description: 'Returns a list of bound congressional record issues sorted by most recent.',
  operationId: 'getBoundCongressionalRecords',
  request: {
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: BoundCongressionalRecord2Schema },
        'application/xml': { schema: BoundCongressionalRecord2Schema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getBoundCongressionalRecordYearRoute = createRoute({
  method: 'get',
  path: '/bound-congressional-record/{year}',
  tags: ['bound-congressional-record'],
  summary: 'Returns a list of bound congressional records issues sorted by most recent.',
  description: 'Returns a list of bound congressional record issues sorted by most recent.',
  operationId: 'getBoundCongressionalRecordsByYear',
  request: {
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
    }),
    params: z.object({ year: YearParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: BoundCongressionalRecord2Schema },
        'application/xml': { schema: BoundCongressionalRecord2Schema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getBoundCongressionalRecordYearMonthRoute = createRoute({
  method: 'get',
  path: '/bound-congressional-record/{year}/{month}',
  tags: ['bound-congressional-record'],
  summary: 'Returns a list of bound congressional records issues sorted by most recent.',
  description: 'Returns a list of bound congressional record issues sorted by most recent.',
  operationId: 'getBoundCongressionalRecordsByYearAndMonth',
  request: {
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
    }),
    params: z.object({ year: YearParamsSchema, month: MonthParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: BoundCongressionalRecord2Schema },
        'application/xml': { schema: BoundCongressionalRecord2Schema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getBoundCongressionalRecordYearMonthDayRoute = createRoute({
  method: 'get',
  path: '/bound-congressional-record/{year}/{month}/{day}',
  tags: ['bound-congressional-record'],
  summary: 'Returns a list of bound congressional records issues sorted by most recent.',
  description: 'Returns a list of bound congressional record issues sorted by most recent.',
  operationId: 'getBoundCongressionalRecordsByYearMonthAndDay',
  request: {
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
    }),
    params: z.object({ year: YearParamsSchema, month: MonthParamsSchema, day: DayParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: BoundCongressionalRecord2Schema },
        'application/xml': { schema: BoundCongressionalRecord2Schema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getHouseCommunicationRoute = createRoute({
  method: 'get',
  path: '/house-communication',
  tags: ['house-communication'],
  summary: 'Returns a list of House communications.',
  description: 'Returns a list of House communications.',
  operationId: 'getHouseCommunications',
  request: {
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: HouseCommunicationsSchema },
        'application/xml': { schema: HouseCommunicationsSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getHouseCommunicationCongressRoute = createRoute({
  method: 'get',
  path: '/house-communication/{congress}',
  tags: ['house-communication'],
  summary: 'Returns a list of House communications filtered by the specified congress.',
  description: 'Returns a list of House communications filtered by the specified congress.',
  operationId: 'getHouseCommunicationsByCongress',
  request: {
    params: z.object({ congress: CongressParamsSchema }),
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: HouseCommunicationsSchema },
        'application/xml': { schema: HouseCommunicationsSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getHouseCommunicationCongressCommunicationTypeRoute = createRoute({
  method: 'get',
  path: '/house-communication/{congress}/{communicationType}',
  tags: ['house-communication'],
  summary:
    'Returns a list of House communications filtered by the specified congress and communication type..',
  description:
    'Returns a list of House communications filtered by the specified congress and communication type.',
  operationId: 'getHouseCommunicationsByCongressAndType',
  request: {
    params: z.object({
      congress: CongressParamsSchema,
      communicationType: CommunicationTypeParamsSchema,
    }),
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: HouseCommunicationsSchema },
        'application/xml': { schema: HouseCommunicationsSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getHouseCommunicationCongressCommunicationTypeCommunicationNumberRoute = createRoute({
  method: 'get',
  path: '/house-communication/{congress}/{communicationType}/{communicationNumber}',
  tags: ['house-communication'],
  summary:
    'Returns a list of House communications filtered by the specified congress and communication type..',
  description:
    'Returns a list of House communications filtered by the specified congress and communication type.',
  operationId: 'getHouseCommunicationsByCongressTypeAndNumber',
  request: {
    params: z.object({
      congress: CongressParamsSchema,
      communicationType: CommunicationTypeParamsSchema,
      communicationNumber: CommunicationNumberParamsSchema,
    }),
    query: z.object({ format: FormatParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: HouseCommunicationTypeNumberSchema },
        'application/xml': { schema: HouseCommunicationTypeNumberSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getHouseRequirementRoute = createRoute({
  method: 'get',
  path: '/house-requirement',
  tags: ['house-requirement'],
  summary: 'Returns a list of House requirements.',
  description: 'Returns a list of House requirements.',
  operationId: 'getHouseRequirements',
  request: {
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: HouseRequirementsSchema },
        'application/xml': { schema: HouseRequirementsSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getHouseRequirementRequirementNumberRoute = createRoute({
  method: 'get',
  path: '/house-requirement/{requirementNumber}',
  tags: ['house-requirement'],
  summary: 'Returns detailed information for a specified House requirement.',
  description: 'Returns detailed information for a specified House requirement.',
  operationId: 'getHouseRequirementByNumber',
  request: {
    params: z.object({ requirementNumber: RequirementNumberParamsSchema }),
    query: z.object({ format: FormatParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: HouseRequirement2Schema },
        'application/xml': { schema: HouseRequirement2Schema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getHouseRequirementRequirementNumberMatchingCommunicationsRoute = createRoute({
  method: 'get',
  path: '/house-requirement/{requirementNumber}/matching-communications',
  tags: ['house-requirement'],
  summary: 'Returns a list of matching communications to a House requirement.',
  description: 'Returns a list of matching communications to a House requirement.',
  operationId: 'getHouseRequirementMatchingCommunications',
  request: {
    params: z.object({ requirementNumber: RequirementNumberParamsSchema }),
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: MatchCommunications2Schema },
        'application/xml': { schema: MatchCommunications2Schema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getSenateCommunicationRoute = createRoute({
  method: 'get',
  path: '/senate-communication',
  tags: ['senate-communication'],
  summary: 'Returns a list of Senate communications.',
  description: 'Returns a list of Senate communications.',
  operationId: 'getSenateCommunications',
  request: {
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: SenateCommunicationsSchema },
        'application/xml': { schema: SenateCommunicationsSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getSenateCommunicationCongressRoute = createRoute({
  method: 'get',
  path: '/senate-communication/{congress}',
  tags: ['senate-communication'],
  summary: 'Returns a list of Senate communications filtered by the specified congress.',
  description: 'Returns a list of Senate communications filtered by the specified congress.',
  operationId: 'getSenateCommunicationsByCongress',
  request: {
    params: z.object({ congress: CongressParamsSchema }),
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: SenateCommunicationsSchema },
        'application/xml': { schema: SenateCommunicationsSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getSenateCommunicationCongressCommunicationTypeRoute = createRoute({
  method: 'get',
  path: '/senate-communication/{congress}/{communicationType}',
  tags: ['senate-communication'],
  summary:
    'Returns a list of Senate communications filtered by the specified congress and communication type..',
  description:
    'Returns a list of Senate communications filtered by the specified congress and communication type.',
  operationId: 'getSenateCommunicationsByCongressAndType',
  request: {
    params: z.object({
      congress: CongressParamsSchema,
      communicationType: SenateCommunicationTypeParamsSchema,
    }),
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: SenateCommunicationsSchema },
        'application/xml': { schema: SenateCommunicationsSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getSenateCommunicationCongressCommunicationTypeCommunicationNumberRoute = createRoute({
  method: 'get',
  path: '/senate-communication/{congress}/{communicationType}/{communicationNumber}',
  tags: ['senate-communication'],
  summary:
    'Returns a list of Senate communications filtered by the specified congress and communication type..',
  description:
    'Returns a list of Senate communications filtered by the specified congress and communication type.',
  operationId: 'getSenateCommunicationByCongressTypeAndNumber',
  request: {
    params: z.object({
      congress: CongressParamsSchema,
      communicationType: SenateCommunicationTypeParamsSchema,
      communicationNumber: CommunicationNumberParamsSchema,
    }),
    query: z.object({ format: FormatParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: SenateCommunicationTypeNumberSchema },
        'application/xml': { schema: SenateCommunicationTypeNumberSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getNominationRoute = createRoute({
  method: 'get',
  path: '/nomination',
  tags: ['nomination'],
  summary: 'Returns a list of nominations sorted by date received from the President.',
  description: 'Returns a list of nominations sorted by date received from the President.',
  operationId: 'getNominations',
  request: {
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
      fromDateTime: FromDateTimeParamsSchema,
      toDateTime: ToDateTimeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: NominationsSchema },
        'application/xml': { schema: NominationsSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getNominationCongressRoute = createRoute({
  method: 'get',
  path: '/nomination/{congress}',
  tags: ['nomination'],
  summary:
    'Returns a list of nominations filtered by the specified congress and sorted by date received from the President.',
  description:
    'Returns a list of nominations filtered by the specified congress and sorted by date received from the President.',
  operationId: 'getNominationsByCongress',
  request: {
    params: z.object({ congress: CongressParamsSchema }),
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
      fromDateTime: FromDateTimeParamsSchema,
      toDateTime: ToDateTimeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: NominationsSchema },
        'application/xml': { schema: NominationsSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getNominationCongressNominationNumberRoute = createRoute({
  method: 'get',
  path: '/nomination/{congress}/{nominationNumber}',
  tags: ['nomination'],
  summary: 'Returns detailed information for a specified nomination.',
  description: 'Returns detailed information for a specified nomination.',
  operationId: 'getNominationByCongressAndNumber',
  request: {
    params: z.object({
      congress: CongressParamsSchema,
      nominationNumber: NominationNumberParamsSchema,
    }),
    query: z.object({ format: FormatParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: Nomination2Schema },
        'application/xml': { schema: Nomination2Schema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getNominationCongressNominationNumberOrdinalRoute = createRoute({
  method: 'get',
  path: '/nomination/{congress}/{nominationNumber}/{ordinal}',
  tags: ['nomination'],
  summary: 'Returns the list of nominees for a position within the nomination.',
  description: 'Returns the list of nominees for a position within the nomination.',
  operationId: 'getNomineesForNominationPosition',
  request: {
    params: z.object({
      congress: CongressParamsSchema,
      nominationNumber: NominationNumberParamsSchema,
      ordinal: OrdinalParamsSchema,
    }),
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: NominationNomineeSchema },
        'application/xml': { schema: NominationNomineeSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getNominationCongressNominationNumberActionsRoute = createRoute({
  method: 'get',
  path: '/nomination/{congress}/{nominationNumber}/actions',
  tags: ['nomination'],
  summary: 'Returns the list of actions on a specified nomination.',
  description: 'Returns the list of actions on a specified nomination.',
  operationId: 'getNominationActions',
  request: {
    params: z.object({
      congress: CongressParamsSchema,
      nominationNumber: NominationNumberParamsSchema,
    }),
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: NominationActionsSchema },
        'application/xml': { schema: NominationActionsSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getNominationCongressNominationNumberCommitteesRoute = createRoute({
  method: 'get',
  path: '/nomination/{congress}/{nominationNumber}/committees',
  tags: ['nomination'],
  summary: 'Returns the list of committees associated with a specified nomination.',
  description: 'Returns the list of committees associated with a specified nomination.',
  operationId: 'getNominationCommittees',
  request: {
    params: z.object({
      congress: CongressParamsSchema,
      nominationNumber: NominationNumberParamsSchema,
    }),
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: NominationCommitteesSchema },
        'application/xml': { schema: NominationCommitteesSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getNominationCongressNominationNumberHearingsRoute = createRoute({
  method: 'get',
  path: '/nomination/{congress}/{nominationNumber}/hearings',
  tags: ['nomination'],
  summary: 'Returns the list of printed hearings associated with a specified nomination.',
  description: 'Returns the list of printed associated with a specified nomination.',
  operationId: 'getNominationHearings',
  request: {
    params: z.object({
      congress: CongressParamsSchema,
      nominationNumber: NominationNumberParamsSchema,
    }),
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: NominationHearing2Schema },
        'application/xml': { schema: NominationHearing2Schema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getCrsreportRoute = createRoute({
  method: 'get',
  path: '/crsreport',
  tags: ['crsreport'],
  summary: 'Returns a list of Congressional Research Service (CRS) reports',
  description: 'Returns a list of Congressional Research Service (CRS) reports',
  operationId: 'getCRSReports',
  request: {
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
      fromDateTime: FromDateTimeParamsSchema,
      toDateTime: ToDateTimeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: CrsReportSchema },
        'application/xml': { schema: CrsReportSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getCrsreportReportNumberRoute = createRoute({
  method: 'get',
  path: '/crsreport/{reportNumber}',
  tags: ['crsreport'],
  summary: 'Returns a specific Congressional Research Service (CRS) report',
  description: 'Returns a specific Congressional Research Service (CRS) report',
  operationId: 'getCRSReportByNumber',
  request: {
    params: z.object({ reportNumber: CrsReportNumberParamsSchema }),
    query: z.object({ format: FormatParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: CrsReportDetailSchema },
        'application/xml': { schema: CrsReportDetailSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getTreatyRoute = createRoute({
  method: 'get',
  path: '/treaty',
  tags: ['treaty'],
  summary: 'Returns a list of treaties sorted by date of last update.',
  description: 'Returns a list of treaties sorted by date of last update.',
  operationId: 'getTreaties',
  request: {
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
      fromDateTime: FromDateTimeParamsSchema,
      toDateTime: ToDateTimeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: Treaty2Schema },
        'application/xml': { schema: Treaty2Schema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getTreatyCongressRoute = createRoute({
  method: 'get',
  path: '/treaty/{congress}',
  tags: ['treaty'],
  summary: 'Returns a list of treaties for the specified congress, sorted by date of last update.',
  description:
    'Returns a list of treaties for the specified congress, sorted by date of last update.',
  operationId: 'getTreatiesByCongress',
  request: {
    params: z.object({ congress: CongressParamsSchema }),
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
      fromDateTime: FromDateTimeParamsSchema,
      toDateTime: ToDateTimeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: Treaty2Schema },
        'application/xml': { schema: Treaty2Schema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getTreatyCongressTreatyNumberRoute = createRoute({
  method: 'get',
  path: '/treaty/{congress}/{treatyNumber}',
  tags: ['treaty'],
  summary: 'Returns detailed information for a specified treaty.',
  description: 'Returns detailed information for a specified treaty.',
  operationId: 'getTreatyByCongressAndNumber',
  request: {
    params: z.object({ congress: CongressParamsSchema, treatyNumber: TreatyNumberParamsSchema }),
    query: z.object({ format: FormatParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: TreatyDetailSchema },
        'application/xml': { schema: TreatyDetailSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getTreatyCongressTreatyNumberTreatySuffixRoute = createRoute({
  method: 'get',
  path: '/treaty/{congress}/{treatyNumber}/{treatySuffix}',
  tags: ['treaty'],
  summary: 'Returns detailed information for a specified partitioned treaty.',
  description: 'Returns detailed information for a specified partitioned treaty.',
  operationId: 'getTreatyPartition',
  request: {
    params: z.object({
      congress: CongressParamsSchema,
      treatyNumber: TreatyNumberParamsSchema,
      treatySuffix: TreatySuffixParamsSchema,
    }),
    query: z.object({ format: FormatParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: TreatyDetailSchema },
        'application/xml': { schema: TreatyDetailSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getTreatyCongressTreatyNumberActionsRoute = createRoute({
  method: 'get',
  path: '/treaty/{congress}/{treatyNumber}/actions',
  tags: ['treaty'],
  summary: 'Returns the list of actions on a specified treaty.',
  description: 'Returns the list of actions on a specified treaty.',
  operationId: 'getTreatyActions',
  request: {
    params: z.object({ congress: CongressParamsSchema, treatyNumber: TreatyNumberParamsSchema }),
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: TreatyActionsSchema },
        'application/xml': { schema: TreatyActionsSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getTreatyCongressTreatyNumberTreatySuffixActionsRoute = createRoute({
  method: 'get',
  path: '/treaty/{congress}/{treatyNumber}/{treatySuffix}/actions',
  tags: ['treaty'],
  summary: 'Returns the list of actions on a specified partitioned treaty.',
  description: 'Returns the list of actions on a specified partitioned treaty.',
  operationId: 'getTreatyPartitionActions',
  request: {
    params: z.object({
      congress: CongressParamsSchema,
      treatyNumber: TreatyNumberParamsSchema,
      treatySuffix: TreatySuffixParamsSchema,
    }),
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: TreatyActionsSchema },
        'application/xml': { schema: TreatyActionsSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})

export const getTreatyCongressTreatyNumberCommitteesRoute = createRoute({
  method: 'get',
  path: '/treaty/{congress}/{treatyNumber}/committees',
  tags: ['treaty'],
  summary: 'Returns the list of committees associated with a specified treaty.',
  description: 'Returns the list of committees associated with a specified treaty.',
  operationId: 'getTreatyCommittees',
  request: {
    params: z.object({ congress: CongressParamsSchema, treatyNumber: TreatyNumberParamsSchema }),
    query: z.object({
      format: FormatParamsSchema,
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: TreatyCommitteesSchema },
        'application/xml': { schema: TreatyCommitteesSchema },
      },
    },
    400: { description: 'Invalid status value' },
  },
})
