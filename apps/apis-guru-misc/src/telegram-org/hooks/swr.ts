import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAddStickerToSetKey() {
  return ['addStickerToSet'] as const
}

export function getAnswerCallbackQueryKey() {
  return ['answerCallbackQuery'] as const
}

export function getAnswerInlineQueryKey() {
  return ['answerInlineQuery'] as const
}

export function getAnswerPreCheckoutQueryKey() {
  return ['answerPreCheckoutQuery'] as const
}

export function getAnswerShippingQueryKey() {
  return ['answerShippingQuery'] as const
}

export function getCloseKey() {
  return ['close'] as const
}

export function getCopyMessageKey() {
  return ['copyMessage'] as const
}

export function getCreateNewStickerSetKey() {
  return ['createNewStickerSet'] as const
}

export function getDeleteChatPhotoKey() {
  return ['deleteChatPhoto'] as const
}

export function getDeleteChatStickerSetKey() {
  return ['deleteChatStickerSet'] as const
}

export function getDeleteMessageKey() {
  return ['deleteMessage'] as const
}

export function getDeleteStickerFromSetKey() {
  return ['deleteStickerFromSet'] as const
}

export function getDeleteWebhookKey() {
  return ['deleteWebhook'] as const
}

export function getEditMessageCaptionKey() {
  return ['editMessageCaption'] as const
}

export function getEditMessageLiveLocationKey() {
  return ['editMessageLiveLocation'] as const
}

export function getEditMessageMediaKey() {
  return ['editMessageMedia'] as const
}

export function getEditMessageReplyMarkupKey() {
  return ['editMessageReplyMarkup'] as const
}

export function getEditMessageTextKey() {
  return ['editMessageText'] as const
}

export function getExportChatInviteLinkKey() {
  return ['exportChatInviteLink'] as const
}

export function getForwardMessageKey() {
  return ['forwardMessage'] as const
}

export function getGetChatKey() {
  return ['getChat'] as const
}

export function getGetChatAdministratorsKey() {
  return ['getChatAdministrators'] as const
}

export function getGetChatMemberKey() {
  return ['getChatMember'] as const
}

export function getGetChatMembersCountKey() {
  return ['getChatMembersCount'] as const
}

export function getGetFileKey() {
  return ['getFile'] as const
}

export function getGetGameHighScoresKey() {
  return ['getGameHighScores'] as const
}

export function getGetMeKey() {
  return ['getMe'] as const
}

export function getGetMyCommandsKey() {
  return ['getMyCommands'] as const
}

export function getGetStickerSetKey() {
  return ['getStickerSet'] as const
}

export function getGetUpdatesKey() {
  return ['getUpdates'] as const
}

export function getGetUserProfilePhotosKey() {
  return ['getUserProfilePhotos'] as const
}

export function getGetWebhookInfoKey() {
  return ['getWebhookInfo'] as const
}

export function getKickChatMemberKey() {
  return ['kickChatMember'] as const
}

export function getLeaveChatKey() {
  return ['leaveChat'] as const
}

export function getLogOutKey() {
  return ['logOut'] as const
}

export function getPinChatMessageKey() {
  return ['pinChatMessage'] as const
}

export function getPromoteChatMemberKey() {
  return ['promoteChatMember'] as const
}

export function getRestrictChatMemberKey() {
  return ['restrictChatMember'] as const
}

export function getSendAnimationKey() {
  return ['sendAnimation'] as const
}

export function getSendAudioKey() {
  return ['sendAudio'] as const
}

export function getSendChatActionKey() {
  return ['sendChatAction'] as const
}

export function getSendContactKey() {
  return ['sendContact'] as const
}

export function getSendDiceKey() {
  return ['sendDice'] as const
}

export function getSendDocumentKey() {
  return ['sendDocument'] as const
}

export function getSendGameKey() {
  return ['sendGame'] as const
}

export function getSendInvoiceKey() {
  return ['sendInvoice'] as const
}

export function getSendLocationKey() {
  return ['sendLocation'] as const
}

export function getSendMediaGroupKey() {
  return ['sendMediaGroup'] as const
}

export function getSendMessageKey() {
  return ['sendMessage'] as const
}

export function getSendPhotoKey() {
  return ['sendPhoto'] as const
}

export function getSendPollKey() {
  return ['sendPoll'] as const
}

export function getSendStickerKey() {
  return ['sendSticker'] as const
}

export function getSendVenueKey() {
  return ['sendVenue'] as const
}

export function getSendVideoKey() {
  return ['sendVideo'] as const
}

export function getSendVideoNoteKey() {
  return ['sendVideoNote'] as const
}

export function getSendVoiceKey() {
  return ['sendVoice'] as const
}

export function getSetChatAdministratorCustomTitleKey() {
  return ['setChatAdministratorCustomTitle'] as const
}

export function getSetChatDescriptionKey() {
  return ['setChatDescription'] as const
}

export function getSetChatPermissionsKey() {
  return ['setChatPermissions'] as const
}

export function getSetChatPhotoKey() {
  return ['setChatPhoto'] as const
}

export function getSetChatStickerSetKey() {
  return ['setChatStickerSet'] as const
}

export function getSetChatTitleKey() {
  return ['setChatTitle'] as const
}

export function getSetGameScoreKey() {
  return ['setGameScore'] as const
}

export function getSetMyCommandsKey() {
  return ['setMyCommands'] as const
}

export function getSetPassportDataErrorsKey() {
  return ['setPassportDataErrors'] as const
}

export function getSetStickerPositionInSetKey() {
  return ['setStickerPositionInSet'] as const
}

export function getSetStickerSetThumbKey() {
  return ['setStickerSetThumb'] as const
}

export function getSetWebhookKey() {
  return ['setWebhook'] as const
}

export function getStopMessageLiveLocationKey() {
  return ['stopMessageLiveLocation'] as const
}

export function getStopPollKey() {
  return ['stopPoll'] as const
}

export function getUnbanChatMemberKey() {
  return ['unbanChatMember'] as const
}

export function getUnpinAllChatMessagesKey() {
  return ['unpinAllChatMessages'] as const
}

export function getUnpinChatMessageKey() {
  return ['unpinChatMessage'] as const
}

export function getUploadStickerFileKey() {
  return ['uploadStickerFile'] as const
}

export function getPostAddStickerToSetKey() {
  return ['addStickerToSet', '/addStickerToSet', 'POST'] as const
}

export function usePostAddStickerToSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addStickerToSet.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.addStickerToSet.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAddStickerToSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.addStickerToSet.$post> }) =>
        parseResponse(client.addStickerToSet.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAnswerCallbackQueryKey() {
  return ['answerCallbackQuery', '/answerCallbackQuery', 'POST'] as const
}

export function usePostAnswerCallbackQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.answerCallbackQuery.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.answerCallbackQuery.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnswerCallbackQueryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.answerCallbackQuery.$post> }) =>
        parseResponse(client.answerCallbackQuery.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAnswerInlineQueryKey() {
  return ['answerInlineQuery', '/answerInlineQuery', 'POST'] as const
}

export function usePostAnswerInlineQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.answerInlineQuery.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.answerInlineQuery.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnswerInlineQueryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.answerInlineQuery.$post> }) =>
        parseResponse(client.answerInlineQuery.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAnswerPreCheckoutQueryKey() {
  return ['answerPreCheckoutQuery', '/answerPreCheckoutQuery', 'POST'] as const
}

export function usePostAnswerPreCheckoutQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.answerPreCheckoutQuery.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.answerPreCheckoutQuery.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnswerPreCheckoutQueryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.answerPreCheckoutQuery.$post> },
      ) => parseResponse(client.answerPreCheckoutQuery.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAnswerShippingQueryKey() {
  return ['answerShippingQuery', '/answerShippingQuery', 'POST'] as const
}

export function usePostAnswerShippingQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.answerShippingQuery.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.answerShippingQuery.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnswerShippingQueryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.answerShippingQuery.$post> }) =>
        parseResponse(client.answerShippingQuery.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCloseKey() {
  return ['close', '/close', 'POST'] as const
}

export function usePostClose<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.close.$post>>>>>,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCloseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.close.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCopyMessageKey() {
  return ['copyMessage', '/copyMessage', 'POST'] as const
}

export function usePostCopyMessage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.copyMessage.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.copyMessage.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCopyMessageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.copyMessage.$post> }) =>
        parseResponse(client.copyMessage.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCreateNewStickerSetKey() {
  return ['createNewStickerSet', '/createNewStickerSet', 'POST'] as const
}

export function usePostCreateNewStickerSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createNewStickerSet.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.createNewStickerSet.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreateNewStickerSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.createNewStickerSet.$post> }) =>
        parseResponse(client.createNewStickerSet.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDeleteChatPhotoKey() {
  return ['deleteChatPhoto', '/deleteChatPhoto', 'POST'] as const
}

export function usePostDeleteChatPhoto<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deleteChatPhoto.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.deleteChatPhoto.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeleteChatPhotoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.deleteChatPhoto.$post> }) =>
        parseResponse(client.deleteChatPhoto.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDeleteChatStickerSetKey() {
  return ['deleteChatStickerSet', '/deleteChatStickerSet', 'POST'] as const
}

export function usePostDeleteChatStickerSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.deleteChatStickerSet.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.deleteChatStickerSet.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeleteChatStickerSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.deleteChatStickerSet.$post> },
      ) => parseResponse(client.deleteChatStickerSet.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDeleteMessageKey() {
  return ['deleteMessage', '/deleteMessage', 'POST'] as const
}

export function usePostDeleteMessage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deleteMessage.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.deleteMessage.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeleteMessageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.deleteMessage.$post> }) =>
        parseResponse(client.deleteMessage.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDeleteStickerFromSetKey() {
  return ['deleteStickerFromSet', '/deleteStickerFromSet', 'POST'] as const
}

export function usePostDeleteStickerFromSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.deleteStickerFromSet.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.deleteStickerFromSet.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeleteStickerFromSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.deleteStickerFromSet.$post> },
      ) => parseResponse(client.deleteStickerFromSet.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDeleteWebhookKey() {
  return ['deleteWebhook', '/deleteWebhook', 'POST'] as const
}

export function usePostDeleteWebhook<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deleteWebhook.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.deleteWebhook.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeleteWebhookKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.deleteWebhook.$post> }) =>
        parseResponse(client.deleteWebhook.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEditMessageCaptionKey() {
  return ['editMessageCaption', '/editMessageCaption', 'POST'] as const
}

export function usePostEditMessageCaption<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.editMessageCaption.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.editMessageCaption.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEditMessageCaptionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.editMessageCaption.$post> }) =>
        parseResponse(client.editMessageCaption.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEditMessageLiveLocationKey() {
  return ['editMessageLiveLocation', '/editMessageLiveLocation', 'POST'] as const
}

export function usePostEditMessageLiveLocation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.editMessageLiveLocation.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.editMessageLiveLocation.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEditMessageLiveLocationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.editMessageLiveLocation.$post> },
      ) => parseResponse(client.editMessageLiveLocation.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEditMessageMediaKey() {
  return ['editMessageMedia', '/editMessageMedia', 'POST'] as const
}

export function usePostEditMessageMedia<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.editMessageMedia.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.editMessageMedia.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEditMessageMediaKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.editMessageMedia.$post> }) =>
        parseResponse(client.editMessageMedia.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEditMessageReplyMarkupKey() {
  return ['editMessageReplyMarkup', '/editMessageReplyMarkup', 'POST'] as const
}

export function usePostEditMessageReplyMarkup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.editMessageReplyMarkup.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.editMessageReplyMarkup.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEditMessageReplyMarkupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.editMessageReplyMarkup.$post> },
      ) => parseResponse(client.editMessageReplyMarkup.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEditMessageTextKey() {
  return ['editMessageText', '/editMessageText', 'POST'] as const
}

export function usePostEditMessageText<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.editMessageText.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.editMessageText.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEditMessageTextKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.editMessageText.$post> }) =>
        parseResponse(client.editMessageText.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostExportChatInviteLinkKey() {
  return ['exportChatInviteLink', '/exportChatInviteLink', 'POST'] as const
}

export function usePostExportChatInviteLink<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.exportChatInviteLink.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.exportChatInviteLink.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostExportChatInviteLinkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.exportChatInviteLink.$post> },
      ) => parseResponse(client.exportChatInviteLink.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostForwardMessageKey() {
  return ['forwardMessage', '/forwardMessage', 'POST'] as const
}

export function usePostForwardMessage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.forwardMessage.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.forwardMessage.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostForwardMessageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.forwardMessage.$post> }) =>
        parseResponse(client.forwardMessage.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetChatKey() {
  return ['getChat', '/getChat', 'POST'] as const
}

export function usePostGetChat<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getChat.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.getChat.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetChatKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.getChat.$post> }) =>
        parseResponse(client.getChat.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetChatAdministratorsKey() {
  return ['getChatAdministrators', '/getChatAdministrators', 'POST'] as const
}

export function usePostGetChatAdministrators<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.getChatAdministrators.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.getChatAdministrators.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetChatAdministratorsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.getChatAdministrators.$post> },
      ) => parseResponse(client.getChatAdministrators.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetChatMemberKey() {
  return ['getChatMember', '/getChatMember', 'POST'] as const
}

export function usePostGetChatMember<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getChatMember.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.getChatMember.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetChatMemberKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.getChatMember.$post> }) =>
        parseResponse(client.getChatMember.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetChatMembersCountKey() {
  return ['getChatMembersCount', '/getChatMembersCount', 'POST'] as const
}

export function usePostGetChatMembersCount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getChatMembersCount.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.getChatMembersCount.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetChatMembersCountKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.getChatMembersCount.$post> }) =>
        parseResponse(client.getChatMembersCount.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetFileKey() {
  return ['getFile', '/getFile', 'POST'] as const
}

export function usePostGetFile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getFile.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.getFile.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetFileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.getFile.$post> }) =>
        parseResponse(client.getFile.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetGameHighScoresKey() {
  return ['getGameHighScores', '/getGameHighScores', 'POST'] as const
}

export function usePostGetGameHighScores<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getGameHighScores.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.getGameHighScores.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetGameHighScoresKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.getGameHighScores.$post> }) =>
        parseResponse(client.getGameHighScores.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetMeKey() {
  return ['getMe', '/getMe', 'POST'] as const
}

export function usePostGetMe<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getMe.$post>>>>>,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetMeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.getMe.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetMyCommandsKey() {
  return ['getMyCommands', '/getMyCommands', 'POST'] as const
}

export function usePostGetMyCommands<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getMyCommands.$post>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetMyCommandsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.getMyCommands.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetStickerSetKey() {
  return ['getStickerSet', '/getStickerSet', 'POST'] as const
}

export function usePostGetStickerSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getStickerSet.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.getStickerSet.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetStickerSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.getStickerSet.$post> }) =>
        parseResponse(client.getStickerSet.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetUpdatesKey() {
  return ['getUpdates', '/getUpdates', 'POST'] as const
}

export function usePostGetUpdates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getUpdates.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.getUpdates.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetUpdatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.getUpdates.$post> }) =>
        parseResponse(client.getUpdates.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetUserProfilePhotosKey() {
  return ['getUserProfilePhotos', '/getUserProfilePhotos', 'POST'] as const
}

export function usePostGetUserProfilePhotos<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.getUserProfilePhotos.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.getUserProfilePhotos.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetUserProfilePhotosKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.getUserProfilePhotos.$post> },
      ) => parseResponse(client.getUserProfilePhotos.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetWebhookInfoKey() {
  return ['getWebhookInfo', '/getWebhookInfo', 'POST'] as const
}

export function usePostGetWebhookInfo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getWebhookInfo.$post>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetWebhookInfoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.getWebhookInfo.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostKickChatMemberKey() {
  return ['kickChatMember', '/kickChatMember', 'POST'] as const
}

export function usePostKickChatMember<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kickChatMember.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.kickChatMember.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKickChatMemberKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.kickChatMember.$post> }) =>
        parseResponse(client.kickChatMember.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLeaveChatKey() {
  return ['leaveChat', '/leaveChat', 'POST'] as const
}

export function usePostLeaveChat<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.leaveChat.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.leaveChat.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLeaveChatKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.leaveChat.$post> }) =>
        parseResponse(client.leaveChat.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLogOutKey() {
  return ['logOut', '/logOut', 'POST'] as const
}

export function usePostLogOut<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logOut.$post>>>>>,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLogOutKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.logOut.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPinChatMessageKey() {
  return ['pinChatMessage', '/pinChatMessage', 'POST'] as const
}

export function usePostPinChatMessage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pinChatMessage.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.pinChatMessage.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPinChatMessageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.pinChatMessage.$post> }) =>
        parseResponse(client.pinChatMessage.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPromoteChatMemberKey() {
  return ['promoteChatMember', '/promoteChatMember', 'POST'] as const
}

export function usePostPromoteChatMember<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.promoteChatMember.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.promoteChatMember.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPromoteChatMemberKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.promoteChatMember.$post> }) =>
        parseResponse(client.promoteChatMember.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRestrictChatMemberKey() {
  return ['restrictChatMember', '/restrictChatMember', 'POST'] as const
}

export function usePostRestrictChatMember<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.restrictChatMember.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.restrictChatMember.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestrictChatMemberKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.restrictChatMember.$post> }) =>
        parseResponse(client.restrictChatMember.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSendAnimationKey() {
  return ['sendAnimation', '/sendAnimation', 'POST'] as const
}

export function usePostSendAnimation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sendAnimation.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.sendAnimation.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSendAnimationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sendAnimation.$post> }) =>
        parseResponse(client.sendAnimation.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSendAudioKey() {
  return ['sendAudio', '/sendAudio', 'POST'] as const
}

export function usePostSendAudio<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sendAudio.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.sendAudio.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSendAudioKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sendAudio.$post> }) =>
        parseResponse(client.sendAudio.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSendChatActionKey() {
  return ['sendChatAction', '/sendChatAction', 'POST'] as const
}

export function usePostSendChatAction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sendChatAction.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.sendChatAction.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSendChatActionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sendChatAction.$post> }) =>
        parseResponse(client.sendChatAction.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSendContactKey() {
  return ['sendContact', '/sendContact', 'POST'] as const
}

export function usePostSendContact<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sendContact.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.sendContact.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSendContactKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sendContact.$post> }) =>
        parseResponse(client.sendContact.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSendDiceKey() {
  return ['sendDice', '/sendDice', 'POST'] as const
}

export function usePostSendDice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sendDice.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.sendDice.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSendDiceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sendDice.$post> }) =>
        parseResponse(client.sendDice.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSendDocumentKey() {
  return ['sendDocument', '/sendDocument', 'POST'] as const
}

export function usePostSendDocument<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sendDocument.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.sendDocument.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSendDocumentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sendDocument.$post> }) =>
        parseResponse(client.sendDocument.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSendGameKey() {
  return ['sendGame', '/sendGame', 'POST'] as const
}

export function usePostSendGame<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sendGame.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.sendGame.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSendGameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sendGame.$post> }) =>
        parseResponse(client.sendGame.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSendInvoiceKey() {
  return ['sendInvoice', '/sendInvoice', 'POST'] as const
}

export function usePostSendInvoice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sendInvoice.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.sendInvoice.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSendInvoiceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sendInvoice.$post> }) =>
        parseResponse(client.sendInvoice.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSendLocationKey() {
  return ['sendLocation', '/sendLocation', 'POST'] as const
}

export function usePostSendLocation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sendLocation.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.sendLocation.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSendLocationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sendLocation.$post> }) =>
        parseResponse(client.sendLocation.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSendMediaGroupKey() {
  return ['sendMediaGroup', '/sendMediaGroup', 'POST'] as const
}

export function usePostSendMediaGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sendMediaGroup.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.sendMediaGroup.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSendMediaGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sendMediaGroup.$post> }) =>
        parseResponse(client.sendMediaGroup.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSendMessageKey() {
  return ['sendMessage', '/sendMessage', 'POST'] as const
}

export function usePostSendMessage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sendMessage.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.sendMessage.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSendMessageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sendMessage.$post> }) =>
        parseResponse(client.sendMessage.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSendPhotoKey() {
  return ['sendPhoto', '/sendPhoto', 'POST'] as const
}

export function usePostSendPhoto<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sendPhoto.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.sendPhoto.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSendPhotoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sendPhoto.$post> }) =>
        parseResponse(client.sendPhoto.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSendPollKey() {
  return ['sendPoll', '/sendPoll', 'POST'] as const
}

export function usePostSendPoll<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sendPoll.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.sendPoll.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSendPollKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sendPoll.$post> }) =>
        parseResponse(client.sendPoll.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSendStickerKey() {
  return ['sendSticker', '/sendSticker', 'POST'] as const
}

export function usePostSendSticker<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sendSticker.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.sendSticker.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSendStickerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sendSticker.$post> }) =>
        parseResponse(client.sendSticker.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSendVenueKey() {
  return ['sendVenue', '/sendVenue', 'POST'] as const
}

export function usePostSendVenue<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sendVenue.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.sendVenue.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSendVenueKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sendVenue.$post> }) =>
        parseResponse(client.sendVenue.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSendVideoKey() {
  return ['sendVideo', '/sendVideo', 'POST'] as const
}

export function usePostSendVideo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sendVideo.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.sendVideo.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSendVideoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sendVideo.$post> }) =>
        parseResponse(client.sendVideo.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSendVideoNoteKey() {
  return ['sendVideoNote', '/sendVideoNote', 'POST'] as const
}

export function usePostSendVideoNote<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sendVideoNote.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.sendVideoNote.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSendVideoNoteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sendVideoNote.$post> }) =>
        parseResponse(client.sendVideoNote.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSendVoiceKey() {
  return ['sendVoice', '/sendVoice', 'POST'] as const
}

export function usePostSendVoice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sendVoice.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.sendVoice.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSendVoiceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sendVoice.$post> }) =>
        parseResponse(client.sendVoice.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSetChatAdministratorCustomTitleKey() {
  return ['setChatAdministratorCustomTitle', '/setChatAdministratorCustomTitle', 'POST'] as const
}

export function usePostSetChatAdministratorCustomTitle<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.setChatAdministratorCustomTitle.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.setChatAdministratorCustomTitle.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSetChatAdministratorCustomTitleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.setChatAdministratorCustomTitle.$post> },
      ) => parseResponse(client.setChatAdministratorCustomTitle.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSetChatDescriptionKey() {
  return ['setChatDescription', '/setChatDescription', 'POST'] as const
}

export function usePostSetChatDescription<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setChatDescription.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.setChatDescription.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSetChatDescriptionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.setChatDescription.$post> }) =>
        parseResponse(client.setChatDescription.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSetChatPermissionsKey() {
  return ['setChatPermissions', '/setChatPermissions', 'POST'] as const
}

export function usePostSetChatPermissions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setChatPermissions.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.setChatPermissions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSetChatPermissionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.setChatPermissions.$post> }) =>
        parseResponse(client.setChatPermissions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSetChatPhotoKey() {
  return ['setChatPhoto', '/setChatPhoto', 'POST'] as const
}

export function usePostSetChatPhoto<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setChatPhoto.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.setChatPhoto.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSetChatPhotoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.setChatPhoto.$post> }) =>
        parseResponse(client.setChatPhoto.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSetChatStickerSetKey() {
  return ['setChatStickerSet', '/setChatStickerSet', 'POST'] as const
}

export function usePostSetChatStickerSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setChatStickerSet.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.setChatStickerSet.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSetChatStickerSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.setChatStickerSet.$post> }) =>
        parseResponse(client.setChatStickerSet.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSetChatTitleKey() {
  return ['setChatTitle', '/setChatTitle', 'POST'] as const
}

export function usePostSetChatTitle<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setChatTitle.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.setChatTitle.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSetChatTitleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.setChatTitle.$post> }) =>
        parseResponse(client.setChatTitle.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSetGameScoreKey() {
  return ['setGameScore', '/setGameScore', 'POST'] as const
}

export function usePostSetGameScore<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setGameScore.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.setGameScore.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSetGameScoreKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.setGameScore.$post> }) =>
        parseResponse(client.setGameScore.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSetMyCommandsKey() {
  return ['setMyCommands', '/setMyCommands', 'POST'] as const
}

export function usePostSetMyCommands<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setMyCommands.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.setMyCommands.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSetMyCommandsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.setMyCommands.$post> }) =>
        parseResponse(client.setMyCommands.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSetPassportDataErrorsKey() {
  return ['setPassportDataErrors', '/setPassportDataErrors', 'POST'] as const
}

export function usePostSetPassportDataErrors<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.setPassportDataErrors.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.setPassportDataErrors.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSetPassportDataErrorsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.setPassportDataErrors.$post> },
      ) => parseResponse(client.setPassportDataErrors.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSetStickerPositionInSetKey() {
  return ['setStickerPositionInSet', '/setStickerPositionInSet', 'POST'] as const
}

export function usePostSetStickerPositionInSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.setStickerPositionInSet.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.setStickerPositionInSet.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSetStickerPositionInSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.setStickerPositionInSet.$post> },
      ) => parseResponse(client.setStickerPositionInSet.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSetStickerSetThumbKey() {
  return ['setStickerSetThumb', '/setStickerSetThumb', 'POST'] as const
}

export function usePostSetStickerSetThumb<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setStickerSetThumb.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.setStickerSetThumb.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSetStickerSetThumbKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.setStickerSetThumb.$post> }) =>
        parseResponse(client.setStickerSetThumb.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSetWebhookKey() {
  return ['setWebhook', '/setWebhook', 'POST'] as const
}

export function usePostSetWebhook<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setWebhook.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.setWebhook.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSetWebhookKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.setWebhook.$post> }) =>
        parseResponse(client.setWebhook.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostStopMessageLiveLocationKey() {
  return ['stopMessageLiveLocation', '/stopMessageLiveLocation', 'POST'] as const
}

export function usePostStopMessageLiveLocation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.stopMessageLiveLocation.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.stopMessageLiveLocation.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStopMessageLiveLocationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.stopMessageLiveLocation.$post> },
      ) => parseResponse(client.stopMessageLiveLocation.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostStopPollKey() {
  return ['stopPoll', '/stopPoll', 'POST'] as const
}

export function usePostStopPoll<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stopPoll.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.stopPoll.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStopPollKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.stopPoll.$post> }) =>
        parseResponse(client.stopPoll.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUnbanChatMemberKey() {
  return ['unbanChatMember', '/unbanChatMember', 'POST'] as const
}

export function usePostUnbanChatMember<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.unbanChatMember.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.unbanChatMember.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUnbanChatMemberKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.unbanChatMember.$post> }) =>
        parseResponse(client.unbanChatMember.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUnpinAllChatMessagesKey() {
  return ['unpinAllChatMessages', '/unpinAllChatMessages', 'POST'] as const
}

export function usePostUnpinAllChatMessages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.unpinAllChatMessages.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.unpinAllChatMessages.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUnpinAllChatMessagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.unpinAllChatMessages.$post> },
      ) => parseResponse(client.unpinAllChatMessages.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUnpinChatMessageKey() {
  return ['unpinChatMessage', '/unpinChatMessage', 'POST'] as const
}

export function usePostUnpinChatMessage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.unpinChatMessage.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.unpinChatMessage.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUnpinChatMessageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.unpinChatMessage.$post> }) =>
        parseResponse(client.unpinChatMessage.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUploadStickerFileKey() {
  return ['uploadStickerFile', '/uploadStickerFile', 'POST'] as const
}

export function usePostUploadStickerFile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uploadStickerFile.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.uploadStickerFile.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUploadStickerFileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.uploadStickerFile.$post> }) =>
        parseResponse(client.uploadStickerFile.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
