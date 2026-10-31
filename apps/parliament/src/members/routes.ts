import { createRoute, z } from '@hono/zod-openapi'

type RegisteredInterestType = {
  childInterests?: RegisteredInterestType[] | null
  createdWhen?: string | null
  deletedWhen?: string | null
  id?: number
  interest?: string | null
  isCorrection?: boolean
  lastAmendedWhen?: string | null
}

const GovernmentDepartmentSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    imageUrl: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    url: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GovernmentDepartment')

const AnsweringBodySchema = z
  .strictObject({
    department: GovernmentDepartmentSchema.exactOptional(),
    id: z.int32().exactOptional(),
    name: z.string().nullable().exactOptional(),
    shortName: z.string().nullable().exactOptional(),
    target: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AnsweringBody')

const BiographyExperienceSchema = z
  .strictObject({
    endMonth: z.int32().nullable().exactOptional(),
    endYear: z.int32().nullable().exactOptional(),
    id: z.int32().exactOptional(),
    organisation: z.string().nullable().exactOptional(),
    startMonth: z.int32().nullable().exactOptional(),
    startYear: z.int32().nullable().exactOptional(),
    title: z.string().nullable().exactOptional(),
    type: z.string().nullable().exactOptional(),
    typeId: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BiographyExperience')

const LinkSchema = z
  .strictObject({
    href: z.string().nullable().exactOptional(),
    method: z.string().nullable().exactOptional(),
    rel: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Link')

const BiographyExperienceListItemSchema = z
  .strictObject({
    links: z.array(LinkSchema).nullable().exactOptional(),
    value: z.array(BiographyExperienceSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BiographyExperienceListItem')

const HouseSchema = z.union([z.literal(1), z.literal(2)]).openapi('House')

const BiographyItemSchema = z
  .strictObject({
    additionalInfo: z.string().nullable().exactOptional(),
    additionalInfoLink: z.string().nullable().exactOptional(),
    endDate: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    house: HouseSchema.exactOptional(),
    id: z.int32().exactOptional(),
    name: z.string().nullable().exactOptional(),
    startDate: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BiographyItem')

const MemberStatusSchema = z
  .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)])
  .openapi('MemberStatus')

const HouseMembershipStatusSchema = z
  .strictObject({
    status: MemberStatusSchema.exactOptional(),
    statusDescription: z.string().nullable().exactOptional(),
    statusId: z.int32().nullable().exactOptional(),
    statusIsActive: z.boolean().exactOptional(),
    statusNotes: z.string().nullable().exactOptional(),
    statusStartDate: z.iso.datetime({ offset: true }).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('HouseMembershipStatus')

const HouseMembershipSchema = z
  .strictObject({
    house: HouseSchema.exactOptional(),
    membershipEndDate: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    membershipEndReason: z.string().nullable().exactOptional(),
    membershipEndReasonId: z.int32().nullable().exactOptional(),
    membershipEndReasonNotes: z.string().nullable().exactOptional(),
    membershipFrom: z.string().nullable().exactOptional(),
    membershipFromId: z.int32().nullable().exactOptional(),
    membershipStartDate: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    membershipStatus: HouseMembershipStatusSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('HouseMembership')

const GovernmentTypeSchema = z
  .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)])
  .openapi('GovernmentType')

const PartySchema = z
  .strictObject({
    abbreviation: z.string().nullable().exactOptional(),
    backgroundColour: z.string().nullable().exactOptional(),
    foregroundColour: z.string().nullable().exactOptional(),
    governmentType: GovernmentTypeSchema.exactOptional(),
    id: z.int32().exactOptional(),
    isIndependentParty: z.boolean().exactOptional().openapi({ readOnly: true }),
    isLordsMainParty: z.boolean().exactOptional(),
    isLordsSpiritualParty: z.boolean().exactOptional(),
    name: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Party')

const MemberSchema = z
  .strictObject({
    gender: z.string().nullable().exactOptional(),
    id: z.int32().exactOptional(),
    latestHouseMembership: HouseMembershipSchema.exactOptional(),
    latestParty: PartySchema.exactOptional(),
    nameAddressAs: z.string().nullable().exactOptional(),
    nameDisplayAs: z.string().nullable().exactOptional(),
    nameFullTitle: z.string().nullable().exactOptional(),
    nameListAs: z.string().nullable().exactOptional(),
    thumbnailUrl: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Member')

const MemberItemSchema = z
  .strictObject({
    links: z.array(LinkSchema).nullable().exactOptional(),
    value: MemberSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MemberItem')

const ConstituencyRepresentationSchema = z
  .strictObject({
    member: MemberItemSchema.exactOptional(),
    representation: HouseMembershipSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ConstituencyRepresentation')

const ConstituencySchema = z
  .strictObject({
    currentRepresentation: ConstituencyRepresentationSchema.exactOptional(),
    endDate: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    id: z.int32().exactOptional(),
    name: z.string().nullable().exactOptional(),
    startDate: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Constituency')

const ConstituencyItemSchema = z
  .strictObject({
    links: z.array(LinkSchema).nullable().exactOptional(),
    value: ConstituencySchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ConstituencyItem')

const ConstituencyMembersServiceSearchResultSchema = z
  .strictObject({
    items: z.array(ConstituencyItemSchema).nullable().exactOptional(),
    links: z.array(LinkSchema).nullable().exactOptional(),
    resultContext: z.string().nullable().exactOptional(),
    skip: z.int32().exactOptional(),
    take: z.int32().exactOptional(),
    totalResults: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ConstituencyMembersServiceSearchResult')

const ConstituencyRepresentationListItemSchema = z
  .strictObject({
    links: z.array(LinkSchema).nullable().exactOptional(),
    value: z.array(ConstituencyRepresentationSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ConstituencyRepresentationListItem')

const ContactInformationSchema = z
  .strictObject({
    email: z.string().nullable().exactOptional(),
    fax: z.string().nullable().exactOptional(),
    isPreferred: z.boolean().exactOptional(),
    isWebAddress: z.boolean().exactOptional(),
    line1: z.string().nullable().exactOptional(),
    line2: z.string().nullable().exactOptional(),
    line3: z.string().nullable().exactOptional(),
    line4: z.string().nullable().exactOptional(),
    line5: z.string().nullable().exactOptional(),
    notes: z.string().nullable().exactOptional(),
    phone: z.string().nullable().exactOptional(),
    postcode: z.string().nullable().exactOptional(),
    type: z.string().nullable().exactOptional(),
    typeDescription: z.string().nullable().exactOptional(),
    typeId: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ContactInformation')

const ContactInformationListItemSchema = z
  .strictObject({
    links: z.array(LinkSchema).nullable().exactOptional(),
    value: z.array(ContactInformationSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ContactInformationListItem')

const DebateContributionSchema = z
  .strictObject({
    answerCount: z.int32().exactOptional(),
    debateId: z.int32().exactOptional(),
    debateTitle: z.string().nullable().exactOptional(),
    debateWebsiteId: z.string().nullable().exactOptional(),
    firstTimecode: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    house: z.string().nullable().exactOptional(),
    interventionCount: z.int32().exactOptional(),
    pointsOfOrderCount: z.int32().exactOptional(),
    questionCount: z.int32().exactOptional(),
    section: z.string().nullable().exactOptional(),
    sittingDate: z.iso.datetime({ offset: true }).exactOptional(),
    speechCount: z.int32().exactOptional(),
    statementsCount: z.int32().exactOptional(),
    supplementaryQuestionCount: z.int32().exactOptional(),
    totalContributions: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DebateContribution')

const DebateContributionItemSchema = z
  .strictObject({
    links: z.array(LinkSchema).nullable().exactOptional(),
    value: DebateContributionSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DebateContributionItem')

const DebateContributionMembersServiceSearchResultSchema = z
  .strictObject({
    items: z.array(DebateContributionItemSchema).nullable().exactOptional(),
    links: z.array(LinkSchema).nullable().exactOptional(),
    resultContext: z.string().nullable().exactOptional(),
    skip: z.int32().exactOptional(),
    take: z.int32().exactOptional(),
    totalResults: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DebateContributionMembersServiceSearchResult')

const EarlyDayMotionSchema = z
  .strictObject({
    dateTabled: z.iso.datetime({ offset: true }).exactOptional(),
    id: z.int32().exactOptional(),
    isAmendment: z.boolean().exactOptional(),
    isPrayer: z.boolean().exactOptional(),
    number: z.string().nullable().exactOptional(),
    sponsorsCount: z.int32().exactOptional(),
    title: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EarlyDayMotion')

const EarlyDayMotionItemSchema = z
  .strictObject({
    links: z.array(LinkSchema).nullable().exactOptional(),
    value: EarlyDayMotionSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EarlyDayMotionItem')

const EarlyDayMotionMembersServiceSearchResultSchema = z
  .strictObject({
    items: z.array(EarlyDayMotionItemSchema).nullable().exactOptional(),
    links: z.array(LinkSchema).nullable().exactOptional(),
    resultContext: z.string().nullable().exactOptional(),
    skip: z.int32().exactOptional(),
    take: z.int32().exactOptional(),
    totalResults: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EarlyDayMotionMembersServiceSearchResult')

const ElectionCandidateSchema = z
  .strictObject({
    memberId: z.int32().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    party: PartySchema.exactOptional(),
    rankOrder: z.int32().nullable().exactOptional(),
    resultChange: z.string().nullable().exactOptional(),
    voteShare: z.float64().nullable().exactOptional(),
    votes: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ElectionCandidate')

const ElectionResultSchema = z
  .strictObject({
    candidates: z.array(ElectionCandidateSchema).nullable().exactOptional(),
    constituencyName: z.string().nullable().exactOptional(),
    electionDate: z.iso.datetime({ offset: true }).exactOptional(),
    electionId: z.int32().exactOptional(),
    electionTitle: z.string().nullable().exactOptional(),
    electorate: z.int32().exactOptional(),
    isGeneralElection: z.boolean().exactOptional(),
    isNotional: z.boolean().exactOptional(),
    majority: z.int32().exactOptional(),
    result: z.string().nullable().exactOptional(),
    turnout: z.int32().exactOptional(),
    winningParty: PartySchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ElectionResult')

const ElectionResultItemSchema = z
  .strictObject({
    links: z.array(LinkSchema).nullable().exactOptional(),
    value: ElectionResultSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ElectionResultItem')

const ElectionResultListItemSchema = z
  .strictObject({
    links: z.array(LinkSchema).nullable().exactOptional(),
    value: z.array(ElectionResultSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ElectionResultListItem')

const GenericReferenceDataSchema = z
  .strictObject({
    description: z.string().nullable().exactOptional(),
    id: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GenericReferenceData')

const GovernmentOppositionPostHolderSchema = z
  .strictObject({
    endDate: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    isPaid: z.boolean().exactOptional(),
    layingMinisterName: z.string().nullable().exactOptional(),
    member: MemberItemSchema.exactOptional(),
    startDate: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GovernmentOppositionPostHolder')

const PostTypeSchema = z.union([z.literal(0), z.literal(1), z.literal(2)]).openapi('PostType')

const GovernmentOppositionPostSchema = z
  .strictObject({
    createdWhen: z.iso.datetime({ offset: true }).exactOptional(),
    governmentDepartments: z.array(GovernmentDepartmentSchema).nullable().exactOptional(),
    hansardName: z.string().nullable().exactOptional(),
    id: z.int32().exactOptional(),
    name: z.string().nullable().exactOptional(),
    order: z.int32().exactOptional(),
    postHolders: z.array(GovernmentOppositionPostHolderSchema).nullable().exactOptional(),
    type: PostTypeSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GovernmentOppositionPost')

const GovernmentOppositionPostItemSchema = z
  .strictObject({
    links: z.array(LinkSchema).nullable().exactOptional(),
    value: GovernmentOppositionPostSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GovernmentOppositionPostItem')

const GroupedQuestionSchema = z
  .strictObject({
    dateTabled: z.iso.datetime({ offset: true }).exactOptional(),
    questionUin: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GroupedQuestion')

const LocationTypeSchema = z
  .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)])
  .openapi('LocationType')

const LocationContextSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    name: z.string().nullable().exactOptional(),
    type: LocationTypeSchema.exactOptional(),
    typeName: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LocationContext')

const PartySeatCountSchema = z
  .strictObject({
    female: z.int32().nullable().exactOptional(),
    male: z.int32().nullable().exactOptional(),
    nonBinary: z.int32().nullable().exactOptional(),
    party: PartySchema.exactOptional(),
    total: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PartySeatCount')

const LocationSchema = z
  .strictObject({
    childContexts: z.array(LocationContextSchema).nullable().exactOptional(),
    context: LocationContextSchema.exactOptional(),
    parentContext: LocationContextSchema.exactOptional(),
    stateOfTheParties: z.array(PartySeatCountSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Location')

const LocationItemSchema = z
  .strictObject({
    links: z.array(LinkSchema).nullable().exactOptional(),
    value: LocationSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LocationItem')

const LordsByTypeSchema = z
  .strictObject({
    bishop: z.int32().exactOptional(),
    hereditary: z.int32().exactOptional(),
    life: z.int32().exactOptional(),
    party: PartySchema.exactOptional(),
    total: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LordsByType')

const LordsByTypeItemSchema = z
  .strictObject({
    links: z.array(LinkSchema).nullable().exactOptional(),
    value: LordsByTypeSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LordsByTypeItem')

const LordsByTypeMembersServiceSearchResultSchema = z
  .strictObject({
    items: z.array(LordsByTypeItemSchema).nullable().exactOptional(),
    links: z.array(LinkSchema).nullable().exactOptional(),
    resultContext: z.string().nullable().exactOptional(),
    skip: z.int32().exactOptional(),
    take: z.int32().exactOptional(),
    totalResults: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LordsByTypeMembersServiceSearchResult')

const MemberBiographySchema = z
  .strictObject({
    committeeMemberships: z.array(BiographyItemSchema).nullable().exactOptional(),
    electionsContested: z.array(BiographyItemSchema).nullable().exactOptional(),
    governmentPosts: z.array(BiographyItemSchema).nullable().exactOptional(),
    houseMemberships: z.array(BiographyItemSchema).nullable().exactOptional(),
    oppositionPosts: z.array(BiographyItemSchema).nullable().exactOptional(),
    otherPosts: z.array(BiographyItemSchema).nullable().exactOptional(),
    partyAffiliations: z.array(BiographyItemSchema).nullable().exactOptional(),
    representations: z.array(BiographyItemSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MemberBiography')

const MemberBiographyItemSchema = z
  .strictObject({
    links: z.array(LinkSchema).nullable().exactOptional(),
    value: MemberBiographySchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MemberBiographyItem')

const MemberFocusSchema = z
  .strictObject({
    category: z.string().nullable().exactOptional(),
    focus: z.array(z.string()).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MemberFocus')

const MemberFocusListItemSchema = z
  .strictObject({
    links: z.array(LinkSchema).nullable().exactOptional(),
    value: z.array(MemberFocusSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MemberFocusListItem')

const MemberNameSchema = z
  .strictObject({
    endDate: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    nameAddressAs: z.string().nullable().exactOptional(),
    nameDisplayAs: z.string().nullable().exactOptional(),
    nameFullTitle: z.string().nullable().exactOptional(),
    nameListAs: z.string().nullable().exactOptional(),
    startDate: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MemberName')

const MemberPartySchema = z
  .strictObject({
    endDate: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    party: PartySchema.exactOptional(),
    startDate: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MemberParty')

const MemberHistorySchema = z
  .strictObject({
    houseMembershipHistory: z.array(HouseMembershipSchema).nullable().exactOptional(),
    id: z.int32().exactOptional(),
    nameHistory: z.array(MemberNameSchema).nullable().exactOptional(),
    partyHistory: z.array(MemberPartySchema).nullable().exactOptional(),
    thumbnailUrl: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MemberHistory')

const MemberHistoryItemSchema = z
  .strictObject({
    links: z.array(LinkSchema).nullable().exactOptional(),
    value: MemberHistorySchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MemberHistoryItem')

const MemberMembersServiceSearchResultSchema = z
  .strictObject({
    items: z.array(MemberItemSchema).nullable().exactOptional(),
    links: z.array(LinkSchema).nullable().exactOptional(),
    resultContext: z.string().nullable().exactOptional(),
    skip: z.int32().exactOptional(),
    take: z.int32().exactOptional(),
    totalResults: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MemberMembersServiceSearchResult')

const RegisteredInterestSchema: z.ZodType<RegisteredInterestType> = z
  .lazy(() =>
    z
      .strictObject({
        childInterests: z.array(RegisteredInterestSchema).nullable().exactOptional(),
        createdWhen: z.iso.datetime({ offset: true }).nullable().exactOptional(),
        deletedWhen: z.iso.datetime({ offset: true }).nullable().exactOptional(),
        id: z.int32().exactOptional(),
        interest: z.string().nullable().exactOptional(),
        isCorrection: z.boolean().exactOptional(),
        lastAmendedWhen: z.iso.datetime({ offset: true }).nullable().exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('RegisteredInterest')

const RegisteredInterestCategorySchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    interests: z.array(RegisteredInterestSchema).nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    sortOrder: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RegisteredInterestCategory')

const MembersInterestsSchema = z
  .strictObject({
    interestCategories: z.array(RegisteredInterestCategorySchema).nullable().exactOptional(),
    member: MemberSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MembersInterests')

const MembersInterestsItemSchema = z
  .strictObject({
    links: z.array(LinkSchema).nullable().exactOptional(),
    value: MembersInterestsSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MembersInterestsItem')

const MembersInterestsMembersServiceSearchResultSchema = z
  .strictObject({
    items: z.array(MembersInterestsItemSchema).nullable().exactOptional(),
    links: z.array(LinkSchema).nullable().exactOptional(),
    resultContext: z.string().nullable().exactOptional(),
    skip: z.int32().exactOptional(),
    take: z.int32().exactOptional(),
    totalResults: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MembersInterestsMembersServiceSearchResult')

const StaffSchema = z
  .strictObject({
    details: z.string().nullable().exactOptional(),
    forename: z.string().nullable().exactOptional(),
    surname: z.string().nullable().exactOptional(),
    title: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Staff')

const MembersStaffSchema = z
  .strictObject({
    member: MemberSchema.exactOptional(),
    staff: z.array(StaffSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MembersStaff')

const MembersStaffItemSchema = z
  .strictObject({
    links: z.array(LinkSchema).nullable().exactOptional(),
    value: MembersStaffSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MembersStaffItem')

const MembersStaffMembersServiceSearchResultSchema = z
  .strictObject({
    items: z.array(MembersStaffItemSchema).nullable().exactOptional(),
    links: z.array(LinkSchema).nullable().exactOptional(),
    resultContext: z.string().nullable().exactOptional(),
    skip: z.int32().exactOptional(),
    take: z.int32().exactOptional(),
    totalResults: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MembersStaffMembersServiceSearchResult')

const PartyItemSchema = z
  .strictObject({
    links: z.array(LinkSchema).nullable().exactOptional(),
    value: PartySchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PartyItem')

const PartyMembersServiceSearchResultSchema = z
  .strictObject({
    items: z.array(PartyItemSchema).nullable().exactOptional(),
    links: z.array(LinkSchema).nullable().exactOptional(),
    resultContext: z.string().nullable().exactOptional(),
    skip: z.int32().exactOptional(),
    take: z.int32().exactOptional(),
    totalResults: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PartyMembersServiceSearchResult')

const PartySeatCountItemSchema = z
  .strictObject({
    links: z.array(LinkSchema).nullable().exactOptional(),
    value: PartySeatCountSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PartySeatCountItem')

const PartySeatCountMembersServiceSearchResultSchema = z
  .strictObject({
    items: z.array(PartySeatCountItemSchema).nullable().exactOptional(),
    links: z.array(LinkSchema).nullable().exactOptional(),
    resultContext: z.string().nullable().exactOptional(),
    skip: z.int32().exactOptional(),
    take: z.int32().exactOptional(),
    totalResults: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PartySeatCountMembersServiceSearchResult')

const PortraitCropEnumSchema = z
  .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)])
  .openapi('PortraitCropEnum')

const RegisteredInterestCategoryListItemSchema = z
  .strictObject({
    links: z.array(LinkSchema).nullable().exactOptional(),
    value: z.array(RegisteredInterestCategorySchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RegisteredInterestCategoryListItem')

const StaffListItemSchema = z
  .strictObject({
    links: z.array(LinkSchema).nullable().exactOptional(),
    value: z.array(StaffSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StaffListItem')

const StringItemSchema = z
  .strictObject({
    links: z.array(LinkSchema).nullable().exactOptional(),
    value: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StringItem')

const VoteSchema = z
  .strictObject({
    actedAsTeller: z.boolean().exactOptional(),
    date: z.iso.datetime({ offset: true }).exactOptional(),
    divisionNumber: z.int32().exactOptional(),
    house: HouseSchema.exactOptional(),
    id: z.int32().exactOptional(),
    inAffirmativeLobby: z.boolean().exactOptional(),
    numberAgainst: z.int32().exactOptional(),
    numberInFavour: z.int32().exactOptional(),
    title: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Vote')

const VoteItemSchema = z
  .strictObject({
    links: z.array(LinkSchema).nullable().exactOptional(),
    value: VoteSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('VoteItem')

const VoteMembersServiceSearchResultSchema = z
  .strictObject({
    items: z.array(VoteItemSchema).nullable().exactOptional(),
    links: z.array(LinkSchema).nullable().exactOptional(),
    resultContext: z.string().nullable().exactOptional(),
    skip: z.int32().exactOptional(),
    take: z.int32().exactOptional(),
    totalResults: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('VoteMembersServiceSearchResult')

const WrittenQuestionSchema = z
  .strictObject({
    answerIsCorrection: z.boolean().nullable().exactOptional(),
    answerIsHolding: z.boolean().nullable().exactOptional(),
    answerText: z.string().nullable().exactOptional(),
    answeringBody: AnsweringBodySchema.exactOptional(),
    answeringBodyId: z.int32().exactOptional(),
    answeringMember: MemberSchema.exactOptional(),
    answeringMemberId: z.int32().nullable().exactOptional(),
    askingMemberId: z.int32().exactOptional(),
    attachmentCount: z.int32().exactOptional(),
    correctingMember: MemberSchema.exactOptional(),
    correctingMemberId: z.int32().nullable().exactOptional(),
    dateAnswered: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    dateForAnswer: z.iso.datetime({ offset: true }).exactOptional(),
    dateTabled: z.iso.datetime({ offset: true }).exactOptional(),
    groupedQuestions: z.array(z.string()).nullable().exactOptional(),
    groupedQuestionsDates: z.array(GroupedQuestionSchema).nullable().exactOptional(),
    heading: z.string().nullable().exactOptional(),
    house: HouseSchema.exactOptional(),
    id: z.int32().exactOptional(),
    isNamedDay: z.boolean().exactOptional(),
    isWithdrawn: z.boolean().exactOptional(),
    memberHasInterest: z.boolean().exactOptional(),
    questionText: z.string().nullable().exactOptional(),
    uin: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('WrittenQuestion')

const WrittenQuestionItemSchema = z
  .strictObject({
    links: z.array(LinkSchema).nullable().exactOptional(),
    value: WrittenQuestionSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('WrittenQuestionItem')

const WrittenQuestionMembersServiceSearchResultSchema = z
  .strictObject({
    items: z.array(WrittenQuestionItemSchema).nullable().exactOptional(),
    links: z.array(LinkSchema).nullable().exactOptional(),
    resultContext: z.string().nullable().exactOptional(),
    skip: z.int32().exactOptional(),
    take: z.int32().exactOptional(),
    totalResults: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('WrittenQuestionMembersServiceSearchResult')

export const getApiLocationBrowseLocationTypeLocationNameRoute = createRoute({
  method: 'get',
  path: '/api/Location/Browse/{locationType}/{locationName}',
  tags: ['Location'],
  summary: 'Returns a list of locations, both parent and child',
  request: {
    params: z.object({
      locationType: z.preprocess(
        (val) =>
          typeof val === 'string' &&
          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
            ? Number(val)
            : val,
        LocationTypeSchema.openapi({
          param: {
            description: 'Location by type of location',
            in: 'path',
            name: 'locationType',
            required: true,
            schema: { $ref: '#/components/schemas/LocationType' },
          },
        }),
      ),
      locationName: z
        .string()
        .openapi({
          param: {
            description: 'Location by name specified',
            in: 'path',
            name: 'locationName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: LocationItemSchema },
        'text/json': { schema: LocationItemSchema },
        'text/plain': { schema: LocationItemSchema },
      },
    },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
  },
})

export const getApiLocationConstituencySearchRoute = createRoute({
  method: 'get',
  path: '/api/Location/Constituency/Search',
  tags: ['Location'],
  summary: 'Returns a list of constituencies',
  request: {
    query: z.object({
      searchText: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Constituencies containing serach term in their name',
            in: 'query',
            name: 'searchText',
            schema: { type: 'string' },
            required: false,
          },
        }),
      skip: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of records to skip from the first, default is 0',
            in: 'query',
            name: 'skip',
            schema: { default: 0, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      take: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of records to return, default is 20. Maximum is 20',
            in: 'query',
            name: 'take',
            schema: { default: 20, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: ConstituencyMembersServiceSearchResultSchema },
        'text/json': { schema: ConstituencyMembersServiceSearchResultSchema },
        'text/plain': { schema: ConstituencyMembersServiceSearchResultSchema },
      },
    },
    400: { description: 'Bad Request' },
  },
})

export const getApiLocationConstituencyIdRoute = createRoute({
  method: 'get',
  path: '/api/Location/Constituency/{id}',
  tags: ['Location'],
  summary: 'Returns a constituency by ID',
  request: {
    params: z.object({
      id: z
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
            description: 'Constituency by ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: ConstituencyItemSchema },
        'text/json': { schema: ConstituencyItemSchema },
        'text/plain': { schema: ConstituencyItemSchema },
      },
    },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
  },
})

export const getApiLocationConstituencyIdElectionResultLatestRoute = createRoute({
  method: 'get',
  path: '/api/Location/Constituency/{id}/ElectionResult/Latest',
  tags: ['Location'],
  summary: 'Returns latest election result by constituency id',
  request: {
    params: z.object({
      id: z
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
            description: 'Latest election result by constituency id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: ElectionResultItemSchema },
        'text/json': { schema: ElectionResultItemSchema },
        'text/plain': { schema: ElectionResultItemSchema },
      },
    },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
  },
})

export const getApiLocationConstituencyIdElectionResultElectionIdRoute = createRoute({
  method: 'get',
  path: '/api/Location/Constituency/{id}/ElectionResult/{electionId}',
  tags: ['Location'],
  summary: 'Returns an election result by constituency and election id',
  request: {
    params: z.object({
      id: z
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
            description: 'Election result by constituency id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      electionId: z
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
            description: 'Election result by election id',
            in: 'path',
            name: 'electionId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: ElectionResultItemSchema },
        'text/json': { schema: ElectionResultItemSchema },
        'text/plain': { schema: ElectionResultItemSchema },
      },
    },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
  },
})

export const getApiLocationConstituencyIdElectionResultsRoute = createRoute({
  method: 'get',
  path: '/api/Location/Constituency/{id}/ElectionResults',
  tags: ['Location'],
  summary: 'Returns a list of election results by constituency ID',
  request: {
    params: z.object({
      id: z
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
            description: 'Elections results by constituency ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: ElectionResultListItemSchema },
        'text/json': { schema: ElectionResultListItemSchema },
        'text/plain': { schema: ElectionResultListItemSchema },
      },
    },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
  },
})

export const getApiLocationConstituencyIdGeometryRoute = createRoute({
  method: 'get',
  path: '/api/Location/Constituency/{id}/Geometry',
  tags: ['Location'],
  summary: 'Returns geometry by constituency ID',
  request: {
    params: z.object({
      id: z
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
            description: 'Geometry by constituency ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: StringItemSchema },
        'text/json': { schema: StringItemSchema },
        'text/plain': { schema: StringItemSchema },
      },
    },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
  },
})

export const getApiLocationConstituencyIdRepresentationsRoute = createRoute({
  method: 'get',
  path: '/api/Location/Constituency/{id}/Representations',
  tags: ['Location'],
  summary: 'Returns a list of representations by constituency ID',
  request: {
    params: z.object({
      id: z
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
            description: 'Representations by constituency ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: ConstituencyRepresentationListItemSchema },
        'text/json': { schema: ConstituencyRepresentationListItemSchema },
        'text/plain': { schema: ConstituencyRepresentationListItemSchema },
      },
    },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
  },
})

export const getApiLocationConstituencyIdSynopsisRoute = createRoute({
  method: 'get',
  path: '/api/Location/Constituency/{id}/Synopsis',
  tags: ['Location'],
  summary: 'Returns a synopsis by constituency ID',
  request: {
    params: z.object({
      id: z
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
            description: 'Synopsis by constituency ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: StringItemSchema },
        'text/json': { schema: StringItemSchema },
        'text/plain': { schema: StringItemSchema },
      },
    },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
  },
})

export const getApiLordsInterestsRegisterRoute = createRoute({
  method: 'get',
  path: '/api/LordsInterests/Register',
  tags: ['LordsInterests'],
  summary: 'Returns a list of registered interests',
  request: {
    query: z.object({
      searchTerm: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Registered interests containing search term',
            in: 'query',
            name: 'searchTerm',
            schema: { type: 'string' },
            required: false,
          },
        }),
      page: z
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
            description: 'Page of results to return, default 0. Results per page 20.',
            in: 'query',
            name: 'page',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      includeDeleted: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Registered interests that have been deleted',
            in: 'query',
            name: 'includeDeleted',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: MembersInterestsMembersServiceSearchResultSchema },
        'text/json': { schema: MembersInterestsMembersServiceSearchResultSchema },
        'text/plain': { schema: MembersInterestsMembersServiceSearchResultSchema },
      },
    },
    400: { description: 'Bad Request' },
  },
})

export const getApiLordsInterestsStaffRoute = createRoute({
  method: 'get',
  path: '/api/LordsInterests/Staff',
  tags: ['LordsInterests'],
  summary: 'Returns a list of staff',
  request: {
    query: z.object({
      searchTerm: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Staff containing search term',
            in: 'query',
            name: 'searchTerm',
            schema: { type: 'string' },
            required: false,
          },
        }),
      page: z
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
            description: 'Page of results to return, default 0. Results per page 20.',
            in: 'query',
            name: 'page',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: MembersStaffMembersServiceSearchResultSchema },
        'text/json': { schema: MembersStaffMembersServiceSearchResultSchema },
        'text/plain': { schema: MembersStaffMembersServiceSearchResultSchema },
      },
    },
    400: { description: 'Bad Request' },
  },
})

export const getApiMembersHistoryRoute = createRoute({
  method: 'get',
  path: '/api/Members/History',
  tags: ['Members'],
  summary: 'Return members by ID with list of their historical names, parties and memberships',
  request: {
    query: z.object({
      ids: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'List of MemberIds to find',
            in: 'query',
            name: 'ids',
            schema: { items: { format: 'int32', type: 'integer' }, type: 'array' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(MemberHistoryItemSchema) },
        'text/json': { schema: z.array(MemberHistoryItemSchema) },
        'text/plain': { schema: z.array(MemberHistoryItemSchema) },
      },
    },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
  },
})

export const getApiMembersSearchRoute = createRoute({
  method: 'get',
  path: '/api/Members/Search',
  tags: ['Members'],
  summary: 'Returns a list of current members of the Commons or Lords',
  request: {
    query: z.object({
      Name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Members where name contains term specified',
            in: 'query',
            name: 'Name',
            schema: { type: 'string' },
            required: false,
          },
        }),
      Location: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Members where postcode or geographical location matches the term specified',
            in: 'query',
            name: 'Location',
            schema: { type: 'string' },
            required: false,
          },
        }),
      PostTitle: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Members which have held the post specified',
            in: 'query',
            name: 'PostTitle',
            schema: { type: 'string' },
            required: false,
          },
        }),
      PartyId: z
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
            description: 'Members which are currently affiliated with party with party ID',
            in: 'query',
            name: 'PartyId',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      House: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          HouseSchema.openapi({
            param: {
              description: 'Members where their most recent house is the house specified',
              in: 'query',
              name: 'House',
              schema: { $ref: '#/components/schemas/House' },
              required: false,
            },
          }),
        )
        .exactOptional(),
      ConstituencyId: z
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
            description: 'Members which currently hold the constituency with constituency id',
            in: 'query',
            name: 'ConstituencyId',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      NameStartsWith: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Members with surname begining with letter(s) specified',
            in: 'query',
            name: 'NameStartsWith',
            schema: { type: 'string' },
            required: false,
          },
        }),
      Gender: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Members with the gender specified',
            in: 'query',
            name: 'Gender',
            schema: { type: 'string' },
            required: false,
          },
        }),
      MembershipStartedSince: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Members who started on or after the date given',
            in: 'query',
            name: 'MembershipStartedSince',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      'MembershipEnded.MembershipEndedSince': z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Members who left the House on or after the date given',
            in: 'query',
            name: 'MembershipEnded.MembershipEndedSince',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      'MembershipEnded.MembershipEndReasonIds': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'MembershipEnded.MembershipEndReasonIds',
            schema: { items: { format: 'int32', type: 'integer' }, type: 'array' },
            required: false,
          },
        }),
      'MembershipInDateRange.WasMemberOnOrAfter': z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Members who were active on or after the date specified',
            in: 'query',
            name: 'MembershipInDateRange.WasMemberOnOrAfter',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      'MembershipInDateRange.WasMemberOnOrBefore': z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Members who were active on or before the date specified',
            in: 'query',
            name: 'MembershipInDateRange.WasMemberOnOrBefore',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      'MembershipInDateRange.WasMemberOfHouse': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          HouseSchema.openapi({
            param: {
              description: 'Members who were active in the house specifid',
              in: 'query',
              name: 'MembershipInDateRange.WasMemberOfHouse',
              schema: { $ref: '#/components/schemas/House' },
              required: false,
            },
          }),
        )
        .exactOptional(),
      IsEligible: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Members currently Eligible to sit in their House',
            in: 'query',
            name: 'IsEligible',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      IsCurrentMember: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Members who are current or former members',
            in: 'query',
            name: 'IsCurrentMember',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      PolicyInterestId: z
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
            description: 'Members with specified policy interest',
            in: 'query',
            name: 'PolicyInterestId',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      Experience: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Members with specified experience',
            in: 'query',
            name: 'Experience',
            schema: { type: 'string' },
            required: false,
          },
        }),
      skip: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of records to skip from the first, default is 0',
            in: 'query',
            name: 'skip',
            schema: { default: 0, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      take: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of records to return, default is 20. Maximum is 20',
            in: 'query',
            name: 'take',
            schema: { default: 20, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: MemberMembersServiceSearchResultSchema },
        'text/json': { schema: MemberMembersServiceSearchResultSchema },
        'text/plain': { schema: MemberMembersServiceSearchResultSchema },
      },
    },
    400: { description: 'Bad Request' },
  },
})

export const getApiMembersSearchHistoricalRoute = createRoute({
  method: 'get',
  path: '/api/Members/SearchHistorical',
  tags: ['Members'],
  summary: 'Returns a list of members of the Commons or Lords',
  request: {
    query: z.object({
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Members with names containing the term specified',
            in: 'query',
            name: 'name',
            schema: { type: 'string' },
            required: false,
          },
        }),
      dateToSearchFor: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'Members that were an active member of the Commons or Lords on the date specified',
            in: 'query',
            name: 'dateToSearchFor',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      skip: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of records to skip from the first, default is 0',
            in: 'query',
            name: 'skip',
            schema: { default: 0, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      take: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of records to return, default is 20. Maximum is 20',
            in: 'query',
            name: 'take',
            schema: { default: 20, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: MemberMembersServiceSearchResultSchema },
        'text/json': { schema: MemberMembersServiceSearchResultSchema },
        'text/plain': { schema: MemberMembersServiceSearchResultSchema },
      },
    },
    400: { description: 'Bad Request' },
  },
})

export const getApiMembersIdRoute = createRoute({
  method: 'get',
  path: '/api/Members/{id}',
  tags: ['Members'],
  summary: 'Return member by ID',
  request: {
    params: z.object({
      id: z
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
            description: 'Member by ID specified',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      detailsForDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Member object will be populated with details from the date specified',
            in: 'query',
            name: 'detailsForDate',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: MemberItemSchema },
        'text/json': { schema: MemberItemSchema },
        'text/plain': { schema: MemberItemSchema },
      },
    },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
  },
})

export const getApiMembersIdBiographyRoute = createRoute({
  method: 'get',
  path: '/api/Members/{id}/Biography',
  tags: ['Members'],
  summary: 'Return biography of member by ID',
  request: {
    params: z.object({
      id: z
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
            description: 'Biography of Member by ID specified',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: MemberBiographyItemSchema },
        'text/json': { schema: MemberBiographyItemSchema },
        'text/plain': { schema: MemberBiographyItemSchema },
      },
    },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
  },
})

export const getApiMembersIdContactRoute = createRoute({
  method: 'get',
  path: '/api/Members/{id}/Contact',
  tags: ['Members'],
  summary: 'Return list of contact details of member by ID',
  request: {
    params: z.object({
      id: z
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
            description: 'Contact details of Member by ID specified',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: ContactInformationListItemSchema },
        'text/json': { schema: ContactInformationListItemSchema },
        'text/plain': { schema: ContactInformationListItemSchema },
      },
    },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
  },
})

export const getApiMembersIdContributionSummaryRoute = createRoute({
  method: 'get',
  path: '/api/Members/{id}/ContributionSummary',
  tags: ['Members'],
  summary: 'Return contribution summary of member by ID',
  request: {
    params: z.object({
      id: z
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
            description: 'Contribution summary of Member by ID specified',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      page: z
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
            in: 'query',
            name: 'page',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: DebateContributionMembersServiceSearchResultSchema },
        'text/json': { schema: DebateContributionMembersServiceSearchResultSchema },
        'text/plain': { schema: DebateContributionMembersServiceSearchResultSchema },
      },
    },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
  },
})

export const getApiMembersIdEdmsRoute = createRoute({
  method: 'get',
  path: '/api/Members/{id}/Edms',
  tags: ['Members'],
  summary: 'Return list of early day motions of member by ID',
  request: {
    params: z.object({
      id: z
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
            description: 'Early day motions of Member by ID specified',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      page: z
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
            in: 'query',
            name: 'page',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: EarlyDayMotionMembersServiceSearchResultSchema },
        'text/json': { schema: EarlyDayMotionMembersServiceSearchResultSchema },
        'text/plain': { schema: EarlyDayMotionMembersServiceSearchResultSchema },
      },
    },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
  },
})

export const getApiMembersIdExperienceRoute = createRoute({
  method: 'get',
  path: '/api/Members/{id}/Experience',
  tags: ['Members'],
  summary: 'Return experience of member by ID',
  request: {
    params: z.object({
      id: z
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
            description: 'Experience of Member by ID specified',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: BiographyExperienceListItemSchema },
        'text/json': { schema: BiographyExperienceListItemSchema },
        'text/plain': { schema: BiographyExperienceListItemSchema },
      },
    },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
  },
})

export const getApiMembersIdFocusRoute = createRoute({
  method: 'get',
  path: '/api/Members/{id}/Focus',
  tags: ['Members'],
  summary: 'Return list of areas of focus of member by ID',
  request: {
    params: z.object({
      id: z
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
            description: 'Areas of focus of Member by ID specified',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: MemberFocusListItemSchema },
        'text/json': { schema: MemberFocusListItemSchema },
        'text/plain': { schema: MemberFocusListItemSchema },
      },
    },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
  },
})

export const getApiMembersIdLatestElectionResultRoute = createRoute({
  method: 'get',
  path: '/api/Members/{id}/LatestElectionResult',
  tags: ['Members'],
  summary: 'Return latest election result of member by ID',
  request: {
    params: z.object({
      id: z
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
            description: 'Latest election result of Member by ID specified',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: ElectionResultItemSchema },
        'text/json': { schema: ElectionResultItemSchema },
        'text/plain': { schema: ElectionResultItemSchema },
      },
    },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
  },
})

export const getApiMembersIdPortraitRoute = createRoute({
  method: 'get',
  path: '/api/Members/{id}/Portrait',
  tags: ['Members'],
  summary: 'Return portrait of member by ID',
  request: {
    params: z.object({
      id: z
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
            description: 'Portrait of Member by ID specified',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      cropType: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          PortraitCropEnumSchema.openapi({
            param: {
              in: 'query',
              name: 'cropType',
              schema: { $ref: '#/components/schemas/PortraitCropEnum' },
              required: false,
            },
          }),
        )
        .exactOptional(),
      webVersion: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'webVersion',
            schema: { default: true, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    204: { description: 'No Content' },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
  },
})

export const getApiMembersIdPortraitUrlRoute = createRoute({
  method: 'get',
  path: '/api/Members/{id}/PortraitUrl',
  tags: ['Members'],
  summary: 'Return portrait url of member by ID',
  request: {
    params: z.object({
      id: z
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
            description: 'Portrait url of Member by ID specified',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: StringItemSchema },
        'text/json': { schema: StringItemSchema },
        'text/plain': { schema: StringItemSchema },
      },
    },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
  },
})

export const getApiMembersIdRegisteredInterestsRoute = createRoute({
  method: 'get',
  path: '/api/Members/{id}/RegisteredInterests',
  tags: ['Members'],
  summary: 'Return list of registered interests of member by ID',
  request: {
    params: z.object({
      id: z
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
            description: 'Registered interests of Member by ID specified',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      house: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          HouseSchema.openapi({
            param: {
              description: 'Registered interests of Member by House specified',
              in: 'query',
              name: 'house',
              schema: { $ref: '#/components/schemas/House' },
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: RegisteredInterestCategoryListItemSchema },
        'text/json': { schema: RegisteredInterestCategoryListItemSchema },
        'text/plain': { schema: RegisteredInterestCategoryListItemSchema },
      },
    },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
  },
})

export const getApiMembersIdStaffRoute = createRoute({
  method: 'get',
  path: '/api/Members/{id}/Staff',
  tags: ['Members'],
  summary: 'Return list of staff of member by ID',
  request: {
    params: z.object({
      id: z
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
            description: 'Staff of Member by ID specified',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: StaffListItemSchema },
        'text/json': { schema: StaffListItemSchema },
        'text/plain': { schema: StaffListItemSchema },
      },
    },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
  },
})

export const getApiMembersIdSynopsisRoute = createRoute({
  method: 'get',
  path: '/api/Members/{id}/Synopsis',
  tags: ['Members'],
  summary: 'Return synopsis of member by ID',
  request: {
    params: z.object({
      id: z
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
            description: 'Synopsis of Member by ID specified',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: StringItemSchema },
        'text/json': { schema: StringItemSchema },
        'text/plain': { schema: StringItemSchema },
      },
    },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
  },
})

export const getApiMembersIdThumbnailRoute = createRoute({
  method: 'get',
  path: '/api/Members/{id}/Thumbnail',
  tags: ['Members'],
  summary: 'Return thumbnail of member by ID',
  request: {
    params: z.object({
      id: z
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
            description: 'Thumbnail of Member by ID specified',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    204: { description: 'No Content' },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
  },
})

export const getApiMembersIdThumbnailUrlRoute = createRoute({
  method: 'get',
  path: '/api/Members/{id}/ThumbnailUrl',
  tags: ['Members'],
  summary: 'Return thumbnail url of member by ID',
  request: {
    params: z.object({
      id: z
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
            description: 'Thumbnail url of Member by ID specified',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: StringItemSchema },
        'text/json': { schema: StringItemSchema },
        'text/plain': { schema: StringItemSchema },
      },
    },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
  },
})

export const getApiMembersIdVotingRoute = createRoute({
  method: 'get',
  path: '/api/Members/{id}/Voting',
  tags: ['Members'],
  summary: 'Return list of votes by member by ID',
  request: {
    params: z.object({
      id: z
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
            description: 'Votes by Member by ID specified',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      house: z.preprocess(
        (val) =>
          typeof val === 'string' &&
          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
            ? Number(val)
            : val,
        HouseSchema.openapi({
          param: {
            in: 'query',
            name: 'house',
            required: true,
            schema: { $ref: '#/components/schemas/House' },
          },
        }),
      ),
      page: z
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
            in: 'query',
            name: 'page',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: VoteMembersServiceSearchResultSchema },
        'text/json': { schema: VoteMembersServiceSearchResultSchema },
        'text/plain': { schema: VoteMembersServiceSearchResultSchema },
      },
    },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
  },
})

export const getApiMembersIdWrittenQuestionsRoute = createRoute({
  method: 'get',
  path: '/api/Members/{id}/WrittenQuestions',
  tags: ['Members'],
  summary: 'Return list of written questions by member by ID',
  request: {
    params: z.object({
      id: z
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
            description: 'Written questions by Member by ID specified',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      page: z
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
            in: 'query',
            name: 'page',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: WrittenQuestionMembersServiceSearchResultSchema },
        'text/json': { schema: WrittenQuestionMembersServiceSearchResultSchema },
        'text/plain': { schema: WrittenQuestionMembersServiceSearchResultSchema },
      },
    },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
  },
})

export const getApiPartiesGetActiveHouseRoute = createRoute({
  method: 'get',
  path: '/api/Parties/GetActive/{house}',
  tags: ['Parties'],
  summary: 'Returns a list of current parties with at least one active member.',
  request: {
    params: z.object({
      house: z.preprocess(
        (val) =>
          typeof val === 'string' &&
          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
            ? Number(val)
            : val,
        HouseSchema.openapi({
          param: {
            description: 'Current parties by house',
            in: 'path',
            name: 'house',
            required: true,
            schema: { $ref: '#/components/schemas/House' },
          },
        }),
      ),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: PartyMembersServiceSearchResultSchema },
        'text/json': { schema: PartyMembersServiceSearchResultSchema },
        'text/plain': { schema: PartyMembersServiceSearchResultSchema },
      },
    },
    400: { description: 'Bad Request' },
  },
})

export const getApiPartiesLordsByTypeForDateRoute = createRoute({
  method: 'get',
  path: '/api/Parties/LordsByType/{forDate}',
  tags: ['Parties'],
  summary: 'Returns the composition of the House of Lords by peerage type.',
  request: {
    params: z.object({
      forDate: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            description: 'Composition of the Lords for date specified.',
            in: 'path',
            name: 'forDate',
            required: true,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: LordsByTypeMembersServiceSearchResultSchema },
        'text/json': { schema: LordsByTypeMembersServiceSearchResultSchema },
        'text/plain': { schema: LordsByTypeMembersServiceSearchResultSchema },
      },
    },
    400: { description: 'Bad Request' },
  },
})

export const getApiPartiesStateOfThePartiesHouseForDateRoute = createRoute({
  method: 'get',
  path: '/api/Parties/StateOfTheParties/{house}/{forDate}',
  tags: ['Parties'],
  summary: 'Returns current state of parties',
  request: {
    params: z.object({
      house: z.preprocess(
        (val) =>
          typeof val === 'string' &&
          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
            ? Number(val)
            : val,
        HouseSchema.openapi({
          param: {
            description: 'State of parties in Commons or Lords.',
            in: 'path',
            name: 'house',
            required: true,
            schema: { $ref: '#/components/schemas/House' },
          },
        }),
      ),
      forDate: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            description: 'State of parties for the date specified',
            in: 'path',
            name: 'forDate',
            required: true,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: PartySeatCountMembersServiceSearchResultSchema },
        'text/json': { schema: PartySeatCountMembersServiceSearchResultSchema },
        'text/plain': { schema: PartySeatCountMembersServiceSearchResultSchema },
      },
    },
    400: { description: 'Bad Request' },
  },
})

export const getApiPostsDepartmentsTypeRoute = createRoute({
  method: 'get',
  path: '/api/Posts/Departments/{type}',
  tags: ['Posts'],
  summary: 'Returns a list of departments.',
  request: {
    params: z.object({
      type: z.preprocess(
        (val) =>
          typeof val === 'string' &&
          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
            ? Number(val)
            : val,
        PostTypeSchema.openapi({
          param: {
            description: 'Departments by type',
            in: 'path',
            name: 'type',
            required: true,
            schema: { $ref: '#/components/schemas/PostType' },
          },
        }),
      ),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(GovernmentDepartmentSchema) },
        'text/json': { schema: z.array(GovernmentDepartmentSchema) },
        'text/plain': { schema: z.array(GovernmentDepartmentSchema) },
      },
    },
    404: { description: 'Not Found' },
  },
})

export const getApiPostsGovernmentPostsRoute = createRoute({
  method: 'get',
  path: '/api/Posts/GovernmentPosts',
  tags: ['Posts'],
  summary: 'Returns a list of government posts.',
  request: {
    query: z.object({
      departmentId: z
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
            description: 'Government posts by department ID',
            in: 'query',
            name: 'departmentId',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(GovernmentOppositionPostItemSchema) },
        'text/json': { schema: z.array(GovernmentOppositionPostItemSchema) },
        'text/plain': { schema: z.array(GovernmentOppositionPostItemSchema) },
      },
    },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
  },
})

export const getApiPostsOppositionPostsRoute = createRoute({
  method: 'get',
  path: '/api/Posts/OppositionPosts',
  tags: ['Posts'],
  summary: 'Returns a list of opposition posts.',
  request: {
    query: z.object({
      departmentId: z
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
            description: 'Opposition posts by department ID',
            in: 'query',
            name: 'departmentId',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(GovernmentOppositionPostItemSchema) },
        'text/json': { schema: z.array(GovernmentOppositionPostItemSchema) },
        'text/plain': { schema: z.array(GovernmentOppositionPostItemSchema) },
      },
    },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
  },
})

export const getApiPostsSpeakerAndDeputiesForDateRoute = createRoute({
  method: 'get',
  path: '/api/Posts/SpeakerAndDeputies/{forDate}',
  tags: ['Posts'],
  summary: 'Returns a list containing the speaker and deputy speakers.',
  request: {
    params: z.object({
      forDate: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            description: 'Speaker and deputy speakers for date specified',
            in: 'path',
            name: 'forDate',
            required: true,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(MemberItemSchema) },
        'text/json': { schema: z.array(MemberItemSchema) },
        'text/plain': { schema: z.array(MemberItemSchema) },
      },
    },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
  },
})

export const getApiPostsSpokespersonsRoute = createRoute({
  method: 'get',
  path: '/api/Posts/Spokespersons',
  tags: ['Posts'],
  summary: 'Returns a list of spokespersons.',
  request: {
    query: z.object({
      partyId: z
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
            description: 'Spokespersons by party ID',
            in: 'query',
            name: 'partyId',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(GovernmentOppositionPostItemSchema) },
        'text/json': { schema: z.array(GovernmentOppositionPostItemSchema) },
        'text/plain': { schema: z.array(GovernmentOppositionPostItemSchema) },
      },
    },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
  },
})

export const getApiReferenceAnsweringBodiesRoute = createRoute({
  method: 'get',
  path: '/api/Reference/AnsweringBodies',
  tags: ['Reference'],
  summary: 'Returns a list of answering bodies.',
  request: {
    query: z.object({
      id: z
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
            in: 'query',
            name: 'id',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      nameContains: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'nameContains', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(AnsweringBodySchema) },
        'text/json': { schema: z.array(AnsweringBodySchema) },
        'text/plain': { schema: z.array(AnsweringBodySchema) },
      },
    },
    400: { description: 'Bad Request' },
  },
})

export const getApiReferenceDepartmentsRoute = createRoute({
  method: 'get',
  path: '/api/Reference/Departments',
  tags: ['Reference'],
  summary: 'Returns a list of departments.',
  request: {
    query: z.object({
      id: z
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
            in: 'query',
            name: 'id',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      nameContains: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'nameContains', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(GovernmentDepartmentSchema) },
        'text/json': { schema: z.array(GovernmentDepartmentSchema) },
        'text/plain': { schema: z.array(GovernmentDepartmentSchema) },
      },
    },
    400: { description: 'Bad Request' },
  },
})

export const getApiReferenceDepartmentsIdLogoRoute = createRoute({
  method: 'get',
  path: '/api/Reference/Departments/{id}/Logo',
  tags: ['Reference'],
  summary: 'Returns department logo.',
  request: {
    params: z.object({
      id: z
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
            description: 'Logo by department ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
  },
})

export const getApiReferencePolicyInterestsRoute = createRoute({
  method: 'get',
  path: '/api/Reference/PolicyInterests',
  tags: ['Reference'],
  summary: 'Returns a list of policy interest.',
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(GenericReferenceDataSchema) },
        'text/json': { schema: z.array(GenericReferenceDataSchema) },
        'text/plain': { schema: z.array(GenericReferenceDataSchema) },
      },
    },
  },
})
