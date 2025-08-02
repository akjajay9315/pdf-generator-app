import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: { padding: 30 },
  section: { marginBottom: 12 },
  label: { fontSize: 12, fontWeight: "bold" },
  value: { fontSize: 12, marginBottom: 4 },
});

type PDFProps = {
  name: string;
  email: string;
  phone: string;
  position: string;
  description: string;
};

export default function PDFDocument({ name, email, phone, position, description }: PDFProps) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.value}>{name}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{email}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Phone:</Text>
          <Text style={styles.value}>{phone}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Position:</Text>
          <Text style={styles.value}>{position}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Description:</Text>
          <Text style={styles.value}>{description}</Text>
        </View>
      </Page>
    </Document>
  );
}
