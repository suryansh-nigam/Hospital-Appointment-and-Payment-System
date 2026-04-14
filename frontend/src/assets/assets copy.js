import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.png'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Rohan Sharma',
        image: doc1,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Rohan Sharma is a highly dedicated general physician known for their commitment to patient care, preventive strategies, accurate diagnosis, and effective treatments tailored to each individual.',
        fees: 150,
        address: {
            line1: 'Sector 12, Indira Nagar',
            line2: 'Lucknow, Uttar Pradesh'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Neha Singh',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Neha Singh is a highly dedicated gynecologist known for their commitment to patient care, preventive strategies, accurate diagnosis, and effective treatments tailored to each individual.',
        fees: 160,
        address: {
            line1: 'MG Road, Near Civil Lines',
            line2: 'Kanpur, Uttar Pradesh'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Priya Patel',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Priya Patel is a highly dedicated dermatologist known for their commitment to patient care, preventive strategies, accurate diagnosis, and effective treatments tailored to each individual.',
        fees: 130,
        address: {
            line1: 'Navrangpura Main Road',
            line2: 'Ahmedabad, Gujarat'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Arjun Mehta',
        image: doc4,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Arjun Mehta is a highly dedicated pediatrician known for their commitment to patient care, preventive strategies, accurate diagnosis, and effective treatments tailored to each individual.',
        fees: 140,
        address: {
            line1: 'Vashi, Sector 17 Market',
            line2: 'Navi Mumbai, Maharashtra'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Kavita Verma',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Kavita Verma is a highly dedicated neurologist known for their commitment to patient care, preventive strategies, accurate diagnosis, and effective treatments tailored to each individual.',
        fees: 150,
        address: {
            line1: 'Banjara Hills Road No. 2',
            line2: 'Hyderabad, Telangana'
        }
    },
    
    {
        _id: 'doc6',
        name: 'Dr. Ankit Raj',
        image: doc6,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Ankit Raj is a highly dedicated neurologist known for their commitment to patient care, preventive strategies, accurate diagnosis, and effective treatments tailored to each individual.',
        fees: 150,
        address: {
            line1: 'South City, Block C',
            line2: 'Gurugram, Haryana'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Mohit Khanna',
        image: doc7,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Mohit Khanna is a highly dedicated general physician known for their commitment to patient care, preventive strategies, accurate diagnosis, and effective treatments tailored to each individual.',
        fees: 150,
        address: {
            line1: 'Lalbagh, Near Hazratganj',
            line2: 'Lucknow, Uttar Pradesh'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Ishita Kapoor',
        image: doc8,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Ishita Kapoor is a highly dedicated gynecologist known for their commitment to patient care, preventive strategies, accurate diagnosis, and effective treatments tailored to each individual.',
        fees: 160,
        address: {
            line1: 'Sector 18 Market',
            line2: 'Noida, Uttar Pradesh'
        }
    },
   
    {
        _id: 'doc15',
        name: 'Dr. Meera Iyer',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Meera Iyer is a highly dedicated dermatologist known for their commitment to patient care, preventive strategies, accurate diagnosis, and effective treatments tailored to each individual.',
        fees: 130,
        address: {
            line1: 'Anna Nagar, Block B',
            line2: 'Chennai, Tamil Nadu'
        }
    },
];
