import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1Features(
  args: InferRequestType<typeof client.v1.features.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.features.$get(args, options))
}

export async function postV1Features(
  args: InferRequestType<typeof client.v1.features.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.features.$post(args, options))
}

export async function getV1FeaturesId(
  args: InferRequestType<(typeof client.v1.features)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.features[':id'].$get(args, options))
}

export async function postV1FeaturesId(
  args: InferRequestType<(typeof client.v1.features)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.features[':id'].$post(args, options))
}

export async function deleteV1FeaturesId(
  args: InferRequestType<(typeof client.v1.features)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.features[':id'].$delete(args, options))
}

export async function postV1FeaturesIdToggle(
  args: InferRequestType<(typeof client.v1.features)[':id']['toggle']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.features[':id'].toggle.$post(args, options))
}

export async function postV1FeaturesIdRevert(
  args: InferRequestType<(typeof client.v1.features)[':id']['revert']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.features[':id'].revert.$post(args, options))
}

export async function getV1FeatureKeys(
  args: InferRequestType<(typeof client.v1)['feature-keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['feature-keys'].$get(args, options))
}

export async function getV1StaleFeatures(
  args: InferRequestType<(typeof client.v1)['stale-features']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['stale-features'].$get(args, options))
}

export async function getV1Revisions(
  args: InferRequestType<typeof client.v1.revisions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.revisions.$get(args, options))
}

export async function getV1FeaturesIdRevisions(
  args: InferRequestType<(typeof client.v1.features)[':id']['revisions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.features[':id'].revisions.$get(args, options))
}

export async function postV1FeaturesIdRevisions(
  args: InferRequestType<(typeof client.v1.features)[':id']['revisions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.features[':id'].revisions.$post(args, options))
}

export async function getV1FeaturesIdRevisionsLatest(
  args: InferRequestType<(typeof client.v1.features)[':id']['revisions']['latest']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.features[':id'].revisions.latest.$get(args, options))
}

export async function getV1FeaturesIdRevisionsVersion(
  args: InferRequestType<(typeof client.v1.features)[':id']['revisions'][':version']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.features[':id'].revisions[':version'].$get(args, options))
}

export async function putV1FeaturesIdRevisionsVersionMetadata(
  args: InferRequestType<
    (typeof client.v1.features)[':id']['revisions'][':version']['metadata']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.features[':id'].revisions[':version'].metadata.$put(args, options),
  )
}

export async function putV1FeaturesIdRevisionsVersionDefaultValue(
  args: InferRequestType<
    (typeof client.v1.features)[':id']['revisions'][':version']['default-value']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.features[':id'].revisions[':version']['default-value'].$put(args, options),
  )
}

export async function putV1FeaturesIdRevisionsVersionPrerequisites(
  args: InferRequestType<
    (typeof client.v1.features)[':id']['revisions'][':version']['prerequisites']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.features[':id'].revisions[':version'].prerequisites.$put(args, options),
  )
}

export async function putV1FeaturesIdRevisionsVersionHoldout(
  args: InferRequestType<
    (typeof client.v1.features)[':id']['revisions'][':version']['holdout']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.features[':id'].revisions[':version'].holdout.$put(args, options),
  )
}

export async function putV1FeaturesIdRevisionsVersionArchive(
  args: InferRequestType<
    (typeof client.v1.features)[':id']['revisions'][':version']['archive']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.features[':id'].revisions[':version'].archive.$put(args, options),
  )
}

export async function postV1FeaturesIdRevisionsVersionToggle(
  args: InferRequestType<
    (typeof client.v1.features)[':id']['revisions'][':version']['toggle']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.features[':id'].revisions[':version'].toggle.$post(args, options),
  )
}

export async function postV1FeaturesIdRevisionsVersionRules(
  args: InferRequestType<
    (typeof client.v1.features)[':id']['revisions'][':version']['rules']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.features[':id'].revisions[':version'].rules.$post(args, options),
  )
}

export async function putV1FeaturesIdRevisionsVersionRulesRuleId(
  args: InferRequestType<
    (typeof client.v1.features)[':id']['revisions'][':version']['rules'][':ruleId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.features[':id'].revisions[':version'].rules[':ruleId'].$put(args, options),
  )
}

export async function deleteV1FeaturesIdRevisionsVersionRulesRuleId(
  args: InferRequestType<
    (typeof client.v1.features)[':id']['revisions'][':version']['rules'][':ruleId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.features[':id'].revisions[':version'].rules[':ruleId'].$delete(args, options),
  )
}

export async function postV1FeaturesIdRevisionsVersionRulesReorder(
  args: InferRequestType<
    (typeof client.v1.features)[':id']['revisions'][':version']['rules']['reorder']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.features[':id'].revisions[':version'].rules.reorder.$post(args, options),
  )
}

export async function putV1FeaturesIdRevisionsVersionRulesRuleIdRampSchedule(
  args: InferRequestType<
    (typeof client.v1.features)[':id']['revisions'][':version']['rules'][':ruleId']['ramp-schedule']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.features[':id'].revisions[':version'].rules[':ruleId']['ramp-schedule'].$put(
      args,
      options,
    ),
  )
}

export async function deleteV1FeaturesIdRevisionsVersionRulesRuleIdRampSchedule(
  args: InferRequestType<
    (typeof client.v1.features)[':id']['revisions'][':version']['rules'][':ruleId']['ramp-schedule']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.features[':id'].revisions[':version'].rules[':ruleId']['ramp-schedule'].$delete(
      args,
      options,
    ),
  )
}

export async function postV1FeaturesIdRevisionsVersionRequestReview(
  args: InferRequestType<
    (typeof client.v1.features)[':id']['revisions'][':version']['request-review']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.features[':id'].revisions[':version']['request-review'].$post(args, options),
  )
}

export async function postV1FeaturesIdRevisionsVersionSubmitReview(
  args: InferRequestType<
    (typeof client.v1.features)[':id']['revisions'][':version']['submit-review']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.features[':id'].revisions[':version']['submit-review'].$post(args, options),
  )
}

export async function getV1FeaturesIdRevisionsVersionMergeStatus(
  args: InferRequestType<
    (typeof client.v1.features)[':id']['revisions'][':version']['merge-status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.features[':id'].revisions[':version']['merge-status'].$get(args, options),
  )
}

export async function postV1FeaturesIdRevisionsVersionRebase(
  args: InferRequestType<
    (typeof client.v1.features)[':id']['revisions'][':version']['rebase']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.features[':id'].revisions[':version'].rebase.$post(args, options),
  )
}

export async function postV1FeaturesIdRevisionsVersionPublish(
  args: InferRequestType<
    (typeof client.v1.features)[':id']['revisions'][':version']['publish']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.features[':id'].revisions[':version'].publish.$post(args, options),
  )
}

export async function postV1FeaturesIdRevisionsVersionDiscard(
  args: InferRequestType<
    (typeof client.v1.features)[':id']['revisions'][':version']['discard']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.features[':id'].revisions[':version'].discard.$post(args, options),
  )
}

export async function postV1FeaturesIdRevisionsVersionRevert(
  args: InferRequestType<
    (typeof client.v1.features)[':id']['revisions'][':version']['revert']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.features[':id'].revisions[':version'].revert.$post(args, options),
  )
}

export async function getV2Features(
  args: InferRequestType<typeof client.v2.features.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.features.$get(args, options))
}

export async function postV2Features(
  args: InferRequestType<typeof client.v2.features.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.features.$post(args, options))
}

export async function getV2FeaturesId(
  args: InferRequestType<(typeof client.v2.features)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.features[':id'].$get(args, options))
}

export async function postV2FeaturesId(
  args: InferRequestType<(typeof client.v2.features)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.features[':id'].$post(args, options))
}

export async function deleteV2FeaturesId(
  args: InferRequestType<(typeof client.v2.features)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.features[':id'].$delete(args, options))
}

export async function postV2FeaturesIdToggle(
  args: InferRequestType<(typeof client.v2.features)[':id']['toggle']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.features[':id'].toggle.$post(args, options))
}

export async function postV2FeaturesIdRevert(
  args: InferRequestType<(typeof client.v2.features)[':id']['revert']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.features[':id'].revert.$post(args, options))
}

export async function getV2FeatureKeys(
  args: InferRequestType<(typeof client.v2)['feature-keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['feature-keys'].$get(args, options))
}

export async function getV2StaleFeatures(
  args: InferRequestType<(typeof client.v2)['stale-features']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['stale-features'].$get(args, options))
}

export async function getV2FeatureRevisions(
  args: InferRequestType<(typeof client.v2)['feature-revisions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['feature-revisions'].$get(args, options))
}

export async function getV2FeaturesIdRevisions(
  args: InferRequestType<(typeof client.v2.features)[':id']['revisions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.features[':id'].revisions.$get(args, options))
}

export async function postV2FeaturesIdRevisions(
  args: InferRequestType<(typeof client.v2.features)[':id']['revisions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.features[':id'].revisions.$post(args, options))
}

export async function getV2FeaturesIdRevisionsLatest(
  args: InferRequestType<(typeof client.v2.features)[':id']['revisions']['latest']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.features[':id'].revisions.latest.$get(args, options))
}

export async function getV2FeaturesIdRevisionsVersion(
  args: InferRequestType<(typeof client.v2.features)[':id']['revisions'][':version']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.features[':id'].revisions[':version'].$get(args, options))
}

export async function getV2FeaturesIdRevisionsVersionDiff(
  args: InferRequestType<
    (typeof client.v2.features)[':id']['revisions'][':version']['diff']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.features[':id'].revisions[':version'].diff.$get(args, options),
  )
}

export async function putV2FeaturesIdRevisionsVersionMetadata(
  args: InferRequestType<
    (typeof client.v2.features)[':id']['revisions'][':version']['metadata']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.features[':id'].revisions[':version'].metadata.$put(args, options),
  )
}

export async function putV2FeaturesIdRevisionsVersionDefaultValue(
  args: InferRequestType<
    (typeof client.v2.features)[':id']['revisions'][':version']['default-value']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.features[':id'].revisions[':version']['default-value'].$put(args, options),
  )
}

export async function putV2FeaturesIdRevisionsVersionPrerequisites(
  args: InferRequestType<
    (typeof client.v2.features)[':id']['revisions'][':version']['prerequisites']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.features[':id'].revisions[':version'].prerequisites.$put(args, options),
  )
}

export async function putV2FeaturesIdRevisionsVersionHoldout(
  args: InferRequestType<
    (typeof client.v2.features)[':id']['revisions'][':version']['holdout']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.features[':id'].revisions[':version'].holdout.$put(args, options),
  )
}

export async function putV2FeaturesIdRevisionsVersionArchive(
  args: InferRequestType<
    (typeof client.v2.features)[':id']['revisions'][':version']['archive']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.features[':id'].revisions[':version'].archive.$put(args, options),
  )
}

export async function postV2FeaturesIdRevisionsVersionToggle(
  args: InferRequestType<
    (typeof client.v2.features)[':id']['revisions'][':version']['toggle']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.features[':id'].revisions[':version'].toggle.$post(args, options),
  )
}

export async function postV2FeaturesIdRevisionsVersionRules(
  args: InferRequestType<
    (typeof client.v2.features)[':id']['revisions'][':version']['rules']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.features[':id'].revisions[':version'].rules.$post(args, options),
  )
}

export async function putV2FeaturesIdRevisionsVersionRulesRuleId(
  args: InferRequestType<
    (typeof client.v2.features)[':id']['revisions'][':version']['rules'][':ruleId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.features[':id'].revisions[':version'].rules[':ruleId'].$put(args, options),
  )
}

export async function deleteV2FeaturesIdRevisionsVersionRulesRuleId(
  args: InferRequestType<
    (typeof client.v2.features)[':id']['revisions'][':version']['rules'][':ruleId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.features[':id'].revisions[':version'].rules[':ruleId'].$delete(args, options),
  )
}

export async function postV2FeaturesIdRevisionsVersionRulesReorder(
  args: InferRequestType<
    (typeof client.v2.features)[':id']['revisions'][':version']['rules']['reorder']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.features[':id'].revisions[':version'].rules.reorder.$post(args, options),
  )
}

export async function putV2FeaturesIdRevisionsVersionRulesRuleIdRampSchedule(
  args: InferRequestType<
    (typeof client.v2.features)[':id']['revisions'][':version']['rules'][':ruleId']['ramp-schedule']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.features[':id'].revisions[':version'].rules[':ruleId']['ramp-schedule'].$put(
      args,
      options,
    ),
  )
}

export async function deleteV2FeaturesIdRevisionsVersionRulesRuleIdRampSchedule(
  args: InferRequestType<
    (typeof client.v2.features)[':id']['revisions'][':version']['rules'][':ruleId']['ramp-schedule']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.features[':id'].revisions[':version'].rules[':ruleId']['ramp-schedule'].$delete(
      args,
      options,
    ),
  )
}

export async function postV2FeaturesIdRevisionsVersionRequestReview(
  args: InferRequestType<
    (typeof client.v2.features)[':id']['revisions'][':version']['request-review']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.features[':id'].revisions[':version']['request-review'].$post(args, options),
  )
}

export async function postV2FeaturesIdRevisionsVersionSchedulePublish(
  args: InferRequestType<
    (typeof client.v2.features)[':id']['revisions'][':version']['schedule-publish']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.features[':id'].revisions[':version']['schedule-publish'].$post(args, options),
  )
}

export async function postV2FeaturesIdRevisionsVersionSubmitReview(
  args: InferRequestType<
    (typeof client.v2.features)[':id']['revisions'][':version']['submit-review']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.features[':id'].revisions[':version']['submit-review'].$post(args, options),
  )
}

export async function postV2FeaturesIdRevisionsVersionRecallReview(
  args: InferRequestType<
    (typeof client.v2.features)[':id']['revisions'][':version']['recall-review']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.features[':id'].revisions[':version']['recall-review'].$post(args, options),
  )
}

export async function postV2FeaturesIdRevisionsVersionUndoReview(
  args: InferRequestType<
    (typeof client.v2.features)[':id']['revisions'][':version']['undo-review']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.features[':id'].revisions[':version']['undo-review'].$post(args, options),
  )
}

export async function getV2FeaturesIdRevisionsVersionLog(
  args: InferRequestType<
    (typeof client.v2.features)[':id']['revisions'][':version']['log']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.features[':id'].revisions[':version'].log.$get(args, options),
  )
}

export async function putV2FeaturesIdRevisionsVersionLogLogId(
  args: InferRequestType<
    (typeof client.v2.features)[':id']['revisions'][':version']['log'][':logId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.features[':id'].revisions[':version'].log[':logId'].$put(args, options),
  )
}

export async function deleteV2FeaturesIdRevisionsVersionLogLogId(
  args: InferRequestType<
    (typeof client.v2.features)[':id']['revisions'][':version']['log'][':logId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.features[':id'].revisions[':version'].log[':logId'].$delete(args, options),
  )
}

export async function getV2FeaturesIdRevisionsVersionMergeStatus(
  args: InferRequestType<
    (typeof client.v2.features)[':id']['revisions'][':version']['merge-status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.features[':id'].revisions[':version']['merge-status'].$get(args, options),
  )
}

export async function postV2FeaturesIdRevisionsVersionRebasePreview(
  args: InferRequestType<
    (typeof client.v2.features)[':id']['revisions'][':version']['rebase']['preview']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.features[':id'].revisions[':version'].rebase.preview.$post(args, options),
  )
}

export async function postV2FeaturesIdRevisionsVersionRebase(
  args: InferRequestType<
    (typeof client.v2.features)[':id']['revisions'][':version']['rebase']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.features[':id'].revisions[':version'].rebase.$post(args, options),
  )
}

export async function postV2FeaturesIdRevisionsVersionPublish(
  args: InferRequestType<
    (typeof client.v2.features)[':id']['revisions'][':version']['publish']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.features[':id'].revisions[':version'].publish.$post(args, options),
  )
}

export async function postV2FeaturesIdRevisionsVersionDiscard(
  args: InferRequestType<
    (typeof client.v2.features)[':id']['revisions'][':version']['discard']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.features[':id'].revisions[':version'].discard.$post(args, options),
  )
}

export async function postV2FeaturesIdRevisionsVersionReopen(
  args: InferRequestType<
    (typeof client.v2.features)[':id']['revisions'][':version']['reopen']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.features[':id'].revisions[':version'].reopen.$post(args, options),
  )
}

export async function postV2FeaturesIdRevisionsVersionRevert(
  args: InferRequestType<
    (typeof client.v2.features)[':id']['revisions'][':version']['revert']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.features[':id'].revisions[':version'].revert.$post(args, options),
  )
}

export async function getV1Archetypes(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.archetypes.$get(undefined, options))
}

export async function postV1Archetypes(
  args: InferRequestType<typeof client.v1.archetypes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.archetypes.$post(args, options))
}

export async function getV1ArchetypesId(
  args: InferRequestType<(typeof client.v1.archetypes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.archetypes[':id'].$get(args, options))
}

export async function putV1ArchetypesId(
  args: InferRequestType<(typeof client.v1.archetypes)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.archetypes[':id'].$put(args, options))
}

export async function deleteV1ArchetypesId(
  args: InferRequestType<(typeof client.v1.archetypes)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.archetypes[':id'].$delete(args, options))
}

export async function getV1Experiments(
  args: InferRequestType<typeof client.v1.experiments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.experiments.$get(args, options))
}

export async function postV1Experiments(
  args: InferRequestType<typeof client.v1.experiments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.experiments.$post(args, options))
}

export async function getV1ExperimentsResults(
  args: InferRequestType<typeof client.v1.experiments.results.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.experiments.results.$get(args, options))
}

export async function getV1ExperimentsId(
  args: InferRequestType<(typeof client.v1.experiments)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.experiments[':id'].$get(args, options))
}

export async function postV1ExperimentsId(
  args: InferRequestType<(typeof client.v1.experiments)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.experiments[':id'].$post(args, options))
}

export async function deleteV1ExperimentsId(
  args: InferRequestType<(typeof client.v1.experiments)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.experiments[':id'].$delete(args, options))
}

export async function getV1ExperimentsIdStartChecklist(
  args: InferRequestType<(typeof client.v1.experiments)[':id']['start-checklist']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.experiments[':id']['start-checklist'].$get(args, options))
}

export async function getV1ExperimentsIdResults(
  args: InferRequestType<(typeof client.v1.experiments)[':id']['results']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.experiments[':id'].results.$get(args, options))
}

export async function postV1ExperimentsIdArchive(
  args: InferRequestType<(typeof client.v1.experiments)[':id']['archive']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.experiments[':id'].archive.$post(args, options))
}

export async function postV1ExperimentsIdUnarchive(
  args: InferRequestType<(typeof client.v1.experiments)[':id']['unarchive']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.experiments[':id'].unarchive.$post(args, options))
}

export async function postV1ExperimentsIdStart(
  args: InferRequestType<(typeof client.v1.experiments)[':id']['start']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.experiments[':id'].start.$post(args, options))
}

export async function postV1ExperimentsIdStartChecklistManualComplete(
  args: InferRequestType<
    (typeof client.v1.experiments)[':id']['start-checklist']['manual']['complete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.experiments[':id']['start-checklist'].manual.complete.$post(args, options),
  )
}

export async function postV1ExperimentsIdStop(
  args: InferRequestType<(typeof client.v1.experiments)[':id']['stop']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.experiments[':id'].stop.$post(args, options))
}

export async function putV1ExperimentsIdSchedule(
  args: InferRequestType<(typeof client.v1.experiments)[':id']['schedule']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.experiments[':id'].schedule.$put(args, options))
}

export async function postV1ExperimentsIdModifyTemporaryRollout(
  args: InferRequestType<
    (typeof client.v1.experiments)[':id']['modify-temporary-rollout']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.experiments[':id']['modify-temporary-rollout'].$post(args, options),
  )
}

export async function postV1ExperimentsIdSnapshot(
  args: InferRequestType<(typeof client.v1.experiments)[':id']['snapshot']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.experiments[':id'].snapshot.$post(args, options))
}

export async function postV1ExperimentsIdVariationVariationIdScreenshotUpload(
  args: InferRequestType<
    (typeof client.v1.experiments)[':id']['variation'][':variationId']['screenshot']['upload']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.experiments[':id'].variation[':variationId'].screenshot.upload.$post(args, options),
  )
}

export async function deleteV1ExperimentsIdVariationVariationIdScreenshot(
  args: InferRequestType<
    (typeof client.v1.experiments)[':id']['variation'][':variationId']['screenshot']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.experiments[':id'].variation[':variationId'].screenshot.$delete(args, options),
  )
}

export async function getV1ExperimentNames(
  args: InferRequestType<(typeof client.v1)['experiment-names']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['experiment-names'].$get(args, options))
}

export async function postV1ExperimentsIdComment(
  args: InferRequestType<(typeof client.v1.experiments)[':id']['comment']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.experiments[':id'].comment.$post(args, options))
}

export async function getV1ExperimentsIdVisualChangesets(
  args: InferRequestType<(typeof client.v1.experiments)[':id']['visual-changesets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.experiments[':id']['visual-changesets'].$get(args, options))
}

export async function postV1ExperimentsIdVisualChangesets(
  args: InferRequestType<(typeof client.v1.experiments)[':id']['visual-changesets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.experiments[':id']['visual-changesets'].$post(args, options))
}

export async function getV1ContextualBanditsIdCurrent(
  args: InferRequestType<(typeof client.v1)['contextual-bandits'][':id']['current']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['contextual-bandits'][':id'].current.$get(args, options))
}

export async function getV1ContextualBanditsIdSnapshots(
  args: InferRequestType<(typeof client.v1)['contextual-bandits'][':id']['snapshots']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['contextual-bandits'][':id'].snapshots.$get(args, options))
}

export async function getV1ContextualBanditsIdSnapshotsSnapshotId(
  args: InferRequestType<
    (typeof client.v1)['contextual-bandits'][':id']['snapshots'][':snapshotId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['contextual-bandits'][':id'].snapshots[':snapshotId'].$get(args, options),
  )
}

export async function getV1ContextualBanditsIdEvents(
  args: InferRequestType<(typeof client.v1)['contextual-bandits'][':id']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['contextual-bandits'][':id'].events.$get(args, options))
}

export async function getV1ContextualBanditsIdEventsEventId(
  args: InferRequestType<
    (typeof client.v1)['contextual-bandits'][':id']['events'][':eventId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['contextual-bandits'][':id'].events[':eventId'].$get(args, options),
  )
}

export async function getV1ContextualBanditsIdResults(
  args: InferRequestType<(typeof client.v1)['contextual-bandits'][':id']['results']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['contextual-bandits'][':id'].results.$get(args, options))
}

export async function getV1ContextualBanditsIdStatus(
  args: InferRequestType<(typeof client.v1)['contextual-bandits'][':id']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['contextual-bandits'][':id'].status.$get(args, options))
}

export async function getV1ContextualBanditsIdLinkedFeatures(
  args: InferRequestType<
    (typeof client.v1)['contextual-bandits'][':id']['linked-features']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['contextual-bandits'][':id']['linked-features'].$get(args, options),
  )
}

export async function putV1ContextualBanditsIdLinkedFeatureFeatureId(
  args: InferRequestType<
    (typeof client.v1)['contextual-bandits'][':id']['linked-feature'][':featureId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['contextual-bandits'][':id']['linked-feature'][':featureId'].$put(args, options),
  )
}

export async function postV1ContextualBanditsIdLinkedFeatureFeatureId(
  args: InferRequestType<
    (typeof client.v1)['contextual-bandits'][':id']['linked-feature'][':featureId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['contextual-bandits'][':id']['linked-feature'][':featureId'].$post(args, options),
  )
}

export async function deleteV1ContextualBanditsIdLinkedFeatureFeatureId(
  args: InferRequestType<
    (typeof client.v1)['contextual-bandits'][':id']['linked-feature'][':featureId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['contextual-bandits'][':id']['linked-feature'][':featureId'].$delete(args, options),
  )
}

export async function getV1SnapshotsId(
  args: InferRequestType<(typeof client.v1.snapshots)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.snapshots[':id'].$get(args, options))
}

export async function getV1Metrics(
  args: InferRequestType<typeof client.v1.metrics.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.metrics.$get(args, options))
}

export async function postV1Metrics(
  args: InferRequestType<typeof client.v1.metrics.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.metrics.$post(args, options))
}

export async function getV1MetricsId(
  args: InferRequestType<(typeof client.v1.metrics)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.metrics[':id'].$get(args, options))
}

export async function putV1MetricsId(
  args: InferRequestType<(typeof client.v1.metrics)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.metrics[':id'].$put(args, options))
}

export async function deleteV1MetricsId(
  args: InferRequestType<(typeof client.v1.metrics)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.metrics[':id'].$delete(args, options))
}

export async function getV1MetricsIdExperiments(
  args: InferRequestType<(typeof client.v1.metrics)[':id']['experiments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.metrics[':id'].experiments.$get(args, options))
}

export async function getV1UsageMetrics(
  args: InferRequestType<typeof client.v1.usage.metrics.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.usage.metrics.$get(args, options))
}

export async function getV1Segments(
  args: InferRequestType<typeof client.v1.segments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.segments.$get(args, options))
}

export async function postV1Segments(
  args: InferRequestType<typeof client.v1.segments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.segments.$post(args, options))
}

export async function getV1SegmentsId(
  args: InferRequestType<(typeof client.v1.segments)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.segments[':id'].$get(args, options))
}

export async function postV1SegmentsId(
  args: InferRequestType<(typeof client.v1.segments)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.segments[':id'].$post(args, options))
}

export async function deleteV1SegmentsId(
  args: InferRequestType<(typeof client.v1.segments)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.segments[':id'].$delete(args, options))
}

export async function getV1Dimensions(
  args: InferRequestType<typeof client.v1.dimensions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.dimensions.$get(args, options))
}

export async function postV1Dimensions(
  args: InferRequestType<typeof client.v1.dimensions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.dimensions.$post(args, options))
}

export async function getV1DimensionsId(
  args: InferRequestType<(typeof client.v1.dimensions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.dimensions[':id'].$get(args, options))
}

export async function postV1DimensionsId(
  args: InferRequestType<(typeof client.v1.dimensions)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.dimensions[':id'].$post(args, options))
}

export async function deleteV1DimensionsId(
  args: InferRequestType<(typeof client.v1.dimensions)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.dimensions[':id'].$delete(args, options))
}

export async function getV1Projects(
  args: InferRequestType<typeof client.v1.projects.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects.$get(args, options))
}

export async function postV1Projects(
  args: InferRequestType<typeof client.v1.projects.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects.$post(args, options))
}

export async function getV1ProjectsId(
  args: InferRequestType<(typeof client.v1.projects)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':id'].$get(args, options))
}

export async function putV1ProjectsId(
  args: InferRequestType<(typeof client.v1.projects)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':id'].$put(args, options))
}

export async function deleteV1ProjectsId(
  args: InferRequestType<(typeof client.v1.projects)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':id'].$delete(args, options))
}

export async function getV1Environments(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.environments.$get(undefined, options))
}

export async function postV1Environments(
  args: InferRequestType<typeof client.v1.environments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.environments.$post(args, options))
}

export async function putV1EnvironmentsId(
  args: InferRequestType<(typeof client.v1.environments)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.environments[':id'].$put(args, options))
}

export async function deleteV1EnvironmentsId(
  args: InferRequestType<(typeof client.v1.environments)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.environments[':id'].$delete(args, options))
}

export async function getV1Attributes(
  args: InferRequestType<typeof client.v1.attributes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.attributes.$get(args, options))
}

export async function postV1Attributes(
  args: InferRequestType<typeof client.v1.attributes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.attributes.$post(args, options))
}

export async function putV1AttributesProperty(
  args: InferRequestType<(typeof client.v1.attributes)[':property']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.attributes[':property'].$put(args, options))
}

export async function deleteV1AttributesProperty(
  args: InferRequestType<(typeof client.v1.attributes)[':property']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.attributes[':property'].$delete(args, options))
}

export async function getV1SdkConnections(
  args: InferRequestType<(typeof client.v1)['sdk-connections']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['sdk-connections'].$get(args, options))
}

export async function postV1SdkConnections(
  args: InferRequestType<(typeof client.v1)['sdk-connections']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['sdk-connections'].$post(args, options))
}

export async function getV1SdkConnectionsId(
  args: InferRequestType<(typeof client.v1)['sdk-connections'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['sdk-connections'][':id'].$get(args, options))
}

export async function putV1SdkConnectionsId(
  args: InferRequestType<(typeof client.v1)['sdk-connections'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['sdk-connections'][':id'].$put(args, options))
}

export async function deleteV1SdkConnectionsId(
  args: InferRequestType<(typeof client.v1)['sdk-connections'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['sdk-connections'][':id'].$delete(args, options))
}

export async function getV1SdkConnectionsLookupKey(
  args: InferRequestType<(typeof client.v1)['sdk-connections']['lookup'][':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['sdk-connections'].lookup[':key'].$get(args, options))
}

export async function getV1SdkConnectionsRevisions(
  args: InferRequestType<(typeof client.v1)['sdk-connections-revisions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['sdk-connections-revisions'].$get(args, options))
}

export async function getV1SdkConnectionsRevisionsId(
  args: InferRequestType<(typeof client.v1)['sdk-connections-revisions'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['sdk-connections-revisions'][':id'].$get(args, options))
}

export async function postV1SdkConnectionsRevisionsId(
  args: InferRequestType<(typeof client.v1)['sdk-connections-revisions'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['sdk-connections-revisions'][':id'].$post(args, options))
}

export async function getV1SdkConnectionsRevisionsIdLatest(
  args: InferRequestType<(typeof client.v1)['sdk-connections-revisions'][':id']['latest']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['sdk-connections-revisions'][':id'].latest.$get(args, options),
  )
}

export async function getV1SdkConnectionsRevisionsIdVersion(
  args: InferRequestType<
    (typeof client.v1)['sdk-connections-revisions'][':id'][':version']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['sdk-connections-revisions'][':id'][':version'].$get(args, options),
  )
}

export async function getV1SdkConnectionsRevisionsIdVersionMergeStatus(
  args: InferRequestType<
    (typeof client.v1)['sdk-connections-revisions'][':id'][':version']['merge-status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['sdk-connections-revisions'][':id'][':version']['merge-status'].$get(args, options),
  )
}

export async function putV1SdkConnectionsRevisionsIdVersionSettings(
  args: InferRequestType<
    (typeof client.v1)['sdk-connections-revisions'][':id'][':version']['settings']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['sdk-connections-revisions'][':id'][':version'].settings.$put(args, options),
  )
}

export async function putV1SdkConnectionsRevisionsIdVersionArchive(
  args: InferRequestType<
    (typeof client.v1)['sdk-connections-revisions'][':id'][':version']['archive']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['sdk-connections-revisions'][':id'][':version'].archive.$put(args, options),
  )
}

export async function postV1SdkConnectionsRevisionsIdVersionWebhooks(
  args: InferRequestType<
    (typeof client.v1)['sdk-connections-revisions'][':id'][':version']['webhooks']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['sdk-connections-revisions'][':id'][':version'].webhooks.$post(args, options),
  )
}

export async function putV1SdkConnectionsRevisionsIdVersionWebhooksWebhookId(
  args: InferRequestType<
    (typeof client.v1)['sdk-connections-revisions'][':id'][':version']['webhooks'][':webhookId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['sdk-connections-revisions'][':id'][':version'].webhooks[':webhookId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteV1SdkConnectionsRevisionsIdVersionWebhooksWebhookId(
  args: InferRequestType<
    (typeof client.v1)['sdk-connections-revisions'][':id'][':version']['webhooks'][':webhookId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['sdk-connections-revisions'][':id'][':version'].webhooks[':webhookId'].$delete(
      args,
      options,
    ),
  )
}

export async function postV1SdkConnectionsRevisionsIdVersionRequestReview(
  args: InferRequestType<
    (typeof client.v1)['sdk-connections-revisions'][':id'][':version']['request-review']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['sdk-connections-revisions'][':id'][':version']['request-review'].$post(
      args,
      options,
    ),
  )
}

export async function postV1SdkConnectionsRevisionsIdVersionSubmitReview(
  args: InferRequestType<
    (typeof client.v1)['sdk-connections-revisions'][':id'][':version']['submit-review']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['sdk-connections-revisions'][':id'][':version']['submit-review'].$post(args, options),
  )
}

export async function postV1SdkConnectionsRevisionsIdVersionRecallReview(
  args: InferRequestType<
    (typeof client.v1)['sdk-connections-revisions'][':id'][':version']['recall-review']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['sdk-connections-revisions'][':id'][':version']['recall-review'].$post(args, options),
  )
}

export async function postV1SdkConnectionsRevisionsIdVersionUndoReview(
  args: InferRequestType<
    (typeof client.v1)['sdk-connections-revisions'][':id'][':version']['undo-review']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['sdk-connections-revisions'][':id'][':version']['undo-review'].$post(args, options),
  )
}

export async function postV1SdkConnectionsRevisionsIdVersionReopen(
  args: InferRequestType<
    (typeof client.v1)['sdk-connections-revisions'][':id'][':version']['reopen']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['sdk-connections-revisions'][':id'][':version'].reopen.$post(args, options),
  )
}

export async function postV1SdkConnectionsRevisionsIdVersionSchedulePublish(
  args: InferRequestType<
    (typeof client.v1)['sdk-connections-revisions'][':id'][':version']['schedule-publish']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['sdk-connections-revisions'][':id'][':version']['schedule-publish'].$post(
      args,
      options,
    ),
  )
}

export async function postV1SdkConnectionsRevisionsIdVersionRebase(
  args: InferRequestType<
    (typeof client.v1)['sdk-connections-revisions'][':id'][':version']['rebase']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['sdk-connections-revisions'][':id'][':version'].rebase.$post(args, options),
  )
}

export async function postV1SdkConnectionsRevisionsIdVersionPublish(
  args: InferRequestType<
    (typeof client.v1)['sdk-connections-revisions'][':id'][':version']['publish']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['sdk-connections-revisions'][':id'][':version'].publish.$post(args, options),
  )
}

export async function postV1SdkConnectionsRevisionsIdVersionDiscard(
  args: InferRequestType<
    (typeof client.v1)['sdk-connections-revisions'][':id'][':version']['discard']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['sdk-connections-revisions'][':id'][':version'].discard.$post(args, options),
  )
}

export async function postV1SdkConnectionsRevisionsIdVersionRevert(
  args: InferRequestType<
    (typeof client.v1)['sdk-connections-revisions'][':id'][':version']['revert']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['sdk-connections-revisions'][':id'][':version'].revert.$post(args, options),
  )
}

export async function getV1DataSources(
  args: InferRequestType<(typeof client.v1)['data-sources']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['data-sources'].$get(args, options))
}

export async function postV1DataSources(
  args: InferRequestType<(typeof client.v1)['data-sources']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['data-sources'].$post(args, options))
}

export async function getV1DataSourcesId(
  args: InferRequestType<(typeof client.v1)['data-sources'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['data-sources'][':id'].$get(args, options))
}

export async function postV1DataSourcesId(
  args: InferRequestType<(typeof client.v1)['data-sources'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['data-sources'][':id'].$post(args, options))
}

export async function deleteV1DataSourcesId(
  args: InferRequestType<(typeof client.v1)['data-sources'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['data-sources'][':id'].$delete(args, options))
}

export async function getV1DataSourcesDataSourceIdInformationSchema(
  args: InferRequestType<
    (typeof client.v1)['data-sources'][':dataSourceId']['information-schema']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['data-sources'][':dataSourceId']['information-schema'].$get(args, options),
  )
}

export async function postV1DataSourcesIdInformationSchemaRefresh(
  args: InferRequestType<
    (typeof client.v1)['data-sources'][':id']['information-schema']['refresh']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['data-sources'][':id']['information-schema'].refresh.$post(args, options),
  )
}

export async function postV1DataSourcesIdSqlSearchTables(
  args: InferRequestType<
    (typeof client.v1)['data-sources'][':id']['sql']['search-tables']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['data-sources'][':id'].sql['search-tables'].$post(args, options),
  )
}

export async function postV1DataSourcesIdSqlTableSchema(
  args: InferRequestType<(typeof client.v1)['data-sources'][':id']['sql']['table-schema']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['data-sources'][':id'].sql['table-schema'].$post(args, options),
  )
}

export async function postV1DataSourcesIdSqlPreviewValues(
  args: InferRequestType<
    (typeof client.v1)['data-sources'][':id']['sql']['preview-values']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['data-sources'][':id'].sql['preview-values'].$post(args, options),
  )
}

export async function postV1DataSourcesIdSqlRunQuery(
  args: InferRequestType<(typeof client.v1)['data-sources'][':id']['sql']['run-query']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['data-sources'][':id'].sql['run-query'].$post(args, options))
}

export async function getV1VisualChangesetsId(
  args: InferRequestType<(typeof client.v1)['visual-changesets'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['visual-changesets'][':id'].$get(args, options))
}

export async function putV1VisualChangesetsId(
  args: InferRequestType<(typeof client.v1)['visual-changesets'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['visual-changesets'][':id'].$put(args, options))
}

export async function postV1VisualChangesetsIdVisualChange(
  args: InferRequestType<(typeof client.v1)['visual-changesets'][':id']['visual-change']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['visual-changesets'][':id']['visual-change'].$post(args, options),
  )
}

export async function putV1VisualChangesetsIdVisualChangeVisualChangeId(
  args: InferRequestType<
    (typeof client.v1)['visual-changesets'][':id']['visual-change'][':visualChangeId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['visual-changesets'][':id']['visual-change'][':visualChangeId'].$put(args, options),
  )
}

export async function getV1SavedGroups(
  args: InferRequestType<(typeof client.v1)['saved-groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['saved-groups'].$get(args, options))
}

export async function postV1SavedGroups(
  args: InferRequestType<(typeof client.v1)['saved-groups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['saved-groups'].$post(args, options))
}

export async function getV1SavedGroupsRevisions(
  args: InferRequestType<(typeof client.v1)['saved-groups-revisions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['saved-groups-revisions'].$get(args, options))
}

export async function getV1SavedGroupsId(
  args: InferRequestType<(typeof client.v1)['saved-groups'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['saved-groups'][':id'].$get(args, options))
}

export async function postV1SavedGroupsId(
  args: InferRequestType<(typeof client.v1)['saved-groups'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['saved-groups'][':id'].$post(args, options))
}

export async function deleteV1SavedGroupsId(
  args: InferRequestType<(typeof client.v1)['saved-groups'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['saved-groups'][':id'].$delete(args, options))
}

export async function postV1SavedGroupsIdArchive(
  args: InferRequestType<(typeof client.v1)['saved-groups'][':id']['archive']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['saved-groups'][':id'].archive.$post(args, options))
}

export async function postV1SavedGroupsIdUnarchive(
  args: InferRequestType<(typeof client.v1)['saved-groups'][':id']['unarchive']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['saved-groups'][':id'].unarchive.$post(args, options))
}

export async function getV1SavedGroupsIdReferences(
  args: InferRequestType<(typeof client.v1)['saved-groups'][':id']['references']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['saved-groups'][':id'].references.$get(args, options))
}

export async function getV1SavedGroupsIdUploads(
  args: InferRequestType<(typeof client.v1)['saved-groups'][':id']['uploads']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['saved-groups'][':id'].uploads.$get(args, options))
}

export async function postV1SavedGroupsIdUploads(
  args: InferRequestType<(typeof client.v1)['saved-groups'][':id']['uploads']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['saved-groups'][':id'].uploads.$post(args, options))
}

export async function postV1SavedGroupsIdUploadUrl(
  args: InferRequestType<(typeof client.v1)['saved-groups'][':id']['upload-url']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['saved-groups'][':id']['upload-url'].$post(args, options))
}

export async function postV1SavedGroupsIdUploadsVersionLoads(
  args: InferRequestType<
    (typeof client.v1)['saved-groups'][':id']['uploads'][':version']['loads']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['saved-groups'][':id'].uploads[':version'].loads.$post(args, options),
  )
}

export async function getV1SavedGroupsIdUploadsVersion(
  args: InferRequestType<(typeof client.v1)['saved-groups'][':id']['uploads'][':version']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['saved-groups'][':id'].uploads[':version'].$get(args, options),
  )
}

export async function deleteV1SavedGroupsIdUploadsVersion(
  args: InferRequestType<
    (typeof client.v1)['saved-groups'][':id']['uploads'][':version']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['saved-groups'][':id'].uploads[':version'].$delete(args, options),
  )
}

export async function getV1SavedGroupsRevisionsSavedGroupId(
  args: InferRequestType<(typeof client.v1)['saved-groups-revisions'][':savedGroupId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['saved-groups-revisions'][':savedGroupId'].$get(args, options),
  )
}

export async function postV1SavedGroupsRevisionsSavedGroupId(
  args: InferRequestType<(typeof client.v1)['saved-groups-revisions'][':savedGroupId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['saved-groups-revisions'][':savedGroupId'].$post(args, options),
  )
}

export async function getV1SavedGroupsRevisionsSavedGroupIdLatest(
  args: InferRequestType<
    (typeof client.v1)['saved-groups-revisions'][':savedGroupId']['latest']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['saved-groups-revisions'][':savedGroupId'].latest.$get(args, options),
  )
}

export async function getV1SavedGroupsRevisionsSavedGroupIdVersion(
  args: InferRequestType<
    (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['saved-groups-revisions'][':savedGroupId'][':version'].$get(args, options),
  )
}

export async function putV1SavedGroupsRevisionsSavedGroupIdVersionMetadata(
  args: InferRequestType<
    (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['metadata']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['saved-groups-revisions'][':savedGroupId'][':version'].metadata.$put(args, options),
  )
}

export async function putV1SavedGroupsRevisionsSavedGroupIdVersionCondition(
  args: InferRequestType<
    (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['condition']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['saved-groups-revisions'][':savedGroupId'][':version'].condition.$put(args, options),
  )
}

export async function putV1SavedGroupsRevisionsSavedGroupIdVersionValues(
  args: InferRequestType<
    (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['values']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['saved-groups-revisions'][':savedGroupId'][':version'].values.$put(args, options),
  )
}

export async function putV1SavedGroupsRevisionsSavedGroupIdVersionUploadVersion(
  args: InferRequestType<
    (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['upload-version']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['saved-groups-revisions'][':savedGroupId'][':version']['upload-version'].$put(
      args,
      options,
    ),
  )
}

export async function putV1SavedGroupsRevisionsSavedGroupIdVersionArchive(
  args: InferRequestType<
    (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['archive']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['saved-groups-revisions'][':savedGroupId'][':version'].archive.$put(args, options),
  )
}

export async function postV1SavedGroupsRevisionsSavedGroupIdVersionItemsAdd(
  args: InferRequestType<
    (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['items']['add']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['saved-groups-revisions'][':savedGroupId'][':version'].items.add.$post(args, options),
  )
}

export async function postV1SavedGroupsRevisionsSavedGroupIdVersionItemsRemove(
  args: InferRequestType<
    (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['items']['remove']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['saved-groups-revisions'][':savedGroupId'][':version'].items.remove.$post(
      args,
      options,
    ),
  )
}

export async function postV1SavedGroupsRevisionsSavedGroupIdVersionRequestReview(
  args: InferRequestType<
    (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['request-review']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['saved-groups-revisions'][':savedGroupId'][':version']['request-review'].$post(
      args,
      options,
    ),
  )
}

export async function postV1SavedGroupsRevisionsSavedGroupIdVersionSubmitReview(
  args: InferRequestType<
    (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['submit-review']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['saved-groups-revisions'][':savedGroupId'][':version']['submit-review'].$post(
      args,
      options,
    ),
  )
}

export async function postV1SavedGroupsRevisionsSavedGroupIdVersionRecallReview(
  args: InferRequestType<
    (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['recall-review']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['saved-groups-revisions'][':savedGroupId'][':version']['recall-review'].$post(
      args,
      options,
    ),
  )
}

export async function postV1SavedGroupsRevisionsSavedGroupIdVersionReopen(
  args: InferRequestType<
    (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['reopen']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['saved-groups-revisions'][':savedGroupId'][':version'].reopen.$post(args, options),
  )
}

export async function postV1SavedGroupsRevisionsSavedGroupIdVersionSchedulePublish(
  args: InferRequestType<
    (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['schedule-publish']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['saved-groups-revisions'][':savedGroupId'][':version']['schedule-publish'].$post(
      args,
      options,
    ),
  )
}

export async function postV1SavedGroupsRevisionsSavedGroupIdVersionUndoReview(
  args: InferRequestType<
    (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['undo-review']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['saved-groups-revisions'][':savedGroupId'][':version']['undo-review'].$post(
      args,
      options,
    ),
  )
}

export async function getV1SavedGroupsRevisionsSavedGroupIdVersionMergeStatus(
  args: InferRequestType<
    (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['merge-status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['saved-groups-revisions'][':savedGroupId'][':version']['merge-status'].$get(
      args,
      options,
    ),
  )
}

export async function postV1SavedGroupsRevisionsSavedGroupIdVersionRebase(
  args: InferRequestType<
    (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['rebase']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['saved-groups-revisions'][':savedGroupId'][':version'].rebase.$post(args, options),
  )
}

export async function postV1SavedGroupsRevisionsSavedGroupIdVersionPublish(
  args: InferRequestType<
    (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['publish']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['saved-groups-revisions'][':savedGroupId'][':version'].publish.$post(args, options),
  )
}

export async function postV1SavedGroupsRevisionsSavedGroupIdVersionDiscard(
  args: InferRequestType<
    (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['discard']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['saved-groups-revisions'][':savedGroupId'][':version'].discard.$post(args, options),
  )
}

export async function postV1SavedGroupsRevisionsSavedGroupIdVersionRevert(
  args: InferRequestType<
    (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['revert']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['saved-groups-revisions'][':savedGroupId'][':version'].revert.$post(args, options),
  )
}

export async function getV1Constants(
  args: InferRequestType<typeof client.v1.constants.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.constants.$get(args, options))
}

export async function postV1Constants(
  args: InferRequestType<typeof client.v1.constants.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.constants.$post(args, options))
}

export async function getV1ConstantsRevisions(
  args: InferRequestType<(typeof client.v1)['constants-revisions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['constants-revisions'].$get(args, options))
}

export async function getV1ConstantsKeyReferences(
  args: InferRequestType<(typeof client.v1.constants)[':key']['references']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.constants[':key'].references.$get(args, options))
}

export async function getV1ConstantsKey(
  args: InferRequestType<(typeof client.v1.constants)[':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.constants[':key'].$get(args, options))
}

export async function postV1ConstantsKey(
  args: InferRequestType<(typeof client.v1.constants)[':key']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.constants[':key'].$post(args, options))
}

export async function deleteV1ConstantsKey(
  args: InferRequestType<(typeof client.v1.constants)[':key']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.constants[':key'].$delete(args, options))
}

export async function postV1ConstantsKeyArchive(
  args: InferRequestType<(typeof client.v1.constants)[':key']['archive']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.constants[':key'].archive.$post(args, options))
}

export async function postV1ConstantsKeyUnarchive(
  args: InferRequestType<(typeof client.v1.constants)[':key']['unarchive']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.constants[':key'].unarchive.$post(args, options))
}

export async function getV1ConstantsRevisionsKey(
  args: InferRequestType<(typeof client.v1)['constants-revisions'][':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['constants-revisions'][':key'].$get(args, options))
}

export async function postV1ConstantsRevisionsKey(
  args: InferRequestType<(typeof client.v1)['constants-revisions'][':key']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['constants-revisions'][':key'].$post(args, options))
}

export async function getV1ConstantsRevisionsKeyLatest(
  args: InferRequestType<(typeof client.v1)['constants-revisions'][':key']['latest']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['constants-revisions'][':key'].latest.$get(args, options))
}

export async function getV1ConstantsRevisionsKeyVersion(
  args: InferRequestType<(typeof client.v1)['constants-revisions'][':key'][':version']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['constants-revisions'][':key'][':version'].$get(args, options),
  )
}

export async function putV1ConstantsRevisionsKeyVersionMetadata(
  args: InferRequestType<
    (typeof client.v1)['constants-revisions'][':key'][':version']['metadata']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['constants-revisions'][':key'][':version'].metadata.$put(args, options),
  )
}

export async function putV1ConstantsRevisionsKeyVersionValue(
  args: InferRequestType<
    (typeof client.v1)['constants-revisions'][':key'][':version']['value']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['constants-revisions'][':key'][':version'].value.$put(args, options),
  )
}

export async function putV1ConstantsRevisionsKeyVersionArchive(
  args: InferRequestType<
    (typeof client.v1)['constants-revisions'][':key'][':version']['archive']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['constants-revisions'][':key'][':version'].archive.$put(args, options),
  )
}

export async function postV1ConstantsRevisionsKeyVersionRequestReview(
  args: InferRequestType<
    (typeof client.v1)['constants-revisions'][':key'][':version']['request-review']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['constants-revisions'][':key'][':version']['request-review'].$post(args, options),
  )
}

export async function postV1ConstantsRevisionsKeyVersionSubmitReview(
  args: InferRequestType<
    (typeof client.v1)['constants-revisions'][':key'][':version']['submit-review']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['constants-revisions'][':key'][':version']['submit-review'].$post(args, options),
  )
}

export async function postV1ConstantsRevisionsKeyVersionRecallReview(
  args: InferRequestType<
    (typeof client.v1)['constants-revisions'][':key'][':version']['recall-review']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['constants-revisions'][':key'][':version']['recall-review'].$post(args, options),
  )
}

export async function postV1ConstantsRevisionsKeyVersionReopen(
  args: InferRequestType<
    (typeof client.v1)['constants-revisions'][':key'][':version']['reopen']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['constants-revisions'][':key'][':version'].reopen.$post(args, options),
  )
}

export async function postV1ConstantsRevisionsKeyVersionSchedulePublish(
  args: InferRequestType<
    (typeof client.v1)['constants-revisions'][':key'][':version']['schedule-publish']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['constants-revisions'][':key'][':version']['schedule-publish'].$post(args, options),
  )
}

export async function postV1ConstantsRevisionsKeyVersionUndoReview(
  args: InferRequestType<
    (typeof client.v1)['constants-revisions'][':key'][':version']['undo-review']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['constants-revisions'][':key'][':version']['undo-review'].$post(args, options),
  )
}

export async function getV1ConstantsRevisionsKeyVersionMergeStatus(
  args: InferRequestType<
    (typeof client.v1)['constants-revisions'][':key'][':version']['merge-status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['constants-revisions'][':key'][':version']['merge-status'].$get(args, options),
  )
}

export async function postV1ConstantsRevisionsKeyVersionRebase(
  args: InferRequestType<
    (typeof client.v1)['constants-revisions'][':key'][':version']['rebase']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['constants-revisions'][':key'][':version'].rebase.$post(args, options),
  )
}

export async function postV1ConstantsRevisionsKeyVersionPublish(
  args: InferRequestType<
    (typeof client.v1)['constants-revisions'][':key'][':version']['publish']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['constants-revisions'][':key'][':version'].publish.$post(args, options),
  )
}

export async function postV1ConstantsRevisionsKeyVersionDiscard(
  args: InferRequestType<
    (typeof client.v1)['constants-revisions'][':key'][':version']['discard']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['constants-revisions'][':key'][':version'].discard.$post(args, options),
  )
}

export async function postV1ConstantsRevisionsKeyVersionRevert(
  args: InferRequestType<
    (typeof client.v1)['constants-revisions'][':key'][':version']['revert']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['constants-revisions'][':key'][':version'].revert.$post(args, options),
  )
}

export async function getV1Configs(
  args: InferRequestType<typeof client.v1.configs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.configs.$get(args, options))
}

export async function postV1Configs(
  args: InferRequestType<typeof client.v1.configs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.configs.$post(args, options))
}

export async function getV1ConfigsRevisions(
  args: InferRequestType<(typeof client.v1)['configs-revisions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['configs-revisions'].$get(args, options))
}

export async function getV1ConfigsKeyReferences(
  args: InferRequestType<(typeof client.v1.configs)[':key']['references']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.configs[':key'].references.$get(args, options))
}

export async function getV1ConfigsKeyKeyUsage(
  args: InferRequestType<(typeof client.v1.configs)[':key']['key-usage']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.configs[':key']['key-usage'].$get(args, options))
}

export async function getV1ConfigsKeyLineage(
  args: InferRequestType<(typeof client.v1.configs)[':key']['lineage']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.configs[':key'].lineage.$get(args, options))
}

export async function postV1ConfigsKeySchemaVerify(
  args: InferRequestType<(typeof client.v1.configs)[':key']['schema']['verify']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.configs[':key'].schema.verify.$post(args, options))
}

export async function getV1ConfigsKeySchema(
  args: InferRequestType<(typeof client.v1.configs)[':key']['schema']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.configs[':key'].schema.$get(args, options))
}

export async function getV1ConfigsKey(
  args: InferRequestType<(typeof client.v1.configs)[':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.configs[':key'].$get(args, options))
}

export async function postV1ConfigsKey(
  args: InferRequestType<(typeof client.v1.configs)[':key']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.configs[':key'].$post(args, options))
}

export async function deleteV1ConfigsKey(
  args: InferRequestType<(typeof client.v1.configs)[':key']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.configs[':key'].$delete(args, options))
}

export async function postV1ConfigsKeyArchive(
  args: InferRequestType<(typeof client.v1.configs)[':key']['archive']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.configs[':key'].archive.$post(args, options))
}

export async function postV1ConfigsKeyUnarchive(
  args: InferRequestType<(typeof client.v1.configs)[':key']['unarchive']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.configs[':key'].unarchive.$post(args, options))
}

export async function postV1ConfigsKeyLock(
  args: InferRequestType<(typeof client.v1.configs)[':key']['lock']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.configs[':key'].lock.$post(args, options))
}

export async function postV1ConfigsKeyUnlock(
  args: InferRequestType<(typeof client.v1.configs)[':key']['unlock']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.configs[':key'].unlock.$post(args, options))
}

export async function getV1ConfigsRevisionsKey(
  args: InferRequestType<(typeof client.v1)['configs-revisions'][':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['configs-revisions'][':key'].$get(args, options))
}

export async function postV1ConfigsRevisionsKey(
  args: InferRequestType<(typeof client.v1)['configs-revisions'][':key']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['configs-revisions'][':key'].$post(args, options))
}

export async function getV1ConfigsRevisionsKeyLatest(
  args: InferRequestType<(typeof client.v1)['configs-revisions'][':key']['latest']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['configs-revisions'][':key'].latest.$get(args, options))
}

export async function getV1ConfigsRevisionsKeyVersion(
  args: InferRequestType<(typeof client.v1)['configs-revisions'][':key'][':version']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['configs-revisions'][':key'][':version'].$get(args, options))
}

export async function putV1ConfigsRevisionsKeyVersionMetadata(
  args: InferRequestType<
    (typeof client.v1)['configs-revisions'][':key'][':version']['metadata']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['configs-revisions'][':key'][':version'].metadata.$put(args, options),
  )
}

export async function putV1ConfigsRevisionsKeyVersionValue(
  args: InferRequestType<
    (typeof client.v1)['configs-revisions'][':key'][':version']['value']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['configs-revisions'][':key'][':version'].value.$put(args, options),
  )
}

export async function putV1ConfigsRevisionsKeyVersionProperty(
  args: InferRequestType<
    (typeof client.v1)['configs-revisions'][':key'][':version']['property']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['configs-revisions'][':key'][':version'].property.$put(args, options),
  )
}

export async function deleteV1ConfigsRevisionsKeyVersionProperty(
  args: InferRequestType<
    (typeof client.v1)['configs-revisions'][':key'][':version']['property']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['configs-revisions'][':key'][':version'].property.$delete(args, options),
  )
}

export async function putV1ConfigsRevisionsKeyVersionSchema(
  args: InferRequestType<
    (typeof client.v1)['configs-revisions'][':key'][':version']['schema']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['configs-revisions'][':key'][':version'].schema.$put(args, options),
  )
}

export async function putV1ConfigsRevisionsKeyVersionProjection(
  args: InferRequestType<
    (typeof client.v1)['configs-revisions'][':key'][':version']['projection']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['configs-revisions'][':key'][':version'].projection.$put(args, options),
  )
}

export async function deleteV1ConfigsRevisionsKeyVersionProjection(
  args: InferRequestType<
    (typeof client.v1)['configs-revisions'][':key'][':version']['projection']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['configs-revisions'][':key'][':version'].projection.$delete(args, options),
  )
}

export async function putV1ConfigsRevisionsKeyVersionArchive(
  args: InferRequestType<
    (typeof client.v1)['configs-revisions'][':key'][':version']['archive']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['configs-revisions'][':key'][':version'].archive.$put(args, options),
  )
}

export async function postV1ConfigsRevisionsKeyVersionRequestReview(
  args: InferRequestType<
    (typeof client.v1)['configs-revisions'][':key'][':version']['request-review']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['configs-revisions'][':key'][':version']['request-review'].$post(args, options),
  )
}

export async function postV1ConfigsRevisionsKeyVersionSubmitReview(
  args: InferRequestType<
    (typeof client.v1)['configs-revisions'][':key'][':version']['submit-review']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['configs-revisions'][':key'][':version']['submit-review'].$post(args, options),
  )
}

export async function postV1ConfigsRevisionsKeyVersionUndoReview(
  args: InferRequestType<
    (typeof client.v1)['configs-revisions'][':key'][':version']['undo-review']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['configs-revisions'][':key'][':version']['undo-review'].$post(args, options),
  )
}

export async function postV1ConfigsRevisionsKeyVersionRecallReview(
  args: InferRequestType<
    (typeof client.v1)['configs-revisions'][':key'][':version']['recall-review']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['configs-revisions'][':key'][':version']['recall-review'].$post(args, options),
  )
}

export async function postV1ConfigsRevisionsKeyVersionReopen(
  args: InferRequestType<
    (typeof client.v1)['configs-revisions'][':key'][':version']['reopen']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['configs-revisions'][':key'][':version'].reopen.$post(args, options),
  )
}

export async function postV1ConfigsRevisionsKeyVersionSchedulePublish(
  args: InferRequestType<
    (typeof client.v1)['configs-revisions'][':key'][':version']['schedule-publish']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['configs-revisions'][':key'][':version']['schedule-publish'].$post(args, options),
  )
}

export async function getV1ConfigsRevisionsKeyVersionMergeStatus(
  args: InferRequestType<
    (typeof client.v1)['configs-revisions'][':key'][':version']['merge-status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['configs-revisions'][':key'][':version']['merge-status'].$get(args, options),
  )
}

export async function postV1ConfigsRevisionsKeyVersionRebase(
  args: InferRequestType<
    (typeof client.v1)['configs-revisions'][':key'][':version']['rebase']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['configs-revisions'][':key'][':version'].rebase.$post(args, options),
  )
}

export async function postV1ConfigsRevisionsKeyVersionPublish(
  args: InferRequestType<
    (typeof client.v1)['configs-revisions'][':key'][':version']['publish']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['configs-revisions'][':key'][':version'].publish.$post(args, options),
  )
}

export async function postV1ConfigsRevisionsKeyVersionDiscard(
  args: InferRequestType<
    (typeof client.v1)['configs-revisions'][':key'][':version']['discard']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['configs-revisions'][':key'][':version'].discard.$post(args, options),
  )
}

export async function postV1ConfigsRevisionsKeyVersionRevert(
  args: InferRequestType<
    (typeof client.v1)['configs-revisions'][':key'][':version']['revert']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['configs-revisions'][':key'][':version'].revert.$post(args, options),
  )
}

export async function postV1ReleasesPublishRevisions(
  args: InferRequestType<(typeof client.v1.releases)['publish-revisions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.releases['publish-revisions'].$post(args, options))
}

export async function getV1CustomHooks(
  args: InferRequestType<(typeof client.v1)['custom-hooks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['custom-hooks'].$get(args, options))
}

export async function postV1CustomHooks(
  args: InferRequestType<(typeof client.v1)['custom-hooks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['custom-hooks'].$post(args, options))
}

export async function postV1CustomHooksTest(
  args: InferRequestType<(typeof client.v1)['custom-hooks']['test']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['custom-hooks'].test.$post(args, options))
}

export async function getV1CustomHooksId(
  args: InferRequestType<(typeof client.v1)['custom-hooks'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['custom-hooks'][':id'].$get(args, options))
}

export async function postV1CustomHooksId(
  args: InferRequestType<(typeof client.v1)['custom-hooks'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['custom-hooks'][':id'].$post(args, options))
}

export async function deleteV1CustomHooksId(
  args: InferRequestType<(typeof client.v1)['custom-hooks'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['custom-hooks'][':id'].$delete(args, options))
}

export async function getV1CustomHooksIdHistory(
  args: InferRequestType<(typeof client.v1)['custom-hooks'][':id']['history']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['custom-hooks'][':id'].history.$get(args, options))
}

export async function postV1CustomHooksIdRevert(
  args: InferRequestType<(typeof client.v1)['custom-hooks'][':id']['revert']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['custom-hooks'][':id'].revert.$post(args, options))
}

export async function getV1Organizations(
  args: InferRequestType<typeof client.v1.organizations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.organizations.$get(args, options))
}

export async function postV1Organizations(
  args: InferRequestType<typeof client.v1.organizations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.organizations.$post(args, options))
}

export async function putV1OrganizationsId(
  args: InferRequestType<(typeof client.v1.organizations)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.organizations[':id'].$put(args, options))
}

export async function getV1SdkPayloadKey(
  args: InferRequestType<(typeof client.v1)['sdk-payload'][':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['sdk-payload'][':key'].$get(args, options))
}

export async function getV1FactTables(
  args: InferRequestType<(typeof client.v1)['fact-tables']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['fact-tables'].$get(args, options))
}

export async function postV1FactTables(
  args: InferRequestType<(typeof client.v1)['fact-tables']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['fact-tables'].$post(args, options))
}

export async function getV1FactTablesId(
  args: InferRequestType<(typeof client.v1)['fact-tables'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['fact-tables'][':id'].$get(args, options))
}

export async function postV1FactTablesId(
  args: InferRequestType<(typeof client.v1)['fact-tables'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['fact-tables'][':id'].$post(args, options))
}

export async function deleteV1FactTablesId(
  args: InferRequestType<(typeof client.v1)['fact-tables'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['fact-tables'][':id'].$delete(args, options))
}

export async function getV1FactTablesFactTableIdFilters(
  args: InferRequestType<(typeof client.v1)['fact-tables'][':factTableId']['filters']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['fact-tables'][':factTableId'].filters.$get(args, options))
}

export async function postV1FactTablesFactTableIdFilters(
  args: InferRequestType<(typeof client.v1)['fact-tables'][':factTableId']['filters']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['fact-tables'][':factTableId'].filters.$post(args, options))
}

export async function getV1FactTablesFactTableIdFiltersId(
  args: InferRequestType<
    (typeof client.v1)['fact-tables'][':factTableId']['filters'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['fact-tables'][':factTableId'].filters[':id'].$get(args, options),
  )
}

export async function postV1FactTablesFactTableIdFiltersId(
  args: InferRequestType<
    (typeof client.v1)['fact-tables'][':factTableId']['filters'][':id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['fact-tables'][':factTableId'].filters[':id'].$post(args, options),
  )
}

export async function deleteV1FactTablesFactTableIdFiltersId(
  args: InferRequestType<
    (typeof client.v1)['fact-tables'][':factTableId']['filters'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['fact-tables'][':factTableId'].filters[':id'].$delete(args, options),
  )
}

export async function postV1FactTablesFactTableIdVirtualColumns(
  args: InferRequestType<
    (typeof client.v1)['fact-tables'][':factTableId']['virtual-columns']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['fact-tables'][':factTableId']['virtual-columns'].$post(args, options),
  )
}

export async function postV1FactTablesFactTableIdVirtualColumnsId(
  args: InferRequestType<
    (typeof client.v1)['fact-tables'][':factTableId']['virtual-columns'][':id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['fact-tables'][':factTableId']['virtual-columns'][':id'].$post(args, options),
  )
}

export async function deleteV1FactTablesFactTableIdVirtualColumnsId(
  args: InferRequestType<
    (typeof client.v1)['fact-tables'][':factTableId']['virtual-columns'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['fact-tables'][':factTableId']['virtual-columns'][':id'].$delete(args, options),
  )
}

export async function getV1FactTablesIdAggregatedTables(
  args: InferRequestType<(typeof client.v1)['fact-tables'][':id']['aggregated-tables']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['fact-tables'][':id']['aggregated-tables'].$get(args, options),
  )
}

export async function postV1FactTablesIdAggregatedTablesRefresh(
  args: InferRequestType<
    (typeof client.v1)['fact-tables'][':id']['aggregated-tables']['refresh']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['fact-tables'][':id']['aggregated-tables'].refresh.$post(args, options),
  )
}

export async function getV1FactTablesIdAggregatedTablesRuns(
  args: InferRequestType<
    (typeof client.v1)['fact-tables'][':id']['aggregated-tables']['runs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['fact-tables'][':id']['aggregated-tables'].runs.$get(args, options),
  )
}

export async function getV1FactTablesIdAggregatedTablesRunsRunId(
  args: InferRequestType<
    (typeof client.v1)['fact-tables'][':id']['aggregated-tables']['runs'][':runId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['fact-tables'][':id']['aggregated-tables'].runs[':runId'].$get(args, options),
  )
}

export async function getV1FactMetrics(
  args: InferRequestType<(typeof client.v1)['fact-metrics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['fact-metrics'].$get(args, options))
}

export async function postV1FactMetrics(
  args: InferRequestType<(typeof client.v1)['fact-metrics']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['fact-metrics'].$post(args, options))
}

export async function getV1FactMetricsId(
  args: InferRequestType<(typeof client.v1)['fact-metrics'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['fact-metrics'][':id'].$get(args, options))
}

export async function postV1FactMetricsId(
  args: InferRequestType<(typeof client.v1)['fact-metrics'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['fact-metrics'][':id'].$post(args, options))
}

export async function deleteV1FactMetricsId(
  args: InferRequestType<(typeof client.v1)['fact-metrics'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['fact-metrics'][':id'].$delete(args, options))
}

export async function postV1FactMetricsIdAnalysis(
  args: InferRequestType<(typeof client.v1)['fact-metrics'][':id']['analysis']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['fact-metrics'][':id'].analysis.$post(args, options))
}

export async function postV1BulkImportFacts(
  args: InferRequestType<(typeof client.v1)['bulk-import']['facts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['bulk-import'].facts.$post(args, options))
}

export async function getV1CodeRefs(
  args: InferRequestType<(typeof client.v1)['code-refs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['code-refs'].$get(args, options))
}

export async function postV1CodeRefs(
  args: InferRequestType<(typeof client.v1)['code-refs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['code-refs'].$post(args, options))
}

export async function getV1CodeRefsId(
  args: InferRequestType<(typeof client.v1)['code-refs'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['code-refs'][':id'].$get(args, options))
}

export async function getV1Members(
  args: InferRequestType<typeof client.v1.members.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.members.$get(args, options))
}

export async function postV1MembersIdRole(
  args: InferRequestType<(typeof client.v1.members)[':id']['role']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.members[':id'].role.$post(args, options))
}

export async function deleteV1MembersId(
  args: InferRequestType<(typeof client.v1.members)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.members[':id'].$delete(args, options))
}

export async function getV1QueriesId(
  args: InferRequestType<(typeof client.v1.queries)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.queries[':id'].$get(args, options))
}

export async function getV1DataSourcesIdQueries(
  args: InferRequestType<(typeof client.v1)['data-sources'][':id']['queries']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['data-sources'][':id'].queries.$get(args, options))
}

export async function postV1QueriesIdCancel(
  args: InferRequestType<(typeof client.v1.queries)[':id']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.queries[':id'].cancel.$post(args, options))
}

export async function getV1Settings(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.settings.$get(undefined, options))
}

export async function putV1SettingsApprovals(
  args: InferRequestType<typeof client.v1.settings.approvals.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.settings.approvals.$put(args, options))
}

export async function getV1Version(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.version.$get(undefined, options))
}

export async function getV1Confirmations(
  args: InferRequestType<typeof client.v1.confirmations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.confirmations.$get(args, options))
}

export async function getV1ConfirmationsId(
  args: InferRequestType<(typeof client.v1.confirmations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.confirmations[':id'].$get(args, options))
}

export async function getV1InformationSchemaTablesTableId(
  args: InferRequestType<(typeof client.v1)['information-schema-tables'][':tableId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['information-schema-tables'][':tableId'].$get(args, options))
}

export async function postV1InformationSchemaTablesTableIdRefresh(
  args: InferRequestType<
    (typeof client.v1)['information-schema-tables'][':tableId']['refresh']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['information-schema-tables'][':tableId'].refresh.$post(args, options),
  )
}

export async function getV1RampSchedules(
  args: InferRequestType<(typeof client.v1)['ramp-schedules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['ramp-schedules'].$get(args, options))
}

export async function postV1RampSchedules(
  args: InferRequestType<(typeof client.v1)['ramp-schedules']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['ramp-schedules'].$post(args, options))
}

export async function postV1RampSchedulesIdActionsStart(
  args: InferRequestType<(typeof client.v1)['ramp-schedules'][':id']['actions']['start']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['ramp-schedules'][':id'].actions.start.$post(args, options))
}

export async function postV1RampSchedulesIdActionsPause(
  args: InferRequestType<(typeof client.v1)['ramp-schedules'][':id']['actions']['pause']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['ramp-schedules'][':id'].actions.pause.$post(args, options))
}

export async function postV1RampSchedulesIdActionsResume(
  args: InferRequestType<(typeof client.v1)['ramp-schedules'][':id']['actions']['resume']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['ramp-schedules'][':id'].actions.resume.$post(args, options))
}

export async function postV1RampSchedulesIdActionsRetry(
  args: InferRequestType<(typeof client.v1)['ramp-schedules'][':id']['actions']['retry']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['ramp-schedules'][':id'].actions.retry.$post(args, options))
}

export async function postV1RampSchedulesIdActionsRollback(
  args: InferRequestType<
    (typeof client.v1)['ramp-schedules'][':id']['actions']['rollback']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['ramp-schedules'][':id'].actions.rollback.$post(args, options),
  )
}

export async function postV1RampSchedulesIdActionsRestart(
  args: InferRequestType<
    (typeof client.v1)['ramp-schedules'][':id']['actions']['restart']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['ramp-schedules'][':id'].actions.restart.$post(args, options),
  )
}

export async function postV1RampSchedulesIdActionsJump(
  args: InferRequestType<(typeof client.v1)['ramp-schedules'][':id']['actions']['jump']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['ramp-schedules'][':id'].actions.jump.$post(args, options))
}

export async function postV1RampSchedulesIdActionsComplete(
  args: InferRequestType<
    (typeof client.v1)['ramp-schedules'][':id']['actions']['complete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['ramp-schedules'][':id'].actions.complete.$post(args, options),
  )
}

export async function postV1RampSchedulesIdActionsApproveStep(
  args: InferRequestType<
    (typeof client.v1)['ramp-schedules'][':id']['actions']['approve-step']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['ramp-schedules'][':id'].actions['approve-step'].$post(args, options),
  )
}

export async function postV1RampSchedulesIdActionsAddTarget(
  args: InferRequestType<
    (typeof client.v1)['ramp-schedules'][':id']['actions']['add-target']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['ramp-schedules'][':id'].actions['add-target'].$post(args, options),
  )
}

export async function postV1RampSchedulesIdActionsEjectTarget(
  args: InferRequestType<
    (typeof client.v1)['ramp-schedules'][':id']['actions']['eject-target']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['ramp-schedules'][':id'].actions['eject-target'].$post(args, options),
  )
}

export async function postV1RampSchedulesIdActionsAdvance(
  args: InferRequestType<
    (typeof client.v1)['ramp-schedules'][':id']['actions']['advance']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['ramp-schedules'][':id'].actions.advance.$post(args, options),
  )
}

export async function getV1RampSchedulesIdStatus(
  args: InferRequestType<(typeof client.v1)['ramp-schedules'][':id']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['ramp-schedules'][':id'].status.$get(args, options))
}

export async function postV1RampSchedulesIdActionsSetMonitoringMode(
  args: InferRequestType<
    (typeof client.v1)['ramp-schedules'][':id']['actions']['set-monitoring-mode']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['ramp-schedules'][':id'].actions['set-monitoring-mode'].$post(args, options),
  )
}

export async function postV1RampSchedulesIdActionsSetAutoUpdate(
  args: InferRequestType<
    (typeof client.v1)['ramp-schedules'][':id']['actions']['set-auto-update']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['ramp-schedules'][':id'].actions['set-auto-update'].$post(args, options),
  )
}

export async function putV1RampSchedulesIdMonitoring(
  args: InferRequestType<(typeof client.v1)['ramp-schedules'][':id']['monitoring']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['ramp-schedules'][':id'].monitoring.$put(args, options))
}

export async function putV1RampSchedulesIdLockdown(
  args: InferRequestType<(typeof client.v1)['ramp-schedules'][':id']['lockdown']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['ramp-schedules'][':id'].lockdown.$put(args, options))
}

export async function putV1RampSchedulesIdSteps(
  args: InferRequestType<(typeof client.v1)['ramp-schedules'][':id']['steps']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['ramp-schedules'][':id'].steps.$put(args, options))
}

export async function postV1RampSchedulesIdActionsRefreshMonitoring(
  args: InferRequestType<
    (typeof client.v1)['ramp-schedules'][':id']['actions']['refresh-monitoring']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['ramp-schedules'][':id'].actions['refresh-monitoring'].$post(args, options),
  )
}

export async function postV1RampSchedulesActionsRollback(
  args: InferRequestType<(typeof client.v1)['ramp-schedules']['actions']['rollback']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['ramp-schedules'].actions.rollback.$post(args, options))
}

export async function postV1RampSchedulesActionsPause(
  args: InferRequestType<(typeof client.v1)['ramp-schedules']['actions']['pause']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['ramp-schedules'].actions.pause.$post(args, options))
}

export async function getV1Reports(
  args: InferRequestType<typeof client.v1.reports.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reports.$get(args, options))
}

export async function postV1Reports(
  args: InferRequestType<typeof client.v1.reports.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reports.$post(args, options))
}

export async function getV1ReportsId(
  args: InferRequestType<(typeof client.v1.reports)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reports[':id'].$get(args, options))
}

export async function postV1ReportsIdRefresh(
  args: InferRequestType<(typeof client.v1.reports)[':id']['refresh']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reports[':id'].refresh.$post(args, options))
}

export async function putV1ReportsIdMetadata(
  args: InferRequestType<(typeof client.v1.reports)[':id']['metadata']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reports[':id'].metadata.$put(args, options))
}

export async function putV1ReportsIdSettings(
  args: InferRequestType<(typeof client.v1.reports)[':id']['settings']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reports[':id'].settings.$put(args, options))
}

export async function getV1Namespaces(
  args: InferRequestType<typeof client.v1.namespaces.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.namespaces.$get(args, options))
}

export async function postV1Namespaces(
  args: InferRequestType<typeof client.v1.namespaces.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.namespaces.$post(args, options))
}

export async function getV1NamespacesId(
  args: InferRequestType<(typeof client.v1.namespaces)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.namespaces[':id'].$get(args, options))
}

export async function putV1NamespacesId(
  args: InferRequestType<(typeof client.v1.namespaces)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.namespaces[':id'].$put(args, options))
}

export async function deleteV1NamespacesId(
  args: InferRequestType<(typeof client.v1.namespaces)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.namespaces[':id'].$delete(args, options))
}

export async function getV1NamespacesIdMemberships(
  args: InferRequestType<(typeof client.v1.namespaces)[':id']['memberships']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.namespaces[':id'].memberships.$get(args, options))
}

export async function postV1NamespacesIdRotateSeed(
  args: InferRequestType<(typeof client.v1.namespaces)[':id']['rotateSeed']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.namespaces[':id'].rotateSeed.$post(args, options))
}

export async function getV1EventWebhooks(options?: ClientRequestOptions) {
  return await parseResponse(client.v1['event-webhooks'].$get(undefined, options))
}

export async function postV1EventWebhooks(
  args: InferRequestType<(typeof client.v1)['event-webhooks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['event-webhooks'].$post(args, options))
}

export async function getV1EventWebhooksId(
  args: InferRequestType<(typeof client.v1)['event-webhooks'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['event-webhooks'][':id'].$get(args, options))
}

export async function putV1EventWebhooksId(
  args: InferRequestType<(typeof client.v1)['event-webhooks'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['event-webhooks'][':id'].$put(args, options))
}

export async function deleteV1EventWebhooksId(
  args: InferRequestType<(typeof client.v1)['event-webhooks'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['event-webhooks'][':id'].$delete(args, options))
}

export async function getV1EventWebhooksIdLogs(
  args: InferRequestType<(typeof client.v1)['event-webhooks'][':id']['logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['event-webhooks'][':id'].logs.$get(args, options))
}

export async function postV1EventWebhooksIdTest(
  args: InferRequestType<(typeof client.v1)['event-webhooks'][':id']['test']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['event-webhooks'][':id'].test.$post(args, options))
}

export async function getV1Audits(
  args: InferRequestType<typeof client.v1.audits.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.audits.$get(args, options))
}

export async function getV1Events(
  args: InferRequestType<typeof client.v1.events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.events.$get(args, options))
}

export async function getV1EventsId(
  args: InferRequestType<(typeof client.v1.events)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.events[':id'].$get(args, options))
}

export async function postV1TransformCopy(
  args: InferRequestType<(typeof client.v1)['transform-copy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['transform-copy'].$post(args, options))
}

export async function getV1DashboardsId(
  args: InferRequestType<(typeof client.v1.dashboards)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.dashboards[':id'].$get(args, options))
}

export async function putV1DashboardsId(
  args: InferRequestType<(typeof client.v1.dashboards)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.dashboards[':id'].$put(args, options))
}

export async function deleteV1DashboardsId(
  args: InferRequestType<(typeof client.v1.dashboards)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.dashboards[':id'].$delete(args, options))
}

export async function getV1Dashboards(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.dashboards.$get(undefined, options))
}

export async function postV1Dashboards(
  args: InferRequestType<typeof client.v1.dashboards.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.dashboards.$post(args, options))
}

export async function postV2Dashboards(
  args: InferRequestType<typeof client.v2.dashboards.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.dashboards.$post(args, options))
}

export async function getV1DashboardsByExperimentExperimentId(
  args: InferRequestType<(typeof client.v1.dashboards)['by-experiment'][':experimentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.dashboards['by-experiment'][':experimentId'].$get(args, options),
  )
}

export async function getV1ContextualBanditsId(
  args: InferRequestType<(typeof client.v1)['contextual-bandits'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['contextual-bandits'][':id'].$get(args, options))
}

export async function putV1ContextualBanditsId(
  args: InferRequestType<(typeof client.v1)['contextual-bandits'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['contextual-bandits'][':id'].$put(args, options))
}

export async function deleteV1ContextualBanditsId(
  args: InferRequestType<(typeof client.v1)['contextual-bandits'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['contextual-bandits'][':id'].$delete(args, options))
}

export async function getV1ContextualBandits(
  args: InferRequestType<(typeof client.v1)['contextual-bandits']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['contextual-bandits'].$get(args, options))
}

export async function postV1ContextualBandits(
  args: InferRequestType<(typeof client.v1)['contextual-bandits']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['contextual-bandits'].$post(args, options))
}

export async function postV1ContextualBanditsIdStart(
  args: InferRequestType<(typeof client.v1)['contextual-bandits'][':id']['start']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['contextual-bandits'][':id'].start.$post(args, options))
}

export async function postV1ContextualBanditsIdStop(
  args: InferRequestType<(typeof client.v1)['contextual-bandits'][':id']['stop']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['contextual-bandits'][':id'].stop.$post(args, options))
}

export async function postV1ContextualBanditsIdRefresh(
  args: InferRequestType<(typeof client.v1)['contextual-bandits'][':id']['refresh']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['contextual-bandits'][':id'].refresh.$post(args, options))
}

export async function postV1ContextualBanditsIdVariations(
  args: InferRequestType<(typeof client.v1)['contextual-bandits'][':id']['variations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['contextual-bandits'][':id'].variations.$post(args, options))
}

export async function postV1ContextualBanditsIdCancel(
  args: InferRequestType<(typeof client.v1)['contextual-bandits'][':id']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['contextual-bandits'][':id'].cancel.$post(args, options))
}

export async function getV1ContextualBanditsIdVisualChangesets(
  args: InferRequestType<
    (typeof client.v1)['contextual-bandits'][':id']['visual-changesets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['contextual-bandits'][':id']['visual-changesets'].$get(args, options),
  )
}

export async function postV1ContextualBanditsIdVisualChangesets(
  args: InferRequestType<
    (typeof client.v1)['contextual-bandits'][':id']['visual-changesets']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['contextual-bandits'][':id']['visual-changesets'].$post(args, options),
  )
}

export async function getV1ContextualBanditQueriesId(
  args: InferRequestType<(typeof client.v1)['contextual-bandit-queries'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['contextual-bandit-queries'][':id'].$get(args, options))
}

export async function putV1ContextualBanditQueriesId(
  args: InferRequestType<(typeof client.v1)['contextual-bandit-queries'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['contextual-bandit-queries'][':id'].$put(args, options))
}

export async function deleteV1ContextualBanditQueriesId(
  args: InferRequestType<(typeof client.v1)['contextual-bandit-queries'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['contextual-bandit-queries'][':id'].$delete(args, options))
}

export async function getV1ContextualBanditQueries(
  args: InferRequestType<(typeof client.v1)['contextual-bandit-queries']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['contextual-bandit-queries'].$get(args, options))
}

export async function postV1ContextualBanditQueries(
  args: InferRequestType<(typeof client.v1)['contextual-bandit-queries']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['contextual-bandit-queries'].$post(args, options))
}

export async function getV1InterleavingExposureQueriesId(
  args: InferRequestType<(typeof client.v1)['interleaving-exposure-queries'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['interleaving-exposure-queries'][':id'].$get(args, options))
}

export async function putV1InterleavingExposureQueriesId(
  args: InferRequestType<(typeof client.v1)['interleaving-exposure-queries'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['interleaving-exposure-queries'][':id'].$put(args, options))
}

export async function deleteV1InterleavingExposureQueriesId(
  args: InferRequestType<(typeof client.v1)['interleaving-exposure-queries'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['interleaving-exposure-queries'][':id'].$delete(args, options),
  )
}

export async function getV1InterleavingExposureQueries(
  args: InferRequestType<(typeof client.v1)['interleaving-exposure-queries']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['interleaving-exposure-queries'].$get(args, options))
}

export async function postV1InterleavingExposureQueries(
  args: InferRequestType<(typeof client.v1)['interleaving-exposure-queries']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['interleaving-exposure-queries'].$post(args, options))
}

export async function getV1InterleavingsId(
  args: InferRequestType<(typeof client.v1.interleavings)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.interleavings[':id'].$get(args, options))
}

export async function putV1InterleavingsId(
  args: InferRequestType<(typeof client.v1.interleavings)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.interleavings[':id'].$put(args, options))
}

export async function deleteV1InterleavingsId(
  args: InferRequestType<(typeof client.v1.interleavings)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.interleavings[':id'].$delete(args, options))
}

export async function getV1Interleavings(
  args: InferRequestType<typeof client.v1.interleavings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.interleavings.$get(args, options))
}

export async function postV1Interleavings(
  args: InferRequestType<typeof client.v1.interleavings.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.interleavings.$post(args, options))
}

export async function postV1InterleavingsIdStart(
  args: InferRequestType<(typeof client.v1.interleavings)[':id']['start']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.interleavings[':id'].start.$post(args, options))
}

export async function postV1InterleavingsIdStop(
  args: InferRequestType<(typeof client.v1.interleavings)[':id']['stop']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.interleavings[':id'].stop.$post(args, options))
}

export async function postV1InterleavingsIdRefresh(
  args: InferRequestType<(typeof client.v1.interleavings)[':id']['refresh']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.interleavings[':id'].refresh.$post(args, options))
}

export async function getV1InterleavingsIdResults(
  args: InferRequestType<(typeof client.v1.interleavings)[':id']['results']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.interleavings[':id'].results.$get(args, options))
}

export async function getV1InterleavingsIdStatus(
  args: InferRequestType<(typeof client.v1.interleavings)[':id']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.interleavings[':id'].status.$get(args, options))
}

export async function getV1InterleavingsIdSnapshots(
  args: InferRequestType<(typeof client.v1.interleavings)[':id']['snapshots']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.interleavings[':id'].snapshots.$get(args, options))
}

export async function getV1InterleavingsIdSnapshotsSnapshotId(
  args: InferRequestType<
    (typeof client.v1.interleavings)[':id']['snapshots'][':snapshotId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.interleavings[':id'].snapshots[':snapshotId'].$get(args, options),
  )
}

export async function getV1CustomFields(
  args: InferRequestType<(typeof client.v1)['custom-fields']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['custom-fields'].$get(args, options))
}

export async function postV1CustomFields(
  args: InferRequestType<(typeof client.v1)['custom-fields']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['custom-fields'].$post(args, options))
}

export async function getV1CustomFieldsId(
  args: InferRequestType<(typeof client.v1)['custom-fields'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['custom-fields'][':id'].$get(args, options))
}

export async function putV1CustomFieldsId(
  args: InferRequestType<(typeof client.v1)['custom-fields'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['custom-fields'][':id'].$put(args, options))
}

export async function deleteV1CustomFieldsId(
  args: InferRequestType<(typeof client.v1)['custom-fields'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['custom-fields'][':id'].$delete(args, options))
}

export async function getV1MetricGroupsId(
  args: InferRequestType<(typeof client.v1)['metric-groups'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['metric-groups'][':id'].$get(args, options))
}

export async function putV1MetricGroupsId(
  args: InferRequestType<(typeof client.v1)['metric-groups'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['metric-groups'][':id'].$put(args, options))
}

export async function deleteV1MetricGroupsId(
  args: InferRequestType<(typeof client.v1)['metric-groups'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['metric-groups'][':id'].$delete(args, options))
}

export async function getV1MetricGroups(options?: ClientRequestOptions) {
  return await parseResponse(client.v1['metric-groups'].$get(undefined, options))
}

export async function postV1MetricGroups(
  args: InferRequestType<(typeof client.v1)['metric-groups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['metric-groups'].$post(args, options))
}

export async function getV1TeamsId(
  args: InferRequestType<(typeof client.v1.teams)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.teams[':id'].$get(args, options))
}

export async function putV1TeamsId(
  args: InferRequestType<(typeof client.v1.teams)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.teams[':id'].$put(args, options))
}

export async function deleteV1TeamsId(
  args: InferRequestType<(typeof client.v1.teams)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.teams[':id'].$delete(args, options))
}

export async function getV1Teams(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.teams.$get(undefined, options))
}

export async function postV1Teams(
  args: InferRequestType<typeof client.v1.teams.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.teams.$post(args, options))
}

export async function postV1TeamsIdMembers(
  args: InferRequestType<(typeof client.v1.teams)[':id']['members']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.teams[':id'].members.$post(args, options))
}

export async function deleteV1TeamsIdMembers(
  args: InferRequestType<(typeof client.v1.teams)[':id']['members']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.teams[':id'].members.$delete(args, options))
}

export async function getV1ExperimentTemplatesId(
  args: InferRequestType<(typeof client.v1)['experiment-templates'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['experiment-templates'][':id'].$get(args, options))
}

export async function putV1ExperimentTemplatesId(
  args: InferRequestType<(typeof client.v1)['experiment-templates'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['experiment-templates'][':id'].$put(args, options))
}

export async function deleteV1ExperimentTemplatesId(
  args: InferRequestType<(typeof client.v1)['experiment-templates'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['experiment-templates'][':id'].$delete(args, options))
}

export async function getV1ExperimentTemplates(
  args: InferRequestType<(typeof client.v1)['experiment-templates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['experiment-templates'].$get(args, options))
}

export async function postV1ExperimentTemplates(
  args: InferRequestType<(typeof client.v1)['experiment-templates']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['experiment-templates'].$post(args, options))
}

export async function postV1ExperimentTemplatesBulkImport(
  args: InferRequestType<(typeof client.v1)['experiment-templates']['bulk-import']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['experiment-templates']['bulk-import'].$post(args, options))
}

export async function postV1ProductAnalyticsMetricExploration(
  args: InferRequestType<(typeof client.v1)['product-analytics']['metric-exploration']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['product-analytics']['metric-exploration'].$post(args, options),
  )
}

export async function postV1ProductAnalyticsFactTableExploration(
  args: InferRequestType<
    (typeof client.v1)['product-analytics']['fact-table-exploration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['product-analytics']['fact-table-exploration'].$post(args, options),
  )
}

export async function postV1ProductAnalyticsDataSourceExploration(
  args: InferRequestType<
    (typeof client.v1)['product-analytics']['data-source-exploration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['product-analytics']['data-source-exploration'].$post(args, options),
  )
}

export async function postV1ProductAnalyticsSqlExploration(
  args: InferRequestType<(typeof client.v1)['product-analytics']['sql-exploration']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['product-analytics']['sql-exploration'].$post(args, options))
}

export async function postV1ProductAnalyticsFunnelExploration(
  args: InferRequestType<(typeof client.v1)['product-analytics']['funnel-exploration']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['product-analytics']['funnel-exploration'].$post(args, options),
  )
}

export async function postV1ProductAnalyticsJourneyExploration(
  args: InferRequestType<(typeof client.v1)['product-analytics']['journey-exploration']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['product-analytics']['journey-exploration'].$post(args, options),
  )
}

export async function getV1ProductAnalyticsSearch(
  args: InferRequestType<(typeof client.v1)['product-analytics']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['product-analytics'].search.$get(args, options))
}

export async function getV1ProductAnalyticsColumns(
  args: InferRequestType<(typeof client.v1)['product-analytics']['columns']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['product-analytics'].columns.$get(args, options))
}

export async function postV1ProductAnalyticsColumnValues(
  args: InferRequestType<(typeof client.v1)['product-analytics']['column-values']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['product-analytics']['column-values'].$post(args, options))
}

export async function getV1ProductAnalyticsExplorationsId(
  args: InferRequestType<(typeof client.v1)['product-analytics']['explorations'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['product-analytics'].explorations[':id'].$get(args, options))
}

export async function getV1RampScheduleTemplatesId(
  args: InferRequestType<(typeof client.v1)['ramp-schedule-templates'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['ramp-schedule-templates'][':id'].$get(args, options))
}

export async function putV1RampScheduleTemplatesId(
  args: InferRequestType<(typeof client.v1)['ramp-schedule-templates'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['ramp-schedule-templates'][':id'].$put(args, options))
}

export async function deleteV1RampScheduleTemplatesId(
  args: InferRequestType<(typeof client.v1)['ramp-schedule-templates'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['ramp-schedule-templates'][':id'].$delete(args, options))
}

export async function getV1RampScheduleTemplates(options?: ClientRequestOptions) {
  return await parseResponse(client.v1['ramp-schedule-templates'].$get(undefined, options))
}

export async function postV1RampScheduleTemplates(
  args: InferRequestType<(typeof client.v1)['ramp-schedule-templates']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['ramp-schedule-templates'].$post(args, options))
}

export async function getV1RampSchedulesId(
  args: InferRequestType<(typeof client.v1)['ramp-schedules'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['ramp-schedules'][':id'].$get(args, options))
}

export async function putV1RampSchedulesId(
  args: InferRequestType<(typeof client.v1)['ramp-schedules'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['ramp-schedules'][':id'].$put(args, options))
}

export async function deleteV1RampSchedulesId(
  args: InferRequestType<(typeof client.v1)['ramp-schedules'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['ramp-schedules'][':id'].$delete(args, options))
}

export async function getV1LearningsId(
  args: InferRequestType<(typeof client.v1.learnings)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.learnings[':id'].$get(args, options))
}

export async function putV1LearningsId(
  args: InferRequestType<(typeof client.v1.learnings)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.learnings[':id'].$put(args, options))
}

export async function deleteV1LearningsId(
  args: InferRequestType<(typeof client.v1.learnings)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.learnings[':id'].$delete(args, options))
}

export async function getV1Learnings(
  args: InferRequestType<typeof client.v1.learnings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.learnings.$get(args, options))
}

export async function postV1Learnings(
  args: InferRequestType<typeof client.v1.learnings.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.learnings.$post(args, options))
}

export async function postV1LearningsSearch(
  args: InferRequestType<typeof client.v1.learnings.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.learnings.search.$post(args, options))
}

export async function getV1HoldoutsId(
  args: InferRequestType<(typeof client.v1.holdouts)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.holdouts[':id'].$get(args, options))
}

export async function putV1HoldoutsId(
  args: InferRequestType<(typeof client.v1.holdouts)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.holdouts[':id'].$put(args, options))
}

export async function getV1Holdouts(
  args: InferRequestType<typeof client.v1.holdouts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.holdouts.$get(args, options))
}

export async function postV1Holdouts(
  args: InferRequestType<typeof client.v1.holdouts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.holdouts.$post(args, options))
}

export async function postV1HoldoutsIdStart(
  args: InferRequestType<(typeof client.v1.holdouts)[':id']['start']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.holdouts[':id'].start.$post(args, options))
}

export async function postV1HoldoutsIdStartAnalysis(
  args: InferRequestType<(typeof client.v1.holdouts)[':id']['start-analysis']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.holdouts[':id']['start-analysis'].$post(args, options))
}

export async function postV1HoldoutsIdStop(
  args: InferRequestType<(typeof client.v1.holdouts)[':id']['stop']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.holdouts[':id'].stop.$post(args, options))
}

export async function getV1AutoRuns(options?: ClientRequestOptions) {
  return await parseResponse(client.v1['auto-runs'].$get(undefined, options))
}

export async function postV1AutoRuns(
  args: InferRequestType<(typeof client.v1)['auto-runs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['auto-runs'].$post(args, options))
}

export async function getV1AutoRunsId(
  args: InferRequestType<(typeof client.v1)['auto-runs'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['auto-runs'][':id'].$get(args, options))
}

export async function putV1AutoRunsId(
  args: InferRequestType<(typeof client.v1)['auto-runs'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['auto-runs'][':id'].$put(args, options))
}

export async function postV1AutoRunsIdArtifacts(
  args: InferRequestType<(typeof client.v1)['auto-runs'][':id']['artifacts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['auto-runs'][':id'].artifacts.$post(args, options))
}

export async function getV1Populations(
  args: InferRequestType<typeof client.v1.populations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.populations.$get(args, options))
}

export async function postV1Populations(
  args: InferRequestType<typeof client.v1.populations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.populations.$post(args, options))
}

export async function getV1PopulationsId(
  args: InferRequestType<(typeof client.v1.populations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.populations[':id'].$get(args, options))
}

export async function putV1PopulationsId(
  args: InferRequestType<(typeof client.v1.populations)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.populations[':id'].$put(args, options))
}

export async function deleteV1PopulationsId(
  args: InferRequestType<(typeof client.v1.populations)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.populations[':id'].$delete(args, options))
}

export async function getV1WebhookSecretsId(
  args: InferRequestType<(typeof client.v1)['webhook-secrets'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['webhook-secrets'][':id'].$get(args, options))
}

export async function deleteV1WebhookSecretsId(
  args: InferRequestType<(typeof client.v1)['webhook-secrets'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['webhook-secrets'][':id'].$delete(args, options))
}

export async function getV1WebhookSecrets(options?: ClientRequestOptions) {
  return await parseResponse(client.v1['webhook-secrets'].$get(undefined, options))
}

export async function getV1SdkConnectionsIdWebhooks(
  args: InferRequestType<(typeof client.v1)['sdk-connections'][':id']['webhooks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['sdk-connections'][':id'].webhooks.$get(args, options))
}

export async function postV1SdkConnectionsIdWebhooks(
  args: InferRequestType<(typeof client.v1)['sdk-connections'][':id']['webhooks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['sdk-connections'][':id'].webhooks.$post(args, options))
}

export async function putV1SdkWebhooksId(
  args: InferRequestType<(typeof client.v1)['sdk-webhooks'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['sdk-webhooks'][':id'].$put(args, options))
}

export async function deleteV1SdkWebhooksId(
  args: InferRequestType<(typeof client.v1)['sdk-webhooks'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['sdk-webhooks'][':id'].$delete(args, options))
}

export async function postV1SdkWebhooksIdTest(
  args: InferRequestType<(typeof client.v1)['sdk-webhooks'][':id']['test']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['sdk-webhooks'][':id'].test.$post(args, options))
}
