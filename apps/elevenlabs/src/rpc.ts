import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1History(
  args: InferRequestType<typeof client.v1.history.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.history.$get(args, options))
}

export async function getV1HistoryHistoryItemId(
  args: InferRequestType<(typeof client.v1.history)[':history_item_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.history[':history_item_id'].$get(args, options))
}

export async function deleteV1HistoryHistoryItemId(
  args: InferRequestType<(typeof client.v1.history)[':history_item_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.history[':history_item_id'].$delete(args, options))
}

export async function getV1HistoryHistoryItemIdAudio(
  args: InferRequestType<(typeof client.v1.history)[':history_item_id']['audio']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.history[':history_item_id'].audio.$get(args, options))
}

export async function postV1HistoryDownload(
  args: InferRequestType<typeof client.v1.history.download.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.history.download.$post(args, options))
}

export async function postV1SoundGeneration(
  args: InferRequestType<(typeof client.v1)['sound-generation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['sound-generation'].$post(args, options))
}

export async function postV1AudioIsolation(
  args: InferRequestType<(typeof client.v1)['audio-isolation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['audio-isolation'].$post(args, options))
}

export async function getV1AudioIsolationHistory(
  args: InferRequestType<(typeof client.v1)['audio-isolation']['history']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['audio-isolation'].history.$get(args, options))
}

export async function deleteV1AudioIsolationHistoryHistoryItemId(
  args: InferRequestType<
    (typeof client.v1)['audio-isolation']['history'][':history_item_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['audio-isolation'].history[':history_item_id'].$delete(args, options),
  )
}

export async function postV1AudioIsolationStream(
  args: InferRequestType<(typeof client.v1)['audio-isolation']['stream']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['audio-isolation'].stream.$post(args, options))
}

export async function getV1AudioEffectsCatalog(
  args: InferRequestType<(typeof client.v1)['audio-effects']['catalog']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['audio-effects'].catalog.$get(args, options))
}

export async function deleteV1VoicesVoiceIdSamplesSampleId(
  args: InferRequestType<
    (typeof client.v1.voices)[':voice_id']['samples'][':sample_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.voices[':voice_id'].samples[':sample_id'].$delete(args, options),
  )
}

export async function getV1VoicesVoiceIdSamplesSampleIdAudio(
  args: InferRequestType<
    (typeof client.v1.voices)[':voice_id']['samples'][':sample_id']['audio']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.voices[':voice_id'].samples[':sample_id'].audio.$get(args, options),
  )
}

export async function postV1TextToSpeechVoiceId(
  args: InferRequestType<(typeof client.v1)['text-to-speech'][':voice_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['text-to-speech'][':voice_id'].$post(args, options))
}

export async function postV1TextToSpeechVoiceIdWithTimestamps(
  args: InferRequestType<
    (typeof client.v1)['text-to-speech'][':voice_id']['with-timestamps']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['text-to-speech'][':voice_id']['with-timestamps'].$post(args, options),
  )
}

export async function postV1TextToSpeechVoiceIdStream(
  args: InferRequestType<(typeof client.v1)['text-to-speech'][':voice_id']['stream']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['text-to-speech'][':voice_id'].stream.$post(args, options))
}

export async function postV1TextToSpeechVoiceIdStreamWithTimestamps(
  args: InferRequestType<
    (typeof client.v1)['text-to-speech'][':voice_id']['stream']['with-timestamps']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['text-to-speech'][':voice_id'].stream['with-timestamps'].$post(args, options),
  )
}

export async function postV1TextToDialogue(
  args: InferRequestType<(typeof client.v1)['text-to-dialogue']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['text-to-dialogue'].$post(args, options))
}

export async function postV1TextToDialogueStream(
  args: InferRequestType<(typeof client.v1)['text-to-dialogue']['stream']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['text-to-dialogue'].stream.$post(args, options))
}

export async function postV1TextToDialogueStreamWithTimestamps(
  args: InferRequestType<
    (typeof client.v1)['text-to-dialogue']['stream']['with-timestamps']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['text-to-dialogue'].stream['with-timestamps'].$post(args, options),
  )
}

export async function postV1TextToDialogueWithTimestamps(
  args: InferRequestType<(typeof client.v1)['text-to-dialogue']['with-timestamps']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['text-to-dialogue']['with-timestamps'].$post(args, options))
}

export async function postV1VoiceChangerVoiceId(
  args: InferRequestType<(typeof client.v1)['voice-changer'][':voice_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['voice-changer'][':voice_id'].$post(args, options))
}

export async function postV1VoiceChangerVoiceIdStream(
  args: InferRequestType<(typeof client.v1)['voice-changer'][':voice_id']['stream']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['voice-changer'][':voice_id'].stream.$post(args, options))
}

export async function postV1TextToVoiceCreatePreviews(
  args: InferRequestType<(typeof client.v1)['text-to-voice']['create-previews']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['text-to-voice']['create-previews'].$post(args, options))
}

export async function postV1TextToVoice(
  args: InferRequestType<(typeof client.v1)['text-to-voice']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['text-to-voice'].$post(args, options))
}

export async function postV1TextToVoiceDesign(
  args: InferRequestType<(typeof client.v1)['text-to-voice']['design']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['text-to-voice'].design.$post(args, options))
}

export async function postV1TextToVoiceVoiceIdRemix(
  args: InferRequestType<(typeof client.v1)['text-to-voice'][':voice_id']['remix']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['text-to-voice'][':voice_id'].remix.$post(args, options))
}

export async function getV1TextToVoiceGeneratedVoiceIdStream(
  args: InferRequestType<
    (typeof client.v1)['text-to-voice'][':generated_voice_id']['stream']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['text-to-voice'][':generated_voice_id'].stream.$get(args, options),
  )
}

export async function getV1User(
  args: InferRequestType<typeof client.v1.user.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.user.$get(args, options))
}

export async function getV1UserSubscription(
  args: InferRequestType<typeof client.v1.user.subscription.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.user.subscription.$get(args, options))
}

export async function getV1VoicesCollections(
  args: InferRequestType<typeof client.v1.voices.collections.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.voices.collections.$get(args, options))
}

export async function postV1VoicesCollections(
  args: InferRequestType<typeof client.v1.voices.collections.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.voices.collections.$post(args, options))
}

export async function getV1VoicesCollectionsCollectionId(
  args: InferRequestType<(typeof client.v1.voices.collections)[':collection_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.voices.collections[':collection_id'].$get(args, options))
}

export async function deleteV1VoicesCollectionsCollectionId(
  args: InferRequestType<(typeof client.v1.voices.collections)[':collection_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.voices.collections[':collection_id'].$delete(args, options))
}

export async function patchV1VoicesCollectionsCollectionId(
  args: InferRequestType<(typeof client.v1.voices.collections)[':collection_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.voices.collections[':collection_id'].$patch(args, options))
}

export async function postV1VoicesCollectionsCollectionIdVoiceVoiceId(
  args: InferRequestType<
    (typeof client.v1.voices.collections)[':collection_id']['voice'][':voice_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.voices.collections[':collection_id'].voice[':voice_id'].$post(args, options),
  )
}

export async function deleteV1VoicesCollectionsCollectionIdVoiceVoiceId(
  args: InferRequestType<
    (typeof client.v1.voices.collections)[':collection_id']['voice'][':voice_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.voices.collections[':collection_id'].voice[':voice_id'].$delete(args, options),
  )
}

export async function getV1VoicesSettingsDefault(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.voices.settings.default.$get(undefined, options))
}

export async function getV1VoicesVoiceIdSettings(
  args: InferRequestType<(typeof client.v1.voices)[':voice_id']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.voices[':voice_id'].settings.$get(args, options))
}

export async function postV1VoicesVoiceIdSettingsEdit(
  args: InferRequestType<(typeof client.v1.voices)[':voice_id']['settings']['edit']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.voices[':voice_id'].settings.edit.$post(args, options))
}

export async function getV1VoicesAccents(
  args: InferRequestType<typeof client.v1.voices.accents.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.voices.accents.$get(args, options))
}

export async function getV1Voices(
  args: InferRequestType<typeof client.v1.voices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.voices.$get(args, options))
}

export async function getV1VoicesVoiceId(
  args: InferRequestType<(typeof client.v1.voices)[':voice_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.voices[':voice_id'].$get(args, options))
}

export async function deleteV1VoicesVoiceId(
  args: InferRequestType<(typeof client.v1.voices)[':voice_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.voices[':voice_id'].$delete(args, options))
}

export async function postV1VoicesVoiceIdEdit(
  args: InferRequestType<(typeof client.v1.voices)[':voice_id']['edit']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.voices[':voice_id'].edit.$post(args, options))
}

export async function getV2Voices(
  args: InferRequestType<typeof client.v2.voices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.voices.$get(args, options))
}

export async function postV1VoicesVoiceIdReplicateToIsolatedEnvironment(
  args: InferRequestType<
    (typeof client.v1.voices)[':voice_id']['replicate-to-isolated-environment']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.voices[':voice_id']['replicate-to-isolated-environment'].$post(args, options),
  )
}

export async function postV1VoicesAdd(
  args: InferRequestType<typeof client.v1.voices.add.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.voices.add.$post(args, options))
}

export async function postV1VoicesAddPublicUserIdVoiceId(
  args: InferRequestType<(typeof client.v1.voices.add)[':public_user_id'][':voice_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.voices.add[':public_user_id'][':voice_id'].$post(args, options),
  )
}

export async function postV1StudioPodcasts(
  args: InferRequestType<typeof client.v1.studio.podcasts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.studio.podcasts.$post(args, options))
}

export async function postV1StudioProjectsProjectIdPronunciationDictionaries(
  args: InferRequestType<
    (typeof client.v1.studio.projects)[':project_id']['pronunciation-dictionaries']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.studio.projects[':project_id']['pronunciation-dictionaries'].$post(args, options),
  )
}

export async function getV1StudioProjects(
  args: InferRequestType<typeof client.v1.studio.projects.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.studio.projects.$get(args, options))
}

export async function postV1StudioProjects(
  args: InferRequestType<typeof client.v1.studio.projects.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.studio.projects.$post(args, options))
}

export async function getV1StudioProjectsProjectId(
  args: InferRequestType<(typeof client.v1.studio.projects)[':project_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.studio.projects[':project_id'].$get(args, options))
}

export async function postV1StudioProjectsProjectId(
  args: InferRequestType<(typeof client.v1.studio.projects)[':project_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.studio.projects[':project_id'].$post(args, options))
}

export async function deleteV1StudioProjectsProjectId(
  args: InferRequestType<(typeof client.v1.studio.projects)[':project_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.studio.projects[':project_id'].$delete(args, options))
}

export async function postV1StudioProjectsProjectIdContent(
  args: InferRequestType<(typeof client.v1.studio.projects)[':project_id']['content']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.studio.projects[':project_id'].content.$post(args, options))
}

export async function postV1StudioProjectsProjectIdConvert(
  args: InferRequestType<(typeof client.v1.studio.projects)[':project_id']['convert']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.studio.projects[':project_id'].convert.$post(args, options))
}

export async function getV1StudioProjectsProjectIdSnapshots(
  args: InferRequestType<(typeof client.v1.studio.projects)[':project_id']['snapshots']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.studio.projects[':project_id'].snapshots.$get(args, options))
}

export async function getV1StudioProjectsProjectIdSnapshotsProjectSnapshotId(
  args: InferRequestType<
    (typeof client.v1.studio.projects)[':project_id']['snapshots'][':project_snapshot_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.studio.projects[':project_id'].snapshots[':project_snapshot_id'].$get(args, options),
  )
}

export async function postV1StudioProjectsProjectIdSnapshotsProjectSnapshotIdStream(
  args: InferRequestType<
    (typeof client.v1.studio.projects)[':project_id']['snapshots'][':project_snapshot_id']['stream']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.studio.projects[':project_id'].snapshots[':project_snapshot_id'].stream.$post(
      args,
      options,
    ),
  )
}

export async function postV1StudioProjectsProjectIdSnapshotsProjectSnapshotIdArchive(
  args: InferRequestType<
    (typeof client.v1.studio.projects)[':project_id']['snapshots'][':project_snapshot_id']['archive']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.studio.projects[':project_id'].snapshots[':project_snapshot_id'].archive.$post(
      args,
      options,
    ),
  )
}

export async function getV1StudioProjectsProjectIdChapters(
  args: InferRequestType<(typeof client.v1.studio.projects)[':project_id']['chapters']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.studio.projects[':project_id'].chapters.$get(args, options))
}

export async function postV1StudioProjectsProjectIdChapters(
  args: InferRequestType<(typeof client.v1.studio.projects)[':project_id']['chapters']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.studio.projects[':project_id'].chapters.$post(args, options))
}

export async function getV1StudioProjectsProjectIdChaptersChapterId(
  args: InferRequestType<
    (typeof client.v1.studio.projects)[':project_id']['chapters'][':chapter_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.studio.projects[':project_id'].chapters[':chapter_id'].$get(args, options),
  )
}

export async function postV1StudioProjectsProjectIdChaptersChapterId(
  args: InferRequestType<
    (typeof client.v1.studio.projects)[':project_id']['chapters'][':chapter_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.studio.projects[':project_id'].chapters[':chapter_id'].$post(args, options),
  )
}

export async function deleteV1StudioProjectsProjectIdChaptersChapterId(
  args: InferRequestType<
    (typeof client.v1.studio.projects)[':project_id']['chapters'][':chapter_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.studio.projects[':project_id'].chapters[':chapter_id'].$delete(args, options),
  )
}

export async function postV1StudioProjectsProjectIdChaptersChapterIdConvert(
  args: InferRequestType<
    (typeof client.v1.studio.projects)[':project_id']['chapters'][':chapter_id']['convert']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.studio.projects[':project_id'].chapters[':chapter_id'].convert.$post(args, options),
  )
}

export async function getV1StudioProjectsProjectIdChaptersChapterIdSnapshots(
  args: InferRequestType<
    (typeof client.v1.studio.projects)[':project_id']['chapters'][':chapter_id']['snapshots']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.studio.projects[':project_id'].chapters[':chapter_id'].snapshots.$get(args, options),
  )
}

export async function getV1StudioProjectsProjectIdChaptersChapterIdSnapshotsChapterSnapshotId(
  args: InferRequestType<
    (typeof client.v1.studio.projects)[':project_id']['chapters'][':chapter_id']['snapshots'][':chapter_snapshot_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.studio.projects[':project_id'].chapters[':chapter_id'].snapshots[
      ':chapter_snapshot_id'
    ].$get(args, options),
  )
}

export async function postV1StudioProjectsProjectIdChaptersChapterIdSnapshotsChapterSnapshotIdStream(
  args: InferRequestType<
    (typeof client.v1.studio.projects)[':project_id']['chapters'][':chapter_id']['snapshots'][':chapter_snapshot_id']['stream']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.studio.projects[':project_id'].chapters[':chapter_id'].snapshots[
      ':chapter_snapshot_id'
    ].stream.$post(args, options),
  )
}

export async function getV1StudioProjectsProjectIdMutedTracks(
  args: InferRequestType<(typeof client.v1.studio.projects)[':project_id']['muted-tracks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.studio.projects[':project_id']['muted-tracks'].$get(args, options),
  )
}

export async function postV1AudioNative(
  args: InferRequestType<(typeof client.v1)['audio-native']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['audio-native'].$post(args, options))
}

export async function getV1AudioNativeProjectIdSettings(
  args: InferRequestType<(typeof client.v1)['audio-native'][':project_id']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['audio-native'][':project_id'].settings.$get(args, options))
}

export async function postV1AudioNativeProjectIdContent(
  args: InferRequestType<(typeof client.v1)['audio-native'][':project_id']['content']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['audio-native'][':project_id'].content.$post(args, options))
}

export async function postV1AudioNativeContent(
  args: InferRequestType<(typeof client.v1)['audio-native']['content']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['audio-native'].content.$post(args, options))
}

export async function getV1DubbingProject(
  args: InferRequestType<typeof client.v1.dubbing.project.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.dubbing.project.$get(args, options))
}

export async function postV1DubbingProject(
  args: InferRequestType<typeof client.v1.dubbing.project.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.dubbing.project.$post(args, options))
}

export async function getV1DubbingProjectProjectId(
  args: InferRequestType<(typeof client.v1.dubbing.project)[':project_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.dubbing.project[':project_id'].$get(args, options))
}

export async function deleteV1DubbingProjectProjectId(
  args: InferRequestType<(typeof client.v1.dubbing.project)[':project_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.dubbing.project[':project_id'].$delete(args, options))
}

export async function getV1DubbingProjectProjectIdLanguage(
  args: InferRequestType<(typeof client.v1.dubbing.project)[':project_id']['language']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.dubbing.project[':project_id'].language.$get(args, options))
}

export async function postV1DubbingProjectProjectIdLanguage(
  args: InferRequestType<(typeof client.v1.dubbing.project)[':project_id']['language']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.dubbing.project[':project_id'].language.$post(args, options))
}

export async function getV1DubbingProjectProjectIdLanguageLanguageId(
  args: InferRequestType<
    (typeof client.v1.dubbing.project)[':project_id']['language'][':language_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.dubbing.project[':project_id'].language[':language_id'].$get(args, options),
  )
}

export async function deleteV1DubbingProjectProjectIdLanguageLanguageId(
  args: InferRequestType<
    (typeof client.v1.dubbing.project)[':project_id']['language'][':language_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.dubbing.project[':project_id'].language[':language_id'].$delete(args, options),
  )
}

export async function getV1DubbingProjectProjectIdTranscript(
  args: InferRequestType<(typeof client.v1.dubbing.project)[':project_id']['transcript']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.dubbing.project[':project_id'].transcript.$get(args, options),
  )
}

export async function deleteV1DubbingProjectProjectIdTranscriptSegmentSegmentId(
  args: InferRequestType<
    (typeof client.v1.dubbing.project)[':project_id']['transcript']['segment'][':segment_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.dubbing.project[':project_id'].transcript.segment[':segment_id'].$delete(
      args,
      options,
    ),
  )
}

export async function patchV1DubbingProjectProjectIdTranscriptSegmentSegmentId(
  args: InferRequestType<
    (typeof client.v1.dubbing.project)[':project_id']['transcript']['segment'][':segment_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.dubbing.project[':project_id'].transcript.segment[':segment_id'].$patch(
      args,
      options,
    ),
  )
}

export async function patchV1DubbingProjectProjectIdTranscriptSegments(
  args: InferRequestType<
    (typeof client.v1.dubbing.project)[':project_id']['transcript']['segments']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.dubbing.project[':project_id'].transcript.segments.$patch(args, options),
  )
}

export async function postV1DubbingProjectProjectIdTranscriptSegment(
  args: InferRequestType<
    (typeof client.v1.dubbing.project)[':project_id']['transcript']['segment']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.dubbing.project[':project_id'].transcript.segment.$post(args, options),
  )
}

export async function getV1DubbingProjectProjectIdLanguageLanguageIdTranscript(
  args: InferRequestType<
    (typeof client.v1.dubbing.project)[':project_id']['language'][':language_id']['transcript']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.dubbing.project[':project_id'].language[':language_id'].transcript.$get(
      args,
      options,
    ),
  )
}

export async function patchV1DubbingProjectProjectIdLanguageLanguageIdTranscriptSegmentSegmentId(
  args: InferRequestType<
    (typeof client.v1.dubbing.project)[':project_id']['language'][':language_id']['transcript']['segment'][':segment_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.dubbing.project[':project_id'].language[':language_id'].transcript.segment[
      ':segment_id'
    ].$patch(args, options),
  )
}

export async function patchV1DubbingProjectProjectIdLanguageLanguageIdTranscriptSegments(
  args: InferRequestType<
    (typeof client.v1.dubbing.project)[':project_id']['language'][':language_id']['transcript']['segments']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.dubbing.project[':project_id'].language[':language_id'].transcript.segments.$patch(
      args,
      options,
    ),
  )
}

export async function postV1DubbingProjectProjectIdLanguageLanguageIdTranscriptRegenerate(
  args: InferRequestType<
    (typeof client.v1.dubbing.project)[':project_id']['language'][':language_id']['transcript']['regenerate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.dubbing.project[':project_id'].language[':language_id'].transcript.regenerate.$post(
      args,
      options,
    ),
  )
}

export async function getV1DubbingResourceDubbingId(
  args: InferRequestType<(typeof client.v1.dubbing.resource)[':dubbing_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.dubbing.resource[':dubbing_id'].$get(args, options))
}

export async function postV1DubbingResourceDubbingIdLanguage(
  args: InferRequestType<(typeof client.v1.dubbing.resource)[':dubbing_id']['language']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.dubbing.resource[':dubbing_id'].language.$post(args, options),
  )
}

export async function postV1DubbingResourceDubbingIdSpeakerSpeakerIdSegment(
  args: InferRequestType<
    (typeof client.v1.dubbing.resource)[':dubbing_id']['speaker'][':speaker_id']['segment']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.dubbing.resource[':dubbing_id'].speaker[':speaker_id'].segment.$post(args, options),
  )
}

export async function patchV1DubbingResourceDubbingIdSegmentSegmentIdLanguage(
  args: InferRequestType<
    (typeof client.v1.dubbing.resource)[':dubbing_id']['segment'][':segment_id'][':language']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.dubbing.resource[':dubbing_id'].segment[':segment_id'][':language'].$patch(
      args,
      options,
    ),
  )
}

export async function postV1DubbingResourceDubbingIdMigrateSegments(
  args: InferRequestType<
    (typeof client.v1.dubbing.resource)[':dubbing_id']['migrate-segments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.dubbing.resource[':dubbing_id']['migrate-segments'].$post(args, options),
  )
}

export async function deleteV1DubbingResourceDubbingIdSegmentSegmentId(
  args: InferRequestType<
    (typeof client.v1.dubbing.resource)[':dubbing_id']['segment'][':segment_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.dubbing.resource[':dubbing_id'].segment[':segment_id'].$delete(args, options),
  )
}

export async function postV1DubbingResourceDubbingIdTranscribe(
  args: InferRequestType<(typeof client.v1.dubbing.resource)[':dubbing_id']['transcribe']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.dubbing.resource[':dubbing_id'].transcribe.$post(args, options),
  )
}

export async function postV1DubbingResourceDubbingIdTranslate(
  args: InferRequestType<(typeof client.v1.dubbing.resource)[':dubbing_id']['translate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.dubbing.resource[':dubbing_id'].translate.$post(args, options),
  )
}

export async function postV1DubbingResourceDubbingIdDub(
  args: InferRequestType<(typeof client.v1.dubbing.resource)[':dubbing_id']['dub']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.dubbing.resource[':dubbing_id'].dub.$post(args, options))
}

export async function patchV1DubbingResourceDubbingIdSpeakerSpeakerId(
  args: InferRequestType<
    (typeof client.v1.dubbing.resource)[':dubbing_id']['speaker'][':speaker_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.dubbing.resource[':dubbing_id'].speaker[':speaker_id'].$patch(args, options),
  )
}

export async function postV1DubbingResourceDubbingIdSpeaker(
  args: InferRequestType<(typeof client.v1.dubbing.resource)[':dubbing_id']['speaker']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.dubbing.resource[':dubbing_id'].speaker.$post(args, options))
}

export async function getV1DubbingResourceDubbingIdSpeakerSpeakerIdSimilarVoices(
  args: InferRequestType<
    (typeof client.v1.dubbing.resource)[':dubbing_id']['speaker'][':speaker_id']['similar-voices']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.dubbing.resource[':dubbing_id'].speaker[':speaker_id']['similar-voices'].$get(
      args,
      options,
    ),
  )
}

export async function postV1DubbingResourceDubbingIdRenderLanguage(
  args: InferRequestType<
    (typeof client.v1.dubbing.resource)[':dubbing_id']['render'][':language']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.dubbing.resource[':dubbing_id'].render[':language'].$post(args, options),
  )
}

export async function getV1Dubbing(
  args: InferRequestType<typeof client.v1.dubbing.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.dubbing.$get(args, options))
}

export async function postV1Dubbing(
  args: InferRequestType<typeof client.v1.dubbing.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.dubbing.$post(args, options))
}

export async function getV1DubbingDubbingId(
  args: InferRequestType<(typeof client.v1.dubbing)[':dubbing_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.dubbing[':dubbing_id'].$get(args, options))
}

export async function deleteV1DubbingDubbingId(
  args: InferRequestType<(typeof client.v1.dubbing)[':dubbing_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.dubbing[':dubbing_id'].$delete(args, options))
}

export async function getV1DubbingDubbingIdAudioLanguageCode(
  args: InferRequestType<
    (typeof client.v1.dubbing)[':dubbing_id']['audio'][':language_code']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.dubbing[':dubbing_id'].audio[':language_code'].$get(args, options),
  )
}

export async function getV1DubbingDubbingIdTranscriptLanguageCode(
  args: InferRequestType<
    (typeof client.v1.dubbing)[':dubbing_id']['transcript'][':language_code']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.dubbing[':dubbing_id'].transcript[':language_code'].$get(args, options),
  )
}

export async function getV1DubbingDubbingIdTranscriptsLanguageCodeFormatFormatType(
  args: InferRequestType<
    (typeof client.v1.dubbing)[':dubbing_id']['transcripts'][':language_code']['format'][':format_type']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.dubbing[':dubbing_id'].transcripts[':language_code'].format[':format_type'].$get(
      args,
      options,
    ),
  )
}

export async function getV1Models(
  args: InferRequestType<typeof client.v1.models.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.models.$get(args, options))
}

export async function postV1ContentProvenanceWatermark(
  args: InferRequestType<(typeof client.v1)['content-provenance']['watermark']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['content-provenance'].watermark.$post(args, options))
}

export async function postV1SimilarVoices(
  args: InferRequestType<(typeof client.v1)['similar-voices']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['similar-voices'].$post(args, options))
}

export async function getV1SharedVoices(
  args: InferRequestType<(typeof client.v1)['shared-voices']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['shared-voices'].$get(args, options))
}

export async function getV1UsageCharacterStats(
  args: InferRequestType<(typeof client.v1.usage)['character-stats']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.usage['character-stats'].$get(args, options))
}

export async function postV1PronunciationDictionariesAddFromFile(
  args: InferRequestType<
    (typeof client.v1)['pronunciation-dictionaries']['add-from-file']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['pronunciation-dictionaries']['add-from-file'].$post(args, options),
  )
}

export async function postV1PronunciationDictionariesAddFromRules(
  args: InferRequestType<
    (typeof client.v1)['pronunciation-dictionaries']['add-from-rules']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['pronunciation-dictionaries']['add-from-rules'].$post(args, options),
  )
}

export async function getV1PronunciationDictionariesPronunciationDictionaryId(
  args: InferRequestType<
    (typeof client.v1)['pronunciation-dictionaries'][':pronunciation_dictionary_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['pronunciation-dictionaries'][':pronunciation_dictionary_id'].$get(args, options),
  )
}

export async function patchV1PronunciationDictionariesPronunciationDictionaryId(
  args: InferRequestType<
    (typeof client.v1)['pronunciation-dictionaries'][':pronunciation_dictionary_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['pronunciation-dictionaries'][':pronunciation_dictionary_id'].$patch(args, options),
  )
}

export async function postV1PronunciationDictionariesPronunciationDictionaryIdSetRules(
  args: InferRequestType<
    (typeof client.v1)['pronunciation-dictionaries'][':pronunciation_dictionary_id']['set-rules']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['pronunciation-dictionaries'][':pronunciation_dictionary_id']['set-rules'].$post(
      args,
      options,
    ),
  )
}

export async function postV1PronunciationDictionariesPronunciationDictionaryIdAddRules(
  args: InferRequestType<
    (typeof client.v1)['pronunciation-dictionaries'][':pronunciation_dictionary_id']['add-rules']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['pronunciation-dictionaries'][':pronunciation_dictionary_id']['add-rules'].$post(
      args,
      options,
    ),
  )
}

export async function postV1PronunciationDictionariesPronunciationDictionaryIdRemoveRules(
  args: InferRequestType<
    (typeof client.v1)['pronunciation-dictionaries'][':pronunciation_dictionary_id']['remove-rules']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['pronunciation-dictionaries'][':pronunciation_dictionary_id']['remove-rules'].$post(
      args,
      options,
    ),
  )
}

export async function getV1PronunciationDictionariesDictionaryIdVersionIdDownload(
  args: InferRequestType<
    (typeof client.v1)['pronunciation-dictionaries'][':dictionary_id'][':version_id']['download']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['pronunciation-dictionaries'][':dictionary_id'][':version_id'].download.$get(
      args,
      options,
    ),
  )
}

export async function getV1PronunciationDictionaries(
  args: InferRequestType<(typeof client.v1)['pronunciation-dictionaries']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['pronunciation-dictionaries'].$get(args, options))
}

export async function postV1WorkspacesApiKeysDisable(
  args: InferRequestType<(typeof client.v1.workspaces)['api-keys']['disable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workspaces['api-keys'].disable.$post(args, options))
}

export async function postV1WorkspacesApiKeysThirdPartyDisabling(
  args: InferRequestType<
    (typeof client.v1.workspaces)['api-keys']['third-party-disabling']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workspaces['api-keys']['third-party-disabling'].$post(args, options),
  )
}

export async function getV1ServiceAccountsServiceAccountUserIdApiKeys(
  args: InferRequestType<
    (typeof client.v1)['service-accounts'][':service_account_user_id']['api-keys']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['service-accounts'][':service_account_user_id']['api-keys'].$get(args, options),
  )
}

export async function postV1ServiceAccountsServiceAccountUserIdApiKeys(
  args: InferRequestType<
    (typeof client.v1)['service-accounts'][':service_account_user_id']['api-keys']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['service-accounts'][':service_account_user_id']['api-keys'].$post(args, options),
  )
}

export async function deleteV1ServiceAccountsServiceAccountUserIdApiKeysApiKeyId(
  args: InferRequestType<
    (typeof client.v1)['service-accounts'][':service_account_user_id']['api-keys'][':api_key_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['service-accounts'][':service_account_user_id']['api-keys'][':api_key_id'].$delete(
      args,
      options,
    ),
  )
}

export async function patchV1ServiceAccountsServiceAccountUserIdApiKeysApiKeyId(
  args: InferRequestType<
    (typeof client.v1)['service-accounts'][':service_account_user_id']['api-keys'][':api_key_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['service-accounts'][':service_account_user_id']['api-keys'][':api_key_id'].$patch(
      args,
      options,
    ),
  )
}

export async function postV1ServiceAccountsServiceAccountUserIdApiKeysApiKeyIdDisable(
  args: InferRequestType<
    (typeof client.v1)['service-accounts'][':service_account_user_id']['api-keys'][':api_key_id']['disable']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['service-accounts'][':service_account_user_id']['api-keys'][
      ':api_key_id'
    ].disable.$post(args, options),
  )
}

export async function getV1WorkspaceAuditLogs(
  args: InferRequestType<(typeof client.v1.workspace)['audit-logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workspace['audit-logs'].$get(args, options))
}

export async function getV1WorkspaceAuthConnections(
  args: InferRequestType<(typeof client.v1.workspace)['auth-connections']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workspace['auth-connections'].$get(args, options))
}

export async function postV1WorkspaceAuthConnections(
  args: InferRequestType<(typeof client.v1.workspace)['auth-connections']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workspace['auth-connections'].$post(args, options))
}

export async function deleteV1WorkspaceAuthConnectionsAuthConnectionId(
  args: InferRequestType<
    (typeof client.v1.workspace)['auth-connections'][':auth_connection_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workspace['auth-connections'][':auth_connection_id'].$delete(args, options),
  )
}

export async function patchV1WorkspaceAuthConnectionsAuthConnectionId(
  args: InferRequestType<
    (typeof client.v1.workspace)['auth-connections'][':auth_connection_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workspace['auth-connections'][':auth_connection_id'].$patch(args, options),
  )
}

export async function getV1ServiceAccounts(
  args: InferRequestType<(typeof client.v1)['service-accounts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['service-accounts'].$get(args, options))
}

export async function postV1ServiceAccounts(
  args: InferRequestType<(typeof client.v1)['service-accounts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['service-accounts'].$post(args, options))
}

export async function getV1WorkspaceGroups(
  args: InferRequestType<typeof client.v1.workspace.groups.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workspace.groups.$get(args, options))
}

export async function getV1WorkspaceGroupsSearch(
  args: InferRequestType<typeof client.v1.workspace.groups.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workspace.groups.search.$get(args, options))
}

export async function postV1WorkspaceGroupsGroupIdMembersRemove(
  args: InferRequestType<
    (typeof client.v1.workspace.groups)[':group_id']['members']['remove']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workspace.groups[':group_id'].members.remove.$post(args, options),
  )
}

export async function postV1WorkspaceGroupsGroupIdMembers(
  args: InferRequestType<(typeof client.v1.workspace.groups)[':group_id']['members']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workspace.groups[':group_id'].members.$post(args, options))
}

export async function postV1WorkspaceInvitesAdd(
  args: InferRequestType<typeof client.v1.workspace.invites.add.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workspace.invites.add.$post(args, options))
}

export async function postV1WorkspaceInvitesAddBulk(
  args: InferRequestType<(typeof client.v1.workspace.invites)['add-bulk']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workspace.invites['add-bulk'].$post(args, options))
}

export async function deleteV1WorkspaceInvites(
  args: InferRequestType<typeof client.v1.workspace.invites.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workspace.invites.$delete(args, options))
}

export async function getV1WorkspaceMembers(
  args: InferRequestType<typeof client.v1.workspace.members.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workspace.members.$get(args, options))
}

export async function postV1WorkspaceMembers(
  args: InferRequestType<typeof client.v1.workspace.members.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workspace.members.$post(args, options))
}

export async function putV1WorkspaceMembersUserIdUsageLimit(
  args: InferRequestType<(typeof client.v1.workspace.members)[':user_id']['usage-limit']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workspace.members[':user_id']['usage-limit'].$put(args, options),
  )
}

export async function getV1WorkspaceResourcesResourceId(
  args: InferRequestType<(typeof client.v1.workspace.resources)[':resource_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workspace.resources[':resource_id'].$get(args, options))
}

export async function postV1WorkspaceResourcesResourceIdShare(
  args: InferRequestType<(typeof client.v1.workspace.resources)[':resource_id']['share']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workspace.resources[':resource_id'].share.$post(args, options),
  )
}

export async function postV1WorkspaceResourcesResourceIdUnshare(
  args: InferRequestType<
    (typeof client.v1.workspace.resources)[':resource_id']['unshare']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workspace.resources[':resource_id'].unshare.$post(args, options),
  )
}

export async function getV1WorkspaceWebhooks(
  args: InferRequestType<typeof client.v1.workspace.webhooks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workspace.webhooks.$get(args, options))
}

export async function postV1WorkspaceWebhooks(
  args: InferRequestType<typeof client.v1.workspace.webhooks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workspace.webhooks.$post(args, options))
}

export async function deleteV1WorkspaceWebhooksWebhookId(
  args: InferRequestType<(typeof client.v1.workspace.webhooks)[':webhook_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workspace.webhooks[':webhook_id'].$delete(args, options))
}

export async function patchV1WorkspaceWebhooksWebhookId(
  args: InferRequestType<(typeof client.v1.workspace.webhooks)[':webhook_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workspace.webhooks[':webhook_id'].$patch(args, options))
}

export async function postV1MusicVideoToMusic(
  args: InferRequestType<(typeof client.v1.music)['video-to-music']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.music['video-to-music'].$post(args, options))
}

export async function postV1SpeechToText(
  args: InferRequestType<(typeof client.v1)['speech-to-text']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['speech-to-text'].$post(args, options))
}

export async function getV1SpeechToTextTranscriptsTranscriptionId(
  args: InferRequestType<
    (typeof client.v1)['speech-to-text']['transcripts'][':transcription_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['speech-to-text'].transcripts[':transcription_id'].$get(args, options),
  )
}

export async function deleteV1SpeechToTextTranscriptsTranscriptionId(
  args: InferRequestType<
    (typeof client.v1)['speech-to-text']['transcripts'][':transcription_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['speech-to-text'].transcripts[':transcription_id'].$delete(args, options),
  )
}

export async function postV1SingleUseTokenTokenType(
  args: InferRequestType<(typeof client.v1)['single-use-token'][':token_type']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['single-use-token'][':token_type'].$post(args, options))
}

export async function postV1ForcedAlignment(
  args: InferRequestType<(typeof client.v1)['forced-alignment']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['forced-alignment'].$post(args, options))
}

export async function getV1ConvaiConversationGetSignedUrl(
  args: InferRequestType<(typeof client.v1.convai.conversation)['get-signed-url']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai.conversation['get-signed-url'].$get(args, options))
}

export async function getV1ConvaiConversationGetSignedUrl2(
  args: InferRequestType<typeof client.v1.convai.conversation.get_signed_url.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai.conversation.get_signed_url.$get(args, options))
}

export async function getV1ConvaiConversationToken(
  args: InferRequestType<typeof client.v1.convai.conversation.token.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai.conversation.token.$get(args, options))
}

export async function postV1ConvaiTwilioOutboundCall(
  args: InferRequestType<(typeof client.v1.convai.twilio)['outbound-call']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai.twilio['outbound-call'].$post(args, options))
}

export async function postV1ConvaiTwilioRegisterCall(
  args: InferRequestType<(typeof client.v1.convai.twilio)['register-call']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai.twilio['register-call'].$post(args, options))
}

export async function postV1ConvaiExotelOutboundCall(
  args: InferRequestType<(typeof client.v1.convai.exotel)['outbound-call']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai.exotel['outbound-call'].$post(args, options))
}

export async function postV1ConvaiWhatsappOutboundCall(
  args: InferRequestType<(typeof client.v1.convai.whatsapp)['outbound-call']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai.whatsapp['outbound-call'].$post(args, options))
}

export async function postV1ConvaiWhatsappOutboundMessage(
  args: InferRequestType<(typeof client.v1.convai.whatsapp)['outbound-message']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai.whatsapp['outbound-message'].$post(args, options))
}

export async function postV1ConvaiAgentsCreate(
  args: InferRequestType<typeof client.v1.convai.agents.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai.agents.create.$post(args, options))
}

export async function getV1ConvaiAgentsSummaries(
  args: InferRequestType<typeof client.v1.convai.agents.summaries.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai.agents.summaries.$get(args, options))
}

export async function getV1ConvaiAgentsAgentId(
  args: InferRequestType<(typeof client.v1.convai.agents)[':agent_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai.agents[':agent_id'].$get(args, options))
}

export async function deleteV1ConvaiAgentsAgentId(
  args: InferRequestType<(typeof client.v1.convai.agents)[':agent_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai.agents[':agent_id'].$delete(args, options))
}

export async function patchV1ConvaiAgentsAgentId(
  args: InferRequestType<(typeof client.v1.convai.agents)[':agent_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai.agents[':agent_id'].$patch(args, options))
}

export async function getV1ConvaiAgentsAgentIdSubagentDependents(
  args: InferRequestType<
    (typeof client.v1.convai.agents)[':agent_id']['subagent-dependents']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai.agents[':agent_id']['subagent-dependents'].$get(args, options),
  )
}

export async function getV1ConvaiAgentsAgentIdWidget(
  args: InferRequestType<(typeof client.v1.convai.agents)[':agent_id']['widget']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai.agents[':agent_id'].widget.$get(args, options))
}

export async function getV1ConvaiAgentsAgentIdLink(
  args: InferRequestType<(typeof client.v1.convai.agents)[':agent_id']['link']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai.agents[':agent_id'].link.$get(args, options))
}

export async function postV1ConvaiAgentsAgentIdAvatar(
  args: InferRequestType<(typeof client.v1.convai.agents)[':agent_id']['avatar']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai.agents[':agent_id'].avatar.$post(args, options))
}

export async function postV1ConvaiAgentsAgentIdHoldAudio(
  args: InferRequestType<(typeof client.v1.convai.agents)[':agent_id']['hold-audio']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai.agents[':agent_id']['hold-audio'].$post(args, options),
  )
}

export async function deleteV1ConvaiAgentsAgentIdHoldAudio(
  args: InferRequestType<(typeof client.v1.convai.agents)[':agent_id']['hold-audio']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai.agents[':agent_id']['hold-audio'].$delete(args, options),
  )
}

export async function getV1ConvaiAgents(
  args: InferRequestType<typeof client.v1.convai.agents.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai.agents.$get(args, options))
}

export async function getV1ConvaiAgentAgentIdKnowledgeBaseSize(
  args: InferRequestType<
    (typeof client.v1.convai.agent)[':agent_id']['knowledge-base']['size']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai.agent[':agent_id']['knowledge-base'].size.$get(args, options),
  )
}

export async function postV1ConvaiAgentAgentIdLlmUsageCalculate(
  args: InferRequestType<
    (typeof client.v1.convai.agent)[':agent_id']['llm-usage']['calculate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai.agent[':agent_id']['llm-usage'].calculate.$post(args, options),
  )
}

export async function postV1ConvaiAgentsAgentIdDuplicate(
  args: InferRequestType<(typeof client.v1.convai.agents)[':agent_id']['duplicate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai.agents[':agent_id'].duplicate.$post(args, options))
}

export async function postV1ConvaiAgentsAgentIdSimulateConversation(
  args: InferRequestType<
    (typeof client.v1.convai.agents)[':agent_id']['simulate-conversation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai.agents[':agent_id']['simulate-conversation'].$post(args, options),
  )
}

export async function postV1ConvaiAgentsAgentIdSimulateConversationStream(
  args: InferRequestType<
    (typeof client.v1.convai.agents)[':agent_id']['simulate-conversation']['stream']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai.agents[':agent_id']['simulate-conversation'].stream.$post(args, options),
  )
}

export async function postV1ConvaiAgentTestingCreate(
  args: InferRequestType<(typeof client.v1.convai)['agent-testing']['create']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai['agent-testing'].create.$post(args, options))
}

export async function postV1ConvaiAgentTestingFolders(
  args: InferRequestType<(typeof client.v1.convai)['agent-testing']['folders']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai['agent-testing'].folders.$post(args, options))
}

export async function getV1ConvaiAgentTestingFoldersFolderId(
  args: InferRequestType<
    (typeof client.v1.convai)['agent-testing']['folders'][':folder_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai['agent-testing'].folders[':folder_id'].$get(args, options),
  )
}

export async function deleteV1ConvaiAgentTestingFoldersFolderId(
  args: InferRequestType<
    (typeof client.v1.convai)['agent-testing']['folders'][':folder_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai['agent-testing'].folders[':folder_id'].$delete(args, options),
  )
}

export async function patchV1ConvaiAgentTestingFoldersFolderId(
  args: InferRequestType<
    (typeof client.v1.convai)['agent-testing']['folders'][':folder_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai['agent-testing'].folders[':folder_id'].$patch(args, options),
  )
}

export async function postV1ConvaiAgentTestingBulkMove(
  args: InferRequestType<(typeof client.v1.convai)['agent-testing']['bulk-move']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai['agent-testing']['bulk-move'].$post(args, options))
}

export async function getV1ConvaiAgentTestingTestId(
  args: InferRequestType<(typeof client.v1.convai)['agent-testing'][':test_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai['agent-testing'][':test_id'].$get(args, options))
}

export async function putV1ConvaiAgentTestingTestId(
  args: InferRequestType<(typeof client.v1.convai)['agent-testing'][':test_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai['agent-testing'][':test_id'].$put(args, options))
}

export async function deleteV1ConvaiAgentTestingTestId(
  args: InferRequestType<(typeof client.v1.convai)['agent-testing'][':test_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai['agent-testing'][':test_id'].$delete(args, options))
}

export async function postV1ConvaiAgentTestingSummaries(
  args: InferRequestType<(typeof client.v1.convai)['agent-testing']['summaries']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai['agent-testing'].summaries.$post(args, options))
}

export async function getV1ConvaiAgentTesting(
  args: InferRequestType<(typeof client.v1.convai)['agent-testing']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai['agent-testing'].$get(args, options))
}

export async function getV1ConvaiTestInvocations(
  args: InferRequestType<(typeof client.v1.convai)['test-invocations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai['test-invocations'].$get(args, options))
}

export async function postV1ConvaiAgentsAgentIdRunTests(
  args: InferRequestType<(typeof client.v1.convai.agents)[':agent_id']['run-tests']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai.agents[':agent_id']['run-tests'].$post(args, options))
}

export async function getV1ConvaiTestInvocationsTestInvocationId(
  args: InferRequestType<
    (typeof client.v1.convai)['test-invocations'][':test_invocation_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai['test-invocations'][':test_invocation_id'].$get(args, options),
  )
}

export async function patchV1ConvaiTestInvocationsTestInvocationId(
  args: InferRequestType<
    (typeof client.v1.convai)['test-invocations'][':test_invocation_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai['test-invocations'][':test_invocation_id'].$patch(args, options),
  )
}

export async function postV1ConvaiTestInvocationsTestInvocationIdCancel(
  args: InferRequestType<
    (typeof client.v1.convai)['test-invocations'][':test_invocation_id']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai['test-invocations'][':test_invocation_id'].cancel.$post(args, options),
  )
}

export async function postV1ConvaiTestInvocationsTestInvocationIdResubmit(
  args: InferRequestType<
    (typeof client.v1.convai)['test-invocations'][':test_invocation_id']['resubmit']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai['test-invocations'][':test_invocation_id'].resubmit.$post(args, options),
  )
}

export async function getV1ConvaiConversations(
  args: InferRequestType<typeof client.v1.convai.conversations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai.conversations.$get(args, options))
}

export async function postV1ConvaiConversations(
  args: InferRequestType<typeof client.v1.convai.conversations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai.conversations.$post(args, options))
}

export async function getV1ConvaiUsers(
  args: InferRequestType<typeof client.v1.convai.users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai.users.$get(args, options))
}

export async function getV1ConvaiConversationsResolve(
  args: InferRequestType<typeof client.v1.convai.conversations.resolve.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai.conversations.resolve.$get(args, options))
}

export async function getV1ConvaiConversationsConversationId(
  args: InferRequestType<(typeof client.v1.convai.conversations)[':conversation_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai.conversations[':conversation_id'].$get(args, options))
}

export async function deleteV1ConvaiConversationsConversationId(
  args: InferRequestType<(typeof client.v1.convai.conversations)[':conversation_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai.conversations[':conversation_id'].$delete(args, options),
  )
}

export async function getV1ConvaiConversationsConversationIdSummary(
  args: InferRequestType<
    (typeof client.v1.convai.conversations)[':conversation_id']['summary']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai.conversations[':conversation_id'].summary.$get(args, options),
  )
}

export async function getV1ConvaiConversationsConversationIdSipMessages(
  args: InferRequestType<
    (typeof client.v1.convai.conversations)[':conversation_id']['sip-messages']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai.conversations[':conversation_id']['sip-messages'].$get(args, options),
  )
}

export async function getV1ConvaiConversationsConversationIdAudio(
  args: InferRequestType<
    (typeof client.v1.convai.conversations)[':conversation_id']['audio']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai.conversations[':conversation_id'].audio.$get(args, options),
  )
}

export async function getV1ConvaiConversationsConversationIdFilesFileId(
  args: InferRequestType<
    (typeof client.v1.convai.conversations)[':conversation_id']['files'][':file_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai.conversations[':conversation_id'].files[':file_id'].$get(args, options),
  )
}

export async function deleteV1ConvaiConversationsConversationIdFilesFileId(
  args: InferRequestType<
    (typeof client.v1.convai.conversations)[':conversation_id']['files'][':file_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai.conversations[':conversation_id'].files[':file_id'].$delete(args, options),
  )
}

export async function postV1ConvaiConversationsConversationIdFeedback(
  args: InferRequestType<
    (typeof client.v1.convai.conversations)[':conversation_id']['feedback']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai.conversations[':conversation_id'].feedback.$post(args, options),
  )
}

export async function getV1ConvaiConversationsMessagesTextSearch(
  args: InferRequestType<(typeof client.v1.convai.conversations.messages)['text-search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai.conversations.messages['text-search'].$get(args, options),
  )
}

export async function getV1ConvaiConversationsMessagesSmartSearch(
  args: InferRequestType<(typeof client.v1.convai.conversations.messages)['smart-search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai.conversations.messages['smart-search'].$get(args, options),
  )
}

export async function postV1ConvaiConversationsConversationIdTags(
  args: InferRequestType<
    (typeof client.v1.convai.conversations)[':conversation_id']['tags']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai.conversations[':conversation_id'].tags.$post(args, options),
  )
}

export async function deleteV1ConvaiConversationsConversationIdTagsTagId(
  args: InferRequestType<
    (typeof client.v1.convai.conversations)[':conversation_id']['tags'][':tag_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai.conversations[':conversation_id'].tags[':tag_id'].$delete(args, options),
  )
}

export async function getV1ConvaiTags(
  args: InferRequestType<typeof client.v1.convai.tags.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai.tags.$get(args, options))
}

export async function postV1ConvaiTags(
  args: InferRequestType<typeof client.v1.convai.tags.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai.tags.$post(args, options))
}

export async function getV1ConvaiTagsTagId(
  args: InferRequestType<(typeof client.v1.convai.tags)[':tag_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai.tags[':tag_id'].$get(args, options))
}

export async function deleteV1ConvaiTagsTagId(
  args: InferRequestType<(typeof client.v1.convai.tags)[':tag_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai.tags[':tag_id'].$delete(args, options))
}

export async function patchV1ConvaiTagsTagId(
  args: InferRequestType<(typeof client.v1.convai.tags)[':tag_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai.tags[':tag_id'].$patch(args, options))
}

export async function getV1ConvaiAgentsAgentIdTriageTickets(
  args: InferRequestType<(typeof client.v1.convai.agents)[':agent_id']['triage-tickets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai.agents[':agent_id']['triage-tickets'].$get(args, options),
  )
}

export async function postV1ConvaiAgentsAgentIdTriageTickets(
  args: InferRequestType<(typeof client.v1.convai.agents)[':agent_id']['triage-tickets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai.agents[':agent_id']['triage-tickets'].$post(args, options),
  )
}

export async function getV1ConvaiTriageTickets(
  args: InferRequestType<(typeof client.v1.convai)['triage-tickets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai['triage-tickets'].$get(args, options))
}

export async function postV1ConvaiTriageTickets(
  args: InferRequestType<(typeof client.v1.convai)['triage-tickets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai['triage-tickets'].$post(args, options))
}

export async function getV1ConvaiAgentsAgentIdTriageTicketsAssignableUsers(
  args: InferRequestType<
    (typeof client.v1.convai.agents)[':agent_id']['triage-tickets']['assignable-users']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai.agents[':agent_id']['triage-tickets']['assignable-users'].$get(args, options),
  )
}

export async function getV1ConvaiTriageTicketsAgentqaTicketId(
  args: InferRequestType<(typeof client.v1.convai)['triage-tickets'][':agentqa_ticket_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai['triage-tickets'][':agentqa_ticket_id'].$get(args, options),
  )
}

export async function deleteV1ConvaiTriageTicketsAgentqaTicketId(
  args: InferRequestType<
    (typeof client.v1.convai)['triage-tickets'][':agentqa_ticket_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai['triage-tickets'][':agentqa_ticket_id'].$delete(args, options),
  )
}

export async function patchV1ConvaiTriageTicketsAgentqaTicketId(
  args: InferRequestType<
    (typeof client.v1.convai)['triage-tickets'][':agentqa_ticket_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai['triage-tickets'][':agentqa_ticket_id'].$patch(args, options),
  )
}

export async function postV1ConvaiTriageTicketsAgentqaTicketIdComments(
  args: InferRequestType<
    (typeof client.v1.convai)['triage-tickets'][':agentqa_ticket_id']['comments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai['triage-tickets'][':agentqa_ticket_id'].comments.$post(args, options),
  )
}

export async function postV1ConvaiTriageTicketsAgentqaTicketIdMerge(
  args: InferRequestType<
    (typeof client.v1.convai)['triage-tickets'][':agentqa_ticket_id']['merge']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai['triage-tickets'][':agentqa_ticket_id'].merge.$post(args, options),
  )
}

export async function postV1ConvaiTriageTicketsAgentqaTicketIdTurnComments(
  args: InferRequestType<
    (typeof client.v1.convai)['triage-tickets'][':agentqa_ticket_id']['turn-comments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai['triage-tickets'][':agentqa_ticket_id']['turn-comments'].$post(args, options),
  )
}

export async function getV1ConvaiPhoneNumbers(
  args: InferRequestType<(typeof client.v1.convai)['phone-numbers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai['phone-numbers'].$get(args, options))
}

export async function postV1ConvaiPhoneNumbers(
  args: InferRequestType<(typeof client.v1.convai)['phone-numbers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai['phone-numbers'].$post(args, options))
}

export async function getV1ConvaiPhoneNumbersPhoneNumberId(
  args: InferRequestType<(typeof client.v1.convai)['phone-numbers'][':phone_number_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai['phone-numbers'][':phone_number_id'].$get(args, options),
  )
}

export async function deleteV1ConvaiPhoneNumbersPhoneNumberId(
  args: InferRequestType<(typeof client.v1.convai)['phone-numbers'][':phone_number_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai['phone-numbers'][':phone_number_id'].$delete(args, options),
  )
}

export async function patchV1ConvaiPhoneNumbersPhoneNumberId(
  args: InferRequestType<(typeof client.v1.convai)['phone-numbers'][':phone_number_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai['phone-numbers'][':phone_number_id'].$patch(args, options),
  )
}

export async function getV1ConvaiV2PhoneNumbers(
  args: InferRequestType<(typeof client.v1.convai.v2)['phone-numbers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai.v2['phone-numbers'].$get(args, options))
}

export async function getV1ConvaiPhoneNumbersPhoneNumberIdSipMessages(
  args: InferRequestType<
    (typeof client.v1.convai)['phone-numbers'][':phone_number_id']['sip-messages']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai['phone-numbers'][':phone_number_id']['sip-messages'].$get(args, options),
  )
}

export async function postV1ConvaiLlmUsageCalculate(
  args: InferRequestType<(typeof client.v1.convai)['llm-usage']['calculate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai['llm-usage'].calculate.$post(args, options))
}

export async function getV1ConvaiLlmList(
  args: InferRequestType<typeof client.v1.convai.llm.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai.llm.list.$get(args, options))
}

export async function postV1ConvaiConversationsConversationIdFiles(
  args: InferRequestType<
    (typeof client.v1.convai.conversations)[':conversation_id']['files']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai.conversations[':conversation_id'].files.$post(args, options),
  )
}

export async function getV1ConvaiAnalyticsLiveCount(
  args: InferRequestType<(typeof client.v1.convai.analytics)['live-count']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai.analytics['live-count'].$get(args, options))
}

export async function getV1ConvaiKnowledgeBaseSummaries(
  args: InferRequestType<(typeof client.v1.convai)['knowledge-base']['summaries']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai['knowledge-base'].summaries.$get(args, options))
}

export async function getV1ConvaiKnowledgeBase(
  args: InferRequestType<(typeof client.v1.convai)['knowledge-base']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai['knowledge-base'].$get(args, options))
}

export async function postV1ConvaiKnowledgeBase(
  args: InferRequestType<(typeof client.v1.convai)['knowledge-base']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai['knowledge-base'].$post(args, options))
}

export async function postV1ConvaiKnowledgeBaseUrl(
  args: InferRequestType<(typeof client.v1.convai)['knowledge-base']['url']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai['knowledge-base'].url.$post(args, options))
}

export async function getV1ConvaiKnowledgeBaseCrawl(
  args: InferRequestType<(typeof client.v1.convai)['knowledge-base']['crawl']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai['knowledge-base'].crawl.$get(args, options))
}

export async function postV1ConvaiKnowledgeBaseCrawl(
  args: InferRequestType<(typeof client.v1.convai)['knowledge-base']['crawl']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai['knowledge-base'].crawl.$post(args, options))
}

export async function getV1ConvaiKnowledgeBaseCrawlCrawlJobId(
  args: InferRequestType<
    (typeof client.v1.convai)['knowledge-base']['crawl'][':crawl_job_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai['knowledge-base'].crawl[':crawl_job_id'].$get(args, options),
  )
}

export async function postV1ConvaiKnowledgeBaseCrawlCrawlJobIdCancel(
  args: InferRequestType<
    (typeof client.v1.convai)['knowledge-base']['crawl'][':crawl_job_id']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai['knowledge-base'].crawl[':crawl_job_id'].cancel.$post(args, options),
  )
}

export async function postV1ConvaiKnowledgeBaseFile(
  args: InferRequestType<(typeof client.v1.convai)['knowledge-base']['file']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai['knowledge-base'].file.$post(args, options))
}

export async function postV1ConvaiKnowledgeBaseText(
  args: InferRequestType<(typeof client.v1.convai)['knowledge-base']['text']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai['knowledge-base'].text.$post(args, options))
}

export async function postV1ConvaiKnowledgeBaseFolder(
  args: InferRequestType<(typeof client.v1.convai)['knowledge-base']['folder']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai['knowledge-base'].folder.$post(args, options))
}

export async function getV1ConvaiKnowledgeBaseDocumentationId(
  args: InferRequestType<(typeof client.v1.convai)['knowledge-base'][':documentation_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai['knowledge-base'][':documentation_id'].$get(args, options),
  )
}

export async function deleteV1ConvaiKnowledgeBaseDocumentationId(
  args: InferRequestType<
    (typeof client.v1.convai)['knowledge-base'][':documentation_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai['knowledge-base'][':documentation_id'].$delete(args, options),
  )
}

export async function patchV1ConvaiKnowledgeBaseDocumentationId(
  args: InferRequestType<
    (typeof client.v1.convai)['knowledge-base'][':documentation_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai['knowledge-base'][':documentation_id'].$patch(args, options),
  )
}

export async function getV1ConvaiKnowledgeBaseDocumentationIdChunkingOverride(
  args: InferRequestType<
    (typeof client.v1.convai)['knowledge-base'][':documentation_id']['chunking-override']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai['knowledge-base'][':documentation_id']['chunking-override'].$get(
      args,
      options,
    ),
  )
}

export async function patchV1ConvaiKnowledgeBaseDocumentationIdChunkingOverride(
  args: InferRequestType<
    (typeof client.v1.convai)['knowledge-base'][':documentation_id']['chunking-override']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai['knowledge-base'][':documentation_id']['chunking-override'].$patch(
      args,
      options,
    ),
  )
}

export async function patchV1ConvaiKnowledgeBaseDocumentationIdUpdateFile(
  args: InferRequestType<
    (typeof client.v1.convai)['knowledge-base'][':documentation_id']['update-file']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai['knowledge-base'][':documentation_id']['update-file'].$patch(args, options),
  )
}

export async function getV1ConvaiKnowledgeBaseRagIndex(
  args: InferRequestType<(typeof client.v1.convai)['knowledge-base']['rag-index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai['knowledge-base']['rag-index'].$get(args, options))
}

export async function postV1ConvaiKnowledgeBaseRagIndex(
  args: InferRequestType<(typeof client.v1.convai)['knowledge-base']['rag-index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai['knowledge-base']['rag-index'].$post(args, options))
}

export async function postV1ConvaiKnowledgeBaseDocumentationIdRefresh(
  args: InferRequestType<
    (typeof client.v1.convai)['knowledge-base'][':documentation_id']['refresh']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai['knowledge-base'][':documentation_id'].refresh.$post(args, options),
  )
}

export async function getV1ConvaiKnowledgeBaseDocumentationIdRagIndex(
  args: InferRequestType<
    (typeof client.v1.convai)['knowledge-base'][':documentation_id']['rag-index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai['knowledge-base'][':documentation_id']['rag-index'].$get(args, options),
  )
}

export async function postV1ConvaiKnowledgeBaseDocumentationIdRagIndex(
  args: InferRequestType<
    (typeof client.v1.convai)['knowledge-base'][':documentation_id']['rag-index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai['knowledge-base'][':documentation_id']['rag-index'].$post(args, options),
  )
}

export async function deleteV1ConvaiKnowledgeBaseDocumentationIdRagIndexRagIndexId(
  args: InferRequestType<
    (typeof client.v1.convai)['knowledge-base'][':documentation_id']['rag-index'][':rag_index_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai['knowledge-base'][':documentation_id']['rag-index'][':rag_index_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getV1ConvaiKnowledgeBaseSearch(
  args: InferRequestType<(typeof client.v1.convai)['knowledge-base']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai['knowledge-base'].search.$get(args, options))
}

export async function postV1ConvaiAgentsAgentIdKnowledgeBaseRagQuery(
  args: InferRequestType<
    (typeof client.v1.convai.agents)[':agent_id']['knowledge-base']['rag-query']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai.agents[':agent_id']['knowledge-base']['rag-query'].$post(args, options),
  )
}

export async function getV1ConvaiKnowledgeBaseDocumentationIdDependentAgents(
  args: InferRequestType<
    (typeof client.v1.convai)['knowledge-base'][':documentation_id']['dependent-agents']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai['knowledge-base'][':documentation_id']['dependent-agents'].$get(args, options),
  )
}

export async function postV1ConvaiKnowledgeBaseDependentAgents(
  args: InferRequestType<(typeof client.v1.convai)['knowledge-base']['dependent-agents']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai['knowledge-base']['dependent-agents'].$post(args, options),
  )
}

export async function getV1ConvaiKnowledgeBaseDocumentationIdContent(
  args: InferRequestType<
    (typeof client.v1.convai)['knowledge-base'][':documentation_id']['content']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai['knowledge-base'][':documentation_id'].content.$get(args, options),
  )
}

export async function getV1ConvaiKnowledgeBaseDocumentationIdSourceFileUrl(
  args: InferRequestType<
    (typeof client.v1.convai)['knowledge-base'][':documentation_id']['source-file-url']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai['knowledge-base'][':documentation_id']['source-file-url'].$get(args, options),
  )
}

export async function getV1ConvaiKnowledgeBaseDocumentationIdChunkChunkId(
  args: InferRequestType<
    (typeof client.v1.convai)['knowledge-base'][':documentation_id']['chunk'][':chunk_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai['knowledge-base'][':documentation_id'].chunk[':chunk_id'].$get(args, options),
  )
}

export async function getV1ConvaiKnowledgeBaseDocumentationIdChunks(
  args: InferRequestType<
    (typeof client.v1.convai)['knowledge-base'][':documentation_id']['chunks']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai['knowledge-base'][':documentation_id'].chunks.$get(args, options),
  )
}

export async function postV1ConvaiKnowledgeBaseDocumentIdMove(
  args: InferRequestType<
    (typeof client.v1.convai)['knowledge-base'][':document_id']['move']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai['knowledge-base'][':document_id'].move.$post(args, options),
  )
}

export async function postV1ConvaiKnowledgeBaseBulkMove(
  args: InferRequestType<(typeof client.v1.convai)['knowledge-base']['bulk-move']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai['knowledge-base']['bulk-move'].$post(args, options))
}

export async function postV1ConvaiKnowledgeBaseBulkDelete(
  args: InferRequestType<(typeof client.v1.convai)['knowledge-base']['bulk-delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai['knowledge-base']['bulk-delete'].$post(args, options))
}

export async function getV1ConvaiAgentsAgentIdTopics(
  args: InferRequestType<(typeof client.v1.convai.agents)[':agent_id']['topics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai.agents[':agent_id'].topics.$get(args, options))
}

export async function getV1ConvaiTools(
  args: InferRequestType<typeof client.v1.convai.tools.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai.tools.$get(args, options))
}

export async function postV1ConvaiTools(
  args: InferRequestType<typeof client.v1.convai.tools.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai.tools.$post(args, options))
}

export async function getV1ConvaiToolsToolId(
  args: InferRequestType<(typeof client.v1.convai.tools)[':tool_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai.tools[':tool_id'].$get(args, options))
}

export async function deleteV1ConvaiToolsToolId(
  args: InferRequestType<(typeof client.v1.convai.tools)[':tool_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai.tools[':tool_id'].$delete(args, options))
}

export async function patchV1ConvaiToolsToolId(
  args: InferRequestType<(typeof client.v1.convai.tools)[':tool_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai.tools[':tool_id'].$patch(args, options))
}

export async function getV1ConvaiToolsToolIdDependentAgents(
  args: InferRequestType<(typeof client.v1.convai.tools)[':tool_id']['dependent-agents']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai.tools[':tool_id']['dependent-agents'].$get(args, options),
  )
}

export async function getV1ConvaiToolsToolIdExecutions(
  args: InferRequestType<(typeof client.v1.convai.tools)[':tool_id']['executions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai.tools[':tool_id'].executions.$get(args, options))
}

export async function getV1ConvaiAnalysisItems(
  args: InferRequestType<(typeof client.v1.convai)['analysis-items']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai['analysis-items'].$get(args, options))
}

export async function postV1ConvaiAnalysisItems(
  args: InferRequestType<(typeof client.v1.convai)['analysis-items']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai['analysis-items'].$post(args, options))
}

export async function patchV1ConvaiAnalysisItemsAnalysisItemIdAttachments(
  args: InferRequestType<
    (typeof client.v1.convai)['analysis-items'][':analysis_item_id']['attachments']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai['analysis-items'][':analysis_item_id'].attachments.$patch(args, options),
  )
}

export async function getV1ConvaiAnalysisItemsAnalysisItemId(
  args: InferRequestType<(typeof client.v1.convai)['analysis-items'][':analysis_item_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai['analysis-items'][':analysis_item_id'].$get(args, options),
  )
}

export async function deleteV1ConvaiAnalysisItemsAnalysisItemId(
  args: InferRequestType<
    (typeof client.v1.convai)['analysis-items'][':analysis_item_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai['analysis-items'][':analysis_item_id'].$delete(args, options),
  )
}

export async function patchV1ConvaiAnalysisItemsAnalysisItemId(
  args: InferRequestType<
    (typeof client.v1.convai)['analysis-items'][':analysis_item_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai['analysis-items'][':analysis_item_id'].$patch(args, options),
  )
}

export async function getV1ConvaiAnalysisItemsAnalysisItemIdVersions(
  args: InferRequestType<
    (typeof client.v1.convai)['analysis-items'][':analysis_item_id']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai['analysis-items'][':analysis_item_id'].versions.$get(args, options),
  )
}

export async function postV1ConvaiAnalysisItemsAnalysisItemIdCopy(
  args: InferRequestType<
    (typeof client.v1.convai)['analysis-items'][':analysis_item_id']['copy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai['analysis-items'][':analysis_item_id'].copy.$post(args, options),
  )
}

export async function getV1ConvaiAnalysisItemsAnalysisItemIdDependentAgents(
  args: InferRequestType<
    (typeof client.v1.convai)['analysis-items'][':analysis_item_id']['dependent-agents']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai['analysis-items'][':analysis_item_id']['dependent-agents'].$get(args, options),
  )
}

export async function getV1ConvaiSettings(
  args: InferRequestType<typeof client.v1.convai.settings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai.settings.$get(args, options))
}

export async function patchV1ConvaiSettings(
  args: InferRequestType<typeof client.v1.convai.settings.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai.settings.$patch(args, options))
}

export async function getV1ConvaiSettingsDashboard(
  args: InferRequestType<typeof client.v1.convai.settings.dashboard.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai.settings.dashboard.$get(args, options))
}

export async function patchV1ConvaiSettingsDashboard(
  args: InferRequestType<typeof client.v1.convai.settings.dashboard.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai.settings.dashboard.$patch(args, options))
}

export async function getV1ConvaiSecrets(
  args: InferRequestType<typeof client.v1.convai.secrets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai.secrets.$get(args, options))
}

export async function postV1ConvaiSecrets(
  args: InferRequestType<typeof client.v1.convai.secrets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai.secrets.$post(args, options))
}

export async function getV1ConvaiSecretsSecretId(
  args: InferRequestType<(typeof client.v1.convai.secrets)[':secret_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai.secrets[':secret_id'].$get(args, options))
}

export async function deleteV1ConvaiSecretsSecretId(
  args: InferRequestType<(typeof client.v1.convai.secrets)[':secret_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai.secrets[':secret_id'].$delete(args, options))
}

export async function patchV1ConvaiSecretsSecretId(
  args: InferRequestType<(typeof client.v1.convai.secrets)[':secret_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai.secrets[':secret_id'].$patch(args, options))
}

export async function getV1ConvaiSecretsSecretIdDependenciesResourceType(
  args: InferRequestType<
    (typeof client.v1.convai.secrets)[':secret_id']['dependencies'][':resource_type']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai.secrets[':secret_id'].dependencies[':resource_type'].$get(args, options),
  )
}

export async function postV1ConvaiBatchCallingSubmit(
  args: InferRequestType<(typeof client.v1.convai)['batch-calling']['submit']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai['batch-calling'].submit.$post(args, options))
}

export async function getV1ConvaiBatchCallingWorkspace(
  args: InferRequestType<(typeof client.v1.convai)['batch-calling']['workspace']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai['batch-calling'].workspace.$get(args, options))
}

export async function getV1ConvaiBatchCallingBatchId(
  args: InferRequestType<(typeof client.v1.convai)['batch-calling'][':batch_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai['batch-calling'][':batch_id'].$get(args, options))
}

export async function deleteV1ConvaiBatchCallingBatchId(
  args: InferRequestType<(typeof client.v1.convai)['batch-calling'][':batch_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai['batch-calling'][':batch_id'].$delete(args, options))
}

export async function postV1ConvaiBatchCallingBatchIdCancel(
  args: InferRequestType<
    (typeof client.v1.convai)['batch-calling'][':batch_id']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai['batch-calling'][':batch_id'].cancel.$post(args, options),
  )
}

export async function postV1ConvaiBatchCallingBatchIdRetry(
  args: InferRequestType<(typeof client.v1.convai)['batch-calling'][':batch_id']['retry']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai['batch-calling'][':batch_id'].retry.$post(args, options),
  )
}

export async function getV1ConvaiBatchCallingBatchIdExport(
  args: InferRequestType<(typeof client.v1.convai)['batch-calling'][':batch_id']['export']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai['batch-calling'][':batch_id'].export.$get(args, options),
  )
}

export async function postV1ConvaiSipTrunkOutboundCall(
  args: InferRequestType<(typeof client.v1.convai)['sip-trunk']['outbound-call']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai['sip-trunk']['outbound-call'].$post(args, options))
}

export async function getV1ConvaiMcpServers(
  args: InferRequestType<(typeof client.v1.convai)['mcp-servers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai['mcp-servers'].$get(args, options))
}

export async function postV1ConvaiMcpServers(
  args: InferRequestType<(typeof client.v1.convai)['mcp-servers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai['mcp-servers'].$post(args, options))
}

export async function getV1ConvaiMcpServersMcpServerId(
  args: InferRequestType<(typeof client.v1.convai)['mcp-servers'][':mcp_server_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai['mcp-servers'][':mcp_server_id'].$get(args, options))
}

export async function deleteV1ConvaiMcpServersMcpServerId(
  args: InferRequestType<(typeof client.v1.convai)['mcp-servers'][':mcp_server_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai['mcp-servers'][':mcp_server_id'].$delete(args, options),
  )
}

export async function patchV1ConvaiMcpServersMcpServerId(
  args: InferRequestType<(typeof client.v1.convai)['mcp-servers'][':mcp_server_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai['mcp-servers'][':mcp_server_id'].$patch(args, options),
  )
}

export async function getV1ConvaiMcpServersMcpServerIdTools(
  args: InferRequestType<
    (typeof client.v1.convai)['mcp-servers'][':mcp_server_id']['tools']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai['mcp-servers'][':mcp_server_id'].tools.$get(args, options),
  )
}

export async function patchV1ConvaiMcpServersMcpServerIdApprovalPolicy(
  args: InferRequestType<
    (typeof client.v1.convai)['mcp-servers'][':mcp_server_id']['approval-policy']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai['mcp-servers'][':mcp_server_id']['approval-policy'].$patch(args, options),
  )
}

export async function postV1ConvaiMcpServersMcpServerIdToolApprovals(
  args: InferRequestType<
    (typeof client.v1.convai)['mcp-servers'][':mcp_server_id']['tool-approvals']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai['mcp-servers'][':mcp_server_id']['tool-approvals'].$post(args, options),
  )
}

export async function deleteV1ConvaiMcpServersMcpServerIdToolApprovalsToolName(
  args: InferRequestType<
    (typeof client.v1.convai)['mcp-servers'][':mcp_server_id']['tool-approvals'][':tool_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai['mcp-servers'][':mcp_server_id']['tool-approvals'][':tool_name'].$delete(
      args,
      options,
    ),
  )
}

export async function postV1ConvaiMcpServersMcpServerIdToolConfigs(
  args: InferRequestType<
    (typeof client.v1.convai)['mcp-servers'][':mcp_server_id']['tool-configs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai['mcp-servers'][':mcp_server_id']['tool-configs'].$post(args, options),
  )
}

export async function getV1ConvaiMcpServersMcpServerIdToolConfigsToolName(
  args: InferRequestType<
    (typeof client.v1.convai)['mcp-servers'][':mcp_server_id']['tool-configs'][':tool_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai['mcp-servers'][':mcp_server_id']['tool-configs'][':tool_name'].$get(
      args,
      options,
    ),
  )
}

export async function deleteV1ConvaiMcpServersMcpServerIdToolConfigsToolName(
  args: InferRequestType<
    (typeof client.v1.convai)['mcp-servers'][':mcp_server_id']['tool-configs'][':tool_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai['mcp-servers'][':mcp_server_id']['tool-configs'][':tool_name'].$delete(
      args,
      options,
    ),
  )
}

export async function patchV1ConvaiMcpServersMcpServerIdToolConfigsToolName(
  args: InferRequestType<
    (typeof client.v1.convai)['mcp-servers'][':mcp_server_id']['tool-configs'][':tool_name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai['mcp-servers'][':mcp_server_id']['tool-configs'][':tool_name'].$patch(
      args,
      options,
    ),
  )
}

export async function getV1ConvaiWhatsappAccountsPhoneNumberId(
  args: InferRequestType<
    (typeof client.v1.convai)['whatsapp-accounts'][':phone_number_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai['whatsapp-accounts'][':phone_number_id'].$get(args, options),
  )
}

export async function deleteV1ConvaiWhatsappAccountsPhoneNumberId(
  args: InferRequestType<
    (typeof client.v1.convai)['whatsapp-accounts'][':phone_number_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai['whatsapp-accounts'][':phone_number_id'].$delete(args, options),
  )
}

export async function patchV1ConvaiWhatsappAccountsPhoneNumberId(
  args: InferRequestType<
    (typeof client.v1.convai)['whatsapp-accounts'][':phone_number_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai['whatsapp-accounts'][':phone_number_id'].$patch(args, options),
  )
}

export async function getV1ConvaiWhatsappAccounts(
  args: InferRequestType<(typeof client.v1.convai)['whatsapp-accounts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai['whatsapp-accounts'].$get(args, options))
}

export async function getV1ConvaiAgentsAgentIdBranches(
  args: InferRequestType<(typeof client.v1.convai.agents)[':agent_id']['branches']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai.agents[':agent_id'].branches.$get(args, options))
}

export async function postV1ConvaiAgentsAgentIdBranches(
  args: InferRequestType<(typeof client.v1.convai.agents)[':agent_id']['branches']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai.agents[':agent_id'].branches.$post(args, options))
}

export async function getV1ConvaiAgentsAgentIdBranchesBranchId(
  args: InferRequestType<
    (typeof client.v1.convai.agents)[':agent_id']['branches'][':branch_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai.agents[':agent_id'].branches[':branch_id'].$get(args, options),
  )
}

export async function patchV1ConvaiAgentsAgentIdBranchesBranchId(
  args: InferRequestType<
    (typeof client.v1.convai.agents)[':agent_id']['branches'][':branch_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai.agents[':agent_id'].branches[':branch_id'].$patch(args, options),
  )
}

export async function getV1ConvaiAgentsAgentIdVersionsVersionId(
  args: InferRequestType<
    (typeof client.v1.convai.agents)[':agent_id']['versions'][':version_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai.agents[':agent_id'].versions[':version_id'].$get(args, options),
  )
}

export async function getV1ConvaiAgentsAgentIdBranchesSourceBranchIdMergePreview(
  args: InferRequestType<
    (typeof client.v1.convai.agents)[':agent_id']['branches'][':source_branch_id']['merge-preview']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai.agents[':agent_id'].branches[':source_branch_id']['merge-preview'].$get(
      args,
      options,
    ),
  )
}

export async function postV1ConvaiAgentsAgentIdBranchesSourceBranchIdMerge(
  args: InferRequestType<
    (typeof client.v1.convai.agents)[':agent_id']['branches'][':source_branch_id']['merge']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai.agents[':agent_id'].branches[':source_branch_id'].merge.$post(args, options),
  )
}

export async function getV1ConvaiAgentsAgentIdBranchesBranchIdRebasePreview(
  args: InferRequestType<
    (typeof client.v1.convai.agents)[':agent_id']['branches'][':branch_id']['rebase-preview']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai.agents[':agent_id'].branches[':branch_id']['rebase-preview'].$get(
      args,
      options,
    ),
  )
}

export async function postV1ConvaiAgentsAgentIdBranchesBranchIdRebase(
  args: InferRequestType<
    (typeof client.v1.convai.agents)[':agent_id']['branches'][':branch_id']['rebase']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai.agents[':agent_id'].branches[':branch_id'].rebase.$post(args, options),
  )
}

export async function getV1ConvaiAgentsAgentIdDeployments(
  args: InferRequestType<(typeof client.v1.convai.agents)[':agent_id']['deployments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai.agents[':agent_id'].deployments.$get(args, options))
}

export async function postV1ConvaiAgentsAgentIdDeployments(
  args: InferRequestType<(typeof client.v1.convai.agents)[':agent_id']['deployments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai.agents[':agent_id'].deployments.$post(args, options))
}

export async function postV1ConvaiAgentsAgentIdDrafts(
  args: InferRequestType<(typeof client.v1.convai.agents)[':agent_id']['drafts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai.agents[':agent_id'].drafts.$post(args, options))
}

export async function deleteV1ConvaiAgentsAgentIdDrafts(
  args: InferRequestType<(typeof client.v1.convai.agents)[':agent_id']['drafts']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai.agents[':agent_id'].drafts.$delete(args, options))
}

export async function getV1ConvaiAgentsAgentIdMergeProposals(
  args: InferRequestType<(typeof client.v1.convai.agents)[':agent_id']['merge-proposals']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai.agents[':agent_id']['merge-proposals'].$get(args, options),
  )
}

export async function postV1ConvaiAgentsAgentIdMergeProposals(
  args: InferRequestType<(typeof client.v1.convai.agents)[':agent_id']['merge-proposals']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai.agents[':agent_id']['merge-proposals'].$post(args, options),
  )
}

export async function getV1ConvaiAgentsAgentIdMergeProposalsMergeProposalId(
  args: InferRequestType<
    (typeof client.v1.convai.agents)[':agent_id']['merge-proposals'][':merge_proposal_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai.agents[':agent_id']['merge-proposals'][':merge_proposal_id'].$get(
      args,
      options,
    ),
  )
}

export async function patchV1ConvaiAgentsAgentIdMergeProposalsMergeProposalId(
  args: InferRequestType<
    (typeof client.v1.convai.agents)[':agent_id']['merge-proposals'][':merge_proposal_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai.agents[':agent_id']['merge-proposals'][':merge_proposal_id'].$patch(
      args,
      options,
    ),
  )
}

export async function postV1ConvaiAgentsAgentIdMergeProposalsMergeProposalIdReviews(
  args: InferRequestType<
    (typeof client.v1.convai.agents)[':agent_id']['merge-proposals'][':merge_proposal_id']['reviews']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai.agents[':agent_id']['merge-proposals'][':merge_proposal_id'].reviews.$post(
      args,
      options,
    ),
  )
}

export async function postV1ConvaiAgentsAgentIdMergeProposalsMergeProposalIdComments(
  args: InferRequestType<
    (typeof client.v1.convai.agents)[':agent_id']['merge-proposals'][':merge_proposal_id']['comments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai.agents[':agent_id']['merge-proposals'][':merge_proposal_id'].comments.$post(
      args,
      options,
    ),
  )
}

export async function postV1ConvaiAgentsAgentIdMergeProposalsMergeProposalIdMerge(
  args: InferRequestType<
    (typeof client.v1.convai.agents)[':agent_id']['merge-proposals'][':merge_proposal_id']['merge']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai.agents[':agent_id']['merge-proposals'][':merge_proposal_id'].merge.$post(
      args,
      options,
    ),
  )
}

export async function getV1ConvaiOutboundCampaignsConfig(
  args: InferRequestType<(typeof client.v1.convai)['outbound-campaigns']['config']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai['outbound-campaigns'].config.$get(args, options))
}

export async function putV1ConvaiOutboundCampaignsConfig(
  args: InferRequestType<(typeof client.v1.convai)['outbound-campaigns']['config']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai['outbound-campaigns'].config.$put(args, options))
}

export async function getV1ConvaiOutboundCampaignsCampaigns(
  args: InferRequestType<(typeof client.v1.convai)['outbound-campaigns']['campaigns']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai['outbound-campaigns'].campaigns.$get(args, options))
}

export async function postV1ConvaiOutboundCampaignsCampaignsPauseAll(
  args: InferRequestType<
    (typeof client.v1.convai)['outbound-campaigns']['campaigns']['pause-all']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai['outbound-campaigns'].campaigns['pause-all'].$post(args, options),
  )
}

export async function postV1ConvaiOutboundCampaignsCampaignsStopAll(
  args: InferRequestType<
    (typeof client.v1.convai)['outbound-campaigns']['campaigns']['stop-all']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai['outbound-campaigns'].campaigns['stop-all'].$post(args, options),
  )
}

export async function postV1ConvaiOutboundCampaignsCampaignsSubmit(
  args: InferRequestType<
    (typeof client.v1.convai)['outbound-campaigns']['campaigns']['submit']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai['outbound-campaigns'].campaigns.submit.$post(args, options),
  )
}

export async function getV1ConvaiOutboundCampaignsCampaignsCampaignId(
  args: InferRequestType<
    (typeof client.v1.convai)['outbound-campaigns']['campaigns'][':campaign_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai['outbound-campaigns'].campaigns[':campaign_id'].$get(args, options),
  )
}

export async function getV1ConvaiOutboundCampaignsCampaignsCampaignIdProgress(
  args: InferRequestType<
    (typeof client.v1.convai)['outbound-campaigns']['campaigns'][':campaign_id']['progress']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai['outbound-campaigns'].campaigns[':campaign_id'].progress.$get(args, options),
  )
}

export async function getV1ConvaiOutboundCampaignsCampaignsCampaignIdLeads(
  args: InferRequestType<
    (typeof client.v1.convai)['outbound-campaigns']['campaigns'][':campaign_id']['leads']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai['outbound-campaigns'].campaigns[':campaign_id'].leads.$get(args, options),
  )
}

export async function getV1ConvaiOutboundCampaignsCampaignsCampaignIdCalls(
  args: InferRequestType<
    (typeof client.v1.convai)['outbound-campaigns']['campaigns'][':campaign_id']['calls']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai['outbound-campaigns'].campaigns[':campaign_id'].calls.$get(args, options),
  )
}

export async function getV1ConvaiOutboundCampaignsCampaignsCampaignIdFollowUpRequests(
  args: InferRequestType<
    (typeof client.v1.convai)['outbound-campaigns']['campaigns'][':campaign_id']['follow-up-requests']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai['outbound-campaigns'].campaigns[':campaign_id']['follow-up-requests'].$get(
      args,
      options,
    ),
  )
}

export async function getV1ConvaiOutboundCampaignsCampaignsCampaignIdExport(
  args: InferRequestType<
    (typeof client.v1.convai)['outbound-campaigns']['campaigns'][':campaign_id']['export']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai['outbound-campaigns'].campaigns[':campaign_id'].export.$get(args, options),
  )
}

export async function getV1ConvaiOutboundCampaignsCampaignsCampaignIdLeadsLeadId(
  args: InferRequestType<
    (typeof client.v1.convai)['outbound-campaigns']['campaigns'][':campaign_id']['leads'][':lead_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai['outbound-campaigns'].campaigns[':campaign_id'].leads[':lead_id'].$get(
      args,
      options,
    ),
  )
}

export async function deleteV1ConvaiOutboundCampaignsCampaignsCampaignIdLeadsLeadId(
  args: InferRequestType<
    (typeof client.v1.convai)['outbound-campaigns']['campaigns'][':campaign_id']['leads'][':lead_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai['outbound-campaigns'].campaigns[':campaign_id'].leads[':lead_id'].$delete(
      args,
      options,
    ),
  )
}

export async function postV1ConvaiOutboundCampaignsCampaignsCampaignIdPause(
  args: InferRequestType<
    (typeof client.v1.convai)['outbound-campaigns']['campaigns'][':campaign_id']['pause']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai['outbound-campaigns'].campaigns[':campaign_id'].pause.$post(args, options),
  )
}

export async function postV1ConvaiOutboundCampaignsCampaignsCampaignIdResume(
  args: InferRequestType<
    (typeof client.v1.convai)['outbound-campaigns']['campaigns'][':campaign_id']['resume']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai['outbound-campaigns'].campaigns[':campaign_id'].resume.$post(args, options),
  )
}

export async function postV1ConvaiOutboundCampaignsCampaignsCampaignIdStop(
  args: InferRequestType<
    (typeof client.v1.convai)['outbound-campaigns']['campaigns'][':campaign_id']['stop']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai['outbound-campaigns'].campaigns[':campaign_id'].stop.$post(args, options),
  )
}

export async function getV1ConvaiOutboundCampaignsAttention(
  args: InferRequestType<(typeof client.v1.convai)['outbound-campaigns']['attention']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai['outbound-campaigns'].attention.$get(args, options))
}

export async function postV1ConvaiOutboundCampaignsAttentionAttentionIdRetry(
  args: InferRequestType<
    (typeof client.v1.convai)['outbound-campaigns']['attention'][':attention_id']['retry']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai['outbound-campaigns'].attention[':attention_id'].retry.$post(args, options),
  )
}

export async function postV1ConvaiOutboundCampaignsAttentionAttentionIdResolve(
  args: InferRequestType<
    (typeof client.v1.convai)['outbound-campaigns']['attention'][':attention_id']['resolve']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai['outbound-campaigns'].attention[':attention_id'].resolve.$post(args, options),
  )
}

export async function getV1SpeechEngine(
  args: InferRequestType<(typeof client.v1)['speech-engine']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['speech-engine'].$get(args, options))
}

export async function postV1SpeechEngine(
  args: InferRequestType<(typeof client.v1)['speech-engine']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['speech-engine'].$post(args, options))
}

export async function getV1SpeechEngineSpeechEngineId(
  args: InferRequestType<(typeof client.v1)['speech-engine'][':speech_engine_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['speech-engine'][':speech_engine_id'].$get(args, options))
}

export async function deleteV1SpeechEngineSpeechEngineId(
  args: InferRequestType<(typeof client.v1)['speech-engine'][':speech_engine_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['speech-engine'][':speech_engine_id'].$delete(args, options))
}

export async function patchV1SpeechEngineSpeechEngineId(
  args: InferRequestType<(typeof client.v1)['speech-engine'][':speech_engine_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['speech-engine'][':speech_engine_id'].$patch(args, options))
}

export async function postV1SpeechEngineSpeechEngineIdDuplicate(
  args: InferRequestType<
    (typeof client.v1)['speech-engine'][':speech_engine_id']['duplicate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['speech-engine'][':speech_engine_id'].duplicate.$post(args, options),
  )
}

export async function postV1ConvaiConversationsConversationIdMessages(
  args: InferRequestType<
    (typeof client.v1.convai.conversations)[':conversation_id']['messages']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai.conversations[':conversation_id'].messages.$post(args, options),
  )
}

export async function postV1ConvaiConversationsConversationIdMessagesStream(
  args: InferRequestType<
    (typeof client.v1.convai.conversations)[':conversation_id']['messages']['stream']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai.conversations[':conversation_id'].messages.stream.$post(args, options),
  )
}

export async function getV1ConvaiConversationsConversationIdTurnsTurnId(
  args: InferRequestType<
    (typeof client.v1.convai.conversations)[':conversation_id']['turns'][':turn_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai.conversations[':conversation_id'].turns[':turn_id'].$get(args, options),
  )
}

export async function getV1ConvaiConversationsConversationIdTurnsTurnIdEvents(
  args: InferRequestType<
    (typeof client.v1.convai.conversations)[':conversation_id']['turns'][':turn_id']['events']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai.conversations[':conversation_id'].turns[':turn_id'].events.$get(args, options),
  )
}

export async function getV1ConvaiAgentsAgentIdBranchesBranchIdProcedures(
  args: InferRequestType<
    (typeof client.v1.convai.agents)[':agent_id']['branches'][':branch_id']['procedures']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai.agents[':agent_id'].branches[':branch_id'].procedures.$get(args, options),
  )
}

export async function postV1ConvaiAgentsAgentIdBranchesBranchIdProcedures(
  args: InferRequestType<
    (typeof client.v1.convai.agents)[':agent_id']['branches'][':branch_id']['procedures']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai.agents[':agent_id'].branches[':branch_id'].procedures.$post(args, options),
  )
}

export async function postV1ConvaiAgentsAgentIdBranchesBranchIdProceduresCompile(
  args: InferRequestType<
    (typeof client.v1.convai.agents)[':agent_id']['branches'][':branch_id']['procedures']['compile']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai.agents[':agent_id'].branches[':branch_id'].procedures.compile.$post(
      args,
      options,
    ),
  )
}

export async function getV1ConvaiAgentsAgentIdBranchesBranchIdProceduresProcedureId(
  args: InferRequestType<
    (typeof client.v1.convai.agents)[':agent_id']['branches'][':branch_id']['procedures'][':procedure_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai.agents[':agent_id'].branches[':branch_id'].procedures[':procedure_id'].$get(
      args,
      options,
    ),
  )
}

export async function deleteV1ConvaiAgentsAgentIdBranchesBranchIdProceduresProcedureId(
  args: InferRequestType<
    (typeof client.v1.convai.agents)[':agent_id']['branches'][':branch_id']['procedures'][':procedure_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai.agents[':agent_id'].branches[':branch_id'].procedures[':procedure_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getV1ConvaiAgentsAgentIdBranchesBranchIdProceduresProcedureIdDraft(
  args: InferRequestType<
    (typeof client.v1.convai.agents)[':agent_id']['branches'][':branch_id']['procedures'][':procedure_id']['draft']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai.agents[':agent_id'].branches[':branch_id'].procedures[
      ':procedure_id'
    ].draft.$get(args, options),
  )
}

export async function deleteV1ConvaiAgentsAgentIdBranchesBranchIdProceduresProcedureIdDraft(
  args: InferRequestType<
    (typeof client.v1.convai.agents)[':agent_id']['branches'][':branch_id']['procedures'][':procedure_id']['draft']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai.agents[':agent_id'].branches[':branch_id'].procedures[
      ':procedure_id'
    ].draft.$delete(args, options),
  )
}

export async function patchV1ConvaiAgentsAgentIdBranchesBranchIdProceduresProcedureIdDraft(
  args: InferRequestType<
    (typeof client.v1.convai.agents)[':agent_id']['branches'][':branch_id']['procedures'][':procedure_id']['draft']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai.agents[':agent_id'].branches[':branch_id'].procedures[
      ':procedure_id'
    ].draft.$patch(args, options),
  )
}

export async function postV1ConvaiConversationsConversationIdAnalysisRun(
  args: InferRequestType<
    (typeof client.v1.convai.conversations)[':conversation_id']['analysis']['run']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai.conversations[':conversation_id'].analysis.run.$post(args, options),
  )
}

export async function postV1ConvaiConversationsConversationIdAnalysisEvaluationsRun(
  args: InferRequestType<
    (typeof client.v1.convai.conversations)[':conversation_id']['analysis']['evaluations']['run']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai.conversations[':conversation_id'].analysis.evaluations.run.$post(
      args,
      options,
    ),
  )
}

export async function getV1ConvaiEnvironmentVariables(
  args: InferRequestType<(typeof client.v1.convai)['environment-variables']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai['environment-variables'].$get(args, options))
}

export async function postV1ConvaiEnvironmentVariables(
  args: InferRequestType<(typeof client.v1.convai)['environment-variables']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai['environment-variables'].$post(args, options))
}

export async function getV1ConvaiEnvironmentVariablesEnvVarId(
  args: InferRequestType<(typeof client.v1.convai)['environment-variables'][':env_var_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai['environment-variables'][':env_var_id'].$get(args, options),
  )
}

export async function deleteV1ConvaiEnvironmentVariablesEnvVarId(
  args: InferRequestType<
    (typeof client.v1.convai)['environment-variables'][':env_var_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai['environment-variables'][':env_var_id'].$delete(args, options),
  )
}

export async function patchV1ConvaiEnvironmentVariablesEnvVarId(
  args: InferRequestType<
    (typeof client.v1.convai)['environment-variables'][':env_var_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai['environment-variables'][':env_var_id'].$patch(args, options),
  )
}

export async function getV1ConvaiEnvironments(
  args: InferRequestType<typeof client.v1.convai.environments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai.environments.$get(args, options))
}

export async function postV1ConvaiEnvironments(
  args: InferRequestType<typeof client.v1.convai.environments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai.environments.$post(args, options))
}

export async function deleteV1ConvaiEnvironmentsEnvironment(
  args: InferRequestType<(typeof client.v1.convai.environments)[':environment']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai.environments[':environment'].$delete(args, options))
}

export async function getV1ConvaiRealtimeConversationGroups(
  args: InferRequestType<(typeof client.v1.convai.realtime)['conversation-groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai.realtime['conversation-groups'].$get(args, options))
}

export async function postV1ConvaiRealtimeConversationGroups(
  args: InferRequestType<(typeof client.v1.convai.realtime)['conversation-groups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai.realtime['conversation-groups'].$post(args, options))
}

export async function getV1ConvaiRealtimeConversationGroupsConversationGroupId(
  args: InferRequestType<
    (typeof client.v1.convai.realtime)['conversation-groups'][':conversation_group_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai.realtime['conversation-groups'][':conversation_group_id'].$get(args, options),
  )
}

export async function deleteV1ConvaiRealtimeConversationGroupsConversationGroupId(
  args: InferRequestType<
    (typeof client.v1.convai.realtime)['conversation-groups'][':conversation_group_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai.realtime['conversation-groups'][':conversation_group_id'].$delete(
      args,
      options,
    ),
  )
}

export async function patchV1ConvaiRealtimeConversationGroupsConversationGroupId(
  args: InferRequestType<
    (typeof client.v1.convai.realtime)['conversation-groups'][':conversation_group_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai.realtime['conversation-groups'][':conversation_group_id'].$patch(
      args,
      options,
    ),
  )
}

export async function putV1ConvaiRealtimeConversationsConversationIdConversationGroup(
  args: InferRequestType<
    (typeof client.v1.convai.realtime.conversations)[':conversation_id']['conversation-group']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai.realtime.conversations[':conversation_id']['conversation-group'].$put(
      args,
      options,
    ),
  )
}

export async function deleteV1ConvaiRealtimeConversationsConversationIdConversationGroup(
  args: InferRequestType<
    (typeof client.v1.convai.realtime.conversations)[':conversation_id']['conversation-group']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.convai.realtime.conversations[':conversation_id']['conversation-group'].$delete(
      args,
      options,
    ),
  )
}

export async function postV1ConvaiRealtimeClientSecrets(
  args: InferRequestType<typeof client.v1.convai.realtime.client_secrets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.convai.realtime.client_secrets.$post(args, options))
}

export async function postV1MusicPlan(
  args: InferRequestType<typeof client.v1.music.plan.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.music.plan.$post(args, options))
}

export async function postV1Music(
  args: InferRequestType<typeof client.v1.music.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.music.$post(args, options))
}

export async function postV1MusicDetailed(
  args: InferRequestType<typeof client.v1.music.detailed.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.music.detailed.$post(args, options))
}

export async function postV1MusicDetailedStream(
  args: InferRequestType<typeof client.v1.music.detailed.stream.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.music.detailed.stream.$post(args, options))
}

export async function postV1MusicStream(
  args: InferRequestType<typeof client.v1.music.stream.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.music.stream.$post(args, options))
}

export async function postV1MusicUpload(
  args: InferRequestType<typeof client.v1.music.upload.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.music.upload.$post(args, options))
}

export async function postV1MusicStemSeparation(
  args: InferRequestType<(typeof client.v1.music)['stem-separation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.music['stem-separation'].$post(args, options))
}

export async function getV1MusicFinetunes(
  args: InferRequestType<typeof client.v1.music.finetunes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.music.finetunes.$get(args, options))
}

export async function postV1MusicFinetunes(
  args: InferRequestType<typeof client.v1.music.finetunes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.music.finetunes.$post(args, options))
}

export async function getV1MusicFinetunesFinetuneId(
  args: InferRequestType<(typeof client.v1.music.finetunes)[':finetune_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.music.finetunes[':finetune_id'].$get(args, options))
}

export async function deleteV1MusicFinetunesFinetuneId(
  args: InferRequestType<(typeof client.v1.music.finetunes)[':finetune_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.music.finetunes[':finetune_id'].$delete(args, options))
}

export async function patchV1MusicFinetunesFinetuneId(
  args: InferRequestType<(typeof client.v1.music.finetunes)[':finetune_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.music.finetunes[':finetune_id'].$patch(args, options))
}

export async function getV1ProductionsOrders(
  args: InferRequestType<typeof client.v1.productions.orders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.productions.orders.$get(args, options))
}

export async function postV1ProductionsOrders(
  args: InferRequestType<typeof client.v1.productions.orders.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.productions.orders.$post(args, options))
}

export async function getV1ProductionsOrdersOrderId(
  args: InferRequestType<(typeof client.v1.productions.orders)[':order_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.productions.orders[':order_id'].$get(args, options))
}

export async function patchV1ProductionsOrdersOrderId(
  args: InferRequestType<(typeof client.v1.productions.orders)[':order_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.productions.orders[':order_id'].$patch(args, options))
}

export async function postV1ProductionsOrdersOrderIdMedia(
  args: InferRequestType<(typeof client.v1.productions.orders)[':order_id']['media']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.productions.orders[':order_id'].media.$post(args, options))
}

export async function getV1ProductionsOrdersOrderIdMediaMediaId(
  args: InferRequestType<
    (typeof client.v1.productions.orders)[':order_id']['media'][':media_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.productions.orders[':order_id'].media[':media_id'].$get(args, options),
  )
}

export async function postV1ProductionsOrdersOrderIdItems(
  args: InferRequestType<(typeof client.v1.productions.orders)[':order_id']['items']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.productions.orders[':order_id'].items.$post(args, options))
}

export async function deleteV1ProductionsOrdersOrderIdItemsItemId(
  args: InferRequestType<
    (typeof client.v1.productions.orders)[':order_id']['items'][':item_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.productions.orders[':order_id'].items[':item_id'].$delete(args, options),
  )
}

export async function postV1ProductionsOrdersOrderIdSubmit(
  args: InferRequestType<(typeof client.v1.productions.orders)[':order_id']['submit']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.productions.orders[':order_id'].submit.$post(args, options))
}

export async function getV1ProductionsOrdersOrderIdDeliverables(
  args: InferRequestType<
    (typeof client.v1.productions.orders)[':order_id']['deliverables']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.productions.orders[':order_id'].deliverables.$get(args, options),
  )
}

export async function getV1ProductionsOrdersLanguagesOrderItemKind(
  args: InferRequestType<
    (typeof client.v1.productions.orders.languages)[':order_item_kind']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.productions.orders.languages[':order_item_kind'].$get(args, options),
  )
}

export async function postV1VoicesPvc(
  args: InferRequestType<typeof client.v1.voices.pvc.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.voices.pvc.$post(args, options))
}

export async function postV1VoicesPvcVoiceId(
  args: InferRequestType<(typeof client.v1.voices.pvc)[':voice_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.voices.pvc[':voice_id'].$post(args, options))
}

export async function postV1VoicesPvcVoiceIdSamples(
  args: InferRequestType<(typeof client.v1.voices.pvc)[':voice_id']['samples']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.voices.pvc[':voice_id'].samples.$post(args, options))
}

export async function postV1VoicesPvcVoiceIdSamplesSampleId(
  args: InferRequestType<
    (typeof client.v1.voices.pvc)[':voice_id']['samples'][':sample_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.voices.pvc[':voice_id'].samples[':sample_id'].$post(args, options),
  )
}

export async function deleteV1VoicesPvcVoiceIdSamplesSampleId(
  args: InferRequestType<
    (typeof client.v1.voices.pvc)[':voice_id']['samples'][':sample_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.voices.pvc[':voice_id'].samples[':sample_id'].$delete(args, options),
  )
}

export async function getV1VoicesPvcVoiceIdSamplesSampleIdAudio(
  args: InferRequestType<
    (typeof client.v1.voices.pvc)[':voice_id']['samples'][':sample_id']['audio']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.voices.pvc[':voice_id'].samples[':sample_id'].audio.$get(args, options),
  )
}

export async function getV1VoicesPvcVoiceIdSamplesSampleIdWaveform(
  args: InferRequestType<
    (typeof client.v1.voices.pvc)[':voice_id']['samples'][':sample_id']['waveform']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.voices.pvc[':voice_id'].samples[':sample_id'].waveform.$get(args, options),
  )
}

export async function getV1VoicesPvcVoiceIdSamplesSampleIdSpeakers(
  args: InferRequestType<
    (typeof client.v1.voices.pvc)[':voice_id']['samples'][':sample_id']['speakers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.voices.pvc[':voice_id'].samples[':sample_id'].speakers.$get(args, options),
  )
}

export async function postV1VoicesPvcVoiceIdSamplesSampleIdSeparateSpeakers(
  args: InferRequestType<
    (typeof client.v1.voices.pvc)[':voice_id']['samples'][':sample_id']['separate-speakers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.voices.pvc[':voice_id'].samples[':sample_id']['separate-speakers'].$post(
      args,
      options,
    ),
  )
}

export async function getV1VoicesPvcVoiceIdSamplesSampleIdSpeakersSpeakerIdAudio(
  args: InferRequestType<
    (typeof client.v1.voices.pvc)[':voice_id']['samples'][':sample_id']['speakers'][':speaker_id']['audio']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.voices.pvc[':voice_id'].samples[':sample_id'].speakers[':speaker_id'].audio.$get(
      args,
      options,
    ),
  )
}

export async function getV1VoicesPvcVoiceIdCaptcha(
  args: InferRequestType<(typeof client.v1.voices.pvc)[':voice_id']['captcha']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.voices.pvc[':voice_id'].captcha.$get(args, options))
}

export async function postV1VoicesPvcVoiceIdCaptcha(
  args: InferRequestType<(typeof client.v1.voices.pvc)[':voice_id']['captcha']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.voices.pvc[':voice_id'].captcha.$post(args, options))
}

export async function postV1VoicesPvcVoiceIdTrain(
  args: InferRequestType<(typeof client.v1.voices.pvc)[':voice_id']['train']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.voices.pvc[':voice_id'].train.$post(args, options))
}

export async function postV1VoicesPvcVoiceIdVerification(
  args: InferRequestType<(typeof client.v1.voices.pvc)[':voice_id']['verification']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.voices.pvc[':voice_id'].verification.$post(args, options))
}

export async function getV1FlowsVideo(
  args: InferRequestType<typeof client.v1.flows.video.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.flows.video.$get(args, options))
}

export async function postV1FlowsVideo(
  args: InferRequestType<typeof client.v1.flows.video.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.flows.video.$post(args, options))
}

export async function getV1FlowsVideoGenerationId(
  args: InferRequestType<(typeof client.v1.flows.video)[':generation_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.flows.video[':generation_id'].$get(args, options))
}

export async function getV1FlowsImage(
  args: InferRequestType<typeof client.v1.flows.image.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.flows.image.$get(args, options))
}

export async function postV1FlowsImage(
  args: InferRequestType<typeof client.v1.flows.image.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.flows.image.$post(args, options))
}

export async function getV1FlowsImageGenerationId(
  args: InferRequestType<(typeof client.v1.flows.image)[':generation_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.flows.image[':generation_id'].$get(args, options))
}

export async function getV1FlowsTextToSpeech(
  args: InferRequestType<(typeof client.v1.flows)['text-to-speech']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.flows['text-to-speech'].$get(args, options))
}

export async function postV1FlowsTextToSpeech(
  args: InferRequestType<(typeof client.v1.flows)['text-to-speech']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.flows['text-to-speech'].$post(args, options))
}

export async function getV1FlowsTextToSpeechGenerationId(
  args: InferRequestType<(typeof client.v1.flows)['text-to-speech'][':generation_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.flows['text-to-speech'][':generation_id'].$get(args, options),
  )
}

export async function getV1FlowsTemplatesTemplateIdRuns(
  args: InferRequestType<(typeof client.v1.flows.templates)[':template_id']['runs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.flows.templates[':template_id'].runs.$get(args, options))
}

export async function postV1FlowsTemplatesTemplateIdRuns(
  args: InferRequestType<(typeof client.v1.flows.templates)[':template_id']['runs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.flows.templates[':template_id'].runs.$post(args, options))
}

export async function getV1FlowsTemplatesTemplateIdRunsRunId(
  args: InferRequestType<
    (typeof client.v1.flows.templates)[':template_id']['runs'][':run_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.flows.templates[':template_id'].runs[':run_id'].$get(args, options),
  )
}

export async function getV1FlowsTemplates(
  args: InferRequestType<typeof client.v1.flows.templates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.flows.templates.$get(args, options))
}

export async function getV1FlowsTemplatesTemplateId(
  args: InferRequestType<(typeof client.v1.flows.templates)[':template_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.flows.templates[':template_id'].$get(args, options))
}

export async function getV1Assets(
  args: InferRequestType<typeof client.v1.assets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.assets.$get(args, options))
}

export async function postV1Assets(
  args: InferRequestType<typeof client.v1.assets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.assets.$post(args, options))
}

export async function getV1AssetsAssetId(
  args: InferRequestType<(typeof client.v1.assets)[':asset_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.assets[':asset_id'].$get(args, options))
}

export async function deleteV1AssetsAssetId(
  args: InferRequestType<(typeof client.v1.assets)[':asset_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.assets[':asset_id'].$delete(args, options))
}

export async function postV1WorkspaceAnalyticsQueryUsageByProductOverTime(
  args: InferRequestType<
    (typeof client.v1.workspace.analytics.query)['usage-by-product-over-time']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workspace.analytics.query['usage-by-product-over-time'].$post(args, options),
  )
}

export async function postV1WorkspaceAnalyticsUsage(
  args: InferRequestType<typeof client.v1.workspace.analytics.usage.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workspace.analytics.usage.$post(args, options))
}

export async function postV1WorkspaceAnalyticsRequests(
  args: InferRequestType<typeof client.v1.workspace.analytics.requests.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workspace.analytics.requests.$post(args, options))
}

export async function postV1WorkspaceWebhooksWebhookIdTest(
  args: InferRequestType<(typeof client.v1.workspace.webhooks)[':webhook_id']['test']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workspace.webhooks[':webhook_id'].test.$post(args, options))
}

export async function postV1WorkspaceWebhooksWebhookIdDeliveriesDeliveryIdRedeliver(
  args: InferRequestType<
    (typeof client.v1.workspace.webhooks)[':webhook_id']['deliveries'][':delivery_id']['redeliver']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workspace.webhooks[':webhook_id'].deliveries[':delivery_id'].redeliver.$post(
      args,
      options,
    ),
  )
}

export async function getV1ReceptionServices(
  args: InferRequestType<typeof client.v1.reception.services.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reception.services.$get(args, options))
}

export async function postV1ReceptionServices(
  args: InferRequestType<typeof client.v1.reception.services.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reception.services.$post(args, options))
}

export async function getV1ReceptionServicesServiceId(
  args: InferRequestType<(typeof client.v1.reception.services)[':service_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reception.services[':service_id'].$get(args, options))
}

export async function putV1ReceptionServicesServiceId(
  args: InferRequestType<(typeof client.v1.reception.services)[':service_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reception.services[':service_id'].$put(args, options))
}

export async function deleteV1ReceptionServicesServiceId(
  args: InferRequestType<(typeof client.v1.reception.services)[':service_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reception.services[':service_id'].$delete(args, options))
}

export async function postV1ReceptionServicesServiceIdConfirmUpdate(
  args: InferRequestType<
    (typeof client.v1.reception.services)[':service_id']['confirm-update']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.reception.services[':service_id']['confirm-update'].$post(args, options),
  )
}

export async function getV1ReceptionAssets(
  args: InferRequestType<typeof client.v1.reception.assets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reception.assets.$get(args, options))
}

export async function postV1ReceptionAssets(
  args: InferRequestType<typeof client.v1.reception.assets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reception.assets.$post(args, options))
}

export async function getV1ReceptionAssetsAssetId(
  args: InferRequestType<(typeof client.v1.reception.assets)[':asset_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reception.assets[':asset_id'].$get(args, options))
}

export async function putV1ReceptionAssetsAssetId(
  args: InferRequestType<(typeof client.v1.reception.assets)[':asset_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reception.assets[':asset_id'].$put(args, options))
}

export async function deleteV1ReceptionAssetsAssetId(
  args: InferRequestType<(typeof client.v1.reception.assets)[':asset_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reception.assets[':asset_id'].$delete(args, options))
}

export async function getV1ReceptionProducts(
  args: InferRequestType<typeof client.v1.reception.products.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reception.products.$get(args, options))
}

export async function postV1ReceptionProducts(
  args: InferRequestType<typeof client.v1.reception.products.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reception.products.$post(args, options))
}

export async function getV1ReceptionProductsProductId(
  args: InferRequestType<(typeof client.v1.reception.products)[':product_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reception.products[':product_id'].$get(args, options))
}

export async function putV1ReceptionProductsProductId(
  args: InferRequestType<(typeof client.v1.reception.products)[':product_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reception.products[':product_id'].$put(args, options))
}

export async function deleteV1ReceptionProductsProductId(
  args: InferRequestType<(typeof client.v1.reception.products)[':product_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reception.products[':product_id'].$delete(args, options))
}

export async function patchV1ReceptionProductsProductIdStock(
  args: InferRequestType<(typeof client.v1.reception.products)[':product_id']['stock']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.reception.products[':product_id'].stock.$patch(args, options),
  )
}

export async function postV1ReceptionProductsProductIdStockAdjust(
  args: InferRequestType<
    (typeof client.v1.reception.products)[':product_id']['stock']['adjust']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.reception.products[':product_id'].stock.adjust.$post(args, options),
  )
}

export async function getV1ReceptionStaff(
  args: InferRequestType<typeof client.v1.reception.staff.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reception.staff.$get(args, options))
}

export async function postV1ReceptionStaff(
  args: InferRequestType<typeof client.v1.reception.staff.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reception.staff.$post(args, options))
}

export async function getV1ReceptionStaffStaffId(
  args: InferRequestType<(typeof client.v1.reception.staff)[':staff_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reception.staff[':staff_id'].$get(args, options))
}

export async function putV1ReceptionStaffStaffId(
  args: InferRequestType<(typeof client.v1.reception.staff)[':staff_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reception.staff[':staff_id'].$put(args, options))
}

export async function deleteV1ReceptionStaffStaffId(
  args: InferRequestType<(typeof client.v1.reception.staff)[':staff_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reception.staff[':staff_id'].$delete(args, options))
}

export async function getV1ReceptionCustomerFacingAgents(
  args: InferRequestType<(typeof client.v1.reception)['customer-facing-agents']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reception['customer-facing-agents'].$get(args, options))
}

export async function patchV1ReceptionCustomerFacingAgentsAgentId(
  args: InferRequestType<
    (typeof client.v1.reception)['customer-facing-agents'][':agent_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.reception['customer-facing-agents'][':agent_id'].$patch(args, options),
  )
}

export async function postV1ReceptionCustomerFacingAgentsAgentIdActivate(
  args: InferRequestType<
    (typeof client.v1.reception)['customer-facing-agents'][':agent_id']['activate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.reception['customer-facing-agents'][':agent_id'].activate.$post(args, options),
  )
}

export async function postV1ReceptionCustomerFacingAgentsAgentIdRules(
  args: InferRequestType<
    (typeof client.v1.reception)['customer-facing-agents'][':agent_id']['rules']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.reception['customer-facing-agents'][':agent_id'].rules.$post(args, options),
  )
}

export async function putV1ReceptionCustomerFacingAgentsAgentIdRulesRuleId(
  args: InferRequestType<
    (typeof client.v1.reception)['customer-facing-agents'][':agent_id']['rules'][':rule_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.reception['customer-facing-agents'][':agent_id'].rules[':rule_id'].$put(
      args,
      options,
    ),
  )
}

export async function deleteV1ReceptionCustomerFacingAgentsAgentIdRulesRuleId(
  args: InferRequestType<
    (typeof client.v1.reception)['customer-facing-agents'][':agent_id']['rules'][':rule_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.reception['customer-facing-agents'][':agent_id'].rules[':rule_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getV1ReceptionCustomerFacingAgentsAgentIdProcedures(
  args: InferRequestType<
    (typeof client.v1.reception)['customer-facing-agents'][':agent_id']['procedures']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.reception['customer-facing-agents'][':agent_id'].procedures.$get(args, options),
  )
}

export async function postV1ReceptionCustomerFacingAgentsAgentIdProcedures(
  args: InferRequestType<
    (typeof client.v1.reception)['customer-facing-agents'][':agent_id']['procedures']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.reception['customer-facing-agents'][':agent_id'].procedures.$post(args, options),
  )
}

export async function putV1ReceptionCustomerFacingAgentsAgentIdProceduresProcedureId(
  args: InferRequestType<
    (typeof client.v1.reception)['customer-facing-agents'][':agent_id']['procedures'][':procedure_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.reception['customer-facing-agents'][':agent_id'].procedures[':procedure_id'].$put(
      args,
      options,
    ),
  )
}

export async function deleteV1ReceptionCustomerFacingAgentsAgentIdProceduresProcedureId(
  args: InferRequestType<
    (typeof client.v1.reception)['customer-facing-agents'][':agent_id']['procedures'][':procedure_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.reception['customer-facing-agents'][':agent_id'].procedures[':procedure_id'].$delete(
      args,
      options,
    ),
  )
}

export async function postV1ReceptionCustomerFacingAgentsAgentIdTransferRules(
  args: InferRequestType<
    (typeof client.v1.reception)['customer-facing-agents'][':agent_id']['transfer-rules']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.reception['customer-facing-agents'][':agent_id']['transfer-rules'].$post(
      args,
      options,
    ),
  )
}

export async function putV1ReceptionCustomerFacingAgentsAgentIdTransferRulesRuleId(
  args: InferRequestType<
    (typeof client.v1.reception)['customer-facing-agents'][':agent_id']['transfer-rules'][':rule_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.reception['customer-facing-agents'][':agent_id']['transfer-rules'][':rule_id'].$put(
      args,
      options,
    ),
  )
}

export async function deleteV1ReceptionCustomerFacingAgentsAgentIdTransferRulesRuleId(
  args: InferRequestType<
    (typeof client.v1.reception)['customer-facing-agents'][':agent_id']['transfer-rules'][':rule_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.reception['customer-facing-agents'][':agent_id']['transfer-rules'][
      ':rule_id'
    ].$delete(args, options),
  )
}

export async function getV1ReceptionPhoneNumbersAssignments(
  args: InferRequestType<(typeof client.v1.reception)['phone-numbers']['assignments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reception['phone-numbers'].assignments.$get(args, options))
}

export async function postV1ReceptionPhoneNumbersAssignments(
  args: InferRequestType<(typeof client.v1.reception)['phone-numbers']['assignments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reception['phone-numbers'].assignments.$post(args, options))
}

export async function deleteV1ReceptionPhoneNumbersAssignmentsPhoneAssignmentId(
  args: InferRequestType<
    (typeof client.v1.reception)['phone-numbers']['assignments'][':phone_assignment_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.reception['phone-numbers'].assignments[':phone_assignment_id'].$delete(args, options),
  )
}

export async function patchV1ReceptionPhoneNumbersAssignmentsPhoneAssignmentId(
  args: InferRequestType<
    (typeof client.v1.reception)['phone-numbers']['assignments'][':phone_assignment_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.reception['phone-numbers'].assignments[':phone_assignment_id'].$patch(args, options),
  )
}

export async function getV1ReceptionHolidays(
  args: InferRequestType<typeof client.v1.reception.holidays.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reception.holidays.$get(args, options))
}

export async function postV1ReceptionHolidays(
  args: InferRequestType<typeof client.v1.reception.holidays.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reception.holidays.$post(args, options))
}

export async function getV1ReceptionHolidaysHolidayId(
  args: InferRequestType<(typeof client.v1.reception.holidays)[':holiday_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reception.holidays[':holiday_id'].$get(args, options))
}

export async function putV1ReceptionHolidaysHolidayId(
  args: InferRequestType<(typeof client.v1.reception.holidays)[':holiday_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reception.holidays[':holiday_id'].$put(args, options))
}

export async function deleteV1ReceptionHolidaysHolidayId(
  args: InferRequestType<(typeof client.v1.reception.holidays)[':holiday_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reception.holidays[':holiday_id'].$delete(args, options))
}

export async function getV1ReceptionLocations(
  args: InferRequestType<typeof client.v1.reception.locations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reception.locations.$get(args, options))
}

export async function postV1ReceptionLocations(
  args: InferRequestType<typeof client.v1.reception.locations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reception.locations.$post(args, options))
}

export async function getV1ReceptionLocationsLocationId(
  args: InferRequestType<(typeof client.v1.reception.locations)[':location_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reception.locations[':location_id'].$get(args, options))
}

export async function putV1ReceptionLocationsLocationId(
  args: InferRequestType<(typeof client.v1.reception.locations)[':location_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reception.locations[':location_id'].$put(args, options))
}

export async function deleteV1ReceptionLocationsLocationId(
  args: InferRequestType<(typeof client.v1.reception.locations)[':location_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reception.locations[':location_id'].$delete(args, options))
}

export async function getV1ReceptionAgentInfo(
  args: InferRequestType<(typeof client.v1.reception)['agent-info']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reception['agent-info'].$get(args, options))
}

export async function putV1ReceptionAgentInfo(
  args: InferRequestType<(typeof client.v1.reception)['agent-info']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reception['agent-info'].$put(args, options))
}

export async function getV1ReceptionKnowledgeSources(
  args: InferRequestType<(typeof client.v1.reception)['knowledge-sources']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reception['knowledge-sources'].$get(args, options))
}

export async function postV1ReceptionKnowledgeSources(
  args: InferRequestType<(typeof client.v1.reception)['knowledge-sources']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reception['knowledge-sources'].$post(args, options))
}

export async function getV1ReceptionKnowledgeSourcesSourceId(
  args: InferRequestType<(typeof client.v1.reception)['knowledge-sources'][':source_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.reception['knowledge-sources'][':source_id'].$get(args, options),
  )
}

export async function deleteV1ReceptionKnowledgeSourcesSourceId(
  args: InferRequestType<
    (typeof client.v1.reception)['knowledge-sources'][':source_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.reception['knowledge-sources'][':source_id'].$delete(args, options),
  )
}

export async function postV1ReceptionKnowledgeSourcesUrls(
  args: InferRequestType<(typeof client.v1.reception)['knowledge-sources']['urls']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reception['knowledge-sources'].urls.$post(args, options))
}

export async function getV1ReceptionResellerWorkspaces(
  args: InferRequestType<typeof client.v1.reception.reseller.workspaces.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reception.reseller.workspaces.$get(args, options))
}

export async function postV1ReceptionResellerWorkspaces(
  args: InferRequestType<typeof client.v1.reception.reseller.workspaces.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reception.reseller.workspaces.$post(args, options))
}

export async function postV1ReceptionResellerWorkspacesWorkspaceIdCompleteOnboarding(
  args: InferRequestType<
    (typeof client.v1.reception.reseller.workspaces)[':workspace_id']['complete-onboarding']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.reception.reseller.workspaces[':workspace_id']['complete-onboarding'].$post(
      args,
      options,
    ),
  )
}

export async function postV1ReceptionResellerWorkspacesWorkspaceIdSubscription(
  args: InferRequestType<
    (typeof client.v1.reception.reseller.workspaces)[':workspace_id']['subscription']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.reception.reseller.workspaces[':workspace_id'].subscription.$post(args, options),
  )
}

export async function deleteV1ReceptionResellerWorkspacesWorkspaceIdSubscription(
  args: InferRequestType<
    (typeof client.v1.reception.reseller.workspaces)[':workspace_id']['subscription']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.reception.reseller.workspaces[':workspace_id'].subscription.$delete(args, options),
  )
}

export async function patchV1ReceptionResellerWorkspacesWorkspaceIdSubscription(
  args: InferRequestType<
    (typeof client.v1.reception.reseller.workspaces)[':workspace_id']['subscription']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.reception.reseller.workspaces[':workspace_id'].subscription.$patch(args, options),
  )
}

export async function postV1ReceptionResellerWorkspacesWorkspaceIdSubscriptionRestore(
  args: InferRequestType<
    (typeof client.v1.reception.reseller.workspaces)[':workspace_id']['subscription']['restore']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.reception.reseller.workspaces[':workspace_id'].subscription.restore.$post(
      args,
      options,
    ),
  )
}

export async function postV1ReceptionResellerWorkspacesWorkspaceIdSubscriptionCancelDowngrade(
  args: InferRequestType<
    (typeof client.v1.reception.reseller.workspaces)[':workspace_id']['subscription']['cancel-downgrade']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.reception.reseller.workspaces[':workspace_id'].subscription['cancel-downgrade'].$post(
      args,
      options,
    ),
  )
}

export async function getV1ReceptionResellerTierLadder(
  args: InferRequestType<(typeof client.v1.reception.reseller)['tier-ladder']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reception.reseller['tier-ladder'].$get(args, options))
}

export async function getV1ReceptionResellerBillingInvoices(
  args: InferRequestType<typeof client.v1.reception.reseller.billing.invoices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reception.reseller.billing.invoices.$get(args, options))
}

export async function getV1ReceptionResellerBillingInvoicesInvoiceId(
  args: InferRequestType<
    (typeof client.v1.reception.reseller.billing.invoices)[':invoice_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.reception.reseller.billing.invoices[':invoice_id'].$get(args, options),
  )
}

export async function getV1ReceptionResellerBillingUpcoming(
  args: InferRequestType<typeof client.v1.reception.reseller.billing.upcoming.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reception.reseller.billing.upcoming.$get(args, options))
}

export async function getV1ReceptionTeamMembers(
  args: InferRequestType<typeof client.v1.reception.team.members.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reception.team.members.$get(args, options))
}

export async function getV1ReceptionTeamInvites(
  args: InferRequestType<typeof client.v1.reception.team.invites.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reception.team.invites.$get(args, options))
}

export async function postV1ReceptionTeamInvites(
  args: InferRequestType<typeof client.v1.reception.team.invites.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reception.team.invites.$post(args, options))
}

export async function deleteV1ReceptionTeamInvites(
  args: InferRequestType<typeof client.v1.reception.team.invites.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reception.team.invites.$delete(args, options))
}

export async function deleteV1ReceptionTeamMembersUserId(
  args: InferRequestType<(typeof client.v1.reception.team.members)[':user_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reception.team.members[':user_id'].$delete(args, options))
}

export async function patchV1ReceptionTeamMembersUserId(
  args: InferRequestType<(typeof client.v1.reception.team.members)[':user_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reception.team.members[':user_id'].$patch(args, options))
}

export async function getDocs(options?: ClientRequestOptions) {
  return await parseResponse(client.docs.$get(undefined, options))
}
