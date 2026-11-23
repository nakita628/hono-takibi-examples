import { useMutation, mutationOptions } from '@tanstack/vue-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/vue-query'
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

export function getPostAddStickerToSetMutationKey() {
  return ['addStickerToSet', '/addStickerToSet', 'POST'] as const
}

export function getPostAddStickerToSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addStickerToSet.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.addStickerToSet.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAddStickerToSetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.addStickerToSet.$post>) {
      return parseResponse(client.addStickerToSet.$post(args, options))
    },
  })
}

export function usePostAddStickerToSet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.addStickerToSet.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.addStickerToSet.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAddStickerToSetMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAnswerCallbackQueryMutationKey() {
  return ['answerCallbackQuery', '/answerCallbackQuery', 'POST'] as const
}

export function getPostAnswerCallbackQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.answerCallbackQuery.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.answerCallbackQuery.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAnswerCallbackQueryMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.answerCallbackQuery.$post>) {
      return parseResponse(client.answerCallbackQuery.$post(args, options))
    },
  })
}

export function usePostAnswerCallbackQuery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.answerCallbackQuery.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.answerCallbackQuery.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAnswerCallbackQueryMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAnswerInlineQueryMutationKey() {
  return ['answerInlineQuery', '/answerInlineQuery', 'POST'] as const
}

export function getPostAnswerInlineQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.answerInlineQuery.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.answerInlineQuery.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAnswerInlineQueryMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.answerInlineQuery.$post>) {
      return parseResponse(client.answerInlineQuery.$post(args, options))
    },
  })
}

export function usePostAnswerInlineQuery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.answerInlineQuery.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.answerInlineQuery.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAnswerInlineQueryMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAnswerPreCheckoutQueryMutationKey() {
  return ['answerPreCheckoutQuery', '/answerPreCheckoutQuery', 'POST'] as const
}

export function getPostAnswerPreCheckoutQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.answerPreCheckoutQuery.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.answerPreCheckoutQuery.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAnswerPreCheckoutQueryMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.answerPreCheckoutQuery.$post>) {
      return parseResponse(client.answerPreCheckoutQuery.$post(args, options))
    },
  })
}

export function usePostAnswerPreCheckoutQuery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.answerPreCheckoutQuery.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.answerPreCheckoutQuery.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAnswerPreCheckoutQueryMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAnswerShippingQueryMutationKey() {
  return ['answerShippingQuery', '/answerShippingQuery', 'POST'] as const
}

export function getPostAnswerShippingQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.answerShippingQuery.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.answerShippingQuery.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAnswerShippingQueryMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.answerShippingQuery.$post>) {
      return parseResponse(client.answerShippingQuery.$post(args, options))
    },
  })
}

export function usePostAnswerShippingQuery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.answerShippingQuery.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.answerShippingQuery.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAnswerShippingQueryMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostCloseMutationKey() {
  return ['close', '/close', 'POST'] as const
}

export function getPostCloseMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.close.$post>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostCloseMutationKey(),
    async mutationFn() {
      return parseResponse(client.close.$post(undefined, options))
    },
  })
}

export function usePostClose<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.close.$post>>>>>,
          TError,
          void,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCloseMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostCopyMessageMutationKey() {
  return ['copyMessage', '/copyMessage', 'POST'] as const
}

export function getPostCopyMessageMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.copyMessage.$post>>>>>,
    TError,
    InferRequestType<typeof client.copyMessage.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCopyMessageMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.copyMessage.$post>) {
      return parseResponse(client.copyMessage.$post(args, options))
    },
  })
}

export function usePostCopyMessage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.copyMessage.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.copyMessage.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCopyMessageMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostCreateNewStickerSetMutationKey() {
  return ['createNewStickerSet', '/createNewStickerSet', 'POST'] as const
}

export function getPostCreateNewStickerSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createNewStickerSet.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.createNewStickerSet.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreateNewStickerSetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.createNewStickerSet.$post>) {
      return parseResponse(client.createNewStickerSet.$post(args, options))
    },
  })
}

export function usePostCreateNewStickerSet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.createNewStickerSet.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.createNewStickerSet.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCreateNewStickerSetMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostDeleteChatPhotoMutationKey() {
  return ['deleteChatPhoto', '/deleteChatPhoto', 'POST'] as const
}

export function getPostDeleteChatPhotoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deleteChatPhoto.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.deleteChatPhoto.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDeleteChatPhotoMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.deleteChatPhoto.$post>) {
      return parseResponse(client.deleteChatPhoto.$post(args, options))
    },
  })
}

export function usePostDeleteChatPhoto<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.deleteChatPhoto.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.deleteChatPhoto.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDeleteChatPhotoMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostDeleteChatStickerSetMutationKey() {
  return ['deleteChatStickerSet', '/deleteChatStickerSet', 'POST'] as const
}

export function getPostDeleteChatStickerSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.deleteChatStickerSet.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.deleteChatStickerSet.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDeleteChatStickerSetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.deleteChatStickerSet.$post>) {
      return parseResponse(client.deleteChatStickerSet.$post(args, options))
    },
  })
}

export function usePostDeleteChatStickerSet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.deleteChatStickerSet.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.deleteChatStickerSet.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDeleteChatStickerSetMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostDeleteMessageMutationKey() {
  return ['deleteMessage', '/deleteMessage', 'POST'] as const
}

export function getPostDeleteMessageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deleteMessage.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.deleteMessage.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDeleteMessageMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.deleteMessage.$post>) {
      return parseResponse(client.deleteMessage.$post(args, options))
    },
  })
}

export function usePostDeleteMessage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deleteMessage.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.deleteMessage.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDeleteMessageMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostDeleteStickerFromSetMutationKey() {
  return ['deleteStickerFromSet', '/deleteStickerFromSet', 'POST'] as const
}

export function getPostDeleteStickerFromSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.deleteStickerFromSet.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.deleteStickerFromSet.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDeleteStickerFromSetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.deleteStickerFromSet.$post>) {
      return parseResponse(client.deleteStickerFromSet.$post(args, options))
    },
  })
}

export function usePostDeleteStickerFromSet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.deleteStickerFromSet.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.deleteStickerFromSet.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDeleteStickerFromSetMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostDeleteWebhookMutationKey() {
  return ['deleteWebhook', '/deleteWebhook', 'POST'] as const
}

export function getPostDeleteWebhookMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deleteWebhook.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.deleteWebhook.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDeleteWebhookMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.deleteWebhook.$post>) {
      return parseResponse(client.deleteWebhook.$post(args, options))
    },
  })
}

export function usePostDeleteWebhook<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deleteWebhook.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.deleteWebhook.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDeleteWebhookMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostEditMessageCaptionMutationKey() {
  return ['editMessageCaption', '/editMessageCaption', 'POST'] as const
}

export function getPostEditMessageCaptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.editMessageCaption.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.editMessageCaption.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEditMessageCaptionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.editMessageCaption.$post>) {
      return parseResponse(client.editMessageCaption.$post(args, options))
    },
  })
}

export function usePostEditMessageCaption<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.editMessageCaption.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.editMessageCaption.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEditMessageCaptionMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostEditMessageLiveLocationMutationKey() {
  return ['editMessageLiveLocation', '/editMessageLiveLocation', 'POST'] as const
}

export function getPostEditMessageLiveLocationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.editMessageLiveLocation.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.editMessageLiveLocation.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEditMessageLiveLocationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.editMessageLiveLocation.$post>) {
      return parseResponse(client.editMessageLiveLocation.$post(args, options))
    },
  })
}

export function usePostEditMessageLiveLocation<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.editMessageLiveLocation.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.editMessageLiveLocation.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEditMessageLiveLocationMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostEditMessageMediaMutationKey() {
  return ['editMessageMedia', '/editMessageMedia', 'POST'] as const
}

export function getPostEditMessageMediaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.editMessageMedia.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.editMessageMedia.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEditMessageMediaMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.editMessageMedia.$post>) {
      return parseResponse(client.editMessageMedia.$post(args, options))
    },
  })
}

export function usePostEditMessageMedia<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.editMessageMedia.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.editMessageMedia.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEditMessageMediaMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostEditMessageReplyMarkupMutationKey() {
  return ['editMessageReplyMarkup', '/editMessageReplyMarkup', 'POST'] as const
}

export function getPostEditMessageReplyMarkupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.editMessageReplyMarkup.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.editMessageReplyMarkup.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEditMessageReplyMarkupMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.editMessageReplyMarkup.$post>) {
      return parseResponse(client.editMessageReplyMarkup.$post(args, options))
    },
  })
}

export function usePostEditMessageReplyMarkup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.editMessageReplyMarkup.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.editMessageReplyMarkup.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEditMessageReplyMarkupMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostEditMessageTextMutationKey() {
  return ['editMessageText', '/editMessageText', 'POST'] as const
}

export function getPostEditMessageTextMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.editMessageText.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.editMessageText.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEditMessageTextMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.editMessageText.$post>) {
      return parseResponse(client.editMessageText.$post(args, options))
    },
  })
}

export function usePostEditMessageText<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.editMessageText.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.editMessageText.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEditMessageTextMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostExportChatInviteLinkMutationKey() {
  return ['exportChatInviteLink', '/exportChatInviteLink', 'POST'] as const
}

export function getPostExportChatInviteLinkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.exportChatInviteLink.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.exportChatInviteLink.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostExportChatInviteLinkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.exportChatInviteLink.$post>) {
      return parseResponse(client.exportChatInviteLink.$post(args, options))
    },
  })
}

export function usePostExportChatInviteLink<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.exportChatInviteLink.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.exportChatInviteLink.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostExportChatInviteLinkMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostForwardMessageMutationKey() {
  return ['forwardMessage', '/forwardMessage', 'POST'] as const
}

export function getPostForwardMessageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.forwardMessage.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.forwardMessage.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostForwardMessageMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.forwardMessage.$post>) {
      return parseResponse(client.forwardMessage.$post(args, options))
    },
  })
}

export function usePostForwardMessage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.forwardMessage.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.forwardMessage.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostForwardMessageMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostGetChatMutationKey() {
  return ['getChat', '/getChat', 'POST'] as const
}

export function getPostGetChatMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getChat.$post>>>>>,
    TError,
    InferRequestType<typeof client.getChat.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetChatMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.getChat.$post>) {
      return parseResponse(client.getChat.$post(args, options))
    },
  })
}

export function usePostGetChat<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getChat.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.getChat.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGetChatMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostGetChatAdministratorsMutationKey() {
  return ['getChatAdministrators', '/getChatAdministrators', 'POST'] as const
}

export function getPostGetChatAdministratorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.getChatAdministrators.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.getChatAdministrators.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetChatAdministratorsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.getChatAdministrators.$post>) {
      return parseResponse(client.getChatAdministrators.$post(args, options))
    },
  })
}

export function usePostGetChatAdministrators<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.getChatAdministrators.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.getChatAdministrators.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGetChatAdministratorsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostGetChatMemberMutationKey() {
  return ['getChatMember', '/getChatMember', 'POST'] as const
}

export function getPostGetChatMemberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getChatMember.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.getChatMember.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetChatMemberMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.getChatMember.$post>) {
      return parseResponse(client.getChatMember.$post(args, options))
    },
  })
}

export function usePostGetChatMember<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getChatMember.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.getChatMember.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGetChatMemberMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostGetChatMembersCountMutationKey() {
  return ['getChatMembersCount', '/getChatMembersCount', 'POST'] as const
}

export function getPostGetChatMembersCountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getChatMembersCount.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.getChatMembersCount.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetChatMembersCountMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.getChatMembersCount.$post>) {
      return parseResponse(client.getChatMembersCount.$post(args, options))
    },
  })
}

export function usePostGetChatMembersCount<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.getChatMembersCount.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.getChatMembersCount.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGetChatMembersCountMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostGetFileMutationKey() {
  return ['getFile', '/getFile', 'POST'] as const
}

export function getPostGetFileMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getFile.$post>>>>>,
    TError,
    InferRequestType<typeof client.getFile.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetFileMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.getFile.$post>) {
      return parseResponse(client.getFile.$post(args, options))
    },
  })
}

export function usePostGetFile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getFile.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.getFile.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGetFileMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostGetGameHighScoresMutationKey() {
  return ['getGameHighScores', '/getGameHighScores', 'POST'] as const
}

export function getPostGetGameHighScoresMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getGameHighScores.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.getGameHighScores.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetGameHighScoresMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.getGameHighScores.$post>) {
      return parseResponse(client.getGameHighScores.$post(args, options))
    },
  })
}

export function usePostGetGameHighScores<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.getGameHighScores.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.getGameHighScores.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGetGameHighScoresMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostGetMeMutationKey() {
  return ['getMe', '/getMe', 'POST'] as const
}

export function getPostGetMeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getMe.$post>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostGetMeMutationKey(),
    async mutationFn() {
      return parseResponse(client.getMe.$post(undefined, options))
    },
  })
}

export function usePostGetMe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getMe.$post>>>>>,
          TError,
          void,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGetMeMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostGetMyCommandsMutationKey() {
  return ['getMyCommands', '/getMyCommands', 'POST'] as const
}

export function getPostGetMyCommandsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getMyCommands.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostGetMyCommandsMutationKey(),
    async mutationFn() {
      return parseResponse(client.getMyCommands.$post(undefined, options))
    },
  })
}

export function usePostGetMyCommands<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getMyCommands.$post>>>>
          >,
          TError,
          void,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGetMyCommandsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostGetStickerSetMutationKey() {
  return ['getStickerSet', '/getStickerSet', 'POST'] as const
}

export function getPostGetStickerSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getStickerSet.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.getStickerSet.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetStickerSetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.getStickerSet.$post>) {
      return parseResponse(client.getStickerSet.$post(args, options))
    },
  })
}

export function usePostGetStickerSet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getStickerSet.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.getStickerSet.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGetStickerSetMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostGetUpdatesMutationKey() {
  return ['getUpdates', '/getUpdates', 'POST'] as const
}

export function getPostGetUpdatesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getUpdates.$post>>>>>,
    TError,
    InferRequestType<typeof client.getUpdates.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetUpdatesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.getUpdates.$post>) {
      return parseResponse(client.getUpdates.$post(args, options))
    },
  })
}

export function usePostGetUpdates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getUpdates.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.getUpdates.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGetUpdatesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostGetUserProfilePhotosMutationKey() {
  return ['getUserProfilePhotos', '/getUserProfilePhotos', 'POST'] as const
}

export function getPostGetUserProfilePhotosMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.getUserProfilePhotos.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.getUserProfilePhotos.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetUserProfilePhotosMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.getUserProfilePhotos.$post>) {
      return parseResponse(client.getUserProfilePhotos.$post(args, options))
    },
  })
}

export function usePostGetUserProfilePhotos<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.getUserProfilePhotos.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.getUserProfilePhotos.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGetUserProfilePhotosMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostGetWebhookInfoMutationKey() {
  return ['getWebhookInfo', '/getWebhookInfo', 'POST'] as const
}

export function getPostGetWebhookInfoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getWebhookInfo.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostGetWebhookInfoMutationKey(),
    async mutationFn() {
      return parseResponse(client.getWebhookInfo.$post(undefined, options))
    },
  })
}

export function usePostGetWebhookInfo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.getWebhookInfo.$post>>>
            >
          >,
          TError,
          void,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGetWebhookInfoMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostKickChatMemberMutationKey() {
  return ['kickChatMember', '/kickChatMember', 'POST'] as const
}

export function getPostKickChatMemberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kickChatMember.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.kickChatMember.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostKickChatMemberMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.kickChatMember.$post>) {
      return parseResponse(client.kickChatMember.$post(args, options))
    },
  })
}

export function usePostKickChatMember<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.kickChatMember.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.kickChatMember.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostKickChatMemberMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostLeaveChatMutationKey() {
  return ['leaveChat', '/leaveChat', 'POST'] as const
}

export function getPostLeaveChatMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.leaveChat.$post>>>>>,
    TError,
    InferRequestType<typeof client.leaveChat.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLeaveChatMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.leaveChat.$post>) {
      return parseResponse(client.leaveChat.$post(args, options))
    },
  })
}

export function usePostLeaveChat<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.leaveChat.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.leaveChat.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLeaveChatMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostLogOutMutationKey() {
  return ['logOut', '/logOut', 'POST'] as const
}

export function getPostLogOutMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logOut.$post>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostLogOutMutationKey(),
    async mutationFn() {
      return parseResponse(client.logOut.$post(undefined, options))
    },
  })
}

export function usePostLogOut<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logOut.$post>>>>
          >,
          TError,
          void,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLogOutMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostPinChatMessageMutationKey() {
  return ['pinChatMessage', '/pinChatMessage', 'POST'] as const
}

export function getPostPinChatMessageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pinChatMessage.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.pinChatMessage.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPinChatMessageMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.pinChatMessage.$post>) {
      return parseResponse(client.pinChatMessage.$post(args, options))
    },
  })
}

export function usePostPinChatMessage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.pinChatMessage.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.pinChatMessage.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPinChatMessageMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostPromoteChatMemberMutationKey() {
  return ['promoteChatMember', '/promoteChatMember', 'POST'] as const
}

export function getPostPromoteChatMemberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.promoteChatMember.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.promoteChatMember.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPromoteChatMemberMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.promoteChatMember.$post>) {
      return parseResponse(client.promoteChatMember.$post(args, options))
    },
  })
}

export function usePostPromoteChatMember<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.promoteChatMember.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.promoteChatMember.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPromoteChatMemberMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostRestrictChatMemberMutationKey() {
  return ['restrictChatMember', '/restrictChatMember', 'POST'] as const
}

export function getPostRestrictChatMemberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.restrictChatMember.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.restrictChatMember.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRestrictChatMemberMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.restrictChatMember.$post>) {
      return parseResponse(client.restrictChatMember.$post(args, options))
    },
  })
}

export function usePostRestrictChatMember<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.restrictChatMember.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.restrictChatMember.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRestrictChatMemberMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSendAnimationMutationKey() {
  return ['sendAnimation', '/sendAnimation', 'POST'] as const
}

export function getPostSendAnimationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sendAnimation.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.sendAnimation.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSendAnimationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sendAnimation.$post>) {
      return parseResponse(client.sendAnimation.$post(args, options))
    },
  })
}

export function usePostSendAnimation<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sendAnimation.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.sendAnimation.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSendAnimationMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSendAudioMutationKey() {
  return ['sendAudio', '/sendAudio', 'POST'] as const
}

export function getPostSendAudioMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sendAudio.$post>>>>>,
    TError,
    InferRequestType<typeof client.sendAudio.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSendAudioMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sendAudio.$post>) {
      return parseResponse(client.sendAudio.$post(args, options))
    },
  })
}

export function usePostSendAudio<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sendAudio.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.sendAudio.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSendAudioMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSendChatActionMutationKey() {
  return ['sendChatAction', '/sendChatAction', 'POST'] as const
}

export function getPostSendChatActionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sendChatAction.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.sendChatAction.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSendChatActionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sendChatAction.$post>) {
      return parseResponse(client.sendChatAction.$post(args, options))
    },
  })
}

export function usePostSendChatAction<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sendChatAction.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.sendChatAction.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSendChatActionMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSendContactMutationKey() {
  return ['sendContact', '/sendContact', 'POST'] as const
}

export function getPostSendContactMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sendContact.$post>>>>>,
    TError,
    InferRequestType<typeof client.sendContact.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSendContactMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sendContact.$post>) {
      return parseResponse(client.sendContact.$post(args, options))
    },
  })
}

export function usePostSendContact<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sendContact.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.sendContact.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSendContactMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSendDiceMutationKey() {
  return ['sendDice', '/sendDice', 'POST'] as const
}

export function getPostSendDiceMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sendDice.$post>>>>>,
    TError,
    InferRequestType<typeof client.sendDice.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSendDiceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sendDice.$post>) {
      return parseResponse(client.sendDice.$post(args, options))
    },
  })
}

export function usePostSendDice<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sendDice.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.sendDice.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSendDiceMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSendDocumentMutationKey() {
  return ['sendDocument', '/sendDocument', 'POST'] as const
}

export function getPostSendDocumentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sendDocument.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.sendDocument.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSendDocumentMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sendDocument.$post>) {
      return parseResponse(client.sendDocument.$post(args, options))
    },
  })
}

export function usePostSendDocument<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sendDocument.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.sendDocument.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSendDocumentMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSendGameMutationKey() {
  return ['sendGame', '/sendGame', 'POST'] as const
}

export function getPostSendGameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sendGame.$post>>>>>,
    TError,
    InferRequestType<typeof client.sendGame.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSendGameMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sendGame.$post>) {
      return parseResponse(client.sendGame.$post(args, options))
    },
  })
}

export function usePostSendGame<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sendGame.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.sendGame.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSendGameMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSendInvoiceMutationKey() {
  return ['sendInvoice', '/sendInvoice', 'POST'] as const
}

export function getPostSendInvoiceMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sendInvoice.$post>>>>>,
    TError,
    InferRequestType<typeof client.sendInvoice.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSendInvoiceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sendInvoice.$post>) {
      return parseResponse(client.sendInvoice.$post(args, options))
    },
  })
}

export function usePostSendInvoice<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sendInvoice.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.sendInvoice.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSendInvoiceMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSendLocationMutationKey() {
  return ['sendLocation', '/sendLocation', 'POST'] as const
}

export function getPostSendLocationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sendLocation.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.sendLocation.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSendLocationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sendLocation.$post>) {
      return parseResponse(client.sendLocation.$post(args, options))
    },
  })
}

export function usePostSendLocation<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sendLocation.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.sendLocation.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSendLocationMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSendMediaGroupMutationKey() {
  return ['sendMediaGroup', '/sendMediaGroup', 'POST'] as const
}

export function getPostSendMediaGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sendMediaGroup.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.sendMediaGroup.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSendMediaGroupMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sendMediaGroup.$post>) {
      return parseResponse(client.sendMediaGroup.$post(args, options))
    },
  })
}

export function usePostSendMediaGroup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sendMediaGroup.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.sendMediaGroup.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSendMediaGroupMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSendMessageMutationKey() {
  return ['sendMessage', '/sendMessage', 'POST'] as const
}

export function getPostSendMessageMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sendMessage.$post>>>>>,
    TError,
    InferRequestType<typeof client.sendMessage.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSendMessageMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sendMessage.$post>) {
      return parseResponse(client.sendMessage.$post(args, options))
    },
  })
}

export function usePostSendMessage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sendMessage.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.sendMessage.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSendMessageMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSendPhotoMutationKey() {
  return ['sendPhoto', '/sendPhoto', 'POST'] as const
}

export function getPostSendPhotoMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sendPhoto.$post>>>>>,
    TError,
    InferRequestType<typeof client.sendPhoto.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSendPhotoMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sendPhoto.$post>) {
      return parseResponse(client.sendPhoto.$post(args, options))
    },
  })
}

export function usePostSendPhoto<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sendPhoto.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.sendPhoto.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSendPhotoMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSendPollMutationKey() {
  return ['sendPoll', '/sendPoll', 'POST'] as const
}

export function getPostSendPollMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sendPoll.$post>>>>>,
    TError,
    InferRequestType<typeof client.sendPoll.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSendPollMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sendPoll.$post>) {
      return parseResponse(client.sendPoll.$post(args, options))
    },
  })
}

export function usePostSendPoll<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sendPoll.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.sendPoll.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSendPollMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSendStickerMutationKey() {
  return ['sendSticker', '/sendSticker', 'POST'] as const
}

export function getPostSendStickerMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sendSticker.$post>>>>>,
    TError,
    InferRequestType<typeof client.sendSticker.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSendStickerMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sendSticker.$post>) {
      return parseResponse(client.sendSticker.$post(args, options))
    },
  })
}

export function usePostSendSticker<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sendSticker.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.sendSticker.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSendStickerMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSendVenueMutationKey() {
  return ['sendVenue', '/sendVenue', 'POST'] as const
}

export function getPostSendVenueMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sendVenue.$post>>>>>,
    TError,
    InferRequestType<typeof client.sendVenue.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSendVenueMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sendVenue.$post>) {
      return parseResponse(client.sendVenue.$post(args, options))
    },
  })
}

export function usePostSendVenue<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sendVenue.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.sendVenue.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSendVenueMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSendVideoMutationKey() {
  return ['sendVideo', '/sendVideo', 'POST'] as const
}

export function getPostSendVideoMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sendVideo.$post>>>>>,
    TError,
    InferRequestType<typeof client.sendVideo.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSendVideoMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sendVideo.$post>) {
      return parseResponse(client.sendVideo.$post(args, options))
    },
  })
}

export function usePostSendVideo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sendVideo.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.sendVideo.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSendVideoMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSendVideoNoteMutationKey() {
  return ['sendVideoNote', '/sendVideoNote', 'POST'] as const
}

export function getPostSendVideoNoteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sendVideoNote.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.sendVideoNote.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSendVideoNoteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sendVideoNote.$post>) {
      return parseResponse(client.sendVideoNote.$post(args, options))
    },
  })
}

export function usePostSendVideoNote<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sendVideoNote.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.sendVideoNote.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSendVideoNoteMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSendVoiceMutationKey() {
  return ['sendVoice', '/sendVoice', 'POST'] as const
}

export function getPostSendVoiceMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sendVoice.$post>>>>>,
    TError,
    InferRequestType<typeof client.sendVoice.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSendVoiceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sendVoice.$post>) {
      return parseResponse(client.sendVoice.$post(args, options))
    },
  })
}

export function usePostSendVoice<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sendVoice.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.sendVoice.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSendVoiceMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSetChatAdministratorCustomTitleMutationKey() {
  return ['setChatAdministratorCustomTitle', '/setChatAdministratorCustomTitle', 'POST'] as const
}

export function getPostSetChatAdministratorCustomTitleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.setChatAdministratorCustomTitle.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.setChatAdministratorCustomTitle.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSetChatAdministratorCustomTitleMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.setChatAdministratorCustomTitle.$post>) {
      return parseResponse(client.setChatAdministratorCustomTitle.$post(args, options))
    },
  })
}

export function usePostSetChatAdministratorCustomTitle<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.setChatAdministratorCustomTitle.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.setChatAdministratorCustomTitle.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSetChatAdministratorCustomTitleMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSetChatDescriptionMutationKey() {
  return ['setChatDescription', '/setChatDescription', 'POST'] as const
}

export function getPostSetChatDescriptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setChatDescription.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.setChatDescription.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSetChatDescriptionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.setChatDescription.$post>) {
      return parseResponse(client.setChatDescription.$post(args, options))
    },
  })
}

export function usePostSetChatDescription<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.setChatDescription.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.setChatDescription.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSetChatDescriptionMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSetChatPermissionsMutationKey() {
  return ['setChatPermissions', '/setChatPermissions', 'POST'] as const
}

export function getPostSetChatPermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setChatPermissions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.setChatPermissions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSetChatPermissionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.setChatPermissions.$post>) {
      return parseResponse(client.setChatPermissions.$post(args, options))
    },
  })
}

export function usePostSetChatPermissions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.setChatPermissions.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.setChatPermissions.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSetChatPermissionsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSetChatPhotoMutationKey() {
  return ['setChatPhoto', '/setChatPhoto', 'POST'] as const
}

export function getPostSetChatPhotoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setChatPhoto.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.setChatPhoto.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSetChatPhotoMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.setChatPhoto.$post>) {
      return parseResponse(client.setChatPhoto.$post(args, options))
    },
  })
}

export function usePostSetChatPhoto<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setChatPhoto.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.setChatPhoto.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSetChatPhotoMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSetChatStickerSetMutationKey() {
  return ['setChatStickerSet', '/setChatStickerSet', 'POST'] as const
}

export function getPostSetChatStickerSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setChatStickerSet.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.setChatStickerSet.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSetChatStickerSetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.setChatStickerSet.$post>) {
      return parseResponse(client.setChatStickerSet.$post(args, options))
    },
  })
}

export function usePostSetChatStickerSet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.setChatStickerSet.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.setChatStickerSet.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSetChatStickerSetMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSetChatTitleMutationKey() {
  return ['setChatTitle', '/setChatTitle', 'POST'] as const
}

export function getPostSetChatTitleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setChatTitle.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.setChatTitle.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSetChatTitleMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.setChatTitle.$post>) {
      return parseResponse(client.setChatTitle.$post(args, options))
    },
  })
}

export function usePostSetChatTitle<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setChatTitle.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.setChatTitle.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSetChatTitleMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSetGameScoreMutationKey() {
  return ['setGameScore', '/setGameScore', 'POST'] as const
}

export function getPostSetGameScoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setGameScore.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.setGameScore.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSetGameScoreMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.setGameScore.$post>) {
      return parseResponse(client.setGameScore.$post(args, options))
    },
  })
}

export function usePostSetGameScore<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setGameScore.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.setGameScore.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSetGameScoreMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSetMyCommandsMutationKey() {
  return ['setMyCommands', '/setMyCommands', 'POST'] as const
}

export function getPostSetMyCommandsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setMyCommands.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.setMyCommands.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSetMyCommandsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.setMyCommands.$post>) {
      return parseResponse(client.setMyCommands.$post(args, options))
    },
  })
}

export function usePostSetMyCommands<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setMyCommands.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.setMyCommands.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSetMyCommandsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSetPassportDataErrorsMutationKey() {
  return ['setPassportDataErrors', '/setPassportDataErrors', 'POST'] as const
}

export function getPostSetPassportDataErrorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.setPassportDataErrors.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.setPassportDataErrors.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSetPassportDataErrorsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.setPassportDataErrors.$post>) {
      return parseResponse(client.setPassportDataErrors.$post(args, options))
    },
  })
}

export function usePostSetPassportDataErrors<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.setPassportDataErrors.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.setPassportDataErrors.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSetPassportDataErrorsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSetStickerPositionInSetMutationKey() {
  return ['setStickerPositionInSet', '/setStickerPositionInSet', 'POST'] as const
}

export function getPostSetStickerPositionInSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.setStickerPositionInSet.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.setStickerPositionInSet.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSetStickerPositionInSetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.setStickerPositionInSet.$post>) {
      return parseResponse(client.setStickerPositionInSet.$post(args, options))
    },
  })
}

export function usePostSetStickerPositionInSet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.setStickerPositionInSet.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.setStickerPositionInSet.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSetStickerPositionInSetMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSetStickerSetThumbMutationKey() {
  return ['setStickerSetThumb', '/setStickerSetThumb', 'POST'] as const
}

export function getPostSetStickerSetThumbMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setStickerSetThumb.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.setStickerSetThumb.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSetStickerSetThumbMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.setStickerSetThumb.$post>) {
      return parseResponse(client.setStickerSetThumb.$post(args, options))
    },
  })
}

export function usePostSetStickerSetThumb<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.setStickerSetThumb.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.setStickerSetThumb.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSetStickerSetThumbMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSetWebhookMutationKey() {
  return ['setWebhook', '/setWebhook', 'POST'] as const
}

export function getPostSetWebhookMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setWebhook.$post>>>>>,
    TError,
    InferRequestType<typeof client.setWebhook.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSetWebhookMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.setWebhook.$post>) {
      return parseResponse(client.setWebhook.$post(args, options))
    },
  })
}

export function usePostSetWebhook<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setWebhook.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.setWebhook.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSetWebhookMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostStopMessageLiveLocationMutationKey() {
  return ['stopMessageLiveLocation', '/stopMessageLiveLocation', 'POST'] as const
}

export function getPostStopMessageLiveLocationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.stopMessageLiveLocation.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.stopMessageLiveLocation.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostStopMessageLiveLocationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.stopMessageLiveLocation.$post>) {
      return parseResponse(client.stopMessageLiveLocation.$post(args, options))
    },
  })
}

export function usePostStopMessageLiveLocation<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.stopMessageLiveLocation.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.stopMessageLiveLocation.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostStopMessageLiveLocationMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostStopPollMutationKey() {
  return ['stopPoll', '/stopPoll', 'POST'] as const
}

export function getPostStopPollMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stopPoll.$post>>>>>,
    TError,
    InferRequestType<typeof client.stopPoll.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostStopPollMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.stopPoll.$post>) {
      return parseResponse(client.stopPoll.$post(args, options))
    },
  })
}

export function usePostStopPoll<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stopPoll.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.stopPoll.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostStopPollMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostUnbanChatMemberMutationKey() {
  return ['unbanChatMember', '/unbanChatMember', 'POST'] as const
}

export function getPostUnbanChatMemberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.unbanChatMember.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.unbanChatMember.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUnbanChatMemberMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.unbanChatMember.$post>) {
      return parseResponse(client.unbanChatMember.$post(args, options))
    },
  })
}

export function usePostUnbanChatMember<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.unbanChatMember.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.unbanChatMember.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUnbanChatMemberMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostUnpinAllChatMessagesMutationKey() {
  return ['unpinAllChatMessages', '/unpinAllChatMessages', 'POST'] as const
}

export function getPostUnpinAllChatMessagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.unpinAllChatMessages.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.unpinAllChatMessages.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUnpinAllChatMessagesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.unpinAllChatMessages.$post>) {
      return parseResponse(client.unpinAllChatMessages.$post(args, options))
    },
  })
}

export function usePostUnpinAllChatMessages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.unpinAllChatMessages.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.unpinAllChatMessages.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUnpinAllChatMessagesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostUnpinChatMessageMutationKey() {
  return ['unpinChatMessage', '/unpinChatMessage', 'POST'] as const
}

export function getPostUnpinChatMessageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.unpinChatMessage.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.unpinChatMessage.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUnpinChatMessageMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.unpinChatMessage.$post>) {
      return parseResponse(client.unpinChatMessage.$post(args, options))
    },
  })
}

export function usePostUnpinChatMessage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.unpinChatMessage.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.unpinChatMessage.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUnpinChatMessageMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostUploadStickerFileMutationKey() {
  return ['uploadStickerFile', '/uploadStickerFile', 'POST'] as const
}

export function getPostUploadStickerFileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uploadStickerFile.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.uploadStickerFile.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUploadStickerFileMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.uploadStickerFile.$post>) {
      return parseResponse(client.uploadStickerFile.$post(args, options))
    },
  })
}

export function usePostUploadStickerFile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.uploadStickerFile.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.uploadStickerFile.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUploadStickerFileMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
