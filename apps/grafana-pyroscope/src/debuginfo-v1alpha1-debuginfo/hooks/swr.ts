import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getDebuginfoV1alpha1DebuginfoServiceKey() {
  return ['debuginfo.v1alpha1.DebuginfoService'] as const
}

export function getPostDebuginfoV1alpha1DebuginfoServiceDeleteDebuginfoKey() {
  return [
    'debuginfo.v1alpha1.DebuginfoService',
    '/debuginfo.v1alpha1.DebuginfoService/DeleteDebuginfo',
    'POST',
  ] as const
}

export function usePostDebuginfoV1alpha1DebuginfoServiceDeleteDebuginfo<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['debuginfo.v1alpha1.DebuginfoService']['DeleteDebuginfo']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['debuginfo.v1alpha1.DebuginfoService']['DeleteDebuginfo']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDebuginfoV1alpha1DebuginfoServiceDeleteDebuginfoKey()
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
            (typeof client)['debuginfo.v1alpha1.DebuginfoService']['DeleteDebuginfo']['$post']
          >
        },
      ) =>
        parseResponse(
          client['debuginfo.v1alpha1.DebuginfoService'].DeleteDebuginfo.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostDebuginfoV1alpha1DebuginfoServiceListDebuginfoKey() {
  return [
    'debuginfo.v1alpha1.DebuginfoService',
    '/debuginfo.v1alpha1.DebuginfoService/ListDebuginfo',
    'POST',
  ] as const
}

export function usePostDebuginfoV1alpha1DebuginfoServiceListDebuginfo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['debuginfo.v1alpha1.DebuginfoService']['ListDebuginfo']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['debuginfo.v1alpha1.DebuginfoService']['ListDebuginfo']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDebuginfoV1alpha1DebuginfoServiceListDebuginfoKey()
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
            (typeof client)['debuginfo.v1alpha1.DebuginfoService']['ListDebuginfo']['$post']
          >
        },
      ) =>
        parseResponse(
          client['debuginfo.v1alpha1.DebuginfoService'].ListDebuginfo.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostDebuginfoV1alpha1DebuginfoServiceShouldInitiateUploadKey() {
  return [
    'debuginfo.v1alpha1.DebuginfoService',
    '/debuginfo.v1alpha1.DebuginfoService/ShouldInitiateUpload',
    'POST',
  ] as const
}

export function usePostDebuginfoV1alpha1DebuginfoServiceShouldInitiateUpload<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['debuginfo.v1alpha1.DebuginfoService']['ShouldInitiateUpload']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['debuginfo.v1alpha1.DebuginfoService']['ShouldInitiateUpload']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDebuginfoV1alpha1DebuginfoServiceShouldInitiateUploadKey()
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
            (typeof client)['debuginfo.v1alpha1.DebuginfoService']['ShouldInitiateUpload']['$post']
          >
        },
      ) =>
        parseResponse(
          client['debuginfo.v1alpha1.DebuginfoService'].ShouldInitiateUpload.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostDebuginfoV1alpha1DebuginfoServiceUploadFinishedKey() {
  return [
    'debuginfo.v1alpha1.DebuginfoService',
    '/debuginfo.v1alpha1.DebuginfoService/UploadFinished',
    'POST',
  ] as const
}

export function usePostDebuginfoV1alpha1DebuginfoServiceUploadFinished<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['debuginfo.v1alpha1.DebuginfoService']['UploadFinished']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['debuginfo.v1alpha1.DebuginfoService']['UploadFinished']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDebuginfoV1alpha1DebuginfoServiceUploadFinishedKey()
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
            (typeof client)['debuginfo.v1alpha1.DebuginfoService']['UploadFinished']['$post']
          >
        },
      ) =>
        parseResponse(
          client['debuginfo.v1alpha1.DebuginfoService'].UploadFinished.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
