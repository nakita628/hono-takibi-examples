import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV2AdminAnalytics(
  args: InferRequestType<typeof client.v2.admin.analytics.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.admin.analytics.$get(args, options))
}

export async function getV2AdminAnalyticsCustomTags(
  args: InferRequestType<(typeof client.v2.admin.analytics)['custom-tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.admin.analytics['custom-tags'].$get(args, options))
}

export async function getV2AdminDeveloperKeys(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.admin['developer-keys'].$get(undefined, options))
}

export async function postV2AdminDeveloperKeys(
  args: InferRequestType<(typeof client.v2.admin)['developer-keys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.admin['developer-keys'].$post(args, options))
}

export async function putV2AdminDeveloperKeysDeactivate(
  args: InferRequestType<(typeof client.v2.admin)['developer-keys']['deactivate']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.admin['developer-keys'].deactivate.$put(args, options))
}

export async function putV2AdminDeveloperKeysLabel(
  args: InferRequestType<(typeof client.v2.admin)['developer-keys']['label']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.admin['developer-keys'].label.$put(args, options))
}

export async function putV2AdminDeveloperKeysLimits(
  args: InferRequestType<(typeof client.v2.admin)['developer-keys']['limits']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.admin['developer-keys'].limits.$put(args, options))
}

export async function postV2Translate(
  args: InferRequestType<typeof client.v2.translate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.translate.$post(args, options))
}

export async function postV2Document(
  args: InferRequestType<typeof client.v2.document.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.document.$post(args, options))
}

export async function postV2DocumentDocumentId(
  args: InferRequestType<(typeof client.v2.document)[':document_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.document[':document_id'].$post(args, options))
}

export async function postV2DocumentDocumentIdResult(
  args: InferRequestType<(typeof client.v2.document)[':document_id']['result']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.document[':document_id'].result.$post(args, options))
}

export async function getV2GlossaryLanguagePairs(options?: ClientRequestOptions) {
  return await parseResponse(client.v2['glossary-language-pairs'].$get(undefined, options))
}

export async function getV3Glossaries(options?: ClientRequestOptions) {
  return await parseResponse(client.v3.glossaries.$get(undefined, options))
}

export async function postV3Glossaries(
  args: InferRequestType<typeof client.v3.glossaries.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.glossaries.$post(args, options))
}

export async function getV3GlossariesGlossaryId(
  args: InferRequestType<(typeof client.v3.glossaries)[':glossary_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.glossaries[':glossary_id'].$get(args, options))
}

export async function deleteV3GlossariesGlossaryId(
  args: InferRequestType<(typeof client.v3.glossaries)[':glossary_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.glossaries[':glossary_id'].$delete(args, options))
}

export async function patchV3GlossariesGlossaryId(
  args: InferRequestType<(typeof client.v3.glossaries)[':glossary_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.glossaries[':glossary_id'].$patch(args, options))
}

export async function getV3GlossariesGlossaryIdEntries(
  args: InferRequestType<(typeof client.v3.glossaries)[':glossary_id']['entries']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.glossaries[':glossary_id'].entries.$get(args, options))
}

export async function putV3GlossariesGlossaryIdDictionaries(
  args: InferRequestType<(typeof client.v3.glossaries)[':glossary_id']['dictionaries']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.glossaries[':glossary_id'].dictionaries.$put(args, options))
}

export async function deleteV3GlossariesGlossaryIdDictionaries(
  args: InferRequestType<(typeof client.v3.glossaries)[':glossary_id']['dictionaries']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v3.glossaries[':glossary_id'].dictionaries.$delete(args, options),
  )
}

export async function getV2Glossaries(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.glossaries.$get(undefined, options))
}

export async function postV2Glossaries(
  args: InferRequestType<typeof client.v2.glossaries.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.glossaries.$post(args, options))
}

export async function getV2GlossariesGlossaryId(
  args: InferRequestType<(typeof client.v2.glossaries)[':glossary_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.glossaries[':glossary_id'].$get(args, options))
}

export async function deleteV2GlossariesGlossaryId(
  args: InferRequestType<(typeof client.v2.glossaries)[':glossary_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.glossaries[':glossary_id'].$delete(args, options))
}

export async function getV2GlossariesGlossaryIdEntries(
  args: InferRequestType<(typeof client.v2.glossaries)[':glossary_id']['entries']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.glossaries[':glossary_id'].entries.$get(args, options))
}

export async function postV2WriteRephrase(
  args: InferRequestType<typeof client.v2.write.rephrase.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.write.rephrase.$post(args, options))
}

export async function postV2WriteCorrect(
  args: InferRequestType<typeof client.v2.write.correct.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.write.correct.$post(args, options))
}

export async function getV2Usage(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.usage.$get(undefined, options))
}

export async function getV2Languages(
  args: InferRequestType<typeof client.v2.languages.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.languages.$get(args, options))
}

export async function getV3SpokenTerms(options?: ClientRequestOptions) {
  return await parseResponse(client.v3['spoken-terms'].$get(undefined, options))
}

export async function postV3SpokenTerms(
  args: InferRequestType<(typeof client.v3)['spoken-terms']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3['spoken-terms'].$post(args, options))
}

export async function getV3SpokenTermsSpokenTermsId(
  args: InferRequestType<(typeof client.v3)['spoken-terms'][':spoken_terms_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3['spoken-terms'][':spoken_terms_id'].$get(args, options))
}

export async function deleteV3SpokenTermsSpokenTermsId(
  args: InferRequestType<(typeof client.v3)['spoken-terms'][':spoken_terms_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3['spoken-terms'][':spoken_terms_id'].$delete(args, options))
}

export async function patchV3SpokenTermsSpokenTermsId(
  args: InferRequestType<(typeof client.v3)['spoken-terms'][':spoken_terms_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3['spoken-terms'][':spoken_terms_id'].$patch(args, options))
}

export async function getV3SpokenTermsSpokenTermsIdEntries(
  args: InferRequestType<(typeof client.v3)['spoken-terms'][':spoken_terms_id']['entries']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v3['spoken-terms'][':spoken_terms_id'].entries.$get(args, options),
  )
}

export async function putV3SpokenTermsSpokenTermsIdTermLists(
  args: InferRequestType<
    (typeof client.v3)['spoken-terms'][':spoken_terms_id']['term-lists']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v3['spoken-terms'][':spoken_terms_id']['term-lists'].$put(args, options),
  )
}

export async function deleteV3SpokenTermsSpokenTermsIdTermLists(
  args: InferRequestType<
    (typeof client.v3)['spoken-terms'][':spoken_terms_id']['term-lists']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v3['spoken-terms'][':spoken_terms_id']['term-lists'].$delete(args, options),
  )
}

export async function getV3LanguagesResources(options?: ClientRequestOptions) {
  return await parseResponse(client.v3.languages.resources.$get(undefined, options))
}

export async function getV3Languages(
  args: InferRequestType<typeof client.v3.languages.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.languages.$get(args, options))
}

export async function getV3TranslationMemories(
  args: InferRequestType<typeof client.v3.translation_memories.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.translation_memories.$get(args, options))
}

export async function postV3TranslationMemoriesImport(
  args: InferRequestType<typeof client.v3.translation_memories.import.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.translation_memories.import.$post(args, options))
}

export async function getV3TranslationMemoriesJobsJobId(
  args: InferRequestType<(typeof client.v3.translation_memories.jobs)[':job_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.translation_memories.jobs[':job_id'].$get(args, options))
}

export async function getV3TranslationMemoriesTranslationMemoryId(
  args: InferRequestType<(typeof client.v3.translation_memories)[':translation_memory_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v3.translation_memories[':translation_memory_id'].$get(args, options),
  )
}

export async function deleteV3TranslationMemoriesTranslationMemoryId(
  args: InferRequestType<
    (typeof client.v3.translation_memories)[':translation_memory_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v3.translation_memories[':translation_memory_id'].$delete(args, options),
  )
}

export async function getV3TranslationMemoriesTranslationMemoryIdSegments(
  args: InferRequestType<
    (typeof client.v3.translation_memories)[':translation_memory_id']['segments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v3.translation_memories[':translation_memory_id'].segments.$get(args, options),
  )
}

export async function postV3TranslationMemoriesTranslationMemoryIdExport(
  args: InferRequestType<
    (typeof client.v3.translation_memories)[':translation_memory_id']['export']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v3.translation_memories[':translation_memory_id'].export.$post(args, options),
  )
}

export async function getV3StyleProfiles(
  args: InferRequestType<typeof client.v3.style_profiles.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.style_profiles.$get(args, options))
}

export async function postV3StyleProfiles(
  args: InferRequestType<typeof client.v3.style_profiles.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.style_profiles.$post(args, options))
}

export async function getV3StyleProfilesStyleProfileId(
  args: InferRequestType<(typeof client.v3.style_profiles)[':style_profile_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.style_profiles[':style_profile_id'].$get(args, options))
}

export async function deleteV3StyleProfilesStyleProfileId(
  args: InferRequestType<(typeof client.v3.style_profiles)[':style_profile_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.style_profiles[':style_profile_id'].$delete(args, options))
}

export async function patchV3StyleProfilesStyleProfileId(
  args: InferRequestType<(typeof client.v3.style_profiles)[':style_profile_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.style_profiles[':style_profile_id'].$patch(args, options))
}

export async function getV3StyleRules(
  args: InferRequestType<typeof client.v3.style_rules.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.style_rules.$get(args, options))
}

export async function postV3StyleRules(
  args: InferRequestType<typeof client.v3.style_rules.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.style_rules.$post(args, options))
}

export async function getV3StyleRulesStyleId(
  args: InferRequestType<(typeof client.v3.style_rules)[':style_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.style_rules[':style_id'].$get(args, options))
}

export async function deleteV3StyleRulesStyleId(
  args: InferRequestType<(typeof client.v3.style_rules)[':style_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.style_rules[':style_id'].$delete(args, options))
}

export async function patchV3StyleRulesStyleId(
  args: InferRequestType<(typeof client.v3.style_rules)[':style_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.style_rules[':style_id'].$patch(args, options))
}

export async function putV3StyleRulesStyleIdConfiguredRules(
  args: InferRequestType<(typeof client.v3.style_rules)[':style_id']['configured_rules']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v3.style_rules[':style_id'].configured_rules.$put(args, options),
  )
}

export async function postV3StyleRulesStyleIdCustomInstructions(
  args: InferRequestType<
    (typeof client.v3.style_rules)[':style_id']['custom_instructions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v3.style_rules[':style_id'].custom_instructions.$post(args, options),
  )
}

export async function getV3StyleRulesStyleIdCustomInstructionsInstructionId(
  args: InferRequestType<
    (typeof client.v3.style_rules)[':style_id']['custom_instructions'][':instruction_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v3.style_rules[':style_id'].custom_instructions[':instruction_id'].$get(args, options),
  )
}

export async function putV3StyleRulesStyleIdCustomInstructionsInstructionId(
  args: InferRequestType<
    (typeof client.v3.style_rules)[':style_id']['custom_instructions'][':instruction_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v3.style_rules[':style_id'].custom_instructions[':instruction_id'].$put(args, options),
  )
}

export async function deleteV3StyleRulesStyleIdCustomInstructionsInstructionId(
  args: InferRequestType<
    (typeof client.v3.style_rules)[':style_id']['custom_instructions'][':instruction_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v3.style_rules[':style_id'].custom_instructions[':instruction_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getV3VoiceRealtime(
  args: InferRequestType<typeof client.v3.voice.realtime.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.voice.realtime.$get(args, options))
}

export async function postV3VoiceRealtime(
  args: InferRequestType<typeof client.v3.voice.realtime.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.voice.realtime.$post(args, options))
}

export async function postV1JobsVoiceTranslate(
  args: InferRequestType<typeof client.v1.jobs.voice.translate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.jobs.voice.translate.$post(args, options))
}

export async function getV1JobsVoiceTranslateJobId(
  args: InferRequestType<(typeof client.v1.jobs.voice.translate)[':job_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.jobs.voice.translate[':job_id'].$get(args, options))
}

export async function getV1QualityEvaluationsJobId(
  args: InferRequestType<(typeof client.v1)['quality-evaluations'][':job_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['quality-evaluations'][':job_id'].$get(args, options))
}
