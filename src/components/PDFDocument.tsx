import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: { padding: 30 },
  section: { marginBottom: 10 },
  label: { fontWeight: "bold", marginBottom: 4 },
  value: {},
});

export default function PDFDocument(props: any) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.label}>Name:</Text>
          <Text>{props.name}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Email:</Text>
          <Text>{props.email}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Phone:</Text>
          <Text>{props.phone}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Position:</Text>
          <Text>{props.position}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Description:</Text>
          <Text>{props.description}</Text>
        </View>
      </Page>
    </Document>
  );
}
