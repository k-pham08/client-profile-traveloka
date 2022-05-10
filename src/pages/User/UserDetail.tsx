import { useState } from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import {
	Paper,
	Button,
	MenuItem,
	Select,
	SelectChangeEvent,
	OutlinedInput,
	InputLabel,
	InputAdornment,
	FormControl,
	TextField,
} from "@mui/material";

export const UserDetail = () => {
	const [date, setDate] = useState<Date | null>(
		new Date("2022-08-18T21:11:54")
	);

	const [values, setValues] = useState({
		amount: "",
		password: "",
		weight: "",
		weightRange: "",
		showPassword: false,
	});

	const handleDateChange = (newValue: Date | null) => {
		setDate(newValue);
	};

	const [gender, setGender] = useState("");

	const handleGenderChange = (event: SelectChangeEvent) => {
		setGender(event.target.value as string);
	};

	return (
		<Paper
			elevation={12}
			sx={{ display: "flex", flexWrap: "wrap", mb: 2 }}
		>
			<h2 style={{ margin: "1rem" }}>Dữ liệu cá nhân</h2>
			<FormControl sx={{ m: 1, width: 1 }}>
				<InputLabel htmlFor="outlined-adornment">
					Tên đầy đủ
				</InputLabel>
				<OutlinedInput
					id="outlined-adornment"
					value={values.amount}
					startAdornment={
						<InputAdornment position="start"></InputAdornment>
					}
					label="Tên đầy đủ"
				/>
			</FormControl>
			<FormControl sx={{ m: 1, width: "25ch" }}>
				<InputLabel id="demo-simple-select-label">
					Giới tính
				</InputLabel>
				<Select
					labelId="gender-select-label"
					id="gender-select"
					label="Giới tính"
					value={gender}
					onChange={handleGenderChange}
				>
					<MenuItem value={10}>Nam</MenuItem>
					<MenuItem value={20}>Nữ</MenuItem>
				</Select>
			</FormControl>
			<FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
				<LocalizationProvider dateAdapter={AdapterDateFns}>
					<DesktopDatePicker
						label="Ngày sinh"
						inputFormat="MM/dd/yyyy"
						value={date}
						onChange={handleDateChange}
						renderInput={(params: any) => (
							<TextField {...params} />
						)}
					/>
				</LocalizationProvider>
			</FormControl>
			<FormControl fullWidth sx={{ m: 1 }}>
				<InputLabel htmlFor="outlined">Địa chỉ</InputLabel>
				<OutlinedInput id="outlined" label="Địa chỉ" />
			</FormControl>
			<FormControl fullWidth sx={{ m: 1, width: "50ch" }}>
				<InputLabel htmlFor="outlined">Email</InputLabel>
				<OutlinedInput id="outlined" label="Email" />
			</FormControl>
			<FormControl fullWidth sx={{ m: 1, width: "40ch" }}>
				<InputLabel htmlFor="outlined">Số điện thoại</InputLabel>
				<OutlinedInput id="outlined" label="Số điện thoại" />
			</FormControl>
			<FormControl fullWidth sx={{ m: 1 }}>
				<Button variant="contained">Lưu</Button>
			</FormControl>
		</Paper>
	);
};
