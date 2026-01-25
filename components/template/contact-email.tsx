import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Tailwind,
  Hr,
} from "@react-email/components";

interface ClientMailProps {
  name: string;
  email: string;
  message: string;
}

const ClientMailEmail = ({ name, email, message }: ClientMailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New inquiry from {name}</Preview>
      <Tailwind>
        <Body className="bg-gray-50 font-sans">
          <Container className="mx-auto my-8 max-w-2xl">
            {/* Header with gradient accent */}
            <Section className="rounded-t-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-8">
              <Section className="rounded-xl border border-white/20 bg-white/10 p-6">
                <Heading className="m-0 mb-2 text-3xl font-bold text-black">
                  💬 New Contact Inquiry
                </Heading>
                <Text className="m-0 text-sm text-gray-400">
                  Someone reached out through your website
                </Text>
              </Section>
            </Section>

            {/* Main Content Card */}
            <Section className="rounded-b-2xl bg-white p-8 shadow-lg">
              {/* Sender Info Card */}
              <Section className="mb-6 rounded-xl border border-gray-100 bg-gradient-to-br from-gray-50 to-blue-50 p-6">
                <Text className="m-0 mb-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
                  From
                </Text>
                <Section className="mb-2">
                  <Text className="m-0 mb-1 text-lg font-semibold text-gray-900">
                    {name}
                  </Text>
                  <Text className="m-0 text-sm text-gray-600">{email}</Text>
                </Section>
              </Section>

              <Hr className="my-6 border-gray-200" />

              {/* Message Content */}
              <Section className="mb-6">
                <Text className="m-0 mb-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Message
                </Text>
                <Section className="rounded-xl border border-gray-200 bg-gray-50 p-6">
                  <Text className="m-0 whitespace-pre-wrap leading-relaxed text-gray-800">
                    {message}
                  </Text>
                </Section>
              </Section>

              {/* Action Button */}
              <Section className="pb-2 pt-4 text-center">
                <a
                  href={`mailto:${email}`}
                  style={{
                    display: "inline-block",
                    background: "linear-gradient(to right, #2563eb, #9333ea)",
                    color: "#ffffff",
                    fontWeight: "600",
                    padding: "12px 32px",
                    borderRadius: "8px",
                    textDecoration: "none",
                    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  Reply to {name.split(" ")[0]}
                </a>
              </Section>
            </Section>

            {/* Footer */}
            <Section className="mt-6 text-center">
              <Text className="m-0 text-xs text-gray-500">
                📧 Sent via your website contact form
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ClientMailEmail;
