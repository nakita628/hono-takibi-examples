import { createRoute, z } from '@hono/zod-openapi'

const DeleteLexiconOutputSchema = z
  .object({})
  .openapi({ example: {} })
  .openapi('DeleteLexiconOutput')

const LexiconNotFoundExceptionSchema = z.any().openapi('LexiconNotFoundException')

const ServiceFailureExceptionSchema = z.any().openapi('ServiceFailureException')

const GenderSchema = z.enum(['Female', 'Male']).openapi('Gender')

const VoiceIdSchema = z
  .enum([
    'Aditi',
    'Amy',
    'Astrid',
    'Bianca',
    'Brian',
    'Camila',
    'Carla',
    'Carmen',
    'Celine',
    'Chantal',
    'Conchita',
    'Cristiano',
    'Dora',
    'Emma',
    'Enrique',
    'Ewa',
    'Filiz',
    'Gabrielle',
    'Geraint',
    'Giorgio',
    'Gwyneth',
    'Hans',
    'Ines',
    'Ivy',
    'Jacek',
    'Jan',
    'Joanna',
    'Joey',
    'Justin',
    'Karl',
    'Kendra',
    'Kevin',
    'Kimberly',
    'Lea',
    'Liv',
    'Lotte',
    'Lucia',
    'Lupe',
    'Mads',
    'Maja',
    'Marlene',
    'Mathieu',
    'Matthew',
    'Maxim',
    'Mia',
    'Miguel',
    'Mizuki',
    'Naja',
    'Nicole',
    'Olivia',
    'Penelope',
    'Raveena',
    'Ricardo',
    'Ruben',
    'Russell',
    'Salli',
    'Seoyeon',
    'Takumi',
    'Tatyana',
    'Vicki',
    'Vitoria',
    'Zeina',
    'Zhiyu',
    'Aria',
    'Ayanda',
    'Arlet',
    'Hannah',
    'Arthur',
    'Daniel',
    'Liam',
    'Pedro',
    'Kajal',
    'Hiujin',
    'Laura',
    'Elin',
    'Ida',
    'Suvi',
    'Ola',
    'Hala',
    'Andres',
    'Sergio',
    'Remi',
    'Adriano',
    'Thiago',
    'Ruth',
    'Stephen',
    'Kazuha',
    'Tomoko',
    'Niamh',
    'Sofie',
    'Lisa',
    'Isabelle',
  ])
  .openapi('VoiceId')

const LanguageCodeSchema = z
  .enum([
    'arb',
    'cmn-CN',
    'cy-GB',
    'da-DK',
    'de-DE',
    'en-AU',
    'en-GB',
    'en-GB-WLS',
    'en-IN',
    'en-US',
    'es-ES',
    'es-MX',
    'es-US',
    'fr-CA',
    'fr-FR',
    'is-IS',
    'it-IT',
    'ja-JP',
    'hi-IN',
    'ko-KR',
    'nb-NO',
    'nl-NL',
    'pl-PL',
    'pt-BR',
    'pt-PT',
    'ro-RO',
    'ru-RU',
    'sv-SE',
    'tr-TR',
    'en-NZ',
    'en-ZA',
    'ca-ES',
    'de-AT',
    'yue-CN',
    'ar-AE',
    'fi-FI',
    'en-IE',
    'nl-BE',
    'fr-BE',
  ])
  .openapi('LanguageCode')

const LanguageNameSchema = z.string().openapi('LanguageName')

const VoiceNameSchema = z.string().openapi('VoiceName')

const LanguageCodeListSchema = z.array(LanguageCodeSchema).openapi('LanguageCodeList')

const EngineSchema = z.enum(['standard', 'neural']).openapi('Engine')

const EngineListSchema = z.array(EngineSchema).openapi('EngineList')

const VoiceSchema = z
  .object({
    Gender: GenderSchema.and(
      z.any().openapi({ description: 'Gender of the voice.' }),
    ).exactOptional(),
    Id: VoiceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Amazon Polly assigned voice ID. This is the ID that you specify when calling the <code>SynthesizeSpeech</code> operation.',
        }),
    ).exactOptional(),
    LanguageCode: LanguageCodeSchema.and(
      z.any().openapi({ description: 'Language code of the voice.' }),
    ).exactOptional(),
    LanguageName: LanguageNameSchema.and(
      z.any().openapi({ description: 'Human readable name of the language in English.' }),
    ).exactOptional(),
    Name: VoiceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'Name of the voice (for example, Salli, Kendra, etc.). This provides a human readable voice name that you might display in your application.',
        }),
    ).exactOptional(),
    AdditionalLanguageCodes: LanguageCodeListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Additional codes for languages available for the specified voice in addition to its default language. </p> <p>For example, the default language for Aditi is Indian English (en-IN) because it was first used for that language. Since Aditi is bilingual and fluent in both Indian English and Hindi, this parameter would show the code <code>hi-IN</code>.</p>',
        }),
    ).exactOptional(),
    SupportedEngines: EngineListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies which engines (<code>standard</code> or <code>neural</code>) that are supported by a given voice.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Description of the voice.', required: [] })
  .openapi('Voice')

const VoiceListSchema = z.array(VoiceSchema).openapi('VoiceList')

const NextTokenSchema = z.string().min(0).max(4096).openapi('NextToken')

const DescribeVoicesOutputSchema = z
  .object({
    Voices: VoiceListSchema.and(
      z.any().openapi({ description: 'A list of voices with their properties.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token to use in the next request to continue the listing of voices. <code>NextToken</code> is returned only if the response is truncated.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Voices: [
        {
          Gender: 'Female',
          Id: 'Emma',
          LanguageCode: 'en-GB',
          LanguageName: 'British English',
          Name: 'Emma',
        },
        {
          Gender: 'Male',
          Id: 'Brian',
          LanguageCode: 'en-GB',
          LanguageName: 'British English',
          Name: 'Brian',
        },
        {
          Gender: 'Female',
          Id: 'Amy',
          LanguageCode: 'en-GB',
          LanguageName: 'British English',
          Name: 'Amy',
        },
      ],
    },
    required: [],
  })
  .openapi('DescribeVoicesOutput')

const InvalidNextTokenExceptionSchema = z.any().openapi('InvalidNextTokenException')

const LexiconContentSchema = z.string().openapi('LexiconContent')

const LexiconNameSchema = z
  .string()
  .regex(/[0-9A-Za-z]{1,20}/)
  .openapi('LexiconName')

const LexiconSchema = z
  .object({
    Content: LexiconContentSchema.and(
      z
        .any()
        .openapi({
          description:
            'Lexicon content in string format. The content of a lexicon must be in PLS format.',
        }),
    ).exactOptional(),
    Name: LexiconNameSchema.and(
      z.any().openapi({ description: 'Name of the lexicon.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides lexicon name and lexicon content in string format. For more information, see <a href="https://www.w3.org/TR/pronunciation-lexicon/">Pronunciation Lexicon Specification (PLS) Version 1.0</a>.',
    required: [],
  })
  .openapi('Lexicon')

const AlphabetSchema = z.string().openapi('Alphabet')

const LastModifiedSchema = z.iso.datetime({ offset: true }).openapi('LastModified')

const LexiconArnSchema = z.string().openapi('LexiconArn')

const LexemesCountSchema = z.int().openapi('LexemesCount')

const SizeSchema = z.int().openapi('Size')

const LexiconAttributesSchema = z
  .object({
    Alphabet: AlphabetSchema.and(
      z
        .any()
        .openapi({
          description:
            'Phonetic alphabet used in the lexicon. Valid values are <code>ipa</code> and <code>x-sampa</code>.',
        }),
    ).exactOptional(),
    LanguageCode: LanguageCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Language code that the lexicon applies to. A lexicon with a language code such as "en" would be applied to all English languages (en-GB, en-US, en-AUS, en-WLS, and so on.',
        }),
    ).exactOptional(),
    LastModified: LastModifiedSchema.and(
      z.any().openapi({ description: 'Date lexicon was last modified (a timestamp value).' }),
    ).exactOptional(),
    LexiconArn: LexiconArnSchema.and(
      z.any().openapi({ description: 'Amazon Resource Name (ARN) of the lexicon.' }),
    ).exactOptional(),
    LexemesCount: LexemesCountSchema.and(
      z.any().openapi({ description: 'Number of lexemes in the lexicon.' }),
    ).exactOptional(),
    Size: SizeSchema.and(
      z.any().openapi({ description: 'Total size of the lexicon, in characters.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains metadata describing the lexicon such as the number of lexemes, language code, and so on. For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html">Managing Lexicons</a>.',
    required: [],
  })
  .openapi('LexiconAttributes')

const GetLexiconOutputSchema = z
  .object({
    Lexicon: LexiconSchema.and(
      z
        .any()
        .openapi({
          description: 'Lexicon object that provides name and the string content of the lexicon. ',
        }),
    ).exactOptional(),
    LexiconAttributes: LexiconAttributesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Metadata of the lexicon, including phonetic alphabetic used, language code, lexicon ARN, number of lexemes defined in the lexicon, and size of lexicon in bytes.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Lexicon: {
        Content:
          '<?xml version="1.0" encoding="UTF-8"?>\r\n<lexicon version="1.0" \r\n      xmlns="http://www.w3.org/2005/01/pronunciation-lexicon"\r\n      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" \r\n      xsi:schemaLocation="http://www.w3.org/2005/01/pronunciation-lexicon \r\n        http://www.w3.org/TR/2007/CR-pronunciation-lexicon-20071212/pls.xsd"\r\n      alphabet="ipa" \r\n      xml:lang="en-US">\r\n  <lexeme>\r\n    <grapheme>W3C</grapheme>\r\n    <alias>World Wide Web Consortium</alias>\r\n  </lexeme>\r\n</lexicon>',
        Name: 'example',
      },
      LexiconAttributes: {
        Alphabet: 'ipa',
        LanguageCode: 'en-US',
        LastModified: 1478542980.117,
        LexemesCount: 1,
        LexiconArn: 'arn:aws:polly:us-east-1:123456789012:lexicon/example',
        Size: 503,
      },
    },
    required: [],
  })
  .openapi('GetLexiconOutput')

const TaskIdSchema = z
  .string()
  .regex(/^[a-zA-Z0-9_-]{1,100}$/)
  .openapi('TaskId')

const TaskStatusSchema = z
  .enum(['scheduled', 'inProgress', 'completed', 'failed'])
  .openapi('TaskStatus')

const TaskStatusReasonSchema = z.string().openapi('TaskStatusReason')

const OutputUriSchema = z.string().openapi('OutputUri')

const DateTimeSchema = z.iso.datetime({ offset: true }).openapi('DateTime')

const RequestCharactersSchema = z.int().openapi('RequestCharacters')

const SnsTopicArnSchema = z
  .string()
  .regex(/^arn:aws(-(cn|iso(-b)?|us-gov))?:sns:[a-z0-9_-]{1,50}:\d{12}:[a-zA-Z0-9_-]{1,256}$/)
  .openapi('SnsTopicArn')

const LexiconNameListSchema = z.array(LexiconNameSchema).max(5).openapi('LexiconNameList')

const OutputFormatSchema = z.enum(['json', 'mp3', 'ogg_vorbis', 'pcm']).openapi('OutputFormat')

const SampleRateSchema = z.string().openapi('SampleRate')

const SpeechMarkTypeSchema = z
  .enum(['sentence', 'ssml', 'viseme', 'word'])
  .openapi('SpeechMarkType')

const SpeechMarkTypeListSchema = z.array(SpeechMarkTypeSchema).max(4).openapi('SpeechMarkTypeList')

const TextTypeSchema = z.enum(['ssml', 'text']).openapi('TextType')

const SynthesisTaskSchema = z
  .object({
    Engine: EngineSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the engine (<code>standard</code> or <code>neural</code>) for Amazon Polly to use when processing input text for speech synthesis. Using a voice that is not supported for the engine selected will result in an error.',
        }),
    ).exactOptional(),
    TaskId: TaskIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Polly generated identifier for a speech synthesis task.',
        }),
    ).exactOptional(),
    TaskStatus: TaskStatusSchema.and(
      z.any().openapi({ description: 'Current status of the individual speech synthesis task.' }),
    ).exactOptional(),
    TaskStatusReason: TaskStatusReasonSchema.and(
      z
        .any()
        .openapi({
          description:
            'Reason for the current status of a specific speech synthesis task, including errors if the task has failed.',
        }),
    ).exactOptional(),
    OutputUri: OutputUriSchema.and(
      z.any().openapi({ description: 'Pathway for the output speech file.' }),
    ).exactOptional(),
    CreationTime: DateTimeSchema.and(
      z.any().openapi({ description: 'Timestamp for the time the synthesis task was started.' }),
    ).exactOptional(),
    RequestCharacters: RequestCharactersSchema.and(
      z.any().openapi({ description: 'Number of billable characters synthesized.' }),
    ).exactOptional(),
    SnsTopicArn: SnsTopicArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'ARN for the SNS topic optionally used for providing status notification for a speech synthesis task.',
        }),
    ).exactOptional(),
    LexiconNames: LexiconNameListSchema.and(
      z
        .any()
        .openapi({
          description:
            'List of one or more pronunciation lexicon names you want the service to apply during synthesis. Lexicons are applied only if the language of the lexicon is the same as the language of the voice. ',
        }),
    ).exactOptional(),
    OutputFormat: OutputFormatSchema.and(
      z
        .any()
        .openapi({
          description:
            'The format in which the returned output will be encoded. For audio stream, this will be mp3, ogg_vorbis, or pcm. For speech marks, this will be json. ',
        }),
    ).exactOptional(),
    SampleRate: SampleRateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The audio frequency specified in Hz.</p> <p>The valid values for mp3 and ogg_vorbis are "8000", "16000", "22050", and "24000". The default value for standard voices is "22050". The default value for neural voices is "24000".</p> <p>Valid values for pcm are "8000" and "16000" The default value is "16000". </p>',
        }),
    ).exactOptional(),
    SpeechMarkTypes: SpeechMarkTypeListSchema.and(
      z.any().openapi({ description: 'The type of speech marks returned for the input text.' }),
    ).exactOptional(),
    TextType: TextTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the input text is plain text or SSML. The default value is plain text. ',
        }),
    ).exactOptional(),
    VoiceId: VoiceIdSchema.and(
      z.any().openapi({ description: 'Voice ID to use for the synthesis. ' }),
    ).exactOptional(),
    LanguageCode: LanguageCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Optional language code for a synthesis task. This is only necessary if using a bilingual voice, such as Aditi, which can be used for either Indian English (en-IN) or Hindi (hi-IN). </p> <p>If a bilingual voice is used and no language code is specified, Amazon Polly uses the default language of the bilingual voice. The default language for any voice is the one returned by the <a href="https://docs.aws.amazon.com/polly/latest/dg/API_DescribeVoices.html">DescribeVoices</a> operation for the <code>LanguageCode</code> parameter. For example, if no language code is specified, Aditi will use Indian English rather than Hindi.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'SynthesisTask object that provides information about a speech synthesis task.',
    required: [],
  })
  .openapi('SynthesisTask')

const GetSpeechSynthesisTaskOutputSchema = z
  .object({
    SynthesisTask: SynthesisTaskSchema.and(
      z
        .any()
        .openapi({
          description:
            'SynthesisTask object that provides information from the requested task, including output format, creation time, task status, and so on.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetSpeechSynthesisTaskOutput')

const InvalidTaskIdExceptionSchema = z.any().openapi('InvalidTaskIdException')

const SynthesisTaskNotFoundExceptionSchema = z.any().openapi('SynthesisTaskNotFoundException')

const LexiconDescriptionSchema = z
  .object({
    Name: LexiconNameSchema.and(
      z.any().openapi({ description: 'Name of the lexicon.' }),
    ).exactOptional(),
    Attributes: LexiconAttributesSchema.and(
      z.any().openapi({ description: 'Provides lexicon metadata.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes the content of the lexicon.', required: [] })
  .openapi('LexiconDescription')

const LexiconDescriptionListSchema = z
  .array(LexiconDescriptionSchema)
  .openapi('LexiconDescriptionList')

const ListLexiconsOutputSchema = z
  .object({
    Lexicons: LexiconDescriptionListSchema.and(
      z.any().openapi({ description: 'A list of lexicon names and attributes.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token to use in the next request to continue the listing of lexicons. <code>NextToken</code> is returned only if the response is truncated.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Lexicons: [
        {
          Attributes: {
            Alphabet: 'ipa',
            LanguageCode: 'en-US',
            LastModified: 1478542980.117,
            LexemesCount: 1,
            LexiconArn: 'arn:aws:polly:us-east-1:123456789012:lexicon/example',
            Size: 503,
          },
          Name: 'example',
        },
      ],
    },
    required: [],
  })
  .openapi('ListLexiconsOutput')

const SynthesisTasksSchema = z.array(SynthesisTaskSchema).openapi('SynthesisTasks')

const ListSpeechSynthesisTasksOutputSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An opaque pagination token returned from the previous List operation in this request. If present, this indicates where to continue the listing.',
        }),
    ).exactOptional(),
    SynthesisTasks: SynthesisTasksSchema.and(
      z
        .any()
        .openapi({
          description:
            'List of SynthesisTask objects that provides information from the specified task in the list request, including output format, creation time, task status, and so on.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListSpeechSynthesisTasksOutput')

const PutLexiconOutputSchema = z.object({}).openapi({ example: {} }).openapi('PutLexiconOutput')

const InvalidLexiconExceptionSchema = z.any().openapi('InvalidLexiconException')

const UnsupportedPlsAlphabetExceptionSchema = z.any().openapi('UnsupportedPlsAlphabetException')

const UnsupportedPlsLanguageExceptionSchema = z.any().openapi('UnsupportedPlsLanguageException')

const LexiconSizeExceededExceptionSchema = z.any().openapi('LexiconSizeExceededException')

const MaxLexemeLengthExceededExceptionSchema = z.any().openapi('MaxLexemeLengthExceededException')

const MaxLexiconsNumberExceededExceptionSchema = z
  .any()
  .openapi('MaxLexiconsNumberExceededException')

const StartSpeechSynthesisTaskOutputSchema = z
  .object({
    SynthesisTask: SynthesisTaskSchema.and(
      z
        .any()
        .openapi({
          description:
            'SynthesisTask object that provides information and attributes about a newly submitted speech synthesis task.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartSpeechSynthesisTaskOutput')

const TextLengthExceededExceptionSchema = z.any().openapi('TextLengthExceededException')

const InvalidS3BucketExceptionSchema = z.any().openapi('InvalidS3BucketException')

const InvalidS3KeyExceptionSchema = z.any().openapi('InvalidS3KeyException')

const InvalidSampleRateExceptionSchema = z.any().openapi('InvalidSampleRateException')

const InvalidSnsTopicArnExceptionSchema = z.any().openapi('InvalidSnsTopicArnException')

const InvalidSsmlExceptionSchema = z.any().openapi('InvalidSsmlException')

const EngineNotSupportedExceptionSchema = z.any().openapi('EngineNotSupportedException')

const MarksNotSupportedForFormatExceptionSchema = z
  .any()
  .openapi('MarksNotSupportedForFormatException')

const SsmlMarksNotSupportedForTextTypeExceptionSchema = z
  .any()
  .openapi('SsmlMarksNotSupportedForTextTypeException')

const LanguageNotSupportedExceptionSchema = z.any().openapi('LanguageNotSupportedException')

const AudioStreamSchema = z.string().openapi('AudioStream')

const SynthesizeSpeechOutputSchema = z
  .object({
    AudioStream: AudioStreamSchema.and(
      z.any().openapi({ description: ' Stream containing the synthesized speech. ' }),
    ).exactOptional(),
  })
  .openapi({
    example: { AudioStream: 'TEXT', ContentType: 'audio/mpeg', RequestCharacters: 37 },
    required: [],
  })
  .openapi('SynthesizeSpeechOutput')

const ContentTypeSchema = z.string().openapi('ContentType')

const DeleteLexiconInputSchema = z
  .object({})
  .openapi({ title: 'DeleteLexiconInput' })
  .openapi('DeleteLexiconInput')

const IncludeAdditionalLanguageCodesSchema = z.boolean().openapi('IncludeAdditionalLanguageCodes')

const DescribeVoicesInputSchema = z
  .object({})
  .openapi({ title: 'DescribeVoicesInput' })
  .openapi('DescribeVoicesInput')

const GetLexiconInputSchema = z
  .object({})
  .openapi({ title: 'GetLexiconInput' })
  .openapi('GetLexiconInput')

const GetSpeechSynthesisTaskInputSchema = z
  .object({})
  .openapi({ title: 'GetSpeechSynthesisTaskInput' })
  .openapi('GetSpeechSynthesisTaskInput')

const ListLexiconsInputSchema = z
  .object({})
  .openapi({ title: 'ListLexiconsInput' })
  .openapi('ListLexiconsInput')

const MaxResultsSchema = z.int().min(1).max(100).openapi('MaxResults')

const ListSpeechSynthesisTasksInputSchema = z
  .object({})
  .openapi({ title: 'ListSpeechSynthesisTasksInput' })
  .openapi('ListSpeechSynthesisTasksInput')

const OutputS3BucketNameSchema = z
  .string()
  .regex(/^[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9]$/)
  .openapi('OutputS3BucketName')

const OutputS3KeyPrefixSchema = z
  .string()
  .regex(/^[0-9a-zA-Z\/\!\-_\.\*\'\(\):;\$@=+\,\?&]{0,800}$/)
  .openapi('OutputS3KeyPrefix')

const PutLexiconInputSchema = z
  .object({
    Content: LexiconContentSchema.and(
      z.any().openapi({ description: 'Content of the PLS lexicon as string data.' }),
    ),
  })
  .openapi({ required: ['Content'], title: 'PutLexiconInput' })
  .openapi('PutLexiconInput')

const TextSchema = z.string().openapi('Text')

const StartSpeechSynthesisTaskInputSchema = z
  .object({
    Engine: EngineSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the engine (<code>standard</code> or <code>neural</code>) for Amazon Polly to use when processing input text for speech synthesis. Using a voice that is not supported for the engine selected will result in an error.',
        }),
    ).exactOptional(),
    LanguageCode: LanguageCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Optional language code for the Speech Synthesis request. This is only necessary if using a bilingual voice, such as Aditi, which can be used for either Indian English (en-IN) or Hindi (hi-IN). </p> <p>If a bilingual voice is used and no language code is specified, Amazon Polly uses the default language of the bilingual voice. The default language for any voice is the one returned by the <a href="https://docs.aws.amazon.com/polly/latest/dg/API_DescribeVoices.html">DescribeVoices</a> operation for the <code>LanguageCode</code> parameter. For example, if no language code is specified, Aditi will use Indian English rather than Hindi.</p>',
        }),
    ).exactOptional(),
    LexiconNames: LexiconNameListSchema.and(
      z
        .any()
        .openapi({
          description:
            'List of one or more pronunciation lexicon names you want the service to apply during synthesis. Lexicons are applied only if the language of the lexicon is the same as the language of the voice. ',
        }),
    ).exactOptional(),
    OutputFormat: OutputFormatSchema.and(
      z
        .any()
        .openapi({
          description:
            'The format in which the returned output will be encoded. For audio stream, this will be mp3, ogg_vorbis, or pcm. For speech marks, this will be json. ',
        }),
    ),
    OutputS3BucketName: OutputS3BucketNameSchema.and(
      z
        .any()
        .openapi({ description: 'Amazon S3 bucket name to which the output file will be saved.' }),
    ),
    OutputS3KeyPrefix: OutputS3KeyPrefixSchema.and(
      z.any().openapi({ description: 'The Amazon S3 key prefix for the output speech file.' }),
    ).exactOptional(),
    SampleRate: SampleRateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The audio frequency specified in Hz.</p> <p>The valid values for mp3 and ogg_vorbis are "8000", "16000", "22050", and "24000". The default value for standard voices is "22050". The default value for neural voices is "24000".</p> <p>Valid values for pcm are "8000" and "16000" The default value is "16000". </p>',
        }),
    ).exactOptional(),
    SnsTopicArn: SnsTopicArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'ARN for the SNS topic optionally used for providing status notification for a speech synthesis task.',
        }),
    ).exactOptional(),
    SpeechMarkTypes: SpeechMarkTypeListSchema.and(
      z.any().openapi({ description: 'The type of speech marks returned for the input text.' }),
    ).exactOptional(),
    Text: TextSchema.and(
      z
        .any()
        .openapi({
          description:
            'The input text to synthesize. If you specify ssml as the TextType, follow the SSML format for the input text. ',
        }),
    ),
    TextType: TextTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the input text is plain text or SSML. The default value is plain text. ',
        }),
    ).exactOptional(),
    VoiceId: VoiceIdSchema.and(
      z.any().openapi({ description: 'Voice ID to use for the synthesis. ' }),
    ),
  })
  .openapi({
    required: ['OutputFormat', 'OutputS3BucketName', 'Text', 'VoiceId'],
    title: 'StartSpeechSynthesisTaskInput',
  })
  .openapi('StartSpeechSynthesisTaskInput')

const SynthesizeSpeechInputSchema = z
  .object({
    Engine: EngineSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the engine (<code>standard</code> or <code>neural</code>) for Amazon Polly to use when processing input text for speech synthesis. For information on Amazon Polly voices and which voices are available in standard-only, NTTS-only, and both standard and NTTS formats, see <a href="https://docs.aws.amazon.com/polly/latest/dg/voicelist.html">Available Voices</a>.</p> <p> <b>NTTS-only voices</b> </p> <p>When using NTTS-only voices such as Kevin (en-US), this parameter is required and must be set to <code>neural</code>. If the engine is not specified, or is set to <code>standard</code>, this will result in an error. </p> <p>Type: String</p> <p>Valid Values: <code>standard</code> | <code>neural</code> </p> <p>Required: Yes</p> <p> <b>Standard voices</b> </p> <p>For standard voices, this is not required; the engine parameter defaults to <code>standard</code>. If the engine is not specified, or is set to <code>standard</code> and an NTTS-only voice is selected, this will result in an error. </p>',
        }),
    ).exactOptional(),
    LanguageCode: LanguageCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Optional language code for the Synthesize Speech request. This is only necessary if using a bilingual voice, such as Aditi, which can be used for either Indian English (en-IN) or Hindi (hi-IN). </p> <p>If a bilingual voice is used and no language code is specified, Amazon Polly uses the default language of the bilingual voice. The default language for any voice is the one returned by the <a href="https://docs.aws.amazon.com/polly/latest/dg/API_DescribeVoices.html">DescribeVoices</a> operation for the <code>LanguageCode</code> parameter. For example, if no language code is specified, Aditi will use Indian English rather than Hindi.</p>',
        }),
    ).exactOptional(),
    LexiconNames: LexiconNameListSchema.and(
      z
        .any()
        .openapi({
          description:
            'List of one or more pronunciation lexicon names you want the service to apply during synthesis. Lexicons are applied only if the language of the lexicon is the same as the language of the voice. For information about storing lexicons, see <a href="https://docs.aws.amazon.com/polly/latest/dg/API_PutLexicon.html">PutLexicon</a>.',
        }),
    ).exactOptional(),
    OutputFormat: OutputFormatSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The format in which the returned output will be encoded. For audio stream, this will be mp3, ogg_vorbis, or pcm. For speech marks, this will be json. </p> <p>When pcm is used, the content returned is audio/pcm in a signed 16-bit, 1 channel (mono), little-endian format. </p>',
        }),
    ),
    SampleRate: SampleRateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The audio frequency specified in Hz.</p> <p>The valid values for mp3 and ogg_vorbis are "8000", "16000", "22050", and "24000". The default value for standard voices is "22050". The default value for neural voices is "24000".</p> <p>Valid values for pcm are "8000" and "16000" The default value is "16000". </p>',
        }),
    ).exactOptional(),
    SpeechMarkTypes: SpeechMarkTypeListSchema.and(
      z.any().openapi({ description: 'The type of speech marks returned for the input text.' }),
    ).exactOptional(),
    Text: TextSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Input text to synthesize. If you specify <code>ssml</code> as the <code>TextType</code>, follow the SSML format for the input text. ',
        }),
    ),
    TextType: TextTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies whether the input text is plain text or SSML. The default value is plain text. For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/ssml.html">Using SSML</a>.',
        }),
    ).exactOptional(),
    VoiceId: VoiceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Voice ID to use for the synthesis. You can get a list of available voice IDs by calling the <a href="https://docs.aws.amazon.com/polly/latest/dg/API_DescribeVoices.html">DescribeVoices</a> operation. ',
        }),
    ),
  })
  .openapi({ required: ['OutputFormat', 'Text', 'VoiceId'], title: 'SynthesizeSpeechInput' })
  .openapi('SynthesizeSpeechInput')

const XAmzContentSha256ParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-Content-Sha256',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const XAmzDateParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Date', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzAlgorithmParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Algorithm', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzCredentialParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Credential', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzSecurityTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-Security-Token',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const XAmzSignatureParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Signature', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzSignedHeadersParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-SignedHeaders',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const HmacSecurityScheme = {
  type: 'apiKey',
  name: 'Authorization',
  in: 'header',
  description: 'Amazon Signature authorization v4',
  'x-amazon-apigateway-authtype': 'awsSigv4',
}

export const getV1LexiconsLexiconNameRoute = createRoute({
  method: 'get',
  path: '/v1/lexicons/{LexiconName}',
  description:
    'Returns the content of the specified pronunciation lexicon stored in an Amazon Web Services Region. For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html">Managing Lexicons</a>.',
  operationId: 'GetLexicon',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      LexiconName: z
        .string()
        .regex(/[0-9A-Za-z]{1,20}/)
        .openapi({
          param: {
            name: 'LexiconName',
            in: 'path',
            required: true,
            description: 'Name of the lexicon.',
            schema: { type: 'string', pattern: '[0-9A-Za-z]{1,20}' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetLexiconOutputSchema } },
    },
    480: {
      description: 'LexiconNotFoundException',
      content: { 'application/json': { schema: LexiconNotFoundExceptionSchema } },
    },
    481: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const putV1LexiconsLexiconNameRoute = createRoute({
  method: 'put',
  path: '/v1/lexicons/{LexiconName}',
  description:
    '<p>Stores a pronunciation lexicon in an Amazon Web Services Region. If a lexicon with the same name already exists in the region, it is overwritten by the new lexicon. Lexicon operations have eventual consistency, therefore, it might take some time before the lexicon is available to the SynthesizeSpeech operation.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html">Managing Lexicons</a>.</p>',
  operationId: 'PutLexicon',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      LexiconName: z
        .string()
        .regex(/[0-9A-Za-z]{1,20}/)
        .openapi({
          param: {
            name: 'LexiconName',
            in: 'path',
            required: true,
            description:
              'Name of the lexicon. The name must follow the regular express format [0-9A-Za-z]{1,20}. That is, the name is a case-sensitive alphanumeric string up to 20 characters long. ',
            schema: { type: 'string', pattern: '[0-9A-Za-z]{1,20}' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Content: z
                .string()
                .openapi({ description: 'Content of the PLS lexicon as string data.' }),
            })
            .openapi({ required: ['Content'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutLexiconOutputSchema } },
    },
    480: {
      description: 'InvalidLexiconException',
      content: { 'application/json': { schema: InvalidLexiconExceptionSchema } },
    },
    481: {
      description: 'UnsupportedPlsAlphabetException',
      content: { 'application/json': { schema: UnsupportedPlsAlphabetExceptionSchema } },
    },
    482: {
      description: 'UnsupportedPlsLanguageException',
      content: { 'application/json': { schema: UnsupportedPlsLanguageExceptionSchema } },
    },
    483: {
      description: 'LexiconSizeExceededException',
      content: { 'application/json': { schema: LexiconSizeExceededExceptionSchema } },
    },
    484: {
      description: 'MaxLexemeLengthExceededException',
      content: { 'application/json': { schema: MaxLexemeLengthExceededExceptionSchema } },
    },
    485: {
      description: 'MaxLexiconsNumberExceededException',
      content: { 'application/json': { schema: MaxLexiconsNumberExceededExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const deleteV1LexiconsLexiconNameRoute = createRoute({
  method: 'delete',
  path: '/v1/lexicons/{LexiconName}',
  description:
    '<p>Deletes the specified pronunciation lexicon stored in an Amazon Web Services Region. A lexicon which has been deleted is not available for speech synthesis, nor is it possible to retrieve it using either the <code>GetLexicon</code> or <code>ListLexicon</code> APIs.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html">Managing Lexicons</a>.</p>',
  operationId: 'DeleteLexicon',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      LexiconName: z
        .string()
        .regex(/[0-9A-Za-z]{1,20}/)
        .openapi({
          param: {
            name: 'LexiconName',
            in: 'path',
            required: true,
            description:
              'The name of the lexicon to delete. Must be an existing lexicon in the region.',
            schema: { type: 'string', pattern: '[0-9A-Za-z]{1,20}' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteLexiconOutputSchema } },
    },
    480: {
      description: 'LexiconNotFoundException',
      content: { 'application/json': { schema: LexiconNotFoundExceptionSchema } },
    },
    481: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const getV1VoicesRoute = createRoute({
  method: 'get',
  path: '/v1/voices',
  description:
    '<p>Returns the list of voices that are available for use when requesting speech synthesis. Each voice speaks a specified language, is either male or female, and is identified by an ID, which is the ASCII version of the voice name. </p> <p>When synthesizing speech ( <code>SynthesizeSpeech</code> ), you provide the voice ID for the voice you want from the list of voices returned by <code>DescribeVoices</code>.</p> <p>For example, you want your news reader application to read news in a specific language, but giving a user the option to choose the voice. Using the <code>DescribeVoices</code> operation you can provide the user with a list of available voices to select from.</p> <p> You can optionally specify a language code to filter the available voices. For example, if you specify <code>en-US</code>, the operation returns a list of all available US English voices. </p> <p>This operation requires permissions to perform the <code>polly:DescribeVoices</code> action.</p>',
  operationId: 'DescribeVoices',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Engine: z
        .enum(['standard', 'neural'])
        .exactOptional()
        .openapi({
          param: {
            name: 'Engine',
            in: 'query',
            required: false,
            description:
              'Specifies the engine (<code>standard</code> or <code>neural</code>) used by Amazon Polly when processing input text for speech synthesis. ',
            schema: { type: 'string', enum: ['standard', 'neural'] },
          },
        }),
      LanguageCode: z
        .enum([
          'arb',
          'cmn-CN',
          'cy-GB',
          'da-DK',
          'de-DE',
          'en-AU',
          'en-GB',
          'en-GB-WLS',
          'en-IN',
          'en-US',
          'es-ES',
          'es-MX',
          'es-US',
          'fr-CA',
          'fr-FR',
          'is-IS',
          'it-IT',
          'ja-JP',
          'hi-IN',
          'ko-KR',
          'nb-NO',
          'nl-NL',
          'pl-PL',
          'pt-BR',
          'pt-PT',
          'ro-RO',
          'ru-RU',
          'sv-SE',
          'tr-TR',
          'en-NZ',
          'en-ZA',
          'ca-ES',
          'de-AT',
          'yue-CN',
          'ar-AE',
          'fi-FI',
          'en-IE',
          'nl-BE',
          'fr-BE',
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'LanguageCode',
            in: 'query',
            required: false,
            description:
              " The language identification tag (ISO 639 code for the language name-ISO 3166 country code) for filtering the list of voices returned. If you don't specify this optional parameter, all available voices are returned. ",
            schema: {
              type: 'string',
              enum: [
                'arb',
                'cmn-CN',
                'cy-GB',
                'da-DK',
                'de-DE',
                'en-AU',
                'en-GB',
                'en-GB-WLS',
                'en-IN',
                'en-US',
                'es-ES',
                'es-MX',
                'es-US',
                'fr-CA',
                'fr-FR',
                'is-IS',
                'it-IT',
                'ja-JP',
                'hi-IN',
                'ko-KR',
                'nb-NO',
                'nl-NL',
                'pl-PL',
                'pt-BR',
                'pt-PT',
                'ro-RO',
                'ru-RU',
                'sv-SE',
                'tr-TR',
                'en-NZ',
                'en-ZA',
                'ca-ES',
                'de-AT',
                'yue-CN',
                'ar-AE',
                'fi-FI',
                'en-IE',
                'nl-BE',
                'fr-BE',
              ],
            },
          },
        }),
      IncludeAdditionalLanguageCodes: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'IncludeAdditionalLanguageCodes',
            in: 'query',
            required: false,
            description:
              'Boolean value indicating whether to return any bilingual voices that use the specified language as an additional language. For instance, if you request all languages that use US English (es-US), and there is an Italian voice that speaks both Italian (it-IT) and US English, that voice will be included if you specify <code>yes</code> but not if you specify <code>no</code>.',
            schema: { type: 'boolean' },
          },
        }),
      NextToken: z
        .string()
        .min(0)
        .max(4096)
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            required: false,
            description:
              'An opaque pagination token returned from the previous <code>DescribeVoices</code> operation. If present, this indicates where to continue the listing.',
            schema: { type: 'string', minLength: 0, maxLength: 4096 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeVoicesOutputSchema } },
    },
    480: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    481: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const getV1SynthesisTasksTaskIdRoute = createRoute({
  method: 'get',
  path: '/v1/synthesisTasks/{TaskId}',
  description:
    'Retrieves a specific SpeechSynthesisTask object based on its TaskID. This object contains information about the given speech synthesis task, including the status of the task, and a link to the S3 bucket containing the output of the task.',
  operationId: 'GetSpeechSynthesisTask',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      TaskId: z
        .string()
        .regex(/^[a-zA-Z0-9_-]{1,100}$/)
        .openapi({
          param: {
            name: 'TaskId',
            in: 'path',
            required: true,
            description: 'The Amazon Polly generated identifier for a speech synthesis task.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9_-]{1,100}$' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetSpeechSynthesisTaskOutputSchema } },
    },
    480: {
      description: 'InvalidTaskIdException',
      content: { 'application/json': { schema: InvalidTaskIdExceptionSchema } },
    },
    481: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
    482: {
      description: 'SynthesisTaskNotFoundException',
      content: { 'application/json': { schema: SynthesisTaskNotFoundExceptionSchema } },
    },
  },
})

export const getV1LexiconsRoute = createRoute({
  method: 'get',
  path: '/v1/lexicons',
  description:
    'Returns a list of pronunciation lexicons stored in an Amazon Web Services Region. For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html">Managing Lexicons</a>.',
  operationId: 'ListLexicons',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      NextToken: z
        .string()
        .min(0)
        .max(4096)
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            required: false,
            description:
              'An opaque pagination token returned from previous <code>ListLexicons</code> operation. If present, indicates where to continue the list of lexicons.',
            schema: { type: 'string', minLength: 0, maxLength: 4096 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListLexiconsOutputSchema } },
    },
    480: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    481: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const getV1SynthesisTasksRoute = createRoute({
  method: 'get',
  path: '/v1/synthesisTasks',
  description:
    'Returns a list of SpeechSynthesisTask objects ordered by their creation date. This operation can filter the tasks by their status, for example, allowing users to list only tasks that are completed.',
  operationId: 'ListSpeechSynthesisTasks',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      MaxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            required: false,
            description: 'Maximum number of speech synthesis tasks returned in a List operation.',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
      NextToken: z
        .string()
        .min(0)
        .max(4096)
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            required: false,
            description:
              'The pagination token to use in the next request to continue the listing of speech synthesis tasks. ',
            schema: { type: 'string', minLength: 0, maxLength: 4096 },
          },
        }),
      Status: z
        .enum(['scheduled', 'inProgress', 'completed', 'failed'])
        .exactOptional()
        .openapi({
          param: {
            name: 'Status',
            in: 'query',
            required: false,
            description: 'Status of the speech synthesis tasks returned in a List operation',
            schema: { type: 'string', enum: ['scheduled', 'inProgress', 'completed', 'failed'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListSpeechSynthesisTasksOutputSchema } },
    },
    480: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    481: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const postV1SynthesisTasksRoute = createRoute({
  method: 'post',
  path: '/v1/synthesisTasks',
  description:
    'Allows the creation of an asynchronous synthesis task, by starting a new <code>SpeechSynthesisTask</code>. This operation requires all the standard information needed for speech synthesis, plus the name of an Amazon S3 bucket for the service to store the output of the synthesis task and two optional parameters (<code>OutputS3KeyPrefix</code> and <code>SnsTopicArn</code>). Once the synthesis task is created, this operation will return a <code>SpeechSynthesisTask</code> object, which will include an identifier of this task as well as the current status. The <code>SpeechSynthesisTask</code> object is available for 72 hours after starting the asynchronous synthesis task.',
  operationId: 'StartSpeechSynthesisTask',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Engine: z
                .enum(['standard', 'neural'])
                .exactOptional()
                .openapi({
                  description:
                    'Specifies the engine (<code>standard</code> or <code>neural</code>) for Amazon Polly to use when processing input text for speech synthesis. Using a voice that is not supported for the engine selected will result in an error.',
                }),
              LanguageCode: z
                .enum([
                  'arb',
                  'cmn-CN',
                  'cy-GB',
                  'da-DK',
                  'de-DE',
                  'en-AU',
                  'en-GB',
                  'en-GB-WLS',
                  'en-IN',
                  'en-US',
                  'es-ES',
                  'es-MX',
                  'es-US',
                  'fr-CA',
                  'fr-FR',
                  'is-IS',
                  'it-IT',
                  'ja-JP',
                  'hi-IN',
                  'ko-KR',
                  'nb-NO',
                  'nl-NL',
                  'pl-PL',
                  'pt-BR',
                  'pt-PT',
                  'ro-RO',
                  'ru-RU',
                  'sv-SE',
                  'tr-TR',
                  'en-NZ',
                  'en-ZA',
                  'ca-ES',
                  'de-AT',
                  'yue-CN',
                  'ar-AE',
                  'fi-FI',
                  'en-IE',
                  'nl-BE',
                  'fr-BE',
                ])
                .exactOptional()
                .openapi({
                  description:
                    '<p>Optional language code for the Speech Synthesis request. This is only necessary if using a bilingual voice, such as Aditi, which can be used for either Indian English (en-IN) or Hindi (hi-IN). </p> <p>If a bilingual voice is used and no language code is specified, Amazon Polly uses the default language of the bilingual voice. The default language for any voice is the one returned by the <a href="https://docs.aws.amazon.com/polly/latest/dg/API_DescribeVoices.html">DescribeVoices</a> operation for the <code>LanguageCode</code> parameter. For example, if no language code is specified, Aditi will use Indian English rather than Hindi.</p>',
                }),
              LexiconNames: z
                .array(LexiconNameSchema)
                .max(5)
                .exactOptional()
                .openapi({
                  description:
                    'List of one or more pronunciation lexicon names you want the service to apply during synthesis. Lexicons are applied only if the language of the lexicon is the same as the language of the voice. ',
                }),
              OutputFormat: z
                .enum(['json', 'mp3', 'ogg_vorbis', 'pcm'])
                .openapi({
                  description:
                    'The format in which the returned output will be encoded. For audio stream, this will be mp3, ogg_vorbis, or pcm. For speech marks, this will be json. ',
                }),
              OutputS3BucketName: z
                .string()
                .regex(/^[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9]$/)
                .openapi({
                  description: 'Amazon S3 bucket name to which the output file will be saved.',
                }),
              OutputS3KeyPrefix: z
                .string()
                .regex(/^[0-9a-zA-Z\/\!\-_\.\*\'\(\):;\$@=+\,\?&]{0,800}$/)
                .exactOptional()
                .openapi({ description: 'The Amazon S3 key prefix for the output speech file.' }),
              SampleRate: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '<p>The audio frequency specified in Hz.</p> <p>The valid values for mp3 and ogg_vorbis are "8000", "16000", "22050", and "24000". The default value for standard voices is "22050". The default value for neural voices is "24000".</p> <p>Valid values for pcm are "8000" and "16000" The default value is "16000". </p>',
                }),
              SnsTopicArn: z
                .string()
                .regex(
                  /^arn:aws(-(cn|iso(-b)?|us-gov))?:sns:[a-z0-9_-]{1,50}:\d{12}:[a-zA-Z0-9_-]{1,256}$/,
                )
                .exactOptional()
                .openapi({
                  description:
                    'ARN for the SNS topic optionally used for providing status notification for a speech synthesis task.',
                }),
              SpeechMarkTypes: z
                .array(SpeechMarkTypeSchema)
                .max(4)
                .exactOptional()
                .openapi({ description: 'The type of speech marks returned for the input text.' }),
              Text: z
                .string()
                .openapi({
                  description:
                    'The input text to synthesize. If you specify ssml as the TextType, follow the SSML format for the input text. ',
                }),
              TextType: z
                .enum(['ssml', 'text'])
                .exactOptional()
                .openapi({
                  description:
                    'Specifies whether the input text is plain text or SSML. The default value is plain text. ',
                }),
              VoiceId: z
                .enum([
                  'Aditi',
                  'Amy',
                  'Astrid',
                  'Bianca',
                  'Brian',
                  'Camila',
                  'Carla',
                  'Carmen',
                  'Celine',
                  'Chantal',
                  'Conchita',
                  'Cristiano',
                  'Dora',
                  'Emma',
                  'Enrique',
                  'Ewa',
                  'Filiz',
                  'Gabrielle',
                  'Geraint',
                  'Giorgio',
                  'Gwyneth',
                  'Hans',
                  'Ines',
                  'Ivy',
                  'Jacek',
                  'Jan',
                  'Joanna',
                  'Joey',
                  'Justin',
                  'Karl',
                  'Kendra',
                  'Kevin',
                  'Kimberly',
                  'Lea',
                  'Liv',
                  'Lotte',
                  'Lucia',
                  'Lupe',
                  'Mads',
                  'Maja',
                  'Marlene',
                  'Mathieu',
                  'Matthew',
                  'Maxim',
                  'Mia',
                  'Miguel',
                  'Mizuki',
                  'Naja',
                  'Nicole',
                  'Olivia',
                  'Penelope',
                  'Raveena',
                  'Ricardo',
                  'Ruben',
                  'Russell',
                  'Salli',
                  'Seoyeon',
                  'Takumi',
                  'Tatyana',
                  'Vicki',
                  'Vitoria',
                  'Zeina',
                  'Zhiyu',
                  'Aria',
                  'Ayanda',
                  'Arlet',
                  'Hannah',
                  'Arthur',
                  'Daniel',
                  'Liam',
                  'Pedro',
                  'Kajal',
                  'Hiujin',
                  'Laura',
                  'Elin',
                  'Ida',
                  'Suvi',
                  'Ola',
                  'Hala',
                  'Andres',
                  'Sergio',
                  'Remi',
                  'Adriano',
                  'Thiago',
                  'Ruth',
                  'Stephen',
                  'Kazuha',
                  'Tomoko',
                  'Niamh',
                  'Sofie',
                  'Lisa',
                  'Isabelle',
                ])
                .openapi({ description: 'Voice ID to use for the synthesis. ' }),
            })
            .openapi({ required: ['OutputFormat', 'OutputS3BucketName', 'Text', 'VoiceId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartSpeechSynthesisTaskOutputSchema } },
    },
    480: {
      description: 'TextLengthExceededException',
      content: { 'application/json': { schema: TextLengthExceededExceptionSchema } },
    },
    481: {
      description: 'InvalidS3BucketException',
      content: { 'application/json': { schema: InvalidS3BucketExceptionSchema } },
    },
    482: {
      description: 'InvalidS3KeyException',
      content: { 'application/json': { schema: InvalidS3KeyExceptionSchema } },
    },
    483: {
      description: 'InvalidSampleRateException',
      content: { 'application/json': { schema: InvalidSampleRateExceptionSchema } },
    },
    484: {
      description: 'InvalidSnsTopicArnException',
      content: { 'application/json': { schema: InvalidSnsTopicArnExceptionSchema } },
    },
    485: {
      description: 'InvalidSsmlException',
      content: { 'application/json': { schema: InvalidSsmlExceptionSchema } },
    },
    486: {
      description: 'EngineNotSupportedException',
      content: { 'application/json': { schema: EngineNotSupportedExceptionSchema } },
    },
    487: {
      description: 'LexiconNotFoundException',
      content: { 'application/json': { schema: LexiconNotFoundExceptionSchema } },
    },
    488: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
    489: {
      description: 'MarksNotSupportedForFormatException',
      content: { 'application/json': { schema: MarksNotSupportedForFormatExceptionSchema } },
    },
    490: {
      description: 'SsmlMarksNotSupportedForTextTypeException',
      content: { 'application/json': { schema: SsmlMarksNotSupportedForTextTypeExceptionSchema } },
    },
    491: {
      description: 'LanguageNotSupportedException',
      content: { 'application/json': { schema: LanguageNotSupportedExceptionSchema } },
    },
  },
})

export const postV1SpeechRoute = createRoute({
  method: 'post',
  path: '/v1/speech',
  description:
    'Synthesizes UTF-8 input, plain text or SSML, to a stream of bytes. SSML input must be valid, well-formed SSML. Some alphabets might not be available with all the voices (for example, Cyrillic might not be read at all by English voices) unless phoneme mapping is used. For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/how-text-to-speech-works.html">How it Works</a>.',
  operationId: 'SynthesizeSpeech',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Engine: z
                .enum(['standard', 'neural'])
                .exactOptional()
                .openapi({
                  description:
                    '<p>Specifies the engine (<code>standard</code> or <code>neural</code>) for Amazon Polly to use when processing input text for speech synthesis. For information on Amazon Polly voices and which voices are available in standard-only, NTTS-only, and both standard and NTTS formats, see <a href="https://docs.aws.amazon.com/polly/latest/dg/voicelist.html">Available Voices</a>.</p> <p> <b>NTTS-only voices</b> </p> <p>When using NTTS-only voices such as Kevin (en-US), this parameter is required and must be set to <code>neural</code>. If the engine is not specified, or is set to <code>standard</code>, this will result in an error. </p> <p>Type: String</p> <p>Valid Values: <code>standard</code> | <code>neural</code> </p> <p>Required: Yes</p> <p> <b>Standard voices</b> </p> <p>For standard voices, this is not required; the engine parameter defaults to <code>standard</code>. If the engine is not specified, or is set to <code>standard</code> and an NTTS-only voice is selected, this will result in an error. </p>',
                }),
              LanguageCode: z
                .enum([
                  'arb',
                  'cmn-CN',
                  'cy-GB',
                  'da-DK',
                  'de-DE',
                  'en-AU',
                  'en-GB',
                  'en-GB-WLS',
                  'en-IN',
                  'en-US',
                  'es-ES',
                  'es-MX',
                  'es-US',
                  'fr-CA',
                  'fr-FR',
                  'is-IS',
                  'it-IT',
                  'ja-JP',
                  'hi-IN',
                  'ko-KR',
                  'nb-NO',
                  'nl-NL',
                  'pl-PL',
                  'pt-BR',
                  'pt-PT',
                  'ro-RO',
                  'ru-RU',
                  'sv-SE',
                  'tr-TR',
                  'en-NZ',
                  'en-ZA',
                  'ca-ES',
                  'de-AT',
                  'yue-CN',
                  'ar-AE',
                  'fi-FI',
                  'en-IE',
                  'nl-BE',
                  'fr-BE',
                ])
                .exactOptional()
                .openapi({
                  description:
                    '<p>Optional language code for the Synthesize Speech request. This is only necessary if using a bilingual voice, such as Aditi, which can be used for either Indian English (en-IN) or Hindi (hi-IN). </p> <p>If a bilingual voice is used and no language code is specified, Amazon Polly uses the default language of the bilingual voice. The default language for any voice is the one returned by the <a href="https://docs.aws.amazon.com/polly/latest/dg/API_DescribeVoices.html">DescribeVoices</a> operation for the <code>LanguageCode</code> parameter. For example, if no language code is specified, Aditi will use Indian English rather than Hindi.</p>',
                }),
              LexiconNames: z
                .array(LexiconNameSchema)
                .max(5)
                .exactOptional()
                .openapi({
                  description:
                    'List of one or more pronunciation lexicon names you want the service to apply during synthesis. Lexicons are applied only if the language of the lexicon is the same as the language of the voice. For information about storing lexicons, see <a href="https://docs.aws.amazon.com/polly/latest/dg/API_PutLexicon.html">PutLexicon</a>.',
                }),
              OutputFormat: z
                .enum(['json', 'mp3', 'ogg_vorbis', 'pcm'])
                .openapi({
                  description:
                    '<p> The format in which the returned output will be encoded. For audio stream, this will be mp3, ogg_vorbis, or pcm. For speech marks, this will be json. </p> <p>When pcm is used, the content returned is audio/pcm in a signed 16-bit, 1 channel (mono), little-endian format. </p>',
                }),
              SampleRate: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '<p>The audio frequency specified in Hz.</p> <p>The valid values for mp3 and ogg_vorbis are "8000", "16000", "22050", and "24000". The default value for standard voices is "22050". The default value for neural voices is "24000".</p> <p>Valid values for pcm are "8000" and "16000" The default value is "16000". </p>',
                }),
              SpeechMarkTypes: z
                .array(SpeechMarkTypeSchema)
                .max(4)
                .exactOptional()
                .openapi({ description: 'The type of speech marks returned for the input text.' }),
              Text: z
                .string()
                .openapi({
                  description:
                    ' Input text to synthesize. If you specify <code>ssml</code> as the <code>TextType</code>, follow the SSML format for the input text. ',
                }),
              TextType: z
                .enum(['ssml', 'text'])
                .exactOptional()
                .openapi({
                  description:
                    ' Specifies whether the input text is plain text or SSML. The default value is plain text. For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/ssml.html">Using SSML</a>.',
                }),
              VoiceId: z
                .enum([
                  'Aditi',
                  'Amy',
                  'Astrid',
                  'Bianca',
                  'Brian',
                  'Camila',
                  'Carla',
                  'Carmen',
                  'Celine',
                  'Chantal',
                  'Conchita',
                  'Cristiano',
                  'Dora',
                  'Emma',
                  'Enrique',
                  'Ewa',
                  'Filiz',
                  'Gabrielle',
                  'Geraint',
                  'Giorgio',
                  'Gwyneth',
                  'Hans',
                  'Ines',
                  'Ivy',
                  'Jacek',
                  'Jan',
                  'Joanna',
                  'Joey',
                  'Justin',
                  'Karl',
                  'Kendra',
                  'Kevin',
                  'Kimberly',
                  'Lea',
                  'Liv',
                  'Lotte',
                  'Lucia',
                  'Lupe',
                  'Mads',
                  'Maja',
                  'Marlene',
                  'Mathieu',
                  'Matthew',
                  'Maxim',
                  'Mia',
                  'Miguel',
                  'Mizuki',
                  'Naja',
                  'Nicole',
                  'Olivia',
                  'Penelope',
                  'Raveena',
                  'Ricardo',
                  'Ruben',
                  'Russell',
                  'Salli',
                  'Seoyeon',
                  'Takumi',
                  'Tatyana',
                  'Vicki',
                  'Vitoria',
                  'Zeina',
                  'Zhiyu',
                  'Aria',
                  'Ayanda',
                  'Arlet',
                  'Hannah',
                  'Arthur',
                  'Daniel',
                  'Liam',
                  'Pedro',
                  'Kajal',
                  'Hiujin',
                  'Laura',
                  'Elin',
                  'Ida',
                  'Suvi',
                  'Ola',
                  'Hala',
                  'Andres',
                  'Sergio',
                  'Remi',
                  'Adriano',
                  'Thiago',
                  'Ruth',
                  'Stephen',
                  'Kazuha',
                  'Tomoko',
                  'Niamh',
                  'Sofie',
                  'Lisa',
                  'Isabelle',
                ])
                .openapi({
                  description:
                    ' Voice ID to use for the synthesis. You can get a list of available voice IDs by calling the <a href="https://docs.aws.amazon.com/polly/latest/dg/API_DescribeVoices.html">DescribeVoices</a> operation. ',
                }),
            })
            .openapi({ required: ['OutputFormat', 'Text', 'VoiceId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SynthesizeSpeechOutputSchema } },
    },
    480: {
      description: 'TextLengthExceededException',
      content: { 'application/json': { schema: TextLengthExceededExceptionSchema } },
    },
    481: {
      description: 'InvalidSampleRateException',
      content: { 'application/json': { schema: InvalidSampleRateExceptionSchema } },
    },
    482: {
      description: 'InvalidSsmlException',
      content: { 'application/json': { schema: InvalidSsmlExceptionSchema } },
    },
    483: {
      description: 'LexiconNotFoundException',
      content: { 'application/json': { schema: LexiconNotFoundExceptionSchema } },
    },
    484: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
    485: {
      description: 'MarksNotSupportedForFormatException',
      content: { 'application/json': { schema: MarksNotSupportedForFormatExceptionSchema } },
    },
    486: {
      description: 'SsmlMarksNotSupportedForTextTypeException',
      content: { 'application/json': { schema: SsmlMarksNotSupportedForTextTypeExceptionSchema } },
    },
    487: {
      description: 'LanguageNotSupportedException',
      content: { 'application/json': { schema: LanguageNotSupportedExceptionSchema } },
    },
    488: {
      description: 'EngineNotSupportedException',
      content: { 'application/json': { schema: EngineNotSupportedExceptionSchema } },
    },
  },
})
