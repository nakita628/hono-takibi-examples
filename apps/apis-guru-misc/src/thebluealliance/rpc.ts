import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getDistrictDistrictKeyEvents(
  args: InferRequestType<(typeof client.district)[':district_key']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.district[':district_key'].events.$get(args, options))
}

export async function getDistrictDistrictKeyEventsKeys(
  args: InferRequestType<(typeof client.district)[':district_key']['events']['keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.district[':district_key'].events.keys.$get(args, options))
}

export async function getDistrictDistrictKeyEventsSimple(
  args: InferRequestType<(typeof client.district)[':district_key']['events']['simple']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.district[':district_key'].events.simple.$get(args, options))
}

export async function getDistrictDistrictKeyRankings(
  args: InferRequestType<(typeof client.district)[':district_key']['rankings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.district[':district_key'].rankings.$get(args, options))
}

export async function getDistrictDistrictKeyTeams(
  args: InferRequestType<(typeof client.district)[':district_key']['teams']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.district[':district_key'].teams.$get(args, options))
}

export async function getDistrictDistrictKeyTeamsKeys(
  args: InferRequestType<(typeof client.district)[':district_key']['teams']['keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.district[':district_key'].teams.keys.$get(args, options))
}

export async function getDistrictDistrictKeyTeamsSimple(
  args: InferRequestType<(typeof client.district)[':district_key']['teams']['simple']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.district[':district_key'].teams.simple.$get(args, options))
}

export async function getDistrictsYear(
  args: InferRequestType<(typeof client.districts)[':year']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.districts[':year'].$get(args, options))
}

export async function getEventEventKey(
  args: InferRequestType<(typeof client.event)[':event_key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.event[':event_key'].$get(args, options))
}

export async function getEventEventKeyAlliances(
  args: InferRequestType<(typeof client.event)[':event_key']['alliances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.event[':event_key'].alliances.$get(args, options))
}

export async function getEventEventKeyAwards(
  args: InferRequestType<(typeof client.event)[':event_key']['awards']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.event[':event_key'].awards.$get(args, options))
}

export async function getEventEventKeyDistrictPoints(
  args: InferRequestType<(typeof client.event)[':event_key']['district_points']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.event[':event_key'].district_points.$get(args, options))
}

export async function getEventEventKeyInsights(
  args: InferRequestType<(typeof client.event)[':event_key']['insights']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.event[':event_key'].insights.$get(args, options))
}

export async function getEventEventKeyMatches(
  args: InferRequestType<(typeof client.event)[':event_key']['matches']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.event[':event_key'].matches.$get(args, options))
}

export async function getEventEventKeyMatchesKeys(
  args: InferRequestType<(typeof client.event)[':event_key']['matches']['keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.event[':event_key'].matches.keys.$get(args, options))
}

export async function getEventEventKeyMatchesSimple(
  args: InferRequestType<(typeof client.event)[':event_key']['matches']['simple']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.event[':event_key'].matches.simple.$get(args, options))
}

export async function getEventEventKeyMatchesTimeseries(
  args: InferRequestType<(typeof client.event)[':event_key']['matches']['timeseries']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.event[':event_key'].matches.timeseries.$get(args, options))
}

export async function getEventEventKeyOprs(
  args: InferRequestType<(typeof client.event)[':event_key']['oprs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.event[':event_key'].oprs.$get(args, options))
}

export async function getEventEventKeyPredictions(
  args: InferRequestType<(typeof client.event)[':event_key']['predictions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.event[':event_key'].predictions.$get(args, options))
}

export async function getEventEventKeyRankings(
  args: InferRequestType<(typeof client.event)[':event_key']['rankings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.event[':event_key'].rankings.$get(args, options))
}

export async function getEventEventKeySimple(
  args: InferRequestType<(typeof client.event)[':event_key']['simple']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.event[':event_key'].simple.$get(args, options))
}

export async function getEventEventKeyTeams(
  args: InferRequestType<(typeof client.event)[':event_key']['teams']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.event[':event_key'].teams.$get(args, options))
}

export async function getEventEventKeyTeamsKeys(
  args: InferRequestType<(typeof client.event)[':event_key']['teams']['keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.event[':event_key'].teams.keys.$get(args, options))
}

export async function getEventEventKeyTeamsSimple(
  args: InferRequestType<(typeof client.event)[':event_key']['teams']['simple']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.event[':event_key'].teams.simple.$get(args, options))
}

export async function getEventEventKeyTeamsStatuses(
  args: InferRequestType<(typeof client.event)[':event_key']['teams']['statuses']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.event[':event_key'].teams.statuses.$get(args, options))
}

export async function getEventsYear(
  args: InferRequestType<(typeof client.events)[':year']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events[':year'].$get(args, options))
}

export async function getEventsYearKeys(
  args: InferRequestType<(typeof client.events)[':year']['keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events[':year'].keys.$get(args, options))
}

export async function getEventsYearSimple(
  args: InferRequestType<(typeof client.events)[':year']['simple']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events[':year'].simple.$get(args, options))
}

export async function getMatchMatchKey(
  args: InferRequestType<(typeof client.match)[':match_key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.match[':match_key'].$get(args, options))
}

export async function getMatchMatchKeySimple(
  args: InferRequestType<(typeof client.match)[':match_key']['simple']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.match[':match_key'].simple.$get(args, options))
}

export async function getMatchMatchKeyTimeseries(
  args: InferRequestType<(typeof client.match)[':match_key']['timeseries']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.match[':match_key'].timeseries.$get(args, options))
}

export async function getMatchMatchKeyZebraMotionworks(
  args: InferRequestType<(typeof client.match)[':match_key']['zebra_motionworks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.match[':match_key'].zebra_motionworks.$get(args, options))
}

export async function getStatus(
  args: InferRequestType<typeof client.status.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.status.$get(args, options))
}

export async function getTeamTeamKey(
  args: InferRequestType<(typeof client.team)[':team_key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.team[':team_key'].$get(args, options))
}

export async function getTeamTeamKeyAwards(
  args: InferRequestType<(typeof client.team)[':team_key']['awards']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.team[':team_key'].awards.$get(args, options))
}

export async function getTeamTeamKeyAwardsYear(
  args: InferRequestType<(typeof client.team)[':team_key']['awards'][':year']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.team[':team_key'].awards[':year'].$get(args, options))
}

export async function getTeamTeamKeyDistricts(
  args: InferRequestType<(typeof client.team)[':team_key']['districts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.team[':team_key'].districts.$get(args, options))
}

export async function getTeamTeamKeyEventEventKeyAwards(
  args: InferRequestType<
    (typeof client.team)[':team_key']['event'][':event_key']['awards']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.team[':team_key'].event[':event_key'].awards.$get(args, options),
  )
}

export async function getTeamTeamKeyEventEventKeyMatches(
  args: InferRequestType<
    (typeof client.team)[':team_key']['event'][':event_key']['matches']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.team[':team_key'].event[':event_key'].matches.$get(args, options),
  )
}

export async function getTeamTeamKeyEventEventKeyMatchesKeys(
  args: InferRequestType<
    (typeof client.team)[':team_key']['event'][':event_key']['matches']['keys']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.team[':team_key'].event[':event_key'].matches.keys.$get(args, options),
  )
}

export async function getTeamTeamKeyEventEventKeyMatchesSimple(
  args: InferRequestType<
    (typeof client.team)[':team_key']['event'][':event_key']['matches']['simple']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.team[':team_key'].event[':event_key'].matches.simple.$get(args, options),
  )
}

export async function getTeamTeamKeyEventEventKeyStatus(
  args: InferRequestType<
    (typeof client.team)[':team_key']['event'][':event_key']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.team[':team_key'].event[':event_key'].status.$get(args, options),
  )
}

export async function getTeamTeamKeyEvents(
  args: InferRequestType<(typeof client.team)[':team_key']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.team[':team_key'].events.$get(args, options))
}

export async function getTeamTeamKeyEventsKeys(
  args: InferRequestType<(typeof client.team)[':team_key']['events']['keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.team[':team_key'].events.keys.$get(args, options))
}

export async function getTeamTeamKeyEventsSimple(
  args: InferRequestType<(typeof client.team)[':team_key']['events']['simple']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.team[':team_key'].events.simple.$get(args, options))
}

export async function getTeamTeamKeyEventsYear(
  args: InferRequestType<(typeof client.team)[':team_key']['events'][':year']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.team[':team_key'].events[':year'].$get(args, options))
}

export async function getTeamTeamKeyEventsYearKeys(
  args: InferRequestType<(typeof client.team)[':team_key']['events'][':year']['keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.team[':team_key'].events[':year'].keys.$get(args, options))
}

export async function getTeamTeamKeyEventsYearSimple(
  args: InferRequestType<(typeof client.team)[':team_key']['events'][':year']['simple']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.team[':team_key'].events[':year'].simple.$get(args, options))
}

export async function getTeamTeamKeyEventsYearStatuses(
  args: InferRequestType<(typeof client.team)[':team_key']['events'][':year']['statuses']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.team[':team_key'].events[':year'].statuses.$get(args, options))
}

export async function getTeamTeamKeyMatchesYear(
  args: InferRequestType<(typeof client.team)[':team_key']['matches'][':year']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.team[':team_key'].matches[':year'].$get(args, options))
}

export async function getTeamTeamKeyMatchesYearKeys(
  args: InferRequestType<(typeof client.team)[':team_key']['matches'][':year']['keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.team[':team_key'].matches[':year'].keys.$get(args, options))
}

export async function getTeamTeamKeyMatchesYearSimple(
  args: InferRequestType<(typeof client.team)[':team_key']['matches'][':year']['simple']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.team[':team_key'].matches[':year'].simple.$get(args, options))
}

export async function getTeamTeamKeyMediaTagMediaTag(
  args: InferRequestType<(typeof client.team)[':team_key']['media']['tag'][':media_tag']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.team[':team_key'].media.tag[':media_tag'].$get(args, options))
}

export async function getTeamTeamKeyMediaTagMediaTagYear(
  args: InferRequestType<
    (typeof client.team)[':team_key']['media']['tag'][':media_tag'][':year']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.team[':team_key'].media.tag[':media_tag'][':year'].$get(args, options),
  )
}

export async function getTeamTeamKeyMediaYear(
  args: InferRequestType<(typeof client.team)[':team_key']['media'][':year']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.team[':team_key'].media[':year'].$get(args, options))
}

export async function getTeamTeamKeyRobots(
  args: InferRequestType<(typeof client.team)[':team_key']['robots']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.team[':team_key'].robots.$get(args, options))
}

export async function getTeamTeamKeySimple(
  args: InferRequestType<(typeof client.team)[':team_key']['simple']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.team[':team_key'].simple.$get(args, options))
}

export async function getTeamTeamKeySocialMedia(
  args: InferRequestType<(typeof client.team)[':team_key']['social_media']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.team[':team_key'].social_media.$get(args, options))
}

export async function getTeamTeamKeyYearsParticipated(
  args: InferRequestType<(typeof client.team)[':team_key']['years_participated']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.team[':team_key'].years_participated.$get(args, options))
}

export async function getTeamsPageNum(
  args: InferRequestType<(typeof client.teams)[':page_num']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':page_num'].$get(args, options))
}

export async function getTeamsPageNumKeys(
  args: InferRequestType<(typeof client.teams)[':page_num']['keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':page_num'].keys.$get(args, options))
}

export async function getTeamsPageNumSimple(
  args: InferRequestType<(typeof client.teams)[':page_num']['simple']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':page_num'].simple.$get(args, options))
}

export async function getTeamsYearPageNum(
  args: InferRequestType<(typeof client.teams)[':year'][':page_num']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':year'][':page_num'].$get(args, options))
}

export async function getTeamsYearPageNumKeys(
  args: InferRequestType<(typeof client.teams)[':year'][':page_num']['keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':year'][':page_num'].keys.$get(args, options))
}

export async function getTeamsYearPageNumSimple(
  args: InferRequestType<(typeof client.teams)[':year'][':page_num']['simple']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':year'][':page_num'].simple.$get(args, options))
}
