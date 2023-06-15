import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import API from "../axios/API";
import Swal from "sweetalert2";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const schema = Yup.object({
  namaPenginapan: Yup.string().required("Nama penginapan harus diisi"),
  harga: Yup.number().required("Harga harus diisi"),
  kapasitas: Yup.number().required("Kapasitas harus diisi"),
  deskripsi: Yup.string().required("Deskripsi harus diisi"),
  fasilitas: Yup.array().min(1, "Pilih minimal satu fasilitas"),
  kota: Yup.string().required("Kota harus dipilih"),
  alamat: Yup.string().required("Alamat harus diisi"),
  gambar: Yup.mixed().required("Upload gambar penginapan"),
});

const cities = ["Jakarta", "Surabaya", "Bandung", "Yogyakarta", "Bali"];

const Sewakan: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      namaPenginapan: "",
      harga: "",
      kapasitas: "",
      deskripsi: "",
      fasilitas: [],
      kota: "",
      alamat: "",
      gambar: undefined,
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append("namaPenginapan", values.namaPenginapan);
      formData.append("harga", values.harga.toString());
      formData.append("kapasitas", values.kapasitas.toString());
      formData.append("deskripsi", values.deskripsi);
      values.fasilitas.forEach((fasilitas: string) => {
        formData.append("fasilitas", fasilitas);
      });
      formData.append("kota", values.kota);
      formData.append("alamat", values.alamat);
      formData.append("gambar", values.gambar);

      try {
        // Panggil API untuk mengirim data ke server
        const response = await API.submitHomeStay(formData);
        console.log(response.data);
        // Menampilkan Swal Alert
        Swal.fire({
          icon: "success",
          title: "Submit Success",
          text: "Penginapan berhasil disubmit",
        }).then(() => {
          // Mengarahkan pengguna kembali ke halaman home
          window.location.replace("/home");
        });
      } catch (error) {
        console.error(error);
        // Lakukan tindakan jika terjadi error, seperti menampilkan pesan error
        Swal.fire({
          icon: "error",
          title: "Submit Error",
          text: "Terjadi kesalahan saat melakukan submit",
        });
      }
    },
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      formik.setFieldValue("gambar", event.target.files[0]);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="bg-white shadow-md p-6 rounded-lg">
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label htmlFor="namaPenginapan" className="block mb-2">
              Nama Penginapan
            </label>
            <input
              id="namaPenginapan"
              name="namaPenginapan"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.namaPenginapan}
              className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-blue-500"
            />
            {formik.touched.namaPenginapan && formik.errors.namaPenginapan && (
              <div className="text-red-500">{formik.errors.namaPenginapan}</div>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="harga" className="block mb-2">
              Harga
            </label>
            <input
              id="harga"
              name="harga"
              type="number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.harga}
              className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-blue-500"
            />
            {formik.touched.harga && formik.errors.harga && (
              <div className="text-red-500">{formik.errors.harga}</div>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="kapasitas" className="block mb-2">
              Kapasitas
            </label>
            <input
              id="kapasitas"
              name="kapasitas"
              type="number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.kapasitas}
              className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-blue-500"
            />
            {formik.touched.kapasitas && formik.errors.kapasitas && (
              <div className="text-red-500">{formik.errors.kapasitas}</div>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="deskripsi" className="block mb-2">
              Deskripsi
            </label>
            <textarea
              id="deskripsi"
              name="deskripsi"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.deskripsi}
              className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-blue-500"
            />
            {formik.touched.deskripsi && formik.errors.deskripsi && (
              <div className="text-red-500">{formik.errors.deskripsi}</div>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-2">Fasilitas</label>
            <div>
              <input
                id="fasilitasTV"
                name="fasilitas"
                type="checkbox"
                value="TV"
                checked={formik.values.fasilitas.includes("TV")}
                onChange={formik.handleChange}
                className="mr-1"
              />
              <label htmlFor="fasilitasTV">TV</label>
            </div>
            <div>
              <input
                id="fasilitasAC"
                name="fasilitas"
                type="checkbox"
                value="AC"
                checked={formik.values.fasilitas.includes("AC")}
                onChange={formik.handleChange}
                className="mr-1"
              />
              <label htmlFor="fasilitasAC">AC</label>
            </div>
            <div>
              <input
                id="fasilitasWIFI"
                name="fasilitas"
                type="checkbox"
                value="WIFI"
                checked={formik.values.fasilitas.includes("WIFI")}
                onChange={formik.handleChange}
                className="mr-1"
              />
              <label htmlFor="fasilitasWIFI">WIFI</label>
            </div>
            <div>
              <input
                id="fasilitasDapur"
                name="fasilitas"
                type="checkbox"
                value="Dapur"
                checked={formik.values.fasilitas.includes("Dapur")}
                onChange={formik.handleChange}
                className="mr-1"
              />
              <label htmlFor="fasilitasDapur">Dapur</label>
            </div>
            <div>
              <input
                id="fasilitasKolamRenang"
                name="fasilitas"
                type="checkbox"
                value="Kolam Renang"
                checked={formik.values.fasilitas.includes("Kolam Renang")}
                onChange={formik.handleChange}
                className="mr-1"
              />
              <label htmlFor="fasilitasKolamRenang">Kolam Renang</label>
            </div>
            {formik.touched.fasilitas && formik.errors.fasilitas && (
              <div className="text-red-500">{formik.errors.fasilitas}</div>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="kota" className="block mb-2">
              Kota
            </label>
            <select
              id="kota"
              name="kota"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.kota}
              className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-blue-500"
            >
              <option value="">Pilih Kota</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            {formik.touched.kota && formik.errors.kota && (
              <div className="text-red-500">{formik.errors.kota}</div>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="alamat" className="block mb-2">
              Alamat
            </label>
            <textarea
              id="alamat"
              name="alamat"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.alamat}
              className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-blue-500"
            />
            {formik.touched.alamat && formik.errors.alamat && (
              <div className="text-red-500">{formik.errors.alamat}</div>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="gambar" className="block mb-2">
              Upload Gambar
            </label>
            <input
              id="gambar"
              name="gambar"
              type="file"
              onChange={handleFileChange}
            />
            {formik.touched.gambar && formik.errors.gambar && (
              <div className="text-red-500">{formik.errors.gambar}</div>
            )}
          </div>
        </form>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          onClick={formik.handleSubmit}
        >
          Submit
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Sewakan;
