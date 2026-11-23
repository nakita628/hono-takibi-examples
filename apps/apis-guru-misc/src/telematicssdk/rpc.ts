import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getMobilesdkStageTrackGetTrackV1(
  args: InferRequestType<typeof client.mobilesdk.stage.track.get_track.v1.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mobilesdk.stage.track.get_track.v1.$get(args, options))
}

export async function getStatisticsV1ScoringsConsolidated(
  args: InferRequestType<typeof client.statistics.v1.Scorings.consolidated.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.statistics.v1.Scorings.consolidated.$get(args, options))
}

export async function getStatisticsV1ScoringsConsolidatedDaily(
  args: InferRequestType<typeof client.statistics.v1.Scorings.consolidated.daily.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.statistics.v1.Scorings.consolidated.daily.$get(args, options))
}

export async function getStatisticsV1ScoringsIndividualIndex(
  args: InferRequestType<typeof client.statistics.v1.Scorings.individual.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.statistics.v1.Scorings.individual.index.$get(args, options))
}

export async function getStatisticsV1ScoringsIndividualDaily(
  args: InferRequestType<typeof client.statistics.v1.Scorings.individual.daily.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.statistics.v1.Scorings.individual.daily.$get(args, options))
}

export async function getStatisticsV1StatisticsConsolidated(
  args: InferRequestType<typeof client.statistics.v1.Statistics.consolidated.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.statistics.v1.Statistics.consolidated.$get(args, options))
}

export async function getStatisticsV1StatisticsConsolidatedDaily(
  args: InferRequestType<typeof client.statistics.v1.Statistics.consolidated.daily.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.statistics.v1.Statistics.consolidated.daily.$get(args, options))
}

export async function getStatisticsV1StatisticsIndividualIndex(
  args: InferRequestType<typeof client.statistics.v1.Statistics.individual.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.statistics.v1.Statistics.individual.index.$get(args, options))
}

export async function getStatisticsV1StatisticsIndividualDailyIndex(
  args: InferRequestType<typeof client.statistics.v1.Statistics.individual.daily.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.statistics.v1.Statistics.individual.daily.index.$get(args, options),
  )
}
