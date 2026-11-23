import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetTranscribeCreateCallAnalyticsCategory(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Transcribe.CreateCallAnalyticsCategory']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Transcribe.CreateCallAnalyticsCategory'].$post(args, options),
  )
}

export async function postXAmzTargetTranscribeCreateLanguageModel(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.CreateLanguageModel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Transcribe.CreateLanguageModel'].$post(args, options),
  )
}

export async function postXAmzTargetTranscribeCreateMedicalVocabulary(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Transcribe.CreateMedicalVocabulary']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Transcribe.CreateMedicalVocabulary'].$post(args, options),
  )
}

export async function postXAmzTargetTranscribeCreateVocabulary(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.CreateVocabulary']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Transcribe.CreateVocabulary'].$post(args, options),
  )
}

export async function postXAmzTargetTranscribeCreateVocabularyFilter(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Transcribe.CreateVocabularyFilter']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Transcribe.CreateVocabularyFilter'].$post(args, options),
  )
}

export async function postXAmzTargetTranscribeDeleteCallAnalyticsCategory(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Transcribe.DeleteCallAnalyticsCategory']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Transcribe.DeleteCallAnalyticsCategory'].$post(args, options),
  )
}

export async function postXAmzTargetTranscribeDeleteCallAnalyticsJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Transcribe.DeleteCallAnalyticsJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Transcribe.DeleteCallAnalyticsJob'].$post(args, options),
  )
}

export async function postXAmzTargetTranscribeDeleteLanguageModel(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.DeleteLanguageModel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Transcribe.DeleteLanguageModel'].$post(args, options),
  )
}

export async function postXAmzTargetTranscribeDeleteMedicalTranscriptionJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Transcribe.DeleteMedicalTranscriptionJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Transcribe.DeleteMedicalTranscriptionJob'].$post(args, options),
  )
}

export async function postXAmzTargetTranscribeDeleteMedicalVocabulary(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Transcribe.DeleteMedicalVocabulary']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Transcribe.DeleteMedicalVocabulary'].$post(args, options),
  )
}

export async function postXAmzTargetTranscribeDeleteTranscriptionJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Transcribe.DeleteTranscriptionJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Transcribe.DeleteTranscriptionJob'].$post(args, options),
  )
}

export async function postXAmzTargetTranscribeDeleteVocabulary(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.DeleteVocabulary']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Transcribe.DeleteVocabulary'].$post(args, options),
  )
}

export async function postXAmzTargetTranscribeDeleteVocabularyFilter(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Transcribe.DeleteVocabularyFilter']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Transcribe.DeleteVocabularyFilter'].$post(args, options),
  )
}

export async function postXAmzTargetTranscribeDescribeLanguageModel(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Transcribe.DescribeLanguageModel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Transcribe.DescribeLanguageModel'].$post(args, options),
  )
}

export async function postXAmzTargetTranscribeGetCallAnalyticsCategory(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Transcribe.GetCallAnalyticsCategory']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Transcribe.GetCallAnalyticsCategory'].$post(args, options),
  )
}

export async function postXAmzTargetTranscribeGetCallAnalyticsJob(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.GetCallAnalyticsJob']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Transcribe.GetCallAnalyticsJob'].$post(args, options),
  )
}

export async function postXAmzTargetTranscribeGetMedicalTranscriptionJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Transcribe.GetMedicalTranscriptionJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Transcribe.GetMedicalTranscriptionJob'].$post(args, options),
  )
}

export async function postXAmzTargetTranscribeGetMedicalVocabulary(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.GetMedicalVocabulary']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Transcribe.GetMedicalVocabulary'].$post(args, options),
  )
}

export async function postXAmzTargetTranscribeGetTranscriptionJob(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.GetTranscriptionJob']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Transcribe.GetTranscriptionJob'].$post(args, options),
  )
}

export async function postXAmzTargetTranscribeGetVocabulary(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.GetVocabulary']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=Transcribe.GetVocabulary'].$post(args, options))
}

export async function postXAmzTargetTranscribeGetVocabularyFilter(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.GetVocabularyFilter']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Transcribe.GetVocabularyFilter'].$post(args, options),
  )
}

export async function postXAmzTargetTranscribeListCallAnalyticsCategories(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Transcribe.ListCallAnalyticsCategories']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Transcribe.ListCallAnalyticsCategories'].$post(args, options),
  )
}

export async function postXAmzTargetTranscribeListCallAnalyticsJobs(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Transcribe.ListCallAnalyticsJobs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Transcribe.ListCallAnalyticsJobs'].$post(args, options),
  )
}

export async function postXAmzTargetTranscribeListLanguageModels(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.ListLanguageModels']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Transcribe.ListLanguageModels'].$post(args, options),
  )
}

export async function postXAmzTargetTranscribeListMedicalTranscriptionJobs(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Transcribe.ListMedicalTranscriptionJobs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Transcribe.ListMedicalTranscriptionJobs'].$post(args, options),
  )
}

export async function postXAmzTargetTranscribeListMedicalVocabularies(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Transcribe.ListMedicalVocabularies']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Transcribe.ListMedicalVocabularies'].$post(args, options),
  )
}

export async function postXAmzTargetTranscribeListTagsForResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.ListTagsForResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Transcribe.ListTagsForResource'].$post(args, options),
  )
}

export async function postXAmzTargetTranscribeListTranscriptionJobs(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Transcribe.ListTranscriptionJobs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Transcribe.ListTranscriptionJobs'].$post(args, options),
  )
}

export async function postXAmzTargetTranscribeListVocabularies(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.ListVocabularies']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Transcribe.ListVocabularies'].$post(args, options),
  )
}

export async function postXAmzTargetTranscribeListVocabularyFilters(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Transcribe.ListVocabularyFilters']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Transcribe.ListVocabularyFilters'].$post(args, options),
  )
}

export async function postXAmzTargetTranscribeStartCallAnalyticsJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Transcribe.StartCallAnalyticsJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Transcribe.StartCallAnalyticsJob'].$post(args, options),
  )
}

export async function postXAmzTargetTranscribeStartMedicalTranscriptionJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Transcribe.StartMedicalTranscriptionJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Transcribe.StartMedicalTranscriptionJob'].$post(args, options),
  )
}

export async function postXAmzTargetTranscribeStartTranscriptionJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Transcribe.StartTranscriptionJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Transcribe.StartTranscriptionJob'].$post(args, options),
  )
}

export async function postXAmzTargetTranscribeTagResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.TagResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=Transcribe.TagResource'].$post(args, options))
}

export async function postXAmzTargetTranscribeUntagResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.UntagResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=Transcribe.UntagResource'].$post(args, options))
}

export async function postXAmzTargetTranscribeUpdateCallAnalyticsCategory(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Transcribe.UpdateCallAnalyticsCategory']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Transcribe.UpdateCallAnalyticsCategory'].$post(args, options),
  )
}

export async function postXAmzTargetTranscribeUpdateMedicalVocabulary(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Transcribe.UpdateMedicalVocabulary']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Transcribe.UpdateMedicalVocabulary'].$post(args, options),
  )
}

export async function postXAmzTargetTranscribeUpdateVocabulary(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.UpdateVocabulary']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Transcribe.UpdateVocabulary'].$post(args, options),
  )
}

export async function postXAmzTargetTranscribeUpdateVocabularyFilter(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Transcribe.UpdateVocabularyFilter']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Transcribe.UpdateVocabularyFilter'].$post(args, options),
  )
}
