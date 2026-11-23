type DeleteLexiconOutput = { [x: string]: unknown }
type LexiconNotFoundException = { [x: string]: unknown }
type ServiceFailureException = { [x: string]: unknown }
type GetLexiconOutput = {
  Lexicon?: { Content?: {} | undefined; Name?: {} | undefined } | undefined
  LexiconAttributes?:
    | {
        Alphabet?: {} | undefined
        LanguageCode?: {} | undefined
        LastModified?: {} | undefined
        LexiconArn?: {} | undefined
        LexemesCount?: {} | undefined
        Size?: {} | undefined
      }
    | undefined
}
type PutLexiconOutput = { [x: string]: unknown }
type InvalidLexiconException = { [x: string]: unknown }
type UnsupportedPlsAlphabetException = { [x: string]: unknown }
type UnsupportedPlsLanguageException = { [x: string]: unknown }
type LexiconSizeExceededException = { [x: string]: unknown }
type MaxLexemeLengthExceededException = { [x: string]: unknown }
type MaxLexiconsNumberExceededException = { [x: string]: unknown }
type DescribeVoicesOutput = { Voices?: {} | undefined; NextToken?: {} | undefined }
type InvalidNextTokenException = { [x: string]: unknown }
type GetSpeechSynthesisTaskOutput = {
  SynthesisTask?:
    | {
        Engine?: {} | undefined
        TaskId?: {} | undefined
        TaskStatus?: {} | undefined
        TaskStatusReason?: {} | undefined
        OutputUri?: {} | undefined
        CreationTime?: {} | undefined
        RequestCharacters?: {} | undefined
        SnsTopicArn?: {} | undefined
        LexiconNames?: {} | undefined
        OutputFormat?: {} | undefined
        SampleRate?: {} | undefined
        SpeechMarkTypes?: {} | undefined
        TextType?: {} | undefined
        VoiceId?: {} | undefined
        LanguageCode?: {} | undefined
      }
    | undefined
}
type InvalidTaskIdException = { [x: string]: unknown }
type SynthesisTaskNotFoundException = { [x: string]: unknown }
type ListLexiconsOutput = { Lexicons?: {} | undefined; NextToken?: {} | undefined }
type ListSpeechSynthesisTasksOutput = {
  NextToken?: {} | undefined
  SynthesisTasks?: {} | undefined
}
type LexiconName = string
type SpeechMarkType = 'sentence' | 'ssml' | 'viseme' | 'word'
type StartSpeechSynthesisTaskOutput = {
  SynthesisTask?:
    | {
        Engine?: {} | undefined
        TaskId?: {} | undefined
        TaskStatus?: {} | undefined
        TaskStatusReason?: {} | undefined
        OutputUri?: {} | undefined
        CreationTime?: {} | undefined
        RequestCharacters?: {} | undefined
        SnsTopicArn?: {} | undefined
        LexiconNames?: {} | undefined
        OutputFormat?: {} | undefined
        SampleRate?: {} | undefined
        SpeechMarkTypes?: {} | undefined
        TextType?: {} | undefined
        VoiceId?: {} | undefined
        LanguageCode?: {} | undefined
      }
    | undefined
}
type TextLengthExceededException = { [x: string]: unknown }
type InvalidS3BucketException = { [x: string]: unknown }
type InvalidS3KeyException = { [x: string]: unknown }
type InvalidSampleRateException = { [x: string]: unknown }
type InvalidSnsTopicArnException = { [x: string]: unknown }
type InvalidSsmlException = { [x: string]: unknown }
type EngineNotSupportedException = { [x: string]: unknown }
type MarksNotSupportedForFormatException = { [x: string]: unknown }
type SsmlMarksNotSupportedForTextTypeException = { [x: string]: unknown }
type LanguageNotSupportedException = { [x: string]: unknown }
type SynthesizeSpeechOutput = { AudioStream?: {} | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/lexicons/:LexiconName': {
      $delete:
        | {
            input: { param: { LexiconName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DeleteLexiconOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { LexiconName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: LexiconNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { LexiconName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceFailureException
            outputFormat: 'json'
            status: 481
          }
      $get:
        | {
            input: { param: { LexiconName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetLexiconOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { LexiconName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: LexiconNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { LexiconName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceFailureException
            outputFormat: 'json'
            status: 481
          }
      $put:
        | {
            input: { param: { LexiconName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Content: string } }
            output: PutLexiconOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { LexiconName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Content: string } }
            output: InvalidLexiconException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { LexiconName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Content: string } }
            output: UnsupportedPlsAlphabetException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { LexiconName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Content: string } }
            output: UnsupportedPlsLanguageException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { LexiconName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Content: string } }
            output: LexiconSizeExceededException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { LexiconName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Content: string } }
            output: MaxLexemeLengthExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { LexiconName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Content: string } }
            output: MaxLexiconsNumberExceededException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { LexiconName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Content: string } }
            output: ServiceFailureException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/v1/voices': {
      $get:
        | {
            input: {
              query: {
                Engine?: 'standard' | 'neural' | undefined
                LanguageCode?:
                  | 'arb'
                  | 'cmn-CN'
                  | 'cy-GB'
                  | 'da-DK'
                  | 'de-DE'
                  | 'en-AU'
                  | 'en-GB'
                  | 'en-GB-WLS'
                  | 'en-IN'
                  | 'en-US'
                  | 'es-ES'
                  | 'es-MX'
                  | 'es-US'
                  | 'fr-CA'
                  | 'fr-FR'
                  | 'is-IS'
                  | 'it-IT'
                  | 'ja-JP'
                  | 'hi-IN'
                  | 'ko-KR'
                  | 'nb-NO'
                  | 'nl-NL'
                  | 'pl-PL'
                  | 'pt-BR'
                  | 'pt-PT'
                  | 'ro-RO'
                  | 'ru-RU'
                  | 'sv-SE'
                  | 'tr-TR'
                  | 'en-NZ'
                  | 'en-ZA'
                  | 'ca-ES'
                  | 'de-AT'
                  | 'yue-CN'
                  | 'ar-AE'
                  | 'fi-FI'
                  | 'en-IE'
                  | 'nl-BE'
                  | 'fr-BE'
                  | undefined
                IncludeAdditionalLanguageCodes?: boolean | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DescribeVoicesOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                Engine?: 'standard' | 'neural' | undefined
                LanguageCode?:
                  | 'arb'
                  | 'cmn-CN'
                  | 'cy-GB'
                  | 'da-DK'
                  | 'de-DE'
                  | 'en-AU'
                  | 'en-GB'
                  | 'en-GB-WLS'
                  | 'en-IN'
                  | 'en-US'
                  | 'es-ES'
                  | 'es-MX'
                  | 'es-US'
                  | 'fr-CA'
                  | 'fr-FR'
                  | 'is-IS'
                  | 'it-IT'
                  | 'ja-JP'
                  | 'hi-IN'
                  | 'ko-KR'
                  | 'nb-NO'
                  | 'nl-NL'
                  | 'pl-PL'
                  | 'pt-BR'
                  | 'pt-PT'
                  | 'ro-RO'
                  | 'ru-RU'
                  | 'sv-SE'
                  | 'tr-TR'
                  | 'en-NZ'
                  | 'en-ZA'
                  | 'ca-ES'
                  | 'de-AT'
                  | 'yue-CN'
                  | 'ar-AE'
                  | 'fi-FI'
                  | 'en-IE'
                  | 'nl-BE'
                  | 'fr-BE'
                  | undefined
                IncludeAdditionalLanguageCodes?: boolean | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: {
                Engine?: 'standard' | 'neural' | undefined
                LanguageCode?:
                  | 'arb'
                  | 'cmn-CN'
                  | 'cy-GB'
                  | 'da-DK'
                  | 'de-DE'
                  | 'en-AU'
                  | 'en-GB'
                  | 'en-GB-WLS'
                  | 'en-IN'
                  | 'en-US'
                  | 'es-ES'
                  | 'es-MX'
                  | 'es-US'
                  | 'fr-CA'
                  | 'fr-FR'
                  | 'is-IS'
                  | 'it-IT'
                  | 'ja-JP'
                  | 'hi-IN'
                  | 'ko-KR'
                  | 'nb-NO'
                  | 'nl-NL'
                  | 'pl-PL'
                  | 'pt-BR'
                  | 'pt-PT'
                  | 'ro-RO'
                  | 'ru-RU'
                  | 'sv-SE'
                  | 'tr-TR'
                  | 'en-NZ'
                  | 'en-ZA'
                  | 'ca-ES'
                  | 'de-AT'
                  | 'yue-CN'
                  | 'ar-AE'
                  | 'fi-FI'
                  | 'en-IE'
                  | 'nl-BE'
                  | 'fr-BE'
                  | undefined
                IncludeAdditionalLanguageCodes?: boolean | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceFailureException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/v1/synthesisTasks/:TaskId': {
      $get:
        | {
            input: { param: { TaskId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetSpeechSynthesisTaskOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { TaskId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidTaskIdException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { TaskId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceFailureException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { TaskId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: SynthesisTaskNotFoundException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/v1/lexicons': {
      $get:
        | {
            input: { query: { NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ListLexiconsOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceFailureException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/v1/synthesisTasks': {
      $get:
        | {
            input: {
              query: {
                MaxResults?: number | undefined
                NextToken?: string | undefined
                Status?: 'scheduled' | 'inProgress' | 'completed' | 'failed' | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ListSpeechSynthesisTasksOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                MaxResults?: number | undefined
                NextToken?: string | undefined
                Status?: 'scheduled' | 'inProgress' | 'completed' | 'failed' | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: {
                MaxResults?: number | undefined
                NextToken?: string | undefined
                Status?: 'scheduled' | 'inProgress' | 'completed' | 'failed' | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceFailureException
            outputFormat: 'json'
            status: 481
          }
      $post:
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Engine?: 'standard' | 'neural' | undefined
                LanguageCode?:
                  | 'arb'
                  | 'cmn-CN'
                  | 'cy-GB'
                  | 'da-DK'
                  | 'de-DE'
                  | 'en-AU'
                  | 'en-GB'
                  | 'en-GB-WLS'
                  | 'en-IN'
                  | 'en-US'
                  | 'es-ES'
                  | 'es-MX'
                  | 'es-US'
                  | 'fr-CA'
                  | 'fr-FR'
                  | 'is-IS'
                  | 'it-IT'
                  | 'ja-JP'
                  | 'hi-IN'
                  | 'ko-KR'
                  | 'nb-NO'
                  | 'nl-NL'
                  | 'pl-PL'
                  | 'pt-BR'
                  | 'pt-PT'
                  | 'ro-RO'
                  | 'ru-RU'
                  | 'sv-SE'
                  | 'tr-TR'
                  | 'en-NZ'
                  | 'en-ZA'
                  | 'ca-ES'
                  | 'de-AT'
                  | 'yue-CN'
                  | 'ar-AE'
                  | 'fi-FI'
                  | 'en-IE'
                  | 'nl-BE'
                  | 'fr-BE'
                  | undefined
                LexiconNames?: LexiconName[] | undefined
                OutputFormat: 'json' | 'mp3' | 'ogg_vorbis' | 'pcm'
                OutputS3BucketName: string
                OutputS3KeyPrefix?: string | undefined
                SampleRate?: string | undefined
                SnsTopicArn?: string | undefined
                SpeechMarkTypes?: SpeechMarkType[] | undefined
                Text: string
                TextType?: 'ssml' | 'text' | undefined
                VoiceId:
                  | 'Aditi'
                  | 'Amy'
                  | 'Astrid'
                  | 'Bianca'
                  | 'Brian'
                  | 'Camila'
                  | 'Carla'
                  | 'Carmen'
                  | 'Celine'
                  | 'Chantal'
                  | 'Conchita'
                  | 'Cristiano'
                  | 'Dora'
                  | 'Emma'
                  | 'Enrique'
                  | 'Ewa'
                  | 'Filiz'
                  | 'Gabrielle'
                  | 'Geraint'
                  | 'Giorgio'
                  | 'Gwyneth'
                  | 'Hans'
                  | 'Ines'
                  | 'Ivy'
                  | 'Jacek'
                  | 'Jan'
                  | 'Joanna'
                  | 'Joey'
                  | 'Justin'
                  | 'Karl'
                  | 'Kendra'
                  | 'Kevin'
                  | 'Kimberly'
                  | 'Lea'
                  | 'Liv'
                  | 'Lotte'
                  | 'Lucia'
                  | 'Lupe'
                  | 'Mads'
                  | 'Maja'
                  | 'Marlene'
                  | 'Mathieu'
                  | 'Matthew'
                  | 'Maxim'
                  | 'Mia'
                  | 'Miguel'
                  | 'Mizuki'
                  | 'Naja'
                  | 'Nicole'
                  | 'Olivia'
                  | 'Penelope'
                  | 'Raveena'
                  | 'Ricardo'
                  | 'Ruben'
                  | 'Russell'
                  | 'Salli'
                  | 'Seoyeon'
                  | 'Takumi'
                  | 'Tatyana'
                  | 'Vicki'
                  | 'Vitoria'
                  | 'Zeina'
                  | 'Zhiyu'
                  | 'Aria'
                  | 'Ayanda'
                  | 'Arlet'
                  | 'Hannah'
                  | 'Arthur'
                  | 'Daniel'
                  | 'Liam'
                  | 'Pedro'
                  | 'Kajal'
                  | 'Hiujin'
                  | 'Laura'
                  | 'Elin'
                  | 'Ida'
                  | 'Suvi'
                  | 'Ola'
                  | 'Hala'
                  | 'Andres'
                  | 'Sergio'
                  | 'Remi'
                  | 'Adriano'
                  | 'Thiago'
                  | 'Ruth'
                  | 'Stephen'
                  | 'Kazuha'
                  | 'Tomoko'
                  | 'Niamh'
                  | 'Sofie'
                  | 'Lisa'
                  | 'Isabelle'
              }
            }
            output: StartSpeechSynthesisTaskOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Engine?: 'standard' | 'neural' | undefined
                LanguageCode?:
                  | 'arb'
                  | 'cmn-CN'
                  | 'cy-GB'
                  | 'da-DK'
                  | 'de-DE'
                  | 'en-AU'
                  | 'en-GB'
                  | 'en-GB-WLS'
                  | 'en-IN'
                  | 'en-US'
                  | 'es-ES'
                  | 'es-MX'
                  | 'es-US'
                  | 'fr-CA'
                  | 'fr-FR'
                  | 'is-IS'
                  | 'it-IT'
                  | 'ja-JP'
                  | 'hi-IN'
                  | 'ko-KR'
                  | 'nb-NO'
                  | 'nl-NL'
                  | 'pl-PL'
                  | 'pt-BR'
                  | 'pt-PT'
                  | 'ro-RO'
                  | 'ru-RU'
                  | 'sv-SE'
                  | 'tr-TR'
                  | 'en-NZ'
                  | 'en-ZA'
                  | 'ca-ES'
                  | 'de-AT'
                  | 'yue-CN'
                  | 'ar-AE'
                  | 'fi-FI'
                  | 'en-IE'
                  | 'nl-BE'
                  | 'fr-BE'
                  | undefined
                LexiconNames?: LexiconName[] | undefined
                OutputFormat: 'json' | 'mp3' | 'ogg_vorbis' | 'pcm'
                OutputS3BucketName: string
                OutputS3KeyPrefix?: string | undefined
                SampleRate?: string | undefined
                SnsTopicArn?: string | undefined
                SpeechMarkTypes?: SpeechMarkType[] | undefined
                Text: string
                TextType?: 'ssml' | 'text' | undefined
                VoiceId:
                  | 'Aditi'
                  | 'Amy'
                  | 'Astrid'
                  | 'Bianca'
                  | 'Brian'
                  | 'Camila'
                  | 'Carla'
                  | 'Carmen'
                  | 'Celine'
                  | 'Chantal'
                  | 'Conchita'
                  | 'Cristiano'
                  | 'Dora'
                  | 'Emma'
                  | 'Enrique'
                  | 'Ewa'
                  | 'Filiz'
                  | 'Gabrielle'
                  | 'Geraint'
                  | 'Giorgio'
                  | 'Gwyneth'
                  | 'Hans'
                  | 'Ines'
                  | 'Ivy'
                  | 'Jacek'
                  | 'Jan'
                  | 'Joanna'
                  | 'Joey'
                  | 'Justin'
                  | 'Karl'
                  | 'Kendra'
                  | 'Kevin'
                  | 'Kimberly'
                  | 'Lea'
                  | 'Liv'
                  | 'Lotte'
                  | 'Lucia'
                  | 'Lupe'
                  | 'Mads'
                  | 'Maja'
                  | 'Marlene'
                  | 'Mathieu'
                  | 'Matthew'
                  | 'Maxim'
                  | 'Mia'
                  | 'Miguel'
                  | 'Mizuki'
                  | 'Naja'
                  | 'Nicole'
                  | 'Olivia'
                  | 'Penelope'
                  | 'Raveena'
                  | 'Ricardo'
                  | 'Ruben'
                  | 'Russell'
                  | 'Salli'
                  | 'Seoyeon'
                  | 'Takumi'
                  | 'Tatyana'
                  | 'Vicki'
                  | 'Vitoria'
                  | 'Zeina'
                  | 'Zhiyu'
                  | 'Aria'
                  | 'Ayanda'
                  | 'Arlet'
                  | 'Hannah'
                  | 'Arthur'
                  | 'Daniel'
                  | 'Liam'
                  | 'Pedro'
                  | 'Kajal'
                  | 'Hiujin'
                  | 'Laura'
                  | 'Elin'
                  | 'Ida'
                  | 'Suvi'
                  | 'Ola'
                  | 'Hala'
                  | 'Andres'
                  | 'Sergio'
                  | 'Remi'
                  | 'Adriano'
                  | 'Thiago'
                  | 'Ruth'
                  | 'Stephen'
                  | 'Kazuha'
                  | 'Tomoko'
                  | 'Niamh'
                  | 'Sofie'
                  | 'Lisa'
                  | 'Isabelle'
              }
            }
            output: TextLengthExceededException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Engine?: 'standard' | 'neural' | undefined
                LanguageCode?:
                  | 'arb'
                  | 'cmn-CN'
                  | 'cy-GB'
                  | 'da-DK'
                  | 'de-DE'
                  | 'en-AU'
                  | 'en-GB'
                  | 'en-GB-WLS'
                  | 'en-IN'
                  | 'en-US'
                  | 'es-ES'
                  | 'es-MX'
                  | 'es-US'
                  | 'fr-CA'
                  | 'fr-FR'
                  | 'is-IS'
                  | 'it-IT'
                  | 'ja-JP'
                  | 'hi-IN'
                  | 'ko-KR'
                  | 'nb-NO'
                  | 'nl-NL'
                  | 'pl-PL'
                  | 'pt-BR'
                  | 'pt-PT'
                  | 'ro-RO'
                  | 'ru-RU'
                  | 'sv-SE'
                  | 'tr-TR'
                  | 'en-NZ'
                  | 'en-ZA'
                  | 'ca-ES'
                  | 'de-AT'
                  | 'yue-CN'
                  | 'ar-AE'
                  | 'fi-FI'
                  | 'en-IE'
                  | 'nl-BE'
                  | 'fr-BE'
                  | undefined
                LexiconNames?: LexiconName[] | undefined
                OutputFormat: 'json' | 'mp3' | 'ogg_vorbis' | 'pcm'
                OutputS3BucketName: string
                OutputS3KeyPrefix?: string | undefined
                SampleRate?: string | undefined
                SnsTopicArn?: string | undefined
                SpeechMarkTypes?: SpeechMarkType[] | undefined
                Text: string
                TextType?: 'ssml' | 'text' | undefined
                VoiceId:
                  | 'Aditi'
                  | 'Amy'
                  | 'Astrid'
                  | 'Bianca'
                  | 'Brian'
                  | 'Camila'
                  | 'Carla'
                  | 'Carmen'
                  | 'Celine'
                  | 'Chantal'
                  | 'Conchita'
                  | 'Cristiano'
                  | 'Dora'
                  | 'Emma'
                  | 'Enrique'
                  | 'Ewa'
                  | 'Filiz'
                  | 'Gabrielle'
                  | 'Geraint'
                  | 'Giorgio'
                  | 'Gwyneth'
                  | 'Hans'
                  | 'Ines'
                  | 'Ivy'
                  | 'Jacek'
                  | 'Jan'
                  | 'Joanna'
                  | 'Joey'
                  | 'Justin'
                  | 'Karl'
                  | 'Kendra'
                  | 'Kevin'
                  | 'Kimberly'
                  | 'Lea'
                  | 'Liv'
                  | 'Lotte'
                  | 'Lucia'
                  | 'Lupe'
                  | 'Mads'
                  | 'Maja'
                  | 'Marlene'
                  | 'Mathieu'
                  | 'Matthew'
                  | 'Maxim'
                  | 'Mia'
                  | 'Miguel'
                  | 'Mizuki'
                  | 'Naja'
                  | 'Nicole'
                  | 'Olivia'
                  | 'Penelope'
                  | 'Raveena'
                  | 'Ricardo'
                  | 'Ruben'
                  | 'Russell'
                  | 'Salli'
                  | 'Seoyeon'
                  | 'Takumi'
                  | 'Tatyana'
                  | 'Vicki'
                  | 'Vitoria'
                  | 'Zeina'
                  | 'Zhiyu'
                  | 'Aria'
                  | 'Ayanda'
                  | 'Arlet'
                  | 'Hannah'
                  | 'Arthur'
                  | 'Daniel'
                  | 'Liam'
                  | 'Pedro'
                  | 'Kajal'
                  | 'Hiujin'
                  | 'Laura'
                  | 'Elin'
                  | 'Ida'
                  | 'Suvi'
                  | 'Ola'
                  | 'Hala'
                  | 'Andres'
                  | 'Sergio'
                  | 'Remi'
                  | 'Adriano'
                  | 'Thiago'
                  | 'Ruth'
                  | 'Stephen'
                  | 'Kazuha'
                  | 'Tomoko'
                  | 'Niamh'
                  | 'Sofie'
                  | 'Lisa'
                  | 'Isabelle'
              }
            }
            output: InvalidS3BucketException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Engine?: 'standard' | 'neural' | undefined
                LanguageCode?:
                  | 'arb'
                  | 'cmn-CN'
                  | 'cy-GB'
                  | 'da-DK'
                  | 'de-DE'
                  | 'en-AU'
                  | 'en-GB'
                  | 'en-GB-WLS'
                  | 'en-IN'
                  | 'en-US'
                  | 'es-ES'
                  | 'es-MX'
                  | 'es-US'
                  | 'fr-CA'
                  | 'fr-FR'
                  | 'is-IS'
                  | 'it-IT'
                  | 'ja-JP'
                  | 'hi-IN'
                  | 'ko-KR'
                  | 'nb-NO'
                  | 'nl-NL'
                  | 'pl-PL'
                  | 'pt-BR'
                  | 'pt-PT'
                  | 'ro-RO'
                  | 'ru-RU'
                  | 'sv-SE'
                  | 'tr-TR'
                  | 'en-NZ'
                  | 'en-ZA'
                  | 'ca-ES'
                  | 'de-AT'
                  | 'yue-CN'
                  | 'ar-AE'
                  | 'fi-FI'
                  | 'en-IE'
                  | 'nl-BE'
                  | 'fr-BE'
                  | undefined
                LexiconNames?: LexiconName[] | undefined
                OutputFormat: 'json' | 'mp3' | 'ogg_vorbis' | 'pcm'
                OutputS3BucketName: string
                OutputS3KeyPrefix?: string | undefined
                SampleRate?: string | undefined
                SnsTopicArn?: string | undefined
                SpeechMarkTypes?: SpeechMarkType[] | undefined
                Text: string
                TextType?: 'ssml' | 'text' | undefined
                VoiceId:
                  | 'Aditi'
                  | 'Amy'
                  | 'Astrid'
                  | 'Bianca'
                  | 'Brian'
                  | 'Camila'
                  | 'Carla'
                  | 'Carmen'
                  | 'Celine'
                  | 'Chantal'
                  | 'Conchita'
                  | 'Cristiano'
                  | 'Dora'
                  | 'Emma'
                  | 'Enrique'
                  | 'Ewa'
                  | 'Filiz'
                  | 'Gabrielle'
                  | 'Geraint'
                  | 'Giorgio'
                  | 'Gwyneth'
                  | 'Hans'
                  | 'Ines'
                  | 'Ivy'
                  | 'Jacek'
                  | 'Jan'
                  | 'Joanna'
                  | 'Joey'
                  | 'Justin'
                  | 'Karl'
                  | 'Kendra'
                  | 'Kevin'
                  | 'Kimberly'
                  | 'Lea'
                  | 'Liv'
                  | 'Lotte'
                  | 'Lucia'
                  | 'Lupe'
                  | 'Mads'
                  | 'Maja'
                  | 'Marlene'
                  | 'Mathieu'
                  | 'Matthew'
                  | 'Maxim'
                  | 'Mia'
                  | 'Miguel'
                  | 'Mizuki'
                  | 'Naja'
                  | 'Nicole'
                  | 'Olivia'
                  | 'Penelope'
                  | 'Raveena'
                  | 'Ricardo'
                  | 'Ruben'
                  | 'Russell'
                  | 'Salli'
                  | 'Seoyeon'
                  | 'Takumi'
                  | 'Tatyana'
                  | 'Vicki'
                  | 'Vitoria'
                  | 'Zeina'
                  | 'Zhiyu'
                  | 'Aria'
                  | 'Ayanda'
                  | 'Arlet'
                  | 'Hannah'
                  | 'Arthur'
                  | 'Daniel'
                  | 'Liam'
                  | 'Pedro'
                  | 'Kajal'
                  | 'Hiujin'
                  | 'Laura'
                  | 'Elin'
                  | 'Ida'
                  | 'Suvi'
                  | 'Ola'
                  | 'Hala'
                  | 'Andres'
                  | 'Sergio'
                  | 'Remi'
                  | 'Adriano'
                  | 'Thiago'
                  | 'Ruth'
                  | 'Stephen'
                  | 'Kazuha'
                  | 'Tomoko'
                  | 'Niamh'
                  | 'Sofie'
                  | 'Lisa'
                  | 'Isabelle'
              }
            }
            output: InvalidS3KeyException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Engine?: 'standard' | 'neural' | undefined
                LanguageCode?:
                  | 'arb'
                  | 'cmn-CN'
                  | 'cy-GB'
                  | 'da-DK'
                  | 'de-DE'
                  | 'en-AU'
                  | 'en-GB'
                  | 'en-GB-WLS'
                  | 'en-IN'
                  | 'en-US'
                  | 'es-ES'
                  | 'es-MX'
                  | 'es-US'
                  | 'fr-CA'
                  | 'fr-FR'
                  | 'is-IS'
                  | 'it-IT'
                  | 'ja-JP'
                  | 'hi-IN'
                  | 'ko-KR'
                  | 'nb-NO'
                  | 'nl-NL'
                  | 'pl-PL'
                  | 'pt-BR'
                  | 'pt-PT'
                  | 'ro-RO'
                  | 'ru-RU'
                  | 'sv-SE'
                  | 'tr-TR'
                  | 'en-NZ'
                  | 'en-ZA'
                  | 'ca-ES'
                  | 'de-AT'
                  | 'yue-CN'
                  | 'ar-AE'
                  | 'fi-FI'
                  | 'en-IE'
                  | 'nl-BE'
                  | 'fr-BE'
                  | undefined
                LexiconNames?: LexiconName[] | undefined
                OutputFormat: 'json' | 'mp3' | 'ogg_vorbis' | 'pcm'
                OutputS3BucketName: string
                OutputS3KeyPrefix?: string | undefined
                SampleRate?: string | undefined
                SnsTopicArn?: string | undefined
                SpeechMarkTypes?: SpeechMarkType[] | undefined
                Text: string
                TextType?: 'ssml' | 'text' | undefined
                VoiceId:
                  | 'Aditi'
                  | 'Amy'
                  | 'Astrid'
                  | 'Bianca'
                  | 'Brian'
                  | 'Camila'
                  | 'Carla'
                  | 'Carmen'
                  | 'Celine'
                  | 'Chantal'
                  | 'Conchita'
                  | 'Cristiano'
                  | 'Dora'
                  | 'Emma'
                  | 'Enrique'
                  | 'Ewa'
                  | 'Filiz'
                  | 'Gabrielle'
                  | 'Geraint'
                  | 'Giorgio'
                  | 'Gwyneth'
                  | 'Hans'
                  | 'Ines'
                  | 'Ivy'
                  | 'Jacek'
                  | 'Jan'
                  | 'Joanna'
                  | 'Joey'
                  | 'Justin'
                  | 'Karl'
                  | 'Kendra'
                  | 'Kevin'
                  | 'Kimberly'
                  | 'Lea'
                  | 'Liv'
                  | 'Lotte'
                  | 'Lucia'
                  | 'Lupe'
                  | 'Mads'
                  | 'Maja'
                  | 'Marlene'
                  | 'Mathieu'
                  | 'Matthew'
                  | 'Maxim'
                  | 'Mia'
                  | 'Miguel'
                  | 'Mizuki'
                  | 'Naja'
                  | 'Nicole'
                  | 'Olivia'
                  | 'Penelope'
                  | 'Raveena'
                  | 'Ricardo'
                  | 'Ruben'
                  | 'Russell'
                  | 'Salli'
                  | 'Seoyeon'
                  | 'Takumi'
                  | 'Tatyana'
                  | 'Vicki'
                  | 'Vitoria'
                  | 'Zeina'
                  | 'Zhiyu'
                  | 'Aria'
                  | 'Ayanda'
                  | 'Arlet'
                  | 'Hannah'
                  | 'Arthur'
                  | 'Daniel'
                  | 'Liam'
                  | 'Pedro'
                  | 'Kajal'
                  | 'Hiujin'
                  | 'Laura'
                  | 'Elin'
                  | 'Ida'
                  | 'Suvi'
                  | 'Ola'
                  | 'Hala'
                  | 'Andres'
                  | 'Sergio'
                  | 'Remi'
                  | 'Adriano'
                  | 'Thiago'
                  | 'Ruth'
                  | 'Stephen'
                  | 'Kazuha'
                  | 'Tomoko'
                  | 'Niamh'
                  | 'Sofie'
                  | 'Lisa'
                  | 'Isabelle'
              }
            }
            output: InvalidSampleRateException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Engine?: 'standard' | 'neural' | undefined
                LanguageCode?:
                  | 'arb'
                  | 'cmn-CN'
                  | 'cy-GB'
                  | 'da-DK'
                  | 'de-DE'
                  | 'en-AU'
                  | 'en-GB'
                  | 'en-GB-WLS'
                  | 'en-IN'
                  | 'en-US'
                  | 'es-ES'
                  | 'es-MX'
                  | 'es-US'
                  | 'fr-CA'
                  | 'fr-FR'
                  | 'is-IS'
                  | 'it-IT'
                  | 'ja-JP'
                  | 'hi-IN'
                  | 'ko-KR'
                  | 'nb-NO'
                  | 'nl-NL'
                  | 'pl-PL'
                  | 'pt-BR'
                  | 'pt-PT'
                  | 'ro-RO'
                  | 'ru-RU'
                  | 'sv-SE'
                  | 'tr-TR'
                  | 'en-NZ'
                  | 'en-ZA'
                  | 'ca-ES'
                  | 'de-AT'
                  | 'yue-CN'
                  | 'ar-AE'
                  | 'fi-FI'
                  | 'en-IE'
                  | 'nl-BE'
                  | 'fr-BE'
                  | undefined
                LexiconNames?: LexiconName[] | undefined
                OutputFormat: 'json' | 'mp3' | 'ogg_vorbis' | 'pcm'
                OutputS3BucketName: string
                OutputS3KeyPrefix?: string | undefined
                SampleRate?: string | undefined
                SnsTopicArn?: string | undefined
                SpeechMarkTypes?: SpeechMarkType[] | undefined
                Text: string
                TextType?: 'ssml' | 'text' | undefined
                VoiceId:
                  | 'Aditi'
                  | 'Amy'
                  | 'Astrid'
                  | 'Bianca'
                  | 'Brian'
                  | 'Camila'
                  | 'Carla'
                  | 'Carmen'
                  | 'Celine'
                  | 'Chantal'
                  | 'Conchita'
                  | 'Cristiano'
                  | 'Dora'
                  | 'Emma'
                  | 'Enrique'
                  | 'Ewa'
                  | 'Filiz'
                  | 'Gabrielle'
                  | 'Geraint'
                  | 'Giorgio'
                  | 'Gwyneth'
                  | 'Hans'
                  | 'Ines'
                  | 'Ivy'
                  | 'Jacek'
                  | 'Jan'
                  | 'Joanna'
                  | 'Joey'
                  | 'Justin'
                  | 'Karl'
                  | 'Kendra'
                  | 'Kevin'
                  | 'Kimberly'
                  | 'Lea'
                  | 'Liv'
                  | 'Lotte'
                  | 'Lucia'
                  | 'Lupe'
                  | 'Mads'
                  | 'Maja'
                  | 'Marlene'
                  | 'Mathieu'
                  | 'Matthew'
                  | 'Maxim'
                  | 'Mia'
                  | 'Miguel'
                  | 'Mizuki'
                  | 'Naja'
                  | 'Nicole'
                  | 'Olivia'
                  | 'Penelope'
                  | 'Raveena'
                  | 'Ricardo'
                  | 'Ruben'
                  | 'Russell'
                  | 'Salli'
                  | 'Seoyeon'
                  | 'Takumi'
                  | 'Tatyana'
                  | 'Vicki'
                  | 'Vitoria'
                  | 'Zeina'
                  | 'Zhiyu'
                  | 'Aria'
                  | 'Ayanda'
                  | 'Arlet'
                  | 'Hannah'
                  | 'Arthur'
                  | 'Daniel'
                  | 'Liam'
                  | 'Pedro'
                  | 'Kajal'
                  | 'Hiujin'
                  | 'Laura'
                  | 'Elin'
                  | 'Ida'
                  | 'Suvi'
                  | 'Ola'
                  | 'Hala'
                  | 'Andres'
                  | 'Sergio'
                  | 'Remi'
                  | 'Adriano'
                  | 'Thiago'
                  | 'Ruth'
                  | 'Stephen'
                  | 'Kazuha'
                  | 'Tomoko'
                  | 'Niamh'
                  | 'Sofie'
                  | 'Lisa'
                  | 'Isabelle'
              }
            }
            output: InvalidSnsTopicArnException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Engine?: 'standard' | 'neural' | undefined
                LanguageCode?:
                  | 'arb'
                  | 'cmn-CN'
                  | 'cy-GB'
                  | 'da-DK'
                  | 'de-DE'
                  | 'en-AU'
                  | 'en-GB'
                  | 'en-GB-WLS'
                  | 'en-IN'
                  | 'en-US'
                  | 'es-ES'
                  | 'es-MX'
                  | 'es-US'
                  | 'fr-CA'
                  | 'fr-FR'
                  | 'is-IS'
                  | 'it-IT'
                  | 'ja-JP'
                  | 'hi-IN'
                  | 'ko-KR'
                  | 'nb-NO'
                  | 'nl-NL'
                  | 'pl-PL'
                  | 'pt-BR'
                  | 'pt-PT'
                  | 'ro-RO'
                  | 'ru-RU'
                  | 'sv-SE'
                  | 'tr-TR'
                  | 'en-NZ'
                  | 'en-ZA'
                  | 'ca-ES'
                  | 'de-AT'
                  | 'yue-CN'
                  | 'ar-AE'
                  | 'fi-FI'
                  | 'en-IE'
                  | 'nl-BE'
                  | 'fr-BE'
                  | undefined
                LexiconNames?: LexiconName[] | undefined
                OutputFormat: 'json' | 'mp3' | 'ogg_vorbis' | 'pcm'
                OutputS3BucketName: string
                OutputS3KeyPrefix?: string | undefined
                SampleRate?: string | undefined
                SnsTopicArn?: string | undefined
                SpeechMarkTypes?: SpeechMarkType[] | undefined
                Text: string
                TextType?: 'ssml' | 'text' | undefined
                VoiceId:
                  | 'Aditi'
                  | 'Amy'
                  | 'Astrid'
                  | 'Bianca'
                  | 'Brian'
                  | 'Camila'
                  | 'Carla'
                  | 'Carmen'
                  | 'Celine'
                  | 'Chantal'
                  | 'Conchita'
                  | 'Cristiano'
                  | 'Dora'
                  | 'Emma'
                  | 'Enrique'
                  | 'Ewa'
                  | 'Filiz'
                  | 'Gabrielle'
                  | 'Geraint'
                  | 'Giorgio'
                  | 'Gwyneth'
                  | 'Hans'
                  | 'Ines'
                  | 'Ivy'
                  | 'Jacek'
                  | 'Jan'
                  | 'Joanna'
                  | 'Joey'
                  | 'Justin'
                  | 'Karl'
                  | 'Kendra'
                  | 'Kevin'
                  | 'Kimberly'
                  | 'Lea'
                  | 'Liv'
                  | 'Lotte'
                  | 'Lucia'
                  | 'Lupe'
                  | 'Mads'
                  | 'Maja'
                  | 'Marlene'
                  | 'Mathieu'
                  | 'Matthew'
                  | 'Maxim'
                  | 'Mia'
                  | 'Miguel'
                  | 'Mizuki'
                  | 'Naja'
                  | 'Nicole'
                  | 'Olivia'
                  | 'Penelope'
                  | 'Raveena'
                  | 'Ricardo'
                  | 'Ruben'
                  | 'Russell'
                  | 'Salli'
                  | 'Seoyeon'
                  | 'Takumi'
                  | 'Tatyana'
                  | 'Vicki'
                  | 'Vitoria'
                  | 'Zeina'
                  | 'Zhiyu'
                  | 'Aria'
                  | 'Ayanda'
                  | 'Arlet'
                  | 'Hannah'
                  | 'Arthur'
                  | 'Daniel'
                  | 'Liam'
                  | 'Pedro'
                  | 'Kajal'
                  | 'Hiujin'
                  | 'Laura'
                  | 'Elin'
                  | 'Ida'
                  | 'Suvi'
                  | 'Ola'
                  | 'Hala'
                  | 'Andres'
                  | 'Sergio'
                  | 'Remi'
                  | 'Adriano'
                  | 'Thiago'
                  | 'Ruth'
                  | 'Stephen'
                  | 'Kazuha'
                  | 'Tomoko'
                  | 'Niamh'
                  | 'Sofie'
                  | 'Lisa'
                  | 'Isabelle'
              }
            }
            output: InvalidSsmlException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Engine?: 'standard' | 'neural' | undefined
                LanguageCode?:
                  | 'arb'
                  | 'cmn-CN'
                  | 'cy-GB'
                  | 'da-DK'
                  | 'de-DE'
                  | 'en-AU'
                  | 'en-GB'
                  | 'en-GB-WLS'
                  | 'en-IN'
                  | 'en-US'
                  | 'es-ES'
                  | 'es-MX'
                  | 'es-US'
                  | 'fr-CA'
                  | 'fr-FR'
                  | 'is-IS'
                  | 'it-IT'
                  | 'ja-JP'
                  | 'hi-IN'
                  | 'ko-KR'
                  | 'nb-NO'
                  | 'nl-NL'
                  | 'pl-PL'
                  | 'pt-BR'
                  | 'pt-PT'
                  | 'ro-RO'
                  | 'ru-RU'
                  | 'sv-SE'
                  | 'tr-TR'
                  | 'en-NZ'
                  | 'en-ZA'
                  | 'ca-ES'
                  | 'de-AT'
                  | 'yue-CN'
                  | 'ar-AE'
                  | 'fi-FI'
                  | 'en-IE'
                  | 'nl-BE'
                  | 'fr-BE'
                  | undefined
                LexiconNames?: LexiconName[] | undefined
                OutputFormat: 'json' | 'mp3' | 'ogg_vorbis' | 'pcm'
                OutputS3BucketName: string
                OutputS3KeyPrefix?: string | undefined
                SampleRate?: string | undefined
                SnsTopicArn?: string | undefined
                SpeechMarkTypes?: SpeechMarkType[] | undefined
                Text: string
                TextType?: 'ssml' | 'text' | undefined
                VoiceId:
                  | 'Aditi'
                  | 'Amy'
                  | 'Astrid'
                  | 'Bianca'
                  | 'Brian'
                  | 'Camila'
                  | 'Carla'
                  | 'Carmen'
                  | 'Celine'
                  | 'Chantal'
                  | 'Conchita'
                  | 'Cristiano'
                  | 'Dora'
                  | 'Emma'
                  | 'Enrique'
                  | 'Ewa'
                  | 'Filiz'
                  | 'Gabrielle'
                  | 'Geraint'
                  | 'Giorgio'
                  | 'Gwyneth'
                  | 'Hans'
                  | 'Ines'
                  | 'Ivy'
                  | 'Jacek'
                  | 'Jan'
                  | 'Joanna'
                  | 'Joey'
                  | 'Justin'
                  | 'Karl'
                  | 'Kendra'
                  | 'Kevin'
                  | 'Kimberly'
                  | 'Lea'
                  | 'Liv'
                  | 'Lotte'
                  | 'Lucia'
                  | 'Lupe'
                  | 'Mads'
                  | 'Maja'
                  | 'Marlene'
                  | 'Mathieu'
                  | 'Matthew'
                  | 'Maxim'
                  | 'Mia'
                  | 'Miguel'
                  | 'Mizuki'
                  | 'Naja'
                  | 'Nicole'
                  | 'Olivia'
                  | 'Penelope'
                  | 'Raveena'
                  | 'Ricardo'
                  | 'Ruben'
                  | 'Russell'
                  | 'Salli'
                  | 'Seoyeon'
                  | 'Takumi'
                  | 'Tatyana'
                  | 'Vicki'
                  | 'Vitoria'
                  | 'Zeina'
                  | 'Zhiyu'
                  | 'Aria'
                  | 'Ayanda'
                  | 'Arlet'
                  | 'Hannah'
                  | 'Arthur'
                  | 'Daniel'
                  | 'Liam'
                  | 'Pedro'
                  | 'Kajal'
                  | 'Hiujin'
                  | 'Laura'
                  | 'Elin'
                  | 'Ida'
                  | 'Suvi'
                  | 'Ola'
                  | 'Hala'
                  | 'Andres'
                  | 'Sergio'
                  | 'Remi'
                  | 'Adriano'
                  | 'Thiago'
                  | 'Ruth'
                  | 'Stephen'
                  | 'Kazuha'
                  | 'Tomoko'
                  | 'Niamh'
                  | 'Sofie'
                  | 'Lisa'
                  | 'Isabelle'
              }
            }
            output: EngineNotSupportedException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Engine?: 'standard' | 'neural' | undefined
                LanguageCode?:
                  | 'arb'
                  | 'cmn-CN'
                  | 'cy-GB'
                  | 'da-DK'
                  | 'de-DE'
                  | 'en-AU'
                  | 'en-GB'
                  | 'en-GB-WLS'
                  | 'en-IN'
                  | 'en-US'
                  | 'es-ES'
                  | 'es-MX'
                  | 'es-US'
                  | 'fr-CA'
                  | 'fr-FR'
                  | 'is-IS'
                  | 'it-IT'
                  | 'ja-JP'
                  | 'hi-IN'
                  | 'ko-KR'
                  | 'nb-NO'
                  | 'nl-NL'
                  | 'pl-PL'
                  | 'pt-BR'
                  | 'pt-PT'
                  | 'ro-RO'
                  | 'ru-RU'
                  | 'sv-SE'
                  | 'tr-TR'
                  | 'en-NZ'
                  | 'en-ZA'
                  | 'ca-ES'
                  | 'de-AT'
                  | 'yue-CN'
                  | 'ar-AE'
                  | 'fi-FI'
                  | 'en-IE'
                  | 'nl-BE'
                  | 'fr-BE'
                  | undefined
                LexiconNames?: LexiconName[] | undefined
                OutputFormat: 'json' | 'mp3' | 'ogg_vorbis' | 'pcm'
                OutputS3BucketName: string
                OutputS3KeyPrefix?: string | undefined
                SampleRate?: string | undefined
                SnsTopicArn?: string | undefined
                SpeechMarkTypes?: SpeechMarkType[] | undefined
                Text: string
                TextType?: 'ssml' | 'text' | undefined
                VoiceId:
                  | 'Aditi'
                  | 'Amy'
                  | 'Astrid'
                  | 'Bianca'
                  | 'Brian'
                  | 'Camila'
                  | 'Carla'
                  | 'Carmen'
                  | 'Celine'
                  | 'Chantal'
                  | 'Conchita'
                  | 'Cristiano'
                  | 'Dora'
                  | 'Emma'
                  | 'Enrique'
                  | 'Ewa'
                  | 'Filiz'
                  | 'Gabrielle'
                  | 'Geraint'
                  | 'Giorgio'
                  | 'Gwyneth'
                  | 'Hans'
                  | 'Ines'
                  | 'Ivy'
                  | 'Jacek'
                  | 'Jan'
                  | 'Joanna'
                  | 'Joey'
                  | 'Justin'
                  | 'Karl'
                  | 'Kendra'
                  | 'Kevin'
                  | 'Kimberly'
                  | 'Lea'
                  | 'Liv'
                  | 'Lotte'
                  | 'Lucia'
                  | 'Lupe'
                  | 'Mads'
                  | 'Maja'
                  | 'Marlene'
                  | 'Mathieu'
                  | 'Matthew'
                  | 'Maxim'
                  | 'Mia'
                  | 'Miguel'
                  | 'Mizuki'
                  | 'Naja'
                  | 'Nicole'
                  | 'Olivia'
                  | 'Penelope'
                  | 'Raveena'
                  | 'Ricardo'
                  | 'Ruben'
                  | 'Russell'
                  | 'Salli'
                  | 'Seoyeon'
                  | 'Takumi'
                  | 'Tatyana'
                  | 'Vicki'
                  | 'Vitoria'
                  | 'Zeina'
                  | 'Zhiyu'
                  | 'Aria'
                  | 'Ayanda'
                  | 'Arlet'
                  | 'Hannah'
                  | 'Arthur'
                  | 'Daniel'
                  | 'Liam'
                  | 'Pedro'
                  | 'Kajal'
                  | 'Hiujin'
                  | 'Laura'
                  | 'Elin'
                  | 'Ida'
                  | 'Suvi'
                  | 'Ola'
                  | 'Hala'
                  | 'Andres'
                  | 'Sergio'
                  | 'Remi'
                  | 'Adriano'
                  | 'Thiago'
                  | 'Ruth'
                  | 'Stephen'
                  | 'Kazuha'
                  | 'Tomoko'
                  | 'Niamh'
                  | 'Sofie'
                  | 'Lisa'
                  | 'Isabelle'
              }
            }
            output: LexiconNotFoundException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Engine?: 'standard' | 'neural' | undefined
                LanguageCode?:
                  | 'arb'
                  | 'cmn-CN'
                  | 'cy-GB'
                  | 'da-DK'
                  | 'de-DE'
                  | 'en-AU'
                  | 'en-GB'
                  | 'en-GB-WLS'
                  | 'en-IN'
                  | 'en-US'
                  | 'es-ES'
                  | 'es-MX'
                  | 'es-US'
                  | 'fr-CA'
                  | 'fr-FR'
                  | 'is-IS'
                  | 'it-IT'
                  | 'ja-JP'
                  | 'hi-IN'
                  | 'ko-KR'
                  | 'nb-NO'
                  | 'nl-NL'
                  | 'pl-PL'
                  | 'pt-BR'
                  | 'pt-PT'
                  | 'ro-RO'
                  | 'ru-RU'
                  | 'sv-SE'
                  | 'tr-TR'
                  | 'en-NZ'
                  | 'en-ZA'
                  | 'ca-ES'
                  | 'de-AT'
                  | 'yue-CN'
                  | 'ar-AE'
                  | 'fi-FI'
                  | 'en-IE'
                  | 'nl-BE'
                  | 'fr-BE'
                  | undefined
                LexiconNames?: LexiconName[] | undefined
                OutputFormat: 'json' | 'mp3' | 'ogg_vorbis' | 'pcm'
                OutputS3BucketName: string
                OutputS3KeyPrefix?: string | undefined
                SampleRate?: string | undefined
                SnsTopicArn?: string | undefined
                SpeechMarkTypes?: SpeechMarkType[] | undefined
                Text: string
                TextType?: 'ssml' | 'text' | undefined
                VoiceId:
                  | 'Aditi'
                  | 'Amy'
                  | 'Astrid'
                  | 'Bianca'
                  | 'Brian'
                  | 'Camila'
                  | 'Carla'
                  | 'Carmen'
                  | 'Celine'
                  | 'Chantal'
                  | 'Conchita'
                  | 'Cristiano'
                  | 'Dora'
                  | 'Emma'
                  | 'Enrique'
                  | 'Ewa'
                  | 'Filiz'
                  | 'Gabrielle'
                  | 'Geraint'
                  | 'Giorgio'
                  | 'Gwyneth'
                  | 'Hans'
                  | 'Ines'
                  | 'Ivy'
                  | 'Jacek'
                  | 'Jan'
                  | 'Joanna'
                  | 'Joey'
                  | 'Justin'
                  | 'Karl'
                  | 'Kendra'
                  | 'Kevin'
                  | 'Kimberly'
                  | 'Lea'
                  | 'Liv'
                  | 'Lotte'
                  | 'Lucia'
                  | 'Lupe'
                  | 'Mads'
                  | 'Maja'
                  | 'Marlene'
                  | 'Mathieu'
                  | 'Matthew'
                  | 'Maxim'
                  | 'Mia'
                  | 'Miguel'
                  | 'Mizuki'
                  | 'Naja'
                  | 'Nicole'
                  | 'Olivia'
                  | 'Penelope'
                  | 'Raveena'
                  | 'Ricardo'
                  | 'Ruben'
                  | 'Russell'
                  | 'Salli'
                  | 'Seoyeon'
                  | 'Takumi'
                  | 'Tatyana'
                  | 'Vicki'
                  | 'Vitoria'
                  | 'Zeina'
                  | 'Zhiyu'
                  | 'Aria'
                  | 'Ayanda'
                  | 'Arlet'
                  | 'Hannah'
                  | 'Arthur'
                  | 'Daniel'
                  | 'Liam'
                  | 'Pedro'
                  | 'Kajal'
                  | 'Hiujin'
                  | 'Laura'
                  | 'Elin'
                  | 'Ida'
                  | 'Suvi'
                  | 'Ola'
                  | 'Hala'
                  | 'Andres'
                  | 'Sergio'
                  | 'Remi'
                  | 'Adriano'
                  | 'Thiago'
                  | 'Ruth'
                  | 'Stephen'
                  | 'Kazuha'
                  | 'Tomoko'
                  | 'Niamh'
                  | 'Sofie'
                  | 'Lisa'
                  | 'Isabelle'
              }
            }
            output: ServiceFailureException
            outputFormat: 'json'
            status: 488
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Engine?: 'standard' | 'neural' | undefined
                LanguageCode?:
                  | 'arb'
                  | 'cmn-CN'
                  | 'cy-GB'
                  | 'da-DK'
                  | 'de-DE'
                  | 'en-AU'
                  | 'en-GB'
                  | 'en-GB-WLS'
                  | 'en-IN'
                  | 'en-US'
                  | 'es-ES'
                  | 'es-MX'
                  | 'es-US'
                  | 'fr-CA'
                  | 'fr-FR'
                  | 'is-IS'
                  | 'it-IT'
                  | 'ja-JP'
                  | 'hi-IN'
                  | 'ko-KR'
                  | 'nb-NO'
                  | 'nl-NL'
                  | 'pl-PL'
                  | 'pt-BR'
                  | 'pt-PT'
                  | 'ro-RO'
                  | 'ru-RU'
                  | 'sv-SE'
                  | 'tr-TR'
                  | 'en-NZ'
                  | 'en-ZA'
                  | 'ca-ES'
                  | 'de-AT'
                  | 'yue-CN'
                  | 'ar-AE'
                  | 'fi-FI'
                  | 'en-IE'
                  | 'nl-BE'
                  | 'fr-BE'
                  | undefined
                LexiconNames?: LexiconName[] | undefined
                OutputFormat: 'json' | 'mp3' | 'ogg_vorbis' | 'pcm'
                OutputS3BucketName: string
                OutputS3KeyPrefix?: string | undefined
                SampleRate?: string | undefined
                SnsTopicArn?: string | undefined
                SpeechMarkTypes?: SpeechMarkType[] | undefined
                Text: string
                TextType?: 'ssml' | 'text' | undefined
                VoiceId:
                  | 'Aditi'
                  | 'Amy'
                  | 'Astrid'
                  | 'Bianca'
                  | 'Brian'
                  | 'Camila'
                  | 'Carla'
                  | 'Carmen'
                  | 'Celine'
                  | 'Chantal'
                  | 'Conchita'
                  | 'Cristiano'
                  | 'Dora'
                  | 'Emma'
                  | 'Enrique'
                  | 'Ewa'
                  | 'Filiz'
                  | 'Gabrielle'
                  | 'Geraint'
                  | 'Giorgio'
                  | 'Gwyneth'
                  | 'Hans'
                  | 'Ines'
                  | 'Ivy'
                  | 'Jacek'
                  | 'Jan'
                  | 'Joanna'
                  | 'Joey'
                  | 'Justin'
                  | 'Karl'
                  | 'Kendra'
                  | 'Kevin'
                  | 'Kimberly'
                  | 'Lea'
                  | 'Liv'
                  | 'Lotte'
                  | 'Lucia'
                  | 'Lupe'
                  | 'Mads'
                  | 'Maja'
                  | 'Marlene'
                  | 'Mathieu'
                  | 'Matthew'
                  | 'Maxim'
                  | 'Mia'
                  | 'Miguel'
                  | 'Mizuki'
                  | 'Naja'
                  | 'Nicole'
                  | 'Olivia'
                  | 'Penelope'
                  | 'Raveena'
                  | 'Ricardo'
                  | 'Ruben'
                  | 'Russell'
                  | 'Salli'
                  | 'Seoyeon'
                  | 'Takumi'
                  | 'Tatyana'
                  | 'Vicki'
                  | 'Vitoria'
                  | 'Zeina'
                  | 'Zhiyu'
                  | 'Aria'
                  | 'Ayanda'
                  | 'Arlet'
                  | 'Hannah'
                  | 'Arthur'
                  | 'Daniel'
                  | 'Liam'
                  | 'Pedro'
                  | 'Kajal'
                  | 'Hiujin'
                  | 'Laura'
                  | 'Elin'
                  | 'Ida'
                  | 'Suvi'
                  | 'Ola'
                  | 'Hala'
                  | 'Andres'
                  | 'Sergio'
                  | 'Remi'
                  | 'Adriano'
                  | 'Thiago'
                  | 'Ruth'
                  | 'Stephen'
                  | 'Kazuha'
                  | 'Tomoko'
                  | 'Niamh'
                  | 'Sofie'
                  | 'Lisa'
                  | 'Isabelle'
              }
            }
            output: MarksNotSupportedForFormatException
            outputFormat: 'json'
            status: 489
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Engine?: 'standard' | 'neural' | undefined
                LanguageCode?:
                  | 'arb'
                  | 'cmn-CN'
                  | 'cy-GB'
                  | 'da-DK'
                  | 'de-DE'
                  | 'en-AU'
                  | 'en-GB'
                  | 'en-GB-WLS'
                  | 'en-IN'
                  | 'en-US'
                  | 'es-ES'
                  | 'es-MX'
                  | 'es-US'
                  | 'fr-CA'
                  | 'fr-FR'
                  | 'is-IS'
                  | 'it-IT'
                  | 'ja-JP'
                  | 'hi-IN'
                  | 'ko-KR'
                  | 'nb-NO'
                  | 'nl-NL'
                  | 'pl-PL'
                  | 'pt-BR'
                  | 'pt-PT'
                  | 'ro-RO'
                  | 'ru-RU'
                  | 'sv-SE'
                  | 'tr-TR'
                  | 'en-NZ'
                  | 'en-ZA'
                  | 'ca-ES'
                  | 'de-AT'
                  | 'yue-CN'
                  | 'ar-AE'
                  | 'fi-FI'
                  | 'en-IE'
                  | 'nl-BE'
                  | 'fr-BE'
                  | undefined
                LexiconNames?: LexiconName[] | undefined
                OutputFormat: 'json' | 'mp3' | 'ogg_vorbis' | 'pcm'
                OutputS3BucketName: string
                OutputS3KeyPrefix?: string | undefined
                SampleRate?: string | undefined
                SnsTopicArn?: string | undefined
                SpeechMarkTypes?: SpeechMarkType[] | undefined
                Text: string
                TextType?: 'ssml' | 'text' | undefined
                VoiceId:
                  | 'Aditi'
                  | 'Amy'
                  | 'Astrid'
                  | 'Bianca'
                  | 'Brian'
                  | 'Camila'
                  | 'Carla'
                  | 'Carmen'
                  | 'Celine'
                  | 'Chantal'
                  | 'Conchita'
                  | 'Cristiano'
                  | 'Dora'
                  | 'Emma'
                  | 'Enrique'
                  | 'Ewa'
                  | 'Filiz'
                  | 'Gabrielle'
                  | 'Geraint'
                  | 'Giorgio'
                  | 'Gwyneth'
                  | 'Hans'
                  | 'Ines'
                  | 'Ivy'
                  | 'Jacek'
                  | 'Jan'
                  | 'Joanna'
                  | 'Joey'
                  | 'Justin'
                  | 'Karl'
                  | 'Kendra'
                  | 'Kevin'
                  | 'Kimberly'
                  | 'Lea'
                  | 'Liv'
                  | 'Lotte'
                  | 'Lucia'
                  | 'Lupe'
                  | 'Mads'
                  | 'Maja'
                  | 'Marlene'
                  | 'Mathieu'
                  | 'Matthew'
                  | 'Maxim'
                  | 'Mia'
                  | 'Miguel'
                  | 'Mizuki'
                  | 'Naja'
                  | 'Nicole'
                  | 'Olivia'
                  | 'Penelope'
                  | 'Raveena'
                  | 'Ricardo'
                  | 'Ruben'
                  | 'Russell'
                  | 'Salli'
                  | 'Seoyeon'
                  | 'Takumi'
                  | 'Tatyana'
                  | 'Vicki'
                  | 'Vitoria'
                  | 'Zeina'
                  | 'Zhiyu'
                  | 'Aria'
                  | 'Ayanda'
                  | 'Arlet'
                  | 'Hannah'
                  | 'Arthur'
                  | 'Daniel'
                  | 'Liam'
                  | 'Pedro'
                  | 'Kajal'
                  | 'Hiujin'
                  | 'Laura'
                  | 'Elin'
                  | 'Ida'
                  | 'Suvi'
                  | 'Ola'
                  | 'Hala'
                  | 'Andres'
                  | 'Sergio'
                  | 'Remi'
                  | 'Adriano'
                  | 'Thiago'
                  | 'Ruth'
                  | 'Stephen'
                  | 'Kazuha'
                  | 'Tomoko'
                  | 'Niamh'
                  | 'Sofie'
                  | 'Lisa'
                  | 'Isabelle'
              }
            }
            output: SsmlMarksNotSupportedForTextTypeException
            outputFormat: 'json'
            status: 490
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Engine?: 'standard' | 'neural' | undefined
                LanguageCode?:
                  | 'arb'
                  | 'cmn-CN'
                  | 'cy-GB'
                  | 'da-DK'
                  | 'de-DE'
                  | 'en-AU'
                  | 'en-GB'
                  | 'en-GB-WLS'
                  | 'en-IN'
                  | 'en-US'
                  | 'es-ES'
                  | 'es-MX'
                  | 'es-US'
                  | 'fr-CA'
                  | 'fr-FR'
                  | 'is-IS'
                  | 'it-IT'
                  | 'ja-JP'
                  | 'hi-IN'
                  | 'ko-KR'
                  | 'nb-NO'
                  | 'nl-NL'
                  | 'pl-PL'
                  | 'pt-BR'
                  | 'pt-PT'
                  | 'ro-RO'
                  | 'ru-RU'
                  | 'sv-SE'
                  | 'tr-TR'
                  | 'en-NZ'
                  | 'en-ZA'
                  | 'ca-ES'
                  | 'de-AT'
                  | 'yue-CN'
                  | 'ar-AE'
                  | 'fi-FI'
                  | 'en-IE'
                  | 'nl-BE'
                  | 'fr-BE'
                  | undefined
                LexiconNames?: LexiconName[] | undefined
                OutputFormat: 'json' | 'mp3' | 'ogg_vorbis' | 'pcm'
                OutputS3BucketName: string
                OutputS3KeyPrefix?: string | undefined
                SampleRate?: string | undefined
                SnsTopicArn?: string | undefined
                SpeechMarkTypes?: SpeechMarkType[] | undefined
                Text: string
                TextType?: 'ssml' | 'text' | undefined
                VoiceId:
                  | 'Aditi'
                  | 'Amy'
                  | 'Astrid'
                  | 'Bianca'
                  | 'Brian'
                  | 'Camila'
                  | 'Carla'
                  | 'Carmen'
                  | 'Celine'
                  | 'Chantal'
                  | 'Conchita'
                  | 'Cristiano'
                  | 'Dora'
                  | 'Emma'
                  | 'Enrique'
                  | 'Ewa'
                  | 'Filiz'
                  | 'Gabrielle'
                  | 'Geraint'
                  | 'Giorgio'
                  | 'Gwyneth'
                  | 'Hans'
                  | 'Ines'
                  | 'Ivy'
                  | 'Jacek'
                  | 'Jan'
                  | 'Joanna'
                  | 'Joey'
                  | 'Justin'
                  | 'Karl'
                  | 'Kendra'
                  | 'Kevin'
                  | 'Kimberly'
                  | 'Lea'
                  | 'Liv'
                  | 'Lotte'
                  | 'Lucia'
                  | 'Lupe'
                  | 'Mads'
                  | 'Maja'
                  | 'Marlene'
                  | 'Mathieu'
                  | 'Matthew'
                  | 'Maxim'
                  | 'Mia'
                  | 'Miguel'
                  | 'Mizuki'
                  | 'Naja'
                  | 'Nicole'
                  | 'Olivia'
                  | 'Penelope'
                  | 'Raveena'
                  | 'Ricardo'
                  | 'Ruben'
                  | 'Russell'
                  | 'Salli'
                  | 'Seoyeon'
                  | 'Takumi'
                  | 'Tatyana'
                  | 'Vicki'
                  | 'Vitoria'
                  | 'Zeina'
                  | 'Zhiyu'
                  | 'Aria'
                  | 'Ayanda'
                  | 'Arlet'
                  | 'Hannah'
                  | 'Arthur'
                  | 'Daniel'
                  | 'Liam'
                  | 'Pedro'
                  | 'Kajal'
                  | 'Hiujin'
                  | 'Laura'
                  | 'Elin'
                  | 'Ida'
                  | 'Suvi'
                  | 'Ola'
                  | 'Hala'
                  | 'Andres'
                  | 'Sergio'
                  | 'Remi'
                  | 'Adriano'
                  | 'Thiago'
                  | 'Ruth'
                  | 'Stephen'
                  | 'Kazuha'
                  | 'Tomoko'
                  | 'Niamh'
                  | 'Sofie'
                  | 'Lisa'
                  | 'Isabelle'
              }
            }
            output: LanguageNotSupportedException
            outputFormat: 'json'
            status: 491
          }
    }
  } & {
    '/v1/speech': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Engine?: 'standard' | 'neural' | undefined
                LanguageCode?:
                  | 'arb'
                  | 'cmn-CN'
                  | 'cy-GB'
                  | 'da-DK'
                  | 'de-DE'
                  | 'en-AU'
                  | 'en-GB'
                  | 'en-GB-WLS'
                  | 'en-IN'
                  | 'en-US'
                  | 'es-ES'
                  | 'es-MX'
                  | 'es-US'
                  | 'fr-CA'
                  | 'fr-FR'
                  | 'is-IS'
                  | 'it-IT'
                  | 'ja-JP'
                  | 'hi-IN'
                  | 'ko-KR'
                  | 'nb-NO'
                  | 'nl-NL'
                  | 'pl-PL'
                  | 'pt-BR'
                  | 'pt-PT'
                  | 'ro-RO'
                  | 'ru-RU'
                  | 'sv-SE'
                  | 'tr-TR'
                  | 'en-NZ'
                  | 'en-ZA'
                  | 'ca-ES'
                  | 'de-AT'
                  | 'yue-CN'
                  | 'ar-AE'
                  | 'fi-FI'
                  | 'en-IE'
                  | 'nl-BE'
                  | 'fr-BE'
                  | undefined
                LexiconNames?: LexiconName[] | undefined
                OutputFormat: 'json' | 'mp3' | 'ogg_vorbis' | 'pcm'
                SampleRate?: string | undefined
                SpeechMarkTypes?: SpeechMarkType[] | undefined
                Text: string
                TextType?: 'ssml' | 'text' | undefined
                VoiceId:
                  | 'Aditi'
                  | 'Amy'
                  | 'Astrid'
                  | 'Bianca'
                  | 'Brian'
                  | 'Camila'
                  | 'Carla'
                  | 'Carmen'
                  | 'Celine'
                  | 'Chantal'
                  | 'Conchita'
                  | 'Cristiano'
                  | 'Dora'
                  | 'Emma'
                  | 'Enrique'
                  | 'Ewa'
                  | 'Filiz'
                  | 'Gabrielle'
                  | 'Geraint'
                  | 'Giorgio'
                  | 'Gwyneth'
                  | 'Hans'
                  | 'Ines'
                  | 'Ivy'
                  | 'Jacek'
                  | 'Jan'
                  | 'Joanna'
                  | 'Joey'
                  | 'Justin'
                  | 'Karl'
                  | 'Kendra'
                  | 'Kevin'
                  | 'Kimberly'
                  | 'Lea'
                  | 'Liv'
                  | 'Lotte'
                  | 'Lucia'
                  | 'Lupe'
                  | 'Mads'
                  | 'Maja'
                  | 'Marlene'
                  | 'Mathieu'
                  | 'Matthew'
                  | 'Maxim'
                  | 'Mia'
                  | 'Miguel'
                  | 'Mizuki'
                  | 'Naja'
                  | 'Nicole'
                  | 'Olivia'
                  | 'Penelope'
                  | 'Raveena'
                  | 'Ricardo'
                  | 'Ruben'
                  | 'Russell'
                  | 'Salli'
                  | 'Seoyeon'
                  | 'Takumi'
                  | 'Tatyana'
                  | 'Vicki'
                  | 'Vitoria'
                  | 'Zeina'
                  | 'Zhiyu'
                  | 'Aria'
                  | 'Ayanda'
                  | 'Arlet'
                  | 'Hannah'
                  | 'Arthur'
                  | 'Daniel'
                  | 'Liam'
                  | 'Pedro'
                  | 'Kajal'
                  | 'Hiujin'
                  | 'Laura'
                  | 'Elin'
                  | 'Ida'
                  | 'Suvi'
                  | 'Ola'
                  | 'Hala'
                  | 'Andres'
                  | 'Sergio'
                  | 'Remi'
                  | 'Adriano'
                  | 'Thiago'
                  | 'Ruth'
                  | 'Stephen'
                  | 'Kazuha'
                  | 'Tomoko'
                  | 'Niamh'
                  | 'Sofie'
                  | 'Lisa'
                  | 'Isabelle'
              }
            }
            output: SynthesizeSpeechOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Engine?: 'standard' | 'neural' | undefined
                LanguageCode?:
                  | 'arb'
                  | 'cmn-CN'
                  | 'cy-GB'
                  | 'da-DK'
                  | 'de-DE'
                  | 'en-AU'
                  | 'en-GB'
                  | 'en-GB-WLS'
                  | 'en-IN'
                  | 'en-US'
                  | 'es-ES'
                  | 'es-MX'
                  | 'es-US'
                  | 'fr-CA'
                  | 'fr-FR'
                  | 'is-IS'
                  | 'it-IT'
                  | 'ja-JP'
                  | 'hi-IN'
                  | 'ko-KR'
                  | 'nb-NO'
                  | 'nl-NL'
                  | 'pl-PL'
                  | 'pt-BR'
                  | 'pt-PT'
                  | 'ro-RO'
                  | 'ru-RU'
                  | 'sv-SE'
                  | 'tr-TR'
                  | 'en-NZ'
                  | 'en-ZA'
                  | 'ca-ES'
                  | 'de-AT'
                  | 'yue-CN'
                  | 'ar-AE'
                  | 'fi-FI'
                  | 'en-IE'
                  | 'nl-BE'
                  | 'fr-BE'
                  | undefined
                LexiconNames?: LexiconName[] | undefined
                OutputFormat: 'json' | 'mp3' | 'ogg_vorbis' | 'pcm'
                SampleRate?: string | undefined
                SpeechMarkTypes?: SpeechMarkType[] | undefined
                Text: string
                TextType?: 'ssml' | 'text' | undefined
                VoiceId:
                  | 'Aditi'
                  | 'Amy'
                  | 'Astrid'
                  | 'Bianca'
                  | 'Brian'
                  | 'Camila'
                  | 'Carla'
                  | 'Carmen'
                  | 'Celine'
                  | 'Chantal'
                  | 'Conchita'
                  | 'Cristiano'
                  | 'Dora'
                  | 'Emma'
                  | 'Enrique'
                  | 'Ewa'
                  | 'Filiz'
                  | 'Gabrielle'
                  | 'Geraint'
                  | 'Giorgio'
                  | 'Gwyneth'
                  | 'Hans'
                  | 'Ines'
                  | 'Ivy'
                  | 'Jacek'
                  | 'Jan'
                  | 'Joanna'
                  | 'Joey'
                  | 'Justin'
                  | 'Karl'
                  | 'Kendra'
                  | 'Kevin'
                  | 'Kimberly'
                  | 'Lea'
                  | 'Liv'
                  | 'Lotte'
                  | 'Lucia'
                  | 'Lupe'
                  | 'Mads'
                  | 'Maja'
                  | 'Marlene'
                  | 'Mathieu'
                  | 'Matthew'
                  | 'Maxim'
                  | 'Mia'
                  | 'Miguel'
                  | 'Mizuki'
                  | 'Naja'
                  | 'Nicole'
                  | 'Olivia'
                  | 'Penelope'
                  | 'Raveena'
                  | 'Ricardo'
                  | 'Ruben'
                  | 'Russell'
                  | 'Salli'
                  | 'Seoyeon'
                  | 'Takumi'
                  | 'Tatyana'
                  | 'Vicki'
                  | 'Vitoria'
                  | 'Zeina'
                  | 'Zhiyu'
                  | 'Aria'
                  | 'Ayanda'
                  | 'Arlet'
                  | 'Hannah'
                  | 'Arthur'
                  | 'Daniel'
                  | 'Liam'
                  | 'Pedro'
                  | 'Kajal'
                  | 'Hiujin'
                  | 'Laura'
                  | 'Elin'
                  | 'Ida'
                  | 'Suvi'
                  | 'Ola'
                  | 'Hala'
                  | 'Andres'
                  | 'Sergio'
                  | 'Remi'
                  | 'Adriano'
                  | 'Thiago'
                  | 'Ruth'
                  | 'Stephen'
                  | 'Kazuha'
                  | 'Tomoko'
                  | 'Niamh'
                  | 'Sofie'
                  | 'Lisa'
                  | 'Isabelle'
              }
            }
            output: TextLengthExceededException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Engine?: 'standard' | 'neural' | undefined
                LanguageCode?:
                  | 'arb'
                  | 'cmn-CN'
                  | 'cy-GB'
                  | 'da-DK'
                  | 'de-DE'
                  | 'en-AU'
                  | 'en-GB'
                  | 'en-GB-WLS'
                  | 'en-IN'
                  | 'en-US'
                  | 'es-ES'
                  | 'es-MX'
                  | 'es-US'
                  | 'fr-CA'
                  | 'fr-FR'
                  | 'is-IS'
                  | 'it-IT'
                  | 'ja-JP'
                  | 'hi-IN'
                  | 'ko-KR'
                  | 'nb-NO'
                  | 'nl-NL'
                  | 'pl-PL'
                  | 'pt-BR'
                  | 'pt-PT'
                  | 'ro-RO'
                  | 'ru-RU'
                  | 'sv-SE'
                  | 'tr-TR'
                  | 'en-NZ'
                  | 'en-ZA'
                  | 'ca-ES'
                  | 'de-AT'
                  | 'yue-CN'
                  | 'ar-AE'
                  | 'fi-FI'
                  | 'en-IE'
                  | 'nl-BE'
                  | 'fr-BE'
                  | undefined
                LexiconNames?: LexiconName[] | undefined
                OutputFormat: 'json' | 'mp3' | 'ogg_vorbis' | 'pcm'
                SampleRate?: string | undefined
                SpeechMarkTypes?: SpeechMarkType[] | undefined
                Text: string
                TextType?: 'ssml' | 'text' | undefined
                VoiceId:
                  | 'Aditi'
                  | 'Amy'
                  | 'Astrid'
                  | 'Bianca'
                  | 'Brian'
                  | 'Camila'
                  | 'Carla'
                  | 'Carmen'
                  | 'Celine'
                  | 'Chantal'
                  | 'Conchita'
                  | 'Cristiano'
                  | 'Dora'
                  | 'Emma'
                  | 'Enrique'
                  | 'Ewa'
                  | 'Filiz'
                  | 'Gabrielle'
                  | 'Geraint'
                  | 'Giorgio'
                  | 'Gwyneth'
                  | 'Hans'
                  | 'Ines'
                  | 'Ivy'
                  | 'Jacek'
                  | 'Jan'
                  | 'Joanna'
                  | 'Joey'
                  | 'Justin'
                  | 'Karl'
                  | 'Kendra'
                  | 'Kevin'
                  | 'Kimberly'
                  | 'Lea'
                  | 'Liv'
                  | 'Lotte'
                  | 'Lucia'
                  | 'Lupe'
                  | 'Mads'
                  | 'Maja'
                  | 'Marlene'
                  | 'Mathieu'
                  | 'Matthew'
                  | 'Maxim'
                  | 'Mia'
                  | 'Miguel'
                  | 'Mizuki'
                  | 'Naja'
                  | 'Nicole'
                  | 'Olivia'
                  | 'Penelope'
                  | 'Raveena'
                  | 'Ricardo'
                  | 'Ruben'
                  | 'Russell'
                  | 'Salli'
                  | 'Seoyeon'
                  | 'Takumi'
                  | 'Tatyana'
                  | 'Vicki'
                  | 'Vitoria'
                  | 'Zeina'
                  | 'Zhiyu'
                  | 'Aria'
                  | 'Ayanda'
                  | 'Arlet'
                  | 'Hannah'
                  | 'Arthur'
                  | 'Daniel'
                  | 'Liam'
                  | 'Pedro'
                  | 'Kajal'
                  | 'Hiujin'
                  | 'Laura'
                  | 'Elin'
                  | 'Ida'
                  | 'Suvi'
                  | 'Ola'
                  | 'Hala'
                  | 'Andres'
                  | 'Sergio'
                  | 'Remi'
                  | 'Adriano'
                  | 'Thiago'
                  | 'Ruth'
                  | 'Stephen'
                  | 'Kazuha'
                  | 'Tomoko'
                  | 'Niamh'
                  | 'Sofie'
                  | 'Lisa'
                  | 'Isabelle'
              }
            }
            output: InvalidSampleRateException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Engine?: 'standard' | 'neural' | undefined
                LanguageCode?:
                  | 'arb'
                  | 'cmn-CN'
                  | 'cy-GB'
                  | 'da-DK'
                  | 'de-DE'
                  | 'en-AU'
                  | 'en-GB'
                  | 'en-GB-WLS'
                  | 'en-IN'
                  | 'en-US'
                  | 'es-ES'
                  | 'es-MX'
                  | 'es-US'
                  | 'fr-CA'
                  | 'fr-FR'
                  | 'is-IS'
                  | 'it-IT'
                  | 'ja-JP'
                  | 'hi-IN'
                  | 'ko-KR'
                  | 'nb-NO'
                  | 'nl-NL'
                  | 'pl-PL'
                  | 'pt-BR'
                  | 'pt-PT'
                  | 'ro-RO'
                  | 'ru-RU'
                  | 'sv-SE'
                  | 'tr-TR'
                  | 'en-NZ'
                  | 'en-ZA'
                  | 'ca-ES'
                  | 'de-AT'
                  | 'yue-CN'
                  | 'ar-AE'
                  | 'fi-FI'
                  | 'en-IE'
                  | 'nl-BE'
                  | 'fr-BE'
                  | undefined
                LexiconNames?: LexiconName[] | undefined
                OutputFormat: 'json' | 'mp3' | 'ogg_vorbis' | 'pcm'
                SampleRate?: string | undefined
                SpeechMarkTypes?: SpeechMarkType[] | undefined
                Text: string
                TextType?: 'ssml' | 'text' | undefined
                VoiceId:
                  | 'Aditi'
                  | 'Amy'
                  | 'Astrid'
                  | 'Bianca'
                  | 'Brian'
                  | 'Camila'
                  | 'Carla'
                  | 'Carmen'
                  | 'Celine'
                  | 'Chantal'
                  | 'Conchita'
                  | 'Cristiano'
                  | 'Dora'
                  | 'Emma'
                  | 'Enrique'
                  | 'Ewa'
                  | 'Filiz'
                  | 'Gabrielle'
                  | 'Geraint'
                  | 'Giorgio'
                  | 'Gwyneth'
                  | 'Hans'
                  | 'Ines'
                  | 'Ivy'
                  | 'Jacek'
                  | 'Jan'
                  | 'Joanna'
                  | 'Joey'
                  | 'Justin'
                  | 'Karl'
                  | 'Kendra'
                  | 'Kevin'
                  | 'Kimberly'
                  | 'Lea'
                  | 'Liv'
                  | 'Lotte'
                  | 'Lucia'
                  | 'Lupe'
                  | 'Mads'
                  | 'Maja'
                  | 'Marlene'
                  | 'Mathieu'
                  | 'Matthew'
                  | 'Maxim'
                  | 'Mia'
                  | 'Miguel'
                  | 'Mizuki'
                  | 'Naja'
                  | 'Nicole'
                  | 'Olivia'
                  | 'Penelope'
                  | 'Raveena'
                  | 'Ricardo'
                  | 'Ruben'
                  | 'Russell'
                  | 'Salli'
                  | 'Seoyeon'
                  | 'Takumi'
                  | 'Tatyana'
                  | 'Vicki'
                  | 'Vitoria'
                  | 'Zeina'
                  | 'Zhiyu'
                  | 'Aria'
                  | 'Ayanda'
                  | 'Arlet'
                  | 'Hannah'
                  | 'Arthur'
                  | 'Daniel'
                  | 'Liam'
                  | 'Pedro'
                  | 'Kajal'
                  | 'Hiujin'
                  | 'Laura'
                  | 'Elin'
                  | 'Ida'
                  | 'Suvi'
                  | 'Ola'
                  | 'Hala'
                  | 'Andres'
                  | 'Sergio'
                  | 'Remi'
                  | 'Adriano'
                  | 'Thiago'
                  | 'Ruth'
                  | 'Stephen'
                  | 'Kazuha'
                  | 'Tomoko'
                  | 'Niamh'
                  | 'Sofie'
                  | 'Lisa'
                  | 'Isabelle'
              }
            }
            output: InvalidSsmlException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Engine?: 'standard' | 'neural' | undefined
                LanguageCode?:
                  | 'arb'
                  | 'cmn-CN'
                  | 'cy-GB'
                  | 'da-DK'
                  | 'de-DE'
                  | 'en-AU'
                  | 'en-GB'
                  | 'en-GB-WLS'
                  | 'en-IN'
                  | 'en-US'
                  | 'es-ES'
                  | 'es-MX'
                  | 'es-US'
                  | 'fr-CA'
                  | 'fr-FR'
                  | 'is-IS'
                  | 'it-IT'
                  | 'ja-JP'
                  | 'hi-IN'
                  | 'ko-KR'
                  | 'nb-NO'
                  | 'nl-NL'
                  | 'pl-PL'
                  | 'pt-BR'
                  | 'pt-PT'
                  | 'ro-RO'
                  | 'ru-RU'
                  | 'sv-SE'
                  | 'tr-TR'
                  | 'en-NZ'
                  | 'en-ZA'
                  | 'ca-ES'
                  | 'de-AT'
                  | 'yue-CN'
                  | 'ar-AE'
                  | 'fi-FI'
                  | 'en-IE'
                  | 'nl-BE'
                  | 'fr-BE'
                  | undefined
                LexiconNames?: LexiconName[] | undefined
                OutputFormat: 'json' | 'mp3' | 'ogg_vorbis' | 'pcm'
                SampleRate?: string | undefined
                SpeechMarkTypes?: SpeechMarkType[] | undefined
                Text: string
                TextType?: 'ssml' | 'text' | undefined
                VoiceId:
                  | 'Aditi'
                  | 'Amy'
                  | 'Astrid'
                  | 'Bianca'
                  | 'Brian'
                  | 'Camila'
                  | 'Carla'
                  | 'Carmen'
                  | 'Celine'
                  | 'Chantal'
                  | 'Conchita'
                  | 'Cristiano'
                  | 'Dora'
                  | 'Emma'
                  | 'Enrique'
                  | 'Ewa'
                  | 'Filiz'
                  | 'Gabrielle'
                  | 'Geraint'
                  | 'Giorgio'
                  | 'Gwyneth'
                  | 'Hans'
                  | 'Ines'
                  | 'Ivy'
                  | 'Jacek'
                  | 'Jan'
                  | 'Joanna'
                  | 'Joey'
                  | 'Justin'
                  | 'Karl'
                  | 'Kendra'
                  | 'Kevin'
                  | 'Kimberly'
                  | 'Lea'
                  | 'Liv'
                  | 'Lotte'
                  | 'Lucia'
                  | 'Lupe'
                  | 'Mads'
                  | 'Maja'
                  | 'Marlene'
                  | 'Mathieu'
                  | 'Matthew'
                  | 'Maxim'
                  | 'Mia'
                  | 'Miguel'
                  | 'Mizuki'
                  | 'Naja'
                  | 'Nicole'
                  | 'Olivia'
                  | 'Penelope'
                  | 'Raveena'
                  | 'Ricardo'
                  | 'Ruben'
                  | 'Russell'
                  | 'Salli'
                  | 'Seoyeon'
                  | 'Takumi'
                  | 'Tatyana'
                  | 'Vicki'
                  | 'Vitoria'
                  | 'Zeina'
                  | 'Zhiyu'
                  | 'Aria'
                  | 'Ayanda'
                  | 'Arlet'
                  | 'Hannah'
                  | 'Arthur'
                  | 'Daniel'
                  | 'Liam'
                  | 'Pedro'
                  | 'Kajal'
                  | 'Hiujin'
                  | 'Laura'
                  | 'Elin'
                  | 'Ida'
                  | 'Suvi'
                  | 'Ola'
                  | 'Hala'
                  | 'Andres'
                  | 'Sergio'
                  | 'Remi'
                  | 'Adriano'
                  | 'Thiago'
                  | 'Ruth'
                  | 'Stephen'
                  | 'Kazuha'
                  | 'Tomoko'
                  | 'Niamh'
                  | 'Sofie'
                  | 'Lisa'
                  | 'Isabelle'
              }
            }
            output: LexiconNotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Engine?: 'standard' | 'neural' | undefined
                LanguageCode?:
                  | 'arb'
                  | 'cmn-CN'
                  | 'cy-GB'
                  | 'da-DK'
                  | 'de-DE'
                  | 'en-AU'
                  | 'en-GB'
                  | 'en-GB-WLS'
                  | 'en-IN'
                  | 'en-US'
                  | 'es-ES'
                  | 'es-MX'
                  | 'es-US'
                  | 'fr-CA'
                  | 'fr-FR'
                  | 'is-IS'
                  | 'it-IT'
                  | 'ja-JP'
                  | 'hi-IN'
                  | 'ko-KR'
                  | 'nb-NO'
                  | 'nl-NL'
                  | 'pl-PL'
                  | 'pt-BR'
                  | 'pt-PT'
                  | 'ro-RO'
                  | 'ru-RU'
                  | 'sv-SE'
                  | 'tr-TR'
                  | 'en-NZ'
                  | 'en-ZA'
                  | 'ca-ES'
                  | 'de-AT'
                  | 'yue-CN'
                  | 'ar-AE'
                  | 'fi-FI'
                  | 'en-IE'
                  | 'nl-BE'
                  | 'fr-BE'
                  | undefined
                LexiconNames?: LexiconName[] | undefined
                OutputFormat: 'json' | 'mp3' | 'ogg_vorbis' | 'pcm'
                SampleRate?: string | undefined
                SpeechMarkTypes?: SpeechMarkType[] | undefined
                Text: string
                TextType?: 'ssml' | 'text' | undefined
                VoiceId:
                  | 'Aditi'
                  | 'Amy'
                  | 'Astrid'
                  | 'Bianca'
                  | 'Brian'
                  | 'Camila'
                  | 'Carla'
                  | 'Carmen'
                  | 'Celine'
                  | 'Chantal'
                  | 'Conchita'
                  | 'Cristiano'
                  | 'Dora'
                  | 'Emma'
                  | 'Enrique'
                  | 'Ewa'
                  | 'Filiz'
                  | 'Gabrielle'
                  | 'Geraint'
                  | 'Giorgio'
                  | 'Gwyneth'
                  | 'Hans'
                  | 'Ines'
                  | 'Ivy'
                  | 'Jacek'
                  | 'Jan'
                  | 'Joanna'
                  | 'Joey'
                  | 'Justin'
                  | 'Karl'
                  | 'Kendra'
                  | 'Kevin'
                  | 'Kimberly'
                  | 'Lea'
                  | 'Liv'
                  | 'Lotte'
                  | 'Lucia'
                  | 'Lupe'
                  | 'Mads'
                  | 'Maja'
                  | 'Marlene'
                  | 'Mathieu'
                  | 'Matthew'
                  | 'Maxim'
                  | 'Mia'
                  | 'Miguel'
                  | 'Mizuki'
                  | 'Naja'
                  | 'Nicole'
                  | 'Olivia'
                  | 'Penelope'
                  | 'Raveena'
                  | 'Ricardo'
                  | 'Ruben'
                  | 'Russell'
                  | 'Salli'
                  | 'Seoyeon'
                  | 'Takumi'
                  | 'Tatyana'
                  | 'Vicki'
                  | 'Vitoria'
                  | 'Zeina'
                  | 'Zhiyu'
                  | 'Aria'
                  | 'Ayanda'
                  | 'Arlet'
                  | 'Hannah'
                  | 'Arthur'
                  | 'Daniel'
                  | 'Liam'
                  | 'Pedro'
                  | 'Kajal'
                  | 'Hiujin'
                  | 'Laura'
                  | 'Elin'
                  | 'Ida'
                  | 'Suvi'
                  | 'Ola'
                  | 'Hala'
                  | 'Andres'
                  | 'Sergio'
                  | 'Remi'
                  | 'Adriano'
                  | 'Thiago'
                  | 'Ruth'
                  | 'Stephen'
                  | 'Kazuha'
                  | 'Tomoko'
                  | 'Niamh'
                  | 'Sofie'
                  | 'Lisa'
                  | 'Isabelle'
              }
            }
            output: ServiceFailureException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Engine?: 'standard' | 'neural' | undefined
                LanguageCode?:
                  | 'arb'
                  | 'cmn-CN'
                  | 'cy-GB'
                  | 'da-DK'
                  | 'de-DE'
                  | 'en-AU'
                  | 'en-GB'
                  | 'en-GB-WLS'
                  | 'en-IN'
                  | 'en-US'
                  | 'es-ES'
                  | 'es-MX'
                  | 'es-US'
                  | 'fr-CA'
                  | 'fr-FR'
                  | 'is-IS'
                  | 'it-IT'
                  | 'ja-JP'
                  | 'hi-IN'
                  | 'ko-KR'
                  | 'nb-NO'
                  | 'nl-NL'
                  | 'pl-PL'
                  | 'pt-BR'
                  | 'pt-PT'
                  | 'ro-RO'
                  | 'ru-RU'
                  | 'sv-SE'
                  | 'tr-TR'
                  | 'en-NZ'
                  | 'en-ZA'
                  | 'ca-ES'
                  | 'de-AT'
                  | 'yue-CN'
                  | 'ar-AE'
                  | 'fi-FI'
                  | 'en-IE'
                  | 'nl-BE'
                  | 'fr-BE'
                  | undefined
                LexiconNames?: LexiconName[] | undefined
                OutputFormat: 'json' | 'mp3' | 'ogg_vorbis' | 'pcm'
                SampleRate?: string | undefined
                SpeechMarkTypes?: SpeechMarkType[] | undefined
                Text: string
                TextType?: 'ssml' | 'text' | undefined
                VoiceId:
                  | 'Aditi'
                  | 'Amy'
                  | 'Astrid'
                  | 'Bianca'
                  | 'Brian'
                  | 'Camila'
                  | 'Carla'
                  | 'Carmen'
                  | 'Celine'
                  | 'Chantal'
                  | 'Conchita'
                  | 'Cristiano'
                  | 'Dora'
                  | 'Emma'
                  | 'Enrique'
                  | 'Ewa'
                  | 'Filiz'
                  | 'Gabrielle'
                  | 'Geraint'
                  | 'Giorgio'
                  | 'Gwyneth'
                  | 'Hans'
                  | 'Ines'
                  | 'Ivy'
                  | 'Jacek'
                  | 'Jan'
                  | 'Joanna'
                  | 'Joey'
                  | 'Justin'
                  | 'Karl'
                  | 'Kendra'
                  | 'Kevin'
                  | 'Kimberly'
                  | 'Lea'
                  | 'Liv'
                  | 'Lotte'
                  | 'Lucia'
                  | 'Lupe'
                  | 'Mads'
                  | 'Maja'
                  | 'Marlene'
                  | 'Mathieu'
                  | 'Matthew'
                  | 'Maxim'
                  | 'Mia'
                  | 'Miguel'
                  | 'Mizuki'
                  | 'Naja'
                  | 'Nicole'
                  | 'Olivia'
                  | 'Penelope'
                  | 'Raveena'
                  | 'Ricardo'
                  | 'Ruben'
                  | 'Russell'
                  | 'Salli'
                  | 'Seoyeon'
                  | 'Takumi'
                  | 'Tatyana'
                  | 'Vicki'
                  | 'Vitoria'
                  | 'Zeina'
                  | 'Zhiyu'
                  | 'Aria'
                  | 'Ayanda'
                  | 'Arlet'
                  | 'Hannah'
                  | 'Arthur'
                  | 'Daniel'
                  | 'Liam'
                  | 'Pedro'
                  | 'Kajal'
                  | 'Hiujin'
                  | 'Laura'
                  | 'Elin'
                  | 'Ida'
                  | 'Suvi'
                  | 'Ola'
                  | 'Hala'
                  | 'Andres'
                  | 'Sergio'
                  | 'Remi'
                  | 'Adriano'
                  | 'Thiago'
                  | 'Ruth'
                  | 'Stephen'
                  | 'Kazuha'
                  | 'Tomoko'
                  | 'Niamh'
                  | 'Sofie'
                  | 'Lisa'
                  | 'Isabelle'
              }
            }
            output: MarksNotSupportedForFormatException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Engine?: 'standard' | 'neural' | undefined
                LanguageCode?:
                  | 'arb'
                  | 'cmn-CN'
                  | 'cy-GB'
                  | 'da-DK'
                  | 'de-DE'
                  | 'en-AU'
                  | 'en-GB'
                  | 'en-GB-WLS'
                  | 'en-IN'
                  | 'en-US'
                  | 'es-ES'
                  | 'es-MX'
                  | 'es-US'
                  | 'fr-CA'
                  | 'fr-FR'
                  | 'is-IS'
                  | 'it-IT'
                  | 'ja-JP'
                  | 'hi-IN'
                  | 'ko-KR'
                  | 'nb-NO'
                  | 'nl-NL'
                  | 'pl-PL'
                  | 'pt-BR'
                  | 'pt-PT'
                  | 'ro-RO'
                  | 'ru-RU'
                  | 'sv-SE'
                  | 'tr-TR'
                  | 'en-NZ'
                  | 'en-ZA'
                  | 'ca-ES'
                  | 'de-AT'
                  | 'yue-CN'
                  | 'ar-AE'
                  | 'fi-FI'
                  | 'en-IE'
                  | 'nl-BE'
                  | 'fr-BE'
                  | undefined
                LexiconNames?: LexiconName[] | undefined
                OutputFormat: 'json' | 'mp3' | 'ogg_vorbis' | 'pcm'
                SampleRate?: string | undefined
                SpeechMarkTypes?: SpeechMarkType[] | undefined
                Text: string
                TextType?: 'ssml' | 'text' | undefined
                VoiceId:
                  | 'Aditi'
                  | 'Amy'
                  | 'Astrid'
                  | 'Bianca'
                  | 'Brian'
                  | 'Camila'
                  | 'Carla'
                  | 'Carmen'
                  | 'Celine'
                  | 'Chantal'
                  | 'Conchita'
                  | 'Cristiano'
                  | 'Dora'
                  | 'Emma'
                  | 'Enrique'
                  | 'Ewa'
                  | 'Filiz'
                  | 'Gabrielle'
                  | 'Geraint'
                  | 'Giorgio'
                  | 'Gwyneth'
                  | 'Hans'
                  | 'Ines'
                  | 'Ivy'
                  | 'Jacek'
                  | 'Jan'
                  | 'Joanna'
                  | 'Joey'
                  | 'Justin'
                  | 'Karl'
                  | 'Kendra'
                  | 'Kevin'
                  | 'Kimberly'
                  | 'Lea'
                  | 'Liv'
                  | 'Lotte'
                  | 'Lucia'
                  | 'Lupe'
                  | 'Mads'
                  | 'Maja'
                  | 'Marlene'
                  | 'Mathieu'
                  | 'Matthew'
                  | 'Maxim'
                  | 'Mia'
                  | 'Miguel'
                  | 'Mizuki'
                  | 'Naja'
                  | 'Nicole'
                  | 'Olivia'
                  | 'Penelope'
                  | 'Raveena'
                  | 'Ricardo'
                  | 'Ruben'
                  | 'Russell'
                  | 'Salli'
                  | 'Seoyeon'
                  | 'Takumi'
                  | 'Tatyana'
                  | 'Vicki'
                  | 'Vitoria'
                  | 'Zeina'
                  | 'Zhiyu'
                  | 'Aria'
                  | 'Ayanda'
                  | 'Arlet'
                  | 'Hannah'
                  | 'Arthur'
                  | 'Daniel'
                  | 'Liam'
                  | 'Pedro'
                  | 'Kajal'
                  | 'Hiujin'
                  | 'Laura'
                  | 'Elin'
                  | 'Ida'
                  | 'Suvi'
                  | 'Ola'
                  | 'Hala'
                  | 'Andres'
                  | 'Sergio'
                  | 'Remi'
                  | 'Adriano'
                  | 'Thiago'
                  | 'Ruth'
                  | 'Stephen'
                  | 'Kazuha'
                  | 'Tomoko'
                  | 'Niamh'
                  | 'Sofie'
                  | 'Lisa'
                  | 'Isabelle'
              }
            }
            output: SsmlMarksNotSupportedForTextTypeException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Engine?: 'standard' | 'neural' | undefined
                LanguageCode?:
                  | 'arb'
                  | 'cmn-CN'
                  | 'cy-GB'
                  | 'da-DK'
                  | 'de-DE'
                  | 'en-AU'
                  | 'en-GB'
                  | 'en-GB-WLS'
                  | 'en-IN'
                  | 'en-US'
                  | 'es-ES'
                  | 'es-MX'
                  | 'es-US'
                  | 'fr-CA'
                  | 'fr-FR'
                  | 'is-IS'
                  | 'it-IT'
                  | 'ja-JP'
                  | 'hi-IN'
                  | 'ko-KR'
                  | 'nb-NO'
                  | 'nl-NL'
                  | 'pl-PL'
                  | 'pt-BR'
                  | 'pt-PT'
                  | 'ro-RO'
                  | 'ru-RU'
                  | 'sv-SE'
                  | 'tr-TR'
                  | 'en-NZ'
                  | 'en-ZA'
                  | 'ca-ES'
                  | 'de-AT'
                  | 'yue-CN'
                  | 'ar-AE'
                  | 'fi-FI'
                  | 'en-IE'
                  | 'nl-BE'
                  | 'fr-BE'
                  | undefined
                LexiconNames?: LexiconName[] | undefined
                OutputFormat: 'json' | 'mp3' | 'ogg_vorbis' | 'pcm'
                SampleRate?: string | undefined
                SpeechMarkTypes?: SpeechMarkType[] | undefined
                Text: string
                TextType?: 'ssml' | 'text' | undefined
                VoiceId:
                  | 'Aditi'
                  | 'Amy'
                  | 'Astrid'
                  | 'Bianca'
                  | 'Brian'
                  | 'Camila'
                  | 'Carla'
                  | 'Carmen'
                  | 'Celine'
                  | 'Chantal'
                  | 'Conchita'
                  | 'Cristiano'
                  | 'Dora'
                  | 'Emma'
                  | 'Enrique'
                  | 'Ewa'
                  | 'Filiz'
                  | 'Gabrielle'
                  | 'Geraint'
                  | 'Giorgio'
                  | 'Gwyneth'
                  | 'Hans'
                  | 'Ines'
                  | 'Ivy'
                  | 'Jacek'
                  | 'Jan'
                  | 'Joanna'
                  | 'Joey'
                  | 'Justin'
                  | 'Karl'
                  | 'Kendra'
                  | 'Kevin'
                  | 'Kimberly'
                  | 'Lea'
                  | 'Liv'
                  | 'Lotte'
                  | 'Lucia'
                  | 'Lupe'
                  | 'Mads'
                  | 'Maja'
                  | 'Marlene'
                  | 'Mathieu'
                  | 'Matthew'
                  | 'Maxim'
                  | 'Mia'
                  | 'Miguel'
                  | 'Mizuki'
                  | 'Naja'
                  | 'Nicole'
                  | 'Olivia'
                  | 'Penelope'
                  | 'Raveena'
                  | 'Ricardo'
                  | 'Ruben'
                  | 'Russell'
                  | 'Salli'
                  | 'Seoyeon'
                  | 'Takumi'
                  | 'Tatyana'
                  | 'Vicki'
                  | 'Vitoria'
                  | 'Zeina'
                  | 'Zhiyu'
                  | 'Aria'
                  | 'Ayanda'
                  | 'Arlet'
                  | 'Hannah'
                  | 'Arthur'
                  | 'Daniel'
                  | 'Liam'
                  | 'Pedro'
                  | 'Kajal'
                  | 'Hiujin'
                  | 'Laura'
                  | 'Elin'
                  | 'Ida'
                  | 'Suvi'
                  | 'Ola'
                  | 'Hala'
                  | 'Andres'
                  | 'Sergio'
                  | 'Remi'
                  | 'Adriano'
                  | 'Thiago'
                  | 'Ruth'
                  | 'Stephen'
                  | 'Kazuha'
                  | 'Tomoko'
                  | 'Niamh'
                  | 'Sofie'
                  | 'Lisa'
                  | 'Isabelle'
              }
            }
            output: LanguageNotSupportedException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Engine?: 'standard' | 'neural' | undefined
                LanguageCode?:
                  | 'arb'
                  | 'cmn-CN'
                  | 'cy-GB'
                  | 'da-DK'
                  | 'de-DE'
                  | 'en-AU'
                  | 'en-GB'
                  | 'en-GB-WLS'
                  | 'en-IN'
                  | 'en-US'
                  | 'es-ES'
                  | 'es-MX'
                  | 'es-US'
                  | 'fr-CA'
                  | 'fr-FR'
                  | 'is-IS'
                  | 'it-IT'
                  | 'ja-JP'
                  | 'hi-IN'
                  | 'ko-KR'
                  | 'nb-NO'
                  | 'nl-NL'
                  | 'pl-PL'
                  | 'pt-BR'
                  | 'pt-PT'
                  | 'ro-RO'
                  | 'ru-RU'
                  | 'sv-SE'
                  | 'tr-TR'
                  | 'en-NZ'
                  | 'en-ZA'
                  | 'ca-ES'
                  | 'de-AT'
                  | 'yue-CN'
                  | 'ar-AE'
                  | 'fi-FI'
                  | 'en-IE'
                  | 'nl-BE'
                  | 'fr-BE'
                  | undefined
                LexiconNames?: LexiconName[] | undefined
                OutputFormat: 'json' | 'mp3' | 'ogg_vorbis' | 'pcm'
                SampleRate?: string | undefined
                SpeechMarkTypes?: SpeechMarkType[] | undefined
                Text: string
                TextType?: 'ssml' | 'text' | undefined
                VoiceId:
                  | 'Aditi'
                  | 'Amy'
                  | 'Astrid'
                  | 'Bianca'
                  | 'Brian'
                  | 'Camila'
                  | 'Carla'
                  | 'Carmen'
                  | 'Celine'
                  | 'Chantal'
                  | 'Conchita'
                  | 'Cristiano'
                  | 'Dora'
                  | 'Emma'
                  | 'Enrique'
                  | 'Ewa'
                  | 'Filiz'
                  | 'Gabrielle'
                  | 'Geraint'
                  | 'Giorgio'
                  | 'Gwyneth'
                  | 'Hans'
                  | 'Ines'
                  | 'Ivy'
                  | 'Jacek'
                  | 'Jan'
                  | 'Joanna'
                  | 'Joey'
                  | 'Justin'
                  | 'Karl'
                  | 'Kendra'
                  | 'Kevin'
                  | 'Kimberly'
                  | 'Lea'
                  | 'Liv'
                  | 'Lotte'
                  | 'Lucia'
                  | 'Lupe'
                  | 'Mads'
                  | 'Maja'
                  | 'Marlene'
                  | 'Mathieu'
                  | 'Matthew'
                  | 'Maxim'
                  | 'Mia'
                  | 'Miguel'
                  | 'Mizuki'
                  | 'Naja'
                  | 'Nicole'
                  | 'Olivia'
                  | 'Penelope'
                  | 'Raveena'
                  | 'Ricardo'
                  | 'Ruben'
                  | 'Russell'
                  | 'Salli'
                  | 'Seoyeon'
                  | 'Takumi'
                  | 'Tatyana'
                  | 'Vicki'
                  | 'Vitoria'
                  | 'Zeina'
                  | 'Zhiyu'
                  | 'Aria'
                  | 'Ayanda'
                  | 'Arlet'
                  | 'Hannah'
                  | 'Arthur'
                  | 'Daniel'
                  | 'Liam'
                  | 'Pedro'
                  | 'Kajal'
                  | 'Hiujin'
                  | 'Laura'
                  | 'Elin'
                  | 'Ida'
                  | 'Suvi'
                  | 'Ola'
                  | 'Hala'
                  | 'Andres'
                  | 'Sergio'
                  | 'Remi'
                  | 'Adriano'
                  | 'Thiago'
                  | 'Ruth'
                  | 'Stephen'
                  | 'Kazuha'
                  | 'Tomoko'
                  | 'Niamh'
                  | 'Sofie'
                  | 'Lisa'
                  | 'Isabelle'
              }
            }
            output: EngineNotSupportedException
            outputFormat: 'json'
            status: 488
          }
    }
  },
  '/'
>
export default routes
