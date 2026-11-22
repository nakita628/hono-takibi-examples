import { createMutation, mutationOptions } from '@tanstack/svelte-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1beta1Key() {
  return ['v1beta1'] as const
}

export function getPostV1beta1DocumentsAnalyzeEntitiesMutationKey() {
  return ['v1beta1', '/v1beta1/documents:analyzeEntities', 'POST'] as const
}

export function getPostV1beta1DocumentsAnalyzeEntitiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)['documents:analyzeEntities']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)['documents:analyzeEntities']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1DocumentsAnalyzeEntitiesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta1)['documents:analyzeEntities']['$post']>,
    ) {
      return parseResponse(client.v1beta1['documents:analyzeEntities'].$post(args, options))
    },
  })
}

export function createPostV1beta1DocumentsAnalyzeEntities<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)['documents:analyzeEntities']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta1)['documents:analyzeEntities']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1beta1DocumentsAnalyzeEntitiesMutationOptions<
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

export function getPostV1beta1DocumentsAnalyzeSentimentMutationKey() {
  return ['v1beta1', '/v1beta1/documents:analyzeSentiment', 'POST'] as const
}

export function getPostV1beta1DocumentsAnalyzeSentimentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)['documents:analyzeSentiment']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)['documents:analyzeSentiment']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1DocumentsAnalyzeSentimentMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta1)['documents:analyzeSentiment']['$post']>,
    ) {
      return parseResponse(client.v1beta1['documents:analyzeSentiment'].$post(args, options))
    },
  })
}

export function createPostV1beta1DocumentsAnalyzeSentiment<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)['documents:analyzeSentiment']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta1)['documents:analyzeSentiment']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1beta1DocumentsAnalyzeSentimentMutationOptions<
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

export function getPostV1beta1DocumentsAnalyzeSyntaxMutationKey() {
  return ['v1beta1', '/v1beta1/documents:analyzeSyntax', 'POST'] as const
}

export function getPostV1beta1DocumentsAnalyzeSyntaxMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)['documents:analyzeSyntax']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)['documents:analyzeSyntax']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1DocumentsAnalyzeSyntaxMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta1)['documents:analyzeSyntax']['$post']>,
    ) {
      return parseResponse(client.v1beta1['documents:analyzeSyntax'].$post(args, options))
    },
  })
}

export function createPostV1beta1DocumentsAnalyzeSyntax<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)['documents:analyzeSyntax']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta1)['documents:analyzeSyntax']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1beta1DocumentsAnalyzeSyntaxMutationOptions<
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

export function getPostV1beta1DocumentsAnnotateTextMutationKey() {
  return ['v1beta1', '/v1beta1/documents:annotateText', 'POST'] as const
}

export function getPostV1beta1DocumentsAnnotateTextMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)['documents:annotateText']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)['documents:annotateText']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1DocumentsAnnotateTextMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta1)['documents:annotateText']['$post']>,
    ) {
      return parseResponse(client.v1beta1['documents:annotateText'].$post(args, options))
    },
  })
}

export function createPostV1beta1DocumentsAnnotateText<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)['documents:annotateText']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta1)['documents:annotateText']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1beta1DocumentsAnnotateTextMutationOptions<
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
