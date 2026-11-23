import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getParticipantKey() {
  return ['participant'] as const
}

export function getPostParticipantCompleteAttachmentUploadXAmzBearerKey() {
  return ['participant', '/participant/complete-attachment-upload#X-Amz-Bearer', 'POST'] as const
}

export function usePostParticipantCompleteAttachmentUploadXAmzBearer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.participant)['complete-attachment-upload#X-Amz-Bearer']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.participant)['complete-attachment-upload#X-Amz-Bearer']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostParticipantCompleteAttachmentUploadXAmzBearerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.participant)['complete-attachment-upload#X-Amz-Bearer']['$post']
          >
        },
      ) =>
        parseResponse(
          client.participant['complete-attachment-upload#X-Amz-Bearer'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostParticipantConnectionXAmzBearerKey() {
  return ['participant', '/participant/connection#X-Amz-Bearer', 'POST'] as const
}

export function usePostParticipantConnectionXAmzBearer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.participant)['connection#X-Amz-Bearer']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.participant)['connection#X-Amz-Bearer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostParticipantConnectionXAmzBearerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.participant)['connection#X-Amz-Bearer']['$post']>
        },
      ) => parseResponse(client.participant['connection#X-Amz-Bearer'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostParticipantDisconnectXAmzBearerKey() {
  return ['participant', '/participant/disconnect#X-Amz-Bearer', 'POST'] as const
}

export function usePostParticipantDisconnectXAmzBearer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.participant)['disconnect#X-Amz-Bearer']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.participant)['disconnect#X-Amz-Bearer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostParticipantDisconnectXAmzBearerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.participant)['disconnect#X-Amz-Bearer']['$post']>
        },
      ) => parseResponse(client.participant['disconnect#X-Amz-Bearer'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostParticipantAttachmentXAmzBearerKey() {
  return ['participant', '/participant/attachment#X-Amz-Bearer', 'POST'] as const
}

export function usePostParticipantAttachmentXAmzBearer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.participant)['attachment#X-Amz-Bearer']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.participant)['attachment#X-Amz-Bearer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostParticipantAttachmentXAmzBearerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.participant)['attachment#X-Amz-Bearer']['$post']>
        },
      ) => parseResponse(client.participant['attachment#X-Amz-Bearer'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostParticipantTranscriptXAmzBearerKey() {
  return ['participant', '/participant/transcript#X-Amz-Bearer', 'POST'] as const
}

export function usePostParticipantTranscriptXAmzBearer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.participant)['transcript#X-Amz-Bearer']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.participant)['transcript#X-Amz-Bearer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostParticipantTranscriptXAmzBearerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.participant)['transcript#X-Amz-Bearer']['$post']>
        },
      ) => parseResponse(client.participant['transcript#X-Amz-Bearer'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostParticipantEventXAmzBearerKey() {
  return ['participant', '/participant/event#X-Amz-Bearer', 'POST'] as const
}

export function usePostParticipantEventXAmzBearer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.participant)['event#X-Amz-Bearer']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.participant)['event#X-Amz-Bearer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostParticipantEventXAmzBearerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.participant)['event#X-Amz-Bearer']['$post']> },
      ) => parseResponse(client.participant['event#X-Amz-Bearer'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostParticipantMessageXAmzBearerKey() {
  return ['participant', '/participant/message#X-Amz-Bearer', 'POST'] as const
}

export function usePostParticipantMessageXAmzBearer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.participant)['message#X-Amz-Bearer']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.participant)['message#X-Amz-Bearer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostParticipantMessageXAmzBearerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.participant)['message#X-Amz-Bearer']['$post']> },
      ) => parseResponse(client.participant['message#X-Amz-Bearer'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostParticipantStartAttachmentUploadXAmzBearerKey() {
  return ['participant', '/participant/start-attachment-upload#X-Amz-Bearer', 'POST'] as const
}

export function usePostParticipantStartAttachmentUploadXAmzBearer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.participant)['start-attachment-upload#X-Amz-Bearer']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.participant)['start-attachment-upload#X-Amz-Bearer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostParticipantStartAttachmentUploadXAmzBearerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.participant)['start-attachment-upload#X-Amz-Bearer']['$post']
          >
        },
      ) =>
        parseResponse(
          client.participant['start-attachment-upload#X-Amz-Bearer'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
