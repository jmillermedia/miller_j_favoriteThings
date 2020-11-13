-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 13, 2020 at 04:16 PM
-- Server version: 5.7.24
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_favorite`
--

-- --------------------------------------------------------

--
-- Table structure for table `tb_favethings`
--

CREATE TABLE `tb_favethings` (
  `ID` int(11) NOT NULL,
  `picture` varchar(15) NOT NULL,
  `thing` varchar(15) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_favethings`
--

INSERT INTO `tb_favethings` (`ID`, `picture`, `thing`, `description`) VALUES
(1, 'pizza.jpg', 'Pizza', 'Pizza is my all time favorite food. It\'s been so since I was a kid! I fondly remember pizza and video game parties with my friends, and still kind of have these kinds of parties with friends... though now it includes beer.'),
(2, 'videoGames.jpg', 'Video Games', 'What\'s better than a night of pizza and video games? I used to watch my older brothers play Nintendo games (they didn\'t let me play). It was fun to watch, but once I started working in my teens I bought my own PC and started gaming on it. I haven\'t stopped since.'),
(3, 'summer.jpg', 'Summer', 'Do I love summer because of how much I loathe winter? Maybe... I  really dislike being cold, but if I think about it, it\'s because of how much I\'m outside in the summer. I enjoy going for easy hikes and taking pictures in nature. It also helps that it\'s light out later.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tb_favethings`
--
ALTER TABLE `tb_favethings`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tb_favethings`
--
ALTER TABLE `tb_favethings`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
