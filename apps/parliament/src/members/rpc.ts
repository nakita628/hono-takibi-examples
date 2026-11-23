import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiLocationBrowseLocationTypeLocationName(
  args: InferRequestType<
    (typeof client.api.Location.Browse)[':locationType'][':locationName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.Location.Browse[':locationType'][':locationName'].$get(args, options),
  )
}

export async function getApiLocationConstituencySearch(
  args: InferRequestType<typeof client.api.Location.Constituency.Search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Location.Constituency.Search.$get(args, options))
}

export async function getApiLocationConstituencyId(
  args: InferRequestType<(typeof client.api.Location.Constituency)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Location.Constituency[':id'].$get(args, options))
}

export async function getApiLocationConstituencyIdElectionResultLatest(
  args: InferRequestType<
    (typeof client.api.Location.Constituency)[':id']['ElectionResult']['Latest']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.Location.Constituency[':id'].ElectionResult.Latest.$get(args, options),
  )
}

export async function getApiLocationConstituencyIdElectionResultElectionId(
  args: InferRequestType<
    (typeof client.api.Location.Constituency)[':id']['ElectionResult'][':electionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.Location.Constituency[':id'].ElectionResult[':electionId'].$get(args, options),
  )
}

export async function getApiLocationConstituencyIdElectionResults(
  args: InferRequestType<
    (typeof client.api.Location.Constituency)[':id']['ElectionResults']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.Location.Constituency[':id'].ElectionResults.$get(args, options),
  )
}

export async function getApiLocationConstituencyIdGeometry(
  args: InferRequestType<(typeof client.api.Location.Constituency)[':id']['Geometry']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Location.Constituency[':id'].Geometry.$get(args, options))
}

export async function getApiLocationConstituencyIdRepresentations(
  args: InferRequestType<
    (typeof client.api.Location.Constituency)[':id']['Representations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.Location.Constituency[':id'].Representations.$get(args, options),
  )
}

export async function getApiLocationConstituencyIdSynopsis(
  args: InferRequestType<(typeof client.api.Location.Constituency)[':id']['Synopsis']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Location.Constituency[':id'].Synopsis.$get(args, options))
}

export async function getApiLordsInterestsRegister(
  args: InferRequestType<typeof client.api.LordsInterests.Register.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.LordsInterests.Register.$get(args, options))
}

export async function getApiLordsInterestsStaff(
  args: InferRequestType<typeof client.api.LordsInterests.Staff.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.LordsInterests.Staff.$get(args, options))
}

export async function getApiMembersHistory(
  args: InferRequestType<typeof client.api.Members.History.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Members.History.$get(args, options))
}

export async function getApiMembersSearch(
  args: InferRequestType<typeof client.api.Members.Search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Members.Search.$get(args, options))
}

export async function getApiMembersSearchHistorical(
  args: InferRequestType<typeof client.api.Members.SearchHistorical.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Members.SearchHistorical.$get(args, options))
}

export async function getApiMembersId(
  args: InferRequestType<(typeof client.api.Members)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Members[':id'].$get(args, options))
}

export async function getApiMembersIdBiography(
  args: InferRequestType<(typeof client.api.Members)[':id']['Biography']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Members[':id'].Biography.$get(args, options))
}

export async function getApiMembersIdContact(
  args: InferRequestType<(typeof client.api.Members)[':id']['Contact']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Members[':id'].Contact.$get(args, options))
}

export async function getApiMembersIdContributionSummary(
  args: InferRequestType<(typeof client.api.Members)[':id']['ContributionSummary']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Members[':id'].ContributionSummary.$get(args, options))
}

export async function getApiMembersIdEdms(
  args: InferRequestType<(typeof client.api.Members)[':id']['Edms']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Members[':id'].Edms.$get(args, options))
}

export async function getApiMembersIdExperience(
  args: InferRequestType<(typeof client.api.Members)[':id']['Experience']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Members[':id'].Experience.$get(args, options))
}

export async function getApiMembersIdFocus(
  args: InferRequestType<(typeof client.api.Members)[':id']['Focus']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Members[':id'].Focus.$get(args, options))
}

export async function getApiMembersIdLatestElectionResult(
  args: InferRequestType<(typeof client.api.Members)[':id']['LatestElectionResult']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Members[':id'].LatestElectionResult.$get(args, options))
}

export async function getApiMembersIdPortrait(
  args: InferRequestType<(typeof client.api.Members)[':id']['Portrait']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Members[':id'].Portrait.$get(args, options))
}

export async function getApiMembersIdPortraitUrl(
  args: InferRequestType<(typeof client.api.Members)[':id']['PortraitUrl']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Members[':id'].PortraitUrl.$get(args, options))
}

export async function getApiMembersIdRegisteredInterests(
  args: InferRequestType<(typeof client.api.Members)[':id']['RegisteredInterests']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Members[':id'].RegisteredInterests.$get(args, options))
}

export async function getApiMembersIdStaff(
  args: InferRequestType<(typeof client.api.Members)[':id']['Staff']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Members[':id'].Staff.$get(args, options))
}

export async function getApiMembersIdSynopsis(
  args: InferRequestType<(typeof client.api.Members)[':id']['Synopsis']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Members[':id'].Synopsis.$get(args, options))
}

export async function getApiMembersIdThumbnail(
  args: InferRequestType<(typeof client.api.Members)[':id']['Thumbnail']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Members[':id'].Thumbnail.$get(args, options))
}

export async function getApiMembersIdThumbnailUrl(
  args: InferRequestType<(typeof client.api.Members)[':id']['ThumbnailUrl']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Members[':id'].ThumbnailUrl.$get(args, options))
}

export async function getApiMembersIdVoting(
  args: InferRequestType<(typeof client.api.Members)[':id']['Voting']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Members[':id'].Voting.$get(args, options))
}

export async function getApiMembersIdWrittenQuestions(
  args: InferRequestType<(typeof client.api.Members)[':id']['WrittenQuestions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Members[':id'].WrittenQuestions.$get(args, options))
}

export async function getApiPartiesGetActiveHouse(
  args: InferRequestType<(typeof client.api.Parties.GetActive)[':house']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Parties.GetActive[':house'].$get(args, options))
}

export async function getApiPartiesLordsByTypeForDate(
  args: InferRequestType<(typeof client.api.Parties.LordsByType)[':forDate']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Parties.LordsByType[':forDate'].$get(args, options))
}

export async function getApiPartiesStateOfThePartiesHouseForDate(
  args: InferRequestType<
    (typeof client.api.Parties.StateOfTheParties)[':house'][':forDate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.Parties.StateOfTheParties[':house'][':forDate'].$get(args, options),
  )
}

export async function getApiPostsDepartmentsType(
  args: InferRequestType<(typeof client.api.Posts.Departments)[':type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Posts.Departments[':type'].$get(args, options))
}

export async function getApiPostsGovernmentPosts(
  args: InferRequestType<typeof client.api.Posts.GovernmentPosts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Posts.GovernmentPosts.$get(args, options))
}

export async function getApiPostsOppositionPosts(
  args: InferRequestType<typeof client.api.Posts.OppositionPosts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Posts.OppositionPosts.$get(args, options))
}

export async function getApiPostsSpeakerAndDeputiesForDate(
  args: InferRequestType<(typeof client.api.Posts.SpeakerAndDeputies)[':forDate']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Posts.SpeakerAndDeputies[':forDate'].$get(args, options))
}

export async function getApiPostsSpokespersons(
  args: InferRequestType<typeof client.api.Posts.Spokespersons.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Posts.Spokespersons.$get(args, options))
}

export async function getApiReferenceAnsweringBodies(
  args: InferRequestType<typeof client.api.Reference.AnsweringBodies.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Reference.AnsweringBodies.$get(args, options))
}

export async function getApiReferenceDepartments(
  args: InferRequestType<typeof client.api.Reference.Departments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Reference.Departments.$get(args, options))
}

export async function getApiReferenceDepartmentsIdLogo(
  args: InferRequestType<(typeof client.api.Reference.Departments)[':id']['Logo']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Reference.Departments[':id'].Logo.$get(args, options))
}

export async function getApiReferencePolicyInterests(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Reference.PolicyInterests.$get(undefined, options))
}
