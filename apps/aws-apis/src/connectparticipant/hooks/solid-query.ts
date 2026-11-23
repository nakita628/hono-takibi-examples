import { createMutation, mutationOptions } from '@tanstack/solid-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getParticipantKey() {
  return ['participant'] as const
}

export function getPostParticipantCompleteAttachmentUploadXAmzBearerMutationKey() {
  return ['participant', '/participant/complete-attachment-upload#X-Amz-Bearer', 'POST'] as const
}

export function getPostParticipantCompleteAttachmentUploadXAmzBearerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.participant)['complete-attachment-upload#X-Amz-Bearer']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostParticipantCompleteAttachmentUploadXAmzBearerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.participant)['complete-attachment-upload#X-Amz-Bearer']['$post']
      >,
    ) {
      return parseResponse(
        client.participant['complete-attachment-upload#X-Amz-Bearer'].$post(args, options),
      )
    },
  })
}

export function createPostParticipantCompleteAttachmentUploadXAmzBearer<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.participant)['complete-attachment-upload#X-Amz-Bearer']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostParticipantCompleteAttachmentUploadXAmzBearerMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostParticipantConnectionXAmzBearerMutationKey() {
  return ['participant', '/participant/connection#X-Amz-Bearer', 'POST'] as const
}

export function getPostParticipantConnectionXAmzBearerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.participant)['connection#X-Amz-Bearer']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.participant)['connection#X-Amz-Bearer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostParticipantConnectionXAmzBearerMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.participant)['connection#X-Amz-Bearer']['$post']>,
    ) {
      return parseResponse(client.participant['connection#X-Amz-Bearer'].$post(args, options))
    },
  })
}

export function createPostParticipantConnectionXAmzBearer<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.participant)['connection#X-Amz-Bearer']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.participant)['connection#X-Amz-Bearer']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostParticipantConnectionXAmzBearerMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostParticipantDisconnectXAmzBearerMutationKey() {
  return ['participant', '/participant/disconnect#X-Amz-Bearer', 'POST'] as const
}

export function getPostParticipantDisconnectXAmzBearerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.participant)['disconnect#X-Amz-Bearer']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.participant)['disconnect#X-Amz-Bearer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostParticipantDisconnectXAmzBearerMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.participant)['disconnect#X-Amz-Bearer']['$post']>,
    ) {
      return parseResponse(client.participant['disconnect#X-Amz-Bearer'].$post(args, options))
    },
  })
}

export function createPostParticipantDisconnectXAmzBearer<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.participant)['disconnect#X-Amz-Bearer']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.participant)['disconnect#X-Amz-Bearer']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostParticipantDisconnectXAmzBearerMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostParticipantAttachmentXAmzBearerMutationKey() {
  return ['participant', '/participant/attachment#X-Amz-Bearer', 'POST'] as const
}

export function getPostParticipantAttachmentXAmzBearerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.participant)['attachment#X-Amz-Bearer']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.participant)['attachment#X-Amz-Bearer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostParticipantAttachmentXAmzBearerMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.participant)['attachment#X-Amz-Bearer']['$post']>,
    ) {
      return parseResponse(client.participant['attachment#X-Amz-Bearer'].$post(args, options))
    },
  })
}

export function createPostParticipantAttachmentXAmzBearer<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.participant)['attachment#X-Amz-Bearer']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.participant)['attachment#X-Amz-Bearer']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostParticipantAttachmentXAmzBearerMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostParticipantTranscriptXAmzBearerMutationKey() {
  return ['participant', '/participant/transcript#X-Amz-Bearer', 'POST'] as const
}

export function getPostParticipantTranscriptXAmzBearerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.participant)['transcript#X-Amz-Bearer']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.participant)['transcript#X-Amz-Bearer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostParticipantTranscriptXAmzBearerMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.participant)['transcript#X-Amz-Bearer']['$post']>,
    ) {
      return parseResponse(client.participant['transcript#X-Amz-Bearer'].$post(args, options))
    },
  })
}

export function createPostParticipantTranscriptXAmzBearer<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.participant)['transcript#X-Amz-Bearer']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.participant)['transcript#X-Amz-Bearer']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostParticipantTranscriptXAmzBearerMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostParticipantEventXAmzBearerMutationKey() {
  return ['participant', '/participant/event#X-Amz-Bearer', 'POST'] as const
}

export function getPostParticipantEventXAmzBearerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.participant)['event#X-Amz-Bearer']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.participant)['event#X-Amz-Bearer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostParticipantEventXAmzBearerMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.participant)['event#X-Amz-Bearer']['$post']>,
    ) {
      return parseResponse(client.participant['event#X-Amz-Bearer'].$post(args, options))
    },
  })
}

export function createPostParticipantEventXAmzBearer<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.participant)['event#X-Amz-Bearer']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.participant)['event#X-Amz-Bearer']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostParticipantEventXAmzBearerMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostParticipantMessageXAmzBearerMutationKey() {
  return ['participant', '/participant/message#X-Amz-Bearer', 'POST'] as const
}

export function getPostParticipantMessageXAmzBearerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.participant)['message#X-Amz-Bearer']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.participant)['message#X-Amz-Bearer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostParticipantMessageXAmzBearerMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.participant)['message#X-Amz-Bearer']['$post']>,
    ) {
      return parseResponse(client.participant['message#X-Amz-Bearer'].$post(args, options))
    },
  })
}

export function createPostParticipantMessageXAmzBearer<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.participant)['message#X-Amz-Bearer']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.participant)['message#X-Amz-Bearer']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostParticipantMessageXAmzBearerMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostParticipantStartAttachmentUploadXAmzBearerMutationKey() {
  return ['participant', '/participant/start-attachment-upload#X-Amz-Bearer', 'POST'] as const
}

export function getPostParticipantStartAttachmentUploadXAmzBearerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.participant)['start-attachment-upload#X-Amz-Bearer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostParticipantStartAttachmentUploadXAmzBearerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.participant)['start-attachment-upload#X-Amz-Bearer']['$post']
      >,
    ) {
      return parseResponse(
        client.participant['start-attachment-upload#X-Amz-Bearer'].$post(args, options),
      )
    },
  })
}

export function createPostParticipantStartAttachmentUploadXAmzBearer<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.participant)['start-attachment-upload#X-Amz-Bearer']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.participant)['start-attachment-upload#X-Amz-Bearer']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostParticipantStartAttachmentUploadXAmzBearerMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
